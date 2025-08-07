'use client';

import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes } from '@/lib/postgres/models';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl, { MapSourceDataEvent } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Loader } from '../loader';
import { BoundsFromCollection } from './components/boundsFromCollection';
import { CeremaFallbackError, handleCeremaFallback } from './components/ceremaLCZFallback';
import { LczLegend, LczLegendOpacity70 } from './legends/datavizLegends';
import { LegendCompColorLCZ } from './legends/legendComp';
import styles from './maps.module.scss';

export const MapLCZNouveauParcours = ({
  carteCommunes,
  isLoading,
  isLczCovered
}: {
  carteCommunes: CarteCommunes[];
  isLoading: boolean;
  isLczCovered: boolean | undefined;
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const [zoomMap, setZoomMap] = useState(0);
  const [isTilesLoading, setIsTilesLoading] = useState(false);
  const [serviceStatus, setServiceStatus] = useState({
    ceremaAvailable: true,
    fallbackToGlobal: false,
    errorMessage: null as string | null
  });
  const hasTriedFallback = useRef(false);
  const carteCommunesEnriched = carteCommunes.map(CommunesIndicateursMapper);
  const enveloppe = BoundsFromCollection(carteCommunesEnriched, type, code);
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || isLczCovered === undefined) return;
    hasTriedFallback.current = false;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    const handleMapError = (e: ErrorEvent) => {
      console.error('Map error:', e.error);
      // Check si on a une erreur du Cerema
      if (e.error?.message?.includes('cerema') ||
        e.error?.message?.includes('cartagene') ||
        e.error?.message?.includes('tile') ||
        e.error?.message?.includes('MapServer')) {
        handleCeremaFallback(map, hasTriedFallback, setIsTilesLoading, setServiceStatus);
      }
    };

    const handleSourceData = (e: MapSourceDataEvent) => {
      if ((e.sourceId === 'cerema-lcz-tile' || e.sourceId === 'lcz-wms') &&
        e.isSourceLoaded === false && e.tile && e.tile.state === 'errored') {
        handleCeremaFallback(map, hasTriedFallback, setIsTilesLoading, setServiceStatus);
      }
      if (e.isSourceLoaded &&
        (e.sourceId === 'lcz-generator' ||
          e.sourceId === 'lcz-generator-fallback')) {
        setIsTilesLoading(false);
      }
    };
    map.on('error', handleMapError);
    map.on('sourcedata', handleSourceData);

    // ajout d'un timeout pour éviter de bloquer l'affichage
    const loadingTimeout = setTimeout(() => {
      setIsTilesLoading(false);
    }, 10000);

    if (!isLczCovered) {
      map.on('load', () => {
        setIsTilesLoading(true);
        try {
          map.addSource('lcz-generator', {
            type: 'raster',
            tiles: [
              'https://lcz-generator.rub.de/tms/global-map-tiles/v3/{z}/{x}/{y}.png'
            ],
            tileSize: 256
          });
          map.addLayer({
            id: 'lcz-generator-layer',
            type: 'raster',
            source: 'lcz-generator',
            paint: { 'raster-opacity': 0.7 }
          });
        } catch (error) {
          console.error('Error adding LCZ generator layer:', error);
          setIsTilesLoading(false);
        }

        try {
          map.addSource('communes-outline', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: carteCommunesEnriched as Feature<Geometry, GeoJsonProperties>[]
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
        } catch (error) {
          console.error('Error adding communes outline layer:', error);
        }

        if (enveloppe && Array.isArray(enveloppe) && enveloppe.length > 1 && Array.isArray(enveloppe[0]) && enveloppe[0].length === 2) {
          const lons = enveloppe.map(coord => coord[1]);
          const lats = enveloppe.map(coord => coord[0]);
          const minLng = Math.min(...lons);
          const maxLng = Math.max(...lons);
          const minLat = Math.min(...lats);
          const maxLat = Math.max(...lats);
          map.fitBounds(
            [
              [minLng, minLat],
              [maxLng, maxLat]
            ],
            { padding: 20 }
          );
        }
      });
    } else {
      map.on('load', () => {
        try {
          map.addSource('cerema-lcz-tile', {
            type: 'raster',
            tiles: [
              'https://cartagene.cerema.fr/server/rest/services/Hosted/l_lcz_spot_000_2022_tl/MapServer/tile/{z}/{y}/{x}'
            ],
            tileSize: 256,
            attribution: '&copy; <a href="https://cartagene.cerema.fr/">Cerema</a>'
          });
          map.addLayer({
            id: 'cerema-lcz-tile-layer',
            type: 'raster',
            source: 'cerema-lcz-tile',
            paint: { 'raster-opacity': 1 },
            maxzoom: 13.5
          });

          map.addSource('lcz-wms', {
            type: 'raster',
            tiles: [
              'https://cartagene.cerema.fr/server/services/l_lcz_spot_000_2022_mil/MapServer/WMSServer?service=WMS&request=GetMap&layers=0&styles=&format=image/png&transparent=true&version=1.3.0&width=256&height=256&crs=EPSG:3857&bbox={bbox-epsg-3857}'
            ],
            tileSize: 256,
          });
          map.addLayer({
            id: 'lcz-wms-layer',
            type: 'raster',
            source: 'lcz-wms',
            paint: { 'raster-opacity': 0.7 },
            minzoom: 13.5
          });
          map.addSource('communes-outline', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: carteCommunesEnriched as Feature<Geometry, GeoJsonProperties>[]
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
        } catch (error) {
          console.error('Error adding Cerema layers:', error);
          setIsTilesLoading(false);
          handleCeremaFallback(map, hasTriedFallback, setIsTilesLoading, setServiceStatus);
        }
        if (enveloppe && Array.isArray(enveloppe) && enveloppe.length > 1 && Array.isArray(enveloppe[0]) && enveloppe[0].length === 2) {
          const lons = enveloppe.map(coord => coord[1]);
          const lats = enveloppe.map(coord => coord[0]);
          const minLng = Math.min(...lons);
          const maxLng = Math.max(...lons);
          const minLat = Math.min(...lats);
          const maxLat = Math.max(...lats);
          map.fitBounds(
            [
              [minLng, minLat],
              [maxLng, maxLat]
            ],
            { padding: 20 }
          );
        }
      });

      map.on('click', async (e) => {
        if (map.getZoom() < 13.5) return;
        const point = e.lngLat;

        const lngLatToMeters = (lng: number, lat: number) => {
          const x = lng * 20037508.34 / 180;
          let y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
          y = y * 20037508.34 / 180;
          return { x, y };
        };

        const { x, y } = lngLatToMeters(point.lng, point.lat);
        const size = 10;
        const xmin = x - size / 2;
        const xmax = x + size / 2;
        const ymin = y - size / 2;
        const ymax = y + size / 2;
        const geometry = encodeURIComponent(JSON.stringify({
          spatialReference: { latestWkid: 3857, wkid: 102100 },
          xmin, ymin, xmax, ymax
        }));

        const url = `https://cartagene.cerema.fr/server/rest/services/l_lcz_spot_000_2022_mil/MapServer/0/query?f=json&geometry=${geometry}&maxAllowableOffset=4.777314267945864&outFields=are,bsr,bur,hre,identifier,lcz,ror,ver,vhr,war,FID&spatialRel=esriSpatialRelIntersects&where=1%3D1&geometryType=esriGeometryEnvelope&inSR=102100&outSR=102100`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.features && data.features.length > 0) {
            const props = data.features[0].attributes;
            const labels: Record<string, string> = {
              are: 'Surface moyenne des bâtiments (m²)',
              FID: 'FID',
              lcz: 'LCZ',
              bur: 'Taux de surface bâtie (%)',
              hre: 'Hauteur moyenne des bâtiments (m)',
              ror: 'Taux de surface imperméable (%)',
              ver: 'Taux de végétation (%)',
              vhr: 'Part de végétation arborée (%)',
              bsr: 'Taux de sol nu perméable (%)',
              war: 'Taux de surface en eau (%)',
            };
            // const identifier = props.identifier || '';
            const lcz = props.lcz || '';
            let content = `
              <h5 style='font-size:18px; margin:0px;'>
                <b>LCZ ${lcz}</b>
              </h5>
            `;
            const order = ['are', 'bur', 'hre', 'ror', 'ver', 'vhr', 'bsr', 'war'];
            for (const key of order) {
              if (props[key] !== undefined) {
                content += `<b>${labels[key]}</b> : ${props[key]}<br/>`;
              }
            }
            new maplibregl.Popup({
              className: 'custom-popup'
            })
              .setLngLat([point.lng, point.lat])
              .setHTML(content)
              .addTo(map);
          } else {
            new maplibregl.Popup()
              .setLngLat([point.lng, point.lat])
              .setHTML('Aucune donnée.')
              .addTo(map);
          }
        } catch (err) {
          new maplibregl.Popup()
            .setLngLat([point.lng, point.lat])
            .setHTML('Erreur lors de la récupération des données.')
            .addTo(map);
        }
      });

      map.on('zoom', () => {
        if (!hasTriedFallback.current) {
          setZoomMap(map.getZoom());
          try {
            if (map.getZoom() >= 13.5) {
              map.getCanvas().style.cursor = 'pointer';
              if (map.getLayer('cerema-lcz-tile-layer')) {
                map.setLayoutProperty('cerema-lcz-tile-layer', 'visibility', 'none');
              }
            } else {
              map.getCanvas().style.cursor = '';
              if (map.getLayer('cerema-lcz-tile-layer')) {
                map.setLayoutProperty('cerema-lcz-tile-layer', 'visibility', 'visible');
              }
            }
          } catch (error) {
            console.error('Error toggling layer visibility:', error);
          }
        }
      });
    }

    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    return () => {
      if (mapRef.current) {
        // mapRef.current.remove();
        mapRef.current = null;
      }
      map.off('error', handleMapError);
      map.off('sourcedata', handleSourceData);
      clearTimeout(loadingTimeout);
      setIsTilesLoading(false);
      map.remove();
    };
  }, [isLczCovered]);

  return (
    <div style={{ position: 'relative' }}>
      <style jsx global>{`
        .custom-popup .maplibregl-popup-content {
          font-family: 'Marianne' !important;
          background-color: #ffffff !important;
          border-radius: 0.5rem !important;
          padding: 20px !important;
          position: relative !important;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 18, 0.16) !important;
          min-width: max-content !important;
          font-size: 12px !important;
        }
        .custom-popup .maplibregl-popup-tip {
          border-top-color: #ffffff !important;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <CeremaFallbackError
        serviceStatus={serviceStatus}
        setServiceStatus={setServiceStatus}
        styles={styles}
      />
      {isLoading ? <Loader /> : (
        <>
          <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
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
          <div className='lczLegendWrapper'>
            <div className={styles.legendLCZWrapperNouveauParcours}>
              <div
                className={styles.legendLCZNouveauParcours}
              >
                <h3>- Espaces bâtis -</h3>
                <LegendCompColorLCZ
                  legends={((zoomMap >= 13.5 || !isLczCovered) ? LczLegendOpacity70 : LczLegend).slice(0, 9)}
                />
              </div>
              <div
                className={styles.legendLCZ}
                style={{ borderTop: "solid 1px var(--gris-medium)", padding: '1rem 0' }}
              >
                <h3>- Espaces non bâtis -</h3>
                <LegendCompColorLCZ legends={((zoomMap >= 13.5 || !isLczCovered) ? LczLegendOpacity70 : LczLegend).slice(9, 16)} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MapLCZNouveauParcours;


