'use client';
import { useState, useRef, useEffect } from 'react';
import './Brands.css';
import { brands } from '@/data/products';

export default function Brands() {
  const [activeBrandId, setActiveBrandId] = useState(brands[0]?.id || null);
  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const activeBrand = brands.find(b => b.id === activeBrandId);

  // Reveal animations setup can be simple class assignments or intersection observer.
  // The user asked to "Use 'reveal' and 'stagger' classes for scroll animations".
  // Assuming those are implemented in globals.css, we'll just add the classes.
  
  return (
    <section id="marcas" className="brands section section--surface">
      <div className="container reveal">
        <div className="brands__header">
          <span className="section-tag">NUESTRAS MARCAS</span>
          <h2 className="section-title">Marcas con las que Trabajamos</h2>
          <p className="section-subtitle mx-auto text-center" style={{margin: '0 auto'}}>
            Especialistas en repuestos para 11 marcas líderes. Si no encuentras tu modelo,
            consúltanos directamente.
          </p>
        </div>

      <div className="brands__grid stagger">
        {brands.map((brand, index) => (
          <div 
            key={brand.id}
            className={`brand-card ${brand.featured ? 'brand-card--featured' : ''} ${activeBrandId === brand.id ? 'brand-card--active' : ''}`}
            onClick={() => setActiveBrandId(brand.id)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {brand.featured && (
              <span className="brand-card__badge">Distribuidor Especializado</span>
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
            
            <h3 className="brand-card__name">{brand.name}</h3>
            <span className="brand-card__count">{brand.models?.length || 0} Modelos</span>
          </div>
        ))}
      </div>

      {activeBrand && (
        <div className="brand-panel">
          <div className="brand-panel__header">
            <h3 className="brand-panel__title">{activeBrand.name}</h3>
            {activeBrand.description && (
              <p className="brand-panel__desc">{activeBrand.description}</p>
            )}
            {!activeBrand.description && activeBrand.featured && (
              <p className="brand-panel__desc">
                Distribuidor especializado en toda la línea {activeBrand.name}. Repuestos genuinos y alternativos de alta durabilidad.
              </p>
            )}
          </div>
          
          <div className="brand-panel__models-grid stagger">
            {activeBrand.models?.map((model, idx) => {
              const whatsappMsg = encodeURIComponent(`Hola, quiero cotizar repuestos para ${activeBrand.name} ${model.name} (${model.years})`);
              const whatsappUrl = `https://wa.me/56961546709?text=${whatsappMsg}`;
              
              return (
                <div key={idx} className={`brand-model ${model.image ? 'brand-model--has-image' : ''}`} style={{ animationDelay: `${idx * 0.04}s` }}>
                  {model.image ? (
                    <div className="brand-model__image-wrapper">
                      <img 
                        src={model.image} 
                        alt={`${activeBrand.name} ${model.name}`} 
                        className="brand-model__image" 
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="brand-model__placeholder">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"></path>
                        <circle cx="7" cy="17" r="2"></circle>
                        <path d="M9 17h6"></path>
                        <circle cx="17" cy="17" r="2"></circle>
                      </svg>
                    </div>
                  )}
                  
                  <div className="brand-model__content">
                    <div className="brand-model__top">
                      <h4 className="brand-model__name">{model.name}</h4>
                      <span className="brand-model__years">{model.years}</span>
                    </div>
                    {model.type && (
                      <span className="brand-model__type">{model.type}</span>
                    )}
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-lime btn-sm brand-model__cta"
                    >
                      Cotizar Repuestos
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
