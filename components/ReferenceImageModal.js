'use client';

import React, { useEffect } from 'react';
import './ReferenceImageModal.css';

export default function ReferenceImageModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="ref-modal__overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="ref-modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="ref-modal__header">
          <div className="ref-modal__header-left">
            <span className="ref-modal__icon">📸</span>
            <div>
              <span className="ref-modal__tag">INFORMACIÓN AL CLIENTE</span>
              <h3 className="ref-modal__title">Imágenes de Carácter Referencial</h3>
            </div>
          </div>
          <button 
            type="button" 
            className="ref-modal__close-btn" 
            onClick={onClose} 
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        <div className="ref-modal__body">
          <p className="ref-modal__lead">
            Las fotografías mostradas en nuestro catálogo son de <strong>carácter ilustrativo y referencial</strong> para que puedas identificar la pieza y sus componentes generales.
          </p>

          <div className="ref-modal__grid">
            <div className="ref-modal__card">
              <div className="ref-modal__card-icon">🔧</div>
              <div className="ref-modal__card-content">
                <h4 className="ref-modal__card-title">Variaciones por Modelo y Año</h4>
                <p className="ref-modal__card-text">
                  El diseño físico, medidas milimétricas, número de estrías, fijaciones y conectores eléctricos pueden cambiar según la marca, versión (4x4 o 4x2), tipo de motor y año exacto de fabricación de tu camioneta.
                </p>
              </div>
            </div>

            <div className="ref-modal__card">
              <div className="ref-modal__card-icon">🔍</div>
              <div className="ref-modal__card-content">
                <h4 className="ref-modal__card-title">Validación con Patente o VIN</h4>
                <p className="ref-modal__card-text">
                  Para asegurarte un calce 100% perfecto, te solicitamos tu <strong>patente</strong>, <strong>año exacto</strong> o <strong>número de chasis (VIN)</strong>. Nuestro equipo valida el despiece oficial antes de confirmar tu cotización o despacho.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-modal__tip">
            <span className="ref-modal__tip-icon">🛡️</span>
            <p className="ref-modal__tip-text">
              <strong>Compromiso Innova Camionetas:</strong> Jamás enviamos un repuesto sin antes verificar la compatibilidad exacta con tu vehículo.
            </p>
          </div>
        </div>

        <div className="ref-modal__footer">
          <button 
            type="button" 
            className="btn btn--primary ref-modal__btn" 
            onClick={onClose}
          >
            Entendido, continuar navegando ✓
          </button>
        </div>
      </div>
    </div>
  );
}
