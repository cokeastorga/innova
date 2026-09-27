'use client';

import React, { useState, useEffect, useRef } from 'react';
import './ProductsPromoCarousel.css';
import { products } from '@/data/products';
import { useQuoteCart } from '@/hooks/useQuoteCart';

// Featured products for the promotional showcase
const promoProductIds = [
  'kit-distribucion',
  'bomba-agua',
  'pastillas-freno',
  'discos-freno',
  'kit-embrague',
  'bandeja-suspension',
  'amortiguador',
  'refrigerantes',
  'filtro-petroleo',
  'opticos-focos',
  'tensor-correa',
  'sensor-abs'
];

export default function ProductsPromoCarousel() {
  const { addItem, openCart } = useQuoteCart();
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Get curated products
  const promoItems = products.filter(p => promoProductIds.includes(p.id));

  // Check scroll position for arrow visibility
  const updateScrollState = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  // Continuous auto-scroll loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!trackRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        trackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState);
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  const handleScroll = (direction) => {
    setIsPaused(true);
    if (!trackRef.current) return;
    const amount = direction === 'left' ? -340 : 340;
    trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleQuickQuote = (product) => {
    addItem(product);
    openCart();
  };

  return (
    <section className="promo-carousel-section" id="promociones">
      <div className="promo-carousel__container">
        
        {/* Header con Mensaje Promocional */}
        <div className="promo-carousel__header">
          <div className="promo-carousel__badge">
            <span className="promo-carousel__badge-pulse"></span>
            STOCK PERMANENTE &amp; CALIDAD GARANTIZADA
          </div>
          <h2 className="promo-carousel__title">
            Repuestos Listos para Instalar en tu Camioneta
          </h2>
          <p className="promo-carousel__subtitle">
            Componentes de alta resistencia y durabilidad para faena, ciudad y carretera. 
            <strong> Despacho rápido en el día a todo Chile</strong> y asesoría técnica para asegurar compatibilidad exacta con tu patente.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div 
          className="promo-carousel__wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controls */}
          <button 
            type="button"
            className={`promo-carousel__arrow promo-carousel__arrow--left ${!canScrollLeft ? 'promo-carousel__arrow--disabled' : ''}`}
            onClick={() => handleScroll('left')}
            aria-label="Ver productos anteriores"
          >
            ‹
          </button>

          <button 
            type="button"
            className={`promo-carousel__arrow promo-carousel__arrow--right ${!canScrollRight ? 'promo-carousel__arrow--disabled' : ''}`}
            onClick={() => handleScroll('right')}
            aria-label="Ver más productos"
          >
            ›
          </button>

          {/* Cards Track */}
          <div className="promo-carousel__track" ref={trackRef}>
            {promoItems.map((item, idx) => {
              const promoBadge = item.badge || (idx % 3 === 0 ? 'Top Venta' : idx % 2 === 0 ? 'Stock Hoy' : 'Calidad OEM');
              
              return (
                <div key={item.id} className="promo-card">
                  <div className="promo-card__image-container">
                    <span className="promo-card__badge">{promoBadge}</span>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="promo-card__image" 
                      loading="lazy" 
                    />
                  </div>

                  <div className="promo-card__content">
                    <span className="promo-card__category">
                      {item.category.toUpperCase()}
                    </span>
                    <h3 className="promo-card__title">
                      {item.name}
                    </h3>
                    <p className="promo-card__description">
                      {item.description}
                    </p>

                    <div className="promo-card__footer">
                      <button 
                        type="button" 
                        className="promo-card__btn"
                        onClick={() => handleQuickQuote(item)}
                      >
                        + Cotizar Pieza
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ribbon Promocional de Confianza */}
        <div className="promo-carousel__ribbon">
          <div className="promo-ribbon__item">
            <span className="promo-ribbon__icon">🚚</span>
            <div className="promo-ribbon__text">
              <strong>Despachos a Todo Chile</strong>
              <span>Envíos rápidos desde Valdivia</span>
            </div>
          </div>

          <div className="promo-ribbon__item">
            <span className="promo-ribbon__icon">🔍</span>
            <div className="promo-ribbon__text">
              <strong>Validación con Patente o VIN</strong>
              <span>Garantía de calce 100% exacto</span>
            </div>
          </div>

          <div className="promo-ribbon__item">
            <span className="promo-ribbon__icon">🛡️</span>
            <div className="promo-ribbon__text">
              <strong>Repuestos Probados</strong>
              <span>Piezas resistentes para trabajo severo</span>
            </div>
          </div>

          <div className="promo-ribbon__item">
            <span className="promo-ribbon__icon">💬</span>
            <div className="promo-ribbon__text">
              <strong>Atención Personalizada</strong>
              <span>3 ejecutivos expertos por WhatsApp</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
