"use client";
import TypesDeCulturesCharts from "@/components/charts/agriculture/typesDeCulturesCharts";
import { MicroPieChart } from "@/components/charts/MicroDataviz";
import { ExportButtonNouveauParcours } from "@/components/exports/ExportButton";
import { SurfacesAgricolesText } from "@/components/themes/inconfortThermique/staticTexts";
import { CustomTooltipNouveauParcours } from "@/components/utils/CalculTooltip";
import { ReadMoreFade } from "@/components/utils/ReadMoreFade";
import { Body } from "@/design-system/base/Textes";
import { PieChartDataSurfacesAgricoles } from "@/lib/charts/surfacesAgricoles";
import { SurfacesAgricolesModel } from "@/lib/postgres/models";
import { multipleEpciBydepartementLibelle } from "@/lib/territoireData/multipleEpciBydepartement";
import { multipleEpciByPnrLibelle } from "@/lib/territoireData/multipleEpciByPnr";
import { agricultureBioTooltipText } from "@/lib/tooltipTexts";
import { IndicatorExportTransformations } from "@/lib/utils/export/environmentalDataExport";
import { numberWithSpacesRegex } from "@/lib/utils/regex";
import { Round } from "@/lib/utils/reusableFunctions/round";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from '../../explorerDonnees.module.scss';

export const TypesDeCulture = (props: {
  surfacesAgricoles: SurfacesAgricolesModel[];
}) => {
  const { surfacesAgricoles } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const categoriesData = PieChartDataSurfacesAgricoles(surfacesAgricoles);
  const maxCategory = categoriesData.reduce(
    (max, item) => (item.count > max.count ? item : max),
    categoriesData[0]
  );
  const sommeToutesSuperficies = Sum(surfacesAgricoles.map(el => el.superficie_sau))
  const territoiresPartiellementCouverts = type === 'departement'
    ? multipleEpciBydepartementLibelle.find(dept => dept.departement === code)?.liste_epci_multi_dept
    : type === 'pnr'
      ? multipleEpciByPnrLibelle.find(pnr => pnr.libelle_pnr === libelle)?.liste_epci_multi_pnr
      : undefined;
  const exportData = IndicatorExportTransformations.agriculture.surfacesAgricoles(surfacesAgricoles);

  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            <MicroPieChart pourcentage={(maxCategory.count / sommeToutesSuperficies) * 100} arrondi={1} ariaLabel="" />
            {
              surfacesAgricoles.length ? (
                <>
                  <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                    Pour le recensement de 2020, les informations détaillées sur les types
                    de cultures ne sont disponibles qu'au niveau des EPCI.
                  </Body>
                  <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                    Sur votre {type === "commune" ? "EPCI" : "territoire"}, le type de surface
                    prédominant est constitué de <b>{maxCategory.id.toLowerCase()}</b>,
                    couvrant <b>{numberWithSpacesRegex(maxCategory.count)} hectares</b>, ce qui
                    représente <b>{Round((maxCategory.count / sommeToutesSuperficies) * 100, 1)} %</b> de
                    la surface agricole utile.
                  </Body>
                  {
                    (type === "departement" || type === "pnr") && territoiresPartiellementCouverts && (
                      <>
                        <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                          <br></br>Attention, {territoiresPartiellementCouverts?.length} EPCI{" "}
                          {territoiresPartiellementCouverts?.length === 1 ? "ne fait" : "ne font"} que
                          partiellement partie de votre territoire :
                        </Body>
                        <ul style={{ margin: "0.5rem 0 0 1.5rem" }}>
                          {territoiresPartiellementCouverts?.map((epci, index) => (
                            <li key={index}><Body weight='bold' style={{ color: "var(--gris-dark)" }}>{epci}</Body></li>
                          ))}
                        </ul>
                      </>
                    )
                  }
                </>
              ) : <Body weight='bold' style={{ color: "var(--gris-dark)" }}>Il n’y a pas de données référencées sur le territoire que vous avez sélectionné</Body>
            }
            <CustomTooltipNouveauParcours title={agricultureBioTooltipText} texte="D'où vient ce chiffre ?" />
          </div>
          <ReadMoreFade maxHeight={territoiresPartiellementCouverts?.length ? 400 / territoiresPartiellementCouverts?.length : 280}>
            <SurfacesAgricolesText />
          </ReadMoreFade>
        </div>
        <div className={styles.datavizWrapper} style={{ borderRadius: "1rem 0 0 1rem", height: "fit-content" }}>
          <TypesDeCulturesCharts
            surfacesAgricoles={surfacesAgricoles}
            datavizTab={datavizTab}
            setDatavizTab={setDatavizTab}
          />
          <div
            className={styles.sourcesExportWrapper}
            style={{
              borderTop: "1px solid var(--gris-medium)",
              borderBottom: "1px solid var(--gris-medium)",
              borderRadius: "0 0 0 1rem"
            }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : AGRESTE, 2020
            </Body>
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="surfaces_agricoles"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="Surfaces agricoles"
            />
          </div>
        </div>
      </div>
    </>
  );
};
