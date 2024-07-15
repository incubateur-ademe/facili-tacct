"use client";

import "leaflet/dist/leaflet.css";
import "./maps.scss";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { useRef } from "react";

type GetColor = (d: number) => string;

type Style = {
  color?: string;
  dashArray?: string;
  fillColor?: GetColor;
  fillOpacity?: number;
  opacity?: number;
  properties: {
    precarite_logement: number;
    densite_bati: number;
  };
  weight?: number;
};

interface Props {
  data: string;
  db_filtered: any;
}

const Map = (props: Props) => {
  const { data, db_filtered } = props;
  const mapRef = useRef<any>(null);//REPLACE L.Map | null
  // const data1 = epci as GeoJSON.Feature;

  const latlng = [48.8575, 2.3514]; //paris
  const latLng_mairie1 = [48.8565, 2.3524]; //hotel de ville

  const all_coordinates = db_filtered.map((el: any) => el.geometry.coordinates[0][0]);

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
        fillColor: getColor(feature.properties.precarite_logement),
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
    const epci_name = layer.feature.properties.libelle_epci;
    const commune_name = layer.feature.properties.libelle_commune;
    const precarite_logement = Number(layer.feature.properties.precarite_logement).toFixed(2);
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
        `<div>${commune_name}</div><div>Part des ménages en précarité : ${(100 * Number(precarite_logement)).toFixed(0)}%</div>`,
      );
      this.openPopup();
    }
  }

  //make style after hover disappear
  function mouseOutHandler(this: any, e: any) {
    const layer = e.target;
    // console.log("mapref.current", mapRef.current)
    // mapRef.current?.resetStyle(e.target);
    layer.setStyle({
      weight: 1.5,
      color: "#000000",
      dashArray: "3",
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
      {/* <GeoJSON data={data1} /> */}
      <GeoJSON
        ref={mapRef}
        data={db_filtered}
        onEachFeature={onEachFeature}
        style={style}
      />
    </MapContainer>
  );
};

export default Map;
