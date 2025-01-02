import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { LegendEtatCoursDeau } from '@/components/maps/components/legendEtatCoursDeau';
import { MapEtatCoursDeau } from '@/components/maps/mapEtatCoursDeau';
import { EpciContoursMapper } from '@/lib/mapper/epci';
import { EtatCoursDeauMapper } from '@/lib/mapper/etatCoursDeau';
import {
  CarteCommunes,
  EpciContours,
  EtatCoursDeau
} from '@/lib/postgres/models';
import { CustomTooltip } from '@/lib/utils/CalculTooltip';
import { useSearchParams } from 'next/navigation';
import styles from './biodiversite.module.scss';

const EtatQualiteCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeau[];
  epciContours: EpciContours[];
  carteCommunes: CarteCommunes[];
}) => {
  const { etatCoursDeau, epciContours, carteCommunes } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const etatCoursDeauMap = etatCoursDeau.map(EtatCoursDeauMapper);
  const epciContoursMap = epciContours.map(EpciContoursMapper);
  const commune = carteCommunes.find(
    (commune) => commune.code_commune === codgeo
  );
  const title = (
    <>
      <div></div>
      <br></br>
    </>
  );
  return (
    <>
      {etatCoursDeau.length ? (
        <div className={styles.container}>
          <div className="w-5/12">
            <div className={styles.explicationWrapper}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                diam
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                diam
              </p>

              <p>⇒</p>
              <p>⇒</p>
              <p>
                - - - - <br></br>
                Plan National d'Adaptation au Changement Climatique (PNACC 3) :
              </p>
            </div>
          </div>
          <div className="w-7/12">
            <div className={styles.graphWrapper}>
              <div
                className={styles.biodiversiteGraphTitleWrapper}
                style={{ padding: '1rem' }}
              >
                <h2>État des cours d'eau</h2>
              </div>
              <div>
                <MapEtatCoursDeau
                  etatCoursDeau={etatCoursDeauMap}
                  epciContours={epciContoursMap}
                  carteCommunes={commune}
                />
              </div>
              <div
                className={styles.legend}
                style={{ width: 'auto', justifyContent: 'center' }}
              >
                <LegendEtatCoursDeau />
              </div>
              <p style={{ padding: '1em', margin: '0' }}>
                Source : Agences de l'eau
              </p>
            </div>
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};

export default EtatQualiteCoursDeau;
