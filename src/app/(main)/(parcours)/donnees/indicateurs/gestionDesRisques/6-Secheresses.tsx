"use client";
import DataNotFound from '@/assets/images/zero_data_found.png';
import SecheressesCharts from '@/components/charts/gestionRisques/secheressesCharts';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { SecheressesPasseesModel } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from '../../explorerDonnees.module.scss';

export const SecheressesPassees = (props: {
  secheresses: SecheressesPasseesModel[];
}) => {
  const { secheresses } = props;
  const [datavizTab, setDatavizTab] = useState<string>('Intensité');
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;


  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            ALLO
            {/* <MicroNumberCircle valeur={nombreTotalRestrictions} arrondi={0} />
            {parsedSecheresses.length !== 0 && (
              <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                {nombreTotalRestrictions} restrictions au total dans toutes les communes
              </Body>
            )} */}
          </div>
        </div>
        <div className={styles.datavizWrapper} style={{ borderRadius: "1rem 0 0 1rem", height: "fit-content" }}>
          {
            secheresses.length !== 0 ?
              <SecheressesCharts
                datavizTab={datavizTab}
                setDatavizTab={setDatavizTab}
                secheresses={secheresses}
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
