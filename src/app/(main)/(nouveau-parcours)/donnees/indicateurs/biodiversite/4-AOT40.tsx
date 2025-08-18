"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportButtonNouveauParcours } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { aot40Legends } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapAOT40 } from '@/components/maps/mapAOT40';
import { Body, H3 } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { AOT40, CarteCommunes } from "@/lib/postgres/models";
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { Round } from '@/lib/utils/reusableFunctions/round';
import * as turf from '@turf/turf';
import L from 'leaflet';
import { useSearchParams } from "next/navigation";
import styles from '../../explorerDonnees.module.scss';

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

const getInverseCentroid = (arr: number[][]) => {
  const centroid = arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
  return [centroid[1], centroid[0]];
};

const getNormalCentroid = (arr: number[][]) => {
  const centroid = arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
  return centroid;
};

const getCoordinates = (coords: number[][][]) => {
  const coords_arr = [];
  for (let i = 0; i < coords.length; i++) {
    const center = getInverseCentroid(coords[i]);
    coords_arr.push(center);
  }
  return getNormalCentroid(coords_arr);
};

export const OzoneEtVegetation = (props: {
  aot40: AOT40[];
  carteCommunes: CarteCommunes[];
}) => {
  const { aot40, carteCommunes } = props;
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
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

  const exportData = IndicatorExportTransformations.biodiversite.aot40(aot40);
  return (
    <>
      <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
        Concentration d’ozone pendant la période de végétation (moyenne 2020-2024)
      </H3>
      <div className={styles.datavizMapContainer}>
        <Body size='sm'>
          La pollution à l’ozone ne s'arrête pas aux frontières des
          agglomérations. Portée par le vent, la dispersion peut s’étendre
          sur plusieurs centaines de kilomètres. Même les territoires
          éloignés des sources de pollution en subissent les effets.
        </Body>
        {maxValueInStations == null ? (
          <Body weight='bold' size='sm'>
            Nous ne disposons pas de données pour les stations proches de
            votre territoire
          </Body>
        ) : maxValueInStations < 6000 ? (
          <Body weight='bold' size='sm'>
            Bravo, le seuil de 6 000 µg/m³ par heure fixé comme objectif
            pour 2050 est déjà atteint. Ne relâchez pas vos efforts.
          </Body>
        ) : maxValueInStations > 18000 ? (
          <Body weight='bold' size='sm'>
            Le cumul d’ozone enregistré ces 5 dernières années pendant la
            période de végétation ({Round(maxValueInStations, 0)} µg/m³)
            risque d’engendrer des réactions de la part des végétaux de
            votre territoire.
          </Body>
        ) : (
          <Body weight='bold' size='sm'>
            Le seuil actuel de protection de la végétation de 18 000 µg/m³
            par heure n’est pas franchi. Poursuivez vos efforts,
            l’objectif fixé pour 2050 est de 6 000 µg/m³ par heure.
          </Body>
        )}
        <div className={styles.mapWrapper}>
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
            ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
          }
        </div>
      </div>
      <div className={styles.sourcesExportWrapper} style={{ marginLeft: '-2rem', borderTop: '1px solid var(--gris-medium)' }}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : Géod’Air (2024)
        </Body>
        {
          carteCommunes.length > 0 && (
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="aot_40"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="AOT 40"
            />
          )}
      </div>
    </>
  );
};
