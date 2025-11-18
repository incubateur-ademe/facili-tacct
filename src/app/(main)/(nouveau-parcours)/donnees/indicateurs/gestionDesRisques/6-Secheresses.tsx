"use client";
import DataNotFound from '@/assets/images/zero_data_found.png';
import SecheressesCharts from '@/components/charts/gestionRisques/secheressesCharts';
import { MicroNumberCircle } from '@/components/charts/MicroDataviz';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { Body } from "@/design-system/base/Textes";
import { RestrictionData, Secheresses, SecheressesParsed } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from '../../explorerDonnees.module.scss';

export const SecheressesPassees = (props: {
  secheresses: Secheresses[];
}) => {
  const { secheresses } = props;
  const [datavizTab, setDatavizTab] = useState<string>('Évolution');
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const parsedSecheresses: SecheressesParsed[] = secheresses.map(secheresse => {
    const parsed: Record<string, unknown> = { ...secheresse };
    Object.keys(secheresse).forEach(key => {
      if (key.startsWith('restrictions_') && secheresse[key as keyof Secheresses]) {
        try {
          const restrictions = JSON.parse(secheresse[key as keyof Secheresses] as string) as RestrictionData[];
          // Filtrer les restrictions où zas.pct > 0.01
          parsed[key] = restrictions.filter(r => r.zas.pct > 0.01);
        } catch (error) {
          console.error(`Erreur lors du parsing de ${key}:`, error);
          parsed[key] = null;
        }
      }
    });
    return parsed as SecheressesParsed;
  });

  // Calcul du nombre total de restrictions. On parcourt toutes les années de 2013 à 2024.
  const nombreTotalRestrictions = parsedSecheresses.reduce((total, secheresse) => {
    let count = 0;
    for (let year = 2013; year <= 2024; year++) {
      const restrictionsKey = `restrictions_${year}` as keyof SecheressesParsed;
      const restrictions = secheresse[restrictionsKey] as RestrictionData[] | null;
      if (restrictions && Array.isArray(restrictions)) {
        count += restrictions.length;
      }
    }
    return total + count;
  }, 0);

  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            <MicroNumberCircle valeur={nombreTotalRestrictions} arrondi={0} />
            {parsedSecheresses.length !== 0 && (
              <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                {nombreTotalRestrictions} restrictions au total dans toutes les communes
              </Body>
            )}
          </div>
        </div>
        <div className={styles.datavizWrapper} style={{ borderRadius: "1rem 0 0 1rem", height: "fit-content" }}>
          {
            parsedSecheresses.length !== 0 ?
              <SecheressesCharts
                datavizTab={datavizTab}
                setDatavizTab={setDatavizTab}
                secheresses={parsedSecheresses}
              /> : (
                <div className={styles.dataNotFoundForGraph}>
                  <DataNotFoundForGraph image={DataNotFound} />
                </div>
              )
          }
        </div>
      </div>
    </>
  );
};
