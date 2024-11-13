"use client";

import { EpciContoursDto, ErosionCotiereDto } from "@/lib/dto";
import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { Any } from "@/lib/utils/types";
import { StyleFunction } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

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

export const MapErosionCotiere = (props: {
  erosionCotiere: ErosionCotiereDto[];
  epciContours: EpciContoursDto[];
}) => {
  const { erosionCotiere, epciContours } = props;
  const searchParams = useSearchParams();
  const codepci = searchParams.get("codepci")!;  
  const mapRef = useRef(null);
  const centerCoord: number[] = getCentroid(epciContours[0].geometry.coordinates[0][0]);

  const getColor = (d: number) => {
    return d > 1 ? "#FFBE0B" : d > 0.4 ? "#FB5607" : d > 0 ? "#FF006E" : d > -2 ? "#8338EC" : "#3A86FF";
  }

  const style: StyleFunction<Any> = feature => {
    const typedFeature = feature as ErosionCotiereDto;
    return {
      fillColor: getColor(typedFeature?.properties.taux),
      weight: 1,
      opacity: 1,
      color: getColor(typedFeature?.properties.taux),
      // dashArray: "3",
      fillOpacity: 0.95,
    };
  };

  const epciStyle: StyleFunction<Any> = () => {
    return {
      weight: 1,
      opacity: 1,
      color: "#161616",
      // dashArray: "3",
      fillOpacity: 0,
    };
  };

  return (
    <MapContainer
      center={[centerCoord[1], centerCoord[0]]}
      zoom={10}
      ref={mapRef}
      style={{ height: "500px", width: "100%" }}
      attributionControl={false}
      zoomControl={false}
      minZoom={9}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON ref={mapRef} data={erosionCotiere as Any} style={style} />
      <GeoJSON ref={mapRef} data={epciContours as Any} style={epciStyle}/>
    </MapContainer>
  );
};
