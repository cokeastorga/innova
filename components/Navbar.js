'use client';

import { useState, useEffect } from 'react';
import { useQuoteCart } from '@/hooks/useQuoteCart';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items = [], itemCount = 0, justAdded, toggleCart } = useQuoteCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#inicio" className="navbar__logo" onClick={(e) => handleSmoothScroll(e, 'inicio')}>
          <strong>INNOVA</strong>CAMIONETAS
        </a>

        <div className={`navbar__links ${mobileMenuOpen ? 'navbar__links--open' : ''}`}>
          <button className="navbar__close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Cerrar menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <a href="#inicio" className="navbar__link" onClick={(e) => handleSmoothScroll(e, 'inicio')}>Inicio</a>
          <a href="#nosotros" className="navbar__link" onClick={(e) => handleSmoothScroll(e, 'nosotros')}>Nosotros</a>
          <a href="#marcas" className="navbar__link" onClick={(e) => handleSmoothScroll(e, 'marcas')}>Marcas</a>
          <a href="#productos" className="navbar__link" onClick={(e) => handleSmoothScroll(e, 'productos')}>Productos</a>
          <a href="#contacto" className="navbar__link" onClick={(e) => handleSmoothScroll(e, 'contacto')}>Contacto</a>
        </div>

        <div className="navbar__actions">
          <button 
            className={`navbar__cart-btn ${justAdded ? 'navbar__cart-btn--bounce' : ''}`} 
            onClick={toggleCart}
            aria-label="Ver cotización"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {itemCount > 0 && (
              <span className="navbar__cart-badge">{itemCount}</span>
            )}
          </button>
          <button className="navbar__cta-btn" onClick={(e) => handleSmoothScroll(e, 'productos')}>
            Cotizar
          </button>
          <button className="navbar__mobile-btn" onClick={() => setMobileMenuOpen(true)} aria-label="Abrir menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
