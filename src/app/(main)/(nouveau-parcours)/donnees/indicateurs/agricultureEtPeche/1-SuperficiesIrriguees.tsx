'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { MicroPieChart } from '@/components/charts/MicroDataviz';
import { ExportButtonNouveauParcours } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { surfacesIrrigueesLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapSurfacesIrriguees } from '@/components/maps/mapSurfacesIrriguees';
import { CustomTooltipNouveauParcours } from '@/components/utils/CalculTooltip';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { Body } from '@/design-system/base/Textes';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { Agriculture, CarteCommunes } from '@/lib/postgres/models';
import { SurfacesIrrigueesText } from '@/lib/staticTexts';
import { surfacesIrrigueesTooltipText } from '@/lib/tooltipTexts';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { FilterDataTerritory } from '@/lib/utils/reusableFunctions/filterDataTerritories';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import styles from '../../explorerDonnees.module.scss';

export const SuperficiesIrriguees = (props: {
  agriculture: Agriculture[];
  carteCommunes: CarteCommunes[];
}) => {
  const { agriculture, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;

  const carteCommunesEnriched = carteCommunes.map((el) => {
    return {
      ...el,
      surfacesIrriguees:
        agriculture.find((item) => item.code_geographique === el.code_geographique)
          ?.part_irr_SAU_2020 ?? NaN
    };
  });
  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);
  const carteCommunesFiltered = FilterDataTerritory(type, code, libelle, carteCommunesEnriched);
  const exportData = IndicatorExportTransformations.agriculture.surfacesIrriguees(carteCommunesFiltered);
  const surfaceTerritoire = type === "commune" ?
    communesMap.find((obj) => obj.properties.code_geographique === code)?.properties.surfacesIrriguees
    : communesMap
      .map((obj) => obj.properties.surfacesIrriguees)
      .map((value) => (isNaN(value!) ? 0 : value))
      .reduce((acc, value) => acc! + value!, 0);

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div className={styles.chiffreDynamiqueWrapper}>
          <MicroPieChart
            pourcentage={!surfaceTerritoire ? 0 : type === "commune" ? surfaceTerritoire : surfaceTerritoire / communesMap.length}
            arrondi={1}
            ariaLabel='Part de la superficie irriguée dans la SAU'
          />
          <div className={styles.text}>
            {
              surfaceTerritoire !== undefined && !isNaN(surfaceTerritoire) && communesMap.length > 0 ? (
                <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                  En 2020, la part de la superficie irriguée dans la SAU sur
                  votre territoire était de{' '}
                  {type === "commune" ? surfaceTerritoire : Round(surfaceTerritoire! / communesMap.length, 1)} %.
                </Body>
              ) : <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                Il n’y a pas de données référencées sur le territoire que vous avez sélectionné
              </Body>
            }
            <CustomTooltipNouveauParcours
              title={surfacesIrrigueesTooltipText}
              texte="D'où vient ce chiffre ?"
            />
          </div>
        </div>
        <div className='mt-4 pr-5'>
          <ReadMoreFade maxHeight={100}>
            <SurfacesIrrigueesText />
          </ReadMoreFade>
        </div>
        <div className={styles.mapWrapper}>
          {
            communesMap.length > 0 ? (
              <>
                <MapSurfacesIrriguees carteCommunes={communesMap} />
                <div
                  className={styles.legend}
                  style={{ width: 'auto', justifyContent: 'center' }}
                >
                  <LegendCompColor legends={surfacesIrrigueesLegend} />
                </div>
              </>
            ) : (
              <div className={styles.dataNotFoundForMap}>
                <DataNotFoundForGraph image={DataNotFound} />
              </div>
            )
          }
        </div>
      </div>
      {
        surfaceTerritoire !== undefined && !isNaN(surfaceTerritoire) && surfaceTerritoire !== 0 ? (
          <div className={styles.sourcesExportWrapper} style={{ marginLeft: '-2rem', borderTop: '1px solid var(--gris-medium)' }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : AGRESTE, 2020.
            </Body>
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="surfaces_irriguees"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="Surfaces irriguées"
            />
          </div>
        ) : (
          <div
            className={styles.sourcesExportWrapper}
            style={{
              marginLeft: '-2rem',
              borderTop: '1px solid var(--gris-medium)',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0
            }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : AGRESTE, 2020.
            </Body>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>Export indisponible : données non référencées ou nulles.</Body>
          </div>
        )
      }
    </>
  );
};
