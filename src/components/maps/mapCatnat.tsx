"use client";

import "leaflet/dist/leaflet.css";

import { FeatureGroup, Layer, LeafletMouseEventHandlerFn, type StyleFunction } from "leaflet";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { type Any } from "@/lib/utils/types";

import { CommunesIndicateursDto } from "@/lib/dto";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { Feature } from "geojson";
import { GraphDataNotFound } from "../graph-data-not-found";

const colors: { [key: string]: string[] } = 
  {
    "Tous types": ["#F60000", "#FF5B37", "#FF8966", "#FFB297", "#FFD8CB"],
    "Inondations": ["#206EB4", "#588AC7", "#82A7D9", "#A9C4EC", "#D0E3FF"],
    "Sécheresse": ["#FF7700", "#FF9141", "#FFAA6D", "#FFC298", "#FFDAC3"],
    "Mouvements de terrain": ["#BE5415", "#D27641", "#E3976C", "#F2B897", "#FFFF8C"],
    "Retrait-gonflement des argiles": ["#FFBC5C", "#FCCE78", "#FBDE97", "#FBECB6", "#FFFAD6"],
    "Cyclones / Tempêtes": ["#82815A", "#A09F66", "#BFBE73", "#DEDE7F", "#F4F38A"],
    "Grêle / neige": ["#00A302", "#56B544", "#83C770", "#ABD99B", "#D1EAC7"],
    "Avalanches": ["#723AA0", "#9361B7", "#B289CF", "#D2B1E6", "#F1DBFE"],
};

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

const getColor = (d: number, max: number, typeCatnat: string) => {
  const colorPalette = colors[typeCatnat];
  return (
    d > Math.round((4/5) * max) ? colorPalette[0] : 
    d > Math.round((3/5) * max) ? colorPalette[1] : 
    d > Math.round((2/5) * max) ? colorPalette[2] : 
    d > Math.round((1/5) * max) ? colorPalette[3] :
    colorPalette[4]
  )
}

export const MapCatnat = (props: {
  carteCommunes: CommunesIndicateursDto[];
  typeRisqueValue: CatnatTypes;
}) => {
  const { carteCommunes, typeRisqueValue } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo");
  const codepci = searchParams.get("codepci")!;  
  const mapRef = useRef(null);
  const all_coordinates = carteCommunes.map(el => el.geometry.coordinates?.[0]?.[0]);
  const commune = codgeo ? carteCommunes.find(el => el.properties.code_commune === codgeo) : null;
  const centerCoord: number[] = commune ? getCentroid(commune.geometry.coordinates?.[0][0]) : getCoordinates(all_coordinates);

  const style: StyleFunction<Any> = feature => {
    const typedFeature = feature as CommunesIndicateursDto;
    if (typeRisqueValue === "Tous types") {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.sumCatnat? el.properties.catnat?.sumCatnat : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.sumCatnat ? getColor(typedFeature?.properties.catnat?.sumCatnat, maxValue, typeRisqueValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 1,
      };
    } else {
      const maxValue = Math.max(...carteCommunes.map(el => el.properties.catnat?.[typeRisqueValue] ? el.properties.catnat?.[typeRisqueValue] as number : 0));
      return {
        fillColor: typedFeature?.properties.catnat?.[typeRisqueValue] ? 
          getColor(typedFeature?.properties.catnat?.[typeRisqueValue] as number, maxValue, typeRisqueValue) : "transparent",
        weight: 1,
        opacity: 1,
        color: "#161616",
        fillOpacity: 1,
      }
    } 
  }

  const CustomTooltip = (restCatnat: Object, communeName: string) => {
    const keys = Object.keys(restCatnat);
    const values = Object.values(restCatnat);  
    const sum = Sum(values);  
    return (
      `<div stype="padding: 1.25rem">
        <div style="font-size: 0.75rem; font-family: Marianne; font-weight: 700; padding: 0 0 1rem">${communeName} : ${sum} arrêté(s) au total</div>
        ${keys.map((el, i) => `
          <div style="
            margin: 0;
            padding: 0 0 0.5rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 0.5rem;
            font-size: 0.75rem;
            font-family: Marianne;
            font-weight: 400;
          ">${el} : <b> ${values[i]}</b></div>`).join(" ")}
      </div>`
    );
  }

  const mouseOnHandler: LeafletMouseEventHandlerFn = e => {
    const layer = e.target as FeatureGroup<CommunesIndicateursDto["properties"]>;
    const commune_name = layer.feature && "properties" in layer.feature ? layer.feature.properties.libelle_commune : undefined;
    const catnat = layer.feature && "properties" in layer.feature ? layer.feature.properties.catnat : undefined;
    // const newArray = array.map(({dropAttr1, dropAttr2, ...keepAttrs}) => keepAttrs)
    const { indexName, sumCatnat, ...restCatnat } = catnat || {};

    layer.setStyle({
      weight: 3,
      color: "#0D2100",
      fillOpacity: 0.9,
    });
    layer.bringToFront();
    if (typeRisqueValue === "Tous types") {
      layer.bindPopup(CustomTooltip(restCatnat, commune_name as string));
    } else {
      layer.bindPopup(CustomTooltip(restCatnat, commune_name as string));
    }
    layer.openPopup();
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = e => {
    const layer = e.target as FeatureGroup<CommunesIndicateursDto["properties"]>;
    layer.setStyle({
      weight: 1,
      color: "#000000",
      fillOpacity: 1,
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
          {/* <TileLayer
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          /> */}
          <TileLayer
            // attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openma            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON ref={mapRef} data={carteCommunes as Any} style={style} onEachFeature={onEachFeature} />
        </MapContainer>

      )}
    </>
  );
};
