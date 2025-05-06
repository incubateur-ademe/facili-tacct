'use client';

import { CommunesIndicateursDto } from '@/lib/dto';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { type Any } from '@/lib/utils/types';
import { Feature, GeoJsonObject } from 'geojson';
import {
  FeatureGroup,
  LatLngBoundsExpression,
  Layer,
  LeafletMouseEventHandlerFn,
  type StyleFunction
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { EspacesNafTooltip } from './components/tooltips';

const getColor = (d: number) => {
  return d > 200000
    ? '#680000'
    : d > 100000
      ? '#B5000E'
      : d > 50000
        ? '#E8323B'
        : d > 20000
          ? '#FF9699'
          : d > 10000
            ? '#FFECEE'
            : '#D8EFFA';
};

export const MapEspacesNaf = (props: {
  carteCommunesFiltered: CommunesIndicateursDto[];
  enveloppe: number[][] | undefined;
}) => {
  const { carteCommunesFiltered, enveloppe } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const mapRef = useRef(null);

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as CommunesIndicateursDto;
    return {
      fillColor: getColor(typedFeature?.properties.naf ?? 0),
      weight: typedFeature.properties.code_geographique === code ? 3 : 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 1
    };
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    const commune_name =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.libelle_geographique
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
    layer.bindTooltip(EspacesNafTooltip(commune_name as string, naf as number), {
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
    <MapContainer
      ref={mapRef}
      style={{ height: '500px', width: '100%' }}
      attributionControl={false}
      zoomControl={false}
      bounds={enveloppe as LatLngBoundsExpression}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openma            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        ref={mapRef}
        data={carteCommunesFiltered as unknown as GeoJsonObject}
        style={style}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};
