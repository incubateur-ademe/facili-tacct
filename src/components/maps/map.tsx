"use client";

import "leaflet/dist/leaflet.css";
import "./maps.scss";

import { type Feature } from "geojson";
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
  const code = searchParams.get("code")!;
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

  const centerCoord: number[] = getCoordinates(all_coordinates);

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
      // dashArray: "",
      fillOpacity: 0.9,
    });
    layer.bringToFront();
    if (data === "densite_bati" && commune_name && densite_bati) {
      layer.bindPopup(`<div>${commune_name}</div><div>Densité du bâti : ${densite_bati}</div>`);
      layer.openPopup();
    } else {
      layer.bindPopup(
        `<div>${commune_name}</div><div>Part des ménages en précarité : ${(100 * Number(precarite_logement)).toFixed(0)}%</div>`,
      );
      layer.openPopup();
    }
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = e => {
    const layer = e.target as FeatureGroup<CommunesIndicateursDto["properties"]>;
    layer.setStyle({
      weight: 1.5,
      color: "#000000",
      // dashArray: "3",
      fillOpacity: 0.8,
    });
    layer.closePopup();
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
        <GraphDataNotFound code={code} />
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
          {/* <GeoJSON data={data1} /> */}
          <GeoJSON ref={mapRef} data={carteCommunes as any} onEachFeature={onEachFeature} style={style} />
        </MapContainer>
      )}
    </>
  );
};
