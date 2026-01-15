"use client";

import { Any } from '@/lib/utils/types';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RefObject, useEffect, useRef, useState } from 'react';
import { getO3Color, O3Tooltip } from './components/tooltips';
import styles from './maps.module.scss';

export const MapTilesFrance = (props: {
  coordonneesCommunes: { codes: string[], bbox: { minLng: number, minLat: number, maxLng: number, maxLat: number } } | null;
  mapRef: RefObject<maplibregl.Map | null>;
  mapContainer: RefObject<HTMLDivElement | null>;
  bucketUrl: string;
  layer: string;
  paint: { [key: string]: Any }
  legend?: React.ReactNode;
  style?: React.CSSProperties;
  onLoadingChange?: (isLoading: boolean) => void;
}) => {
  const {
    coordonneesCommunes,
    mapRef,
    mapContainer,
    style,
    bucketUrl,
    layer,
    paint,
    legend,
    onLoadingChange
  } = props;

  const [isTilesLoading, setIsTilesLoading] = useState(true);
  const hasLoadedOnce = useRef(false);

  useEffect(() => {
    if (!mapContainer.current || !coordonneesCommunes) return;

    setIsTilesLoading(true);
    hasLoadedOnce.current = false;
    onLoadingChange?.(true);

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    const loadingTimeout = setTimeout(() => {
      setIsTilesLoading(false);
      onLoadingChange?.(false);
    }, 10000);

    map.on('load', () => {
      if (coordonneesCommunes?.bbox) {
        setTimeout(() => {
          map.fitBounds(
            [[coordonneesCommunes.bbox.minLng, coordonneesCommunes.bbox.minLat],
            [coordonneesCommunes.bbox.maxLng, coordonneesCommunes.bbox.maxLat]],
            { padding: 20 }
          );
        }, 100);
      }

      map.addSource(`${bucketUrl}-tiles`, {
        type: 'vector',
        tiles: [`${process.env.NEXT_PUBLIC_SCALEWAY_BUCKET_URL}/${bucketUrl}/tiles/{z}/{x}/{y}.pbf`],
        minzoom: 4,
        maxzoom: 13
      });

      map.addLayer({
        id: `${bucketUrl}-fill`,
        type: 'fill',
        source: `${bucketUrl}-tiles`,
        'source-layer': layer,
        paint: paint
      });

      // Add communes outline avec tuiles vectorielles
      map.addSource('communes-tiles', {
        type: 'vector',
        tiles: [`${process.env.NEXT_PUBLIC_SCALEWAY_BUCKET_URL}/communes/tiles/{z}/{x}/{y}.pbf`],
        minzoom: 4,
        maxzoom: 13
      });

      map.addLayer({
        id: 'communes-outline-layer',
        type: 'line',
        source: 'communes-tiles',
        'source-layer': 'contour_communes',
        filter: ['in', ['get', 'code_geographique'], ['literal', coordonneesCommunes.codes]],
        paint: {
          'line-color': '#161616',
          'line-width': 1
        }
      });

      map.addControl(new maplibregl.NavigationControl(), 'top-right');

      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      map.on('mousemove', `${bucketUrl}-fill`, (e) => {
        map.getCanvas().style.cursor = 'pointer';

        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const valeur = feature.properties?.valeur;

          if (valeur !== undefined) {
            const color = getO3Color(valeur);
            popup
              .setLngLat(e.lngLat)
              .setHTML(O3Tooltip(valeur, color))
              .addTo(map);
          }
        }
      });

      // Retirer le popup quand on sort de la zone
      map.on('mouseleave', `${bucketUrl}-fill`, () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });

      map.on('idle', () => {
        if (!hasLoadedOnce.current) {
          setIsTilesLoading(false);
          onLoadingChange?.(false);
          hasLoadedOnce.current = true;
        }
      });
    });

    return () => {
      clearTimeout(loadingTimeout);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coordonneesCommunes]);

  return (
    <div style={{ position: 'relative', ...style }}>
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
      {isTilesLoading && (
        <div className={styles.tileLoadingWrapper}>
          <div style={{
            width: '16px',
            height: '16px',
            border: '2px solid #f3f3f3',
            borderTop: '2px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            alignSelf: 'center',
            marginRight: '0.5rem'
          }} />
          Chargement des données cartographiques...
        </div>
      )}
      <div
        className={styles.legendRGA}
        style={{ width: 'auto', justifyContent: 'center' }}
      >
        {legend && legend}
      </div>
    </div>
  );
};
