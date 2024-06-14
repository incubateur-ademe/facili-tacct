"use client";

import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMapEvent, useMap } from "@/lib/react-leaflet";
import "leaflet/dist/leaflet.css";

type CommunesTypes = {
  type: string;  
  geometry: {
      type: string;
      coordinates: number[][][][];
  };
  properties: {
    DCOE_C_COD: string;
    DDEP_C_COD: string;
    DCOE_L_LIB: string;
    REGION: string;
    REGION_COD: string;
    DEPARTEMEN: string;
    EPCI: string;
    EPCI_CODE: string;
    ratio_precarite: number;
  };
}

type EPCITypes = {
  type: string;  
  geometry: {
    type: string;
    coordinates: number[][][][];
  };
  properties: {
    EPCI_CODE: number;
    EPCI: string;
  };
}

interface Props {
	epci: any;
  communes: any;
}

type Style = {
  fillColor: GetColor;
  weight: number;
  opacity: number;
  color: string;
  dashArray: string;
  fillOpacity: number;
  properties: {
    ratio_precarite: number;
  };
  
}

type GetColor = (d: number) => string;

const Map = (props: Props) => {
  const { epci, communes } = props;
  const mapRef = useRef<any>(null); //REPLACE

  const data1: GeoJSON.Feature = epci;
  const data2: GeoJSON.Feature = communes;

  const latlng = [48.8575, 2.3514]; //paris
  const latLng_mairie1 = [48.8565, 2.3524]; //hotel de ville

  const [lat, setLat] = useState(2.227395691566266);
  const [lng, setLng] = useState(48.69683698795179);

  var getCentroid = function (arr: any) {  //REPLACE
    return arr.reduce(function (x: any, y: any) {
      return [x[0] + y[0]/arr.length, x[1] + y[1]/arr.length] 
    }, [0,0]) 
  }
  const centerCoord: number[] = getCentroid(epci?.geometry.coordinates[0])

  function getColor(d: number) {
    return d > 0.3  ? '#FF5E54' :
           d > 0.2  ? '#FFD054' :
           d > 0.1  ? '#D5F4A3' :
           d > 0   ? '#A3F4CA' :
           '#5CFF54'
  }

  function style(feature: any) {
    return {
      fillColor: getColor(feature.properties.ratio_precarite),
      weight: 1.5,
      opacity: 1,
      color: 'black',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  //on Hover
  function mouseOnHandler(this: any, e: any) { //REPLACE ????????
    var layer = e.target;
    var epci_name = layer.feature.properties.EPCI
    var commune_name = layer.feature.properties.DCOE_L_LIB
    var ratio_precarite = layer.feature.properties.ratio_precarite.toFixed(2)
    layer.setStyle({
        weight: 3,
        color: '#eee',
        dashArray: '',
        fillOpacity: 0.8
    });

    layer.bringToFront();
    this.bindPopup(`<div>${commune_name}</div><div>ratio précarité : ${ratio_precarite}</div>`);
    this.openPopup();    
  }

  //make style after hover disappear
  function mouseOutHandler(this: any, e: any) {
    mapRef.current.resetStyle(e.target);
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
      style={{height: "500px", width: "500px"}}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={data1}
      />
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
