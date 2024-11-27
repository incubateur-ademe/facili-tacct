"use client";

import "leaflet/dist/leaflet.css";

import { GeoJsonObject, type Feature } from "geojson";
import { type FeatureGroup, type Layer, type LeafletMouseEventHandlerFn, type StyleFunction } from "leaflet";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { type Any } from "@/lib/utils/types";

import { CommunesIndicateursDto } from "@/lib/dto";
import { GraphDataNotFound } from "../graph-data-not-found";

export const Map = (props: {
  carteCommunes: CommunesIndicateursDto[];
  data: string;
}) => {
  const { data, carteCommunes } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo");
  const codepci = searchParams.get("codepci")!;  
  const mapRef = useRef(null);
  const mapData = carteCommunes.filter(e => e.properties.code_commune !== "75056" && e.properties.code_commune !== "13055" && e.properties.code_commune !== "69123")

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

  const getColor = (d: number) => {
    if (data === "densite_bati") {
      return d > 0.2 ? "#FF5E54" : d > 0.1 ? "#FFBD00" : d > 0.05 ? "#FFFA6A" : d > 0 ? "#D5F4A3" : "#5CFF54";
    } else return d > 0.3 ? "#FF5E54" : d > 0.2 ? "#FFBD00" : d > 0.1 ? "#FFFA6A" : d > 0 ? "#D5F4A3" : "#5CFF54";
  }

  const style: StyleFunction<Any> = feature => {
    const typedFeature = feature as CommunesIndicateursDto;

    if (data === "densite_bati") {
      return {
        fillColor: getColor(typedFeature?.properties.densite_bati),
        weight: 1,
        opacity: 1,
        color: "#161616",
        // dashArray: "3",
        fillOpacity: 0.6,
      };
    } else {
      return {
        fillColor: getColor(typedFeature?.properties.precarite_logement),
        weight: 1,
        opacity: 1,
        color: "#161616",
        // dashArray: "3",
        fillOpacity: 0.6,
      };
    }
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = e => {
    const layer = e.target as FeatureGroup<CommunesIndicateursDto["properties"]>;
    const commune_name =
      layer.feature && "properties" in layer.feature ? layer.feature.properties.libelle_commune : undefined;
    const precarite_logement =
      layer.feature && "properties" in layer.feature
        ? Number(layer.feature.properties.precarite_logement).toFixed(2)
        : undefined;
    const densite_bati = layer.feature && "properties" in layer.feature ? layer.feature.properties.densite_bati.toFixed(2) : undefined;
    layer.setStyle({
      weight: 3,
      color: "#0D2100",
      fillOpacity: 0.9,
    });
    layer.bringToFront();
    if (data === "densite_bati" && commune_name && densite_bati) {
      layer.bindTooltip(
        `<div>${commune_name}</div><div>Densité du bâti : ${densite_bati}</div>`,
        { direction: "top", opacity: 0.97 },
      );
      layer.openTooltip();
    } else {
      layer.bindTooltip(
        `<div>${commune_name}</div><div>Part des ménages en précarité : ${(100 * Number(precarite_logement)).toFixed(0)}%</div>`, 
        { direction: "top", opacity: 0.97 },
      );
      layer.openTooltip();
    }
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = e => {
    const layer = e.target as FeatureGroup<CommunesIndicateursDto["properties"]>;
    layer.setStyle({
      weight: 1,
      color: "#000000",
      fillOpacity: 0.6,
    });
    layer.closeTooltip();
  };

  const onEachFeature = (feature: Feature<Any>, layer: Layer) => {
    layer.on({
      mouseover: mouseOnHandler,
      mouseout: mouseOutHandler,
    });
  };

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
          <GeoJSON ref={mapRef} data={mapData as unknown as GeoJsonObject} onEachFeature={onEachFeature} style={style} />
        </MapContainer>
      )}
    </>
  );
};
