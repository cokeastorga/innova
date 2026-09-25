'use client';

import React, { useState, useEffect, useRef } from 'react';
import './SocialFab.css';

const WhatsAppIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.237a9.994 9.994 0 0 0 4.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.925-7.062A9.925 9.925 0 0 0 12.012 2zm0 18.257h-.003a8.3 8.3 0 0 1-4.233-1.161l-.304-.18-3.111.736.837-3.047-.197-.314a8.272 8.272 0 0 1-1.269-4.291c.001-4.577 3.725-8.301 8.304-8.301 2.217 0 4.301.865 5.867 2.434a8.27 8.27 0 0 1 2.43 5.871c-.001 4.577-3.725 8.301-8.304 8.301zm4.551-6.208c-.249-.125-1.472-.726-1.7-.809-.228-.083-.394-.125-.56.125-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.125-1.051-.387-2.001-1.234-.739-.659-1.238-1.474-1.383-1.723-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.436-.062-.125-.56-1.349-.768-1.847-.202-.485-.407-.419-.56-.427-.145-.007-.311-.008-.477-.008s-.436.062-.664.311c-.228.249-.871.851-.871 2.075s.892 2.407 1.016 2.573c.125.166 1.756 2.68 4.253 3.757.594.256 1.058.409 1.42.524.597.19 1.14.163 1.569.099.479-.071 1.472-.602 1.68-1.183.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.291z"/>
  </svg>
);

const SocialFab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fabRef.current && !fabRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleFab = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="social-fab" ref={fabRef}>
      <div className={`social-fab__menu ${isOpen ? 'social-fab__menu--open' : ''}`}>
        <a 
          href="https://wa.me/56963890325" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-fab__item"
          style={{ '--item-index': 1 }}
        >
          <span className="social-fab__label">1° Contacto • Brahyan</span>
          <div className="social-fab__icon-sm social-fab__icon-sm--whatsapp">
            <WhatsAppIcon size={22} />
          </div>
        </a>
        
        <a 
          href="https://wa.me/56968163883" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-fab__item"
          style={{ '--item-index': 2 }}
        >
          <span className="social-fab__label">2° Contacto • Cristian</span>
          <div className="social-fab__icon-sm social-fab__icon-sm--whatsapp">
            <WhatsAppIcon size={22} />
          </div>
        </a>

        <a 
          href="https://instagram.com/innovacamionetas" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-fab__item"
          style={{ '--item-index': 3 }}
        >
          <span className="social-fab__label">Instagram</span>
          <div className="social-fab__icon-sm social-fab__icon-sm--instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
        </a>
      </div>

      <div className="social-fab__pulse"></div>
      
      <button 
        className={`social-fab__main ${isOpen ? 'social-fab__main--open' : ''}`}
        onClick={toggleFab}
        aria-label="Contactar por WhatsApp"
        title="WhatsApp Innova Camionetas"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <WhatsAppIcon size={32} />
        )}
      </button>
    </div>
  );
};

export default SocialFab;
