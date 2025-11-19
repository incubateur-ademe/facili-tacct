"use client";

import { mapStyles } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RefObject, useEffect } from 'react';

export const MapDebroussaillementTiles = (
  props: {
    coordonneesCommunes: { codes: string[], bbox: { minLng: number, minLat: number, maxLng: number, maxLat: number } } | null;
    mapRef: RefObject<maplibregl.Map | null>;
    mapContainer: RefObject<HTMLDivElement | null>;
  }
) => {
  const { coordonneesCommunes, mapRef, mapContainer } = props;

  useEffect(() => {
    if (!mapContainer.current || !coordonneesCommunes) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    map.on('load', () => {

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
        filter: ['in', ['get', 'code_geographique'], ['literal', coordonneesCommunes.codes]],
        paint: {
          'fill-color': '#F83DD9',
          'fill-opacity': 0.8
        }
      });

      // Add communes outline with vector tiles
      map.addSource('communes-tiles', {
        type: 'vector',
        tiles: ['https://facili-tacct-dev.s3.fr-par.scw.cloud/app/communes/tiles/{z}/{x}/{y}.pbf'],
        minzoom: 4,
        maxzoom: 13,
      });

      map.addLayer({
        id: 'communes-outline-layer',
        type: 'line',
        source: 'communes-tiles',
        'source-layer': 'contour_communes',
        filter: ['in', ['get', 'code_geographique'], ['literal', coordonneesCommunes.codes]],
        paint: {
          'line-color': '#161616',
          'line-width': 1,
          'line-opacity': 1
        }
      });

      // Appliquer le fitBounds après un court délai pour l'effet de zoom
      setTimeout(() => {
        map.fitBounds(
          [
            [coordonneesCommunes.bbox.minLng, coordonneesCommunes.bbox.minLat],
            [coordonneesCommunes.bbox.maxLng, coordonneesCommunes.bbox.maxLat]
          ],
          { padding: 20 }
        );
      }, 100);

      map.addControl(new maplibregl.NavigationControl(), 'top-right');
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coordonneesCommunes]); return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};
