"use client" 

import { useState } from "react";
import styles from "./components.module.scss";

interface Props {
  data: Array<string | null>;
  defaultTab: string;
  setTypeRisqueValue: (value: string) => void;
}

const SubTabs = ({ data, defaultTab, setTypeRisqueValue }: Props) => {
  const [selectedSubTab, setSelectedSubTab] = useState(defaultTab);
  return(
    <div className={styles.titles}>
      {data
        .map((element, i) => (
          <button
            key={i}
            className={selectedSubTab === element ? styles.selectedTabButton : styles.tabButton}
            onClick={() => {
              setSelectedSubTab(element ? element : "");
              setTypeRisqueValue(element ? element : "");
            }}
          >
            {element}
          </button>
        ))}
    </div>
  )
}

export default SubTabs;
