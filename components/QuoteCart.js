'use client';
import { useState } from 'react';
import { useQuoteCart } from '@/hooks/useQuoteCart';
import { contactInfo } from '@/data/products';
import './QuoteCart.css';

export default function QuoteCart() {
  const { items, isOpen, closeCart, removeItem, clearCart, getWhatsAppMessage, getEmailData } = useQuoteCart();
  const [vehicle, setVehicle] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = getWhatsAppMessage(notes, vehicle);
    const phoneNumber = contactInfo.whatsapp1.number.replace(/\D/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmail = () => {
    const { subject, body } = getEmailData(notes, vehicle);
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="quote-cart__overlay" onClick={closeCart}>
      <div className="quote-cart__panel" onClick={(e) => e.stopPropagation()}>
        <div className="quote-cart__header">
          <h2 className="quote-cart__title">Tu Cotización <span className="quote-cart__count">({items.length})</span></h2>
          <button className="quote-cart__close" onClick={closeCart} aria-label="Cerrar">&times;</button>
        </div>

        <div className="quote-cart__content">
          {items.length === 0 ? (
            <div className="quote-cart__empty">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="quote-cart__empty-icon">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p className="quote-cart__empty-text">Agrega productos para cotizar</p>
            </div>
          ) : (
            <ul className="quote-cart__list">
              {items.map((item, index) => (
                <li key={item.id || `quote-item-${index}`} className="quote-cart__item">
                  <div className="quote-cart__item-info">
                    <h4 className="quote-cart__item-name">{item.name}</h4>
                    {item.compatibleBrands && item.compatibleBrands.length > 0 && (
                      <span className="quote-cart__item-brands">{item.compatibleBrands.join(', ')}</span>
                    )}
                  </div>
                  <button 
                    className="quote-cart__item-remove" 
                    onClick={() => removeItem(item.id)} 
                    aria-label={`Eliminar ${item.name} de la cotización`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="quote-cart__footer">
            <div className="quote-cart__fields">
              <div className="quote-cart__field-group">
                <label htmlFor="quote-vehicle" className="quote-cart__field-label">
                  🚙 Modelo de tu camioneta (recomendado)
                </label>
                <input 
                  id="quote-vehicle" 
                  type="text"
                  className="quote-cart__input" 
                  value={vehicle} 
                  onChange={(e) => setVehicle(e.target.value)}
                  placeholder="Ej: Maxus T60 2021 2.8 / Hilux 2019..."
                />
              </div>

              <div className="quote-cart__field-group">
                <label htmlFor="quote-notes" className="quote-cart__field-label">
                  💬 Consulta o notas adicionales
                </label>
                <textarea 
                  id="quote-notes" 
                  className="quote-cart__input quote-cart__input--textarea" 
                  rows="2" 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej: ¿Tienen stock inmediato y envío a mi ciudad?..."
                ></textarea>
              </div>
            </div>

            <div className="quote-cart__actions">
              <button className="quote-cart__btn quote-cart__btn--whatsapp" onClick={handleWhatsApp}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>Cotizar por WhatsApp</span>
              </button>

              <button className="quote-cart__btn quote-cart__btn--email" onClick={handleEmail}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Enviar por Correo</span>
              </button>
            </div>

            <button className="quote-cart__clear" onClick={clearCart}>
              Vaciar lista de cotización
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
