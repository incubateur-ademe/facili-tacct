'use client';

import { useEffect } from 'react';

const ScrollToHash = () => {
  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        const element = document.getElementById(decodeURIComponent(window.location.hash.substring(1)));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          setTimeout(scrollToHash, 100);
        }
      }
    };
    scrollToHash();
  }, []);

  return null;
};

export default ScrollToHash;
