"use client";

import { ErosionCotiereDto } from "@/lib/dto";
import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { Any } from "@/lib/utils/types";
import { StyleFunction } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";

export const MapErosionCotiere = (props: {
  erosionCotiere: ErosionCotiereDto[];
}) => {
  const { erosionCotiere } = props;
  const mapRef = useRef(null);

  const getColor = (d: number) => {
    return d > 1 ? "#FF5E54" : d > 0.4 ? "#FFBD00" : d > 0 ? "#FFFA6A" : d > -2 ? "#D5F4A3" : "#5CFF54";
  }

  const style: StyleFunction<Any> = feature => {
    const typedFeature = feature as ErosionCotiereDto;
    return {
      fillColor: getColor(typedFeature?.properties.taux),
      weight: 5,
      opacity: 1,
      color: getColor(typedFeature?.properties.taux),
      // dashArray: "3",
      fillOpacity: 0.8,
    };
  };

  return (
    <MapContainer
      center={[48, 2.35]}
      zoom={6}
      ref={mapRef}
      style={{ height: "500px", width: "100%"}}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <GeoJSON ref={mapRef} data={erosionCotiere as any} style={style} />
    </MapContainer>
  );
};
