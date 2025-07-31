
import { CommunesIndicateursDto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import { BoundsFromCollection } from './components/boundsFromCollection';
import { SurfacesIrrigueesTooltip } from './components/tooltips';

const getColor = (d: number) => {
  return d === 0
    ? '#D8EFFA'
    : d > 0 && d <= 20
      ? '#3DB6EA'
      : d > 20 && d <= 40
        ? '#0072B5'
        : d > 40 && d <= 60
          ? '#03508B'
          : d > 60 && d <= 100
            ? '#093454'
            : 'white';
};

export const MapSurfacesIrriguees = (props: {
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { carteCommunes } = props;
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

  // Color expression for MapLibre
  const colorExpression = useMemo(() => {
    const expression: Array<any> = ['case'];
    carteCommunesFiltered.forEach((commune) => {
      const color = getColor(commune.properties.surfacesIrriguees ?? 0);
      expression.push(
        ['==', ['get', 'code_geographique'], commune.properties.code_geographique],
        color
      );
    });
    expression.push('transparent');
    return expression;
  }, [carteCommunesFiltered]);

  // GeoJSON
  const geoJsonData = useMemo(() => {
    return {
      type: "FeatureCollection" as "FeatureCollection",
      features: carteCommunesFiltered.map(commune => ({
        type: "Feature" as "Feature",
        geometry: commune.geometry as import('geojson').Geometry,
        properties: commune.properties,
        id: commune.properties.code_geographique
      }))
    };
  }, [carteCommunesFiltered]);

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

      // Add source
      map.addSource('surfaces-irriguees-communes', {
        type: 'geojson',
        data: geoJsonData,
        generateId: false
      });

      // Fill layer
      map.addLayer({
        id: 'surfaces-irriguees-fill',
        type: 'fill',
        source: 'surfaces-irriguees-communes',
        paint: {
          'fill-color': colorExpression as any,
          'fill-opacity': 1
        }
      });

      // Stroke layer
      map.addLayer({
        id: 'surfaces-irriguees-stroke',
        type: 'line',
        source: 'surfaces-irriguees-communes',
        paint: {
          'line-color': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            '#0D2100',
            '#161616'
          ],
          'line-width': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            3,
            1
          ]
        }
      });

      // Hover and tooltip
      map.on('mouseenter', 'surfaces-irriguees-fill', (e: any) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const properties = feature.properties;
          if (hoveredFeatureRef.current) {
            map.setFeatureState(
              { source: 'surfaces-irriguees-communes', id: hoveredFeatureRef.current },
              { hover: false }
            );
          }
          const newHoveredFeature = properties?.code_geographique;
          hoveredFeatureRef.current = newHoveredFeature;
          if (newHoveredFeature) {
            map.setFeatureState(
              { source: 'surfaces-irriguees-communes', id: newHoveredFeature },
              { hover: true }
            );
          }
          // Tooltip content
          const communeName = properties?.libelle_geographique;
          const surfacesIrriguees = properties?.surfacesIrriguees;
          const tooltipContent = SurfacesIrrigueesTooltip(communeName, surfacesIrriguees);
          // Remove existing popup
          if (popupRef.current) {
            popupRef.current.remove();
          }
          // Dynamic positioning
          const containerHeight = mapContainer.current?.clientHeight || 500;
          const mouseY = e.point.y;
          const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';
          popupRef.current = new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            className: 'surfaces-irriguees-tooltip',
            anchor: placement
          })
            .setLngLat(e.lngLat)
            .setHTML(tooltipContent)
            .addTo(map);
        }
      });

      map.on('mouseleave', 'surfaces-irriguees-fill', () => {
        if (hoveredFeatureRef.current) {
          map.setFeatureState(
            { source: 'surfaces-irriguees-communes', id: hoveredFeatureRef.current },
            { hover: false }
          );
        }
        hoveredFeatureRef.current = null;
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });

      map.on('mousemove', 'surfaces-irriguees-fill', (e: any) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const properties = feature.properties;
          const newHoveredFeature = properties?.code_geographique;
          const containerHeight = mapContainer.current?.clientHeight || 500;
          const mouseY = e.point.y;
          const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';
          if (hoveredFeatureRef.current !== newHoveredFeature) {
            if (hoveredFeatureRef.current) {
              map.setFeatureState(
                { source: 'surfaces-irriguees-communes', id: hoveredFeatureRef.current },
                { hover: false }
              );
            }
            hoveredFeatureRef.current = newHoveredFeature;
            if (newHoveredFeature) {
              map.setFeatureState(
                { source: 'surfaces-irriguees-communes', id: newHoveredFeature },
                { hover: true }
              );
            }
            // Tooltip content
            const communeName = properties?.libelle_geographique;
            const surfacesIrriguees = properties?.surfacesIrriguees;
            const tooltipContent = SurfacesIrrigueesTooltip(communeName, surfacesIrriguees);
            if (popupRef.current) popupRef.current.remove();
            popupRef.current = new maplibregl.Popup({
              closeButton: false,
              closeOnClick: false,
              className: 'surfaces-irriguees-tooltip',
              anchor: placement
            })
              .setLngLat(e.lngLat)
              .setHTML(tooltipContent)
              .addTo(map);
          } else if (popupRef.current) {
            popupRef.current.setLngLat(e.lngLat);
            const currentAnchor = popupRef.current.getElement()?.getAttribute('class')?.includes('anchor-top') ? 'top' : 'bottom';
            if (currentAnchor !== placement) {
              const communeName = properties?.libelle_geographique;
              const surfacesIrriguees = properties?.surfacesIrriguees;
              const tooltipContent = SurfacesIrrigueesTooltip(communeName, surfacesIrriguees);
              popupRef.current.remove();
              popupRef.current = new maplibregl.Popup({
                closeButton: false,
                closeOnClick: false,
                className: 'surfaces-irriguees-tooltip',
                anchor: placement
              })
                .setLngLat(e.lngLat)
                .setHTML(tooltipContent)
                .addTo(map);
            }
          }
        }
      });

      // Change cursor on hover
      map.on('mouseenter', 'surfaces-irriguees-fill', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'surfaces-irriguees-fill', () => {
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
  }, [geoJsonData, colorExpression, enveloppe]);

  useEffect(() => {
    let map = mapRef.current;
    if (!map || !mapContainer.current || !map.style) return;
    setTimeout(() => {
      map.setPaintProperty(
        'surfaces-irriguees-fill',
        'fill-color',
        colorExpression
      );
    }, 50);
  }, [colorExpression]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};
