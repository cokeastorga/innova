'use client';

import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.hero__animated');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero" ref={heroRef}>
      <div className="hero__container">
        
        {/* Left Side: Content */}
        <div className="hero__content">
          <span 
            className="hero__tagline hero__animated" 
            style={{ '--stagger-index': 1 }}
          >
            ESPECIALISTAS EN REPUESTOS
          </span>
          
          <h1 
            className="hero__title hero__animated" 
            style={{ '--stagger-index': 2 }}
          >
            Repuestos para Camionetas que <span className="hero__title-highlight">Exigen Más</span>
          </h1>
          
          <p 
            className="hero__subtitle hero__animated" 
            style={{ '--stagger-index': 3 }}
          >
            Somos distribuidores especializados en Valdivia. Encontramos la pieza exacta 
            para tu camioneta con atención rápida, experta y garantizada.
          </p>
          
          <div 
            className="hero__actions hero__animated" 
            style={{ '--stagger-index': 4 }}
          >
            <button 
              className="btn btn--primary" 
              onClick={(e) => handleSmoothScroll(e, 'marcas')}
            >
              Explorar Repuestos
            </button>
            <a 
              href="https://wa.me/56961546709" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--outline"
            >
              Cotizar por WhatsApp
            </a>
          </div>
          
          <div 
            className="hero__badges hero__animated" 
            style={{ '--stagger-index': 5 }}
          >
            <span className="hero__badge hero__badge--lime">
              <span className="hero__badge-dot"></span> Stock Permanente
            </span>
            <span className="hero__badge hero__badge--orange">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              Envíos a Todo Chile
            </span>
            <span className="hero__badge hero__badge--outline">
              11 Marcas
            </span>
          </div>
        </div>

        {/* Right Side: Geometric Pattern */}
        <div className="hero__visual hero__animated" style={{ '--stagger-index': 3 }}>
          <div className="hero__shape hero__shape--circle-1"></div>
          <div className="hero__shape hero__shape--circle-2"></div>
          <div className="hero__shape hero__shape--line-1"></div>
          <div className="hero__shape hero__shape--line-2"></div>
          <div className="hero__shape hero__shape--dots"></div>
        </div>

      </div>
    </section>
  );
}
