"use client";

import "leaflet/dist/leaflet.css";
import "./maps.scss";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { useRef } from "react";


interface Props {
  data: string;
  clc: any;
}

const Map = (props: Props) => {
  const { clc } = props;
  console.log('clc', clc[0].properties.centroid.split("(")[1].split(")")[0].split(" "))
  const centroid = clc[0].properties.centroid.split("(")[1].split(")")[0].split(" ")
  // console.log(centroid)
  const mapRef = useRef<any>(null);//REPLACE L.Map | null

  // const all_coordinates = clc.map((el: any) => JSON.parse(el.geometry).coordinates[0]);

  // console.log('all_coordinates IN MAP 2', all_coordinates)
  // const getCentroid = (arr: number[][]) => {
  //   return (arr.reduce((x: number[], y: number[]) => {
  //       return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
  //     },
  //     [0, 0],
  //   ));
  // };

  // const getCoordinates = (coords: number[][][]) => {
  //   var coords_arr = []
  //   for (var i = 0; i < coords.length; i++) {
  //     const center = getCentroid(coords[i]);
  //     coords_arr.push(center)
  //   }
  //   return getCentroid(coords_arr);
  // }
   
  // const centerCoord: number[] = getCoordinates(all_coordinates);

  function getColor(d: string) {
      return d === "Continuous urban fabric"
        ? "#FF5E54"
        : d === "Water bodies"
          ? "#FFBD00"
          : d === "Sport and leisure facilities"
              ? "#D5F4A3"
              : d === "Industrial or commercial units"
                ? "#5CFF54"
                : d === "Discontinuous urban fabric"
                ? "#FFFFFF"
                : "#FA511A"
  }

  function style(feature: any) {
    return {
      fillColor: getColor(feature.properties.label),
      weight: 1.5,
      opacity: 1,
      color: "black",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }

  return (
    <MapContainer
      center={[Number(centroid[1]), Number(centroid[0])]}
      zoom={10}
      ref={mapRef}
      style={{ height: "500px", width: "100%" }}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <GeoJSON data={data1} /> */}
      <GeoJSON
        ref={mapRef}
        data={clc}
        style={style}
      />
    </MapContainer>
  );
};

export default Map;
