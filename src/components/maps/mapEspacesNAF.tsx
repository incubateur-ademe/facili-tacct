
import { CommunesIndicateursDto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useMemo, useRef } from 'react';
import { EspacesNafTooltip } from './components/tooltips';

const getColor = (d: number) => {
  return d > 200000
    ? '#680000'
    : d > 100000
      ? '#B5000E'
      : d > 50000
        ? '#E8323B'
        : d > 20000
          ? '#FF9699'
          : d > 10000
            ? '#FFECEE'
            : '#D8EFFA';
};

export const MapEspacesNaf = (props: {
  carteCommunesFiltered: CommunesIndicateursDto[];
  enveloppe: number[][] | undefined;
}) => {
  const { carteCommunesFiltered, enveloppe } = props;
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  const hoveredFeatureRef = useRef<string | null>(null);

  const colorExpression = useMemo(() => {
    const expression: Array<string | Array<string | Array<string>>> = ['case'];
    carteCommunesFiltered.forEach((commune) => {
      const color = getColor(commune.properties.naf ?? 0);
      expression.push(
        ['==', ['get', 'code_geographique'], commune.properties.code_geographique],
        color
      );
    });
    expression.push('transparent');
    return expression;
  }, [carteCommunesFiltered]);

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

      // Add source
      map.addSource('naf-communes', {
        type: 'geojson',
        data: geoJsonData,
        generateId: false
      });

      // Fill layer
      map.addLayer({
        id: 'naf-fill',
        type: 'fill',
        source: 'naf-communes',
        paint: {
          'fill-color': colorExpression as unknown as string,
          'fill-opacity': 1
        }
      });

      // Stroke layer
      map.addLayer({
        id: 'naf-stroke',
        type: 'line',
        source: 'naf-communes',
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
      map.on('mouseenter', 'naf-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const properties = feature.properties;
          if (hoveredFeatureRef.current) {
            map.setFeatureState(
              { source: 'naf-communes', id: hoveredFeatureRef.current },
              { hover: false }
            );
          }
          const newHoveredFeature = properties?.code_geographique;
          hoveredFeatureRef.current = newHoveredFeature;
          if (newHoveredFeature) {
            map.setFeatureState(
              { source: 'naf-communes', id: newHoveredFeature },
              { hover: true }
            );
          }
          // Tooltip content
          const communeName = properties?.libelle_geographique;
          const naf = properties?.naf;
          const tooltipContent = EspacesNafTooltip(communeName, naf);
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
            className: 'naf-tooltip',
            anchor: placement,
            maxWidth: 'none'
          })
            .setLngLat(e.lngLat)
            .setHTML(tooltipContent)
            .addTo(map);
        }
      });

      map.on('mouseleave', 'naf-fill', () => {
        if (hoveredFeatureRef.current) {
          map.setFeatureState(
            { source: 'naf-communes', id: hoveredFeatureRef.current },
            { hover: false }
          );
        }
        hoveredFeatureRef.current = null;
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });

      map.on('mousemove', 'naf-fill', (e) => {
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
                { source: 'naf-communes', id: hoveredFeatureRef.current },
                { hover: false }
              );
            }
            hoveredFeatureRef.current = newHoveredFeature;
            if (newHoveredFeature) {
              map.setFeatureState(
                { source: 'naf-communes', id: newHoveredFeature },
                { hover: true }
              );
            }
            // Tooltip content
            const communeName = properties?.libelle_geographique;
            const naf = properties?.naf;
            const tooltipContent = EspacesNafTooltip(communeName, naf);
            if (popupRef.current) popupRef.current.remove();
            popupRef.current = new maplibregl.Popup({
              closeButton: false,
              closeOnClick: false,
              className: 'naf-tooltip',
              anchor: placement,
              maxWidth: 'none'
            })
              .setLngLat(e.lngLat)
              .setHTML(tooltipContent)
              .addTo(map);
          } else if (popupRef.current) {
            popupRef.current.setLngLat(e.lngLat);
            const currentAnchor = popupRef.current.getElement()?.getAttribute('class')?.includes('anchor-top') ? 'top' : 'bottom';
            if (currentAnchor !== placement) {
              const communeName = properties?.libelle_geographique;
              const naf = properties?.naf;
              const tooltipContent = EspacesNafTooltip(communeName, naf);
              popupRef.current.remove();
              popupRef.current = new maplibregl.Popup({
                closeButton: false,
                closeOnClick: false,
                className: 'naf-tooltip',
                anchor: placement,
                maxWidth: 'none'
              })
                .setLngLat(e.lngLat)
                .setHTML(tooltipContent)
                .addTo(map);
            }
          }
        }
      });

      // Change cursor on hover
      map.on('mouseenter', 'naf-fill', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'naf-fill', () => {
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
        'naf-fill',
        'fill-color',
        colorExpression
      );
    }, 150);
  }, [colorExpression]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};
