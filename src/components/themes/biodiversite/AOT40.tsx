import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { aot40Legends } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapAOT40 } from '@/components/maps/mapAOT40';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EpciContoursMapper } from '@/lib/mapper/epci';
import { AOT40, CarteCommunes, EpciContours } from '@/lib/postgres/models';
import { CustomTooltip } from '@/lib/utils/CalculTooltip';
import { Round } from '@/lib/utils/reusableFunctions/round';
import * as turf from '@turf/turf';
import L from 'leaflet';
import { useSearchParams } from 'next/navigation';
import styles from './biodiversite.module.scss';

const color = (valeur: number) => {
  return valeur > 36000
    ? '#5524A0'
    : valeur > 27000
      ? '#E8323B'
      : valeur > 18000
        ? '#FFCF5E'
        : valeur > 12000
          ? '#3E8F3E'
          : valeur > 6000
            ? '#009ADC'
            : '#5EEDF3';
};

const getCentroid = (arr: number[][]) => {
  const centroid = arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
  return [centroid[1], centroid[0]];
};

const AOT40Dataviz = (props: {
  aot40: AOT40[];
  epciContours: EpciContours[];
  carteCommunes: CarteCommunes[];
}) => {
  const { aot40, epciContours, carteCommunes } = props;
  const epciContoursMap = epciContours.map(EpciContoursMapper);
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const commune = carteCommunesMap.find(
    (commune) => commune.properties.code_commune === codgeo
  );
  const centerCoord: number[] = commune
    ? commune.properties.coordinates.split(',').map(Number)
    : getCentroid(epciContoursMap[0]?.geometry?.coordinates[0][0]);

  const aot40map = aot40.map((aot) => {
    return {
      coordinates: [aot.Latitude, aot.Longitude],
      value: aot.valeur_brute,
      nom_site: aot.nom_site,
      type_implantation: aot.type_d_implantation,
      icon: L.divIcon({
        html: `
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="9" fill=${color(aot.valeur_brute!)} />
          </svg>`,
        className: 'svg-marker',
        iconSize: [24, 24],
        iconAnchor: [0, 0]
      })
    };
  });

  const pointCollection = aot40map.map((aot) => {
    return turf.point(aot.coordinates as number[]);
  });
  const featureCollection = turf.featureCollection(pointCollection);
  const nearestPoint = turf.nearestPoint(
    turf.point([centerCoord[0], centerCoord[1]]),
    featureCollection
  );
  const neareastStation = aot40map.find(
    (aot) =>
      JSON.stringify(aot.coordinates) ===
      JSON.stringify(nearestPoint.geometry.coordinates)
  );

  const title = (
    <div>
      <p>
        L’AOT40 (Accumulated Exposure Over Threshold 40) est un indicateur
        estimant l’impact de la pollution à l’ozone sur la végétation. Il mesure
        l’accumulation des concentrations d’ozone dépassant 40 ppb (80 µg/m³) :
      </p>
      <ul>
        <li>
          Calculé sur trois mois, de mai à juillet, en tenant compte de la
          période de photosynthèse (entre 8 h et 20 h) ;
        </li>
        <li>Vise à évaluer les effets de l’ozone sur la végétation ;</li>
        <li>
          Généralement étudié en milieu rural, où l’ozone affecte les
          écosystèmes et les cultures.
        </li>
      </ul>
    </div>
  );
  return (
    <>
      {aot40.length ? (
        <div className={styles.container}>
          <div className="w-5/12">
            <div className={styles.explicationWrapper}>
              <p>
                Distance entre la station la plus proche et le centre du
                territoire : {Round(nearestPoint.properties.distanceToPoint, 2)}{' '}
                km
              </p>
              <p>
                Valeur O3 de la station :{' '}
                {Round(Number(neareastStation?.value), 2)} µg/m³
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              {nearestPoint.properties.distanceToPoint > 15 ? (
                <>
                  <p>
                    La pollution à l’ozone ne s'arrête pas aux frontières des
                    agglomérations. Les zones rurales subissent aussi ses
                    effets. L'ozone voyage sur de longues distances, porté par
                    le vent. Même les territoires éloignés des sources de
                    pollution en subissent les effets. 15 % des stations de
                    mesure en milieu rural dépassaient encore le seuil
                    réglementaire d'ozone sur la période 2018-2022.
                  </p>
                  <p>
                    Les lignes qui suivent s’appliquent aux agglomérations où
                    des dépassements de seuils réglementaires ont été constatés.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    L’ozone de basse altitude est le polluant de l’air le plus
                    destructeur pour la végétation et la biodiversité. Le
                    changement climatique aggrave la pollution de l’air, et vice
                    versa. Les périodes de fortes chaleurs, de plus en plus
                    fréquentes et intenses, favorisent la formation d’ozone de
                    basse altitude. L’ozone est l’un des rares gaz à être à la
                    fois un polluant de l’air et un gaz à effet de serre.
                  </p>
                  <p>
                    À l’échelle mondiale, environ 90 % des pertes de rendement
                    agricole dues à la pollution atmosphérique sont attribuées à
                    l’ozone. Ce polluant s’infiltre dans les plantes, détruit
                    leurs cellules et perturbe leur croissance. Les forêts sont
                    particulièrement touchées. Les arbres affaiblis deviennent
                    plus vulnérables aux maladies, et perdent leur capacité à
                    stocker du carbone. L’ozone perturbe la pollinisation des
                    abeilles, essentielles à 75 % des cultures alimentaires.
                  </p>
                  <p>
                    ⇒ En 2022, 25 agglomérations françaises ont dépassé les
                    seuils réglementaires européens pour au moins un de ces
                    quatre polluants : dioxyde d’azote, PM10, ozone
                    troposphérique, monoxyde d'azote. Mais si les valeurs guides
                    de l’OMS avaient été appliquées, la quasi-totalité des
                    agglomérations françaises auraient été en dépassement : 95 %
                    des agglomérations pour l’ozone.
                  </p>
                  <p>
                    ⇒ Dans certaines régions françaises, des arbres comme le
                    hêtre et l'épicéa enregistrent des pertes de biomasse allant
                    jusqu'à 22 %.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="w-7/12">
            <div className={styles.graphWrapper}>
              <div
                className={styles.biodiversiteGraphTitleWrapper}
                style={{ padding: '1rem' }}
              >
                <h2>AOT40 O3 végétation 5 ans</h2>
              </div>
              <div>
                <MapAOT40
                  aot40={aot40}
                  epciContours={epciContoursMap}
                  carteCommunes={carteCommunesMap}
                />
              </div>
              <div
                className={styles.legend}
                style={{ width: 'auto', justifyContent: 'center' }}
              >
                <LegendCompColor legends={aot40Legends} />
              </div>
              <p style={{ padding: '1em', margin: '0' }}>Source : Géod’Air</p>
            </div>
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};

export default AOT40Dataviz;
