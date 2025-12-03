"use client";

import { TuileVerticale } from "@/components/Tuile";
import { TagsSimples } from "@/design-system/base/Tags";
import { FiltresOptions, ToutesRessources } from "@/lib/ressources/toutesRessources";
import styles from "./ressources.module.scss";

export const SliderArticles = ({
  listeArticles,
  sliderRef
}: {
  listeArticles: ToutesRessources[],
  sliderRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const territoireOptions = FiltresOptions.find(f => f.titre === 'Territoire')?.options || [];
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
            listeArticles?.map((article, index) => (
              <TuileVerticale
                key={index}
                titre={article.titre}
                description={article.description}
                tags={article.filtres?.filter(filtre => !territoireOptions.includes(filtre)).map((filtre, index) => (
                  <TagsSimples
                    key={index}
                    texte={filtre}
                    couleur={filtre === "M'inspirer" ? "#FFC9E4" : filtre === "Me former" ? "#F6F69B" : filtre === "Agir" ? "#FFE2AE" : "#E3FAF9"}
                    couleurTexte={filtre === "M'inspirer" ? "#971356" : filtre === "Me former" ? "#5A5A10" : filtre === "Agir" ? "#7E5202" : "var(--boutons-primaire-3)"}
                    taille="small"
                  />
                ))}
                image={article.image}
                lien={article.lien}
                tempsLecture={article.tempsLecture}
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
