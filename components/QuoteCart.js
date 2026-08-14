'use client';
import { useState } from 'react';
import { useQuoteCart } from '@/hooks/useQuoteCart';
import { contactInfo } from '@/data/products';
import './QuoteCart.css';

export default function QuoteCart() {
  const { items, isOpen, closeCart, removeItem, clearCart, getWhatsAppMessage, getEmailData } = useQuoteCart();
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = getWhatsAppMessage(notes);
    window.open(`https://wa.me/${contactInfo.whatsapp1.number}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmail = () => {
    const { subject, body } = getEmailData(notes);
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="quote-cart__overlay" onClick={closeCart}>
      <div className="quote-cart__panel" onClick={(e) => e.stopPropagation()}>
        <div className="quote-cart__header">
          <h2 className="quote-cart__title">Tu Cotización <span className="quote-cart__count">({items.length})</span></h2>
          <button className="quote-cart__close" onClick={closeCart} aria-label="Cerrar">&times;</button>
        </div>

        <div className="quote-cart__content">
          {items.length === 0 ? (
            <div className="quote-cart__empty">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="quote-cart__empty-icon">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p className="quote-cart__empty-text">Agrega productos para cotizar</p>
            </div>
          ) : (
            <ul className="quote-cart__list">
              {items.map((item, index) => (
                <li key={item.id || `quote-item-${index}`} className="quote-cart__item">
                  <div className="quote-cart__item-info">
                    <h4 className="quote-cart__item-name">{item.name}</h4>
                    {item.compatibleBrands && item.compatibleBrands.length > 0 && (
                      <span className="quote-cart__item-brands">{item.compatibleBrands.join(', ')}</span>
                    )}
                  </div>
                  <button 
                    className="quote-cart__item-remove" 
                    onClick={() => removeItem(item.id)} 
                    aria-label={`Eliminar ${item.name} de la cotización`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="quote-cart__footer">
            <div className="quote-cart__notes">
              <label htmlFor="quote-notes" className="quote-cart__notes-label">Notas adicionales (opcional)</label>
              <textarea 
                id="quote-notes" 
                className="quote-cart__notes-input" 
                rows="3" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej: Necesito saber la disponibilidad..."
              ></textarea>
            </div>
            <div className="quote-cart__actions">
              <button className="btn btn--primary quote-cart__btn" onClick={handleWhatsApp}>
                Enviar por WhatsApp
              </button>
              <button className="btn btn--outline quote-cart__btn" onClick={handleEmail}>
                Enviar por Email
              </button>
            </div>
            <button className="quote-cart__clear" onClick={clearCart}>
              Vaciar lista
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
