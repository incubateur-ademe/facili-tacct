"use client";

import { CommunesIndicateursDto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { RefObject, useEffect } from 'react';
import { BoundsFromCollection } from './components/boundsFromCollection';

export const MapDebroussaillementTiles = (
  props: {
    carteContours: CommunesIndicateursDto[];
    mapRef: RefObject<maplibregl.Map | null>;
    mapContainer: RefObject<HTMLDivElement | null>;
  }
) => {
  const { carteContours, mapRef, mapContainer } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const enveloppe = BoundsFromCollection(carteContours, type, code);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    map.on('load', () => {
      // Fit bounds
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

      // Add vector tiles source
      map.addSource('debroussaillement-tiles', {
        type: 'vector',
        tiles: ['https://facili-tacct-dev.s3.fr-par.scw.cloud/app/debroussaillement/tiles/{z}/{x}/{y}.pbf'],
        minzoom: 4,
        maxzoom: 13
      });

      // Add fill layer for debroussaillement zones
      map.addLayer({
        id: 'debroussaillement-fill',
        type: 'fill',
        source: 'debroussaillement-tiles',
        'source-layer': 'debroussaillement',
        paint: {
          'fill-color': '#F83DD9',
          'fill-opacity': 0.8
        }
      });

      // Add communes outline
      map.addSource('communes-outline', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: carteContours.map(commune => ({
            type: 'Feature' as const,
            geometry: commune.geometry as import('geojson').Geometry,
            properties: commune.properties,
            id: commune.properties.code_geographique
          }))
        }
      });

      map.addLayer({
        id: 'communes-outline-layer',
        type: 'line',
        source: 'communes-outline',
        paint: {
          'line-color': '#161616',
          'line-width': 1,
          'line-opacity': 1
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
  }, [enveloppe, carteContours]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};
