'use client';

import { AOT40 } from '@/lib/postgres/models';
import { MapContainer, Marker, Popup, TileLayer } from '@/lib/react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import MarkerClusterGroup from 'react-leaflet-cluster';
// documentation : https://akursat.gitbook.io/marker-cluster/api

const color = (valeur: number) => {
  return valeur < 15000 ? '#00C2CC' : '#FFCF5E';
};
const svgMarkerIcon = L.divIcon({
  html: `
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="6" fill="#00C2CC"/>
    </svg>`,
  className: 'svg-icon',
  iconSize: [24, 24],
  iconAnchor: [0, 0]
});

// var MarkerIcon = L.icon({
//   iconUrl: "marker_icon_blue.svg",
//   // shadowUrl: "marker_icon_blue.svg",
//   // iconAnchor: [22, 94],
//   // popupAnchor: [-3, -76],
//   // shadowSize: [0, 0],
//   // shadowAnchor: [22, 94],
//   iconSize: [24, 24],
//   // className: 'leaflet-div-icon'
// });

export const MapAOT40 = (props: { aot40: AOT40[] }) => {
  const { aot40 } = props;
  // console.log("aot40", aot40);
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
        className: 'svg-icon',
        iconSize: [24, 24],
        iconAnchor: [0, 0]
      })
    };
  });
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const mapRef = useRef(null);

  return (
    <MapContainer
      center={[45.003354, -0.518334]}
      zoom={codgeo ? 10 : 10}
      ref={mapRef}
      style={{ height: '500px', width: '100%', cursor: 'pointer' }}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <MarkerClusterGroup>
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
                  <h3>{aot.nom_site}</h3>
                  <p>{aot.type_implantation}</p>
                  <p>{aot.value}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
