'use client';

import React from 'react';
import './HowToQuote.css';

const steps = [
  {
    number: '01',
    icon: '🚙',
    title: 'Elige tu Camioneta',
    desc: 'Selecciona la marca y modelo (Hilux, L200, Navara, Poer, T60, etc.) en el selector.',
    highlight: 'Filtro exacto por modelo'
  },
  {
    number: '02',
    icon: '🛒',
    title: 'Agrega los Repuestos',
    desc: 'Presiona el botón "+ Cotizar" en cada pieza que necesitas para tu mantención o faena.',
    highlight: 'Kits, frenos, filtros y más'
  },
  {
    number: '03',
    icon: '📋',
    title: 'Indica Año o Patente',
    desc: 'En tu carrito, selecciona el año de tu camioneta para asegurar calce 100% exacto.',
    highlight: 'Garantía de compatibilidad'
  },
  {
    number: '04',
    icon: '💬',
    title: 'Recibe Precios por WhatsApp',
    desc: 'Envía tu cotización a nuestros ejecutivos en Valdivia para confirmar stock y despacho en el día.',
    highlight: 'Atención personalizada rápida'
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
            En <strong>4 simples pasos</strong>, rápido, sin trámites complejos y directo con nuestros ejecutivos por WhatsApp.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="how-to-quote__grid">
          {steps.map((step, idx) => (
            <div key={step.number} className="how-to-quote__card">
              <div className="how-to-quote__card-top">
                <span className="how-to-quote__number">{step.number}</span>
                <span className="how-to-quote__icon" role="img" aria-label={step.title}>
                  {step.icon}
                </span>
              </div>

              <div className="how-to-quote__card-body">
                <h3 className="how-to-quote__step-title">{step.title}</h3>
                <p className="how-to-quote__step-desc">{step.desc}</p>
              </div>

              <div className="how-to-quote__card-footer">
                <span className="how-to-quote__step-pill">
                  ✓ {step.highlight}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div className="how-to-quote__connector" aria-hidden="true">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA to start quoting */}
        <div className="how-to-quote__cta-box">
          <a 
            href="#marcas" 
            className="how-to-quote__cta-btn"
            onClick={scrollToBrands}
          >
            <span>Comenzar a Cotizar Ahora</span>
            <span className="how-to-quote__cta-arrow">↓</span>
          </a>
          <p className="how-to-quote__cta-sub">
            ⚡ Respondemos tus dudas y confirmamos despacho hoy mismo
          </p>
        </div>

      </div>
    </section>
  );
}
