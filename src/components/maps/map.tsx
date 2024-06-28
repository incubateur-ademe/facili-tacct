"use client";

import "leaflet/dist/leaflet.css";
import "./maps.scss";

import { useRef, useState } from "react";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";

type CommunesTypes = {
  geometry: {
    coordinates: number[][][];
    type: string;
  };
  properties: {
    DCOE_C_COD: string;
    DCOE_L_LIB: string;
    EPCI: string;
    EPCI_CODE: string;
    densite_bati: number;
    ratio_precarite: number;
  };
  type: string;
};

type EPCITypes = {
  geometry: {
    coordinates: number[][][];
    type: string;
  };
  properties: {
    EPCI: string;
    EPCI_CODE: number;
  };
  type: string;
};

type GetColor = (d: number) => string;

type Style = {
  color?: string;
  dashArray?: string;
  fillColor?: GetColor;
  fillOpacity?: number;
  opacity?: number;
  properties: {
    ratio_precarite: number;
    densite_bati: number;
  };
  weight?: number;
};

interface Props {
  communes: any;
  data: string;
  epci: any;
}

const Map = (props: Props) => {
  const { epci, communes, data } = props;

  const mapRef = useRef<any>(null);//REPLACE L.Map | null

  const data1 = epci as GeoJSON.Feature;
  const data2 = communes as GeoJSON.Feature;

  const latlng = [48.8575, 2.3514]; //paris
  const latLng_mairie1 = [48.8565, 2.3524]; //hotel de ville

  const [lat, setLat] = useState(2.227395691566266);
  const [lng, setLng] = useState(48.69683698795179);

  // const getCentroid = function (arr: number[][][]) {
  //   //REPLACE
  //   return arr.reduce(
  //     function (x: number[], y: number[]) {
  //       return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
  //     },
  //     [0, 0],
  //   );
  // };
  // const centerCoord: number[][] = getCentroid(epci?.geometry.coordinates[0]);

  const getCentroid = (arr: number[][]) => {
    return (arr.reduce((x: number[], y: number[]) => {
        return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
      },
      [0, 0],
    ));
  };
  
  const centerCoord: number[] = getCentroid(epci?.geometry.coordinates[0]);

  function getColor(d: number) {
    if (data === "densite_bati") {
      return d > 0.2
        ? "#FF5E54"
        : d > 0.1
          ? "#FFBD00"
          : d > 0.05
            ? "#FFFA6A"
            : d > 0
              ? "#D5F4A3"
              : "#5CFF54";
    } else
      return d > 0.3
        ? "#FF5E54"
        : d > 0.2
          ? "#FFBD00"
          : d > 0.1
            ? "#FFFA6A"
            : d > 0
              ? "#D5F4A3"
              : "#5CFF54";
  }

  function style(feature: any) {
    if (data === "densite_bati") {
      return {
        fillColor: getColor(feature.properties.densite_bati),
        weight: 1.5,
        opacity: 1,
        color: "black",
        dashArray: "3",
        fillOpacity: 0.7,
      };
    } else {
      return {
        fillColor: getColor(feature.properties.ratio_precarite),
        weight: 1.5,
        opacity: 1,
        color: "black",
        dashArray: "3",
        fillOpacity: 0.7,
      };
    }
  }

  //on Hover
  function mouseOnHandler(this: any, e: any) {
    //REPLACE ????????

    const layer = e.target;
    const epci_name = layer.feature.properties.EPCI;
    const commune_name = layer.feature.properties.DCOE_L_LIB;
    const ratio_precarite = layer.feature.properties.ratio_precarite.toFixed(2);
    const densite_bati = layer.feature.properties.densite_bati.toFixed(2);
    layer.setStyle({
      weight: 3,
      color: "#eee",
      dashArray: "",
      fillOpacity: 0.8,
    });

    layer.bringToFront();
    if (data === "densite_bati") {
      this.bindPopup(
        `<div>${commune_name}</div><div>Densité du bâti : ${densite_bati}</div>`,
      );
      this.openPopup();
    } else {
      this.bindPopup(
        `<div>${commune_name}</div><div>Part des ménages en précarité : ${(100 * ratio_precarite).toFixed(0)}%</div>`,
      );
      this.openPopup();
    }
  }

  //make style after hover disappear
  function mouseOutHandler(this: any, e: any) {
    const layer = e.target;
    // console.log("mapref.current", mapRef.current)
    mapRef.current?.resetStyle(e.target);
    layer.setStyle({
      weight: 3,
      color: "#000000",
      dashArray: "--",
      fillOpacity: 0.8,
    });
    this.closePopup(e.target);
  }

  // function zoomToFeature(e) {
  //   let bounds = e.target.getBounds()
  //   //console.log('bounds', bounds)
  //   let center = e.target.getCenter()
  //   setLat(Object.values(center)[0])
  //   setLng(Object.values(center)[1])
  // }

  function onEachFeature(feature: any, layer: any) {
    layer.on({
      mouseover: mouseOnHandler,
      mouseout: mouseOutHandler,
      // click: zoomToFeature
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
      <GeoJSON data={data1} />
      <GeoJSON
        ref={mapRef}
        data={data2}
        onEachFeature={onEachFeature}
        style={style}
      />
    </MapContainer>
  );
};

export default Map;
