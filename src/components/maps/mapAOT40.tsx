'use client';

import { EpciContoursDto } from '@/lib/dto';
import { AOT40 } from '@/lib/postgres/models';
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer
} from '@/lib/react-leaflet';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Any } from '@/lib/utils/types';
import L, { LatLngExpression, StyleFunction } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import MarkerClusterGroup from 'react-leaflet-cluster';
// documentation : https://akursat.gitbook.io/marker-cluster/api

const color = (valeur: number) => {
  return valeur > 36000
    ? '#7A49BE'
    : valeur > 27000
      ? '#A67FE1'
      : valeur > 18000
        ? '#DB7BDD'
        : valeur > 12000
          ? '#FF9699'
          : valeur > 6000
            ? '#00C2CC'
            : '#5EEDF3';
};

const getCentroid = (arr: number[][]) => {
  return arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
};

export const MapAOT40 = (props: {
  aot40: AOT40[];
  epciContours: EpciContoursDto[];
}) => {
  const { aot40, epciContours } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const mapRef = useRef(null);

  const aot40map = aot40.map((aot) => {
    return {
      coordinates: [aot.Latitude, aot.Longitude],
      value: aot.valeur_brute,
      nom_site: aot.nom_site,
      type_implantation: aot.type_d_implantation,
      icon: L.divIcon({
        html: `
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill=${color(aot.valeur_brute!)} />
          </svg>`,
        className: 'svg-marker',
        iconSize: [24, 24],
        iconAnchor: [0, 0]
        // shadowUrl: "marker_icon_blue.svg",
        // popupAnchor: [-3, -76],
        //   shadowSize: [0, 0],
        // shadowAnchor: [22, 94],
      })
    };
  });

  const centerCoord: number[] = getCentroid(
    epciContours[0]?.geometry?.coordinates[0][0]
  );

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
      zoom={9}
      ref={mapRef}
      style={{ height: '500px', width: '100%', cursor: 'pointer' }}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <GeoJSON ref={mapRef} data={epciContours as Any} style={epciStyle} />
      <MarkerClusterGroup
        removeOutsideVisibleBounds={true}
        maxClusterRadius={15}
        polygonOptions={{ color: 'transparent', opacity: 0 }}
        // iconCreateFunction={() => {
        //   return L.divIcon({
        //     html: `
        //       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <circle cx="6" cy="6" r="6" fill="#FFCF5E"} />
        //       </svg>
        //     `,
        //     className: 'svg-marker',
        //     iconSize: [45, 45],
        //     // iconAnchor: [15, 15]
        //   });
        // }}
      >
        {aot40map.map((aot, i) => {
          return (
            <Marker
              key={i}
              icon={aot.icon}
              position={aot.coordinates as LatLngExpression}
              // eventHandlers={{
              //   click: () => {
              //     mapRef.current?.setView(aot.coordinates, 14);
              //   }
              // }}
            >
              <Popup>
                <div>
                  <h4>Nom site : {aot.nom_site}</h4>
                  <p>Type d'implantation : {aot.type_implantation}</p>
                  <p>Valeur brute : {Round(Number(aot.value), 2)} µg/m3</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
