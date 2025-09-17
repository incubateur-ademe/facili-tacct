"use client";
import { MicroCube } from "@/components/charts/MicroDataviz";
import EauCharts from "@/components/charts/ressourcesEau/EauCharts";
import { ExportButtonNouveauParcours } from "@/components/exports/ExportButton";
import { ReadMoreFade } from "@/components/utils/ReadMoreFade";
import { CustomTooltipNouveauParcours } from "@/components/utils/Tooltips";
import { Body } from "@/design-system/base/Textes";
import { RessourcesEau } from "@/lib/postgres/models";
import { PrelevementEauText } from "@/lib/staticTexts";
import { prelevementEauTooltipText } from "@/lib/tooltipTexts";
import { IndicatorExportTransformations } from "@/lib/utils/export/environmentalDataExport";
import { Round } from "@/lib/utils/reusableFunctions/round";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from '../../explorerDonnees.module.scss';
import { SourceExport } from "../SourceExport";

const SumFiltered = (
  data: RessourcesEau[],
  code: string,
  libelle: string,
  type: string,
  champ: string
) => {
  const columnCode = type === 'epci'
    ? 'epci'
    : type === 'commune'
      ? 'code_geographique'
      : type === "departement"
        ? "departement"
        : undefined

  const columnLibelle = type === "petr"
    ? "libelle_petr"
    : type === "pnr"
      ? "libelle_pnr"
      : "ept"
  return Sum(
    data
      .filter((obj) => columnCode ? obj[columnCode] === code : obj[columnLibelle] === libelle
      )
      .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes(champ))
      .map((e) => e.A2020)
      .filter((value): value is number => value !== null)
  );
};

export const PrelevementsEnEau = (props: {
  ressourcesEau: RessourcesEau[];
}) => {
  const { ressourcesEau } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const volumePreleveTerritoire = (SumFiltered(ressourcesEau, code, libelle, type, 'total') / 1000000);
  const dataParMaille = type === 'epci'
    ? ressourcesEau.filter((obj) => obj.epci === code)
    : type === 'commune'
      ? ressourcesEau.filter((obj) => obj.code_geographique === code)
      : type === 'petr'
        ? ressourcesEau.filter((obj) => obj.libelle_petr === libelle)
        : type === 'ept'
          ? ressourcesEau.filter((obj) => obj.ept === libelle)
          : type === "pnr"
            ? ressourcesEau.filter((obj) => obj.libelle_pnr === libelle)
            : ressourcesEau;

  //sort ascending by code_geographique
  const exportData = IndicatorExportTransformations.ressourcesEau.PrelevementEau(dataParMaille).sort(
    (a, b) => a.code_geographique.localeCompare(b.code_geographique)
  );

  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            {
              !volumePreleveTerritoire || volumePreleveTerritoire === 0 ? null :
                <MicroCube
                  valeur={volumePreleveTerritoire}
                  arrondi={2}
                  unite="Mm³"
                />
            }
            {
              dataParMaille.length !== 0 ? (
                <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                  Le volume total des prélèvements en eau de votre territoire en
                  2020 est de <b>{(Round(volumePreleveTerritoire, 2))} Mm3</b>, soit l’équivalent
                  de <b>{Round((1000000 * Number(volumePreleveTerritoire)) / 3750, 0)}</b>{' '}
                  piscines olympiques.
                </Body>
              ) : ""
            }
            <CustomTooltipNouveauParcours title={prelevementEauTooltipText} texte="D'où vient ce chiffre ?" />
          </div>
          <ReadMoreFade maxHeight={430}>
            <PrelevementEauText />
          </ReadMoreFade>
        </div>
        <div className={styles.datavizWrapper} style={{ borderRadius: "1rem 0 0 1rem", height: "fit-content" }}>
          <EauCharts
            datavizTab={datavizTab}
            setDatavizTab={setDatavizTab}
            ressourcesEau={ressourcesEau}
          />
          <SourceExport
            anchor="Ressources en eau"
            source="BNPE, Catalogue DiDo (Indicateurs territoriaux de développement durable - ITDD)"
            condition={Sum(exportData.map(o => Sum(Object.values(o).slice(13, 26) as number[]))) !== 0}
            exportComponent={
              <ExportButtonNouveauParcours
                data={exportData}
                baseName="prelevements_eau"
                type={type}
                libelle={libelle}
                code={code}
                sheetName="Prélèvements en eau"
              />
            }
          />
        </div>
      </div>
    </>
  );
};
