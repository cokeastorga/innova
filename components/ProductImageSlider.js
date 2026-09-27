'use client';

import React, { useState, useEffect, useRef } from 'react';
import './ProductImageSlider.css';

export default function ProductImageSlider({
  images = [],
  image = null,
  alt = 'Repuesto',
  badge = null,
  intervalMs = 3200,
}) {
  const imageList = Array.isArray(images) && images.length > 0
    ? images
    : (image ? [image] : []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef(null);

  const hasMultiple = imageList.length > 1;

  useEffect(() => {
    if (!hasMultiple || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [hasMultiple, isHovered, imageList.length, intervalMs]);

  const handlePrev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    if (!hasMultiple) return;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!hasMultiple || touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Deslizar izquierda -> siguiente
        setCurrentIndex((prev) => (prev + 1) % imageList.length);
      } else {
        // Deslizar derecha -> anterior
        setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
      }
    }
    touchStartXRef.current = null;
  };

  if (imageList.length === 0) {
    return (
      <div className="product-slider__placeholder">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <div
      className={`product-slider ${hasMultiple ? 'product-slider--multi' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Badge del producto si existe */}
      {badge && <span className="product-card__badge">{badge}</span>}

      {/* Indicador de múltiples variedades */}
      {hasMultiple && (
        <span className="product-slider__variety-tag" title={`${imageList.length} opciones disponibles`}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
          {imageList.length >= 4 ? `${imageList.length} variedades` : `${imageList.length} fotos`}
        </span>
      )}

      {/* Contenedor de imágenes con transición cruzada suave */}
      <div className="product-slider__stage">
        {imageList.map((imgSrc, idx) => (
          <img
            key={imgSrc + idx}
            src={imgSrc}
            alt={`${alt} - variedad ${idx + 1}`}
            className={`product-slider__image ${idx === currentIndex ? 'product-slider__image--active' : ''}`}
            loading={idx === 0 ? 'lazy' : 'eager'}
          />
        ))}
      </div>

      {/* Controles para productos con múltiples imágenes */}
      {hasMultiple && (
        <>
          <button
            type="button"
            className="product-slider__arrow product-slider__arrow--prev"
            onClick={handlePrev}
            aria-label="Variedad anterior"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            type="button"
            className="product-slider__arrow product-slider__arrow--next"
            onClick={handleNext}
            aria-label="Siguiente variedad"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className="product-slider__dots">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`product-slider__dot ${idx === currentIndex ? 'product-slider__dot--active' : ''}`}
                onClick={(e) => handleDotClick(e, idx)}
                aria-label={`Ver variedad ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
