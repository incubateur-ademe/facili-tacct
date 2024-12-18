'use client';

import { CommunesContoursDto } from '@/lib/dto';
import { MapContainer } from '@/lib/react-leaflet';
import * as turf from '@turf/turf';
import { GeoJsonObject } from 'geojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import { GeoJSON, TileLayer, useMap } from 'react-leaflet';

export const MapContourTerritoire = (props: {
  territoireContours: CommunesContoursDto[];
  pourcentage: number;
}) => {
  const { territoireContours, pourcentage } = props;
  const mapRef = useRef(null);
  const [data, setData] = useState<CommunesContoursDto[]>([]);

  const south = 45.433554862;
  const north = 45.802437758;

  var hauteurTerritoire = north - south;
  var percent = 90;
  var newValue = south + (hauteurTerritoire * percent) / 100;

  var polygon = turf.polygon([
    [
      [-1.243793323, 45.433554862],
      [-0.707834253, 45.433554862],
      [-0.707834253, newValue],
      [-1.243793323, newValue],
      [-1.243793323, 45.433554862]
    ]
  ]);

  var union = turf.union(turf.featureCollection(territoireContours as any));

  var intersect = turf.intersect(turf.featureCollection([polygon, union]));
  // console.log("intersect", intersect);

  // console.log("union", union);

  const ContourTerritoire = () => {
    const map = useMap();
    useEffect(() => {
      setData(territoireContours);
    }, [territoireContours]);

    if (data.length > 0) {
      const geojsonObject = L.geoJSON(data as unknown as GeoJsonObject);
      // const polygonLayer = L.geoJSON(polygon);

      map.fitBounds(geojsonObject.getBounds());
      // setBounds(geojsonObject.getBounds().toBBoxString().split(",").map(Number));
      return (
        <>
          <GeoJSON
            ref={mapRef}
            data={intersect as unknown as GeoJsonObject}
            style={{
              color: '#00C190',
              weight: 1,
              fillColor: '#00C190',
              opacity: 1,
              fillOpacity: 1
            }}
          />
          <GeoJSON
            ref={mapRef}
            data={union as unknown as GeoJsonObject}
            style={{
              color: '#161616',
              weight: 1,
              fillColor: 'transparent',
              opacity: 1
            }}
          />
        </>
      );
    } else {
      return null;
    }
  };

  const style = () => {
    return {
      fillColor: 'transparent',
      weight: 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 1
    };
  };

  return (
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
      zoom={7}
      scrollWheelZoom={false}
      dragging={false}
      boundsOptions={{ padding: [0, 0] }}
    >
      <div
        style={{
          display: 'flex',
          alignSelf: 'center',
          zIndex: '501',
          margin: 'auto',
          backgroundColor: 'white',
          padding: '1rem'
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
          {percent} %
        </p>
      </div>
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <ContourTerritoire />
    </MapContainer>
  );
};
