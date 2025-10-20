'use client';

import { RetardScroll } from '@/hooks/RetardScroll';
import { CommunesIndicateursDto } from '@/lib/dto';
import { AOT40 } from '@/lib/postgres/models';
import { getArrayDepth } from '@/lib/utils/reusableFunctions/arrayDepth';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Any } from '@/lib/utils/types';
import * as turf from '@turf/turf';
import { mapStyles } from 'carte-facile';
import { Position } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { RefObject, useEffect, useMemo, useRef } from 'react';
import { AOT40Tooltip } from './components/tooltips';
import './maps.css';

const color = (valeur: number) => {
  return valeur > 36000
    ? '#5524A0'
    : valeur > 27000
      ? '#E8323B'
      : valeur > 18000
        ? '#FFCF5E'
        : valeur > 12000
          ? '#3E8F3E'
          : valeur > 6000
            ? '#009ADC'
            : '#5EEDF3';
};

const getCentroid = (arr: number[][]) => {
  if (!arr || arr.length === 0) {
    return [0, 0]; // Valeur par défaut si pas de coordonnées
  }
  const centroid = arr.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
  return [centroid[1], centroid[0]];
};

const getCoordinates = (coords: number[][][]) => {
  if (!coords || coords.length === 0) {
    return [0, 0]; // Valeur par défaut si pas de coordonnées
  }
  const coords_arr = [];
  for (let i = 0; i < coords.length; i++) {
    const center = getCentroid(coords[i]);
    coords_arr.push(center);
  }
  return getCentroid(coords_arr);
};

export const MapAOT40 = (props: {
  aot40: AOT40[];
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { aot40, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);

  const commune = type === "commune"
    ? carteCommunes.find(
      (commune) => commune.properties.code_geographique === code
    ) : null;

  const carteCommunesFiltered = type === "ept"
    ? carteCommunes.filter(
      (el) => el.properties.ept === libelle
    )
    : carteCommunes;
  const allCoordinates = carteCommunesFiltered
    .map((el) => el.geometry.coordinates?.[0]?.[0])
    .filter((coords): coords is number[][] => coords !== undefined && coords !== null);

  const union = turf.union(
    turf.featureCollection(carteCommunesFiltered as Any),
  );

  const centerCoord: number[] = commune
    ? commune.properties.coordinates.split(',').map(Number).sort((a, b) => a - b)
    : getCoordinates(allCoordinates);

  const aot40Data = useMemo(() => {
    return aot40.map((aot) => {
      return {
        coordinates: [aot.Longitude, aot.Latitude],
        value: aot.valeur_brute,
        nom_site: aot.nom_site,
        type_implantation: aot.type_d_implantation,
        color: color(aot.valeur_brute!)
      };
    });
  }, [aot40]);

  const polygonTerritoire = type === "commune" && commune?.geometry.coordinates
    ? turf.multiPolygon(commune.geometry.coordinates as Position[][][])
    : union?.geometry.coordinates
      ? turf.multiPolygon(union.geometry.coordinates as Position[][][])
      : null;

  // Pour certains multipolygones, on a plusieurs arrays de coordonnées si les territoires sont disjoints
  const flattenedCoordinates = polygonTerritoire && polygonTerritoire.geometry.coordinates
    ? (getArrayDepth(polygonTerritoire.geometry.coordinates) === 4
      ? polygonTerritoire.geometry.coordinates[0]
      : polygonTerritoire.geometry.coordinates)
    : [];

  // On inverse les coordonnées pour les passer à turf.polygon
  // car turf.polygon attend des coordonnées au format [longitude, latitude]
  const newPolygonTerritoire = flattenedCoordinates.length > 0
    ? turf.polygon(flattenedCoordinates.map(
      el => el.map(
        coords => [coords[1], coords[0]]
      )
    ) as unknown as Position[][]
    )
    : turf.polygon([[[0, 0], [0, 0.001], [0.001, 0.001], [0.001, 0], [0, 0]]]);

  const enveloppe = turf.envelope(newPolygonTerritoire).geometry.coordinates[0];
  const pointCollection = aot40Data.map((aot) => {
    return turf.point([aot.coordinates[1], aot.coordinates[0]]); // [longitude, latitude] inversé pour turf
  });
  const featureCollection = turf.featureCollection(pointCollection);
  const nearestPoint = turf.nearestPoint(
    turf.point([centerCoord[1], centerCoord[0]]),
    featureCollection
  );
  const bbox = turf.bbox(
    turf.featureCollection([nearestPoint as Any, newPolygonTerritoire])
  );
  const boundsIfNoPoint = [
    [bbox[0], bbox[3]],
    [bbox[0], bbox[1]],
    [bbox[2], bbox[1]],
    [bbox[2], bbox[3]],
    [bbox[0], bbox[3]]
  ];

  const geoJsonData = useMemo(() => {
    if (commune) {
      return {
        type: "FeatureCollection" as "FeatureCollection",
        features: [{
          type: "Feature" as "Feature",
          geometry: commune.geometry as import('geojson').Geometry,
          properties: commune.properties,
          id: commune.properties.code_geographique
        }]
      };
    }
    return {
      type: "FeatureCollection" as "FeatureCollection",
      features: carteCommunesFiltered.map(commune => ({
        type: "Feature" as "Feature",
        geometry: commune.geometry as import('geojson').Geometry,
        properties: commune.properties,
        id: commune.properties.code_geographique
      }))
    };
  }, [commune, carteCommunesFiltered]);

  const aot40GeoJson = useMemo(() => {
    return {
      type: "FeatureCollection" as "FeatureCollection",
      features: aot40Data.map((aot, index) => ({
        type: "Feature" as "Feature",
        geometry: {
          type: "Point" as "Point",
          coordinates: aot.coordinates
        },
        properties: {
          nom_site: aot.nom_site,
          value: aot.value,
          type_implantation: aot.type_implantation,
          color: aot.color
        },
        id: index
      }))
    };
  }, [aot40Data]);

  useEffect(() => {
    if (mapRef.current && mapRef.current.isStyleLoaded()) {
      const source = mapRef.current.getSource('territoire');
      if (source) {
        (source as maplibregl.GeoJSONSource).setData(geoJsonData);
      }
      const aot40Source = mapRef.current.getSource('aot40-points');
      if (aot40Source) {
        (aot40Source as maplibregl.GeoJSONSource).setData(aot40GeoJson);
      }
    }
  }, [geoJsonData, aot40GeoJson]);

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
      // Déterminer les limites en fonction de si le point le plus proche est dans le polygone
      const shouldUseTerritoireBounds = turf.booleanPointInPolygon(
        nearestPoint,
        turf.polygon([enveloppe])
      );

      if (shouldUseTerritoireBounds) {
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
            { padding: 50 },
          );
        }
      } else {
        if (
          boundsIfNoPoint &&
          Array.isArray(boundsIfNoPoint) &&
          boundsIfNoPoint.length > 1 &&
          Array.isArray(boundsIfNoPoint[0]) &&
          boundsIfNoPoint[0].length === 2
        ) {
          const lons = boundsIfNoPoint.map((coord: number[]) => coord[1]);
          const lats = boundsIfNoPoint.map((coord: number[]) => coord[0]);
          const minLng = Math.min(...lons);
          const maxLng = Math.max(...lons);
          const minLat = Math.min(...lats);
          const maxLat = Math.max(...lats);
          map.fitBounds(
            [[minLng, minLat], [maxLng, maxLat]],
            { padding: 50 },
          );
        }
      }

      map.addSource('territoire', {
        type: 'geojson',
        data: geoJsonData,
      });

      map.addLayer({
        id: 'territoire-fill',
        type: 'fill',
        source: 'territoire',
        paint: {
          'fill-opacity': 0
        }
      });

      map.addLayer({
        id: 'territoire-stroke',
        type: 'line',
        source: 'territoire',
        paint: {
          'line-color': '#161616',
          'line-width': 1,
          'line-opacity': 1
        }
      });

      map.addSource('aot40-points', {
        type: 'geojson',
        data: aot40GeoJson,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 30
      });

      // Ajouter les couches de cercles de cluster avec effet de contour
      map.addLayer({
        id: 'clusters-outline',
        type: 'circle',
        source: 'aot40-points',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': 'rgba(128, 130, 132, 0.4)', // #80828466
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            23, // rayon pour count < 4 (20 + 3 pour le contour)
            4, 25.5, // rayon pour count >= 4 (22.5 + 3)
            10, 35.5 // rayon pour count >= 10 (32.5 + 3)
          ]
        }
      });

      map.addLayer({
        id: 'clusters-border',
        type: 'circle',
        source: 'aot40-points',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': '#ffffff',
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            21.4, // rayon pour count < 4 (20 + 1.4 pour la bordure)
            4, 23.9, // rayon pour count >= 4 (22.5 + 1.4)
            10, 33.9 // rayon pour count >= 10 (32.5 + 1.4)
          ]
        }
      });

      // Cercle principal du cluster
      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'aot40-points',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': '#8d8d8d',
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            4, 22.5,
            10, 32.5
          ]
        }
      });

      // Ajouter les labels de comptage des clusters
      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'aot40-points',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['Marianne', 'Serif Bold'],
          'text-size': 14
        },
        paint: {
          'text-color': '#ffffff'
        }
      });

      // Ajouter la couche des points non clusterisés
      map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'aot40-points',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': ['get', 'color'],
          'circle-radius': 9,
          'circle-stroke-width': 0
        }
      });

      map.on('click', 'clusters', async (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['clusters']
        });
        if (features.length > 0) {
          const clusterId = features[0].properties?.cluster_id;
          const source = map.getSource('aot40-points') as maplibregl.GeoJSONSource;
          try {
            const zoom = await source.getClusterExpansionZoom(clusterId);
            if (features[0].geometry.type === 'Point') {
              map.easeTo({
                center: features[0].geometry.coordinates as [number, number],
                zoom: zoom
              });
            }
          } catch (err) {
            console.error('Error getting cluster expansion zoom:', err);
          }
        }
      });

      // Tooltip au survol du cluster - vérifie aussi les couches clusters-outline et clusters-border
      const clusterLayers = ['clusters', 'clusters-border', 'clusters-outline'];

      clusterLayers.forEach(layerId => {
        map.on('mouseenter', layerId, async (e) => {
          map.getCanvas().style.cursor = 'pointer';
          if (e.features && e.features.length > 0) {
            const clusterId = e.features[0].properties?.cluster_id;
            const source = map.getSource('aot40-points') as maplibregl.GeoJSONSource;
            try {
              const features = await source.getClusterLeaves(clusterId, 100, 0);
              if (!features) return;
              const sitesInCluster = features.map((f: any) => f.properties?.nom_site).filter(Boolean);
              const containerHeight = mapContainer.current?.clientHeight || 500;
              const mouseY = e.point.y;
              const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';

              if (popupRef.current) {
                popupRef.current.remove();
              }

              popupRef.current = new maplibregl.Popup({
                closeButton: false,
                closeOnClick: false,
                className: 'aot40-tooltip',
                anchor: placement,
                maxWidth: 'none',
                offset: placement === 'top' ? [0, 25] : [0, -10]
              })
                .setLngLat(e.lngLat)
                .setHTML(AOT40Tooltip(sitesInCluster))
                .addTo(map);
            } catch (err) {
              console.error('Error getting cluster leaves:', err);
            }
          }
        });

        map.on('mouseleave', layerId, () => {
          map.getCanvas().style.cursor = '';
          if (popupRef.current) {
            popupRef.current.remove();
            popupRef.current = null;
          }
        });

        // Mettre à jour la position du popup du cluster lors du déplacement de la souris
        map.on('mousemove', layerId, (e) => {
          if (popupRef.current && e.features && e.features.length > 0) {
            popupRef.current.setLngLat(e.lngLat);
          }
        });
      });

      // Survol d'un point non clusterisé
      map.on('mouseenter', 'unclustered-point', (e) => {
        map.getCanvas().style.cursor = 'pointer';
        if (e.features && e.features.length > 0) {
          const properties = e.features[0].properties;
          const nom_site = properties?.nom_site;
          const value = properties?.value;

          const containerHeight = mapContainer.current?.clientHeight || 500;
          const mouseY = e.point.y;
          const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';

          if (popupRef.current) {
            popupRef.current.remove();
          }

          const tooltipContent = `
            <div class="flex flex-row justify-between p-0 gap-2 items-center w-max">
              <div class="text-sm">
                ${nom_site} : 
              </div>
              <div class="text-sm font-bold">
                ${Round(Number(value), 0)} µg/m3
              </div>
            </div>
          `;

          popupRef.current = new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            className: 'aot40-popup',
            anchor: placement,
            maxWidth: 'none',
            offset: placement === 'top' ? [0, 25] : [0, -20]
          })
            .setLngLat(e.lngLat)
            .setHTML(tooltipContent)
            .addTo(map);
        }
      });

      map.on('mouseleave', 'unclustered-point', () => {
        map.getCanvas().style.cursor = '';
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });

      // Mettre à jour la position du popup lors du déplacement de la souris
      map.on('mousemove', 'unclustered-point', (e) => {
        if (popupRef.current && e.features && e.features.length > 0) {
          popupRef.current.setLngLat(e.lngLat);
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
  }, [geoJsonData, aot40GeoJson, enveloppe, boundsIfNoPoint, nearestPoint]);

  // Ref local pour le RetardScroll
  const localContainerRef = mapContainer as RefObject<HTMLElement>;

  return (
    <>
      <style jsx global>{`
        .maplibregl-popup.aot40-popup .maplibregl-popup-content,
        .maplibregl-popup.aot40-tooltip .maplibregl-popup-content {
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 18, 0.16) !important;
          border-radius: 6px !important;
          padding: 1rem !important;
        }
        .map-container {
          overflow: visible !important;
        }
      `}</style>
      <div style={{ position: 'relative' }}>
        <div ref={mapContainer} className='map-container' style={{ height: '500px', width: '100%' }} />
        <RetardScroll mapRef={mapRef} containerRef={localContainerRef} delay={300} />
      </div>
    </>
  );
};
