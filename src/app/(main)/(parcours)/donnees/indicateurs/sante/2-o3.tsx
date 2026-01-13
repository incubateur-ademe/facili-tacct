"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { Body } from "@/design-system/base/Textes";
import { mapStyles } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const SeuilsReglementairesO3Bis = ({
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
            '#E0F9F7',  // 0-0.5 - Bleu très très clair
            0.5, '#C8F3EE',  // 0.5-1
            1, '#A4F5EE',  // 1-2
            2, '#85E6D8',  // 2-3
            3, '#A6E4D3',  // 3-4
            4, '#C4E8A3',  // 4-5 - Vert clair
            5, '#DFEC7B',  // 5-6
            6, '#F5E290',  // 6-8 - Jaune
            8, '#FFD97A',  // 8-10
            10, '#FFBD6B', // 10-12 - Orange clair
            12, '#FFAB66', // 12-15
            15, '#FC9999', // 15-20 - Rose clair
            20, '#F37D7D', // 20-25
            25, '#E06060', // 25-30 - Rose foncé
            30, '#C97189', // 30-35
            35, '#B982B2'  // >=35 - Violet
          ],
          'fill-opacity': 0.7
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
          Nombre de dépassement du seuil journalier 120 µg/m³ de O3 sur 2024
        </Body>
        <div className={styles.mapWrapper}>
          {
            coordonneesCommunes && coordonneesCommunes.codes.length ? (
              <div style={{ position: 'relative' }}>
                <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '10px',
                  backgroundColor: 'white',
                  padding: '10px',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  fontSize: '12px',
                  minWidth: '150px'
                }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '8px', maxWidth: '100px' }}>
                    O3 jours
                  </div>
                  {[
                    { range: '≥ 35', color: '#B982B2' },
                    { range: '30-35', color: '#C97189' },
                    { range: '25-30', color: '#E06060' },
                    { range: '20-25', color: '#F37D7D' },
                    { range: '15-20', color: '#FC9999' },
                    { range: '12-15', color: '#FFAB66' },
                    { range: '10-12', color: '#FFBD6B' },
                    { range: '8-10', color: '#FFD97A' },
                    { range: '6-8', color: '#F5E290' },
                    { range: '5-6', color: '#DFEC7B' },
                    { range: '4-5', color: '#C4E8A3' },
                    { range: '3-4', color: '#A6E4D3' },
                    { range: '2-3', color: '#85E6D8' },
                    { range: '1-2', color: '#A4F5EE' },
                    { range: '0.5-1', color: '#C8F3EE' },
                    { range: '< 0.5', color: '#E0F9F7' }
                  ].map(item => (
                    <div key={item.range} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{
                        width: '20px',
                        height: '15px',
                        backgroundColor: item.color,
                        marginRight: '8px',
                        border: '1px solid #ddd'
                      }}></div>
                      <span>{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
          }
        </div>
      </div>
    </>
  );
};
