"use client";

import "leaflet/dist/leaflet.css";

import { type StyleFunction } from "leaflet";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { type Any } from "@/lib/utils/types";

import { CommunesIndicateursDto } from "@/lib/dto";
import { GraphDataNotFound } from "../graph-data-not-found";
import { Legend } from "./components/legendCatnat";

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

  const getColor = (d: number, max: number) => {
    return d > (4/5) * max ? "#FF5E54" : d > (3/5) * max ? "#FFBD00" : d > (2/5) * max ? "#FFFA6A" : d > (1/5) * max ? "#D5F4A3" : "#5CFF54";
  }

  const style: StyleFunction<Any> = feature => {
    const typedFeature = feature as CommunesIndicateursDto;
    if (typeRisqueValue === "Tous types") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.sumCatnat? el.properties.catnat?.sumCatnat : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.sumCatnat ? getColor(typedFeature?.properties.catnat?.sumCatnat, maxValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Sécheresse") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Sécheresse"] ? el.properties.catnat?.["Sécheresse"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Sécheresse"] ? getColor(typedFeature?.properties.catnat?.["Sécheresse"], maxValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      }
    } else if (typeRisqueValue === "Cyclones / Tempêtes") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Cyclones / Tempêtes"] ? el.properties.catnat?.["Cyclones / Tempêtes"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Cyclones / Tempêtes"] ? getColor(typedFeature?.properties.catnat?.["Cyclones / Tempêtes"], maxValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Retrait-gonflement des argiles") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Retrait-gonflement des argiles"] ? el.properties.catnat?.["Retrait-gonflement des argiles"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Retrait-gonflement des argiles"] ? getColor(typedFeature?.properties.catnat?.["Retrait-gonflement des argiles"], maxValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Mouvements de terrain") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Mouvements de terrain"] ? el.properties.catnat?.["Mouvements de terrain"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Mouvements de terrain"] ? getColor(typedFeature?.properties.catnat?.["Mouvements de terrain"], maxValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Innondations") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.Innondations ? el.properties.catnat?.Innondations : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.Innondations ? getColor(typedFeature?.properties.catnat?.Innondations, maxValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 0.6,
      };
    } else if (typeRisqueValue === "Grêle / neige") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.["Grêle / neige"] ? el.properties.catnat?.["Grêle / neige"] : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.["Grêle / neige"] ? getColor(typedFeature?.properties.catnat?.["Grêle / neige"], maxValue) : "transparent",
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
          <Legend data={"catnat"} typeRisqueValue={typeRisqueValue} carteCommunes={carteCommunes}/>

        </MapContainer>

      )}
    </>
  );
};
