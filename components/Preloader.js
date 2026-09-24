'use client';

import { useState, useEffect, useRef } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);
  const [stage, setStage] = useState(1); // 1: Blueprint, 2: 3D Solid, 3: Cinematic Flare
  const [progress, setProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [statusText, setStatusText] = useState('ESCANEANDO MODELOS...');
  const cardRef = useRef(null);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    // Cinematic Storyboard Stage Timeline:
    // 0.0s - 1.0s : Step 1 -> Blueprint Hologram wireframe with anamorphic beam
    // 1.0s - 1.9s : Step 2 -> Materialize 3D metallic solid logo
    // 1.9s - 2.8s : Step 3 -> Specular flare sweep across hood + Cargando HUD
    const stage2Timer = setTimeout(() => {
      setStage(2);
      setStatusText('MATERIALIZANDO REPUESTOS OEM...');
    }, 1000);

    const stage3Timer = setTimeout(() => {
      setStage(3);
      setStatusText('SISTEMA INNOVA 100% OPERATIVO');
    }, 1900);

    // Progress counter (0 to 100% over 2.7s)
    const startTime = Date.now();
    const duration = 2700;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(interval);
    }, 25);

    // Start cinematic fade-out at 2.9s
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2900);

    // Remove component and restore scrolling at 3.3s
    const removeTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = '';
    }, 3350);

    return () => {
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  // Real-time 3D parallax tilt on pointer move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (window.innerWidth / 2);
    const normY = (e.clientY - centerY) / (window.innerHeight / 2);

    setTilt({
      x: -normY * 14,
      y: normX * 16,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Device orientation support for mobile gyroscope 3D tilt
  useEffect(() => {
    const handleOrientation = (e) => {
      if (e.beta !== null && e.gamma !== null) {
        const tiltX = Math.max(Math.min((e.beta - 45) * 0.4, 12), -12);
        const tiltY = Math.max(Math.min(e.gamma * 0.4, 14), -14);
        setTilt({ x: -tiltX, y: tiltY });
      }
    };

    if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    return () => {
      if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, []);

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = '';
    }, 350);
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
      {/* Textured metal background */}
      <div className="preloader__metal-backdrop" />
      <div className="preloader__vignette" />

      {/* Atmospheric ambient glows */}
      <div className="preloader__ambient preloader__ambient--cyan" />
      <div className="preloader__ambient preloader__ambient--orange" />
      <div className="preloader__ambient preloader__ambient--lime" />

      {/* Skip button */}
      <button 
        className="preloader__skip" 
        onClick={handleSkip} 
        aria-label="Saltar introducción"
      >
        Saltar intro ✕
      </button>

      {/* 3D Cinematic Stage */}
      <div className="preloader__stage">
        <div 
          className="preloader__3d-card"
          ref={cardRef}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Card titanium bezel and chamfered border */}
          <div className="preloader__card-frame">
            <div className="preloader__corner-accent preloader__corner--tl" />
            <div className="preloader__corner-accent preloader__corner--tr" />
            <div className="preloader__corner-accent preloader__corner--bl" />
            <div className="preloader__corner-accent preloader__corner--br" />
          </div>

          {/* Viewport for the 3 cinematic layers */}
          <div className="preloader__viewport">
            {/* Step 1: Blueprint Hologram with Laser Flare */}
            <img 
              src="/img/cinematic-stage-2.jpg" 
              alt="Holograma Blueprint" 
              className={`preloader__layer preloader__layer--blueprint ${stage === 1 ? 'preloader__layer--active' : ''}`}
            />

            {/* Step 2: 3D Solid Metallic Logo */}
            <img 
              src="/img/cinematic-stage-3.jpg" 
              alt="Logo 3D Metálico" 
              className={`preloader__layer preloader__layer--solid ${stage === 2 ? 'preloader__layer--active' : ''}`}
            />

            {/* Step 3: Anamorphic Flare Sweep */}
            <img 
              src="/img/cinematic-stage-4.jpg" 
              alt="Destello Cinemático" 
              className={`preloader__layer preloader__layer--flare ${stage === 3 ? 'preloader__layer--active' : ''}`}
            />

            {/* Laser scanning horizontal line in stage 1 */}
            {stage === 1 && <div className="preloader__laser-scanner" />}

            {/* Anamorphic optical horizontal streak in stage 3 */}
            {stage === 3 && <div className="preloader__anamorphic-flare" />}
          </div>

          {/* HUD Tachometer & Status Footer */}
          <div className="preloader__hud">
            <div className="preloader__cargando-row">
              <span className="preloader__cargando-title">CARGANDO...</span>
              <span className="preloader__percent-number">{progress}%</span>
            </div>

            <div className="preloader__progress-track">
              <div 
                className="preloader__progress-bar" 
                style={{ width: `${progress}%` }} 
              />
              <div 
                className="preloader__progress-laser" 
                style={{ left: `${progress}%` }} 
              />
            </div>

            <div className="preloader__meta-row">
              <span className="preloader__status-text">{statusText}</span>
              <span className="preloader__badge-tag">DISTRIBUIDOR OFICIAL</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
