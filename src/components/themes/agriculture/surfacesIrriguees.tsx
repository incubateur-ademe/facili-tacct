import { useSearchParams } from 'next/navigation';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { surfacesIrrigueesLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapSurfacesIrriguees } from '@/components/maps/mapSurfacesIrriguees';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { Agriculture, CarteCommunes } from '@/lib/postgres/models';
import { surfacesIrrigueesTooltipText } from '@/lib/tooltipTexts';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { SurfacesIrrigueesText } from '../inconfortThermique/staticTexts';
import styles from './agriculture.module.scss';

export const SurfacesIrriguees = ({
  carteCommunes,
  agriculture
}: {
  carteCommunes: CarteCommunes[];
  agriculture: Agriculture[];
}) => {
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

  const surfaceTerritoire = type === "commune" ?
    communesMap.find((obj) => obj.properties.code_geographique === code)?.properties.surfacesIrriguees
    : communesMap
      .map((obj) => obj.properties.surfacesIrriguees)
      .map((value) => (isNaN(value!) ? 0 : value))
      .reduce((acc, value) => acc! + value!, 0);

  return (
    <>
      {communesMap ? (
        <div className={styles.container}>
          {communesMap.length && surfaceTerritoire ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                    En 2020, la part de la superficie irriguée dans la SAU sur
                    votre territoire était de{' '}
                    {type === "commune" ? surfaceTerritoire : Round(surfaceTerritoire! / communesMap.length, 1)} %.
                  </p>
                  <CustomTooltip
                    title={surfacesIrrigueesTooltipText}
                    texte="D'où vient ce chiffre ?"
                  />
                </div>
                <SurfacesIrrigueesText />
              </div>
              <div className="w-3/5">
                <div className={styles.graphWrapper}>
                  <p style={{ padding: '1em', margin: '0' }}>
                    <b>
                      Part de la surface agricole irriguée dans la SAU en 2020
                    </b>
                  </p>
                  <MapSurfacesIrriguees carteCommunes={communesMap} />
                  <div
                    className={styles.legend}
                    style={{ width: 'auto', justifyContent: 'center' }}
                  >
                    <LegendCompColor legends={surfacesIrrigueesLegend} />
                  </div>
                  <p style={{ padding: '1em', margin: '0' }}>
                    Source : AGRESTE (2020)
                  </p>
                </div>
              </div>
            </>
          ) : (
            <GraphDataNotFound code={code} libelle={libelle} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
