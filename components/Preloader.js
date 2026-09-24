'use client';

import { useState, useEffect, useRef } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [statusText, setStatusText] = useState('Iniciando sistema...');
  const cardRef = useRef(null);

  useEffect(() => {
    // Lock scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // Status sequence over 3 seconds
    const t1 = setTimeout(() => setStatusText('Cargando catálogo & marcas...'), 900);
    const t2 = setTimeout(() => setStatusText('Preparando repuestos premium...'), 1800);
    const t3 = setTimeout(() => setStatusText('¡Listo para rodar!'), 2500);

    // Progress bar counter
    const startTime = Date.now();
    const duration = 2600; // ms to reach 100%

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(interval);
    }, 30);

    // Start fade-out at 2.6s (total display time ~3.0s)
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2600);

    // Completely unmount and restore scroll at 3.1s
    const removeTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = '';
    }, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  // 3D Parallax Tilt Handler on pointer move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize -1 to 1
    const normX = (e.clientX - centerX) / (window.innerWidth / 2);
    const normY = (e.clientY - centerY) / (window.innerHeight / 2);

    // Max rotation 18 degrees
    setTilt({
      x: -normY * 16,
      y: normX * 18,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = '';
    }, 400);
  };

  if (!mounted) return null;

  return (
    <aside 
      className={`preloader ${fading ? 'preloader--fading' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="status"
      aria-label="Cargando Innova Camionetas"
    >
      {/* Ambient background glow points */}
      <div className="preloader__ambient preloader__ambient--orange" />
      <div className="preloader__ambient preloader__ambient--lime" />
      <div className="preloader__grid-lines" />

      <button 
        className="preloader__skip" 
        onClick={handleSkip} 
        aria-label="Saltar introducción"
      >
        Saltar intro ✕
      </button>

      {/* 3D Parallax Stage */}
      <div className="preloader__stage">
        <div 
          className="preloader__3d-card"
          ref={cardRef}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Glowing backplate with metallic rim */}
          <div className="preloader__card-backplate">
            <div className="preloader__backplate-inner" />
          </div>

          {/* Logo element floating in 3D */}
          <div className="preloader__logo-wrapper">
            <img 
              src="/img/logo.png" 
              alt="Innova Camionetas" 
              className="preloader__logo-img" 
            />
            {/* Shimmer light sweep */}
            <div className="preloader__shimmer" />
          </div>

          <div className="preloader__tagline">
            ESPECIALISTAS EN REPUESTOS
          </div>
        </div>

        {/* Tachometer-style progress bar */}
        <div className="preloader__progress-container">
          <div className="preloader__progress-track">
            <div 
              className="preloader__progress-fill" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          
          <div className="preloader__meta">
            <span className="preloader__status">{statusText}</span>
            <span className="preloader__percent">{progress}%</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
