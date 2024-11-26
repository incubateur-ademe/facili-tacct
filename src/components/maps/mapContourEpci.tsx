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

  const ContourTerritoire = () => {
    const [data, setData] = useState<CommunesContoursDto[]>();
    const map = useMap();
  
    useEffect(() => {
      setData(territoireContours);
    }, [territoireContours]);
  
    if (data) {
      const geojsonObject = L.geoJSON(data as unknown as GeoJsonObject);
      map.fitBounds(geojsonObject.getBounds()); 
      return <GeoJSON data={data as unknown as GeoJsonObject} style={style}/>;
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

  return (
    <MapContainer
      ref={mapRef}
      style={{ height: "100%", width: "100%", backgroundColor: "#fdfdfd", display: "flex" }}
      attributionControl={false}
      zoomControl={false}
      scrollWheelZoom={false}
      // bounds={territoireContours[0].geometry.coordinates[0][0] as unknown as LatLngBoundsExpression }
      dragging={false}
      boundsOptions={{ padding: [0, 0] }}
    >
      {/* <Polygon 
        positions={territoireContours[0].geometry.coordinates[0][0] as unknown as LatLngExpression[][]}
        pathOptions={{color: "#161616", fillColor: "transparent"}}
      /> */}
      <div style={{backgroundColor: "lightblue", opacity: "0.5", height: `${pourcentage}%`, width: "100%", alignSelf: "end"}} />
      <ContourTerritoire />
    </MapContainer>
  );
};
