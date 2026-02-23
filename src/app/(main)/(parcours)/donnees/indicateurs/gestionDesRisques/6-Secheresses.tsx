"use client";
import DataNotFound from '@/assets/images/zero_data_found.png';
import SecheressesCharts from '@/components/charts/gestionRisques/secheressesCharts';
import { MicroCircleGridMois } from '@/components/charts/MicroDataviz';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { Body } from '@/design-system/base/Textes';
import { calculerMoyenneJoursMensuelleAvecRestriction } from '@/lib/charts/gestionRisques';
import { SecheressesPasseesModel } from "@/lib/postgres/models";
import { useState } from "react";
import styles from '../../explorerDonnees.module.scss';

export const SecheressesPassees = (props: {
  secheresses: SecheressesPasseesModel[];
}) => {
  const { secheresses } = props;
  const [datavizTab, setDatavizTab] = useState<string>('Intensité');
  const moyenneJoursAvecRestriction = calculerMoyenneJoursMensuelleAvecRestriction({ secheresses });

  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            <MicroCircleGridMois nombreJours={moyenneJoursAvecRestriction} arrondi={0} />
            <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
              Votre territoire est soumis à au moins un arrêté risque sécheresse
              {" "} {moyenneJoursAvecRestriction} jours par mois (moyenne 2020-2025 pour
              l’ensemble du territoire)
            </Body>
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
