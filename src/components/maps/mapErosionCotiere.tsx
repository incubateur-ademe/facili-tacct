
import { CommunesIndicateursDto, ErosionCotiereDto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { BoundsFromCollection } from './components/boundsFromCollection';

export const MapErosionCotiere = (props: {
  erosionCotiere: ErosionCotiereDto[];
  carteCommunes: CommunesIndicateursDto[];
  mapRef: React.RefObject<maplibregl.Map | null>;
  mapContainer: React.RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
}) => {
  const { erosionCotiere, carteCommunes, style, mapRef, mapContainer } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const enveloppe = BoundsFromCollection(carteCommunes, type, code);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    // Add erosionCotiere geojson layer
    map.on('load', () => {
      map.addSource('erosionCotiere', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: erosionCotiere as Feature<Geometry, GeoJsonProperties>[]
        }
      });
      map.addLayer({
        id: 'erosionCotiere-layer',
        type: 'fill',
        source: 'erosionCotiere',
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'taux'], 3], '#046803',
            ['all', ['<', ['get', 'taux'], 3], ['>=', ['get', 'taux'], 1.5]], '#1DA546',
            ['all', ['<', ['get', 'taux'], 1.5], ['>=', ['get', 'taux'], 0.5]], '#86CD63',
            ['all', ['<', ['get', 'taux'], 0.5], ['>=', ['get', 'taux'], 0.1]], '#DCEE9F',
            ['all', ['<', ['get', 'taux'], 0.1], ['>', ['get', 'taux'], -0.1]], '#AFF7F1',
            ['all', ['<=', ['get', 'taux'], -0.1], ['>', ['get', 'taux'], -0.5]], '#FEDD9A',
            ['all', ['<=', ['get', 'taux'], -0.5], ['>', ['get', 'taux'], -1.5]], '#F59550',
            ['all', ['<=', ['get', 'taux'], -1.5], ['>', ['get', 'taux'], -3]], '#B87830',
            ['<=', ['get', 'taux'], -3], '#A74E10',
            '#9D9C9C'
          ],
          'fill-opacity': 0.95,
        }
      });
      // Add communes outline
      map.addSource('communes-outline', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: carteCommunes as Feature<Geometry, GeoJsonProperties>[]
        }
      });
      map.addLayer({
        id: 'communes-outline-layer',
        type: 'line',
        source: 'communes-outline',
        paint: {
          'line-color': '#161616',
          'line-width': 1,
          'line-opacity': 0.5
        }
      });
      // Fit bounds
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
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [erosionCotiere, carteCommunes, enveloppe]);

  return (
    <div style={{ position: 'relative', ...style }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};
