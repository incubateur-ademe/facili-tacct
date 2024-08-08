"use client";

import "leaflet/dist/leaflet.css";
import "./maps.scss";

import { useRef } from "react";

import { type CLC } from "@/app/donnees-territoriales/type";
import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";

interface Props {
  clc: any;
  // clc_parsed: Array<{
  //   geometry: string;
  //   properties: {
  //     centroid: string;
  //     label: string;
  //   };
  //   type: string;
  // }>;
}

export const Map = (props: Props) => {
  const { clc } = props;
  const clc_parsed = clc.map(function (elem: CLC) {
    return {
      type: "Feature",
      properties: {
        label: elem.legend,
        centroid: elem.centroid,
      },
      geometry: JSON.parse(elem.geometry) as string,
    };
  });
  const mapRef = useRef<any>(null); //REPLACE L.Map | null
  const colors = {
    "Continuous urban fabric": "#a0a0a0",
    "Discontinuous urban fabric": "#a0a0a0",
    "Industrial or commercial units": "#a0a0a0",
    "Road and rail networks and associated land": "#D7D7D7", //cc0000
    "Port areas": "#D7D7D7",
    Airports: "#D7D7D7",
    "Mineral extraction sites": "#e0cda9",
    "Dump sites": "#a0a0a0",
    "Construction sites": "#a0a0a0",
    "Green urban areas": "#a6e64d", //ffa6ff
    "Sport and leisure facilities": "#a0a0a0",
    "Non-irrigated arable land": "#7A5710",
    "Permanently irrigated land": "#7A5710",
    "Rice fields": "#a6e64d",
    Vineyards: "#a6e64d", //e68000
    "Fruit trees and berry plantations": "#a6e64d",
    "Olive groves": "#a6e64d", //e6a600
    Pastures: "#7A5710",
    "Annual crops associated with permanent crops": "#a6e64d",
    "Complex cultivation patterns": "#a6e64d",
    "Land principally occupied by agriculture, with significant areas of natural vegetation": "#a6e64d",
    "Agro-forestry areas": "#a6e64d", //f2cca6
    "Broad-leaved forest": "#a6e64d", //80ff00
    "Coniferous forest": "#a6e64d", //00a600
    "Mixed forest": "#a6e64d", //4dff00
    "Natural grasslands": "#7A5710", //ccf24d
    "Moors and heathland": "#a6e64d",
    "Sclerophyllous vegetation": "#a6e64d",
    "Transitional woodland-shrub": "#a6e64d",
    "Beaches, dunes, sands": "#e0cda9",
    "Bare rocks": "#e0cda9",
    "Sparsely vegetated areas": "#a6e64d",
    "Burnt areas": "#000000",
    "Glaciers and perpetual snow": "#a6e6cc",
    "Inland marshes": "#a6e64d",
    "Peat bogs": "#4D4DFF",
    "Salt marshes": "#a6e64d",
    Salines: "#a6e64d",
    "Intertidal flats": "#e6f2ff",
    "Water courses": "#e6f2ff",
    "Water bodies": "#e6f2ff",
    "Coastal lagoons": "#e6f2ff",
    Estuaries: "#e6f2ff",
    "Sea and ocean": "#e6f2ff",
  };
  const all_centroid: number[][] = clc_parsed.map((el: any) => {
    return el.properties.centroid.split("POINT")[1].replace("(", "").replace(")", "").split(" ").map(Number);
  });

  const getCentroid = (arr: number[][]) => {
    return arr.reduce(
      (x: number[], y: number[]) => {
        return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
      },
      [0, 0],
    );
  };

  const latLong = getCentroid(all_centroid);
  console.log("latLong", latLong);

  function getColor(d: string) {
    const color = Object.entries(colors)
      .find(el => el[0] === d)
      ?.at(1);
    return color;
  }

  function style(feature: any) {
    return {
      fillColor: getColor(feature.properties.label),
      weight: 0,
      opacity: 1,
      color: "black",
      dashArray: "3",
      fillOpacity: 0.6,
    };
  }

  return (
    <MapContainer
      center={[latLong[1], latLong[0]]}
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
      <GeoJSON ref={mapRef} data={clc_parsed} style={style} />
      {/* <GeoJSON data={db_filtered} style={style} /> */}
    </MapContainer>
  );
};
