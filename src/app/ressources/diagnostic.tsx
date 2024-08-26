"use client";
import { useState } from "react";
import { CardComp } from "./CustomCard";
import styles from "./ressources.module.scss";
import { TabComp } from "./tabComp";

const DiagnosticComp = () => {
  const [selectedTabId, setSelectedTabId] = useState("Vous n'avez pas de diagnostic");
  
  const handleTab = (tab: string) => {
    setSelectedTabId(tab);
  }

  const [selectedThemeId, setSelectedThemeId] = useState("Inconfort thermique");
  
  const handleTheme = (tab: string) => {
    setSelectedThemeId(tab);
  }

  const diagnosticTabs = [
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

  const themesTabs = [
    {
      id: 0,
      titre: "Inconfort thermique",
    },
    {
      id: 1,
      titre: "Thématique 2",
    },
    {
      id: 2,
      titre: "Thématique 3",
    }
  ]

  const allComps = [
    {
      id:0,
      tab : "Vous n'avez pas de diagnostic",
      titre: 'Atelier "Mémoire"',
      tag: "Atelier",
      description:"Faites appel à la mémoire collective pour débuter sur l'exposition de votre territoire aux impacts du changement climatique.",
      link: ""
    },
    {
      id:1,
      tab : "Vous n'avez pas de diagnostic",
      titre: 'Constituer une équipe "cœur"',
      tag: "Retour d'expérience",
      description:"Découvrez comment et pourquoi la Communauté de Communes du Bocage Bourbonnais (03) a mis en place une « équipe cœur » afin de piloter sa démarche TACCT.",
      link: "https://librairie.ademe.fr/7214-piloter-sa-demarche-tacct-retour-d-experience-dans-le-bocage-bourbonnais-03.html"
    },
    {
      id:2,
      tab : "Vous n'avez pas de diagnostic",
      titre: "Titre",
      tag: "Article",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et",
      link: ""
    },
  ]

  const inconfortThermique = [
    {
      id: 0,
      tab: "Inconfort thermique",
      titre: 'Plus Fraîche Ma Ville',
      tag: "Article",
      description:"Trouvez les bonnes solutions pour rafraîchir durablement votre collectivité.",
      link: "https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/milieux/foret"
    },
    {
      id: 1,
      tab: "Inconfort thermique",
      titre: 'CRACC',
      tag: "Article",
      description: "Canicule : à quoi s’attendre et comment s’adapter ?",
      link: "https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/canicule"
    },
  ]

  const cartesPermanentes = [
    {
      id: 0,
      tab: "",
      titre: 'Rejoignez la communauté',
      tag: "",
      description: "Donec et nisl id sapien blandit mattis. Aenean dictum odio sit amet risus. Morbi purus. Nulla a est sit amet purus venenatis iaculis. Vivamus viverra purus vel magna. Donec in justo sed odio malesuada dapibus.",
      link: ""
    },
    {
      id: 1,
      tab: "",
      titre: 'Découvrez la méthode TACCT',
      tag: "",
      description: "Découvrez la méthode TACCT pour élaborer une politique d’adaptation au changement climatique de « A à Z », du diagnostic de vulnérabilité jusqu’au suivi des mesures et à l’évaluation de la stratégie.",
      link: "https://tacct.ademe.fr/"
    },
  ]

  return (
    <div>
      <div className={styles.ressourcesWrapper} style={{ padding: "0 0 4em 0" }}>
        <TabComp 
          defaultTab="Vous n'avez pas de diagnostic"
          data={diagnosticTabs}
          handleTab={handleTab}
        />
        <div className={styles.cardsWrapper}>
          {allComps.map((el, i) => (
            el.tab === selectedTabId ? 
              <CardComp 
                key={i}
                description={el.description}
                tag={el.tag}
                titre={el.titre}
                link={el.link}
              /> : null))
          }
        </div>
      </div>
      <div className={styles.ressourcesWrapper}>
        <TabComp 
          defaultTab="Inconfort thermique"
          data={themesTabs}
          handleTab={handleTheme}
        />
        <div className={styles.cardsWrapper}>
          {inconfortThermique.map((el, i) => (
            el.tab === selectedThemeId ? 
              <CardComp 
                key={i}
                description={el.description}
                tag={el.tag}
                titre={el.titre}
                link={el.link}
              /> : null))
          }
        </div>
      </div>
      <div className={styles.ressourcesWrapper}>
        <div className={styles.cardsWrapper}>
          {cartesPermanentes.map((el, i) => (
            <CardComp 
              key={i}
              description={el.description}
              titre={el.titre}
              link={el.link}
            />))
          }
        </div>
      </div>
    </div>
  )
};

export default DiagnosticComp;
