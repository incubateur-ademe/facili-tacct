"use client";

import ExporterIcon from '@/assets/icons/export_icon_white.svg';
import { CopyLinkClipboard } from "@/components/interactions/CopyLinkClipboard";
import { MapPatch4 } from "@/components/maps/mapPatch4";
import { BoutonPrimaireClassic } from "@/design-system/base/Boutons";
import { Body } from '@/design-system/base/Textes';
import CursorVisualization from "../cursorVisualization";
import styles from '../patch4c.module.scss';

export const Patch4Maps = (props: {
  coordonneesCommunes: {
    codes: string[];
    bbox: { minLng: number; minLat: number; maxLng: number; maxLat: number };
  } | null;
  patch4: {
    [x: string]: string;
    code_geographique: string;
    libelle_geographique: string;
  }[];
  selectedAnchor: string;
}) => {
  const {
    coordonneesCommunes,
    patch4,
    selectedAnchor
  } = props;
  return (
    <>
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
      <CursorVisualization isMap={true} />
      <div className={styles.exportShareContainer}>
        <Body size="sm" style={{ color: "#666666" }}>
          Source : Météo France
        </Body>
        <div className={styles.exportShareWrapper}>
          <CopyLinkClipboard anchor={selectedAnchor} />
          <BoutonPrimaireClassic
            onClick={() => { }}
            disabled={false}
            icone={ExporterIcon}
            size="sm"
            text="Exporter (.png)"
          />
        </div>
      </div>
    </>
  );
}
