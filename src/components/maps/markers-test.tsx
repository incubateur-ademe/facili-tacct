"use client";

import "leaflet/dist/leaflet.css";

import { type Feature } from "geojson";
import { type FeatureGroup, type Layer, type LeafletMouseEventHandlerFn, type StyleFunction } from "leaflet";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { type Any } from "@/lib/utils/types";

import { CommunesIndicateursDto } from "@/lib/dto";
import Image, { StaticImageData } from "next/image";
import { Marker, MarkerLayer } from "react-leaflet-marker";
import markerIcon from "../../assets/icons/marker_icon_blue.svg";
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

  const style: StyleFunction<Any> = feature => {
    return {
      weight: 1,
      opacity: 1,
      color: "#161616",
      // dashArray: "3",
      fillOpacity: 0.1,
      fillColor: "#FFFFFF",
      zindex: 10
    };
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = e => {
    const layer = e.target as FeatureGroup<CommunesIndicateursDto["properties"]>;
    const commune_name =
      layer.feature && "properties" in layer.feature ? layer.feature.properties.libelle_commune : undefined;
    layer.setStyle({
      weight: 3,
      color: "#0D2100",
      fillOpacity: 0.9,
      fillColor: "orange"
    });
    layer.bringToFront();
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = e => {
    const layer = e.target as FeatureGroup<CommunesIndicateursDto["properties"]>;
    layer.setStyle({
      weight: 1,
      color: "#161616",
      fillOpacity: 0.1,
      fillColor: "#FFFFFF"
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
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerLayer opacity={1}>
            <GeoJSON ref={mapRef} data={carteCommunes as any} onEachFeature={onEachFeature} style={style} />
            <Marker
              interactive
              riseOnHover
              position={[45.74831435, 5.5927847]}
              placement="top"
              zIndexOffset={1000000}
            >
              <Image src={markerIcon as StaticImageData} alt="" />
            </Marker>
        </MarkerLayer>

          {/* <Circle center={[45.74831435, 5.5927847]} radius={200} pane="my-existing-pane" /> */}


        </MapContainer>
      )}
    </>
  );
};
