"use client";

import { useEffect, useState } from 'react';

const EndPageTrigger = () => {
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 500;
      if (scrollPosition >= threshold) {
        setShowEnd(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showEnd ? <div className="finPage" /> : null;
};

export default EndPageTrigger;
