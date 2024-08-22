"use client";
import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { Suspense, useState } from "react";
import { TileComp } from "./Tile";
import styles from "./ressources.module.scss";

const DiagnosticComp = () => {
  const [selectedTabId, setSelectedTabId] = useState("Vous n'avez pas de diagnostic");
  const { isDark } = useIsDark();
  const darkClass = {
    backgroundColor: fr.colors.getHex({ isDark }).decisions.background.default.grey.active,
    "&:hover": {
      backgroundColor: fr.colors.getHex({ isDark }).decisions.background.alt.grey.hover,
    },
  };
  const tabs = [
    {
      id: 0,
      titre: "Vous n'avez pas de diagnostic",
    },
    {
      id: 1,
      titre: "Vous découvrez le diagnostic pour la 1ère fois",
    },
    {
      id: 2,
      titre: "Vous voulez réviser un diagnostic connu",
    }
  ]

  const data = [
    {
      titre: 'Atelier "Mémoire"',
      description: "Faites appel à la mémoire collective pour débuter sur l'exposition de votre territoire aux impacts du changement climatique.",
      tag: "Atelier",
      link: "https://google.fr"
    },
    {
      titre: 'Constituer une équipe "coeur"',
      description: "Découvrez comment et pourquoi la Communauté de Communes du Bocage Bourbonnais (03) a mis en place une « équipe cœur » afin de piloter sa démarche TACCT.",
      tag: "Retour d'expérience",
      link: "https://google.fr"
    },
    {
      titre: 'Titre de l\'article',
      description: "Mauris tempus eros at nulla. Sed quis dui dignissim mauris pretium tincidunt. Mauris tempus eros at nulla. Sed quis dui dignissim mauris pretium tincidunt.",
      tag: "Article",
      link: "https://google.fr"
    },
  ]

  const allComps = [
    {
      titre: "Vous découvrez le diagnostic pour la 1ère fois",
      Component: (props: any) => <TileComp {...props} />,
    },
  ];

  return (
    <div>
      <div className={styles.titles}>
        {tabs
          .map((element, i) => (
            <button
              key={i}
              className={selectedTabId === element.titre ? styles.selectedTab : styles.tab}
              onClick={() => {
                setSelectedTabId(element.titre);
              }}
            >
              {element.titre}
            </button>
          ))
        }
      </div>
      <div className={styles.tilesWrapper} style={darkClass}>
        {
          data.map((element, i) => (
            <TileComp
              key={i}
              titre={element.titre}
              description={element.description}
              tag={element.tag}
              link={element.link}
            />
          ))
        }
      </div>
      <div className={styles.tilesWrapper} style={darkClass}>
        <div className={styles.bubbleContent} style={darkClass}>
          <Suspense>
            {(() => {
              const Component = allComps.find(el => el.titre === selectedTabId)?.Component;
              if (!Component) return null;
              return (
                <Component/>
              );
            })()}
          </Suspense>
        </div>
      </div>
    </div>

  )
};

export default DiagnosticComp;
