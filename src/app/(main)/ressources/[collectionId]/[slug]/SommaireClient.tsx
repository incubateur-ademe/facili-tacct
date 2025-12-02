'use client';
import { useEffect, useState } from 'react';
import styles from './articles.module.scss';

interface SommaireClientProps {
  headings: string[];
}

export const SommaireClient = ({ headings }: SommaireClientProps) => {
  const [activeAnchor, setActiveAnchor] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const titre of headings) {
        const element = document.getElementById(titre);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveAnchor(titre);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={styles.sommaireSticky}>
      <p className={styles.sommaireTitle}>SOMMAIRE</p>
      <ul className={styles.sommaireList}>
        {headings.map((titre) => (
          <li key={titre}>
            <button
              onClick={() => scrollToAnchor(titre)}
              className={`${styles.sommaireItem} ${activeAnchor === titre ? styles.itemActive : ''}`}
            >
              {titre}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
