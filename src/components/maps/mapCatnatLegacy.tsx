'use client';

import { CommunesIndicateursDto } from '@/lib/dto';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { eptRegex } from '@/lib/utils/regex';
import { type Any } from '@/lib/utils/types';
import { Feature, GeoJsonObject } from 'geojson';
import {
  FeatureGroup,
  LatLngBoundsExpression,
  Layer,
  LeafletMouseEventHandlerFn,
  type StyleFunction
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { GraphDataNotFound } from '../graph-data-not-found';
import { BoundsFromCollection } from './components/boundsFromCollection';
import { CatnatTooltip } from './components/mapTooltips';
import { colorsCatnat } from './legends/legendCatnat';

const getColor = (d: number, max: number, typeCatnat: string) => {
  const colorPalette = colorsCatnat[typeCatnat];
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
  const carteTerritoire =
    type === 'ept' && eptRegex.test(libelle)
      ? carteCommunes.filter((e) => e.properties.ept === libelle)
      : carteCommunes;
  const enveloppe = BoundsFromCollection(carteTerritoire, type, code);

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
    layer.bindTooltip(CatnatTooltip(restCatnat, communeName as string), {
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
        <GraphDataNotFound code={code} libelle={libelle} />
      ) : (
        <MapContainer
          ref={mapRef}
          style={{ height: '500px', width: '100%' }}
          attributionControl={false}
          zoomControl={false}
          bounds={enveloppe as LatLngBoundsExpression}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            ref={mapRef}
            data={carteTerritoire as unknown as GeoJsonObject}
            style={style}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      )}
    </>
  );
};
