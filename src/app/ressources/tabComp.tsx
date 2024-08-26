"use client"
import { useState } from "react";
import styles from "./ressources.module.scss";

interface Data {
  id: number;
  titre: string;
}

interface Props {
  defaultTab: string;
  data: Data[];
  handleTab: (el: string) => void;
}
export const TabComp = ({ defaultTab, data, handleTab }: Props) => {
  const [selectedTabId, setSelectedTabId] = useState(defaultTab);
  
  const handleClick = (selectedTab: string) => {
    handleTab(selectedTab);
    setSelectedTabId(selectedTab);
  }

  return (
    <div className={styles.tabs}>
        {data
          .map((element, i) => (
            <button
              key={i}
              className={selectedTabId === element.titre ? styles.selectedTab : styles.tab}
              onClick={() => {
                handleClick(element.titre);
              }}
            >
              {element.titre}
            </button>
          ))
        }
      </div>      
  )
}
