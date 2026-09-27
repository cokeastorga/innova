'use client';

import { useState, useMemo } from 'react';
import { useQuoteCart } from '@/hooks/useQuoteCart';
import { contactInfo } from '@/data/products';
import './QuoteCart.css';

// Helper to generate years array from range string (e.g. "2005-2024" -> [2024, 2023, ..., 2005])
function getYearsList(rangeStr) {
  const currentYear = new Date().getFullYear();
  if (!rangeStr) {
    return Array.from({ length: 25 }, (_, i) => currentYear - i);
  }
  const match = rangeStr.match(/(\d{4})\s*-\s*(\d{4})/);
  if (match) {
    const start = parseInt(match[1], 10);
    const end = Math.min(parseInt(match[2], 10), currentYear);
    const list = [];
    for (let y = Math.max(start, end); y >= Math.min(start, end); y--) {
      list.push(y);
    }
    return list;
  }
  const single = rangeStr.match(/\d{4}/);
  if (single) {
    return [parseInt(single[0], 10)];
  }
  return Array.from({ length: 25 }, (_, i) => currentYear - i);
}

export default function QuoteCart() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    getWhatsAppMessage, 
    getEmailData 
  } = useQuoteCart();
  
  // State for vehicles of each model group: { [groupKey]: { subVehicles: [ { id, year, customYear, plate } ] } }
  const [vehiclesState, setVehiclesState] = useState({});
  const [notes, setNotes] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  // Group items by vehicle (Brand + Model)
  const vehicleGroups = useMemo(() => {
    const map = new Map();
    items.forEach(item => {
      const brand = item.selectedBrand || 'General';
      const model = item.selectedModel || '';
      const years = item.selectedYears || '';
      const key = `${brand}__${model}`;

      if (!map.has(key)) {
        map.set(key, {
          key,
          brand,
          model,
          yearsRange: years,
          title: brand !== 'General' ? `${brand} ${model}`.trim() : 'Repuestos Generales',
          isGeneral: brand === 'General' && !model,
          items: []
        });
      }
      map.get(key).items.push(item);
    });
    return Array.from(map.values());
  }, [items]);

  if (!isOpen) return null;

  // Add another sub-vehicle (e.g. second Hilux with different year/plate)
  const handleAddSubVehicle = (groupKey) => {
    setVehiclesState(prev => {
      const current = prev[groupKey] || { subVehicles: [{ id: '1', year: '', customYear: '', plate: '' }] };
      const nextId = String(Date.now());
      return {
        ...prev,
        [groupKey]: {
          subVehicles: [
            ...current.subVehicles,
            { id: nextId, year: '', customYear: '', plate: '' }
          ]
        }
      };
    });
  };

  // Remove a sub-vehicle
  const handleRemoveSubVehicle = (groupKey, subVehicleId) => {
    setVehiclesState(prev => {
      const current = prev[groupKey] || { subVehicles: [{ id: '1', year: '', customYear: '', plate: '' }] };
      if (current.subVehicles.length <= 1) return prev;
      return {
        ...prev,
        [groupKey]: {
          subVehicles: current.subVehicles.filter(sv => sv.id !== subVehicleId)
        }
      };
    });
  };

  // Update a field inside a sub-vehicle
  const handleSubVehicleChange = (groupKey, subVehicleId, field, value) => {
    setVehiclesState(prev => {
      const current = prev[groupKey] || { subVehicles: [{ id: '1', year: '', customYear: '', plate: '' }] };
      return {
        ...prev,
        [groupKey]: {
          subVehicles: current.subVehicles.map(sv => {
            if (sv.id === subVehicleId) {
              return { ...sv, [field]: value };
            }
            return sv;
          })
        }
      };
    });

    if (validationErrors[groupKey]) {
      setValidationErrors(prev => {
        const next = { ...prev };
        delete next[groupKey];
        return next;
      });
    }
  };

  // Validate that each vehicle group has at least a Year selected or Patente entered for its primary entry
  const validateForm = () => {
    const errors = {};
    let hasError = false;

    vehicleGroups.forEach(group => {
      if (group.isGeneral) return;

      const data = vehiclesState[group.key] || { subVehicles: [{ id: '1', year: '', customYear: '', plate: '' }] };
      const primary = data.subVehicles[0] || {};
      const year = primary.year === 'otro' ? primary.customYear : primary.year;
      const plate = primary.plate || '';

      const hasYear = Boolean(year && String(year).trim());
      const hasPlate = Boolean(plate && plate.trim());

      if (!hasYear && !hasPlate) {
        errors[group.key] = `Por favor selecciona el año de tu ${group.title}`;
        hasError = true;
      }
    });

    setValidationErrors(errors);
    return !hasError;
  };

  // Prepare structured payload for WhatsApp and Email
  const getStructuredData = () => {
    return vehicleGroups.map(group => {
      const data = vehiclesState[group.key] || { subVehicles: [{ id: '1', year: '', customYear: '', plate: '' }] };
      const subVehiclesList = data.subVehicles.map(sv => ({
        id: sv.id,
        year: sv.year === 'otro' ? sv.customYear : sv.year,
        plate: sv.plate || ''
      }));

      const firstYear = subVehiclesList[0]?.year || '';
      const firstPlate = subVehiclesList[0]?.plate || '';

      return {
        key: group.key,
        title: group.title,
        year: firstYear,
        plate: firstPlate,
        subVehicles: subVehiclesList,
        items: group.items
      };
    });
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;
    const structuredPayload = getStructuredData();
    const text = getWhatsAppMessage(notes, structuredPayload);
    const phoneNumber = contactInfo.whatsapp1.number.replace(/\D/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmail = () => {
    if (!validateForm()) return;
    const structuredPayload = getStructuredData();
    const { subject, body } = getEmailData(notes, structuredPayload);
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleClear = () => {
    clearCart();
    setVehiclesState({});
    setValidationErrors({});
    setNotes('');
  };

  const isMultipleVehicles = vehicleGroups.length > 1;
  const totalUnits = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="quote-cart__overlay" onClick={closeCart} role="dialog" aria-modal="true">
      <div className="quote-cart__panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="quote-cart__header">
          <div>
            <h2 className="quote-cart__title">
              Tu Cotización <span className="quote-cart__count">({totalUnits} {totalUnits === 1 ? 'unidad' : 'unidades'})</span>
            </h2>
            {isMultipleVehicles && (
              <span className="quote-cart__multi-note">
                🚙 {vehicleGroups.length} modelos de camioneta distintos
              </span>
            )}
          </div>
          <button className="quote-cart__close" onClick={closeCart} aria-label="Cerrar cotización">&times;</button>
        </div>

        {/* Content */}
        <div className="quote-cart__content">
          {items.length === 0 ? (
            <div className="quote-cart__empty">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="quote-cart__empty-icon">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <h3 className="quote-cart__empty-text">Tu lista de cotización está vacía</h3>
              <p className="quote-cart__empty-hint">
                Elige tu camioneta en el catálogo y presiona el botón <strong>&ldquo;+ Cotizar&rdquo;</strong> en los repuestos que necesites.
              </p>
            </div>
          ) : (
            <div className="quote-cart__groups">
              {vehicleGroups.map((group, groupIdx) => {
                const groupData = vehiclesState[group.key] || { subVehicles: [{ id: '1', year: '', customYear: '', plate: '' }] };
                const subVehicles = groupData.subVehicles || [{ id: '1', year: '', customYear: '', plate: '' }];
                const yearsList = getYearsList(group.yearsRange);
                const hasError = Boolean(validationErrors[group.key]);

                return (
                  <div 
                    key={group.key} 
                    className={`quote-vehicle-card ${hasError ? 'quote-vehicle-card--error' : ''}`}
                  >
                    {/* Header de Camioneta */}
                    <div className="quote-vehicle-card__header">
                      <div className="quote-vehicle-card__title-row">
                        <span className="quote-vehicle-card__badge">
                          {isMultipleVehicles ? `CAMIONETA ${groupIdx + 1}` : 'VEHÍCULO'}
                        </span>
                        <h3 className="quote-vehicle-card__name">
                          🚙 {group.title}
                        </h3>
                      </div>
                      {group.yearsRange && (
                        <span className="quote-vehicle-card__years">
                          Generación compatible: {group.yearsRange}
                        </span>
                      )}
                    </div>

                    {/* Repuestos para esta camioneta */}
                    <div className="quote-vehicle-card__items">
                      <div className="quote-vehicle-card__items-header">
                        <span className="quote-vehicle-card__items-label">
                          Repuestos ({group.items.length}):
                        </span>
                        <span className="quote-vehicle-card__qty-hint">Puedes ajustar cantidades con [−] y [+]</span>
                      </div>

                      <ul className="quote-vehicle-card__list">
                        {group.items.map((item, itemIdx) => {
                          const itemKey = item.cartItemId || item.id || `item-${itemIdx}`;
                          const qty = item.quantity || 1;

                          return (
                            <li key={itemKey} className="quote-vehicle-card__item">
                              <span className="quote-vehicle-card__item-number">{itemIdx + 1}.</span>
                              <div className="quote-vehicle-card__item-details">
                                <span className="quote-vehicle-card__item-title">{item.name}</span>
                              </div>

                              {/* Stepper de Cantidad */}
                              <div className="quote-item-qty" title="Modificar cantidad">
                                <button 
                                  type="button" 
                                  className="quote-item-qty__btn"
                                  onClick={() => updateQuantity(item.cartItemId || item.id, -1, true)}
                                  aria-label="Disminuir una unidad"
                                >
                                  −
                                </button>
                                <span className="quote-item-qty__val" aria-label={`Cantidad: ${qty}`}>{qty}</span>
                                <button 
                                  type="button" 
                                  className="quote-item-qty__btn"
                                  onClick={() => updateQuantity(item.cartItemId || item.id, 1, true)}
                                  aria-label="Aumentar una unidad"
                                >
                                  +
                                </button>
                              </div>

                              <button 
                                type="button"
                                className="quote-vehicle-card__item-remove"
                                onClick={() => removeItem(item.cartItemId || item.id)}
                                title="Eliminar repuesto"
                                aria-label={`Quitar ${item.name}`}
                              >
                                🗑️
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Selector de Año y Patente (con soporte para múltiples años de la misma camioneta) */}
                    {!group.isGeneral && (
                      <div className="quote-vehicle-card__data-box">
                        {subVehicles.map((sv, svIdx) => (
                          <div key={sv.id} className="quote-subvehicle-row">
                            {subVehicles.length > 1 && (
                              <div className="quote-subvehicle-row__title">
                                <span>🚙 {svIdx + 1}ª Camioneta {group.title}:</span>
                                {svIdx > 0 && (
                                  <button
                                    type="button"
                                    className="quote-subvehicle-row__remove"
                                    onClick={() => handleRemoveSubVehicle(group.key, sv.id)}
                                    title="Quitar esta camioneta adicional"
                                  >
                                    ✕ Quitar
                                  </button>
                                )}
                              </div>
                            )}

                            <div className="quote-vehicle-card__field">
                              <label 
                                htmlFor={`year-${group.key}-${sv.id}`} 
                                className="quote-vehicle-card__label"
                              >
                                <span>📅 Año de tu {subVehicles.length > 1 ? `${svIdx + 1}ª ` : ''}{group.title}:</span>
                                <span className="quote-required-tag">* Requerido</span>
                              </label>
                              <select
                                id={`year-${group.key}-${sv.id}`}
                                className={`quote-vehicle-card__select ${hasError && !sv.year && !sv.plate ? 'quote-vehicle-card__select--error' : ''}`}
                                value={sv.year}
                                onChange={(e) => handleSubVehicleChange(group.key, sv.id, 'year', e.target.value)}
                              >
                                <option value="">-- Toca aquí para elegir el año --</option>
                                {yearsList.map(y => (
                                  <option key={y} value={y}>{y}</option>
                                ))}
                                <option value="otro">Otro año no listado...</option>
                              </select>

                              {sv.year === 'otro' && (
                                <input 
                                  type="number" 
                                  className="quote-vehicle-card__input quote-vehicle-card__input--custom-year"
                                  placeholder="Escribe el año (ej: 2012)"
                                  value={sv.customYear || ''}
                                  onChange={(e) => handleSubVehicleChange(group.key, sv.id, 'customYear', e.target.value)}
                                  min="1980"
                                  max="2030"
                                />
                              )}
                            </div>

                            <div className="quote-vehicle-card__field">
                              <label 
                                htmlFor={`plate-${group.key}-${sv.id}`} 
                                className="quote-vehicle-card__label"
                              >
                                <span>🏷️ Patente {subVehicles.length > 1 ? `de esta ${svIdx + 1}ª camioneta` : ''}:</span>
                                <span className="quote-optional-tag">(Opcional)</span>
                              </label>
                              <input 
                                id={`plate-${group.key}-${sv.id}`}
                                type="text"
                                maxLength={8}
                                className="quote-vehicle-card__input"
                                placeholder="Ej: ABCD12"
                                value={sv.plate}
                                onChange={(e) => handleSubVehicleChange(group.key, sv.id, 'plate', e.target.value.toUpperCase())}
                              />
                            </div>
                          </div>
                        ))}

                        {/* Botón para agregar otra camioneta del mismo modelo con distinto año (ej: Hilux 2024 y Hilux 2022) */}
                        <div className="quote-add-subvehicle-area">
                          <button
                            type="button"
                            className="quote-add-subvehicle-btn"
                            onClick={() => handleAddSubVehicle(group.key)}
                          >
                            ➕ ¿Cotizas para otra {group.title} con diferente año o patente? Toca aquí
                          </button>
                        </div>

                        {hasError && (
                          <div className="quote-vehicle-card__error-msg">
                            ⚠️ Por favor selecciona el año de tu {group.title} para validar compatibilidad.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="quote-cart__footer">
            <div className="quote-cart__notes-box">
              <label htmlFor="quote-notes" className="quote-cart__field-label">
                💬 Consulta o notas adicionales (Opcional):
              </label>
              <textarea 
                id="quote-notes" 
                className="quote-cart__input quote-cart__input--textarea" 
                rows="2" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej: ¿Tienen stock inmediato y despacho a mi ciudad?..."
              ></textarea>
            </div>

            <div className="quote-cart__actions">
              <button 
                type="button"
                className="quote-cart__btn quote-cart__btn--whatsapp" 
                onClick={handleWhatsApp}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
                </svg>
                <span>Cotizar por WhatsApp</span>
              </button>

              <button 
                type="button"
                className="quote-cart__btn quote-cart__btn--email" 
                onClick={handleEmail}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Enviar por Correo</span>
              </button>
            </div>

            <button 
              type="button"
              className="quote-cart__clear" 
              onClick={handleClear}
            >
              Vaciar toda la lista
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
