'use client';

import { CommunesIndicateursDto } from '@/lib/dto';
import { AOT40 } from '@/lib/postgres/models';
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer
} from '@/lib/react-leaflet';
import { getArrayDepth } from '@/lib/utils/reusableFunctions/arrayDepth';
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
import { AOT40Tooltip } from './components/tooltips';
import './maps.css';
// documentation : https://akursat.gitbook.io/marker-cluster/api

const color = (valeur: number) => {
  return valeur > 36000
    ? '#5524A0'
    : valeur > 27000
      ? '#E8323B'
      : valeur > 18000
        ? '#FFCF5E'
        : valeur > 12000
          ? '#3E8F3E'
          : valeur > 6000
            ? '#009ADC'
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

const getCoordinates = (coords: number[][][]) => {
  const coords_arr = [];
  for (let i = 0; i < coords.length; i++) {
    const center = getCentroid(coords[i]);
    coords_arr.push(center);
  }
  return getCentroid(coords_arr);
};
//TODO : clean all the turf functions
export const MapAOT40 = (props: {
  aot40: AOT40[];
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { aot40, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const commune = type === "commune"
    ? carteCommunes.find(
      (commune) => commune.properties.code_geographique === code
    ) : null;

  const carteCommunesFiltered = type === "ept"
    ? carteCommunes.filter(
      (el) => el.properties.ept === libelle
    )
    : carteCommunes;

  const allCoordinates = carteCommunesFiltered.map(
    (el) => el.geometry.coordinates?.[0]?.[0]
  );

  const union = turf.union(
    turf.featureCollection(carteCommunesFiltered as Any),
  );

  const centerCoord: number[] = commune
    ? commune.properties.coordinates.split(',').map(Number).sort((a, b) => a - b)
    : getCoordinates(allCoordinates);

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

  const polygonTerritoire = type === "commune"
    ? turf.multiPolygon(commune?.geometry.coordinates as Position[][][])
    : turf.multiPolygon(union?.geometry.coordinates as Position[][][])

  // Pour certains multipolygones, on a plusieurs arrays de coordonnées si les territoires sont disjoints
  const flattenedCoordinates = getArrayDepth(polygonTerritoire.geometry.coordinates) === 4
    ? polygonTerritoire.geometry.coordinates[0]
    : polygonTerritoire.geometry.coordinates;


  // On inverse les coordonnées pour les passer à turf.polygon
  // car turf.polygon attend des coordonnées au format [longitude, latitude]
  const newPolygonTerritoire = turf.polygon(flattenedCoordinates.map(
    el => el.map(
      coords => [coords[1], coords[0]]
    )
  ) as unknown as Position[][]
  );

  const enveloppe = turf.envelope(newPolygonTerritoire).geometry.coordinates[0];

  const pointCollection = aot40map.map((aot) => {
    return turf.point(aot.coordinates as number[]);
  });
  const featureCollection = turf.featureCollection(pointCollection);
  const nearestPoint = turf.nearestPoint(
    turf.point([centerCoord[1], centerCoord[0]]),
    featureCollection
  );
  const bbox = turf.bbox(
    turf.featureCollection([nearestPoint as Any, newPolygonTerritoire])
  );
  const boundsIfNoPoint = [
    [bbox[0], bbox[3]],
    [bbox[0], bbox[1]],
    [bbox[2], bbox[1]],
    [bbox[2], bbox[3]],
    [bbox[0], bbox[3]]
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
        data={commune ?? (carteCommunesFiltered as Any)}
        style={territoireStyle}
      />
      {/* <Polygon
        positions={newPolygonTerritoire.geometry.coordinates as LatLngExpression[][]}
        pathOptions={{
          color: 'red',
          fillColor: 'red',
        }}
      />
      <Rectangle
        bounds={enveloppe as LatLngBoundsExpression}
      /> */}
      <MarkerClusterGroup
        chunkedLoading
        removeOutsideVisibleBounds={true}
        maxClusterRadius={30}
        iconCreateFunction={createClusterCustomIcon}
        polygonOptions={{
          color: 'transparent',
          fillOpacity: 0
        }}
        onMouseOver={(e: LeafletMouseEvent) => {
          const sitesInCluster = e.propagatedFrom
            .getAllChildMarkers()
            .map((el: { options: { title: string } }) => el.options.title);
          e.propagatedFrom.bindTooltip(AOT40Tooltip(sitesInCluster), {
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
                        {Round(Number(aot.value), 0)} µg/m3
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
