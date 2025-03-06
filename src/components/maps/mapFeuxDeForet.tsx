'use client';

import { CommunesIndicateursDto } from '@/lib/dto';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, IncendiesForet } from '@/lib/postgres/models';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { type Any } from '@/lib/utils/types';
import { Feature, GeoJsonObject } from 'geojson';
import {
  FeatureGroup,
  Layer,
  LeafletMouseEventHandlerFn,
  type StyleFunction
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { GraphDataNotFound } from '../graph-data-not-found';

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

const getColor = (d: number) => {
  return d <= 0.0005
    ? '#ECD8FE'
    : d > 0.0005 && d <= 0.001
      ? '#C48EF6'
      : d > 0.002
        ? '#8C58BB'
        : d > 0.005
          ? '#6E3F99'
          : d > 0.01
            ? '#42255C'
            : 'transparent';
};

export const MapFeuxDeForet = (props: {
  carteCommunes: CarteCommunes[];
  sliderValue: number[];
  incendiesForet: IncendiesForet[];
}) => {
  const { carteCommunes, incendiesForet, sliderValue } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo');
  const codepci = searchParams.get('codepci')!;
  const mapRef = useRef(null);

  const cartographieData = incendiesForet.filter(
    (el) => el.annee >= sliderValue[0] && el.annee <= sliderValue[1]
  );
  const carteCommunesEnriched = carteCommunes
    .map((el) => {
      return {
        ...el,
        incendiesForet:
          cartographieData.find(
            (item) => item.code_geographique === el.code_commune
          )?.surface_parcourue ?? NaN
      };
    })
    .map(CommunesIndicateursMapper);

  const allCoordinates = carteCommunesEnriched.map(
    (el) => el.geometry.coordinates?.[0]?.[0]
  );
  const commune = codgeo
    ? carteCommunesEnriched.find((el) => el.properties.code_commune === codgeo)
    : null;
  const centerCoord: number[] = commune
    ? getCentroid(commune.geometry.coordinates?.[0][0])
    : getCoordinates(allCoordinates);

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as CommunesIndicateursDto;
    const sumSurfacesParCommunes = cartographieData
      .filter(
        (el) => el.code_geographique === typedFeature.properties.code_commune
      )
      .map((el) => el.surface_parcourue);
    return {
      fillColor: sumSurfacesParCommunes.length
        ? getColor(Sum(sumSurfacesParCommunes))
        : 'transparent',
      weight: typedFeature.properties.code_commune === codgeo ? 3 : 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 1
    };
  };

  const CustomTooltip = (communeName: string, surfaceParcourue: number) => {
    return `
      <div style="padding: 0.5rem">
        <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 0">
          <p style="font-size: 0.75rem; font-family: Marianne; font-weight: 400; margin: 0">${communeName} : </p> 
          <p style="font-size: 0.75rem; font-family: Marianne; font-weight: 700; margin: 0"> 
            ${isNaN(surfaceParcourue) ? "Pas d'historique d'incendie" : `${Round(1000000 * surfaceParcourue, 0)} m²`}
          </p>
        </div>
      </div>
    `;
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    const communeName =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.libelle_commune
        : undefined;
    const codeGeo =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.code_commune
        : undefined;
    const surfaceParcourue =
      layer.feature && 'properties' in layer.feature
        ? cartographieData
            .filter((el) => el.code_geographique === codeGeo)
            .map((el) => el.surface_parcourue)
            .reduce((a, b) => a + b, 0)
        : undefined;

    layer.setStyle({
      weight: 3,
      color: '#0D2100',
      fillOpacity: 0.9
    });
    layer.bindTooltip(
      CustomTooltip(communeName as string, surfaceParcourue as number),
      {
        direction: e.originalEvent.offsetY > 250 ? 'top' : 'bottom',
        opacity: 0.97
      }
    );
    layer.openTooltip();
    layer.bringToFront();
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    const codeCommune = e.sourceTarget.feature.properties.code_commune;
    layer.setStyle({
      weight: codeCommune === codgeo ? 3 : 1,
      color: '#000000',
      fillOpacity: 1
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
    <>
      {carteCommunesEnriched.length === 0 ? (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      ) : (
        <MapContainer
          center={[centerCoord[1], centerCoord[0]]}
          zoom={commune ? 11 : 10}
          ref={mapRef}
          style={{ height: '500px', width: '100%' }}
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
          <GeoJSON
            key={JSON.stringify(sliderValue)}
            ref={mapRef}
            data={carteCommunesEnriched as unknown as GeoJsonObject}
            style={style}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      )}
    </>
  );
};
