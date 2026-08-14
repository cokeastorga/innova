'use client';

import React from 'react';
import './Motorsport.css';

const Motorsport = () => {
  return (
    <section className="motorsport">
      <div className="motorsport__container">
        <div className="motorsport__content">
          <div className="motorsport__badge">
            <span>🏁</span> Motorsport Valdivia
          </div>
          <h2 className="motorsport__title">
            Pasión y Rendimiento en <span className="motorsport__title-accent">Cada Repuesto</span>
          </h2>
          <p className="motorsport__subtitle">
            En Innova Camionetas apoyamos activamente el deporte motor local en Valdivia. 
            La misma exigencia de alta velocidad, fiabilidad y precisión en la pista es la que 
            aplicamos en cada pieza y repuesto que vendemos para tu camioneta.
          </p>
          <a 
            href="https://wa.me/56961546709?text=Hola%2C%20los%20vi%20en%20Motorsport%20Valdivia%20y%20quiero%20cotizar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Conoce Más & Cotiza
          </a>
        </div>

        <div className="motorsport__images">
          <div className="motorsport__image-wrapper">
            {/* <!-- IMAGEN: Auto de carreras vista frontal /public/img/racing/racing-front.jpg --> */}
            <div className="motorsport__image-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
              <div className="motorsport__image-title">Patrocinio Motorsport</div>
              <span className="motorsport__image-text">Auto de carreras — Vista frontal</span>
            </div>
          </div>

          <div className="motorsport__image-wrapper">
            {/* <!-- IMAGEN: Auto de carreras vista trasera /public/img/racing/racing-back.jpg --> */}
            <div className="motorsport__image-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"></path>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              </svg>
              <div className="motorsport__image-title">Competencia Local</div>
              <span className="motorsport__image-text">Auto de carreras — Vista en pista</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motorsport;
