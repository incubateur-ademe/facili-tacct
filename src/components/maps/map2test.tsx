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
  const centroid = clc[0].properties.centroid.split("(")[1].split(")")[0].split(" ")
  // console.log(centroid)
  const mapRef = useRef<any>(null);//REPLACE L.Map | null
  const colors = {
    "Continuous urban fabric": "#E6004D",
    "Discontinuous urban fabric": "#ff0000",
    "Industrial or commercial units": "#cc4df2",
    "Road and rail networks and associated land": "#cc0000",
    "Port areas": "#e6cccc",
    "Airports": "#e6cce6",
    "Mineral extraction sites": "#a600cc",
    "Dump sites": "#a64d00",
    "Construction sites": "#ff4dff",
    "Green urban areas": "#ffa6ff",
    "Sport and leisure facilities": "#ffe6ff",
    "Non,irrigated arable land": "#ffffa8",
    "Permanently irrigated land": "#ffff00",
    "Rice fields": "#e6e600",
    "Vineyards": "#e68000",
    "Fruit trees and berry plantations": "#f2a64d",
    "Olive groves": "#e6a600",
    "Pastures": "#e6e64d",
    "Annual crops associated with permanent crops": "#ffe6a6",
    "Complex cultivation patterns": "#ffe64d",
    "Land principally occupied by agriculture, with significant areas of natural vegetation": "#e6cc4d",
    "Agro,forestry areas": "#f2cca6",
    "Broad,leaved forest": "#80ff00",
    "Coniferous forest": "#00a600",
    "Mixed forest": "#4dff00",
    "Natural grasslands": "#ccf24d",
    "Moors and heathland": "#a6ff80",
    "Sclerophyllous vegetation": "#a6e64d",
    "Transitional woodland,shrub": "#a6f200",
    "Beaches, dunes, sands": "#e6e6e6",
    "Bare rocks": "#cccccc",
    "Sparsely vegetated areas": "#ccffcc",
    "Burnt areas": "#000000",
    "Glaciers and perpetual snow": "#a6e6cc",
    "Inland marshes": "#a6a6ff",
    "Peat bogs": "#4d4dff",
    "Salt marshes": "#ccccff",
    "Salines": "#e6e6ff",
    "Intertidal flats": "#a6a6e6",
    "Water courses": "#00ccf2",
    "Water bodies": "#80f2e6",
    "Coastal lagoons": "#00ffa6",
    "Estuaries": "#a6ffe6",
    "Sea and ocean": "#e6f2ff"
  }  
  const all_coordinates = clc.map((el: any) => el.geometry.coordinates[0]);

  const getCentroid = (arr: number[][]) => {
    return (arr.reduce((x: number[], y: number[]) => {
        return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
      },
      [0, 0],
    ));
  };

  const getCoordinates = (coords: number[][][]) => {
    var coords_arr = []
    for (var i = 0; i < coords.length; i++) {
      const center = getCentroid(coords[i]);
      coords_arr.push(center)
    }
    return getCentroid(coords_arr);
  }
   
  const centerCoord: number[] = getCoordinates(all_coordinates);

  function getColor(d: string) {
    const color = Object.entries(colors).find(el => el[0] === d)?.at(1)
      return color;
  }

  function style(feature: any) {
    return {
      fillColor: getColor(feature.properties.label),
      weight: 1.5,
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
      weight: 3,
      dashArray: "",
      fillOpacity: 0.8,
    });

    layer.bringToFront();
      this.bindPopup(
        `<div>Label : ${label}</div>`,
      );
      this.openPopup();
  }

  //make style after hover disappear
  function mouseOutHandler(this: any, e: any) {
    const layer = e.target;
    layer.setStyle({
      weight: 1.5,
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
      <GeoJSON
        ref={mapRef}
        data={clc}
        style={style}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};

export default Map;
