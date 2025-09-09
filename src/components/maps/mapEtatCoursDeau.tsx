"use client";
import { CommunesIndicateursDto, EtatCoursDeauDto } from '@/lib/dto';
import { QualiteSitesBaignade } from '@/lib/postgres/models';
import { mapStyles } from 'carte-facile';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import { Loader } from '../loader';
import { BoundsFromCollection } from './components/boundsFromCollection';
import { CoursDeauTooltip } from './components/mapTooltips';

const SitesBaignadeMarkers = dynamic(() => import('./components/sitesBaignadeMarkers'), {
  loading: () => <Loader />
});

export const MapEtatCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeauDto[];
  carteCommunes: CommunesIndicateursDto[];
  qualiteEauxBaignade?: QualiteSitesBaignade[];
}) => {
  const { etatCoursDeau, carteCommunes, qualiteEauxBaignade } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  const hoveredFeatureRef = useRef<string | null>(null);

  const carteCommunesFiltered = useMemo(() => (
    type === "ept"
      ? carteCommunes.filter(el => el.properties.ept === libelle)
      : carteCommunes
  ), [carteCommunes, type, libelle]);
  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);

  // Color logic for cours d'eau
  const getColor = (d: string | null) => {
    if (d === '1') {
      return '#0095C8';
    } else if (d === '2') {
      return '#00C190';
    } else if (d === '3') {
      return '#FFCF5E';
    } else if (d === '4') {
      return '#F66E19';
    } else if (d === '5') {
      return '#B5000E';
    } else {
      return '#9D9C9C';
    }
  };

  // GeoJSON for territory polygons
  const territoryGeoJson = useMemo(() => ({
    type: "FeatureCollection" as "FeatureCollection",
    features: carteCommunesFiltered.map(commune => ({
      type: "Feature" as "Feature",
      geometry: commune.geometry as import('geojson').Geometry,
      properties: commune.properties,
      id: commune.properties.code_geographique
    }))
  }), [carteCommunesFiltered]);

  const coursDeauGeoJson = useMemo(() => ({
    type: "FeatureCollection" as const,
    features: etatCoursDeau.map((cours, idx) => ({
      type: "Feature",
      geometry: cours.geometry,
      properties: cours.properties,
      id: idx
    })) as Feature<Geometry, GeoJsonProperties>[]
  }), [etatCoursDeau]);

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

      // Add territory source/layer
      map.addSource('territory', {
        type: 'geojson',
        data: territoryGeoJson,
        generateId: false
      });
      map.addLayer({
        id: 'territory-fill',
        type: 'fill',
        source: 'territory',
        paint: {
          'fill-opacity': 0,
        }
      });
      map.addLayer({
        id: 'territory-stroke',
        type: 'line',
        source: 'territory',
        paint: {
          'line-color': [
            'case',
            ['==', ['get', 'code_geographique'], code],
            '#161616',
            '#161616'
          ],
          'line-width': [
            'case',
            ['==', ['get', 'code_geographique'], code],
            2,
            0.5
          ],
          'line-opacity': 0.9
        }
      });

      // Add cours d'eau source/layer
      map.addSource('coursDeau', {
        type: 'geojson',
        data: coursDeauGeoJson,
        generateId: false
      });
      map.addLayer({
        id: 'coursDeau-line',
        type: 'line',
        source: 'coursDeau',
        paint: {
          'line-color': [
            'match',
            ['get', 'etateco'],
            '1', '#0095C8',
            '2', '#00C190',
            '3', '#FFCF5E',
            '4', '#F66E19',
            '5', '#B5000E',
            '#9D9C9C'
          ],
          'line-width': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            7,
            3
          ],
          'line-opacity': 0.95
        }
      });

      // Hover and tooltip for cours d'eau
      map.on('mouseenter', 'coursDeau-line', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const properties = feature.properties;
          if (hoveredFeatureRef.current) {
            map.setFeatureState(
              { source: 'coursDeau', id: hoveredFeatureRef.current },
              { hover: false }
            );
          }
          const newHoveredFeature = properties.id;
          hoveredFeatureRef.current = newHoveredFeature;
          if (newHoveredFeature) {
            map.setFeatureState(
              { source: 'coursDeau', id: newHoveredFeature },
              { hover: true }
            );
          }
          const coursDeauName = properties?.name;
          const color = getColor(properties?.etateco);
          const tooltipContent = CoursDeauTooltip(coursDeauName, color);
          if (popupRef.current) {
            popupRef.current.remove();
          }
          const containerHeight = mapContainer.current?.clientHeight || 500;
          const mouseY = e.point.y;
          const mouseX = e.point.x;
          const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';
          const offset: [number, number] = (mouseX > 400) ? [-75, 0] : [75, 0];
          popupRef.current = new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            className: 'coursdeau-tooltip',
            anchor: placement,
            offset: offset,
            maxWidth: 'none'
          })
            .setLngLat(e.lngLat)
            .setHTML(tooltipContent)
            .addTo(map);
        }
      });

      map.on('mouseleave', 'coursDeau-line', () => {
        if (hoveredFeatureRef.current) {
          map.setFeatureState(
            { source: 'coursDeau', id: hoveredFeatureRef.current },
            { hover: false }
          );
        }
        hoveredFeatureRef.current = null;
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });

      map.on('mousemove', 'coursDeau-line', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const properties = feature.properties;
          const newHoveredFeature = properties.id;
          const containerHeight = mapContainer.current?.clientHeight || 500;
          const mouseY = e.point.y;
          const mouseX = e.point.x;
          const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';
          const offset: [number, number] = (mouseX > 400) ? [-75, 0] : [75, 0];
          if (hoveredFeatureRef.current !== newHoveredFeature) {
            if (hoveredFeatureRef.current) {
              map.setFeatureState(
                { source: 'coursDeau', id: hoveredFeatureRef.current },
                { hover: false }
              );
            }
            hoveredFeatureRef.current = newHoveredFeature;
            if (newHoveredFeature) {
              map.setFeatureState(
                { source: 'coursDeau', id: newHoveredFeature },
                { hover: true }
              );
            }
            const coursDeauName = properties?.name;
            const color = getColor(properties?.etateco);
            const tooltipContent = CoursDeauTooltip(coursDeauName, color);
            if (popupRef.current) popupRef.current.remove();
            popupRef.current = new maplibregl.Popup({
              closeButton: false,
              closeOnClick: false,
              className: 'coursdeau-tooltip',
              anchor: placement,
              offset: offset,
              maxWidth: 'none'
            })
              .setLngLat(e.lngLat)
              .setHTML(tooltipContent)
              .addTo(map);
          } else if (popupRef.current) {
            popupRef.current.setLngLat(e.lngLat);
          }
        }
      });

      // Change cursor on hover
      map.on('mouseenter', 'coursDeau-line', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'coursDeau-line', () => {
        map.getCanvas().style.cursor = '';
      });

      map.addControl(new maplibregl.NavigationControl(), 'top-right');
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [territoryGeoJson, coursDeauGeoJson, enveloppe, code]);

  return (
    <>
      <style jsx global>{`
        .maplibregl-popup .maplibregl-popup-content {
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 18, 0.16) !important;
          border-radius: 6px !important;
          padding: 0.5rem !important;
        }
        .map-container {
            overflow: visible !important;
          }
      `}</style>
      <div style={{ position: 'relative' }}>
        <div ref={mapContainer} className='map-container' style={{ height: '500px', width: '100%', cursor: 'pointer' }} />
        {qualiteEauxBaignade && (
          <SitesBaignadeMarkers qualiteEauxBaignade={qualiteEauxBaignade} />
        )}
      </div>
    </>
  );
};
