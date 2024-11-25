"use client";

import { EpciContoursDto } from "@/lib/dto";
import { MapContainer } from "@/lib/react-leaflet";
import { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { Polygon } from "react-leaflet";



const getCentroid = (arr: number[][]) => {
  return arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0],
  );
};


export const MapContourEpci = (props: {
  epciContours: EpciContoursDto[];
}) => {
  const { epciContours } = props;
  const mapRef = useRef(null);

  return (
    <MapContainer
      ref={mapRef}
      style={{ height: "500px", width: "100%", backgroundColor: "white" }}
      attributionControl={false}
      zoomControl={false}
      bounds={epciContours[0].geometry.coordinates[0][0] as unknown as LatLngBoundsExpression }
      boundsOptions={{ padding: [1, 1] }}
    >
      <Polygon 
        positions={epciContours[0].geometry.coordinates[0][0] as unknown as LatLngExpression[][]}
        pathOptions={{color: "#161616", fillColor: "transparent"}}
      />
    </MapContainer>
  );
};
