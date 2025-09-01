
import { ClcMapper } from '@/lib/mapper/clc';
import { CLCTerritoires } from '@/lib/postgres/models';
import { mapStyles } from 'carte-facile';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RefObject, useEffect, useMemo } from 'react';
import { BoundsFromCollectionCLC } from './components/boundsFromCollection';
import { vegetalisationColors } from './legends/datavizLegends';

const getColor = (d: string) => {
  const color = Object.entries(vegetalisationColors)
    .find((el) => el[0] === d)
    ?.at(1);
  return color;
};

export const MapCLC = (
  props: {
    clc: CLCTerritoires[];
    mapRef: RefObject<maplibregl.Map | null>;
    mapContainer: RefObject<HTMLDivElement | null>;
  }
) => {
  const { clc, mapRef, mapContainer } = props;
  const clcParsed = useMemo(() => clc.map(ClcMapper), [clc]);
  const enveloppe = BoundsFromCollectionCLC(clcParsed);

  const colorExpression = useMemo(() => {
    const expression: Array<string | Array<string | Array<string>>> = ['case'];
    clcParsed.forEach((feature) => {
      const color = getColor(feature.properties.label);
      expression.push(
        ['==', ['get', 'label'], feature.properties.label],
        color as string
      );
    });
    expression.push('transparent');
    return expression;
  }, [clcParsed]);


  const geoJsonData = useMemo(() => {
    return {
      type: "FeatureCollection" as const,
      features: clcParsed.map(feature => ({
        type: "Feature",
        geometry: {
          ...feature.geometry,
          type: feature.geometry.type
        },
        properties: feature.properties,
        id: feature.properties.label
      })) as Feature<Geometry, GeoJsonProperties>[]
    };
  }, [clcParsed]);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    map.on('load', () => {
      if (
        enveloppe &&
        Array.isArray(enveloppe) &&
        enveloppe.length > 1 &&
        Array.isArray(enveloppe[0]) &&
        enveloppe[0].length === 2
      ) {
        const lons = enveloppe.map((coord: number[]) => coord[1]);
        const lats = enveloppe.map((coord: number[]) => coord[0]);
        const minLng = Math.min(...lons);
        const maxLng = Math.max(...lons);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);
        map.fitBounds(
          [[minLng, minLat], [maxLng, maxLat]],
          { padding: 20 },
        );
      }

      map.addSource('clc-communes', {
        type: 'geojson',
        data: geoJsonData,
        generateId: false
      });

      map.addLayer({
        id: 'clc-fill',
        type: 'fill',
        source: 'clc-communes',
        paint: {
          'fill-color': colorExpression as unknown as string,
          'fill-opacity': 0.6
        }
      });

      map.addControl(new maplibregl.NavigationControl(), 'top-right');
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [geoJsonData, colorExpression, enveloppe]);

  useEffect(() => {
    let map = mapRef.current;
    if (!map || !mapContainer.current || !map.style) return;
    setTimeout(() => {
      map.setPaintProperty(
        'clc-fill',
        'fill-color',
        colorExpression
      );
    }, 200);
  }, [colorExpression]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};
