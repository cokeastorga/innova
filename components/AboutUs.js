'use client';

import React, { useEffect, useRef, useState } from 'react';
import { companyStats } from '@/data/products';
import './AboutUs.css';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(companyStats.map(s => s.value));

  useEffect(() => {
    // Start with 0 for animation
    setAnimatedStats(companyStats.map(() => 0));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !companyStats) return;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats(
        companyStats.map((stat) => Math.floor(easeProgress * stat.value))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedStats(companyStats.map((stat) => stat.value));
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section id="nosotros" className="about-us section--surface" ref={sectionRef}>
      <div className="about-us__container">
        <div className="about-us__header">
          <span className="about-us__tag">QUIÉNES SOMOS</span>
          <h2 className="about-us__title">Distribuidor Oficial de Repuestos</h2>
          <p className="about-us__subtitle">
            Especialistas en repuestos para Maxus, Toyota, Nissan, Mitsubishi, Volkswagen, JAC, JMC, DFSK, SsangYong y Changan.
          </p>
          <p className="about-us__description">
            Desde Valdivia, conectamos a dueños de camionetas y flotas con repuestos de calidad certificada, 
            asesoría técnica especializada y envíos rápidos a todo Chile. Nuestra misión es mantener tu camioneta 
            operativa con los más altos estándares.
          </p>
        </div>

        {/* Stats Counter Grid */}
        <div className="about-us__stats">
          {companyStats.map((stat, index) => (
            <div key={index} className="about-us__stat-card">
              <div className="about-us__stat-number">
                {animatedStats[index] !== undefined ? animatedStats[index] : stat.value}
                {stat.suffix}
              </div>
              <div className="about-us__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pillars / Values */}
        <div className="about-us__pillars">
          <div className="about-us__pillar-card">
            <div className="about-us__pillar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="about-us__pillar-title">Calidad Garantizada</h3>
            <p className="about-us__pillar-desc">
              Repuestos genuinos y alternativos de primera línea, testeados para resistir las condiciones más exigentes.
            </p>
          </div>

          <div className="about-us__pillar-card">
            <div className="about-us__pillar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 className="about-us__pillar-title">Stock Permanente</h3>
            <p className="about-us__pillar-desc">
              Disponibilidad inmediata en repuestos de alta rotación para que no detengas tu trabajo ni un día.
            </p>
          </div>

          <div className="about-us__pillar-card">
            <div className="about-us__pillar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3 className="about-us__pillar-title">Despachos a Todo Chile</h3>
            <p className="about-us__pillar-desc">
              Envíos diarios desde Valdivia mediante Starken, Chilexpress, Varmontt y transportes especializados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
