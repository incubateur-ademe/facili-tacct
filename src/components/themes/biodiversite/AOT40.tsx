import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { aot40Legends } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapAOT40 } from '@/components/maps/mapAOT40';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import {
  AOT40,
  CarteCommunes,
  Patch4
} from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { AOT40TooltipText } from '@/lib/tooltipTexts';
import { Round } from '@/lib/utils/reusableFunctions/round';
import * as turf from '@turf/turf';
import L from 'leaflet';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AOT40Text } from '../inconfortThermique/staticTexts';
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

const getCoordinates = (coords: number[][][]) => {
  const coords_arr = [];
  for (let i = 0; i < coords.length; i++) {
    const center = getCentroid(coords[i]);
    coords_arr.push(center);
  }
  return getCentroid(coords_arr);
};

const AOT40Dataviz = (props: {
  aot40: AOT40[];
  carteCommunes: CarteCommunes[];
}) => {
  const { aot40, carteCommunes } = props;
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);

  const commune = type === "commune"
    ? carteCommunesMap.find(
      (commune) => commune.properties.code_geographique === code
    ) : null;

  const carteCommunesFiltered = type === "ept"
    ? carteCommunesMap.filter(
      (el) => el.properties.ept === libelle
    ) : carteCommunesMap;

  const allCoordinates = carteCommunesFiltered.map(
    (el) => el.geometry.coordinates?.[0]?.[0]
  );

  const centerCoord: number[] = commune
    ? commune.properties.coordinates.split(',').map(Number)
    : getCoordinates(allCoordinates);

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
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4, 'fortes_chaleurs')
    : undefined;

  return (
    <>
      {
        !isLoadingPatch4 ?
          <div className={styles.container}>
            <div className={(aot40.length && carteCommunes.length) ? "w-5/12" : "w-1/2"}>
              <div className={styles.explicationWrapper}>
                <p>
                  La pollution à l’ozone ne s'arrête pas aux frontières des
                  agglomérations. Portée par le vent, la dispersion peut s’étendre
                  sur plusieurs centaines de kilomètres. Même les territoires
                  éloignés des sources de pollution en subissent les effets.
                </p>
                {maxValueInStations == null ? (
                  <p>
                    Nous ne disposons pas de données pour les stations proches de
                    votre territoire
                  </p>
                ) : maxValueInStations < 6000 ? (
                  <p>
                    Bravo, le seuil de 6 000 µg/m³ par heure fixé comme objectif
                    pour 2050 est déjà atteint. Ne relâchez pas vos efforts.
                  </p>
                ) : maxValueInStations > 18000 ? (
                  <p>
                    Le cumul d’ozone enregistré ces 5 dernières années pendant la
                    période de végétation ({Round(maxValueInStations, 0)} µg/m³)
                    risque d’engendrer des réactions de la part des végétaux de
                    votre territoire.
                  </p>
                ) : (
                  <p>
                    Le seuil actuel de protection de la végétation de 18 000 µg/m³
                    par heure n’est pas franchi. Poursuivez vos efforts,
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
                <CustomTooltip title={AOT40TooltipText} texte="D'où vient ce chiffre ?" />
              </div>
              <AOT40Text />
            </div>
            <div className={aot40.length && carteCommunes.length ? "w-7/12" : "w-1/2"}>
              <div className={styles.graphWrapper}>
                <div
                  className={styles.biodiversiteGraphTitleWrapper}
                  style={{ padding: '1rem' }}
                >
                  <h2>
                    Concentration d’ozone pendant la période de végétation (moyenne 2020-2024)
                  </h2>
                </div>
                {
                  aot40.length && carteCommunes.length ? (
                    <>
                      <MapAOT40
                        aot40={aot40}
                        carteCommunes={carteCommunesMap}
                      />
                      <div
                        className={styles.legend}
                        style={{ width: 'auto', justifyContent: 'center' }}
                      >
                        <LegendCompColor legends={aot40Legends} />
                      </div>
                    </>
                  ) : <DataNotFoundForGraph image={DataNotFound} />
                }
                <p style={{ padding: '1em', margin: '0' }}>
                  Source : Géod’Air (2024)
                </p>
              </div>
            </div>
          </div>
          : <Loader />
      }
    </>
  );
};

export default AOT40Dataviz;
