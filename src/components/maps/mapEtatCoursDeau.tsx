
import { CommunesIndicateursDto, EtatCoursDeauDto } from '@/lib/dto';
import { QualiteSitesBaignade } from '@/lib/postgres/models';
import { mapStyles } from 'carte-facile';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import { BoundsFromCollection } from './components/boundsFromCollection';
import SitesBaignadeMarkers from './components/sitesBaignadeMarkers';
import { CoursDeauTooltip } from './components/tooltips';

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

  const coursDeauColorExpression = useMemo(() => {
    const expression: Array<string | Array<string | Array<string>>> = ['case'];
    etatCoursDeau.forEach((cours, idx) => {
      const color = getColor(cours.properties.etateco);
      expression.push(
        ['==', ['get', 'etateco'], cours.properties.etateco as string],
        color
      );
    });
    expression.push('#9D9C9C');
    return expression;
  }, [etatCoursDeau]);

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
        const lons = enveloppe.map((coord: any) => coord[1]);
        const lats = enveloppe.map((coord: any) => coord[0]);
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
          'line-color': coursDeauColorExpression as any,
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
      map.on('mouseenter', 'coursDeau-line', (e: any) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const properties = feature.properties;
          if (hoveredFeatureRef.current) {
            map.setFeatureState(
              { source: 'coursDeau', id: hoveredFeatureRef.current },
              { hover: false }
            );
          }
          const newHoveredFeature = e.features[0]?.id;
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

      map.on('mousemove', 'coursDeau-line', (e: any) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const properties = feature.properties;
          const newHoveredFeature = e.features[0]?.id;
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
  }, [territoryGeoJson, coursDeauGeoJson, coursDeauColorExpression, enveloppe, code]);

  useEffect(() => {
    let map = mapRef.current;
    if (!map || !mapContainer.current || !map.style) return;
    setTimeout(() => {
      map.setPaintProperty(
        'coursDeau-line',
        'line-color',
        coursDeauColorExpression
      );
    }, 150);
  }, [coursDeauColorExpression]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%', cursor: 'pointer' }} />
      {qualiteEauxBaignade && (
        <SitesBaignadeMarkers qualiteEauxBaignade={qualiteEauxBaignade} />
      )}
    </div>
  );
};
