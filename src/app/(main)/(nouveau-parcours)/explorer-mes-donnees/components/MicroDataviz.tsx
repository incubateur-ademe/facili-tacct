import { Body } from "@/design-system/base/Textes";
import couleurs from "@/design-system/couleurs";
import { CommunesContoursDto } from '@/lib/dto';
import { MapContainer } from '@/lib/react-leaflet';
import { Round } from "@/lib/utils/reusableFunctions/round";
import * as turf from '@turf/turf';
import { Progress } from "antd";
import {
  Feature,
  GeoJsonObject,
  GeoJsonProperties,
  MultiPolygon,
  Polygon
} from 'geojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import styles from "./microDataviz.module.scss";

type MicroPieChartTypes = {
  strokeLinecap: 'butt';
  type: 'circle';
  size: number;
  strokeWidth: number;
  showInfo: boolean;
};

const ProgressProps: MicroPieChartTypes = {
  strokeLinecap: 'butt',
  type: 'circle',
  size: 90,
  strokeWidth: 18,
  showInfo: false
};

export const MicroPieChart = ({
  pourcentage,
  arrondi,
  ariaLabel = ""
}: {
  pourcentage: number;
  arrondi: number;
  ariaLabel?: string;
}) => {
  return (
    <div className={styles.microPieChartWrapper}>
      <Progress
        {...ProgressProps}
        aria-label={ariaLabel}
        percent={pourcentage}
        strokeColor={couleurs.gris.dark}
        trailColor={couleurs.gris.medium}
      />
      <div className={styles.microPieChartText}>
        <p style={{ color: couleurs.gris.dark }}>
          <span>{Round(pourcentage, arrondi)}</span>
        </p>
      </div>
    </div>
  );
}

export const MicroCircleGrid = ({
  pourcentage,
  arrondi = 0,
  ariaLabel = ""
}: {
  pourcentage: number;
  arrondi?: number;
  ariaLabel?: string;
}) => {
  const cerclesComplets = Math.floor(pourcentage / 5);
  const reste = pourcentage % 5;
  const aDemiCercle = reste >= 2.5;

  const cercles = Array.from({ length: 20 }, (_, index) => {
    let etatCercle: 'vide' | 'demi' | 'complet' = 'vide';
    if (index < cerclesComplets) {
      etatCercle = 'complet';
    } else if (index === cerclesComplets && aDemiCercle) {
      etatCercle = 'demi';
    }
    let backgroundStyle: string;
    if (etatCercle === 'complet') {
      backgroundStyle = couleurs.gris.dark;
    } else if (etatCercle === 'demi') {
      backgroundStyle = `linear-gradient(90deg, ${couleurs.gris.dark} 50%, ${couleurs.gris.light} 50%)`;
    } else {
      backgroundStyle = couleurs.gris.light;
    }
    return (
      <div
        key={index}
        className={styles.cercleIndividuel}
        style={{
          background: backgroundStyle,
        }}
      />
    );
  });

  return (
    <div
      className={styles.microCircleGridWrapper}
      aria-label={ariaLabel}
    >
      <Body weight="bold">{Round(pourcentage, arrondi)} %</Body>
      <div className={styles.circleGrid}>
        {cercles}
      </div>
    </div>
  );
}


export const MicroRemplissageTerritoire = (props: {
  territoireContours: CommunesContoursDto[];
  pourcentage: number;
}) => {
  const { territoireContours, pourcentage } = props;
  const mapRef = useRef(null);
  const [bounds, setBounds] = useState<number[]>([0, 0, 0, 0]);
  const south = bounds[1];
  const north = bounds[3];
  const west = bounds[0];
  const east = bounds[2];
  const hauteurTerritoire = north - south;
  const largeurTerritoire = east - west;

  const containerHeight = 150;
  const aspectRatio = largeurTerritoire / hauteurTerritoire;
  // Reduce container width to account for Leaflet's internal spacing
  const containerWidth = Math.max(50, containerHeight * aspectRatio * 0.75);

  const newValue = south + (hauteurTerritoire * pourcentage) / 100;
  const polygon = turf.polygon([
    [
      [bounds[0], bounds[1]],
      [bounds[2], bounds[1]],
      [bounds[2], newValue],
      [bounds[0], newValue],
      [bounds[0], bounds[1]]
    ]
  ]);
  const geojsonObject = L.geoJSON(
    territoireContours as unknown as GeoJsonObject
  );
  useEffect(() => {
    setBounds(geojsonObject.getBounds().toBBoxString().split(',').map(Number));
  }, []);
  const union =
    territoireContours.length > 1
      ? turf.union(
        turf.featureCollection(
          territoireContours as Feature<
            Polygon | MultiPolygon,
            GeoJsonProperties
          >[]
        )
      )
      : territoireContours[0];
  const intersect = union
    ? turf.intersect(
      turf.featureCollection([
        polygon,
        union as Feature<Polygon, GeoJsonProperties>
      ])
    )
    : null;

  return (
    <>
      {bounds[0] != 0 ? (
        <div style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <MapContainer
            ref={mapRef}
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'transparent',
            }}
            attributionControl={false}
            zoomControl={false}
            scrollWheelZoom={false}
            dragging={false}
            bounds={[
              [bounds[1], bounds[0]],
              [bounds[3], bounds[2]]
            ]}
            boundsOptions={{ padding: [-20, -20], maxZoom: 50 }}
            zoom={50}
          >
            <div
              style={{
                display: 'flex',
                alignSelf: 'center',
                zIndex: '501',
                margin: 'auto',
                backgroundColor: 'white',
                padding: '0.1rem 0.3rem',
                borderRadius: '0.5rem',
                position: 'relative',
                marginTop: `${containerHeight / 2.4}px`,
                boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                width: 'fit-content',
              }}
            >
              <Body>
                {pourcentage} %
              </Body>
            </div>
            <GeoJSON
              ref={mapRef}
              data={union as unknown as GeoJsonObject}
              style={{
                color: 'transparent',
                weight: 1,
                fillColor: couleurs.gris.light,
                fillOpacity: 1,
                opacity: 1
              }}
            />
            <GeoJSON
              ref={mapRef}
              data={intersect as unknown as GeoJsonObject}
              style={{
                color: 'none',
                fillColor: couleurs.gris.dark,
                opacity: 1,
                fillOpacity: 1
              }}
            />
          </MapContainer>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

