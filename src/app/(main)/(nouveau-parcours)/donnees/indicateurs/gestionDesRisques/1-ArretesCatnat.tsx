"use client";
import DataNotFound from '@/assets/images/zero_data_found.png';
import ArretesCatnatCharts from '@/components/charts/gestionRisques/arretesCatnatCharts';
import { ExportButtonNouveauParcours } from "@/components/exports/ExportButton";
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { CatNatText } from "@/components/themes/inconfortThermique/staticTexts";
import { CustomTooltipNouveauParcours } from "@/components/utils/CalculTooltip";
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { Body } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from "@/lib/mapper/communes";
import { ArreteCatNat, CarteCommunes } from "@/lib/postgres/models";
import { catnatTooltipText } from "@/lib/tooltipTexts";
import { IndicatorExportTransformations } from "@/lib/utils/export/environmentalDataExport";
import { CountOccByIndex } from "@/lib/utils/reusableFunctions/occurencesCount";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from '../../explorerDonnees.module.scss';

type ArreteCatNatEnriched = ArreteCatNat & {
  annee_arrete: number;
};

export const ArretesCatnat = (props: {
  gestionRisques: ArreteCatNat[];
  carteCommunes: CarteCommunes[];
}) => {
  const { gestionRisques, carteCommunes } = props;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const [sliderValue, setSliderValue] = useState<number[]>([1982, 2025]);
  const [typeRisqueValue, setTypeRisqueValue] =
    useState<CatnatTypes>('Tous types');
  const [arretesCatnatPieChart, setArretesCatnatPieChart] = useState<
    ArreteCatNatEnriched[]
  >([]);
  const [arretesCatnatBarChart, setArretesCatnatBarChart] = useState<
    ArreteCatNatEnriched[]
  >([]);
  const typesRisques = gestionRisques
    ? [...new Set(gestionRisques.map((item) => item.lib_risque_jo))]
    : [''];

  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const dataByCodeGeographique = CountOccByIndex<GenericObject>(
    gestionRisques,
    'code_geographique',
    'lib_risque_jo'
  ).map((el) => {
    const sum = Sum(
      Object.values(el).filter((item) => typeof item === 'number') as number[]
    );
    return {
      ...(el as DataByCodeGeographique),
      sumCatnat: sum
    };
  });
  const carteCommunesEnriched = carteCommunes.map((el) => {
    return {
      ...el,
      catnat: dataByCodeGeographique.find(
        (item) => item.indexName === el.code_geographique
      )
    };
  });
  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);

  useEffect(() => {
    const catnatFilteredByType =
      typeRisqueValue === 'Tous types'
        ? gestionRisques
        : gestionRisques.filter(
          (item) => item.lib_risque_jo === typeRisqueValue
        );
    const gestionRisquesEnrichBarChart = catnatFilteredByType
      ?.map((item) => {
        return {
          ...item,
          annee_arrete: Number(item.dat_pub_arrete?.split('-')[0])
        };
      })
      .filter(
        (el) =>
          el.annee_arrete >= sliderValue[0] && el.annee_arrete <= sliderValue[1]
      );
    const gestionRisquesEnrichPieChart = gestionRisques
      ?.map((item) => {
        return {
          ...item,
          annee_arrete: Number(item.dat_pub_arrete?.split('-')[0])
        };
      })
      .filter(
        (el) =>
          el.annee_arrete >= sliderValue[0] && el.annee_arrete <= sliderValue[1]
      );
    setArretesCatnatPieChart(gestionRisquesEnrichPieChart);
    setArretesCatnatBarChart(gestionRisquesEnrichBarChart);
  }, [sliderValue, typeRisqueValue, datavizTab]);

  const exportData = IndicatorExportTransformations.gestionRisques.ArretesCatnat(gestionRisques);

  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            {/* <MicroChiffreTerritoire value={gestionRisques.length} unit='' territoireContours={communesMap} /> */}
            {gestionRisques.length !== 0 ? (
              <>
                {dataByCodeGeographique[0]?.sumCatnat === 0 ? (
                  <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                    L’absence d’arrêté CatNat ne signifie pas que votre territoire
                    n’a jamais connu d’événements climatiques importants, ni subis
                    de dégâts significatifs.
                  </Body>
                ) : (
                  <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                    Depuis 1982, {gestionRisques.length} événement(s)
                    climatique(s) sont à l’origine d’une reconnaissance de l'état
                    de catastrophe naturelle sur votre territoire.
                  </Body>
                )}
              </>
            ) : ""
            }
            <CustomTooltipNouveauParcours title={catnatTooltipText} texte="D'où vient ce chiffre ?" />
          </div>
          <ReadMoreFade maxHeight={500}>
            <CatNatText />
          </ReadMoreFade>
        </div>
        <div className={styles.datavizWrapper} style={{ borderRadius: "1rem 0 0 1rem", height: "fit-content" }}>
          {
            gestionRisques.length !== 0 ?
              <ArretesCatnatCharts
                carteCommunes={communesMap}
                datavizTab={datavizTab}
                setDatavizTab={setDatavizTab}
                typeRisqueValue={typeRisqueValue}
                gestionRisquesBarChart={arretesCatnatBarChart}
                gestionRisquesPieChart={arretesCatnatPieChart}
                typesRisques={typesRisques}
                setTypeRisqueValue={setTypeRisqueValue}
                setSliderValue={setSliderValue}
                sliderValue={sliderValue}
              /> : (
                <div className={styles.dataNotFoundForGraph}>
                  <DataNotFoundForGraph image={DataNotFound} />
                </div>
              )
          }
          <div
            className={styles.sourcesExportWrapper}
            style={{
              borderTop: "1px solid var(--gris-medium)",
              borderBottom: "1px solid var(--gris-medium)",
              borderRadius: "0 0 0 1rem"
            }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : Base nationale de Gestion ASsistée des Procédures
              Administratives relatives aux Risques (GASPAR). Dernière mise à jour :
              juin 2025.
            </Body>
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="arretes_catnat"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="Arrêtés CatNat"
            />
          </div>
        </div>
      </div>
    </>
  );
};
