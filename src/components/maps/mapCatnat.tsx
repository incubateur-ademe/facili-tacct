"use client";

import "leaflet/dist/leaflet.css";

import { type StyleFunction } from "leaflet";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { type Any } from "@/lib/utils/types";

import { CommunesIndicateursDto } from "@/lib/dto";
import { GraphDataNotFound } from "../graph-data-not-found";


const colors: { [key: string]: string[] } = 
  {
    "Tous types": ["#F60000", "#FF5B37", "#FF8966", "#FFB297", "#FFD8CB"],
    "Innondations": ["#206EB4", "#588AC7", "#82A7D9", "#A9C4EC", "#D0E3FF"],
    "Sécheresse": ["#FF7700", "#FF9141", "#FFAA6D", "#FFC298", "#FFDAC3"],
    "Mouvements de terrain": ["#BE5415", "#D27641", "#E3976C", "#F2B897", "#FFFF8C"],
    "Retrait-gonflement des argiles": ["#FFBC5C", "#FCCE78", "#FBDE97", "#FBECB6", "#FFFAD6"],
    "Cyclones / Tempêtes": ["#82815A", "#A09F66", "#BFBE73", "#DEDE7F", "#F4F38A"],
    "Grêle / neige": ["#00A302", "#56B544", "#83C770", "#ABD99B", "#D1EAC7"],
    "Avalanches": ["#723AA0", "#9361B7", "#B289CF", "#D2B1E6", "#F1DBFE"],
  };

export const MapCatnat = (props: {
  carteCommunes: CommunesIndicateursDto[];
  typeRisqueValue: string;
}) => {
  const { carteCommunes, typeRisqueValue } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo");
  const codepci = searchParams.get("codepci")!;  
  const mapRef = useRef(null);

  const all_coordinates = carteCommunes.map(el => el.geometry.coordinates?.[0]?.[0]);

  const getCentroid = (arr: number[][]) => {
    return arr?.reduce(
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

  const commune = codgeo ? carteCommunes.find(el => el.properties.code_commune === codgeo) : null;

  const centerCoord: number[] = commune ? getCentroid(commune.geometry.coordinates?.[0][0]) : getCoordinates(all_coordinates);

  const getColor = (d: number, max: number, typeCatnat: string) => {
    const colorPalette = colors[typeCatnat];
    return (
      d > (4/5) * max ? colorPalette[0] : 
      d > (3/5) * max ? colorPalette[1] : 
      d > (2/5) * max ? colorPalette[2] : 
      d > (1/5) * max ? colorPalette[3] :
      colorPalette[4]
    )
  }

  const style: StyleFunction<Any> = feature => {
    const typedFeature = feature as CommunesIndicateursDto;
    if (typeRisqueValue === "Tous types") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.sumCatnat? el.properties.catnat?.sumCatnat : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.sumCatnat ? getColor(typedFeature?.properties.catnat?.sumCatnat, maxValue, typeRisqueValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Sécheresse") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Sécheresse"] ? el.properties.catnat?.["Sécheresse"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Sécheresse"] ? getColor(typedFeature?.properties.catnat?.["Sécheresse"], maxValue, typeRisqueValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      }
    } else if (typeRisqueValue === "Cyclones / Tempêtes") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Cyclones / Tempêtes"] ? el.properties.catnat?.["Cyclones / Tempêtes"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Cyclones / Tempêtes"] ? getColor(typedFeature?.properties.catnat?.["Cyclones / Tempêtes"], maxValue, typeRisqueValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Retrait-gonflement des argiles") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Retrait-gonflement des argiles"] ? el.properties.catnat?.["Retrait-gonflement des argiles"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Retrait-gonflement des argiles"] ? getColor(typedFeature?.properties.catnat?.["Retrait-gonflement des argiles"], maxValue, typeRisqueValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Mouvements de terrain") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Mouvements de terrain"] ? el.properties.catnat?.["Mouvements de terrain"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Mouvements de terrain"] ? getColor(typedFeature?.properties.catnat?.["Mouvements de terrain"], maxValue, typeRisqueValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Innondations") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.Innondations ? el.properties.catnat?.Innondations : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.Innondations ? getColor(typedFeature?.properties.catnat?.Innondations, maxValue, typeRisqueValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Grêle / neige") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Grêle / neige"] ? el.properties.catnat?.["Grêle / neige"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Grêle / neige"] ? getColor(typedFeature?.properties.catnat?.["Grêle / neige"], maxValue, typeRisqueValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    }
    else return {}
  }

  return (
    <>
      {carteCommunes === null ? (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      ) : (
        <MapContainer
          center={[centerCoord[1], centerCoord[0]]}
          zoom={10}
          ref={mapRef}
          style={{ height: "500px", width: "100%"}}
          attributionControl={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          <GeoJSON ref={mapRef} data={carteCommunes as Any} style={style} />
        </MapContainer>

      )}
    </>
  );
};
