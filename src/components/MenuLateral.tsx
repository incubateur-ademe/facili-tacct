'use client';

import { ErrorDisplay } from '@/app/ErrorDisplay';
import retourIcon from '@/assets/icons/retour_icon_black.svg';
import { Body, H2, SousTitre2 } from '@/design-system/base/Textes';
import { handleRedirection, handleRedirectionThematique } from '@/hooks/Redirections';
import { GetErosionCotiere } from '@/lib/queries/postgis/cartographie';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { sommaireThematiques } from '../app/(main)/(nouveau-parcours)/thematiques/constantes/textesThematiques';
import styles from './components.module.scss';

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
  const searchParams = useSearchParams();
  const params = usePathname();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const thematique = searchParams.get('thematique') as "Confort thermique" | "Gestion des risques" | "Aménagement" | "Eau" | "Biodiversité" | "Agriculture et pêche";
  const [topPosition, setTopPosition] = useState<number>(173);
  const [navigationHeight, setNavigationHeight] = useState<number>(0);
  const [openEtape1, setOpenEtape1] = useState<boolean>(params === "/donnees" ? true : false);
  const [openEtape2, setOpenEtape2] = useState<boolean>(params === "/impacts" ? true : false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const ongletsMenu = sommaireThematiques[thematique];
  const [activeAnchorEtape1, setActiveAnchorEtape1] = useState<string>('');
  const [activeAnchorEtape2, setActiveAnchorEtape2] = useState<string>('');
  const [urlAnchor, setUrlAnchor] = useState<string | null>(null);
  const [isErosionCotiere, setIsErosionCotiere] = useState<boolean>(false);

  const redirectionRetour = handleRedirection({
    searchCode: code || '',
    searchLibelle: libelle || '',
    typeTerritoire: type as 'epci' | 'commune' | 'pnr' | 'petr' | 'departement',
    page: 'thematiques'
  });

  useEffect(() => {
    if (window.location.hash) {
      const anchor = decodeURIComponent(window.location.hash.substring(1));
      setUrlAnchor(anchor);
      requestAnimationFrame(() => scrollToAnchor(anchor));
    }
    void (async () => {
      const erosionCotiere = await GetErosionCotiere(code, libelle, type);
      if (erosionCotiere.length > 0) {
        setIsErosionCotiere(true);
      }
    })()
  }, []);

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
  }, [openEtape1, openEtape2, isErosionCotiere]);

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
      if (params === "/donnees") {
        const allAnchors = ongletsMenu.thematiquesLiees.flatMap(section => section.sousCategories);
        allAnchors.push("Érosion côtière");
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
      } else if (params === "/impacts") {
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
  }, [navigationHeight, openEtape1, openEtape2]);

  const scrollToAnchor = (anchor: string) => {
    const decodedAnchor = decodeURIComponent(anchor);
    const element = document.getElementById(decodedAnchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleItemClickEtape1 = (item: string) => {
    if (params !== "/donnees") {
      window.location.href = handleRedirectionThematique({
        code: code || '',
        libelle: libelle || '',
        type: type as 'epci' | 'commune' | 'pnr' | 'petr' | 'departement',
        page: 'donnees',
        thematique: thematique,
        anchor: item ? item : ""
      });
      return;
    }
    setUrlAnchor(item);
    setActiveAnchorEtape2('');
    scrollToAnchor(item);
  };
  const handleItemClickEtape2 = (item: { id: string; titre: string }) => {
    if (params !== "/impacts") {
      window.location.href = handleRedirectionThematique({
        code: code || '',
        libelle: libelle || '',
        type: type as 'epci' | 'commune' | 'pnr' | 'petr' | 'departement',
        page: 'impacts',
        thematique: thematique,
        anchor: item ? item.id : ""
      });
      return;
    }
    setUrlAnchor(item.id);
    setActiveAnchorEtape1('');
    scrollToAnchor(item.id);
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
                {thematique === "Confort thermique" ? <>Étape 1. <br />Données de votre territoire</> : "Données de votre territoire"}
              </Body>
            </button>
            <div className={thematique === "Confort thermique" ? styles.menuEtapeDonnees : styles.menuEtapeDonneesSansImpact}>
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
                        className={`block w-full text-left p-2 text-sm rounded-md transition-colors ${activeAnchorEtape1 === item
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
              {
                isErosionCotiere && thematique === "Gestion des risques" && (
                  <>
                    <SousTitre2
                      style={{
                        color: "var(--principales-rouge)",
                        padding: "0.5rem 0 0.5rem"
                      }}
                    >
                      🏗️ Aménagement
                    </SousTitre2>
                    <div className="">
                      <button
                        key={"Érosion"}
                        onClick={() => handleItemClickEtape1("Érosion côtière")}
                        className={`block w-full text-left p-2 text-sm rounded-md transition-colors ${activeAnchorEtape1 === "Érosion côtière"
                          ? styles.itemSurligne
                          : styles.itemNonSurligne
                          }`}
                      >
                        <Body size='sm'>Érosion côtière</Body>
                      </button>
                    </div>
                  </>
                )
              }
            </div>
            {thematique === "Confort thermique" ? (
              <>
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
                <div className={styles.menuEtapeImpacts}>
                  {
                    openEtape2 && Etape2Sommaire.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClickEtape2(item)}
                        className={`block w-full text-left ${activeAnchorEtape2 === item.id
                          ? styles.itemSurligne
                          : styles.itemNonSurligne
                          }`}
                      >
                        <Body size='sm'>{item.titre}</Body>
                      </button>
                    ))
                  }
                </div>
              </>
            ) : ""
            }
          </div>
        </nav>
      ) : <ErrorDisplay code="404" />
      }
    </>
  )
};
