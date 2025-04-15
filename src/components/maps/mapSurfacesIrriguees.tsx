'use client';

import { CommunesIndicateursDto } from '@/lib/dto';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { type Any } from '@/lib/utils/types';
import { Feature, GeoJsonObject } from 'geojson';
import {
  FeatureGroup,
  Layer,
  LeafletMouseEventHandlerFn,
  type StyleFunction
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
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
  return d === 0
    ? '#D8EFFA'
    : d > 0
      ? '#3DB6EA'
      : d > 20
        ? '#0072B5'
        : d > 40
          ? '#03508B'
          : d > 60 && d <= 100
            ? '#093454'
            : 'transparent';
};

export const MapSurfacesIrriguees = (props: {
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapRef = useRef(null);

  const carteCommunesFiltered = type === "ept" 
  ? carteCommunes.filter(el => el.properties.ept === libelle)
  : carteCommunes

  const allCoordinates = carteCommunesFiltered.map(
    (el) => el.geometry.coordinates?.[0]?.[0]
  );
  const commune = type === 'commune'
    ? carteCommunesFiltered.find(
        (el) => el.properties.code_geographique === code
      )
    : null;
  const centerCoord: number[] = commune
    ? getCentroid(commune.geometry.coordinates?.[0][0])
    : getCoordinates(allCoordinates);

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as CommunesIndicateursDto;
    return {
      fillColor: getColor(typedFeature?.properties.surfacesIrriguees ?? 0),
      weight: typedFeature.properties.code_geographique === code ? 3 : 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 1
    };
  };

  const CustomTooltip = (communeName: string, surfacesIrriguees: number) => {
    return `
      <div style="padding: 0.5rem">
        <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 0">
          <p style="font-size: 0.75rem; font-family: Marianne; font-weight: 400; margin: 0">${communeName} : </p> 
          <p style="font-size: 0.75rem; font-family: Marianne; font-weight: 700; margin: 0"> 
            ${isNaN(surfacesIrriguees) ? 'Aucune donnée' : `${surfacesIrriguees} %`}
          </p>
        </div>
      </div>
    `;
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    const communeName =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.libelle_geographique
        : undefined;
    const surfacesIrriguees =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.surfacesIrriguees
        : undefined;
    layer.setStyle({
      weight: 3,
      color: '#0D2100',
      fillOpacity: 0.9
    });
    layer.bindTooltip(
      CustomTooltip(communeName as string, surfacesIrriguees as number),
      {
        direction: e.originalEvent.offsetY > 250 ? 'top' : 'bottom',
        opacity: 0.97
      }
    );
    layer.openTooltip();
    layer.bringToFront();
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    const codeCommune = e.sourceTarget.feature.properties.code_geographique;
    layer.setStyle({
      weight: codeCommune === code ? 3 : 1,
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
      {carteCommunesFiltered === null ? (
        <GraphDataNotFound code={code} libelle={libelle} />
      ) : (
        <MapContainer
          center={[centerCoord[1], centerCoord[0]]}
          zoom={type === "commune" || type === "ept" ? 11 : 9}
          ref={mapRef}
          style={{ height: '500px', width: '100%' }}
          attributionControl={false}
          zoomControl={false}
        >
          {process.env.NEXT_PUBLIC_ENV === 'preprod' ? (
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          ) : (
            <TileLayer
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
          )}
          <GeoJSON
            ref={mapRef}
            data={carteCommunesFiltered as unknown as GeoJsonObject}
            style={style}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      )}
    </>
  );
};
