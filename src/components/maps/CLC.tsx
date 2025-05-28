'use client';

import { ClcDto } from '@/lib/dto';
import { ClcMapper } from '@/lib/mapper/clc';
import { CLCTerritoires } from '@/lib/postgres/models';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { type Any } from '@/lib/utils/types';
import { GeoJsonObject } from 'geojson';
import { LatLngBoundsExpression, type StyleFunction } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { BoundsFromCollectionCLC } from './components/boundsFromCollection';
import { vegetalisationColors } from './legends/datavizLegends';

export const CLCMap = (props: { clc: CLCTerritoires[] }) => {
  const { clc } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const clcParsed = clc.map(ClcMapper);
  const mapRef = useRef(null);
  const enveloppe = BoundsFromCollectionCLC(clcParsed);

  const getColor = (d: string) => {
    const color = Object.entries(vegetalisationColors)
      .find((el) => el[0] === d)
      ?.at(1);
    return color;
  };

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as ClcDto;
    return {
      fillColor: getColor(typedFeature?.properties.label),
      weight: 0,
      opacity: 1,
      color: 'black',
      fillOpacity: 0.6
    };
  };

  return (
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
        data={clcParsed as unknown as GeoJsonObject}
        style={style}
      />
    </MapContainer>
  );
};
