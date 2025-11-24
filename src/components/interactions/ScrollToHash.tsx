'use client';

import { useEffect } from 'react';

const ScrollToHash = () => {
  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        const element = document.getElementById(decodeURIComponent(window.location.hash.substring(1)));
        if (element) {
          // Attendre que les images et graphiques soient chargés
          if (document.readyState === 'complete') {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.addEventListener('load', () => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, { once: true });
          }
        } else {
          setTimeout(scrollToHash, 100);
        }
      }
    };
    // Retarder légèrement pour laisser le DOM se stabiliser
    const timer = setTimeout(scrollToHash, 250);
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default ScrollToHash;
