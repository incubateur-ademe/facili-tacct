'use client';

import { CommunesIndicateursDto } from '@/lib/dto';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { type Any } from '@/lib/utils/types';
import { GeoJsonObject, type Feature } from 'geojson';
import {
  LatLngBoundsExpression,
  type FeatureGroup,
  type Layer,
  type LeafletMouseEventHandlerFn,
  type StyleFunction,
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { GraphDataNotFound } from '../graph-data-not-found';
import { BoundsFromCollection } from './components/boundsFromCollection';

export const Map = (props: {
  carteCommunes: CommunesIndicateursDto[];
  data: string;
}) => {
  const { data, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapRef = useRef(null);

  const carteCommunesFiltered = carteCommunes.filter(
    (e) =>
      e.properties.code_geographique !== '75056' &&
      e.properties.code_geographique !== '13055' &&
      e.properties.code_geographique !== '69123'
  )
  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);

  const getColor = (d: number) => {
    if (data === 'densite_bati') {
      return d > 0.2
        ? '#FF5E54'
        : d > 0.1
          ? '#FFBD00'
          : d > 0.05
            ? '#FFFA6A'
            : d > 0
              ? '#D5F4A3'
              : '#5CFF54';
    } else
      return d > 0.3
        ? '#FF5E54'
        : d > 0.2
          ? '#FFBD00'
          : d > 0.1
            ? '#FFFA6A'
            : d > 0
              ? '#D5F4A3'
              : '#5CFF54';
  };

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as CommunesIndicateursDto;
    return {
      fillColor: getColor(data === 'densite_bati' 
        ? typedFeature?.properties.densite_bati 
        : typedFeature?.properties.precarite_logement
      ),
      weight: typedFeature.properties.code_geographique === code ? 3 : 1,
      opacity: 1,
      color: '#161616',
      // dashArray: "3",
      fillOpacity: 0.6
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
    const precarite_logement =
      layer.feature && 'properties' in layer.feature
        ? Number(layer.feature.properties.precarite_logement).toFixed(2)
        : undefined;
    const densite_bati =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.densite_bati.toFixed(2)
        : undefined;
    layer.setStyle({
      weight: 3,
      color: '#0D2100',
      fillOpacity: 0.9
    });
    layer.bringToFront();
    if (data === 'densite_bati' && commune_name && densite_bati) {
      layer.bindTooltip(
        `<div>${commune_name}</div><div>Densité du bâti : ${densite_bati}</div>`,
        {
          direction: e.originalEvent.offsetY > 250 ? 'top' : 'bottom',
          opacity: 0.97
        }
      );
      layer.openTooltip();
    } else {
      layer.bindTooltip(
        `<div>${commune_name}</div><div>Part des ménages en précarité : ${(100 * Number(precarite_logement)).toFixed(0)}%</div>`,
        {
          direction: e.originalEvent.offsetY > 250 ? 'top' : 'bottom',
          opacity: 0.97
        }
      );
      layer.openTooltip();
    }
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    layer.setStyle({
      weight: 1,
      color: '#000000',
      fillOpacity: 0.6
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
            onEachFeature={onEachFeature}
            style={style}
          />
          {/* <Rectangle
            bounds={(enveloppe) as LatLngBoundsExpression}
          /> */}
        </MapContainer>
      )}
    </>
  );
};
