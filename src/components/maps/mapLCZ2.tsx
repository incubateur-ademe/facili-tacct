'use client';

import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes } from '@/lib/postgres/models';
import { GetLczCouverture } from '@/lib/queries/databases/inconfortThermique';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Loader } from '../loader';
import { BoundsFromCollection } from './components/boundsFromCollection';

export const MapLCZ2 = ({
  carteCommunes
}: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const [isLoading, setIsLoading] = useState(true);
  const [isLczCovered, setIsLczCovered] = useState<Boolean | undefined>(undefined);
  const carteCommunesEnriched = carteCommunes.map(CommunesIndicateursMapper);
  const enveloppe = BoundsFromCollection(carteCommunesEnriched, type, code);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void (async () => {
      const temp = await GetLczCouverture(code, libelle, type);
      setIsLczCovered(temp);
      setIsLoading(false);
    })()
  }, [code]);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    
    if (!isLczCovered) {
      map.on('load', () => {
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
          paint: { 'raster-opacity': 0.5 }
        });
        // Add a GeoJSON source and outline layer for carteCommunesEnriched
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
      // Source : https://cartagene.cerema.fr/server/rest/services/l_lcz_spot_000_2022_mil/MapServer
      map.on('load', () => {
        // Add Cerema LCZ raster tile layer between base and lcz-wms
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
          paint: { 'raster-opacity': 1 }
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
          paint: { 'raster-opacity': 0.7 }
        });
        // Add a GeoJSON source and outline layer for carteCommunesEnriched
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
        // Fit to enveloppe if available
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
        // Convert lngLat to EPSG:3857 (Web Mercator meters)
        const lngLatToMeters = (lng: number, lat: number) => {
          const x = lng * 20037508.34 / 180;
          let y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
          y = y * 20037508.34 / 180;
          return { x, y };
        };
        const { x, y } = lngLatToMeters(point.lng, point.lat);
        const size = 10; // meters
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
            // Map attribute keys to display names
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
            const identifier = props.identifier || '';
            const lcz = props.lcz || '';
            let content = `<h5 style='font-size:14px; margin:0px;'><b>Typologie de l'entité ${identifier}</b></h5><b>LCZ</b>: ${lcz}<br/>`;
            const order = ['are', 'bur', 'hre', 'ror', 'ver', 'vhr', 'bsr', 'war', 'FID'];
            for (const key of order) {
              if (props[key] !== undefined) {
                content += `<b>${labels[key]}</b>: ${props[key]}<br/>`;
              }
            }
            new maplibregl.Popup()
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
      
      // Toggle cerema-lcz-tile-layer visibility on zoom
      map.on('zoom', () => {
        if (map.getZoom() >= 13.5) {
          map.getCanvas().style.cursor = 'pointer';
          map.setLayoutProperty('cerema-lcz-tile-layer', 'visibility', 'none');
        } else {
          map.getCanvas().style.cursor = '';
          map.setLayoutProperty('cerema-lcz-tile-layer', 'visibility', 'visible');
        }
      });
    }
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    return () => map.remove();
  }, [isLoading]);

  return (
    <div>
      {isLoading ? <Loader /> : <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />}
    </div>
  );
};

export default MapLCZ2;
