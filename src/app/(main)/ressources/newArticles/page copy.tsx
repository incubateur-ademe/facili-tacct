'use client';
import ClockIcon from "@/assets/icons/clock_icon_black.svg";
import LocationIcon from "@/assets/icons/location_icon_black.svg";
import TestImageTuile from '@/assets/images/test_tuile.png';
import { TagsSimples } from '@/design-system/base/Tags';
import { Body, H1 } from '@/design-system/base/Textes';
import { NewContainer } from "@/design-system/layout";
import { FiltresOptions, TousLesArticles } from '@/lib/ressources/toutesRessources';
import Image from "next/image";
import { useEffect, useState } from 'react';
import styles from './articles.module.scss';

const listeTitresArticles = [
  "Quelles données climatiques relire en priorité ?",
  "Comment interpréter les modèles climatiques ?",
  "Les impacts du changement climatique sur la biodiversité"
];

const PageArticleCustom = () => {
  const article = TousLesArticles[0]; // Exemple : récupérer le premier article
  const territoireOptions = FiltresOptions.find(f => f.titre === 'Territoire')?.options || [];
  const [activeAnchor, setActiveAnchor] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const titre of listeTitresArticles) {
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
  }, []);

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
    <NewContainer size="xl">
      <div className={styles.articleTopBlocContainer}>
        <div className={styles.articleTopBlocImage}>
          <Image
            src={TestImageTuile}
            alt="Image de l'article"
            width={384}
            style={{
              borderRadius: "2rem 2rem 2rem 0"
            }}
          />
        </div>
        <div className={styles.articleTopBlocMeta}>
          <div className={styles.content}>
            <div className={styles.articleMetaBadge}>
              {article.filtres?.filter(filtre => !territoireOptions.includes(filtre)).map((filtre, index) => (
                <TagsSimples
                  key={index}
                  texte={filtre}
                  couleur={filtre === "M'inspirer" ? "#FFC9E4" : filtre === "Me former" ? "#F6F69B" : filtre === "Agir" ? "#FFE2AE" : "#E3FAF9"}
                  couleurTexte={filtre === "M'inspirer" ? "#971356" : filtre === "Me former" ? "#5A5A10" : filtre === "Agir" ? "#7E5202" : "var(--boutons-primaire-3)"}
                  taille="small"
                />
              ))}
            </div>
            <H1 style={{ color: "#2B4B49", margin: 0 }}>{article.titre}</H1>
            <div className={styles.articleMetaInfo}>
              <div className={styles.tempsLecture}>
                <Image src={ClockIcon} alt="Temps de lecture" width={24} height={24} />
                <Body weight="bold" size="lg">{article.tempsLecture} min</Body>
              </div>
              <div className={styles.localisation}>
                <Image src={LocationIcon} alt="Localisation" width={24} height={24} />
                <Body weight="bold" size="lg">{article.filtres?.filter(filtre => territoireOptions.includes(filtre))}</Body>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.articleContent}>
        <div className={styles.sommaire}>
          <nav className={styles.sommaireSticky}>
            <p className={styles.sommaireTitle}>SOMMAIRE</p>
            <ul className={styles.sommaireList}>
              {listeTitresArticles.map((titre) => (
                <li key={titre}>
                  <button
                    onClick={() => scrollToAnchor(titre)}
                    className={`${styles.sommaireItem} ${activeAnchor === titre ? styles.itemActive : ''
                      }`}
                  >
                    {titre}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.article}>
          {listeTitresArticles.map((titre) => (
            <section key={titre} id={titre} className={styles.articleSection}>
              <h2>{titre}</h2>
              <p>Contenu de la section...</p>
              <div style={{ minHeight: '400px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </section>
          ))}
        </div>
      </div>

    </NewContainer>
  );
}

export default PageArticleCustom;
