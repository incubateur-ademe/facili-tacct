'use client';

import { CommunesIndicateursDto, EpciContoursDto } from '@/lib/dto';
import { AOT40 } from '@/lib/postgres/models';
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  Rectangle,
  TileLayer
} from '@/lib/react-leaflet';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Any } from '@/lib/utils/types';
import L, {
  LatLngBoundsExpression,
  LatLngExpression,
  StyleFunction
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import MarkerClusterGroup from 'react-leaflet-cluster';
// documentation : https://akursat.gitbook.io/marker-cluster/api
import * as turf from '@turf/turf';
import { Position } from 'geojson';

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
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { aot40, epciContours, carteCommunes } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const commune = carteCommunes.find(
    (commune) => commune.properties.code_commune === codgeo
  );
  console.log('commune', commune);
  console.log('epciContours', epciContours);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
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
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill=${color(aot.valeur_brute!)} />
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

  const [bounds, setBounds] = useState<number[][]>([
    [49.148827865, 6.256465128],
    [49.060822284, 6.136002445]
  ]);

  const polygonTerritoire = turf.multiPolygon(
    commune?.geometry.coordinates as Position[][][]
  );

  const pointCollection = aot40map.map((aot) => {
    return turf.point(aot.coordinates as number[]);
  });
  const featureCollection = turf.featureCollection(pointCollection);
  const nearestPoint = turf.nearestPoint(
    turf.centroid(polygonTerritoire),
    featureCollection
  );
  const bbox = turf.bbox(
    turf.featureCollection([nearestPoint, turf.point(centerCoord)])
  );
  const boundsIfNoPoint = [
    [bbox[1], bbox[0]],
    [bbox[3], bbox[2]]
  ];

  console.log(turf.centroid(polygonTerritoire));
  console.log('nearest point', nearestPoint);

  console.log('TURFFFFF', turf.booleanWithin(nearestPoint, polygonTerritoire));

  // console.log("bbox", bbox);

  useEffect(() => {
    const northeast = mapRef.current?.getBounds()?._northEast;
    const southwest = mapRef.current?.getBounds()?._southWest;
    southwest
      ? setBounds([
          [northeast?.lat, northeast?.lng],
          [southwest?.lat, southwest?.lng]
        ])
      : null;
  }, [mapRef.current]);

  // const intersect = turf.intersect(
  //         turf.featureCollection([
  //           polygon,
  //           union as Feature<Polygon, GeoJsonProperties>
  //         ])
  //       );

  const territoireStyle: StyleFunction<Any> = () => {
    return {
      weight: 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 0
    };
  };

  return (
    <MapContainer
      center={
        commune
          ? (centerCoord as LatLngExpression)
          : [centerCoord[1], centerCoord[0]]
      }
      zoom={commune ? 11 : 9}
      ref={mapRef}
      style={{ height: '500px', width: '100%', cursor: 'pointer' }}
      attributionControl={false}
      zoomControl={false}
      bounds={boundsIfNoPoint as LatLngBoundsExpression}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <GeoJSON
        data={commune ?? (epciContours as Any)}
        style={territoireStyle}
      />
      <Rectangle bounds={bounds as unknown as LatLngBoundsExpression} />
      <MarkerClusterGroup
        chunkedLoading
        removeOutsideVisibleBounds={true}
        maxClusterRadius={55}
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
