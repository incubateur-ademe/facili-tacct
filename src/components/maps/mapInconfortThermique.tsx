
import { LoaderText } from '@/components/loader';
import couleurs from '@/design-system/couleurs';
import { CommunesIndicateursDto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { BoundsFromCollection } from './components/boundsFromCollection';
import { FragiliteEconomiqueTooltip } from './components/mapTooltips';

export const MapInconfortThermique = (props: {
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
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
        data: {
          type: 'FeatureCollection',
          features: carteCommunesFiltered as Feature<Geometry, GeoJsonProperties>[]
        }
      });

      map.addLayer({
        id: 'inconfort-thermique-fill',
        type: 'fill',
        source: 'inconfort-thermique-communes',
        paint: {
          'fill-color': [
            'step',
            ['get', 'precarite_logement'],
            couleurs.graphiques.bleu[4],
            0,
            couleurs.graphiques.bleu[3],
            0.1,
            couleurs.graphiques.bleu[2],
            0.2,
            couleurs.graphiques.bleu[1],
            0.3,
            couleurs.graphiques.bleu[5]
          ],
          'fill-opacity': 1,
        }
      });

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
        map.getCanvas().style.cursor = 'pointer';
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
          const tooltipContent = FragiliteEconomiqueTooltip(communeName, properties.precarite_logement);
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
        map.getCanvas().style.cursor = '';
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
            const tooltipContent = FragiliteEconomiqueTooltip(communeName, properties.precarite_logement);
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
              const tooltipContent = FragiliteEconomiqueTooltip(communeName, properties.precarite_logement);
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

      map.addControl(new maplibregl.NavigationControl(), 'top-right');
      setIsMapLoaded(true);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [enveloppe]);

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
      <div style={{ position: 'relative' }}>
        {!isMapLoaded && (
          <LoaderText text='Chargement de la cartographie...' />
        )}
        <div ref={mapContainer} className='map-container' style={{ height: '500px', width: '100%' }} />
      </div>
    </>
  );
};
