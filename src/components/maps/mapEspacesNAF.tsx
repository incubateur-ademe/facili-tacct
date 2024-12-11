'use client';

import 'leaflet/dist/leaflet.css';

import {
  FeatureGroup,
  Layer,
  LeafletMouseEventHandlerFn,
  type StyleFunction
} from 'leaflet';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';

import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { type Any } from '@/lib/utils/types';

import { CommunesIndicateursDto } from '@/lib/dto';
import { Feature, GeoJsonObject } from 'geojson';
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

const getColor = (d: number) => {
  return d > 20000
    ? '#FF5E54'
    : d > 10000
      ? '#FFBD00'
      : d > 5000
        ? '#FFFA6A'
        : d > 0
          ? '#D5F4A3'
          : '#5CFF54';
};

export const MapEspacesNaf = (props: {
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { carteCommunes } = props;
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
  const centerCoord: number[] = commune
    ? getCentroid(commune.geometry.coordinates?.[0][0])
    : getCoordinates(all_coordinates);

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as CommunesIndicateursDto;
    return {
      fillColor: getColor(typedFeature?.properties.naf ?? 0),
      weight: 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 1
    };
  };

  const CustomTooltip = (communeName: string, naf: number) => {
    return `<div style="padding: 1rem">
        <div style="font-size: 0.75rem; font-family: Marianne; font-weight: 700; padding: 0 0 1rem">${communeName} : ${naf / 10000} hectare(s)</div>
      </div>`;
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    const commune_name =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.libelle_commune
        : undefined;
    const naf =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.naf
        : undefined;
    layer.setStyle({
      weight: 3,
      color: '#0D2100',
      fillOpacity: 0.9
    });
    layer.bindTooltip(CustomTooltip(commune_name as string, naf as number), {
      direction: e.originalEvent.offsetY > 250 ? 'top' : 'bottom',
      opacity: 0.97
    });
    layer.openTooltip();
    layer.bringToFront();
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    layer.setStyle({
      weight: 1,
      color: '#000000',
      fillOpacity: 1
    });
    layer.closeTooltip();
  };

  const onEachFeature = (feature: Feature<Any>, layer: Layer) => {
    layer.on({
      mouseover: mouseOnHandler,
      mouseout: mouseOutHandler
    });
  };

  return (
    <>
      {carteCommunes === null ? (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      ) : (
        <MapContainer
          center={[centerCoord[1], centerCoord[0]]}
          zoom={10}
          ref={mapRef}
          style={{ height: '500px', width: '100%' }}
          attributionControl={false}
          zoomControl={false}
        >
          <TileLayer
            // attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openma            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            ref={mapRef}
            data={carteCommunes as unknown as GeoJsonObject}
            style={style}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      )}
    </>
  );
};
