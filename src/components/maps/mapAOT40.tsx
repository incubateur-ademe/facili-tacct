'use client';

import { CommunesIndicateursDto, EpciContoursDto } from '@/lib/dto';
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
import * as turf from '@turf/turf';
import { Position } from 'geojson';
import L, {
  LatLngBoundsExpression,
  LatLngExpression,
  LeafletMouseEvent,
  StyleFunction
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './maps.css';
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
  const centroid = arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
  return [centroid[1], centroid[0]];
};

export const MapAOT40 = (props: {
  aot40: AOT40[];
  epciContours: EpciContoursDto[];
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { aot40, epciContours, carteCommunes } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const commune = carteCommunes.find(
    (commune) => commune.properties.code_commune === codgeo
  );
  const centerCoord: number[] = commune
    ? commune.properties.coordinates.split(',').map(Number)
    : getCentroid(epciContours[0]?.geometry?.coordinates[0][0]);

  const aot40map = aot40.map((aot) => {
    return {
      coordinates: [aot.Latitude, aot.Longitude],
      value: aot.valeur_brute,
      nom_site: aot.nom_site,
      type_implantation: aot.type_d_implantation,
      icon: L.divIcon({
        html: `
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="9" fill=${color(aot.valeur_brute!)} />
          </svg>`,
        className: 'svg-marker',
        iconSize: [24, 24],
        iconAnchor: [0, 0]
        // shadowUrl: "marker_icon_blue.svg",
        // popupAnchor: [-3, -76],
        // shadowSize: [0, 0],
        // shadowAnchor: [22, 94],
      })
    };
  });

  const polygonTerritoire = commune
    ? turf.multiPolygon(commune?.geometry.coordinates as Position[][][])
    : turf.multiPolygon(
        epciContours[0]?.geometry.coordinates as Position[][][]
      );

  const enveloppe = turf
    .bboxPolygon(turf.bbox(turf.envelope(polygonTerritoire)))
    .geometry.coordinates[0].map((coord) => [coord[1], coord[0]]);
  const pointCollection = aot40map.map((aot) => {
    return turf.point(aot.coordinates as number[]);
  });
  const featureCollection = turf.featureCollection(pointCollection);
  const nearestPoint = turf.nearestPoint(
    turf.point([centerCoord[0], centerCoord[1]]),
    featureCollection
  );
  const bbox = turf.bbox(
    turf.featureCollection([nearestPoint, turf.point(centerCoord)])
  );
  const boundsIfNoPoint = [
    [bbox[0], bbox[1]],
    [bbox[2], bbox[3]]
  ];

  const territoireStyle: StyleFunction<Any> = () => {
    return {
      weight: 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 0
    };
  };

  const createClusterCustomIcon = function (cluster: any) {
    const number = cluster.getChildCount();
    const size = number < 4 ? 40 : 40 + number > 65 ? 65 : 40 + number;
    return L.divIcon({
      html: `<span>${number}</span>`,
      className: 'custom-marker-cluster',
      iconSize: L.point(size, size, true)
      // iconSize: [45, 45],
      // iconAnchor: [15, 15]
    });
  };

  const CustomTooltip = (sitesInCluster: string[]) => {
    const displayedSites = sitesInCluster.slice(0, 10);
    return `<div style="padding: 0.25rem;">
        <div style="font-size: 0.75rem; font-family: Marianne; font-weight: 400; border-bottom: 1px solid #B8B8B8; margin-bottom: 0.5rem;">
          Dans ce regroupement :
        </div>
        <div style="display: flex; flex-direction: column; font-size: 10px; font-family: Marianne; font-weight: 700;">
          ${displayedSites.map((site) => `<div>${site}</div>`).join('')}
          ${sitesInCluster.length > 10 ? '<div>...</div>' : ''}
        </div>
      </div>`;
  };

  return (
    <MapContainer
      zoom={commune ? 11 : 9}
      ref={mapRef}
      style={{ height: '500px', width: '100%', cursor: 'pointer' }}
      attributionControl={false}
      zoomControl={false}
      bounds={
        turf.booleanPointInPolygon(nearestPoint, turf.polygon([enveloppe]))
          ? (enveloppe as LatLngBoundsExpression)
          : (boundsIfNoPoint as LatLngBoundsExpression)
      }
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
        data={commune ?? (epciContours as Any)}
        style={territoireStyle}
      />
      <MarkerClusterGroup
        chunkedLoading
        removeOutsideVisibleBounds={true}
        maxClusterRadius={155}
        iconCreateFunction={createClusterCustomIcon}
        polygonOptions={{
          color: 'transparent',
          fillOpacity: 0
        }}
        onMouseOver={(e: LeafletMouseEvent) => {
          const sitesInCluster = e.propagatedFrom
            .getAllChildMarkers()
            .map((el: { options: { title: string } }) => el.options.title);
          e.propagatedFrom.bindTooltip(CustomTooltip(sitesInCluster), {
            opacity: 0.97,
            direction: e.originalEvent.layerY > 250 ? 'top' : 'bottom',
            offset: [0, e.originalEvent.layerY > 250 ? -25 : 25]
          });
          e.propagatedFrom.openTooltip();
        }}
      >
        {aot40map.map((aot, i) => {
          return (
            <Marker
              key={i}
              icon={aot.icon}
              title={aot.nom_site!}
              position={aot.coordinates as LatLngExpression}
              ref={markerRef}
              eventHandlers={{
                mouseover: (event) => {
                  event.target.openPopup();
                },
                mouseout: (event) => {
                  event.target.closePopup();
                }
              }}
            >
              <style>
                {`
                .leaflet-popup-content {
                  margin: 0 !important;
                  width: fit-content !important;
                }
                .leaflet-popup-content p {
                  margin: 0 !important;
                }
                .leaflet-popup-close-button {
                  display: none !important;
                }
                .leaflet-interactive {
                  cursor: pointer;
                }
                `}
                <Popup offset={[6, 8]}>
                  <div className="p-[0.75rem]">
                    <div className="flex flex-row justify-between p-0 gap-2 items-center w-max">
                      <p className="text-[0.75rem] font-marianne font-[400]">
                        {aot.nom_site} :{' '}
                      </p>
                      <p className="text-[0.75rem] font-marianne font-[700]">
                        {Round(Number(aot.value), 2)} µg/m3
                      </p>
                    </div>
                  </div>
                </Popup>
              </style>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
