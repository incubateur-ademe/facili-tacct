"use client";

import { RetardScroll } from '@/hooks/RetardScroll';
import { mapStyles } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { RefObject, useEffect } from 'react';

export const MapCLCTiles = (
  props: {
    communesCodes: string[];
    boundingBox?: [[number, number], [number, number]];
    mapRef: RefObject<maplibregl.Map | null>;
    mapContainer: RefObject<HTMLDivElement | null>;
  }
) => {
  const { communesCodes, boundingBox, mapRef, mapContainer } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;
    try { map.scrollZoom.disable(); } catch (e) { /* noop */ }

    map.on('load', () => {
      if (boundingBox) {
        map.fitBounds(boundingBox, { padding: 20 });
      }

      // Add vector tiles source
      map.addSource('clc-tiles', {
        type: 'vector',
        tiles: ['https://facili-tacct-dev.s3.fr-par.scw.cloud/app/clc/tiles/{z}/{x}/{y}.pbf'],
        minzoom: 4,
        maxzoom: 13
      });

      // Add fill layer for CLC with colors based on label
      map.addLayer({
        id: 'clc-fill',
        type: 'fill',
        source: 'clc-tiles',
        'source-layer': 'clc',
        filter: ['in', ['get', 'code_geographique'], ['literal', communesCodes]],
        paint: {
          'fill-color': [
            'match',
            ['get', 'legend'],
            'Continuous urban fabric', '#ffff99',
            'Discontinuous urban fabric', '#ffff99',
            'Industrial or commercial units', '#ffff99',
            'Road and rail networks and associated land', '#ffff99',
            'Port areas', '#ffff99',
            "Airports", '#ffff99',
            'Mineral extraction sites', '#ffff99',
            'Dump sites', '#ffff99',
            'Construction sites', '#ffff99',
            'Green urban areas', '#7fc97f',
            'Sport and leisure facilities', '#ffff99',
            'Non-irrigated arable land', '#fdc086',
            'Permanently irrigated land', '#fdc086',
            'Rice fields', '#fdc086',
            "Vineyards", '#fdc086',
            'Fruit trees and berry plantations', '#fdc086',
            'Olive groves', '#fdc086',
            "Pastures", '#fdc086',
            'Annual crops associated with permanent crops', '#fdc086',
            'Complex cultivation patterns', '#fdc086',
            'Land principally occupied by agriculture, with significant areas of natural vegetation', '#fdc086',
            'Agro-forestry areas', '#fdc086',
            'Broad-leaved forest', '#7fc97f',
            'Coniferous forest', '#7fc97f',
            'Mixed forest', '#7fc97f',
            'Natural grasslands', '#7fc97f',
            'Moors and heathland', '#7fc97f',
            'Sclerophyllous vegetation', '#7fc97f',
            'Transitional woodland-shrub', '#7fc97f',
            'Beaches, dunes, sands', '#7fc97f',
            'Bare rocks', '#7fc97f',
            'Sparsely vegetated areas', '#7fc97f',
            'Burnt areas', '#7fc97f',
            'Glaciers and perpetual snow', '#7fc97f',
            'Inland marshes', '#beaed4',
            'Peat bogs', '#beaed4',
            'Salt marshes', '#beaed4',
            "Salines", '#beaed4',
            'Intertidal flats', '#beaed4',
            'Water courses', '#386cb0',
            'Water bodies', '#386cb0',
            'Coastal lagoons', '#386cb0',
            "Estuaries", '#386cb0',
            'Sea and ocean', '#386cb0',
            'white'
          ],
          'fill-opacity': 0.6
        }
      });

      // Add communes outline
      map.addSource('communes-outline', {
        type: 'vector',
        tiles: ['https://facili-tacct-dev.s3.fr-par.scw.cloud/app/communes/tiles/{z}/{x}/{y}.pbf'],
        minzoom: 4,
        maxzoom: 13
      });

      map.addLayer({
        id: 'communes-outline-layer',
        type: 'line',
        source: 'communes-outline',
        'source-layer': 'contour_communes',
        filter: ['in', ['get', 'code_geographique'], ['literal', communesCodes]],
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
  }, [communesCodes, boundingBox]);

  // Ref local pour le RetardScroll
  const localContainerRef = mapContainer as RefObject<HTMLElement>;

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
      <RetardScroll mapRef={mapRef} containerRef={localContainerRef} delay={300} />
    </div>
  );
};
