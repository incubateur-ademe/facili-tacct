'use client';

import { useEffect, useRef, useState } from 'react';
import { liensEntreThematiques } from './constantes/categories';
import RoueSystemique from './roue';

const RouePage = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<number>(1); // 1, 2, ou 3
  const [scrollProgress, setScrollProgress] = useState<number>(0); // 0 à 1
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingMenus = useRef<boolean>(true);
  const [isMouseOverMenu, setIsMouseOverMenu] = useState<boolean>(false);

  // Fonction pour récupérer les items liés à celui sélectionné
  const getLinkedItems = (selectedItemName: string | null): string[] => {
    if (!selectedItemName) return [];
    const linkedItems: string[] = [];
    liensEntreThematiques.forEach(link => {
      if (link.source === selectedItemName) {
        linkedItems.push(link.target);
      } else if (link.target === selectedItemName) {
        linkedItems.push(link.source);
      }
    });
    return [...new Set(linkedItems)];
  };

  // Gestion du scroll pour les menus déroulants
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const menuContainer = menuContainerRef.current;
      if (!menuContainer) return;

      // Vérifier si la souris est sur le menu
      if (!isMouseOverMenu) {
        // Si la souris n'est pas sur le menu, permettre le scroll normal
        isScrollingMenus.current = false;
        document.body.style.overflow = 'auto';
        return;
      }

      // Vérifier si on est dans la zone des menus
      const rect = menuContainer.getBoundingClientRect();
      const isInMenuArea = rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.7;

      if (!isInMenuArea) {
        // Si on n'est pas dans la zone des menus, permettre le scroll normal
        isScrollingMenus.current = false;
        document.body.style.overflow = 'auto';
        return;
      }

      // On est dans la zone des menus ET la souris est dessus
      isScrollingMenus.current = true;
      document.body.style.overflow = 'hidden';

      const delta = e.deltaY > 0 ? 1 : -1; // 1 pour scroll down, -1 pour scroll up
      const step = 0.15; // Vitesse de progression

      // Calculer la nouvelle progression
      setScrollProgress(currentProgress => {
        let newProgress = currentProgress + (delta * step);
        newProgress = Math.max(0, Math.min(1.2, newProgress));

        // Vérifier les conditions de sortie
        const isAtStart = currentProgress <= 0;
        const isAtEnd = currentProgress >= 1.2;
        const scrollingUp = delta < 0;
        const scrollingDown = delta > 0;

        // Si on est au début et qu'on scroll vers le haut, permettre de sortir
        if (isAtStart && scrollingUp) {
          document.body.style.overflow = 'auto';
          isScrollingMenus.current = false;
          // Ne pas empêcher l'événement pour permettre le scroll de la page
          return currentProgress;
        }

        // Si on est à la fin et qu'on scroll vers le bas, permettre de sortir
        if (isAtEnd && scrollingDown) {
          document.body.style.overflow = 'auto';
          isScrollingMenus.current = false;
          // Ne pas empêcher l'événement pour permettre le scroll de la page
          return currentProgress;
        }

        // Sinon, on continue avec le scroll dynamique
        e.preventDefault();

        console.log('Scroll progress:', newProgress, 'Delta:', delta); // Debug

        // Déterminer le menu actif basé sur la progression
        if (newProgress <= 0.4) {
          setActiveMenu(1);
        } else if (newProgress <= 0.8) {
          setActiveMenu(2);
        } else {
          setActiveMenu(3);
        }

        return newProgress;
      });
    };

    // Fonction pour réinitialiser quand la souris quitte le menu
    const handleMouseLeave = () => {
      setScrollProgress(0);
      setActiveMenu(1);
      isScrollingMenus.current = false;
      document.body.style.overflow = 'auto';
    };

    // Attacher les événements
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      // Nettoyer : réactiver le scroll au démontage du composant
      document.body.style.overflow = 'auto';
    };
  }, [isMouseOverMenu]); // Ajouter isMouseOverMenu comme dépendance

  // Fonction pour calculer l'opacité et la hauteur de chaque menu
  const getMenuStyle = (menuNumber: number) => {
    if (menuNumber === activeMenu) {
      return {
        opacity: 1,
        maxHeight: '500px',
        transition: 'max-height 0.6s ease-in-out', // Transition plus douce, seulement sur la hauteur
        marginBottom: '2rem'
      };
    } else {
      return {
        opacity: 1, // Même opacité pour tous
        maxHeight: '80px',
        transition: 'max-height 0.6s ease-in-out', // Transition plus douce, seulement sur la hauteur
        marginBottom: '1rem'
      };
    }
  };

  const getItemsStyle = (menuNumber: number) => {
    if (menuNumber === activeMenu) {
      return {
        opacity: 1,
        maxHeight: '400px',
        transition: 'opacity 0.4s ease-in-out, max-height 0.6s ease-in-out', // Transitions plus douces
        overflow: 'hidden',
        paddingTop: '1rem'
      };
    } else {
      return {
        opacity: 0,
        maxHeight: '0px',
        transition: 'opacity 0.4s ease-in-out, max-height 0.6s ease-in-out', // Transitions plus douces
        overflow: 'hidden',
        paddingTop: '0rem'
      };
    }
  };

  return (
    <>
      {/* Style global pour cacher la scrollbar */}
      <style jsx global>{`
        html, body {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display: none; /* WebKit */
        }
      `}</style>

      <div className="bg-gray-50">
        {/* Section principale avec la roue - prend tout l'écran */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full">
            <div className="h-screen flex items-center justify-center p-4">
              <RoueSystemique
                onItemSelect={setSelectedItem}
                selectedItem={selectedItem}
              />
            </div>
          </div>
        </div>

        {/* Section de contenu pour créer de l'espace */}
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Continuez à scroller
            </h1>
            <p className="text-xl text-gray-600">
              Pour découvrir les menus interactifs
            </p>
          </div>
        </div>

        {/* Section menu déroulant - tout en bas */}
        <div
          ref={menuContainerRef}
          className='menu-deroulant'
          onMouseEnter={() => setIsMouseOverMenu(true)}
          onMouseLeave={() => {
            setIsMouseOverMenu(false);
            // Ne pas réinitialiser le scroll progress quand on sort du div
            // Seulement réactiver le scroll de la page
            isScrollingMenus.current = false;
            document.body.style.overflow = 'auto';
          }}
          style={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            position: 'relative',
            backgroundColor: '#f8f9fa',
            padding: '4rem 2rem'
          }}
        >
          {/* Indicateur de debug */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '0.5rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontFamily: 'monospace'
          }}>
            Progress: {scrollProgress.toFixed(2)} | Active: {activeMenu} | Scrolling: {isScrollingMenus.current ? 'ON' : 'OFF'} | Mouse: {isMouseOverMenu ? 'IN' : 'OUT'}
          </div>

          <div className='menu-1' style={getMenuStyle(1)}>
            <h2 style={{
              margin: '0 0 1rem 0',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#2D3748', // Couleur fixe pour tous les titres
              textAlign: 'center'
            }}>
              Bonsoir
            </h2>
            <ul style={getItemsStyle(1)}>
              <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Item 1</li>
              <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Item 2</li>
              <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Item 3</li>
            </ul>
          </div>

          <div className='menu-2' style={getMenuStyle(2)}>
            <h2 style={{
              margin: '0 0 1rem 0',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#2D3748', // Couleur fixe pour tous les titres
              textAlign: 'center'
            }}>
              Je suis un
            </h2>
            <ul style={getItemsStyle(2)}>
              <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>COUCOU 1</li>
              <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>COUCOU 2</li>
              <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>COUCOU 3</li>
            </ul>
          </div>

          <div className='menu-3' style={getMenuStyle(3)}>
            <h2 style={{
              margin: '0 0 1rem 0',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#2D3748', // Couleur fixe pour tous les titres
              textAlign: 'center'
            }}>
              Menu déroulant
            </h2>
            <ul style={getItemsStyle(3)}>
              <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>HELLO 1</li>
              <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>HELLO 2</li>
              <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>HELLO 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RouePage;
