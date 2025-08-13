'use client';

import { nomThematiques } from '@/app/(main)/(nouveau-parcours)/roue-systemique/constantes/categories';
import roueImage from '@/assets/images/roue_systemique_shape.png';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { couleursBoutons } from '@/design-system/couleurs';
import { handleRedirection, handleRedirectionThematique } from '@/hooks/Redirections';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from '../impacts.module.scss';

interface ThematiquesLieesNavigationProps {
  thematiqueSelectionnee?: string;
  onThematiqueClick?: (thematique: string) => void;
}

export const ThematiquesLieesNavigation = ({
  thematiqueSelectionnee = 'Confort thermique',
  onThematiqueClick
}: ThematiquesLieesNavigationProps) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;

  // Refs pour mesurer les positions des éléments
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const centerSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const rightButtonsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [lineCalculations, setLineCalculations] = useState<{
    leftToCenter: { width: number; angle: number };
    rightLines: Array<{ width: number; angle: number; yOffset: number }>;
  }>({
    leftToCenter: { width: 0, angle: 0 },
    rightLines: []
  });

  const thematique = nomThematiques.find(t => t.label === thematiqueSelectionnee);
  if (!thematique) {
    console.warn(`Thématique "${thematiqueSelectionnee}" non trouvée`);
    return null;
  }
  const thematiquesLiees = thematique.liens || [];

  // Fonction pour calculer les positions des lignes
  const calculateLinePositions = () => {
    if (!leftSectionRef.current || !centerSectionRef.current || !rightSectionRef.current) return;

    // Calcul de la ligne gauche vers centre
    const leftRect = leftSectionRef.current.getBoundingClientRect();
    const centerRect = centerSectionRef.current.getBoundingClientRect();
    const leftToCenterDistance = centerRect.left - leftRect.right - 30;
    const leftToCenterAngle = 0; // Ligne horizontale

    // Calcul des lignes du centre vers la droite
    const rightLines = thematiquesLiees.map((_, index) => {
      const rightButton = rightButtonsRef.current[index];
      if (!rightButton) return { width: 0, angle: 0, yOffset: 0 };
      const buttonRect = rightButton.getBoundingClientRect();
      const centerY = centerRect.top + centerRect.height / 2;
      const buttonY = buttonRect.top + buttonRect.height / 2;
      const horizontalDistance = buttonRect.left - centerRect.right;
      const verticalDistance = buttonY - centerY;
      const lineLength = Math.sqrt(horizontalDistance * horizontalDistance + verticalDistance * verticalDistance) - 30;
      const angle = Math.atan2(verticalDistance, horizontalDistance) * (180 / Math.PI);
      return {
        width: lineLength,
        angle: angle,
        yOffset: verticalDistance
      };
    });
    setLineCalculations({
      leftToCenter: { width: leftToCenterDistance, angle: leftToCenterAngle },
      rightLines
    });
  };

  useEffect(() => {
    const handleResize = () => {
      // Délai pour permettre au DOM de se mettre à jour
      setTimeout(calculateLinePositions, 100);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [thematiquesLiees.length]); // Recalculer si le nombre de thématiques change

  const handleThematiqueClick = (thematiqueLabel: string) => {
    if (onThematiqueClick) {
      onThematiqueClick(thematiqueLabel);
    }
  };

  return (
    <div className={styles.thematiquesLieesContainer}>
      {/* Partie gauche : Image de la roue */}
      <div ref={leftSectionRef} className={styles.leftSection}>
        <div className={styles.roueImageContainer}>
          <Image
            src={roueImage}
            alt="Roue systémique"
            className={styles.roueImage}
            priority
          />
          {/* Bouton centré sur l'image de la roue */}
          <div className={styles.retourButton}>
            <BoutonPrimaireClassic
              text="Retour aux thématiques"
              size="md"
              link={handleRedirection({
                searchCode: code || '',
                searchLibelle: libelle || '',
                typeTerritoire: type as 'epci' | 'commune' | 'pnr' | 'petr' | 'departement',
                page: 'roue-systemique'
              })}
            />
          </div>
        </div>
        {/* Ligne de connexion vers le centre - maintenant dynamique */}
        <div
          className={`${styles.connectionLine} ${styles.leftToCenter}`}
          style={{
            width: `${lineCalculations.leftToCenter.width}px`,
            transform: `rotate(${lineCalculations.leftToCenter.angle}deg)`
          }}
        />
      </div>

      {/* Partie centrale : Bouton de la thématique principale */}
      <div ref={centerSectionRef} className={styles.centerSection}>
        <div
          style={{
            color: "var(--principales-vert)",
            backgroundColor: "white",
            border: `1px solid ${couleursBoutons.primaire[1]}`,
            padding: '4px 12px',
            width: "fit-content",
            alignItems: 'center',
            borderRadius: '60px',
          }}
        >
          {thematique.label}
        </div>
        {/* Conteneur pour les lignes vers la droite */}
        {thematiquesLiees.length > 0 && (
          <div className={styles.rightConnectionLines}>
            {lineCalculations.rightLines.map((lineData, index) => (
              <div
                key={`line-${index}`}
                className={styles.rightConnectionLine}
                style={{
                  width: `${lineData.width}px`,
                  transform: `rotate(${lineData.angle}deg)`,
                  transformOrigin: 'left center',
                  top: '0px',
                  left: '0px',
                  backgroundColor: 'var(--principales-vert)',
                  height: '1px'
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Partie droite : Thématiques liées */}
      <div ref={rightSectionRef} className={styles.rightSection}>
        {thematiquesLiees.length > 0 ? (
          thematiquesLiees.map((lieeLabel, index) => (
            <div
              key={`thematique-wrapper-${index}-${lieeLabel}`}
              ref={(el) => {
                rightButtonsRef.current[index] = el;
              }}
            >
              <BoutonPrimaireClassic
                text={lieeLabel}
                size="md"
                onClick={() => window.location.href = handleRedirectionThematique({
                  code: code,
                  libelle: libelle,
                  type: type as 'epci' | 'commune' | 'pnr' | 'petr' | 'departement',
                  page: 'donnees',
                  thematique: lieeLabel,
                  anchor: ""
                })}
              />
            </div>
          ))
        ) : (
          <div style={{
            padding: '1rem',
            color: 'var(--gris-medium-dark)',
            fontStyle: 'italic'
          }}>
            Aucune thématique liée
          </div>
        )}
      </div>
    </div>
  );
};
