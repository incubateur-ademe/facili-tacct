'use client';

import 'leaflet/dist/leaflet.css';

import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { type Any } from '@/lib/utils/types';
import { type StyleFunction } from 'leaflet';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import './maps.scss';

import { CommunesIndicateursDto } from '@/lib/dto';
import { CollectivitesSearchbar } from '@/lib/postgres/models';
import { swapNumbers } from '@/lib/utils/reusableFunctions/swapItemsInArray';
import { GeoJsonObject } from 'geojson';
import { GraphDataNotFound } from '../graph-data-not-found';

const getCentroid = (arr: number[][]) => {
  return arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
};

const getCoordinates = (coords: number[][][]) => {
  const coords_arr = [];
  for (let i = 0; i < coords.length; i++) {
    const center = getCentroid(coords[i]);
    coords_arr.push(center);
  }
  return getCentroid(coords_arr);
};

const getColor = (d: any) => {
  return d === 2
    ? '#FF5733' // red
    : d === 3
      ? '#33FF57' // green
      : d === 5
        ? '#3357FF' // blue
        : d === 8
          ? '#FF33A1' // pink
          : d === 9
            ? '#33FFF5' // cyan
            : d === 'A'
              ? '#FFD700' // yellow
              : d === 'B'
                ? '#8B4513' // brown
                : d === 'C'
                  ? '#800080' // purple
                  : d === 'D'
                    ? '#FF8C00' // dark orange
                    : d === 'E'
                      ? '#00FF00' // lime
                      : d === 'F'
                        ? '#8A33FF' // violet
                        : '#FE1E14'; // fallback red
};

export const MapLCZ = (props: {
  carteCommunes: CommunesIndicateursDto[];
  collectivite: CollectivitesSearchbar[];
  LCZBayonne: any[];
}) => {
  const { carteCommunes, collectivite, LCZBayonne } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo');
  const codepci = searchParams.get('codepci')!;
  const mapRef = useRef(null);
  const all_coordinates = carteCommunes.map(
    (el) => el.geometry.coordinates?.[0]?.[0]
  );

  const commune = codgeo
    ? carteCommunes.find((el) => el.properties.code_commune === codgeo)
    : null;
  const centerCoord: number[] = collectivite[0].coordinates
    ? swapNumbers(collectivite[0].coordinates.split(',').map(Number), 0, 1)
    : getCoordinates(all_coordinates);

  const style: StyleFunction<Any> = () => {
    return {
      weight: 1,
      opacity: 1,
      color: '#161616',
      // dashArray: "3",
      fillOpacity: 0
    };
  };

  const style2: StyleFunction<Any> = (feature) => {
    const typedFeature = feature;
    return {
      fillColor: getColor(typedFeature?.properties.lcz ?? 0),
      weight: 0,
      color: 'transparent',
      // dashArray: "3",
      fillOpacity: 1
    };
  };

  return (
    <>
      {carteCommunes === null ? (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      ) : (
        <MapContainer
          center={[centerCoord[1], centerCoord[0]]}
          zoom={commune ? 11 : 10}
          ref={mapRef}
          style={{ height: '500px', width: '100%', cursor: 'grab' }}
          attributionControl={false}
          zoomControl={false}
          maxZoom={13}
        >
          <TileLayer
            // attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openma            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            // attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://lcz-generator.rub.de/tms-inverted/global-map-tiles/v3/{z}/{x}/{y}.png"
            opacity={0.4}
          />
          <GeoJSON
            ref={mapRef}
            data={LCZBayonne as unknown as GeoJsonObject}
            style={style2}
          />
          <GeoJSON
            ref={mapRef}
            data={carteCommunes as unknown as GeoJsonObject}
            style={style}
          />
        </MapContainer>
      )}
    </>
  );
};
