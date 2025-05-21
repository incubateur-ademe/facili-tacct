"use client";

import { useEffect, useState } from 'react';

const EndPageTrigger = () => {
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = (3/4) * document.body.offsetHeight;
      setShowEnd(scrollPosition >= threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showEnd ? <div className="finPage" /> : null;
};

export default EndPageTrigger;
