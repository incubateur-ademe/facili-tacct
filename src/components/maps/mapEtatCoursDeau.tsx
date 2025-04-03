'use client';

import {
  CommunesIndicateursDto,
  EtatCoursDeauDto
} from '@/lib/dto';
import { QualiteSitesBaignade } from '@/lib/postgres/models';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { Any } from '@/lib/utils/types';
import { Feature } from 'geojson';
import {
  FeatureGroup,
  LatLngExpression,
  Layer,
  LeafletMouseEventHandlerFn,
  StyleFunction
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import SitesBaignadeMarkers from './components/sitesBaignadeMarkers';

const getCentroid = (arr: number[][]) => {
  return arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
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

export const MapEtatCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeauDto[];
  carteCommunes: CommunesIndicateursDto[];
  qualiteEauxBaignade?: QualiteSitesBaignade[];
}) => {
  const { etatCoursDeau, carteCommunes, qualiteEauxBaignade } =
    props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapRef = useRef(null);

  const commune = type === "commune"
    ? carteCommunes.find(
      (commune) => commune.properties.code_geographique === code
    ) : null;

  const carteCommunesFiltered = type === "ept"
    ? carteCommunes.filter(
      (el) => el.properties.ept === libelle
    ) : carteCommunes;

  const allCoordinates = carteCommunesFiltered.map(
    (el) => el.geometry.coordinates?.[0]?.[0]
  );

  const centerCoord: number[] = commune
    ? commune.properties.coordinates.split(',').map(Number)
    : getCoordinates(allCoordinates);

  const getColor = (d: string | null) => {
    if (d === '1') {
      return '#0095C8';
    } else if (d === '2') {
      return '#00C190';
    } else if (d === '3') {
      return '#FFCF5E';
    } else if (d === '4') {
      return '#F66E19';
    } else if (d === '5') {
      return '#B5000E';
    } else {
      return '#9D9C9C';
    }
  };

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as EtatCoursDeauDto;
    return {
      fillColor: getColor(typedFeature?.properties.etateco),
      weight: 3,
      opacity: 1,
      color: getColor(typedFeature?.properties.etateco),
      fillOpacity: 0.95
    };
  };

  const territoireStyle: StyleFunction<Any> = (e) => {
    return {
      weight: e?.properties.code_geographique === code ? 2 : 0.5,
      opacity: 0.9,
      color: '#161616',
      fillOpacity: 0
    };
  };

  const CustomTooltip = (coursDeau: string, color: string) => {
    return `
      <div style="padding: 0.5rem">
        <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 0; gap: 0.5rem; align-items: center">
          <div
            style="background-color: ${color}; width: 1rem; height: 1rem; border-radius: 2px; border: 0.5px solid #161616"
          ></div>
          <p style="font-size: 0.75rem; font-family: Marianne; font-weight: 400; margin: 0">${coursDeau}</p> 
        </div>
      </div>
    `;
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<EtatCoursDeauDto['properties']>;
    //close residual opened tooltip
    layer.unbindTooltip();
    layer.closeTooltip();
    const coursDeau =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.name
        : undefined;
    layer.setStyle({
      weight: 7
    });
    layer.bindTooltip(
      CustomTooltip(coursDeau as string, e.target.options.color),
      {
        direction: e.originalEvent.offsetY > 250 ? 'top' : 'bottom',
        offset: e.originalEvent.offsetX > 400 ? [-75, 0] : [75, 0]
      }
    );
    layer.openTooltip();
    layer.bringToFront();
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<EtatCoursDeauDto['properties']>;
    layer.closeTooltip();
    layer.setStyle({
      weight: 3,
      // color: getColor(layer.feature?.properties.etateco),
      fillOpacity: 0.95
    });
  };

  const onEachFeature = (feature: Feature<Any>, layer: Layer) => {
    layer.on({
      mouseover: mouseOnHandler,
      mouseout: mouseOutHandler
    });
  };

  return (
    <MapContainer
      center={
        commune
          ? (centerCoord as LatLngExpression)
          : [centerCoord[1], centerCoord[0]]
      }
      zoom={
        type === "commune"
          ? 12
          : type === "ept"
            ? 11
            : 10
      }
      ref={mapRef}
      style={{ height: '500px', width: '100%', cursor: 'pointer' }}
      attributionControl={false}
      zoomControl={false}
    >
      {process.env.NEXT_PUBLIC_ENV === 'preprod' ? (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      ) : (
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
      )}
      <style>
        {`
        .leaflet-interactive {
          cursor: pointer !important;
        }
        .leaflet-tooltip {
          opacity: 0.95 !important;
        }
        .leaflet-tooltip-top:before {
          content: none !important;
        }
        .leaflet-tooltip-bottom:before {
          content: none !important;
        }
      `}
        <GeoJSON
          ref={mapRef}
          data={carteCommunesFiltered as Any}
          style={territoireStyle}
        />
        <GeoJSON
          ref={mapRef}
          data={etatCoursDeau as Any}
          style={style}
          onEachFeature={onEachFeature}
        />
        {qualiteEauxBaignade && (
          <SitesBaignadeMarkers qualiteEauxBaignade={qualiteEauxBaignade} />
        )}
      </style>
    </MapContainer>
  );
};
