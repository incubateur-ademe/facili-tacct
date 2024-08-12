"use client";

import "leaflet/dist/leaflet.css";
import "./maps.scss";

import { type GeoGeometryObjects } from "d3";
import { type StyleFunction } from "leaflet";
import { useRef } from "react";

// import { type CLC } from "@/app/donnees-territoriales/type";
import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { type Any } from "@/lib/utils/types";

interface CLC {
  centroid: string;
  geometry: string;
  legend: string;
  pk: number;
}

interface Props {
  clc: CLC[];
}

interface CLCParsed {
  geometry: GeoGeometryObjects;
  properties: {
    centroid: string;
    label: string;
  };
  type: string;
}

const getCentroid = (arr: number[][]) => {
  return arr.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0],
  );
};

export const Map = (props: Props) => {
  const { clc } = props;
  const clc_parsed = clc.map(function (elem: CLC) {
    return {
      type: "Feature",
      properties: {
        label: elem.legend,
        centroid: elem.centroid,
      },
      geometry: JSON.parse(elem.geometry) as GeoGeometryObjects,
    };
  });
  const mapRef = useRef(null);
  const colors = {
    "Continuous urban fabric": "#a0a0a0",
    "Discontinuous urban fabric": "#a0a0a0",
    "Industrial or commercial units": "#a0a0a0",
    "Road and rail networks and associated land": "#a0a0a0", //cc0000
    "Port areas": "#a0a0a0",
    Airports: "#a0a0a0",
    "Mineral extraction sites": "#a0a0a0",
    "Dump sites": "#a0a0a0",
    "Construction sites": "#a0a0a0",
    "Green urban areas": "#a6e64d", //ffa6ff
    "Sport and leisure facilities": "#a0a0a0",
    "Non-irrigated arable land": "#ffd24a",
    "Permanently irrigated land": "#ffd24a",
    "Rice fields": "#ffd24a",
    Vineyards: "#ffd24a", //e68000
    "Fruit trees and berry plantations": "#ffd24a",
    "Olive groves": "#ffd24a", //e6a600
    Pastures: "#ffd24a",
    "Annual crops associated with permanent crops": "#ffd24a",
    "Complex cultivation patterns": "#ffd24a",
    "Land principally occupied by agriculture, with significant areas of natural vegetation": "#ffd24a",
    "Agro-forestry areas": "#ffd24a", //f2cca6
    "Broad-leaved forest": "#a6e64d", //80ff00
    "Coniferous forest": "#a6e64d", //00a600
    "Mixed forest": "#a6e64d", //4dff00
    "Natural grasslands": "#a6e64d", //ccf24d
    "Moors and heathland": "#a6e64d",
    "Sclerophyllous vegetation": "#a6e64d",
    "Transitional woodland-shrub": "#a6e64d",
    "Beaches, dunes, sands": "#a6e64d",
    "Bare rocks": "#a6e64d",
    "Sparsely vegetated areas": "#a6e64d",
    "Burnt areas": "#a6e64d",
    "Glaciers and perpetual snow": "#a6e64d",
    "Inland marshes": "#f2a6ea",
    "Peat bogs": "#f2a6ea",
    "Salt marshes": "#f2a6ea",
    Salines: "#f2a6ea",
    "Intertidal flats": "#f2a6ea",
    "Water courses": "#6969ff",
    "Water bodies": "#6969ff",
    "Coastal lagoons": "#6969ff",
    Estuaries: "#6969ff",
    "Sea and ocean": "#6969ff",
  };
  const all_centroid: number[][] = clc_parsed.map(el => {
    return el.properties.centroid.split("POINT")[1].replace("(", "").replace(")", "").split(" ").map(Number);
  });

  const latLong = getCentroid(all_centroid);

  const getColor = (d: string) => {
    const color = Object.entries(colors)
      .find(el => el[0] === d)
      ?.at(1);
    return color;
  };

  const style: StyleFunction<Any> = feature => {
    const typedFeature = feature as CLCParsed;

    return {
      fillColor: getColor(typedFeature?.properties.label),
      weight: 0,
      opacity: 1,
      color: "black",
      dashArray: "3",
      fillOpacity: 0.6,
    };
  };

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
      <GeoJSON ref={mapRef} data={clc_parsed as any} style={style} />
    </MapContainer>
  );
};
