import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMapEvent, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";



const Map = (props) => {
  const { epci, communes } = props;
  const mapRef = useRef(null);
  const latlng = [48.8575, 2.3514]; //paris
  const latLng_mairie1 = [48.8565, 2.3524]; //hotel de ville

  const [lat, setLat] = useState(2.227395691566266);
  const [lng, setLng] = useState(48.69683698795179);

  // console.log('data_epci.featuresE', data_epci.features)
  // console.log('data_epci.features[0].properties.EPCI_CODE', data_epci.features[0].properties.EPCI_CODE)

  var getCentroid = function (arr) { 
    return arr.reduce(function (x,y) {
      return [x[0] + y[0]/arr.length, x[1] + y[1]/arr.length] 
    }, [0,0]) 
  }
  const centerCoord = getCentroid(epci.geometry.coordinates[0])

  
  function getColor(d) {
    return d > 0.3  ? '#FF5E54' :
           d > 0.2  ? '#FFD054' :
           d > 0.1  ? '#D5F4A3' :
           d > 0   ? '#A3F4CA' :
           '#5CFF54'
  }

  function style(feature) {
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
  function mouseOnHandler(e) {
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
        data={epci}
      />
      <GeoJSON
        ref={mapRef}
        data={communes}
        onEachFeature={onEachFeature}
        style={style}
      />
      
    </MapContainer>
  );
};

export default Map;