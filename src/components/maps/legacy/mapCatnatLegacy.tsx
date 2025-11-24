'use client';

import { CatnatTypes } from '@/app/(main)/types';
import { CommunesIndicateursDto } from '@/lib/dto';
import { eptRegex } from '@/lib/utils/regex';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import { GraphDataNotFound } from '../../graph-data-not-found';
import { BoundsFromCollection } from '../components/boundsFromCollection';
import { CatnatTooltip } from '../components/tooltips';
import { colorsCatnat } from '../legends/legendCatnat';

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

export const MapCatnat = (props: {
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

  const carteTerritoire = useMemo(() => {
    return type === 'ept' && eptRegex.test(libelle)
      ? carteCommunes.filter((e) => e.properties.ept === libelle)
      : carteCommunes;
  }, [carteCommunes, type, libelle]);
  const enveloppe = BoundsFromCollection(carteTerritoire, type, code);
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

  const geoJsonData = useMemo(() => {
    return {
      type: 'FeatureCollection' as const,
      features: carteTerritoire.map(commune => {
        const value = typeRisqueValue === 'Tous types'
          ? commune.properties.catnat?.sumCatnat || 0
          : (commune.properties.catnat?.[typeRisqueValue] as number) || 0;
        const color = value > 0 ? getColor(value, maxValue, typeRisqueValue) : 'transparent';
        return {
          ...commune,
          id: commune.properties.code_geographique,
          properties: {
            ...commune.properties,
            color
          }
        };
      }) as Feature<Geometry, GeoJsonProperties>[]
    };
  }, [carteTerritoire, maxValue, typeRisqueValue]);

  useEffect(() => {
    if (mapRef.current && mapRef.current.isStyleLoaded()) {
      const source = mapRef.current.getSource('catnat-communes');
      if (source) {
        (source as maplibregl.GeoJSONSource).setData(geoJsonData);
      }
    }
  }, [geoJsonData]);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    map.on('load', () => {
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

      map.addSource('catnat-communes', {
        type: 'geojson',
        data: geoJsonData,
        generateId: false
      });

      map.addLayer({
        id: 'catnat-fill',
        type: 'fill',
        source: 'catnat-communes',
        paint: {
          'fill-color': ['get', 'color']
        }
      });

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

      map.on('mouseenter', 'catnat-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const properties = feature.properties;
          if (hoveredFeatureRef.current) {
            map.setFeatureState(
              { source: 'catnat-communes', id: hoveredFeatureRef.current },
              { hover: false }
            );
          }
          const newHoveredFeature = properties?.code_geographique;
          hoveredFeatureRef.current = newHoveredFeature;
          if (newHoveredFeature) {
            map.setFeatureState(
              { source: 'catnat-communes', id: newHoveredFeature },
              { hover: true }
            );
          }
          const communeName = properties?.libelle_geographique;
          const catnat = JSON.parse(properties?.catnat);
          if (catnat && communeName) {
            const { indexName, sumCatnat, ...restCatnat } = catnat;
            const tooltipContent = CatnatTooltip(restCatnat, communeName);
            if (popupRef.current) {
              popupRef.current.remove();
            }
            const containerHeight = mapContainer.current?.clientHeight || 500;
            const mouseY = e.point.y;
            const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';

            popupRef.current = new maplibregl.Popup({
              closeButton: false,
              closeOnClick: false,
              className: 'catnat-tooltip',
              anchor: placement,
              maxWidth: 'none'
            })
              .setLngLat(e.lngLat)
              .setHTML(tooltipContent)
              .addTo(map);
          }
        }
      });

      map.on('mouseleave', 'catnat-fill', () => {
        if (hoveredFeatureRef.current) {
          map.setFeatureState(
            { source: 'catnat-communes', id: hoveredFeatureRef.current },
            { hover: false }
          );
        }
        hoveredFeatureRef.current = null;
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });
      map.on('mousemove', 'catnat-fill', (e) => {
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
                { source: 'catnat-communes', id: hoveredFeatureRef.current },
                { hover: false }
              );
            }
            hoveredFeatureRef.current = newHoveredFeature;
            if (newHoveredFeature) {
              map.setFeatureState(
                { source: 'catnat-communes', id: newHoveredFeature },
                { hover: true }
              );
            }
            const communeName = properties?.libelle_geographique;
            const catnat = JSON.parse(properties?.catnat);
            if (catnat && communeName) {
              const { indexName, sumCatnat, ...restCatnat } = catnat;
              const tooltipContent = CatnatTooltip(restCatnat, communeName);
              if (popupRef.current) popupRef.current.remove();
              popupRef.current = new maplibregl.Popup({
                closeButton: false,
                closeOnClick: false,
                className: 'catnat-tooltip',
                anchor: placement,
                maxWidth: 'none'
              })
                .setLngLat(e.lngLat)
                .setHTML(tooltipContent)
                .addTo(map);
            }
          } else if (popupRef.current) {
            popupRef.current.setLngLat(e.lngLat);
            const currentAnchor = popupRef.current.getElement()?.getAttribute('class')?.includes('anchor-top') ? 'top' : 'bottom';
            if (currentAnchor !== placement) {
              const communeName = properties?.libelle_geographique;
              const catnat = JSON.parse(properties?.catnat);
              if (catnat && communeName) {
                const { indexName, sumCatnat, ...restCatnat } = catnat;
                const tooltipContent = CatnatTooltip(restCatnat, communeName);
                popupRef.current.remove();
                popupRef.current = new maplibregl.Popup({
                  closeButton: false,
                  closeOnClick: false,
                  className: 'catnat-tooltip',
                  anchor: placement,
                  maxWidth: 'none'
                })
                  .setLngLat(e.lngLat)
                  .setHTML(tooltipContent)
                  .addTo(map);
              }
            }
          }
        }
      });

      map.on('mouseenter', 'catnat-fill', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'catnat-fill', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .maplibregl-popup .maplibregl-popup-content {
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 18, 0.16) !important;
          border-radius: 6px !important;
          padding: 1rem !important;
        }
        .map-container {
            overflow: visible !important;
          }
      `}</style>
      {carteCommunes === null ? (
        <GraphDataNotFound code={code} libelle={libelle} />
      ) : (
        <div style={{ position: 'relative' }}>
          <div ref={mapContainer} className='map-container' style={{ height: '500px', width: '100%' }} />
        </div>
      )}
    </>
  );
};
