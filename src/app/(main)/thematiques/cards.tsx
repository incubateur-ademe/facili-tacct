'use client';
import { thematiques } from '@/lib/thematiques';
import { useEffect } from 'react';
import { CardComp } from './card';
import styles from './thematiques.module.scss';

export const Cards = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div className={styles.cardWrapper}>
      {thematiques.disponible.map((thematique, i) => (
        <CardComp
          key={`thematiqueDispo${i}`}
          imageUrl={thematique.imageUrl}
          thematique={thematique.thematique}
          badgeSeverity="success"
          badge="Disponible"
          title={thematique.thematique}
        />
      ))}
    </div>
  );
};
