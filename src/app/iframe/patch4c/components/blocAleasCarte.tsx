'use client';

import { NewContainer } from "@/design-system/layout";
import { Patch4 } from "@/lib/postgres/models";
import Image from "next/image";
import { useState } from "react";
import styles from '../patch4c.module.scss';
import { AleaExplications } from "./aleaExplications";
import { AnalyseSensibilite } from "./analyseSensibilite";
import { patch4Indices } from "./fonctions";
import { Patch4Maps } from "./Patch4Maps";

export const BlocAleasCarte = ({
  coordonneesCommunes,
  patch4
}: {
  coordonneesCommunes: {
    codes: string[];
    bbox: { minLng: number; minLat: number; maxLng: number; maxLat: number };
  } | null;
  patch4: Patch4[];
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // on veut vérifier si au moins une valeur dans niveaux_marins est non nulle
  const activeItems = patch4.some(item => item.niveaux_marins !== null)
    ? patch4Indices(patch4[0])
    : patch4Indices(patch4[0]).filter(item => item.key !== 'niveaux_marins');
  const selectedKey = activeItems[selectedIndex].key;
  const filteredPatch4 = patch4.map(item => {
    return {
      code_geographique: item.code_geographique,
      [selectedKey]: (item as never)[selectedKey],
      libelle_geographique: item.libelle_geographique,
    };
  });

  return (
    <NewContainer size="xl" style={{ padding: "0 1rem" }}>
      <div className={styles.aleasTabsContainer}>
        <div className={styles.aleasTabButtons}>
          {activeItems.map((alea, index) => (
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
          {activeItems[selectedIndex] && (() => {
            const { key, ...itemProps } = activeItems[selectedIndex];
            return (
              <>
                <AleaExplications key={`alea-${key}`} item={itemProps} isMap={patch4.length > 1 ? true : false} />
                {patch4.length > 1 ? <Patch4Maps coordonneesCommunes={coordonneesCommunes} patch4={filteredPatch4} /> : null}
                <AnalyseSensibilite key={`sensibilite-${key}`} item={itemProps} isMap={patch4.length > 1 ? true : false} />
              </>
            );
          })()}
        </div>
      </div>
    </NewContainer>
  )
};
