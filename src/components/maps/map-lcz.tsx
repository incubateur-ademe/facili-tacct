"use client";

import "leaflet/dist/leaflet.css";
import "./maps.scss";

import { type StyleFunction } from "leaflet";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { type Any } from "@/lib/utils/types";

import { CommunesIndicateursDto } from "@/lib/dto";
import { GraphDataNotFound } from "../graph-data-not-found";

export const MapLCZ = (props: {
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const mapRef = useRef(null);

  const all_coordinates = carteCommunes.map(el => el.geometry.coordinates?.[0]?.[0]);

  const getCentroid = (arr: number[][]) => {
    return arr?.reduce(
      (x: number[], y: number[]) => {
        return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
      },
      [0, 0],
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

  const centerCoord: number[] = getCoordinates(all_coordinates);


  const style: StyleFunction<Any> = feature => {
      return {
        weight: 1,
        opacity: 1,
        color: "#161616",
        // dashArray: "3",
        fillOpacity: 0,
      };
  };

  

  return (
    <>
      {carteCommunes === null ? (
        <GraphDataNotFound code={code} />
      ) : (
        <MapContainer
          center={[centerCoord[1], centerCoord[0]]}
          zoom={10}
          ref={mapRef}
          style={{ height: "500px", width: "100%"}}
          attributionControl={false}
          zoomControl={false}
        >
          <TileLayer
            // attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openma            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            // attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://lcz-generator.rub.de/tms-inverted/global-map-tiles/v3/{z}/{x}/{y}.png"
            opacity={0.6}
            maxZoom={50}
            maxNativeZoom={50}
          />
          <GeoJSON ref={mapRef} data={carteCommunes as Any} style={style} />
        </MapContainer>
      )}
    </>
  );
};
