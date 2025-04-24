import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { aot40Legends } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapAOT40 } from '@/components/maps/mapAOT40';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EpciContoursMapper } from '@/lib/mapper/epci';
import {
  AOT40,
  CarteCommunes,
  EpciContours,
  Patch4
} from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { Round } from '@/lib/utils/reusableFunctions/round';
import * as turf from '@turf/turf';
import L from 'leaflet';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const commune = carteCommunesMap.find(
    (commune) => commune.properties.code_geographique === codgeo
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
    return turf.point(aot.coordinates as number[], {
      value: aot.value,
      nom_site: aot.nom_site
    });
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
  const circle = turf.circle(
    [centerCoord[0], centerCoord[1]],
    nearestPoint.properties.distanceToPoint + 20,
    { steps: 10, units: 'kilometers' }
  );
  const stationsWithinCircle = turf.pointsWithinPolygon(
    featureCollection,
    circle
  );
  const maxValueInStations = stationsWithinCircle.features.length
    ? stationsWithinCircle.features
      .map((f) => f.properties?.value)
      .reduce((a, b) => Math.max(Number(a), Number(b)))
    : null;
  const maxStation = stationsWithinCircle.features.find(
    (f) => f.properties?.value === maxValueInStations
  );

  useEffect(() => {
    void (async () => {
      const temp = await GetPatch4(codgeo ?? codepci);
      setPatch4(temp);
      setIsLoadingPatch4(false);
    })();
  }, [codgeo, codepci]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4, 'fortes_chaleurs') : undefined;

  const title = (
    <div>
      <p>
        L’AOT40 (Accumulated Exposure Over Threshold 40) est un indicateur
        estimant l’impact de la pollution à l’ozone sur la végétation. Il mesure
        l’accumulation des concentrations d’ozone dépassant 40 ppb (80 µg/m³) :
      </p>
      <p>
        Il est calculé par la somme des différences entre les concentrations
        horaires d'ozone supérieures à 80 µg/m3 et le seuil de 80 µg/m3,
        mesurées quotidiennement entre 8 h et 20 h, de mai à juillet pour tenir
        compte de la période de photosynthèse.
      </p>
      <p>
        Une valeur cible(*) de 18 000 µg/m³ par heure, en moyenne calculée sur 5
        ans, est fixée dans la directive 2024/2881 du 23 octobre 2024 concernant
        la qualité de l’air ambiant et un air pur pour l’Europe.
      </p>
      <p>
        <i>
          (*) Valeur cible : niveau à atteindre, dans la mesure du possible,
          afin d'éviter, de prévenir ou de réduire les effets nocifs sur
          l'environnement.
        </i>
      </p>
    </div>
  );
  return (
    <>
      {!isLoadingPatch4 ? (
        <>
          {aot40.length ? (
            <div className={styles.container}>
              <div className="w-5/12">
                <div className={styles.explicationWrapper}>
                  <p>
                    La pollution à l’ozone ne s'arrête pas aux frontières des
                    agglomérations. Portée par le vent, la dispersion peut
                    s’étendre sur plusieurs centaines de kilomètres. Même les
                    territoires éloignés des sources de pollution en subissent
                    les effets.
                  </p>
                  {maxValueInStations == null ? (
                    <p>
                      Nous ne disposons pas de données pour les stations proches
                      de votre territoire
                    </p>
                  ) : maxValueInStations < 6000 ? (
                    <p>
                      Bravo, le seuil de 6 000 µg/m³ par heure fixé comme
                      objectif pour 2050 est déjà atteint. Ne relâchez pas vos
                      efforts.
                    </p>
                  ) : maxValueInStations > 18000 ? (
                    <p>
                      Le cumul d’ozone enregistré ces 5 dernières années pendant
                      la période de végétation ({Round(maxValueInStations, 0)}{' '}
                      µg/m³) risque d’engendrer des réactions de la part des
                      végétaux de votre territoire.
                    </p>
                  ) : (
                    <p>
                      Le seuil actuel de protection de la végétation de 18 000
                      µg/m³ par heure n’est pas franchi. Poursuivez vos efforts,
                      l’objectif fixé pour 2050 est de 6 000 µg/m³ par heure.
                    </p>
                  )}
                  <div className={styles.patch4Wrapper}>
                    {fortesChaleurs === 'Intensité très forte' ||
                      fortesChaleurs === 'Intensité forte' ? (
                      <div>
                        <TagItem
                          icon={fortesChaleursIcon}
                          indice="Fortes chaleurs"
                          tag={fortesChaleurs}
                        />
                      </div>
                    ) : null}
                  </div>
                  <CustomTooltip
                    title={title}
                    texte="D'où vient ce chiffre ?"
                  />
                </div>
                <div className="px-4">
                  <p>
                    L’ozone de basse altitude est le polluant de l’air le plus
                    destructeur pour la biodiversité. C’est l’un des rares gaz à
                    être à la fois un polluant de l’air et un gaz à effet de
                    serre : les périodes de fortes chaleurs, de plus en plus
                    fréquentes et intenses, favorisent la formation d’ozone de
                    basse altitude, dont les concentrations aggravent le
                    changement climatique.
                  </p>
                  <p>
                    Ce gaz très oxydant s’infiltre dans les plantes, détruit
                    leurs cellules et perturbe leur croissance. Les forêts sont
                    particulièrement touchées. Les arbres affaiblis deviennent
                    plus vulnérables aux maladies et aux sècheresses, et perdent
                    leur capacité à stocker du carbone. L’ozone perturbe la
                    pollinisation des abeilles, essentielles à 75 % des cultures
                    alimentaires.
                  </p>
                  <p>
                    ⇒ 15 % des stations de mesure en milieu rural dépassaient
                    encore le seuil réglementaire d'ozone sur la période
                    2018-2022.
                  </p>
                  <p>
                    ⇒ Dans certaines régions françaises, des arbres comme le
                    hêtre et l'épicéa enregistrent des pertes de biomasse allant
                    jusqu'à 22 %.
                  </p>
                  <p>
                    ⇒ À l’échelle mondiale, environ 90 % des pertes de rendement
                    agricole dues à la pollution atmosphérique sont attribuées à
                    l’ozone.
                  </p>
                  <p>
                    - - - - <br></br>
                    La directive 2024/2881 du 23 octobre 2024 concernant la
                    qualité de l’air ambiant et un air pur pour l’Europe fixe un
                    objectif de protection de la végétation de 6 000 µg/m³ par
                    heure au 1er janvier 2050.
                  </p>
                </div>
              </div>
              <div className="w-7/12">
                <div className={styles.graphWrapper}>
                  <div
                    className={styles.biodiversiteGraphTitleWrapper}
                    style={{ padding: '1rem' }}
                  >
                    <h2>
                      Concentration dans l’air durant la période de végétation,
                      moyenne sur 5 ans 2020-2024 (µg/m³)
                    </h2>
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
                  <p style={{ padding: '1em', margin: '0' }}>
                    Source : Géod’Air (2024)
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <GraphDataNotFound code={codgeo ? codgeo : codepci} />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AOT40Dataviz;
