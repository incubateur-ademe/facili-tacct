'use client';

import { EpciContoursDto, EtatCoursDeauDto } from '@/lib/dto';
import { CarteCommunes } from '@/lib/postgres/models';
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
import { useRef } from 'react';
import { useStyles } from 'tss-react/dsfr';

const getCentroid = (arr: number[][]) => {
  return arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
};

export const MapEtatCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeauDto[];
  epciContours: EpciContoursDto[];
  carteCommunes: CarteCommunes | undefined;
}) => {
  const { etatCoursDeau, epciContours, carteCommunes } = props;
  const css = useStyles();
  const mapRef = useRef(null);
  const centerCoord: number[] = carteCommunes
    ? carteCommunes?.coordinates.split(',').map(Number)
    : getCentroid(epciContours[0]?.geometry?.coordinates[0][0]);

  const getColor = (d: string | null) => {
    if (d === '1') {
      return '#0095C8';
    } else if (d === '2') {
      return '#AFD018';
    } else if (d === '3') {
      return '#FEE556';
    } else if (d === '4') {
      return '#FF9935';
    } else if (d === '5') {
      return '#D61E28';
    } else {
      return '#9D9C9C';
    }
  };

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as EtatCoursDeauDto;
    return {
      fillColor: getColor(typedFeature?.properties.etateco),
      weight: 2.5,
      opacity: 1,
      color: getColor(typedFeature?.properties.etateco),
      fillOpacity: 0.95
    };
  };

  const epciStyle: StyleFunction<Any> = () => {
    return {
      weight: 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 0
    };
  };

  const CustomTooltip = (coursDeau: string) => {
    return `
      <div style="padding: 0.5rem">
        <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 0">
          <p style="font-size: 0.75rem; font-family: Marianne; font-weight: 400; margin: 0">${coursDeau}</p> 
        </div>
      </div>
    `;
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<EtatCoursDeauDto['properties']>;
    const coursDeau =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.name
        : undefined;
    layer.setStyle({
      weight: 7
    });
    // console.log("e.originalEvent", e.originalEvent);
    layer.bindTooltip(CustomTooltip(coursDeau as string), {
      direction: 'center',
      offset: [0, -50]
    });
    layer.openTooltip();
    layer.bringToFront();
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<EtatCoursDeauDto['properties']>;
    layer.setStyle({
      weight: 2.5,
      // color: getColor(layer.feature?.properties.etateco),
      fillOpacity: 0.95
    });
    layer.closeTooltip();
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
        carteCommunes
          ? (centerCoord as LatLngExpression)
          : [centerCoord[1], centerCoord[0]]
      }
      zoom={10}
      ref={mapRef}
      style={{ height: '500px', width: '100%', cursor: 'pointer' }}
      attributionControl={false}
      zoomControl={false}
      minZoom={9}
      dragging={false}
    >
      <TileLayer
        attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=MBbcKi3EyFqyyHvvHVbfnE4iOJ34FiUs1yWbVID476VAReeeO0NdrKWg6FljGBIC"
      />
      {/* <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        /> */}
      <style>
        {`
        .leaflet-interactive {
          cursor: pointer !important;
        }
        .leaflet-tooltip {
          opacity: 0.95 !important;
        }
      `}
        <GeoJSON ref={mapRef} data={epciContours as Any} style={epciStyle} />
        <GeoJSON
          ref={mapRef}
          data={etatCoursDeau as Any}
          style={style}
          onEachFeature={onEachFeature}
        />
      </style>
    </MapContainer>
  );
};