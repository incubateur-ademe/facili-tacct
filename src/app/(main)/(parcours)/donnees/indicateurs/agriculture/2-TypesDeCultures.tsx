"use client";
import TypesDeCulturesCharts from "@/components/charts/agriculture/typesDeCulturesCharts";
import { MicroPieChart } from "@/components/charts/MicroDataviz";
import { ExportButtonNouveauParcours } from "@/components/exports/ExportButton";
import { CustomTooltipNouveauParcours, DefinitionTooltip } from "@/components/utils/Tooltips";
import { Body } from "@/design-system/base/Textes";
import { PieChartDataSurfacesAgricoles } from "@/lib/charts/surfacesAgricoles";
import { otex } from "@/lib/definitions";
import { SurfacesAgricolesModel, TableCommuneModel } from "@/lib/postgres/models";
import { SurfacesAgricolesText } from "@/lib/staticTexts";
import { multipleEpciBydepartementLibelle } from "@/lib/territoireData/multipleEpciBydepartement";
import { multipleEpciByPnrLibelle } from "@/lib/territoireData/multipleEpciByPnr";
import { surfacesAgricolesTooltipText } from "@/lib/tooltipTexts";
import { IndicatorExportTransformations } from "@/lib/utils/export/environmentalDataExport";
import { numberWithSpacesRegex } from "@/lib/utils/regex";
import { Round } from "@/lib/utils/reusableFunctions/round";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from '../../explorerDonnees.module.scss';

export const TypesDeCulture = (props: {
  surfacesAgricoles: SurfacesAgricolesModel[];
  tableCommune: TableCommuneModel[];
}) => {
  const { surfacesAgricoles, tableCommune } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [datavizTab, setDatavizTab] = useState<string>('Détail par culture');
  const otexCommune = type === "commune" && tableCommune.find(el => el.code_geographique === code)?.otex_12_postes;
  const categoriesData = PieChartDataSurfacesAgricoles(surfacesAgricoles);
  const maxCategory = categoriesData.reduce(
    (max, item) => (item.count > max.count ? item : max),
    categoriesData[0]
  );
  const sommeToutesSuperficies = Sum(surfacesAgricoles.map(
    el => el.superficie_sau_terres_arables_cereales +
      el.superficie_sau_terres_arables_oleagineux +
      el.superficie_sau_terres_arables_fourrageres +
      el.superficie_sau_terres_arables_tubercules +
      el.superficie_sau_terres_arables_legumes_melons_fraises +
      el.superficie_sau_terres_arables_fleurs +
      el.superficie_sau_terres_arables_autres +
      el.superficie_sau_cultures_permanentes_vigne +
      el.superficie_sau_cultures_permanentes_fruits +
      el.superficie_sau_cultures_permanentes_autres +
      el.superficie_sau_herbe_prairies_productives +
      el.superficie_sau_herbe_prairies_peu_productives +
      el.superficie_sau_herbe_subventions +
      el.superficie_sau_herbe_bois_patures +
      el.superficie_sau_jardins
  ));
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
            {sommeToutesSuperficies !== 0 && <MicroPieChart pourcentage={(maxCategory.count / sommeToutesSuperficies) * 100} arrondi={1} ariaLabel="" />}
            {
              surfacesAgricoles.length ? (
                <>
                  {
                    (type === "departement" || type === "pnr") ? (
                      <>
                        <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                          Sur votre territoire, le type de surface prédominant est constitué de {maxCategory.id.toLowerCase()},
                          couvrant <b>{numberWithSpacesRegex(maxCategory.count)} hectares</b>, ce qui
                          représente <b>{Round((maxCategory.count / sommeToutesSuperficies) * 100, 1)} %</b> de
                          la surface agricole utile.
                        </Body>

                        {
                          territoiresPartiellementCouverts && (
                            <>
                              <Body style={{ color: "var(--gris-dark)" }}>
                                <br></br><b>À noter</b> : Ces données ne sont disponibles qu’à l’échelle
                                intercommunale. Ces {territoiresPartiellementCouverts?.length} EPCI débordent de
                                votre périmètre :
                                <ul style={{ margin: "0.5rem 0 0 1.5rem" }}>
                                  {territoiresPartiellementCouverts?.map((epci, index) => (
                                    <li key={index}><Body style={{ color: "var(--gris-dark)" }}>{epci}</Body></li>
                                  ))}
                                </ul>
                              </Body>
                            </>
                          )
                        }
                      </>
                    ) : (type === "commune" && otexCommune) ? (
                      <>
                        <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                          Sur votre commune, c'est le/la "{otexCommune}" qui domine le paysage agricole avec plus des deux tiers de la production
                          totale <DefinitionTooltip title={otex}>(OTEX)</DefinitionTooltip>.
                        </Body>
                        <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                          Sur votre territoire, le type de surface prédominant est constitué de {maxCategory.id.toLowerCase()},
                          couvrant <b>{numberWithSpacesRegex(maxCategory.count)} hectares</b>, ce qui
                          représente <b>{Round((maxCategory.count / sommeToutesSuperficies) * 100, 1)} %</b> de
                          la surface agricole utile. (Attention, ces détails sur les types de cultures sont ceux de votre EPCI).
                        </Body>
                      </>
                    ) : (type === "epci" || type === "petr") ? (
                      <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                        Sur votre territoire, le type de surface prédominant est constitué de {maxCategory.id.toLowerCase()},
                        couvrant <b>{numberWithSpacesRegex(maxCategory.count)} hectares</b>, ce qui
                        représente <b>{Round((maxCategory.count / sommeToutesSuperficies) * 100, 1)} %</b> de
                        la surface agricole utile.
                      </Body>
                    )
                      : null
                  }
                </>
              ) : <Body weight='bold' style={{ color: "var(--gris-dark)" }}>Il n’y a pas de données référencées sur le territoire que vous avez sélectionné</Body>
            }
            <CustomTooltipNouveauParcours title={surfacesAgricolesTooltipText} texte="D'où vient ce chiffre ?" />
          </div>
          {/* <ReadMoreFade maxHeight={territoiresPartiellementCouverts?.length ? 400 / territoiresPartiellementCouverts?.length : 350}> */}
          <SurfacesAgricolesText />
          {/* </ReadMoreFade> */}
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
              borderRadius: "0 0 0 1rem"
            }}
          >
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : AGRESTE, 2020.
            </Body>
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="surfaces_agricoles"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="Surfaces agricoles"
              anchor="Types de culture"
            />
          </div>
        </div>
      </div>
    </>
  );
};
