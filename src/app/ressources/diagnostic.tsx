"use client";
import { cards, ressourcesTabs } from "@/lib/utils/ressources";
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

  return (
    <div>
      <div className={styles.ressourcesWrapper} style={{ padding: "0 0 4em 0" }}>
        <TabComp 
          defaultTab="Vous n'avez pas de diagnostic"
          data={ressourcesTabs.diagnostic}
          handleTab={handleTab}
        />
        <div className={styles.cardsWrapper}>
          {cards.diagnostic.map((el, i) => (
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
          data={ressourcesTabs.themes}
          handleTab={handleTheme}
        />
        <div className={styles.cardsWrapper}>
          {cards.inconfortThermique.map((el, i) => (
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
          {cards.cartesPermanentes.map((el, i) => (
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
