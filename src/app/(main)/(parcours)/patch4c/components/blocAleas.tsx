'use client';

import { ReplaceDisplayEpci } from "@/components/searchbar/fonctions";
import { TagsSimples } from "@/design-system/base/Tags";
import { Body } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { Patch4 } from "@/lib/postgres/models";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from '../patch4c.module.scss';
import { AleaExplications } from "./aleaExplications";
import { AnalyseSensibilite } from "./analyseSensibilite";
import { patch4Indices } from "./fonctions";
import { Patch4Maps } from "./Patch4Maps";

export const BlocAleas = ({
  coordonneesCommunes,
  patch4
}: {
  coordonneesCommunes: {
    codes: string[];
    bbox: { minLng: number; minLat: number; maxLng: number; maxLat: number };
  } | null;
  patch4: Patch4[];
}) => {
  const searchParams = useSearchParams();
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeItems = patch4.some(item => item.niveaux_marins !== null)
    ? patch4Indices(patch4[0])
    : patch4Indices(patch4[0]).filter(item => item.key !== 'niveaux_marins');

  const getInitialIndex = () => {
    if (typeof window === 'undefined') return 0;
    const hash = window.location.hash.slice(1);
    const index = activeItems.findIndex(item => item.key === hash);
    return index >= 0 ? index : 0;
  };

  useEffect(() => {
    setSelectedIndex(getInitialIndex());
  }, []);

  const handleTabChange = (index: number) => {
    setSelectedIndex(index);
  };

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
      {
        patch4.length > 1 &&
        <div className={styles.CircleVisualizationTerritory} style={{ marginTop: '1.5rem' }}>
          <Body
            size='lg'
            weight='bold'
            style={{ fontSize: "22px" }}
          >
            {ReplaceDisplayEpci(libelle)}
          </Body>
          <TagsSimples
            texte={
              (type === "epci" || type === "petr" || type === "ept" || type === "pnr")
                ? type.toUpperCase()
                : type === "departement"
                  ? "Département"
                  : type === "commune"
                    ? "Commune"
                    : type
            }
            couleur="#E3FAF9"
            couleurTexte="var(--bouton-primaire-3)"
            taille="small"
          />
        </div>
      }
      <div className={styles.aleasTabsContainer}>
        <div className={styles.aleasTabButtons}>
          {activeItems.map((alea, index) => (
            <button
              key={alea.key}
              className={`${styles.aleasTabButton} ${selectedIndex === index ? styles.aleasTabButtonActive : ''}`}
              onClick={() => handleTabChange(index)}
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
                {patch4.length > 1 ? <Patch4Maps coordonneesCommunes={coordonneesCommunes} patch4={filteredPatch4} selectedAnchor={key} /> : null}
                <AnalyseSensibilite key={`sensibilite-${key}`} item={itemProps} isMap={patch4.length > 1 ? true : false} />
              </>
            );
          })()}
        </div>
      </div>
    </NewContainer>
  )
};
