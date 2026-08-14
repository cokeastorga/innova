'use client';

import React, { useState, useEffect, useRef } from 'react';
import { whyBuyReasons, maintenanceTips } from '@/data/products';
import './WhyBuyHere.css';

const icons = {
  shield: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  truck: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>,
  tag: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>,
  headset: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>,
  settings: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  disc: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>,
  droplet: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>,
  battery: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg>
};

const WhyBuyHere = () => {
  const [activeTab, setActiveTab] = useState('why-innova');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-buy" ref={sectionRef}>
      <div className="why-buy__container">
        <div className="why-buy__header">
          <span className="why-buy__tag">INNOVA CAMIONETAS</span>
          <h2 className="why-buy__title">¿Por Qué Comprar Aquí?</h2>
        </div>

        <div className="why-buy__tabs">
          <button 
            className={`why-buy__tab-btn ${activeTab === 'why-innova' ? 'why-buy__tab-btn--active' : ''}`}
            onClick={() => setActiveTab('why-innova')}
          >
            ¿Por qué Innova?
          </button>
          <button 
            className={`why-buy__tab-btn ${activeTab === 'maintenance' ? 'why-buy__tab-btn--active' : ''}`}
            onClick={() => setActiveTab('maintenance')}
          >
            ¿Cuándo cambiar tus repuestos?
          </button>
        </div>

        <div className="why-buy__content">
          {activeTab === 'why-innova' && (
            <div className="why-buy__grid">
              {whyBuyReasons?.map((reason, index) => (
                <div 
                  key={reason.id || index} 
                  className="why-buy__card"
                  style={{ '--stagger-index': index }}
                >
                  <div className="why-buy__icon">
                    {icons[reason.icon] || icons.shield}
                  </div>
                  <h3 className="why-buy__card-title">{reason.title}</h3>
                  <p className="why-buy__card-desc">{reason.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'maintenance' && (
            <div className="why-buy__grid">
              {maintenanceTips?.map((tip, index) => (
                <div 
                  key={tip.id || index} 
                  className="why-buy__card"
                  style={{ '--stagger-index': index }}
                >
                  <div className="why-buy__card-header">
                    <div className="why-buy__icon">
                      {icons[tip.icon] || icons.settings}
                    </div>
                    <span className="why-buy__interval-badge">{tip.interval}</span>
                  </div>
                  <h3 className="why-buy__card-title">{tip.title}</h3>
                  <p className="why-buy__card-desc">{tip.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyBuyHere;
