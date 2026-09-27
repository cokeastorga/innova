'use client';

import React, { useEffect } from 'react';
import './ReferenceImageModal.css';

export default function ReferenceImageModal({ 
  isOpen, 
  onClose, 
  onProceed, 
  modelName = '' 
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleDismiss();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDismiss = () => {
    if (onProceed) {
      onProceed();
    } else if (onClose) {
      onClose();
    }
  };

  return (
    <div className="ref-modal__overlay" onClick={handleDismiss} role="dialog" aria-modal="true">
      <div className="ref-modal__container" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="ref-modal__close-btn" 
          onClick={handleDismiss} 
          aria-label="Cerrar aviso"
        >
          ✕
        </button>

        <div className="ref-modal__icon-circle">
          📸
        </div>

        <h3 className="ref-modal__title">
          Imágenes de Referencia
        </h3>

        {modelName && (
          <span className="ref-modal__model-tag">{modelName}</span>
        )}

        <div className="ref-modal__points">
          <div className="ref-modal__point">
            <span className="ref-modal__point-icon">⚠️</span>
            <p>
              Las fotos son <strong>referenciales</strong> y pueden variar según la versión y año de tu camioneta.
            </p>
          </div>

          <div className="ref-modal__point ref-modal__point--highlight">
            <span className="ref-modal__point-icon">🚗</span>
            <p>
              Para una atención rápida y precisa, <strong>especifica tu año o patente</strong> al cotizar.
            </p>
          </div>
        </div>

        <button 
          type="button" 
          className="btn btn--primary ref-modal__btn" 
          onClick={handleDismiss}
        >
          Ver repuestos y cotizar →
        </button>
      </div>
    </div>
  );
}
