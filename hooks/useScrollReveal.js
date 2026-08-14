'use client';
import { useEffect } from 'react';

/**
 * Hook that observes elements with scroll-reveal classes
 * and adds 'in-view' class when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger, .about-us__header, .about-us__stat-card, .about-us__pillar-card, .why-buy, .motorsport, .contact';

    // Helper to reveal an element
    const revealEl = (el) => {
      if (!el.classList.contains('in-view')) {
        el.classList.add('in-view');
      }
    };

    // Check elements immediately against viewport
    const checkVisibility = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(selectors).forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is partially in or above viewport, reveal it
        if (rect.top <= windowHeight * 0.95) {
          revealEl(el);
        }
      });
    };

    // IntersectionObserver for smooth scroll-triggered transitions
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealEl(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -20px 0px',
        }
      );

      document.querySelectorAll(selectors).forEach((el) => {
        if (!el.classList.contains('in-view')) {
          observer.observe(el);
        }
      });
    }

    // Run initial check
    checkVisibility();

    // Also check on scroll and resize as a robust fallback
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    // Safety timeout: ensure everything becomes visible after 1.2s even if offscreen or observer failed
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll(selectors).forEach(revealEl);
    }, 1500);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      clearTimeout(fallbackTimer);
    };
  }, []);
}
