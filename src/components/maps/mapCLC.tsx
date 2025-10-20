
import { RetardScroll } from '@/hooks/RetardScroll';
import { ClcMapper } from '@/lib/mapper/clc';
import { CLCTerritoires } from '@/lib/postgres/models';
import { mapStyles } from 'carte-facile';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RefObject, useEffect, useMemo } from 'react';
import { BoundsFromCollectionCLC } from './components/boundsFromCollection';

export const MapCLC = (
  props: {
    clc: CLCTerritoires[];
    mapRef: RefObject<maplibregl.Map | null>;
    mapContainer: RefObject<HTMLDivElement | null>;
  }
) => {
  const { clc, mapRef, mapContainer } = props;
  const clcParsed = useMemo(() => clc.map(ClcMapper), [clc]);
  const enveloppe = BoundsFromCollectionCLC(clcParsed);

  const geoJsonData = useMemo(() => {
    return {
      type: "FeatureCollection" as const,
      features: clcParsed.map(feature => ({
        type: "Feature",
        geometry: {
          ...feature.geometry,
          type: feature.geometry.type
        },
        properties: feature.properties,
        id: feature.properties.label
      })) as Feature<Geometry, GeoJsonProperties>[]
    };
  }, [clcParsed]);

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

      map.addSource('clc-communes', {
        type: 'geojson',
        data: geoJsonData,
        generateId: false
      });

      map.addLayer({
        id: 'clc-fill',
        type: 'fill',
        source: 'clc-communes',
        paint: {
          'fill-color': [
            'match',
            ['get', 'label'],
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
            'Land principally occupied by agriculture, with significant areas of natural vegetation',
            '#fdc086',
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

      map.addControl(new maplibregl.NavigationControl(), 'top-right');
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [geoJsonData, enveloppe]);

  // Ref local pour le RetardScroll
  const localContainerRef = mapContainer as RefObject<HTMLElement>;

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
      <RetardScroll mapRef={mapRef} containerRef={localContainerRef} delay={300} />
    </div>
  );
};
