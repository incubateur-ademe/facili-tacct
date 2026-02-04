"use client";
import { MapPatch4 } from "@/components/maps/mapPatch4";

export const Patch4Maps = (props: {
  coordonneesCommunes: {
    codes: string[];
    bbox: { minLng: number; minLat: number; maxLng: number; maxLat: number };
  } | null;
  patch4: {
    [x: string]: string;
    code_geographique: string;
  }[];
}) => {
  const {
    coordonneesCommunes,
    patch4
  } = props;
  return (
    <MapPatch4
      patch4={patch4}
      communesCodes={coordonneesCommunes?.codes ?? []}
      boundingBox={
        coordonneesCommunes ? [
          [coordonneesCommunes.bbox.minLng, coordonneesCommunes.bbox.minLat],
          [coordonneesCommunes.bbox.maxLng, coordonneesCommunes.bbox.maxLat]
        ] : undefined
      }
    />
  );
}
