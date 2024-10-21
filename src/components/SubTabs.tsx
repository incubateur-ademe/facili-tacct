"use client" 

import { useState } from "react";
import styles from "./components.module.scss";

interface Props {
  data: Array<string | null>;
  defaultTab: string;
  setValue: (value: string) => void;
  maxWidth?: string;
  borderRight?: string;
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
              setValue(element ? element : "");
            }}
          >
            {element}
          </button>
        ))}
    </div>
  )
}

export default SubTabs;
