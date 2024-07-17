"use client";

import "leaflet/dist/leaflet.css";
import "./maps.scss";

import { useRef } from "react";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";

interface Props {
  clc: any;
  // clc: Array<{
  //   type: string;
  //   geometry: string;
  //   properties: {
  //     label: string;
  //     centroid: string;
  //   }
  // }>;
}

const Map = (props: Props) => {
  const { clc } = props;
  const mapRef = useRef<any>(null); //REPLACE L.Map | null
  const colors = {
    "Continuous urban fabric": "#DE7397",
    "Discontinuous urban fabric": "#DE7397",
    "Industrial or commercial units": "#DE7397",
    "Road and rail networks and associated land": "#D7D7D7", //cc0000
    "Port areas": "#D7D7D7",
    Airports: "#D7D7D7",
    "Mineral extraction sites": "#e0cda9",
    "Dump sites": "#DE7397",
    "Construction sites": "#DE7397",
    "Green urban areas": "#7EB47F", //ffa6ff
    "Sport and leisure facilities": "#DE7397",
    "Non-irrigated arable land": "#A6FF80",
    "Permanently irrigated land": "#A6FF80",
    "Rice fields": "#FFE6A6",
    Vineyards: "#FFE6A6", //e68000
    "Fruit trees and berry plantations": "#FFE6A6",
    "Olive groves": "#FFE6A6", //e6a600
    Pastures: "#A6FF80",
    "Annual crops associated with permanent crops": "#FFE6A6",
    "Complex cultivation patterns": "#FFE6A6",
    "Land principally occupied by agriculture, with significant areas of natural vegetation": "#FFE6A6",
    "Agro-forestry areas": "#526E43", //f2cca6
    "Broad-leaved forest": "#7C9B39", //80ff00
    "Coniferous forest": "#7C9B39", //00a600
    "Mixed forest": "#7C9B39", //4dff00
    "Natural grasslands": "#A6FF80", //ccf24d
    "Moors and heathland": "#CCCCFF",
    "Sclerophyllous vegetation": "#a6e64d",
    "Transitional woodland-shrub": "#a6f200",
    "Beaches, dunes, sands": "#e0cda9",
    "Bare rocks": "#e0cda9",
    "Sparsely vegetated areas": "#a6e64d",
    "Burnt areas": "#000000",
    "Glaciers and perpetual snow": "#a6e6cc",
    "Inland marshes": "#CCCCFF",
    "Peat bogs": "#4D4DFF",
    "Salt marshes": "#CCCCFF",
    Salines: "#CCCCFF",
    "Intertidal flats": "#e6f2ff",
    "Water courses": "#e6f2ff",
    "Water bodies": "#e6f2ff",
    "Coastal lagoons": "#e6f2ff",
    Estuaries: "#e6f2ff",
    "Sea and ocean": "#e6f2ff",
  };
  const all_coordinates = clc.map((el: any) => el.geometry.coordinates[0]);

  const getCentroid = (arr: number[][]) => {
    return arr.reduce(
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

  function getColor(d: string) {
    const color = Object.entries(colors)
      .find(el => el[0] === d)
      ?.at(1);
    return color;
  }

  function style(feature: any) {
    return {
      fillColor: getColor(feature.properties.label),
      weight: 0.5,
      opacity: 1,
      color: "black",
      dashArray: "3",
      fillOpacity: 0.5,
    };
  }

  function mouseOnHandler(this: any, e: any) {
    const layer = e.target;
    const label = layer.feature.properties.label;
    layer.setStyle({
      weight: 1.5,
      dashArray: "",
      fillOpacity: 1,
    });

    layer.bringToFront();
    this.bindPopup(`<div>${label}</div>`);
    this.openPopup();
  }

  //make style after hover disappear
  function mouseOutHandler(this: any, e: any) {
    const layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "#000000",
      dashArray: "3",
      fillOpacity: 0.5,
    });
    this.closePopup(e.target);
  }

  function onEachFeature(feature: any, layer: any) {
    layer.on({
      mouseover: mouseOnHandler,
      mouseout: mouseOutHandler,
    });
  }

  return (
    <MapContainer
      center={[centerCoord[1], centerCoord[0]]}
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
      <GeoJSON ref={mapRef} data={clc} style={style} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default Map;
