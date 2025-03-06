import { useSearchParams } from 'next/navigation';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { surfacesIrrigueesLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapSurfacesIrriguees } from '@/components/maps/mapSurfacesIrriguees';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { Agriculture, CarteCommunes } from '@/lib/postgres/models';
import styles from './agriculture.module.scss';

export const SurfacesIrriguees = ({
  carteCommunes,
  agriculture
}: {
  carteCommunes: CarteCommunes[];
  agriculture: Agriculture[];
}) => {
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo');
  const codepci = searchParams.get('codepci')!;
  const carteCommunesEnriched = carteCommunes.map((el) => {
    return {
      ...el,
      surfacesIrriguees:
        agriculture.find((item) => item.CODGEO === el.code_commune)
          ?.part_irr_SAU_2020 ?? NaN
    };
  });

  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);
  const commune = codgeo
    ? communesMap.find((obj) => obj.properties['code_commune'] === codgeo)
    : undefined;

  const title = (
    <>
      <div>Lorem ipsum : </div>
      <br></br>
      <div>...............</div>
    </>
  );

  return (
    <>
      {communesMap ? (
        <div className={styles.container}>
          {communesMap.length ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  {commune ? (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Commune
                    </p>
                  ) : (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      EPCI
                    </p>
                  )}
                  <CustomTooltip
                    title={title}
                    texte="D'où vient ce chiffre ?"
                  />
                </div>
                <div className="px-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus nec nunc tincidunt tincidunt. Nullam
                  </p>
                  <p>
                    - - - - <br></br>
                    Adapter les logements au risque de forte chaleur est la
                    mesure 9 du Plan national d’adaptation au changement
                    climatique (PNACC 3).
                  </p>
                </div>
              </div>
              <div className="w-3/5">
                <div className={styles.graphWrapper}>
                  <p style={{ padding: '1em', margin: '0' }}>
                    <b>Part de la superficie irriguée dans la SAU en 2020</b>
                  </p>
                  <MapSurfacesIrriguees carteCommunes={communesMap} />
                  <div
                    className={styles.legend}
                    style={{ width: 'auto', justifyContent: 'center' }}
                  >
                    <LegendCompColor legends={surfacesIrrigueesLegend} />
                  </div>
                  <p style={{ padding: '1em', margin: '0' }}>Source : XXXXXX</p>
                </div>
              </div>
            </>
          ) : (
            <GraphDataNotFound code={codgeo ? codgeo : codepci} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
