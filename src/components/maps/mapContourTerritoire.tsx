"use client";

import { CommunesContoursDto } from "@/lib/dto";
import { MapContainer } from "@/lib/react-leaflet";
import { GeoJsonObject } from "geojson";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { GeoJSON, useMap } from "react-leaflet";

export const MapContourTerritoire = (props: {
  territoireContours: CommunesContoursDto[];
  pourcentage: number;
}) => {
  const { territoireContours, pourcentage } = props;
  const mapRef = useRef(null);
  const [data, setData] = useState<CommunesContoursDto[]>([]);

  const ContourTerritoire = () => {
    const map = useMap();

    useEffect(() => {
      setData(territoireContours);
    }, [territoireContours]);
  
    if (data.length > 0) {
      const geojsonObject = L.geoJSON(data as unknown as GeoJsonObject);
      // const point = L.point(geojsonObject.getBounds().getNorthEast().lat, geojsonObject.getBounds().getNorthEast().lng);
      map.fitBounds(geojsonObject.getBounds(), { padding: [0, 0] }); 
      console.log("geojsonObject.getBounds()", geojsonObject.getBounds())
      
      return (
        <>
          <GeoJSON ref={mapRef} data={data as unknown as GeoJsonObject} style={style} >
            <div style={{backgroundColor: "lightblue", opacity: "0.5", height: `${pourcentage}%`, width: "100%", alignSelf: "end"}} />
          </GeoJSON>
          {/* <Circle
            center={geojsonObject.getBounds().getNorthEast()}
            pathOptions={{ fillColor: 'blue' }}
            radius={100}
          />
          <Circle
            center={geojsonObject.getBounds().getSouthEast()}
            pathOptions={{ fillColor: 'blue' }}
            radius={100}
          />
          <Circle
            center={geojsonObject.getBounds().getNorthWest()}
            pathOptions={{ fillColor: 'blue' }}
            radius={100}
          />
          <Circle
            center={geojsonObject.getBounds().getSouthWest()}
            pathOptions={{ fillColor: 'blue' }}
            radius={100}
          /> */}
          {/* <Pane name="purple-rectangle">
            <Rectangle bounds={[[geojsonObject.getBounds().getSouthWest()], [geojsonObject.getBounds().getNorthEast()]]} pathOptions={{ color: 'purple' }} />
          </Pane> */}
          {/* <div style={{backgroundColor: "lightblue", opacity: "0.5", height: `${pourcentage}%`, width: "100%", alignSelf: "end"}} /> */}
        </>
      );
    } else {
      return null;
    }
  };

  const style = () => {
    return {
      fillColor: "transparent",
      weight: 1,
      opacity: 1,
      color: "#161616",
      fillOpacity: 1,
    }
  };

  const test = L.geoJSON(data as unknown as GeoJsonObject).getBounds()
  // console.log("test", test.getNorthWest())

  return (
    <div style={{height: "inherit", width: "100%", backgroundColor: "red"}}>
    <MapContainer
      ref={mapRef}
      style={{ height: "100%", width: "100%", backgroundColor: "rgb(251, 251, 251)", display: "flex" }}
      attributionControl={false}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
      // bounds={[[48.076879978, -1.752527937], [48.154988694, -1.624359117]]}
      // bounds={test.getNorthEast() ? [[test.getNorthEast().lat, test.getNorthEast().lng], [test.getSouthWest().lat, test.getSouthWest().lng]]: [[0, 0], [0, 0]]}
      boundsOptions={{ padding: [0, 0] }}
    >
      {/* <div style={{backgroundColor: "lightblue", opacity: "0.5", height: `${pourcentage}%`, width: "100%", alignSelf: "end"}} /> */}
      <ContourTerritoire />
    </MapContainer>
    </div>
  );
};
