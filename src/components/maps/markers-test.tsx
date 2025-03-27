'use client';

import 'leaflet/dist/leaflet.css';

import { type Feature } from 'geojson';
import {
  type FeatureGroup,
  type Layer,
  type LeafletMouseEventHandlerFn,
  type StyleFunction
} from 'leaflet';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';

import { Biodiversite } from '@/lib/postgres/models';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { type Any } from '@/lib/utils/types';

import { CommunesIndicateursDto } from '@/lib/dto';
import { GraphDataNotFound } from '../graph-data-not-found';

export const Map = (props: {
  carteCommunes: CommunesIndicateursDto[];
  biodiversite: Biodiversite[];
  data: string;
}) => {
  const { data, carteCommunes, biodiversite } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo');
  const codepci = searchParams.get('codepci')!;
  const mapRef = useRef(null);

  const all_coordinates = carteCommunes.map(
    (el) => el.geometry.coordinates?.[0]?.[0]
  );

  const getCentroid = (arr: number[][]) => {
    return arr?.reduce(
      (x: number[], y: number[]) => {
        return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
      },
      [0, 0]
    );
  };
  const getCoordinates = (coords: number[][][]) => {
    const coords_arr = [];
    for (let i = 0; i < coords.length; i++) {
      const center = getCentroid(coords[i]);
      coords_arr.push(center);
    }
    return getCentroid(coords_arr);
  };

  const getMarkerCoordinates = (
    allCommunes: CommunesIndicateursDto[],
    biodiversite: Biodiversite[]
  ) => {
    const markers = allCommunes
      .filter((a) =>
        biodiversite?.some(
          (b) => a.properties.code_geographique === b.code_geographique
        )
      )
      .map((el) => el.properties.coordinates.split(',').map(Number));
    return markers;
  };

  const commune = codgeo
    ? carteCommunes.find((el) => el.properties.code_geographique === codgeo)
    : null;
  const markerCoordinates = getMarkerCoordinates(carteCommunes, biodiversite);

  // const allCoords = carteCommunes.filter(e => e.properties.code_geographique === biodiversite.).map(el => el.properties.coordinates.split(",").map(Number));
  // console.log("allCoords", allCoords);
  const centerCoord: number[] = commune
    ? getCentroid(commune.geometry.coordinates?.[0][0])
    : getCoordinates(all_coordinates);

  const style: StyleFunction<Any> = (feature) => {
    return {
      weight: 1,
      opacity: 1,
      color: '#161616',
      // dashArray: "3",
      fillOpacity: 0.1,
      fillColor: '#FFFFFF',
      zindex: 10
    };
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    const commune_name =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.libelle_geographique
        : undefined;
    layer.setStyle({
      weight: 3,
      color: '#0D2100',
      fillOpacity: 0.9,
      fillColor: 'orange'
    });
    layer.bringToFront();
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    layer.setStyle({
      weight: 1,
      color: '#161616',
      fillOpacity: 0.1,
      fillColor: '#FFFFFF'
    });
    layer.closePopup();
  };

  const onEachFeature = (feature: Feature<Any>, layer: Layer) => {
    layer.on({
      mouseover: mouseOnHandler,
      mouseout: mouseOutHandler
    });
  };

  return (
    <>
      {carteCommunes === null ? (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      ) : (
        <MapContainer
          center={[centerCoord[1], centerCoord[0]]}
          zoom={10}
          ref={mapRef}
          style={{ height: '500px', width: '100%' }}
          attributionControl={false}
          zoomControl={false}
        >
          <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <GeoJSON
            ref={mapRef}
            data={carteCommunes as any}
            onEachFeature={onEachFeature}
            style={style}
          />
          {/* <LeafletMarker position={markerCoordinates[0]}>
            
          </LeafletMarker> */}
          {/* <MarkerLayer>
            {
              markerCoordinates?.map((el, i) => (
                <Marker
                  key={i}
                  interactive={false}
                  riseOnHover={false}
                  position={el as [number, number]}
                  zIndexOffset={0}
                  size={[
                    25,
                    25
                  ]}
                >
                  <img src="./marker_icon_blue.svg" alt="" width={25} height={25}/>
                </Marker>
              ))
            }
          </MarkerLayer> */}
        </MapContainer>
      )}
    </>
  );
};
