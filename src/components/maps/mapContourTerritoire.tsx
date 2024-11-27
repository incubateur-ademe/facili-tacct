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
      map.fitBounds(geojsonObject.getBounds());     
      return (
        <>
          <GeoJSON ref={mapRef} data={data as unknown as GeoJsonObject} style={style} />
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
          />
          <Pane name="purple-rectangle">
            <Rectangle bounds={[[geojsonObject.getBounds().getSouthWest()], [geojsonObject.getBounds().getNorthEast()]]} pathOptions={{ color: 'purple' }} />
          </Pane> */}
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

  return (
    <MapContainer
      ref={mapRef}
      style={{ height: "100%", width: "100%", backgroundColor: "rgb(251, 251, 251)", display: "flex" }}
      attributionControl={false}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
      boundsOptions={{ padding: [0, 0] }}
    >
      <div style={{backgroundColor: "lightblue", opacity: "0.5", height: `${pourcentage}%`, width: "100%", alignSelf: "end"}} />
      <ContourTerritoire />
    </MapContainer>
  );
};
