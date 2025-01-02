'use client';

import { EpciContoursDto, EtatCoursDeauDto } from '@/lib/dto';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { Any } from '@/lib/utils/types';
import { StyleFunction } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';

const getCentroid = (arr: number[][]) => {
  return arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
};

export const MapEtatCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeauDto[];
  epciContours: EpciContoursDto[];
}) => {
  const { etatCoursDeau, epciContours } = props;
  const searchParams = useSearchParams();
  const codepci = searchParams.get('codepci')!;
  const mapRef = useRef(null);
  const centerCoord: number[] = getCentroid(
    epciContours[0]?.geometry?.coordinates[0][0]
  );

  const getColor = (d: string | null) => {
    if (d === '1') {
      return '#0095C8';
    } else if (d === '2') {
      return '#AFD018';
    } else if (d === '3') {
      return '#FEE556';
    } else if (d === '4') {
      return '#FF9935';
    } else if (d === '5') {
      return '#D61E28';
    } else {
      return '#9D9C9C';
    }
  };

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as EtatCoursDeauDto;
    return {
      fillColor: getColor(typedFeature?.properties.etateco),
      weight: 5,
      opacity: 1,
      color: getColor(typedFeature?.properties.etateco),
      fillOpacity: 0.95
    };
  };

  const epciStyle: StyleFunction<Any> = () => {
    return {
      weight: 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 0
    };
  };

  return (
    <MapContainer
      center={[centerCoord[1], centerCoord[0]]}
      zoom={10}
      ref={mapRef}
      style={{ height: '500px', width: '100%' }}
      attributionControl={false}
      zoomControl={false}
      minZoom={9}
    >
      <TileLayer
        attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=MBbcKi3EyFqyyHvvHVbfnE4iOJ34FiUs1yWbVID476VAReeeO0NdrKWg6FljGBIC"
      />
      <GeoJSON ref={mapRef} data={etatCoursDeau as Any} style={style} />
      <GeoJSON ref={mapRef} data={epciContours as Any} style={epciStyle} />
    </MapContainer>
  );
};
