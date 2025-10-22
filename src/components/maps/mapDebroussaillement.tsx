
import { CommunesContoursDto } from '@/lib/dto';
import { DebroussaillementMapper } from '@/lib/mapper/debroussaillement';
import { DebroussaillementModel } from '@/lib/postgres/models';
import { mapStyles } from 'carte-facile';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RefObject, useEffect, useMemo } from 'react';
import { BoundsFromCollectionDebroussaillement } from './components/boundsFromCollection';

export const MapDebroussaillement = (
  props: {
    debroussaillement: DebroussaillementModel[];
    carteContours: CommunesContoursDto[];
    mapRef: RefObject<maplibregl.Map | null>;
    mapContainer: RefObject<HTMLDivElement | null>;
  }
) => {
  const { debroussaillement, carteContours, mapRef, mapContainer } = props;
  const dataParsed = useMemo(() => debroussaillement.map(DebroussaillementMapper), [debroussaillement]);
  const enveloppe = BoundsFromCollectionDebroussaillement(dataParsed);

  const geoJsonData = useMemo(() => {
    return {
      type: "FeatureCollection" as const,
      features: dataParsed.map(feature => ({
        type: "Feature",
        geometry: {
          ...feature.geometry,
          type: feature.geometry.type
        },
        properties: feature.properties,
      })) as Feature<Geometry, GeoJsonProperties>[]
    };
  }, [dataParsed]);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;
    // s'assure que le zoom au scroll est désactivé immédiatement pour éviter de capturer les défilements de page
    try { map.scrollZoom.disable(); } catch (e) { /* noop */ }

    map.on('load', () => {
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

      map.addSource('debroussaillement-communes', {
        type: 'geojson',
        data: geoJsonData,
        generateId: false
      });

      map.addLayer({
        id: 'debroussaillement-fill',
        type: 'fill',
        source: 'debroussaillement-communes',
        paint: {
          'fill-color': '#F03CD8',
          'fill-opacity': 0.6
        }
      });

      // Add communes outline
      map.addSource('communes-outline', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: carteContours as Feature<Geometry, GeoJsonProperties>[]
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

      map.addControl(new maplibregl.NavigationControl(), 'top-right');
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [geoJsonData, enveloppe]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};
