"use client";

import { CarteCollection } from "@/design-system/base/CarteCollection";
import { ressourcesCartes } from "@/lib/ressources/cartes";
import { useRef } from "react";
import styles from "./ressources.module.scss";

export const SliderCollections = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const smoothScroll = (distance: number) => {
    if (!sliderRef.current) return;
    const start = sliderRef.current.scrollLeft;
    const duration = 800;
    const startTime = performance.now();
    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = start + distance * easeProgress;
      }
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };
  const scrollLeft = () => {
    smoothScroll(-344);
  };
  const scrollRight = () => {
    smoothScroll(344);
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.flecheGauche} aria-label="Précédent" onClick={scrollLeft}>
        <span className="fr-icon-arrow-left-line" aria-hidden="true" style={{ color: "var(--boutons-primaire-3)" }}></span>
      </button>
      <div className={styles.sliderInnerWrapper}>
        <div className={styles.sliderWrapper} ref={sliderRef}>
          {
            ressourcesCartes.map((carte, index) => (
              <CarteCollection
                key={index}
                texte={carte.texte}
                image={carte.image}
              />
            ))
          }
        </div>
      </div>
      <button className={styles.flecheDroite} aria-label="Suivant" onClick={scrollRight}>
        <span className="fr-icon-arrow-right-line" aria-hidden="true" style={{ color: "var(--boutons-primaire-3)" }}></span>
      </button>
    </div>
  );
}
