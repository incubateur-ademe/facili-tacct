'use client';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { qualiteEauxBaignadelegends } from '@/components/maps/legends/datavizLegends';
import { LegendCompIcons } from '@/components/maps/legends/legendComp';
import { MapQualiteEauxBaignade } from '@/components/maps/mapQualiteEauxBaignade';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EpciContoursMapper } from '@/lib/mapper/epci';
import {
  CarteCommunes,
  EpciContours,
  QualiteSitesBaignade
} from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import styles from './ressourcesEau.module.scss';

export const QualiteEauxBaignade = (props: {
  qualiteEauxBaignade: QualiteSitesBaignade[];
  carteCommunes: CarteCommunes[];
  epciContours: EpciContours[];
}) => {
  const { qualiteEauxBaignade, carteCommunes, epciContours } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const epciContoursMap = epciContours.map(EpciContoursMapper);
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);

  const title = (
    <>
      <div>L'indicateur représente l</div>
      <br></br>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</div>
    </>
  );

  return (
    <>
      {qualiteEauxBaignade.length !== 0 ? (
        <div className={styles.container}>
          <div className="w-5/12">
            <div className={styles.explicationWrapper}>
              <p>Le</p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid, repellat. Dolore asperiores sit doloremque corporis,
                dolorem cupiditate. Illum dignissimos animi officia quo amet,
                facere sed quae earum, mollitia blanditiis omnis.
              </p>
              <p>
                ⇒ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              </p>
              <p>
                ⇒ Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid, repellat. Dolore asperiores sit doloremque corporis,
                dolorem cupiditate. Illum dignissimos animi officia quo amet,
                facere sed quae earum, mollitia blanditiis omnis.
              </p>
              <p>
                - - - - <br></br>
              </p>
            </div>
          </div>
          <div className="w-7/12">
            <div className={styles.graphWrapper}>
              <div
                className={styles.ressourcesEauGraphTitleWrapper}
                style={{ padding: '1rem' }}
              >
                <h2>Qualité des sites de baignade</h2>
              </div>
              <div>
                <MapQualiteEauxBaignade
                  qualiteEauxBaignade={qualiteEauxBaignade}
                  epciContours={epciContoursMap}
                  carteCommunes={carteCommunesMap}
                />
              </div>
              <div
                className={styles.legend}
                style={{ width: 'auto', justifyContent: 'center' }}
              >
                <LegendCompIcons legends={qualiteEauxBaignadelegends} />
              </div>
              <p style={{ padding: '1em', margin: '0' }}>Source : </p>
            </div>
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
