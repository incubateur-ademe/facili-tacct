'use client';

import { CommunesContoursDto } from '@/lib/dto';
import { MapContainer } from '@/lib/react-leaflet';
import * as turf from '@turf/turf';
import {
  Feature,
  GeoJsonObject,
  GeoJsonProperties,
  MultiPolygon,
  Polygon
} from 'geojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { Loader } from '../loader';

export const MapContourTerritoire = (props: {
  territoireContours: CommunesContoursDto[];
  pourcentage: number;
}) => {
  const { territoireContours, pourcentage } = props;
  const mapRef = useRef(null);
  const [bounds, setBounds] = useState<number[]>([0, 0, 0, 0]);
  const south = bounds[1];
  const north = bounds[3];
  const hauteurTerritoire = north - south;
  const newValue = south + (hauteurTerritoire * pourcentage) / 100;

  const polygon = turf.polygon([
    [
      [bounds[0], bounds[1]],
      [bounds[2], bounds[1]],
      [bounds[2], newValue],
      [bounds[0], newValue],
      [bounds[0], bounds[1]]
    ]
  ]);

  const geojsonObject = L.geoJSON(
    territoireContours as unknown as GeoJsonObject
  );
  useEffect(() => {
    setBounds(geojsonObject.getBounds().toBBoxString().split(',').map(Number));
  }, []);
  const union =
    territoireContours.length > 1
      ? turf.union(
        turf.featureCollection(
          territoireContours as Feature<
            Polygon | MultiPolygon,
            GeoJsonProperties
          >[]
        )
      )
      : territoireContours[0];
  const intersect = union
    ? turf.intersect(
      turf.featureCollection([
        polygon,
        union as Feature<Polygon, GeoJsonProperties>
      ])
    )
    : null;

  return (
    <>
      {bounds[0] !== 0 ? (
        <MapContainer
          ref={mapRef}
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgb(251, 251, 251)',
            display: 'flex'
          }}
          attributionControl={false}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          bounds={[
            [bounds[1], bounds[0]],
            [bounds[3], bounds[2]]
          ]}
          boundsOptions={{ padding: [0, 0] }}
        >
          <div
            style={{
              display: 'flex',
              alignSelf: 'center',
              zIndex: '501',
              margin: 'auto',
              backgroundColor: 'white',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
            }}
          >
            <p
              style={{
                fontSize: '24px',
                fontFamily: 'Marianne',
                fontWeight: '700',
                margin: '0'
              }}
            >
              {pourcentage} %
            </p>
          </div>
          {/* {process.env.NEXT_PUBLIC_ENV === 'preprod' ? (
            <TileLayer
              attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=MBbcKi3EyFqyyHvvHVbfnE4iOJ34FiUs1yWbVID476VAReeeO0NdrKWg6FljGBIC"
            />
          ) : (
            <TileLayer
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
          )} */}
          <GeoJSON
            ref={mapRef}
            data={union as unknown as GeoJsonObject}
            style={{
              color: '#161616',
              weight: 1,
              fillColor: '#DFDFDF',
              fillOpacity: 1,
              opacity: 1
            }}
          />
          <GeoJSON
            ref={mapRef}
            data={intersect as unknown as GeoJsonObject}
            style={{
              color: 'none',
              fillColor: '#00C190',
              opacity: 1,
              fillOpacity: 1
            }}
          />
        </MapContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};
