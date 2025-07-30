"use client";

import { useEffect, useState } from 'react';

const MiddlePageTrigger = () => {
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = (1 / 2) * document.body.offsetHeight;
      setShowEnd(scrollPosition >= threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showEnd ? <div className="milieuPage" /> : null;
};

export default MiddlePageTrigger;
