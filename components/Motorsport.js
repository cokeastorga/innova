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
            href="https://wa.me/56963890325?text=Hola%2C%20los%20vi%20en%20Motorsport%20Valdivia%20y%20quiero%20cotizar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Conoce Más & Cotiza
          </a>
        </div>

        <div className="motorsport__images">
          <div className="motorsport__image-wrapper">
            <img 
              src="/img/racing/racing-front.jpg" 
              alt="Auto de carreras vista frontal - Patrocinio Motorsport Innova Camionetas" 
              className="motorsport__img motorsport__img--front"
              loading="lazy"
            />
            <div className="motorsport__image-overlay">
              <span className="motorsport__image-tag">Patrocinio Motorsport</span>
              <h3 className="motorsport__image-title">Auto #97 • Vista Frontal</h3>
            </div>
          </div>

          <div className="motorsport__image-wrapper">
            <img 
              src="/img/racing/racing-back.jpg" 
              alt="Auto de carreras vista trasera - Competencia Local AutoClub Valdivia" 
              className="motorsport__img motorsport__img--back"
              loading="lazy"
            />
            <div className="motorsport__image-overlay">
              <span className="motorsport__image-tag">Competencia Local</span>
              <h3 className="motorsport__image-title">AutoClub Valdivia • En Pista</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motorsport;
