"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { LineChartGrandAge } from "@/components/charts/inconfortThermique/lineChartGrandAge";
import { MicroCircleGrid } from "@/components/charts/MicroDataviz";
import { ExportButtonNouveauParcours } from "@/components/exports/ExportButton";
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { Loader } from "@/components/ui/loader";
import { CustomTooltipNouveauParcours } from "@/components/utils/Tooltips";
import { Body } from "@/design-system/base/Textes";
import { grandAgeIsolementMapper } from "@/lib/mapper/inconfortThermique";
import { InconfortThermique } from "@/lib/postgres/models";
import { GrandAgeText } from '@/lib/staticTexts';
import { IndicatorExportTransformations } from "@/lib/utils/export/environmentalDataExport";
import { eptRegex, numberWithSpacesRegex } from "@/lib/utils/regex";
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from "next/navigation";
import styles from '../../explorerDonnees.module.scss';
import { sumProperty } from '../fonctions';
import { GrandAgeLineChartYData } from '../graphData';
import { SourceExport } from '../SourceExport';

export const GrandAge = ({
  inconfortThermique
}: {
  inconfortThermique: InconfortThermique[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const grandAgeIsolementMapped = inconfortThermique.map(
    grandAgeIsolementMapper
  );
  const percentTerritoireSup = Round((
    (100 * sumProperty(grandAgeIsolementMapped, 'over_80_sum_2020')) /
    (sumProperty(grandAgeIsolementMapped, 'to_80_sum_2020') +
      sumProperty(grandAgeIsolementMapped, 'under_4_sum_2020'))
  ), 2);
  const grandAgeIsolementTerritoire =
    type === 'commune'
      ? grandAgeIsolementMapped.filter((e) => e.code_geographique === code)
      : type === 'ept' && eptRegex.test(libelle)
        ? grandAgeIsolementMapped.filter((e) => e.ept === libelle)
        : type === 'epci' && !eptRegex.test(libelle)
          ? grandAgeIsolementMapped.filter((e) => e.epci === code)
          : grandAgeIsolementMapped;
  const yData = GrandAgeLineChartYData(grandAgeIsolementTerritoire);
  const xData = ['1968', '1975', '1982', '1990', '1999', '2009', '2014', '2020'];
  const yGraphData = Object.values(yData)
    .map(Number)
    .map((value) => (isNaN(value) ? null : value));
  const methodeCalcul =
    'Nombre de personnes de plus de 80 ans divisé par la population totale à chaque recensement INSEE.';
  const exportData = IndicatorExportTransformations.inconfort_thermique.GrandAgeIsolement(grandAgeIsolementTerritoire);

  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            <MicroCircleGrid pourcentage={Number(yData.over_80_2020_percent)} arrondi={2} ariaLabel="Pourcentage des personnes âgées de plus de 80 ans" />
            {
              !Object.values(yData).slice(0, -2).includes('NaN') && (
                <>
                  <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                    En 2020, <b>{numberWithSpacesRegex(yData.over_80_2020_percent)} %</b> de la
                    population de votre territoire est constitué de personnes
                    âgées de plus de 80 ans (soit{' '}
                    <b>
                      {numberWithSpacesRegex(sumProperty(
                        grandAgeIsolementTerritoire,
                        'over_80_sum_2020'
                      ))}
                    </b>{' '}
                    personnes).
                  </Body>
                </>
              )
            }
            {
              type === "commune" && percentTerritoireSup && percentTerritoireSup !== "NaN" ? (
                <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                  Ce taux est de {percentTerritoireSup} % dans votre EPCI.
                </Body>
              ) : type === "epci" && percentTerritoireSup && percentTerritoireSup !== "NaN" ? (
                <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                  Ce taux est de {percentTerritoireSup} % dans votre département.
                </Body>
              ) : ''
            }
            <CustomTooltipNouveauParcours title={methodeCalcul} />
            <GrandAgeText />
          </div>
        </div>
        <div className={styles.datavizWrapper}>
          {yData.over_80_2020_percent ? (
            <div
              style={{
                backgroundColor: 'white',
                height: !Object.values(yData).slice(0, -2).includes('NaN') ? '500px' : 'max-content',
                width: '100%',
                borderRadius: '1rem 0 0 0',
              }}
            >
              {
                !Object.values(yData).slice(0, -2).includes('NaN') ?
                  <LineChartGrandAge xData={xData} yData={yGraphData} />
                  : <div className='p-10 flex flex-row justify-center'>
                    <DataNotFoundForGraph image={DataNotFound} />
                  </div>
              }
            </div>
          ) : (
            <Loader />
          )}
          <SourceExport
            anchor="Grand âge"
            exportComponent={
              <ExportButtonNouveauParcours
                data={exportData}
                baseName="grand_age"
                type={type}
                libelle={libelle}
                code={code}
                sheetName="Grand âge"
              />
            }
            source='Observatoire des territoires'
            condition={!Object.values(yData).slice(0, -2).includes('NaN')}
          />
        </div>
      </div>
    </>
  );
};
