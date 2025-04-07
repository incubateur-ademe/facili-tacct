'use client';

import { CommunesIndicateursDto } from '@/lib/dto';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
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

const colors: { [key: string]: string[] } = {
  'Tous types': ['#FFECEE', '#FF9699', '#E8323B', '#B5000E', '#680000'],
  Inondations: ['#D8EFFA', '#6EC7F7', '#009ADC', '#0072B5', '#003F70'],
  Sécheresse: ['#FFFBE8', '#FEE29C', '#FFCF5E', '#D19800', '#533B00'],
  'Mouvements de terrain': [
    '#FFEEE5',
    '#FFAF84',
    '#F66E19',
    '#B64800',
    '#5E2000'
  ],
  'Retrait-gonflement des argiles': [
    '#F8E0F8',
    '#DB7BDD',
    '#BB43BD',
    '#89078E',
    '#560057'
  ],
  'Cyclones / Tempêtes': [
    '#DAFDFF',
    '#5EEDF3',
    '#00C2CC',
    '#00949D',
    '#005055'
  ],
  'Grêle / neige': ['#EBFDF6', '#6AEEC6', '#00C190', '#009770', '#004F3D'],
  Avalanche: ['#E9E2FA', '#A67FE1', '#7A49BE', '#5524A0', '#270757']
};

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

const getColor = (d: number, max: number, typeCatnat: string) => {
  const colorPalette = colors[typeCatnat];
  return max > 5
    ? d >= (4 / 5) * max
      ? colorPalette[4]
      : d >= (3 / 5) * max
        ? colorPalette[3]
        : d >= (2 / 5) * max
          ? colorPalette[2]
          : d >= (1 / 5) * max
            ? colorPalette[1]
            : colorPalette[0]
    : max === 1
      ? colorPalette[2]
      : max === 2
        ? d === 1
          ? colorPalette[1]
          : colorPalette[3]
        : max === 3
          ? d === 1
            ? colorPalette[0]
            : d === 2
              ? colorPalette[2]
              : colorPalette[4]
          : max === 4
            ? d === 1
              ? colorPalette[0]
              : d === 2
                ? colorPalette[2]
                : d === 3
                  ? colorPalette[3]
                  : colorPalette[4]
            : colorPalette[d - 1];
};

export const MapCatnat = (props: {
  carteCommunes: CommunesIndicateursDto[];
  typeRisqueValue: CatnatTypes;
}) => {
  const { carteCommunes, typeRisqueValue } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapRef = useRef(null);
  const allCoordinates = carteCommunes.map(
    (el) => el.geometry.coordinates?.[0]?.[0]
  );
  const commune = type === 'commune'
    ? carteCommunes.find((el) => el.properties.code_geographique === code)
    : null;

  const centerCoord: number[] = commune
    ? getCentroid(commune.geometry.coordinates?.[0][0])
    : getCoordinates(allCoordinates);

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as CommunesIndicateursDto;
    if (typeRisqueValue === 'Tous types') {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.sumCatnat ? el.properties.catnat?.sumCatnat : 0
        )
      );
      return {
        fillColor: typedFeature?.properties.catnat?.sumCatnat
          ? getColor(
              typedFeature?.properties.catnat?.sumCatnat,
              maxValue,
              typeRisqueValue
            )
          : 'transparent',
        weight: 1,
        opacity: 1,
        color: '#161616',
        fillOpacity: 1
      };
    } else {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.[typeRisqueValue]
            ? (el.properties.catnat?.[typeRisqueValue] as number)
            : 0
        )
      );
      return {
        fillColor: typedFeature?.properties.catnat?.[typeRisqueValue]
          ? getColor(
              typedFeature?.properties.catnat?.[typeRisqueValue] as number,
              maxValue,
              typeRisqueValue
            )
          : 'transparent',
        weight: 1,
        opacity: 1,
        color: '#161616',
        fillOpacity: 1
      };
    }
  };

  const CustomTooltip = (restCatnat: Object, communeName: string) => {
    const keys = Object.keys(restCatnat);
    const values = Object.values(restCatnat);
    const sum = Sum(values);
    return `<div style="padding: 1.25rem">
        <div style="font-size: 0.75rem; font-family: Marianne; font-weight: 700; padding: 0 0 1rem">${communeName} : ${sum} arrêté(s) au total</div>
        ${keys
          .map(
            (el, i) => `
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
          ">${el} : <b> ${values[i]}</b></div>`
          )
          .join(' ')}
      </div>`;
  };

  const mouseOnHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    const communeName =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.libelle_geographique
        : undefined;
    const catnat =
      layer.feature && 'properties' in layer.feature
        ? layer.feature.properties.catnat
        : undefined;
    // const newArray = array.map(({dropAttr1, dropAttr2, ...keepAttrs}) => keepAttrs)
    const { indexName, sumCatnat, ...restCatnat } = catnat || {};
    layer.setStyle({
      weight: 3,
      color: '#0D2100',
      fillOpacity: 0.9
    });
    layer.bindTooltip(CustomTooltip(restCatnat, communeName as string), {
      direction: e.originalEvent.offsetY > 250 ? 'top' : 'bottom',
      opacity: 0.97
    });
    layer.openTooltip();
    layer.bringToFront();
  };

  //make style after hover disappear
  const mouseOutHandler: LeafletMouseEventHandlerFn = (e) => {
    const layer = e.target as FeatureGroup<
      CommunesIndicateursDto['properties']
    >;
    layer.setStyle({
      weight: 1,
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
      {carteCommunes === null ? (
        <GraphDataNotFound code={code ?? libelle} />
      ) : (
        <MapContainer
          center={[centerCoord[1], centerCoord[0]]}
          zoom={10}
          ref={mapRef}
          style={{ height: '500px', width: '100%' }}
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
          <GeoJSON
            ref={mapRef}
            data={carteCommunes as unknown as GeoJsonObject}
            style={style}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      )}
    </>
  );
};
