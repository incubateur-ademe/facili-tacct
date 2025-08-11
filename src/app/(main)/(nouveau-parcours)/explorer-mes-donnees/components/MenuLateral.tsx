'use client';

import { ErrorDisplay } from '@/app/ErrorDisplay';
import retourIcon from '@/assets/icons/retour_icon_black.svg';
import { Body, H2, SousTitre2 } from '@/design-system/base/Textes';
import { handleRedirection } from '@/hooks/Redirections';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { sommaireThematiques } from '../../roue-systemique/constantes/textesThematiques';
import styles from '../explorerDonnees.module.scss';
import { useExplorer } from './ExplorerContext';

const Etape2Sommaire = [
  {
    id: "section1",
    titre: "Exemple",
  },
  {
    id: "section2",
    titre: "Données clés nationales",
  },
  {
    id: "section3",
    titre: "Point d’étape avec TACCT",
  },
  {
    id: "section4",
    titre: "Poursuivez votre exploration",
  }
]

export const MenuLateral = () => {
  const [topPosition, setTopPosition] = useState<number>(173);
  const [navigationHeight, setNavigationHeight] = useState<number>(0);
  const [openEtape1, setOpenEtape1] = useState<boolean>(true);
  const [openEtape2, setOpenEtape2] = useState<boolean>(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const libelle = searchParams.get('libelle');
  const type = searchParams.get('type');
  const thematique = searchParams.get('thematique') as "Confort thermique";
  const { showEtape, setShowEtape } = useExplorer();
  const ongletsMenu = sommaireThematiques[thematique];
  const [activeAnchorEtape1, setActiveAnchorEtape1] = useState<string>(ongletsMenu?.thematiquesLiees?.[0].sousCategories[0]);
  const [activeAnchorEtape2, setActiveAnchorEtape2] = useState<string>('');
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  const redirectionRetour = handleRedirection({
    searchCode: code || '',
    searchLibelle: libelle || '',
    typeTerritoire: type as 'epci' | 'commune' | 'pnr' | 'petr' | 'departement',
    page: 'roue-systemique'
  });

  useEffect(() => {
    if (pendingScroll) {
      const timeoutId = setTimeout(() => {
        scrollToAnchor(pendingScroll);
        setPendingScroll(null);
      }, 10);
      return () => clearTimeout(timeoutId);
    }
  }, [showEtape, pendingScroll]);

  // Mesurer la hauteur de la div de navigation
  useEffect(() => {
    const measureHeight = () => {
      if (navigationRef.current) {
        const height = navigationRef.current.offsetHeight;
        setNavigationHeight(height);
      }
    };
    measureHeight();
    const timeoutId = setTimeout(measureHeight, 50);

    return () => clearTimeout(timeoutId);
  }, [openEtape1, openEtape2]);

  // Fonction pour gérer le scroll et mettre en surbrillance l'élément actuel
  useEffect(() => {
    if (ongletsMenu === undefined) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = 173;
      const footerHeight = 330;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      let newTopPosition = Math.max(0, headerHeight - scrollY);
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);
      const screenHeightAboveFooter = windowHeight + (distanceFromBottom - footerHeight)
      if (distanceFromBottom <= footerHeight &&
        screenHeightAboveFooter < (navigationHeight + 101)
      ) {
        newTopPosition = (screenHeightAboveFooter - (navigationHeight + 150));
      }
      setTopPosition(newTopPosition);

      // Gestion du surlignage des éléments selon l'étape active
      const scrollPosition = scrollY + 200; // Offset pour la détection
      if (showEtape === 1) {
        const allAnchors = ongletsMenu.thematiquesLiees.flatMap(section => section.sousCategories);
        for (const item of allAnchors) {
          const element = document.getElementById(item);
          if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              setActiveAnchorEtape1(item);
              break;
            }
          }
        }
      } else if (showEtape === 2) {
        const allAnchors = Etape2Sommaire.map(item => item.id);
        for (const itemId of allAnchors) {
          const element = document.getElementById(itemId);
          if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              setActiveAnchorEtape2(itemId);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showEtape, navigationHeight]);

  const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleItemClickEtape1 = (item: string) => {
    setShowEtape(1);
    setActiveAnchorEtape2('');
    setPendingScroll(item);
  };
  const handleItemClickEtape2 = (item: { id: string; titre: string }) => {
    setShowEtape(2);
    setActiveAnchorEtape1('');
    setPendingScroll(item.id);
  };
  const handleEtape1Toggle = () => {
    setOpenEtape1(!openEtape1);
  };
  const handleEtape2Toggle = () => {
    setOpenEtape2(!openEtape2);
  };

  return (
    <>
      {ongletsMenu ? (
        <nav
          className={styles.sidebarContainer}
          style={{
            top: `${topPosition}px`,
            height: `calc(100vh - ${topPosition}px)`,
            borderRight: '1px solid var(--gris-medium)',
            padding: "1.5rem 1.25rem",
            zIndex: 50
          }}
          aria-label="Navigation dans la page"
          role="navigation"
        >
          <div>
            {/* Bouton de retour */}
            <div
              style={{ borderBottom: '1px solid var(--gris-medium)' }}
            >
              <a
                href={redirectionRetour}
                className="flex items-center gap-2"
                style={{ backgroundImage: 'none' }}
              >
                <Image src={retourIcon} alt="" />
                <Body size='sm' weight='bold'>Retour aux thématiques</Body>
              </a>

              {/* Titre principal */}
              <H2 style={{ fontSize: '1.25rem', margin: "18px 0" }}>
                {thematique}
              </H2>
            </div>
          </div>
          {/* Navigation */}
          <div className="flex flex-col" ref={navigationRef}>
            <button
              onClick={handleEtape1Toggle}
              className={styles.BoutonEtapes}
            >
              {openEtape1 ? (
                <div
                  className={styles['chevron-right-green']}
                  style={{ transform: 'rotate(90deg)', transition: 'transform 0.2s ease-in-out' }}
                />
              ) : (
                <div
                  className={styles['chevron-right-black']}
                  style={{ transform: 'rotate(0deg)', transition: 'transform 0.2s ease-in-out' }}
                />
              )}
              <Body size='lg' weight='bold' style={{ color: openEtape1 ? "var(--principales-vert)" : "black" }}>
                Étape 1. <br />Données de votre territoire
              </Body>
            </button>
            <div className={styles.menuEtape1}>
              {openEtape1 && ongletsMenu?.thematiquesLiees.map((thematique, id) => (
                <div key={id} className="mb-4">
                  <SousTitre2
                    style={{
                      color: "var(--principales-rouge)",
                      padding: "0 0 0.5rem"
                    }}
                  >
                    {thematique.icone}{" "}{thematique.thematique}
                  </SousTitre2>
                  <div className="">
                    {thematique.sousCategories.map((item) => (
                      <button
                        key={item}
                        onClick={() => handleItemClickEtape1(item)}
                        className={`block w-full text-left p-2 text-sm rounded-md transition-colors ${activeAnchorEtape1 === item && showEtape === 1
                          ? styles.itemSurligne
                          : styles.itemNonSurligne
                          }`}
                      >
                        <Body size='sm'>{item}</Body>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleEtape2Toggle}
              className={styles.BoutonEtapes}
            >
              {openEtape2 ? (
                <div
                  className={styles['chevron-right-green']}
                  style={{ transform: 'rotate(90deg)', transition: 'transform 0.2s ease-in-out' }}
                />
              ) : (
                <div
                  className={styles['chevron-right-black']}
                  style={{ transform: 'rotate(0deg)', transition: 'transform 0.2s ease-in-out' }}
                />
              )}
              <Body size='lg' weight='bold' style={{ color: openEtape2 ? "var(--principales-vert)" : "black" }}>
                Étape 2. <br />Diagnostiquez les impacts
              </Body>
            </button>
            <div className={styles.menuEtape2}>
              {
                openEtape2 && Etape2Sommaire.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClickEtape2(item)}
                    className={`block w-full text-left ${activeAnchorEtape2 === item.id && showEtape === 2
                      ? styles.itemSurligne
                      : styles.itemNonSurligne
                      }`}
                  >
                    <Body size='sm'>{item.titre}</Body>
                  </button>
                ))
              }
            </div>
          </div>
        </nav>
      ) : <ErrorDisplay code="404" />
      }
    </>
  )
};
