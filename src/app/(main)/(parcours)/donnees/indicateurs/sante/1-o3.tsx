"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { Body } from "@/design-system/base/Textes";
import { mapStyles } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const SeuilsReglementairesO3 = ({
  coordonneesCommunes
}: {
  coordonneesCommunes: { codes: string[], bbox: { minLng: number, minLat: number, maxLng: number, maxLat: number } } | null;
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !coordonneesCommunes) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    map.on('load', () => {
      if (coordonneesCommunes?.bbox) {
        map.fitBounds(
          [[coordonneesCommunes.bbox.minLng, coordonneesCommunes.bbox.minLat],
          [coordonneesCommunes.bbox.maxLng, coordonneesCommunes.bbox.maxLat]],
          { padding: 20 }
        );
      }

      // Charger le GeoJSON directement
      map.addSource('o3-source', {
        type: 'geojson',
        data: 'https://facili-tacct-dev.s3.fr-par.scw.cloud/app/seuils_reglementaires_o3/test_fixed.geojson'
      });

      map.addLayer({
        id: 'o3-layer',
        type: 'fill',
        source: 'o3-source',
        paint: {
          'fill-color': [
            'step',
            ['get', 'valeur'],
            '#A4F5EE',  // 0-1
            1, '#A6E4D3',  // 1-4
            4, '#F5E290',  // 4-10
            10, '#FC9999', // 10-25
            25, '#C97189', // 25-35
            35, '#B982B2'  // >=35
          ],
          'fill-opacity': 0.7,
          'fill-antialias': false
        }
      });

      // Contours des communes
      map.addSource('communes-tiles', {
        type: 'vector',
        tiles: [`${process.env.NEXT_PUBLIC_SCALEWAY_BUCKET_URL}/communes/tiles/{z}/{x}/{y}.pbf`],
        minzoom: 4,
        maxzoom: 13
      });

      map.addLayer({
        id: 'communes-outline',
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
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coordonneesCommunes]);

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div className={styles.chiffreDynamiqueWrapper} style={{ alignItems: 'center' }}>
          <div className={styles.text}>
            <Body weight='bold' style={{ color: "var(--gris-dark)" }} >
              Texte dynamique des seuils réglementaires O3
            </Body>
          </div>
        </div>
        <Body size='sm' style={{ marginTop: '1rem' }}>
          Texte statique sur les seuils réglementaires O3.
        </Body>
        <div className={styles.mapWrapper}>
          {
            coordonneesCommunes && coordonneesCommunes.codes.length ? (
              <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
            ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
          }
        </div>
      </div>
    </>
  );
};
