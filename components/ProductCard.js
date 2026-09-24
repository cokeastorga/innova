'use client';

import { useState, useMemo, useEffect } from 'react';
import './ProductCard.css';
import { useQuoteCart } from '@/hooks/useQuoteCart';
import { brands } from '@/data/products';

export default function ProductCard({ product, selectedBrand = 'all', selectedModel = 'all' }) {
  const { addItem, isInCart } = useQuoteCart();

  // Selected brand: prioritize selectedBrand if not 'all', else first compatible brand or Maxus
  const [internalBrand, setInternalBrand] = useState(() => {
    if (selectedBrand !== 'all') return selectedBrand;
    return product?.compatibleBrands?.[0] || 'Maxus';
  });

  // Sync internal brand when selectedBrand filter changes
  useEffect(() => {
    if (selectedBrand !== 'all') {
      setInternalBrand(selectedBrand);
    } else if (product?.compatibleBrands?.length && !product.compatibleBrands.includes(internalBrand)) {
      setInternalBrand(product.compatibleBrands[0]);
    }
  }, [selectedBrand, product]);

  const currentBrand = selectedBrand !== 'all' ? selectedBrand : internalBrand;

  // Available models for currentBrand
  const availableModels = useMemo(() => {
    if (!product?.compatibleModels || !currentBrand) return [];
    return product.compatibleModels[currentBrand] || [];
  }, [product, currentBrand]);

  // Model selection state
  const [internalModel, setInternalModel] = useState('');

  // Sync internal model when brand or selectedModel filter changes
  useEffect(() => {
    if (selectedModel !== 'all') {
      setInternalModel(selectedModel);
    } else if (availableModels.length > 0) {
      setInternalModel(availableModels[0]);
    } else {
      setInternalModel('');
    }
  }, [selectedModel, availableModels]);

  const currentModel = selectedModel !== 'all' ? selectedModel : internalModel;

  if (!product) return null;

  const inCart = isInCart(product.id, currentBrand, currentModel);

  // Look up model years if available
  const getVehicleYears = () => {
    if (!currentBrand) return '';
    const brandData = brands.find(b => b.name.toLowerCase() === currentBrand.toLowerCase());
    const modelData = brandData?.models?.find(m => m.name.toLowerCase() === currentModel.toLowerCase());
    return modelData?.years || '';
  };

  const handleAdd = () => {
    if (!inCart) {
      addItem(product, {
        brand: currentBrand,
        model: currentModel,
        years: getVehicleYears(),
      });
    }
  };

  // Enriched WhatsApp inquiry with vehicle context
  const whatsappMsg = `👋 ¡Hola Innova Camionetas! Quiero consultar disponibilidad del repuesto "${product.name}"${currentBrand ? ` para mi ${currentBrand}` : ''}${currentModel ? ` ${currentModel}` : ''}.`;
  const whatsappUrl = `https://wa.me/56961546709?text=${encodeURIComponent(whatsappMsg)}`;

  const displayedBrands = product.compatibleBrands ? product.compatibleBrands.slice(0, 4) : [];
  const extraBrandsCount = product.compatibleBrands ? product.compatibleBrands.length - 4 : 0;

  return (
    <div className="product-card">
      <div className="product-card__image-area">
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-card__image" 
            loading="lazy"
          />
        ) : (
          <div className="product-card__placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
            <span>{product.name}</span>
          </div>
        )}
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        
        {/* Interactive Brand Chips */}
        {displayedBrands.length > 0 && (
          <div className="product-card__brands">
            {displayedBrands.map(brand => {
              const isChipActive = currentBrand && currentBrand.toLowerCase() === brand.toLowerCase();
              return (
                <button
                  key={brand}
                  type="button"
                  onClick={() => {
                    if (selectedBrand === 'all') {
                      setInternalBrand(brand);
                    }
                  }}
                  className={`product-card__brand-chip ${isChipActive ? 'product-card__brand-chip--active' : ''}`}
                  title={selectedBrand === 'all' ? `Cotizar para ${brand}` : brand}
                >
                  {brand}
                </button>
              );
            })}
            {extraBrandsCount > 0 && (
              <span className="product-card__brand-chip product-card__brand-chip--more">+{extraBrandsCount}</span>
            )}
          </div>
        )}

        {/* Vehicle Selection Indicator */}
        {(currentBrand || currentModel) && (
          <div className="product-card__vehicle-bar">
            <div className="product-card__vehicle-info">
              <span className="product-card__vehicle-icon">🚙</span>
              <span className="product-card__vehicle-text">
                Cotizar: <strong>{currentBrand}</strong>
              </span>
            </div>

            {/* Quick model selector if multiple models are available and model not locked by top filter */}
            {availableModels.length > 1 && selectedModel === 'all' ? (
              <div className="product-card__model-dropdown">
                <select
                  value={currentModel}
                  onChange={(e) => setInternalModel(e.target.value)}
                  className="product-card__model-select"
                  aria-label="Seleccionar modelo"
                >
                  {availableModels.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <svg className="product-card__select-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            ) : currentModel ? (
              <span className="product-card__model-pill">{currentModel}</span>
            ) : null}
          </div>
        )}

        <div className="product-card__actions">
          <button 
            onClick={handleAdd} 
            disabled={inCart}
            className={`btn btn-sm ${inCart ? 'btn-outline' : 'btn-lime'}`}
            type="button"
          >
            {inCart ? 'Agregado ✓' : '+ Cotizar'}
          </button>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
}
