'use client';

import { Body } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { Patch4 } from "@/lib/postgres/models";
import Image from "next/image";
import { useState } from "react";
import styles from '../patch4c.module.scss';
import { patch4Indices } from "./fonctions";

export const BlocAleas = ({
  patch4
}: {
  patch4: Patch4;
}) => {
  const indices = patch4Indices(patch4);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <NewContainer size="xl" style={{ padding: "0 1rem" }}>
      <div className={styles.aleasTabsContainer}>
        <div className={styles.aleasTabButtons}>
          {indices.map((alea, index) => (
            <button
              key={alea.key}
              className={`${styles.aleasTabButton} ${selectedIndex === index ? styles.aleasTabButtonActive : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              {selectedIndex === index ? (
                <div 
                  className={styles.iconMask}
                  style={{
                    width: '24px',
                    height: '24px',
                    maskImage: `url(${alea.icon.src})`,
                    WebkitMaskImage: `url(${alea.icon.src})`
                  }}
                />
              ) : (
                <Image src={alea.icon} alt={alea.label} width={24} height={24} />
              )}
              <span>{alea.label}</span>
            </button>
          ))}
        </div>
        <div className={styles.aleasTabContent}>
          {indices[selectedIndex] && (
            <>
              <div className={styles.aleasTabValue}>
                <Body weight="bold">Niveau d'aggravation : </Body>
                <Body>{indices[selectedIndex].value || "Donnée non disponible"}</Body>
              </div>
              <div className={styles.aleasTabDefinition}>
                <Body weight="bold">Définition : </Body>
                <Body>{indices[selectedIndex].definition}</Body>
              </div>
            </>
          )}
        </div>
      </div>
    </NewContainer>
  )
};
