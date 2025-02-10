'use client';

import 'leaflet/dist/leaflet.css';

import { type StyleFunction } from 'leaflet';
import { useRef } from 'react';

import { ClcDto } from '@/lib/dto';
import { ClcMapper } from '@/lib/mapper/clc';
import { CLC } from '@/lib/postgres/models';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { type Any } from '@/lib/utils/types';
import { GeoJsonObject } from 'geojson';

const getCentroid = (arr: number[][]) => {
  return arr.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
};

export const CLCMap = (props: { clc: CLC[] }) => {
  const { clc } = props;
  const clc_parsed = clc.map(ClcMapper);
  const mapRef = useRef(null);
  const colors = {
    'Continuous urban fabric': '#ffff99',
    'Discontinuous urban fabric': '#ffff99',
    'Industrial or commercial units': '#ffff99',
    'Road and rail networks and associated land': '#ffff99', //cc0000
    'Port areas': '#ffff99',
    Airports: '#ffff99',
    'Mineral extraction sites': '#ffff99',
    'Dump sites': '#ffff99',
    'Construction sites': '#ffff99',
    'Green urban areas': '#7fc97f', //ffa6ff
    'Sport and leisure facilities': '#ffff99',
    'Non-irrigated arable land': '#fdc086',
    'Permanently irrigated land': '#fdc086',
    'Rice fields': '#fdc086',
    Vineyards: '#fdc086', //e68000
    'Fruit trees and berry plantations': '#fdc086',
    'Olive groves': '#fdc086', //e6a600
    Pastures: '#fdc086',
    'Annual crops associated with permanent crops': '#fdc086',
    'Complex cultivation patterns': '#fdc086',
    'Land principally occupied by agriculture, with significant areas of natural vegetation':
      '#fdc086',
    'Agro-forestry areas': '#fdc086', //f2cca6
    'Broad-leaved forest': '#7fc97f', //80ff00
    'Coniferous forest': '#7fc97f', //00a600
    'Mixed forest': '#7fc97f', //4dff00
    'Natural grasslands': '#7fc97f', //ccf24d
    'Moors and heathland': '#7fc97f',
    'Sclerophyllous vegetation': '#7fc97f',
    'Transitional woodland-shrub': '#7fc97f',
    'Beaches, dunes, sands': '#7fc97f',
    'Bare rocks': '#7fc97f',
    'Sparsely vegetated areas': '#7fc97f',
    'Burnt areas': '#7fc97f',
    'Glaciers and perpetual snow': '#7fc97f',
    'Inland marshes': '#beaed4',
    'Peat bogs': '#beaed4',
    'Salt marshes': '#beaed4',
    Salines: '#beaed4',
    'Intertidal flats': '#beaed4',
    'Water courses': '#386cb0',
    'Water bodies': '#386cb0',
    'Coastal lagoons': '#386cb0',
    Estuaries: '#386cb0',
    'Sea and ocean': '#386cb0'
  };
  const all_centroid: number[][] = clc_parsed.map((el) => {
    return el.properties.centroid
      .split('POINT')[1]
      .replace('(', '')
      .replace(')', '')
      .split(' ')
      .map(Number);
  });

  const latLong = getCentroid(all_centroid);

  const getColor = (d: string) => {
    const color = Object.entries(colors)
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
      center={[latLong[1], latLong[0]]}
      zoom={10}
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
        data={clc_parsed as unknown as GeoJsonObject}
        style={style}
      />
    </MapContainer>
  );
};
