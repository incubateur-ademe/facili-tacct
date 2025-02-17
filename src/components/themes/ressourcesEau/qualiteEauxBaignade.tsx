'use client';

import qualiteBon from '@/assets/icons/qualite_baignade_bon.svg';
import qualiteExcellent from '@/assets/icons/qualite_baignade_excellent.svg';
import qualiteInsuffisant from '@/assets/icons/qualite_baignade_insuffisant.svg';
import qualiteManquePrelevement from '@/assets/icons/qualite_baignade_manque_prelevement.svg';
import qualiteNonClasse from '@/assets/icons/qualite_baignade_non_classe.svg';
import qualiteSuffisant from '@/assets/icons/qualite_baignade_suffisant.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { LegendCompIcons } from '@/components/maps/legends/legendComp';
import { MapQualiteEauxBaignade } from '@/components/maps/mapQualiteEauxBaignade';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EpciContoursMapper } from '@/lib/mapper/epci';
import {
  CarteCommunes,
  EpciContours,
  QualiteSitesBaignade
} from '@/lib/postgres/models';
import { CustomTooltip } from '@/lib/utils/CalculTooltip';
import { useSearchParams } from 'next/navigation';
import styles from './ressourcesEau.module.scss';

const legends = [
  {
    value: 'Excellent',
    icon: qualiteExcellent
  },
  {
    value: 'Bon',
    icon: qualiteBon
  },
  {
    value: 'Suffisant',
    icon: qualiteSuffisant
  },
  {
    value: 'Insuffisant',
    icon: qualiteInsuffisant
  },
  {
    value: 'Site non classé',
    icon: qualiteNonClasse
  },
  {
    value: 'Insuffisamment de prélèvement',
    icon: qualiteManquePrelevement
  }
];

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
                <LegendCompIcons legends={legends} />
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
