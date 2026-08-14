'use client';

import React, { useState } from 'react';
import { brands } from '@/data/products';
import './BrandsCarousel.css';

export default function BrandsCarousel() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const handleScrollToBrands = (e) => {
    e.preventDefault();
    const target = document.getElementById('marcas');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Duplicate items array 3 times to ensure infinite smooth marquee scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="brands-carousel" aria-label="Carrusel de marcas compatibles">
      <div className="brands-carousel__line">
        <span className="brands-carousel__title">DISTRIBUCIÓN & COMPATIBILIDAD DIRECTA</span>
      </div>

      <div className="brands-carousel__wrapper">
        {/* Fades on left and right for smooth infinite edge transition */}
        <div className="brands-carousel__fade brands-carousel__fade--left"></div>
        <div className="brands-carousel__fade brands-carousel__fade--right"></div>

        <div className="brands-carousel__track">
          {duplicatedBrands.map((brand, index) => (
            <a
              key={`${brand.id}-${index}`}
              href="#marcas"
              onClick={handleScrollToBrands}
              className="brands-carousel__item"
              title={`Ver repuestos para ${brand.name}`}
            >
              <div className="brands-carousel__logo-container">
                {!imgErrors[`${brand.id}-${index}`] && brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brands-carousel__logo"
                    onError={() => handleImageError(`${brand.id}-${index}`)}
                    loading="lazy"
                  />
                ) : (
                  <span className="brands-carousel__fallback">{brand.name.charAt(0)}</span>
                )}
              </div>
              <span className="brands-carousel__name">{brand.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
