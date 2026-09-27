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
        <div className="ref-modal__header">
          <div className="ref-modal__header-left">
            <span className="ref-modal__icon">📸</span>
            <div>
              <span className="ref-modal__tag">AVISO ANTES DE COTIZAR</span>
              <h3 className="ref-modal__title">
                {modelName ? `Repuestos para ${modelName}` : 'Imágenes de Carácter Referencial'}
              </h3>
            </div>
          </div>
          <button 
            type="button" 
            className="ref-modal__close-btn" 
            onClick={handleDismiss} 
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        <div className="ref-modal__body">
          {/* Advertencia principal */}
          <div className="ref-modal__highlight-box">
            <span className="ref-modal__highlight-icon">⚠️</span>
            <div className="ref-modal__highlight-content">
              <h4 className="ref-modal__highlight-title">Las fotos de repuestos son de carácter referencial</h4>
              <p className="ref-modal__highlight-text">
                Las imágenes mostradas en el catálogo son ilustrativas. La forma física, anclajes, medidas, número de estrías o conectores pueden variar según la marca, modelo, versión (4x4 o 4x2) y año exacto de tu camioneta.
              </p>
            </div>
          </div>

          {/* Solicitud de Año / Patente para mejor atención */}
          <div className="ref-modal__attention-card">
            <div className="ref-modal__attention-badge">
              <span className="ref-modal__pulse-dot"></span>
              PARA UNA MEJOR ATENCIÓN
            </div>
            <h4 className="ref-modal__attention-title">Especifica el Año o Patente de tu Camioneta</h4>
            <p className="ref-modal__attention-text">
              Para garantizarte un repuesto 100% compatible y evitar errores de compatibilidad, 
              <strong> te solicitamos indicar el año o patente</strong> al momento de cotizar o llenar tu carrito. Nuestro equipo técnico validará el despiece oficial antes del despacho.
            </p>
          </div>

          {/* Beneficios */}
          <div className="ref-modal__pills">
            <span className="ref-modal__pill">✓ Calce exacto garantizado</span>
            <span className="ref-modal__pill">✓ Validación previa con patente o VIN</span>
            <span className="ref-modal__pill">✓ Asesoría directa por WhatsApp</span>
          </div>
        </div>

        <div className="ref-modal__footer">
          <button 
            type="button" 
            className="btn btn--primary ref-modal__btn" 
            onClick={handleDismiss}
          >
            Entendido, ver repuestos y cotizar →
          </button>
          <span className="ref-modal__footer-note">
            Haz clic para explorar los repuestos disponibles, armar tu carrito o cotizar.
          </span>
        </div>
      </div>
    </div>
  );
}
