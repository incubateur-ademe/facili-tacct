"use client";
import { useState } from "react";
import styles from "./ressources.module.scss";

const DiagnosticComp = () => {
  const [selectedTabId, setSelectedTabId] = useState("Vous n'avez pas de diagnostic");

  const data = [
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
  return (
    <div className={styles.titles}>
      {data
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
  )
};

export default DiagnosticComp;
