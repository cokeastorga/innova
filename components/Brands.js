'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import './Brands.css';
import { brands, products, categories } from '@/data/products';
import { useQuoteCart } from '@/hooks/useQuoteCart';

export default function Brands() {
  const [activeBrandId, setActiveBrandId] = useState(brands[0]?.id || null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [imgErrors, setImgErrors] = useState({});
  const [isPaused, setIsPaused] = useState(false);

  const { addItem, isInCart } = useQuoteCart();
  const trackRef = useRef(null);
  const repuestosSectionRef = useRef(null);

  const handleImageError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const activeBrand = useMemo(() => {
    return brands.find(b => b.id === activeBrandId) || brands[0];
  }, [activeBrandId]);

  // Auto-scroll loop for the brand carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!trackRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        trackRef.current.scrollBy({ left: 160, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll carousel with arrow buttons
  const scrollCarousel = (direction) => {
    setIsPaused(true);
    if (!trackRef.current) return;
    const scrollAmount = direction === 'left' ? -220 : 220;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Change active brand and reset selected model
  const handleSelectBrand = (brandId) => {
    setActiveBrandId(brandId);
    setSelectedModel(null);
    setSelectedCategory('all');
  };

  // Toggle model selection
  const handleSelectModel = (model) => {
    if (selectedModel?.name === model.name) {
      setSelectedModel(null);
    } else {
      setSelectedModel(model);
      setSelectedCategory('all');
      // Smooth scroll to repuestos panel after a brief tick
      setTimeout(() => {
        if (repuestosSectionRef.current) {
          repuestosSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  };

  // Filter products compatible with the selected brand & model
  const modelProducts = useMemo(() => {
    if (!selectedModel || !activeBrand) return [];

    return products.filter(p => {
      let isCompatible = false;
      if (p.compatibleModels && p.compatibleModels[activeBrand.name]) {
        isCompatible = p.compatibleModels[activeBrand.name].some(
          m => m.toLowerCase() === selectedModel.name.toLowerCase()
        );
      } else if (p.compatibleBrands) {
        isCompatible = p.compatibleBrands.some(
          b => b.toLowerCase() === activeBrand.name.toLowerCase()
        );
      }

      if (!isCompatible) return false;
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      return true;
    });
  }, [activeBrand, selectedModel, selectedCategory]);

  // Compute category counts for selected model
  const categoryCounts = useMemo(() => {
    if (!selectedModel || !activeBrand) return { all: 0 };
    const counts = { all: 0 };

    products.forEach(p => {
      let isCompatible = false;
      if (p.compatibleModels && p.compatibleModels[activeBrand.name]) {
        isCompatible = p.compatibleModels[activeBrand.name].some(
          m => m.toLowerCase() === selectedModel.name.toLowerCase()
        );
      } else if (p.compatibleBrands) {
        isCompatible = p.compatibleBrands.some(
          b => b.toLowerCase() === activeBrand.name.toLowerCase()
        );
      }

      if (isCompatible) {
        counts.all++;
        if (p.category) {
          counts[p.category] = (counts[p.category] || 0) + 1;
        }
      }
    });

    return counts;
  }, [activeBrand, selectedModel]);

  return (
    <section id="marcas" className="brands section section--surface">
      <div className="container reveal">
        <div className="brands__header">
          <span className="section-tag">MARCAS &amp; MODELOS</span>
          <h2 className="section-title">Modelos y Repuestos por Marca</h2>
          <p className="section-subtitle mx-auto text-center" style={{ margin: '0 auto' }}>
            Explora las marcas compatibles en el carrusel y presiona cualquier camioneta para ver sus repuestos disponibles.
          </p>
        </div>

        {/* Carrusel interactivo y automático de marcas */}
        <div 
          className="brands__carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 4000)}
        >
          <button 
            type="button" 
            className="brands__carousel-arrow brands__carousel-arrow--left"
            onClick={() => scrollCarousel('left')}
            aria-label="Marca anterior"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                  onClick={() => handleSelectBrand(brand.id)}
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
            aria-label="Siguiente marca"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Panel de modelos en Grid 3 obligatorio */}
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
                {activeBrand.models?.length || 0} camionetas compatibles
              </span>
            </div>

            <p className="brand-panel__instruction">
              💡 <strong>Toca cualquier camioneta</strong> para desplegar sus categorías y repuestos disponibles:
            </p>

            {/* Grid 3 columnas como mínimo (móvil y desktop) */}
            <div className="brand-panel__models-grid">
              {activeBrand.models?.map((model, idx) => {
                const isModelSelected = selectedModel?.name === model.name;

                return (
                  <div 
                    key={idx} 
                    className={`brand-model ${isModelSelected ? 'brand-model--selected' : ''}`}
                    onClick={() => handleSelectModel(model)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isModelSelected}
                  >
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
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"></path>
                            <circle cx="7" cy="17" r="2"></circle>
                            <path d="M9 17h6"></path>
                            <circle cx="17" cy="17" r="2"></circle>
                          </svg>
                        </div>
                      )}
                      {isModelSelected && (
                        <span className="brand-model__selected-indicator">Activo ✓</span>
                      )}
                    </div>

                    <div className="brand-model__content">
                      <div className="brand-model__top">
                        <h4 className="brand-model__name">{model.name}</h4>
                        <span className="brand-model__years">{model.years}</span>
                      </div>

                      <span className="brand-model__brand-tag">
                        Marca: <strong>{activeBrand.name}</strong>
                      </span>

                      <div className="brand-model__action-badge">
                        <span>{isModelSelected ? 'Ocultar repuestos ▲' : 'Ver repuestos ▼'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SECCIÓN DESPLEGABLE: Categorías y repuestos del modelo seleccionado */}
            {selectedModel && (
              <div className="model-repuestos-drawer" ref={repuestosSectionRef}>
                <div className="model-repuestos-drawer__header">
                  <div className="model-repuestos-drawer__title-area">
                    <span className="model-repuestos-drawer__badge">Catálogo Específico</span>
                    <h4 className="model-repuestos-drawer__title">
                      Repuestos para {activeBrand.name} {selectedModel.name}
                    </h4>
                    <span className="model-repuestos-drawer__subtitle">
                      Años: {selectedModel.years} {selectedModel.type ? `• ${selectedModel.type}` : ''}
                    </span>
                  </div>

                  <button 
                    className="model-repuestos-drawer__close" 
                    onClick={() => setSelectedModel(null)}
                    aria-label="Cerrar repuestos"
                  >
                    ✕ Cerrar
                  </button>
                </div>

                {/* Filtro de Categorías para este modelo */}
                <div className="model-repuestos-drawer__categories">
                  <button 
                    className={`model-repuestos-drawer__cat-tab ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    <span>Todas las categorías</span>
                    <span className="model-repuestos-drawer__cat-count">{categoryCounts.all || 0}</span>
                  </button>

                  {categories.map((cat) => {
                    const count = categoryCounts[cat.id] || 0;
                    if (count === 0) return null;
                    return (
                      <button 
                        key={cat.id}
                        className={`model-repuestos-drawer__cat-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat.id)}
                      >
                        <span>{cat.name}</span>
                        <span className="model-repuestos-drawer__cat-count">{count}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Lista de Repuestos para este modelo */}
                <div className="model-repuestos-drawer__grid">
                  {modelProducts.map((product) => {
                    const inCart = isInCart(product.id, activeBrand.name, selectedModel.name);
                    const whatsappMsg = `👋 Hola Innova Camionetas! Quiero consultar disponibilidad del repuesto "${product.name}" para mi ${activeBrand.name} ${selectedModel.name} (${selectedModel.years}).`;
                    const whatsappUrl = `https://wa.me/56961546709?text=${encodeURIComponent(whatsappMsg)}`;

                    return (
                      <div key={product.id} className="model-repuesto-card">
                        <div className="model-repuesto-card__image-box">
                          {product.image ? (
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="model-repuesto-card__image" 
                              loading="lazy" 
                            />
                          ) : (
                            <div className="model-repuesto-card__placeholder">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                              </svg>
                            </div>
                          )}
                          <span className="model-repuesto-card__cat-label">
                            {categories.find(c => c.id === product.category)?.name || product.category}
                          </span>
                        </div>

                        <div className="model-repuesto-card__info">
                          <h5 className="model-repuesto-card__title">{product.name}</h5>
                          <p className="model-repuesto-card__desc">{product.description}</p>

                          <div className="model-repuesto-card__actions">
                            <button
                              type="button"
                              className={`btn btn-sm ${inCart ? 'btn-outline' : 'btn-lime'}`}
                              onClick={() => addItem(product, {
                                brand: activeBrand.name,
                                model: selectedModel.name,
                                years: selectedModel.years,
                                type: selectedModel.type
                              })}
                              disabled={inCart}
                            >
                              {inCart ? 'Agregado ✓' : '+ Cotizar'}
                            </button>

                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline model-repuesto-card__wa-btn"
                              title="Consultar por WhatsApp"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {modelProducts.length === 0 && (
                  <div className="model-repuestos-drawer__empty">
                    <p>No se encontraron repuestos en esta categoría específica para {activeBrand.name} {selectedModel.name}.</p>
                    <a 
                      href={`https://wa.me/56961546709?text=${encodeURIComponent(`Hola, busco repuestos especiales para mi ${activeBrand.name} ${selectedModel.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-lime btn-sm"
                    >
                      Consultar pieza especial por WhatsApp →
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
