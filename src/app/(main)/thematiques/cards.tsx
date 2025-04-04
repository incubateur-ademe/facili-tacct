'use client';
import { thematiques } from '@/lib/thematiques';
import Badge from '@codegouvfr/react-dsfr/Badge';
import { Card } from '@codegouvfr/react-dsfr/Card';
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
      {thematiques.bientot_disponible.map((thematique, i) => (
        <div style={{ width: 360 }} key={`thematiqueBientotDispo${i}`}>
          <Card
            background
            border
            shadow={true}
            imageUrl={thematique.imageUrl}
            imageAlt=""
            title={thematique.thematique}
            titleAs="h2"
            size="medium"
            classes={{
              imgTag: 'fr-ratio-32x9'
            }}
            end={
              <Badge noIcon severity="new">
                Bientôt disponible
              </Badge>
            }
          />
        </div>
      ))}
    </div>
  );
};
