"use client" 

import { useState } from "react";
import styles from "./components.module.scss";

interface Props {
  data: Array<{
    donnee?: string;
    facteur_sensibilite?: string;
    id?: number;
    risque?: string;
    titre: string;
  }>;
  defaultTab: string;
}

const SubTabs = ({ data, defaultTab }: Props) => {
  const [selectedSubTab, setSelectedSubTab] = useState(defaultTab);

  console.log("selectedSubTab", selectedSubTab);
  return(
    <div className={styles.titles}>
      {data
        .map((element, i) => (
          <button
            key={i}
            className={selectedSubTab === element.titre ? styles.selectedTabButton : styles.tabButton}
            onClick={() => {
              setSelectedSubTab(element.titre);
            }}
          >
            {element.titre}
          </button>
        ))}
    </div>
  )
}

export default SubTabs;
