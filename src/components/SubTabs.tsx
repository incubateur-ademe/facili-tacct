"use client" 

import camembertIconBlack from "@/assets/icons/camembert_icon_black.svg";
import camembertIconWhite from "@/assets/icons/camembert_icon_white.svg";
import cartographieIconBlack from "@/assets/icons/cartographie_icon_black.svg";
import cartographieIconWhite from "@/assets/icons/cartographie_icon_white.svg";
import evolutionIconBlack from "@/assets/icons/evolution_icon_black.svg";
import evolutionIconWhite from "@/assets/icons/evolution_icon_white.svg";
import Image from "next/image";
import { useState } from "react";
import styles from "./components.module.scss";

interface Props {
  data: Array<string | null>;
  defaultTab: string;
  setValue: (value: string & CatnatTypes) => void;
  maxWidth?: string;
  borderRight?: string;
}

const tabIcons = [
  {
    name: "Répartition", 
    iconNotSelected: camembertIconBlack,
    iconSelected: camembertIconWhite,
  },
  {
    name: "Évolution",
    iconNotSelected: evolutionIconBlack,
    iconSelected: evolutionIconWhite,
  },
  {
    name: "Cartographie",
    iconNotSelected: cartographieIconBlack,
    iconSelected: cartographieIconWhite,
  }
];


const tabsWithIcons = (tabIcons: TabIcons[], name: string, selectedSubTab: string) => {
  const obj = tabIcons.filter((tab) => tab.name === name).length > 0 ? tabIcons.filter((tab) => tab.name === name)[0] : null;
  if (selectedSubTab === name) {
    return obj?.iconSelected;
  } else return obj?.iconNotSelected;
}

const SubTabs = ({ data, defaultTab, setValue, maxWidth="100%", borderRight="none" }: Props) => {
  const [selectedSubTab, setSelectedSubTab] = useState(defaultTab);

  return(
    <div className={styles.titles} style={{maxWidth: maxWidth, borderRight: borderRight}}>
      {data
        .map((element, i) => (
          <button
            key={i}
            className={selectedSubTab === element ? styles.selectedTabButton : styles.tabButton}
            onClick={() => {
              setSelectedSubTab(element ? element : "");
              setValue(element ? element as CatnatTypes : "Tous types");
            }}
          >
            { 
              element && tabsWithIcons(tabIcons, element, selectedSubTab) ? 
              <Image src={tabsWithIcons(tabIcons, element, selectedSubTab)!} alt=""/> 
              : null
            }
            {element}
          </button>
        ))}
    </div>
  )
}

export default SubTabs;
