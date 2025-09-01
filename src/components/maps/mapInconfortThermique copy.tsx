
import { LoaderText } from '@/components/loader';
import couleurs from '@/design-system/couleurs';
import { CommunesIndicateursDto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { GraphDataNotFound } from '../graph-data-not-found';
import { BoundsFromCollection } from './components/boundsFromCollection';
import { DensiteBatiTooltip, FragiliteEconomiqueTooltip } from './components/tooltips';

const getColor = (d: number, data: string) => {
  if (data === 'densite_bati') {
    return d > 0.2
      ? '#FF5E54'
      : d > 0.1
        ? '#FFBD00'
        : d > 0.05
          ? '#FFFA6A'
          : d > 0
            ? '#D5F4A3'
            : '#5CFF54';
  } else
    return d > 0.3
      ? couleurs.graphiques.bleu[5]
      : d > 0.2
        ? couleurs.graphiques.bleu[1]
        : d > 0.1
          ? couleurs.graphiques.bleu[2]
          : d > 0
            ? couleurs.graphiques.bleu[3]
            : couleurs.graphiques.bleu[4];
};


export const MapInconfortThermique = (props: {
  carteCommunes: CommunesIndicateursDto[];
  data: string;
}) => {
  const { data, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  const hoveredFeatureRef = useRef<string | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Filtrer Paris, Marseille, Lyon
  const carteCommunesFiltered = useMemo(() =>
    carteCommunes.filter(
      (e) =>
        e.properties.code_geographique !== '75056' &&
        e.properties.code_geographique !== '13055' &&
        e.properties.code_geographique !== '69123'
    ),
    [carteCommunes]
  );

  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);
  const geoJsonWithColor = useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: carteCommunesFiltered.map(commune => {
        const value = data === 'densite_bati'
          ? commune.properties.densite_bati
          : commune.properties.precarite_logement;
        const fillColor = getColor(value, data);
        return {
          ...commune,
          id: commune.properties.code_geographique,
          properties: {
            ...commune.properties,
            fillColor
          }
        };
      })
    };
  }, [carteCommunesFiltered, data]);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

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

      map.addSource('inconfort-thermique-communes', {
        type: 'geojson',
        data: geoJsonWithColor as unknown as "FeatureCollection",
        generateId: false
      });

      map.addLayer({
        id: 'inconfort-thermique-fill',
        type: 'fill',
        source: 'inconfort-thermique-communes',
        paint: {
          'fill-color': ['get', 'fillColor'] as unknown as any,
          'fill-opacity': 1
        }
      });

      // Stroke layer
      map.addLayer({
        id: 'inconfort-thermique-stroke',
        type: 'line',
        source: 'inconfort-thermique-communes',
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

      map.on('mouseenter', 'inconfort-thermique-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const properties = feature.properties;
          if (hoveredFeatureRef.current) {
            map.setFeatureState(
              { source: 'inconfort-thermique-communes', id: hoveredFeatureRef.current },
              { hover: false }
            );
          }
          const newHoveredFeature = properties?.code_geographique;
          hoveredFeatureRef.current = newHoveredFeature;
          if (newHoveredFeature) {
            map.setFeatureState(
              { source: 'inconfort-thermique-communes', id: newHoveredFeature },
              { hover: true }
            );
          }
          const communeName = properties?.libelle_geographique;
          let tooltipContent = '';
          if (data === 'densite_bati') {
            tooltipContent = DensiteBatiTooltip(communeName, properties.densite_bati);
          } else {
            tooltipContent = FragiliteEconomiqueTooltip(communeName, properties.precarite_logement);
          }
          if (popupRef.current) {
            popupRef.current.remove();
          }
          const containerHeight = mapContainer.current?.clientHeight || 500;
          const mouseY = e.point.y;
          const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';
          popupRef.current = new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            className: 'inconfort-thermique-tooltip',
            anchor: placement,
            maxWidth: 'none'
          })
            .setLngLat(e.lngLat)
            .setHTML(tooltipContent)
            .addTo(map);
        }
      });

      map.on('mouseleave', 'inconfort-thermique-fill', () => {
        if (hoveredFeatureRef.current) {
          map.setFeatureState(
            { source: 'inconfort-thermique-communes', id: hoveredFeatureRef.current },
            { hover: false }
          );
        }
        hoveredFeatureRef.current = null;
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });

      map.on('mousemove', 'inconfort-thermique-fill', (e) => {
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
                { source: 'inconfort-thermique-communes', id: hoveredFeatureRef.current },
                { hover: false }
              );
            }
            hoveredFeatureRef.current = newHoveredFeature;
            if (newHoveredFeature) {
              map.setFeatureState(
                { source: 'inconfort-thermique-communes', id: newHoveredFeature },
                { hover: true }
              );
            }
            const communeName = properties?.libelle_geographique;
            let tooltipContent = '';
            if (data === 'densite_bati') {
              tooltipContent = DensiteBatiTooltip(communeName, properties.densite_bati);
            } else {
              tooltipContent = FragiliteEconomiqueTooltip(communeName, properties.precarite_logement);
            }
            if (popupRef.current) popupRef.current.remove();
            popupRef.current = new maplibregl.Popup({
              closeButton: false,
              closeOnClick: false,
              className: 'inconfort-thermique-tooltip',
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
              let tooltipContent = '';
              if (data === 'densite_bati') {
                tooltipContent = DensiteBatiTooltip(communeName, properties.densite_bati);
              } else {
                tooltipContent = FragiliteEconomiqueTooltip(communeName, properties.precarite_logement);
              }
              popupRef.current.remove();
              popupRef.current = new maplibregl.Popup({
                closeButton: false,
                closeOnClick: false,
                className: 'inconfort-thermique-tooltip',
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

      map.on('mouseenter', 'inconfort-thermique-fill', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'inconfort-thermique-fill', () => {
        map.getCanvas().style.cursor = '';
      });

      map.addControl(new maplibregl.NavigationControl(), 'top-right');
      setIsMapLoaded(true);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [enveloppe, geoJsonWithColor]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.getSource) return;
    const src = map.getSource('inconfort-thermique-communes') as maplibregl.GeoJSONSource | undefined;
    if (src && geoJsonWithColor) {
      try {
        src.setData(geoJsonWithColor as unknown as GeoJSON.FeatureCollection);
      } catch (e) {
      }
    }
  }, [geoJsonWithColor]);

  return (
    <>
      {carteCommunesFiltered === null ? (
        <GraphDataNotFound code={code} libelle={libelle} />
      ) : (
        <div style={{ position: 'relative' }}>
          {!isMapLoaded && (
            <LoaderText text='Chargement de la cartographie...' />
          )}
          <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />
        </div>
      )}
    </>
  );
};
