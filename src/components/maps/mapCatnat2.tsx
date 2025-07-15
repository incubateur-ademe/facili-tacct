'use client';

/**
 * MapCatnat2 - MapLibre migration of the original Leaflet MapCatnat component
 * 
 * This component provides the same functionality as the original MapCatnat component
 * but uses MapLibre GL JS instead of Leaflet for better performance and modern mapping features.
 * 
 * Key differences from the original:
 * - Uses MapLibre GL JS instead of Leaflet
 * - Uses 'carte-facile' desaturated style as base map
 * - Implements hover effects using MapLibre feature states
 * - Uses MapLibre Popup instead of Leaflet tooltip
 * - Supports dynamic popup positioning (top/bottom based on mouse position)
 * - Includes PNG export functionality
 * 
 * Features maintained:
 * - Same color coding and legend system
 * - Same tooltip content and styling
 * - Same hover interactions and visual feedback
 * - Same support for different risk types (CatnatTypes)
 * - Same territory filtering (EPT support)
 * - Same bounds calculation and fitting
 */

import { CommunesIndicateursDto } from '@/lib/dto';
import { eptRegex } from '@/lib/utils/regex';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import { ExportPngMaplibreButton } from '../exports/ExportPng';
import { GraphDataNotFound } from '../graph-data-not-found';
import { BoundsFromCollection } from './components/boundsFromCollection';
import { colorsCatnat } from './legends/legendCatnat';

// Custom styles for MapLibre popups to match Leaflet tooltip style
const injectPopupStyles = () => {
  // Check if styles are already injected
  if (document.getElementById('catnat-tooltip-styles')) {
    return;
  }

  const style = document.createElement('style');
  style.id = 'catnat-tooltip-styles';
  style.textContent = `
    .catnat-tooltip .maplibregl-popup-content {
      background: white;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      padding: 0;
      font-family: Marianne, Arial, sans-serif;
      max-width: 300px;
    }
    .catnat-tooltip .maplibregl-popup-anchor-top .maplibregl-popup-tip {
      border-bottom-color: white;
      z-index: 99000;
    }
    .catnat-tooltip .maplibregl-popup-anchor-bottom .maplibregl-popup-tip {
      border-top-color: white;
    }
    .catnat-tooltip .maplibregl-popup-anchor-left .maplibregl-popup-tip {
      border-right-color: white;
    }
    .catnat-tooltip .maplibregl-popup-anchor-right .maplibregl-popup-tip {
      border-left-color: white;
    }
  `;
  document.head.appendChild(style);
};

const getColor = (d: number, max: number, typeCatnat: string) => {
  const colorPalette = colorsCatnat[typeCatnat];
  return max > 5
    ? d >= (4 / 5) * max
      ? colorPalette[4]
      : d >= (3 / 5) * max
        ? colorPalette[3]
        : d >= (2 / 5) * max
          ? colorPalette[2]
          : d >= (1 / 5) * max
            ? colorPalette[1]
            : colorPalette[0]
    : max === 1
      ? colorPalette[2]
      : max === 2
        ? d === 1
          ? colorPalette[1]
          : colorPalette[3]
        : max === 3
          ? d === 1
            ? colorPalette[0]
            : d === 2
              ? colorPalette[2]
              : colorPalette[4]
          : max === 4
            ? d === 1
              ? colorPalette[0]
              : d === 2
                ? colorPalette[2]
                : d === 3
                  ? colorPalette[3]
                  : colorPalette[4]
            : colorPalette[d - 1];
};

export const MapCatnat2 = (props: {
  carteCommunes: CommunesIndicateursDto[];
  typeRisqueValue: CatnatTypes;
}) => {
  const { carteCommunes, typeRisqueValue } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  const hoveredFeatureRef = useRef<string | null>(null);

  // Memoize carteTerritoire to prevent unnecessary recalculations
  const carteTerritoire = useMemo(() => {
    return type === 'ept' && eptRegex.test(libelle)
      ? carteCommunes.filter((e) => e.properties.ept === libelle)
      : carteCommunes;
  }, [carteCommunes, type, libelle]);

  // Memoize enveloppe to prevent unnecessary recalculations
  const enveloppe = BoundsFromCollection(carteTerritoire, type, code);

  console.log("enveloppe", enveloppe);

  // Calculate max value for color scaling - memoized to prevent unnecessary recalculations
  const maxValue = useMemo(() => {
    return typeRisqueValue === 'Tous types'
      ? Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.sumCatnat ? el.properties.catnat?.sumCatnat : 0
        )
      )
      : Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.[typeRisqueValue]
            ? (el.properties.catnat?.[typeRisqueValue] as number)
            : 0
        )
      );
  }, [carteCommunes, typeRisqueValue]);

  // Create color expression for MapLibre - memoized to prevent recreation on every render
  const colorExpression = useMemo(() => {
    const expression: Array<string | Array<string | Array<string>>> = ['case'];

    carteTerritoire.forEach((commune) => {
      const value = typeRisqueValue === 'Tous types'
        ? commune.properties.catnat?.sumCatnat || 0
        : (commune.properties.catnat?.[typeRisqueValue] as number) || 0;

      const color = value > 0 ? getColor(value, maxValue, typeRisqueValue) : 'transparent';

      expression.push(
        ['==', ['get', 'code_geographique'], commune.properties.code_geographique],
        color
      );
    });

    expression.push('transparent'); // fallback color
    return expression;
  }, [maxValue, typeRisqueValue]);

  // Create hover effect expression - this is static so no need to recreate
  const hoverExpression = useMemo((): any => {
    return [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      0.9,
      1
    ];
  }, []);

  // Memoize the GeoJSON data to prevent source recreation
  const geoJsonData = useMemo(() => {
    return {
      type: 'FeatureCollection' as const,
      features: carteTerritoire.map(commune => ({
        ...commune,
        id: commune.properties.code_geographique
      })) as Feature<Geometry, GeoJsonProperties>[]
    };
  }, [carteTerritoire]);


  console.log("geoJsonData", geoJsonData);


  useEffect(() => {
    if (!mapContainer.current) return;

    // // Inject custom styles for popups
    // injectPopupStyles();

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    map.on('load', () => {
      // Compute bounding box from enveloppe polygon
      if (
        enveloppe &&
        Array.isArray(enveloppe) &&
        enveloppe.length > 1 &&
        Array.isArray(enveloppe[0]) &&
        enveloppe[0].length === 2
      ) {
        const lons = enveloppe.map(coord => coord[1]);
        const lats = enveloppe.map(coord => coord[0]);
        const minLng = Math.min(...lons);
        const maxLng = Math.max(...lons);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);
        map.fitBounds(
          [[minLng, minLat], [maxLng, maxLat]],
          { padding: 20 },
        );
      }

      // Add source for commune data
      map.addSource('catnat-communes', {
        type: 'geojson',
        data: geoJsonData,
        generateId: false
      });

      // Add fill layer for catnat data
      map.addLayer({
        id: 'catnat-fill',
        type: 'fill',
        source: 'catnat-communes',
        paint: {
          'fill-color': colorExpression as unknown as string
          // 'fill-color': getColor(geoJsonData.features, maxValue, typeRisqueValue),
        }
      });

      // Add stroke layer for commune boundaries
      map.addLayer({
        id: 'catnat-stroke',
        type: 'line',
        source: 'catnat-communes',
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

      //   // Mouse events for hover effects and tooltips
      //   map.on('mouseenter', 'catnat-fill', (e) => {
      //     if (e.features && e.features.length > 0) {
      //       const feature = e.features[0];
      //       const properties = feature.properties;

      //       if (hoveredFeatureRef.current) {
      //         map.setFeatureState(
      //           { source: 'catnat-communes', id: hoveredFeatureRef.current },
      //           { hover: false }
      //         );
      //       }

      //       const newHoveredFeature = properties?.code_geographique;
      //       hoveredFeatureRef.current = newHoveredFeature;

      //       if (newHoveredFeature) {
      //         map.setFeatureState(
      //           { source: 'catnat-communes', id: newHoveredFeature },
      //           { hover: true }
      //         );
      //       }

      //       // Create tooltip content
      //       const communeName = properties?.libelle_geographique;
      //       const catnat = properties?.catnat;

      //       if (catnat && communeName) {
      //         const { indexName, sumCatnat, ...restCatnat } = catnat;
      //         const tooltipContent = CatnatTooltip(restCatnat, communeName);

      //         // Remove existing popup
      //         if (popupRef.current) {
      //           popupRef.current.remove();
      //         }

      //         // Create new popup with dynamic positioning
      //         const containerHeight = mapContainer.current?.clientHeight || 500;
      //         const mouseY = e.point.y;
      //         const placement = mouseY > containerHeight / 2 ? 'top' : 'bottom';

      //         popupRef.current = new maplibregl.Popup({
      //           closeButton: false,
      //           closeOnClick: false,
      //           className: 'catnat-tooltip',
      //           anchor: placement
      //         })
      //           .setLngLat(e.lngLat)
      //           .setHTML(tooltipContent)
      //           .addTo(map);
      //       }
      //     }
      //   });

      //   map.on('mouseleave', 'catnat-fill', () => {
      //     if (hoveredFeatureRef.current) {
      //       map.setFeatureState(
      //         { source: 'catnat-communes', id: hoveredFeatureRef.current },
      //         { hover: false }
      //       );
      //     }
      //     hoveredFeatureRef.current = null;

      //     // Remove popup
      //     if (popupRef.current) {
      //       popupRef.current.remove();
      //       popupRef.current = null;
      //     }
      //   });

      //   // Mouse move event to update popup position
      //   map.on('mousemove', 'catnat-fill', (e) => {
      //     if (popupRef.current) {
      //       const containerHeight = mapContainer.current?.clientHeight || 500;
      //       const mouseY = e.point.y;
      //       const placement = mouseY > containerHeight / 2 ? 'top' : 'bottom';

      //       // Update popup position
      //       popupRef.current.setLngLat(e.lngLat);

      //       // Update anchor if needed
      //       const currentAnchor = popupRef.current.getElement()?.getAttribute('class')?.includes('anchor-top') ? 'top' : 'bottom';
      //       if (currentAnchor !== placement) {
      //         popupRef.current.remove();
      //         if (hoveredFeatureRef.current) {
      //           const feature = carteTerritoire.find(c => c.properties.code_geographique === hoveredFeatureRef.current);
      //           if (feature?.properties.catnat && feature?.properties.libelle_geographique) {
      //             const { indexName, sumCatnat, ...restCatnat } = feature.properties.catnat;
      //             const tooltipContent = CatnatTooltip(restCatnat, feature.properties.libelle_geographique);

      //             popupRef.current = new maplibregl.Popup({
      //               closeButton: false,
      //               closeOnClick: false,
      //               className: 'catnat-tooltip',
      //               anchor: placement
      //             })
      //               .setLngLat(e.lngLat)
      //               .setHTML(tooltipContent)
      //               .addTo(map);
      //           }
      //         }
      //       }
      //     }
      //   });

      //   // Change cursor on hover
      //   map.on('mouseenter', 'catnat-fill', () => {
      //     map.getCanvas().style.cursor = 'pointer';
      //   });

      //   map.on('mouseleave', 'catnat-fill', () => {
      //     map.getCanvas().style.cursor = '';
      //   });
    });

    // Add navigation control
    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    let map = mapRef.current;
    if (!map || !mapContainer.current || !map.style) return;
    console.log("map", map.style)
    map.setPaintProperty(
      'catnat-fill',
      'fill-color',
      colorExpression
    );
  }, [colorExpression]);

  return (
    <>
      {carteCommunes === null ? (
        <GraphDataNotFound code={code} libelle={libelle} />
      ) : (
        <div style={{ position: 'relative' }}>
          <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
          <ExportPngMaplibreButton
            mapRef={mapRef}
            mapContainer={mapContainer}
            documentDiv=".exportPNGWrapper"
          />
        </div>
      )}
    </>
  );
};
