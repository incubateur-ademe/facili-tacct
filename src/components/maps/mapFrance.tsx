'use client';

import moustiqueTigreGeoJSON from '@/lib/data/moustique_tigre_departements.json';
import 'carte-facile/carte-facile.css';
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl, { ExpressionSpecification } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RefObject, useEffect, useState } from 'react';

const BLANK_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {},
  layers: [{ id: 'background', type: 'background', paint: { 'background-color': '#ffffff' } }]
};

const COULEUR_PRESENT = '#FF8094';
const COULEUR_ABSENT = '#f5f5f5';

const casToCouleur = (cas: number): string => {
  if (cas === 0) return '#ffffff';
  if (cas === 1) return '#FFCD72';
  if (cas <= 9) return '#F8B334';
  if (cas <= 19) return '#CF911E';
  if (cas <= 39) return '#A6710E';
  return '#7E5202';
};

export const MapJson = (props: {
  mapRef: RefObject<maplibregl.Map | null>;
  mapContainer: RefObject<HTMLDivElement | null>;
  annee: number;
  casParDepartement?: Record<string, number>;
}) => {
  const { mapRef, mapContainer, annee, casParDepartement } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: BLANK_STYLE,
      attributionControl: false,
      interactive: false,
      bounds: [[-5.5, 41.2], [10.0, 51.5]],
      fitBoundsOptions: { padding: 0 }
    });
    mapRef.current = map;

    map.on('load', () => {
      map.addSource('departements', {
        type: 'geojson',
        data: moustiqueTigreGeoJSON as FeatureCollection<Geometry, GeoJsonProperties>
      });

      map.addLayer({
        id: 'departements-fill',
        type: 'fill',
        source: 'departements',
        paint: {
          'fill-color': COULEUR_ABSENT,
          'fill-opacity': 0.8
        }
      });

      map.addLayer({
        id: 'departements-outline',
        type: 'line',
        source: 'departements',
        paint: {
          'line-color': '#161616',
          'line-width': 0.5
        }
      });

      setIsLoaded(true);
    });

    const resizeObserver = new ResizeObserver(() => map.resize());
    resizeObserver.observe(mapContainer.current);

    return () => {
      resizeObserver.disconnect();
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    let colorExpression: ExpressionSpecification | string;

    if (casParDepartement) {
      const entries = Object.entries(casParDepartement);
      if (entries.length === 0) {
        colorExpression = '#ffffff';
      } else {
        const matchArgs: (ExpressionSpecification | string)[] = ['match', ['get', 'code']];
        for (const [code, cas] of entries) {
          matchArgs.push(code, casToCouleur(cas));
        }
        matchArgs.push('#ffffff');
        colorExpression = matchArgs as unknown as ExpressionSpecification;
      }
    } else {
      colorExpression = [
        'case',
        ['in', String(annee), ['get', 'annees']],
        COULEUR_PRESENT,
        COULEUR_ABSENT
      ];
    }

    mapRef.current.setPaintProperty('departements-fill', 'fill-color', colorExpression);
  }, [annee, isLoaded, casParDepartement]);

  return (
    <div style={{ position: 'relative', aspectRatio: '1.146' }}>
      <div ref={mapContainer} style={{ position: 'absolute', inset: 0 }} />
    </div>
  );
};
