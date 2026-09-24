'use client';
import { useState, useRef } from 'react';
import './Brands.css';
import { brands } from '@/data/products';

export default function Brands() {
  const [activeBrandId, setActiveBrandId] = useState(brands[0]?.id || null);
  const [imgErrors, setImgErrors] = useState({});
  const trackRef = useRef(null);

  const handleImageError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const activeBrand = brands.find(b => b.id === activeBrandId) || brands[0];

  const scrollCarousel = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="marcas" className="brands section section--surface">
      <div className="container reveal">
        <div className="brands__header">
          <span className="section-tag">MODELOS &amp; COMPATIBILIDAD</span>
          <h2 className="section-title">Modelos y Marcas Principales</h2>
          <p className="section-subtitle mx-auto text-center" style={{ margin: '0 auto' }}>
            Selecciona una marca en el carrusel para explorar las camionetas y vehículos compatibles.
          </p>
        </div>

        {/* Carrusel interactivo de marcas */}
        <div className="brands__carousel-wrapper">
          <button 
            type="button" 
            className="brands__carousel-arrow brands__carousel-arrow--left"
            onClick={() => scrollCarousel('left')}
            aria-label="Ver marcas anteriores"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="brands__carousel-track" ref={trackRef}>
            {brands.map((brand) => {
              const isActive = activeBrandId === brand.id;
              return (
                <button
                  key={brand.id}
                  type="button"
                  className={`brand-card brand-card--carousel ${brand.featured ? 'brand-card--featured' : ''} ${isActive ? 'brand-card--active' : ''}`}
                  onClick={() => setActiveBrandId(brand.id)}
                >
                  {brand.featured && (
                    <span className="brand-card__badge">Especialista</span>
                  )}

                  <div className="brand-card__logo-wrapper">
                    {!imgErrors[brand.id] && brand.logo ? (
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="brand-card__logo" 
                        onError={() => handleImageError(brand.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="brand-card__logo-fallback">
                        {brand.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <span className="brand-card__name">{brand.name}</span>
                  <span className="brand-card__count">{brand.models?.length || 0} modelos</span>
                </button>
              );
            })}
          </div>

          <button 
            type="button" 
            className="brands__carousel-arrow brands__carousel-arrow--right"
            onClick={() => scrollCarousel('right')}
            aria-label="Ver marcas siguientes"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Panel de modelos en Grid de 3 como mínimo */}
        {activeBrand && (
          <div className="brand-panel">
            <div className="brand-panel__header">
              <div className="brand-panel__header-info">
                <div className="brand-panel__brand-badge">
                  {activeBrand.logo && !imgErrors[`panel-${activeBrand.id}`] ? (
                    <img 
                      src={activeBrand.logo} 
                      alt={activeBrand.name} 
                      className="brand-panel__mini-logo" 
                      onError={() => handleImageError(`panel-${activeBrand.id}`)}
                    />
                  ) : (
                    <span>{activeBrand.name}</span>
                  )}
                </div>
                <div>
                  <h3 className="brand-panel__title">Modelos {activeBrand.name}</h3>
                  <p className="brand-panel__desc">
                    {activeBrand.description || `Repuestos y autopartes garantizadas para línea completa ${activeBrand.name}.`}
                  </p>
                </div>
              </div>
              <span className="brand-panel__count-pill">
                {activeBrand.models?.length || 0} modelos disponibles
              </span>
            </div>

            {/* Grid 3 columnas como mínimo */}
            <div className="brand-panel__models-grid">
              {activeBrand.models?.map((model, idx) => {
                const whatsappMsg = `👋 ¡Hola Innova Camionetas! Quisiera cotizar repuestos para mi camioneta ${activeBrand.name} ${model.name} (${model.years}). ¿Qué disponibilidad tienen?`;
                const whatsappUrl = `https://wa.me/56961546709?text=${encodeURIComponent(whatsappMsg)}`;

                return (
                  <div key={idx} className="brand-model">
                    <div className="brand-model__image-wrapper">
                      {model.image ? (
                        <img 
                          src={model.image} 
                          alt={`${activeBrand.name} ${model.name}`} 
                          className="brand-model__image" 
                          loading="lazy" 
                        />
                      ) : (
                        <div className="brand-model__placeholder">
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"></path>
                            <circle cx="7" cy="17" r="2"></circle>
                            <path d="M9 17h6"></path>
                            <circle cx="17" cy="17" r="2"></circle>
                          </svg>
                          <span className="brand-model__placeholder-text">{model.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="brand-model__content">
                      <div className="brand-model__top">
                        <h4 className="brand-model__name">{model.name}</h4>
                        <span className="brand-model__years">{model.years}</span>
                      </div>

                      <div className="brand-model__meta">
                        <span className="brand-model__brand-tag">
                          Marca: <strong>{activeBrand.name}</strong>
                        </span>
                        {model.type && (
                          <span className="brand-model__type">{model.type}</span>
                        )}
                      </div>

                      <a 
                        href={whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-lime btn-sm brand-model__cta"
                      >
                        Cotizar para {model.name} →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
