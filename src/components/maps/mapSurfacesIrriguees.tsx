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
import { GraphDataNotFound } from '../graph-data-not-found';
import { BoundsFromCollection } from './components/boundsFromCollection';
import { SurfacesIrrigueesTooltip } from './components/tooltips';

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
            : 'white';
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
  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);
  
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
      SurfacesIrrigueesTooltip(communeName as string, surfacesIrriguees as number),
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
          ref={mapRef}
          style={{ height: '500px', width: '100%' }}
          attributionControl={false}
          zoomControl={false}
          bounds={enveloppe as LatLngBoundsExpression}
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
