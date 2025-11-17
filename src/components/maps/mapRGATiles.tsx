"use client";

import { BoundsFromCollection } from '@/components/maps/components/boundsFromCollection';
import { CommunesIndicateursDto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import { Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { RefObject, useEffect } from 'react';
import { RgaMapLegend } from './legends/datavizLegends';
import { LegendCompColor } from './legends/legendComp';
import styles from './maps.module.scss';

export const MapRGATiles = (props: {
  carteCommunes: CommunesIndicateursDto[];
  mapRef: RefObject<maplibregl.Map | null>;
  mapContainer: RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
}) => {
  const { carteCommunes, mapRef, mapContainer, style } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  
  const carteCommunesFiltered = type === "ept"
    ? carteCommunes.filter(el => el.properties.ept === libelle)
    : carteCommunes;
  
  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);

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
      map.addSource('rga-tiles', {
        type: 'vector',
        tiles: ['https://facili-tacct-dev.s3.fr-par.scw.cloud/app/rga/tiles/{z}/{x}/{y}.pbf'],
        minzoom: 4,
        maxzoom: 13
      });

      // Add fill layer for RGA zones with color based on alea level
      map.addLayer({
        id: 'rga-fill',
        type: 'fill',
        source: 'rga-tiles',
        'source-layer': 'rga',
        paint: {
          'fill-color': [
            'match',
            ['get', 'alea'],
            'Moyen', '#F66E19',
            'Faible', '#FFCF5E',
            'Fort', '#E8323B',
            'white'
          ],
          'fill-opacity': 0.45
        }
      });

      // Add communes outline
      map.addSource('communes-outline', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: carteCommunesFiltered.map(commune => ({
            type: 'Feature' as const,
            geometry: commune.geometry as Geometry,
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
          'line-width': 1
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
  }, [enveloppe, carteCommunesFiltered]);

  return (
    <div style={{ position: 'relative', ...style }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
      <div
        className={styles.legendRGA}
        style={{ width: 'auto', justifyContent: 'center' }}
      >
        <LegendCompColor legends={RgaMapLegend} />
      </div>
    </div>
  );
};
