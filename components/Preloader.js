'use client';

import { useState, useEffect, useRef } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [statusText, setStatusText] = useState('INICIANDO SISTEMA...');
  const videoRef = useRef(null);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    const video = videoRef.current;
    if (video) {
      // Ensure playback starts immediately
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, keep muted
          video.muted = true;
          video.play();
        });
      }
    }

    // Safety fallback: if video is blocked or takes too long, never trap the user
    const safetyTimeout = setTimeout(() => {
      handleFinish();
    }, 11000);

    return () => {
      clearTimeout(safetyTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const current = video.currentTime;
    const dur = video.duration;
    const pct = Math.min(Math.round((current / dur) * 100), 100);
    setProgress(pct);

    // Sync status text with video sequence
    if (current < 3.2) {
      setStatusText('ESCANEANDO SILUETA & REPUESTOS...');
    } else if (current < 6.8) {
      setStatusText('MATERIALIZANDO LOGO 3D INNOVA...');
    } else {
      setStatusText('¡SISTEMA LISTO PARA RODAR!');
    }

    // Smoothly start fade-out 0.4s before video finishes
    if (current >= dur - 0.45 && !fading) {
      handleFinish();
    }
  };

  const handleFinish = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = '';
    }, 550);
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSkip = () => {
    handleFinish();
  };

  if (!mounted) return null;

  return (
    <aside 
      className={`preloader-cinematic ${fading ? 'preloader-cinematic--fading' : ''}`}
      role="status"
      aria-label="Cargando Innova Camionetas"
    >
      {/* Background ambient lighting */}
      <div className="preloader-cinematic__ambient preloader-cinematic__ambient--gold" />
      <div className="preloader-cinematic__ambient preloader-cinematic__ambient--cyan" />

      {/* Top Controls */}
      <div className="preloader-cinematic__top-controls">
        <button 
          className="preloader-cinematic__btn preloader-cinematic__btn--sound" 
          onClick={toggleSound}
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          title={isMuted ? 'Activar sonido cinemático' : 'Silenciar'}
        >
          {isMuted ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
              <span>Activar sonido</span>
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span>Sonido activo</span>
            </>
          )}
        </button>

        <button 
          className="preloader-cinematic__btn preloader-cinematic__btn--skip" 
          onClick={handleSkip} 
          aria-label="Saltar introducción"
        >
          <span>Saltar intro</span>
          <span className="preloader-cinematic__skip-icon">✕</span>
        </button>
      </div>

      {/* Main Video Viewport */}
      <div className="preloader-cinematic__viewport">
        <div className="preloader-cinematic__video-wrapper">
          <video
            ref={videoRef}
            src="/preloader.mp4"
            poster="/preloader-poster.jpg"
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleFinish}
            onError={handleFinish}
            className="preloader-cinematic__video"
          />
          {/* Subtle edge vignette to blend video edges seamlessly */}
          <div className="preloader-cinematic__video-glow" />
        </div>
      </div>

      {/* HUD Progress Bar & Status */}
      <div className="preloader-cinematic__hud">
        <div className="preloader-cinematic__hud-row">
          <span className="preloader-cinematic__hud-status">{statusText}</span>
          <span className="preloader-cinematic__hud-percent">{progress}%</span>
        </div>

        <div className="preloader-cinematic__track">
          <div 
            className="preloader-cinematic__fill" 
            style={{ width: `${progress}%` }} 
          />
          <div 
            className="preloader-cinematic__laser-point" 
            style={{ left: `${progress}%` }} 
          />
        </div>

        <div className="preloader-cinematic__footer-row">
          <span className="preloader-cinematic__subtext">INNOVA CAMIONETAS • DISTRIBUIDOR OFICIAL</span>
          <span className="preloader-cinematic__subtext">VALDIVIA, CHILE</span>
        </div>
      </div>
    </aside>
  );
}
