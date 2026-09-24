'use client';

import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    // Aesthetic smooth timing: display briefly and fade cleanly
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setMounted(false);
        document.body.style.overflow = '';
      }, 600);
    }, 1100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted) return null;

  return (
    <aside 
      className={`preloader-aesthetic ${fading ? 'preloader-aesthetic--fading' : ''}`}
      role="status"
      aria-label="Cargando"
    >
      <div className="preloader-aesthetic__glow" />
      <div className="preloader-aesthetic__spinner">
        <div className="preloader-aesthetic__ring preloader-aesthetic__ring--outer" />
        <div className="preloader-aesthetic__ring preloader-aesthetic__ring--inner" />
        <div className="preloader-aesthetic__dot" />
      </div>
    </aside>
  );
}
