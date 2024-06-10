import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMapEvent, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data_epci from "./epci.json";
import data_communes from "./communes.json";

const Map = () => {
  const mapRef = useRef(null);
  const latlng = [48.8575, 2.3514]; //paris
  const latLng_mairie1 = [48.8565, 2.3524]; //hotel de ville

  const [lat, setLat] = useState(2.227395691566266);
  const [lng, setLng] = useState(48.69683698795179);

  // console.log('data_epci.featuresE', data_epci.features)
  // console.log('data_epci.features[0].properties.EPCI_CODE', data_epci.features[0].properties.EPCI_CODE)

  const epci_test = data_epci.features.find(el => el.properties.EPCI_CODE === 200000933)
  console.log('epci_test', epci_test)

  const commune_test = data_communes.features.filter(el => el.properties.EPCI_CODE === "200000933")
  console.log('commune_test', commune_test)

  var getCentroid = function (arr) { 
    return arr.reduce(function (x,y) {
      return [x[0] + y[0]/arr.length, x[1] + y[1]/arr.length] 
    }, [0,0]) 
  }
  const centerCoord = getCentroid(epci_test.geometry.coordinates[0])

  
  function getColor(d) {
    return d > 238726692 ? '#0033CC' :
           d > 229053692  ? '#285BD6' :
           d > 219380692  ? '#5184E0' :
           d > 209707692  ? '#7AADEA' :
           d > 200034691   ? '#A3D6F4' :
           '#CCFFFF'
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.EPCI_CODE),
      weight: 1.5,
      opacity: 1,
      color: 'black',
      dashArray: '3',
      fillOpacity: 0.4
    };
  }

  //on Hover
  function mouseOnHandler(e) {
    var layer = e.target;
    var epci_name = layer.feature.properties.EPCI
    var commune_name = layer.feature.properties.DCOE_L_LIB
    layer.setStyle({
        weight: 3,
        color: '#eee',
        dashArray: '',
        fillOpacity: 0.8
    });

    layer.bringToFront();
    this.bindPopup(`<div>${commune_name}</div>`);
    this.openPopup();    
  }

  //make style after hover disappear
  function mouseOutHandler(e) {
    mapRef.current.resetStyle(e.target);
    this.closePopup(e.target);
  }

  function zoomToFeature(e) {
    let bounds = e.target.getBounds()
    //console.log('bounds', bounds)
    let center = e.target.getCenter()
    setLat(Object.values(center)[0])
    setLng(Object.values(center)[1])
  }

  function onEachFeature(feature, layer) {
    layer.on({
        mouseover: mouseOnHandler,
        mouseout: mouseOutHandler,
        click: zoomToFeature
    });
  }

  return ( 
    <MapContainer center={[centerCoord[1], centerCoord[0]]} zoom={12} ref={mapRef} style={{height: "80vh", width: "80vw"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <MyComponent/> */}
      {/* <RecenterAutomatically lat={lat} lng={lng} /> */}
      {/* <RenderIcons/> */}
      <GeoJSON
        data={epci_test}
      />
      <GeoJSON
        ref={mapRef}
        data={commune_test}
        onEachFeature={onEachFeature}
        style={style}
      />
      {/* <GeoJSON
        ref={mapRef}
        data={data_epci}
        onEachFeature={onEachFeature}
        style={style}
      /> */}
    </MapContainer>
  );
};

export default Map;