'use client';

import React from 'react';
import './HowToQuote.css';

const steps = [
  {
    number: '1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
        <path d="M5 17H3V6a1 1 0 0 1 1-1h9v13H9m6 0h2a1 1 0 0 0 1-1v-3.5h-3L13 5"/>
        <path d="M13 5h3l3 6h1a1 1 0 0 1 1 1v4"/>
      </svg>
    ),
    title: 'Elige tu Camioneta',
    desc: 'Selecciona marca y modelo en el selector.',
    color: 'orange'
  },
  {
    number: '2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    title: 'Agrega Repuestos',
    desc: 'Presiona "+ Cotizar" en cada pieza.',
    color: 'lime'
  },
  {
    number: '3',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
    title: 'Indica el Año',
    desc: 'Selecciona el año para calce exacto.',
    color: 'orange'
  },
  {
    number: '4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    title: 'Recibe Precios',
    desc: 'Te respondemos por WhatsApp al instante.',
    color: 'lime'
  }
];

export default function HowToQuote() {
  const scrollToBrands = (e) => {
    e.preventDefault();
    const marcasSection = document.getElementById('marcas');
    if (marcasSection) {
      marcasSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'marcas';
    }
  };

  return (
    <section className="how-to-quote" id="como-cotizar">
      <div className="how-to-quote__container">
        
        {/* Header */}
        <div className="how-to-quote__header">
          <span className="how-to-quote__tag">GUÍA RÁPIDA</span>
          <h2 className="how-to-quote__title">
            ¿Cómo Cotizar tus Repuestos?
          </h2>
          <p className="how-to-quote__subtitle">
            En <strong>4 simples pasos</strong>, directo con nuestros ejecutivos por WhatsApp.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="how-to-quote__timeline">
          {steps.map((step, idx) => (
            <div key={step.number} className={`how-to-quote__step how-to-quote__step--${step.color}`}>
              {/* Number Circle */}
              <div className="how-to-quote__step-circle">
                <span className="how-to-quote__step-num">{step.number}</span>
              </div>

              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="how-to-quote__step-line" aria-hidden="true" />
              )}

              {/* Card Content */}
              <div className="how-to-quote__step-card">
                <div className="how-to-quote__step-icon">
                  {step.icon}
                </div>
                <div className="how-to-quote__step-info">
                  <h3 className="how-to-quote__step-title">{step.title}</h3>
                  <p className="how-to-quote__step-desc">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="how-to-quote__cta-box">
          <a 
            href="#marcas" 
            className="how-to-quote__cta-btn"
            onClick={scrollToBrands}
          >
            <span>Comenzar a Cotizar</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
