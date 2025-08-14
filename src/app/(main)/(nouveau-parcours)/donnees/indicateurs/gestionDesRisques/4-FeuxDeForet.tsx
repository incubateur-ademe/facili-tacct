"use client";
import GraphNotFound from '@/assets/images/zero_data_found.png';
import FeuxForetCharts from "@/components/charts/gestionRisques/feuxForetCharts";
import { ExportButtonNouveauParcours } from "@/components/exports/ExportButton";
import { FeuxForetText } from "@/components/themes/inconfortThermique/staticTexts";
import { CustomTooltipNouveauParcours } from "@/components/utils/CalculTooltip";
import { Body, H3 } from "@/design-system/base/Textes";
import { IncendiesForet } from "@/lib/postgres/models";
import { feuxForetTooltipText } from "@/lib/tooltipTexts";
import { IndicatorExportTransformations } from "@/lib/utils/export/environmentalDataExport";
import { Round } from "@/lib/utils/reusableFunctions/round";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from '../../explorerDonnees.module.scss';

export const FeuxDeForet = (props: {
  incendiesForet: IncendiesForet[];
}) => {
  const { incendiesForet } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  // surface en km²
  const surfaceTotale = incendiesForet
    .map((el) => el.surface_parcourue)
    .reduce((a, b) => a + b, 0);
  const departement = incendiesForet[0]?.departement;
  const exportData = IndicatorExportTransformations.gestionRisques.FeuxForet(incendiesForet);

  return (
    <>
      <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
        Départs de feux et surfaces brûlées depuis 2006
      </H3>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            {/* <MicroPieChart pourcentage={(maxCategory.count / sommeToutesSuperficies) * 100} arrondi={1} ariaLabel="" /> */}
            {incendiesForet.length !== 0 ? (
              <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                Depuis 2006, votre territoire a connu{' '}
                {incendiesForet.length} départ(s) de feux pour une
                surface totale parcourue de{' '}
                {Round(100 * surfaceTotale, 2)} ha.
              </Body>
            ) : null}
            {departement === '64' ? (
              <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                Dans votre département, les données 2010 ont été perdues suite
                à un incident technique et aucune donnée n’est disponible pour
                2011.
              </Body>
            ) : (
              ''
            )}
            <CustomTooltipNouveauParcours title={feuxForetTooltipText} texte="Définition" />
          </div>
          {/* <ReadMoreFade maxHeight={300}> */}
          <FeuxForetText />
          {/* </ReadMoreFade> */}
        </div>
        <div className={styles.datavizWrapper} style={{ borderRadius: "1rem 0 0 1rem", height: "fit-content" }}>
          {incendiesForet.length !== 0 ? (
            <FeuxForetCharts
              datavizTab={datavizTab}
              setDatavizTab={setDatavizTab}
              incendiesForet={incendiesForet}
            />
          ) : (
            <div className={styles.noData}>
              <Image
                src={GraphNotFound}
                alt=""
                width={0}
                height={0}
                style={{ width: '90%', height: 'auto' }}
              />
            </div>
          )}
          <div
            className={styles.sourcesExportWrapper}
            style={{
              borderTop: "1px solid var(--gris-medium)",
              borderBottom: "1px solid var(--gris-medium)",
              borderRadius: "0 0 0 1rem"
            }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : Base de Données sur les Incendies de Forêts en France,
              consultée en 2024 (derniers chiffres disponibles : 2023)
            </Body>
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="feux_foret"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="Feux de forêt"
            />
          </div>
        </div>
      </div>
    </>
  );
};
