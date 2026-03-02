// "use client";
// import { RetardScroll } from '@/hooks/RetardScroll';
// import { CommunesIndicateursDto, EtatCoursDeauDto } from '@/lib/dto';
// import { QualiteSitesBaignade } from '@/lib/postgres/models';
// import { mapStyles } from 'carte-facile';
// import { Feature, GeoJsonProperties, Geometry } from 'geojson';
// import maplibregl from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';
// import { useSearchParams } from 'next/navigation';
// import { RefObject, useEffect, useMemo, useRef } from 'react';
// import { BoundsFromCollection } from '../components/boundsFromCollection';
// import { CoursDeauTooltip } from '../components/tooltips';
// import styles from './maps.module.scss';

// export const MapEtatCoursDeau = (props: {
//   etatCoursDeau: EtatCoursDeauDto[];
//   carteCommunes: CommunesIndicateursDto[];
//   qualiteEauxBaignade?: QualiteSitesBaignade[];
// }) => {
//   const { etatCoursDeau, carteCommunes, qualiteEauxBaignade } = props;
//   const searchParams = useSearchParams();
//   const code = searchParams.get('code')!;
//   const type = searchParams.get('type')!;
//   const libelle = searchParams.get('libelle')!;
//   const mapContainer = useRef<HTMLDivElement>(null);
//   const mapRef = useRef<maplibregl.Map | null>(null);
//   const popupRef = useRef<maplibregl.Popup | null>(null);
//   const hoveredFeatureRef = useRef<string | null>(null);

//   const carteCommunesFiltered = useMemo(() => (
//     type === "ept"
//       ? carteCommunes.filter(el => el.properties.ept === libelle)
//       : carteCommunes
//   ), [carteCommunes, type, libelle]);
//   const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);

//   // Helper functions for sites de baignade
//   const qualiteIcon = (qualite: string | undefined) => {
//     return qualite === 'E'
//       ? '/qualite_baignade_excellent.svg'
//       : qualite === 'B'
//         ? '/qualite_baignade_bon.svg'
//         : qualite === 'S'
//           ? '/qualite_baignade_suffisant.svg'
//           : qualite === 'I'
//             ? '/qualite_baignade_insuffisant.svg'
//             : qualite === 'P'
//               ? '/qualite_baignade_manque_prelevement.svg'
//               : '/qualite_baignade_non_classe.svg';
//   };

//   const qualiteLabel = (qualite: string | undefined) => {
//     return qualite === 'E'
//       ? 'Excellent'
//       : qualite === 'B'
//         ? 'Bon'
//         : qualite === 'S'
//           ? 'Suffisant'
//           : qualite === 'I'
//             ? 'Insuffisant'
//             : qualite === 'P'
//               ? 'Insuffisamment de prélèvement'
//               : 'Site non classé';
//   };

//   // Color logic for cours d'eau
//   const getColor = (d: string | null) => {
//     if (d === '1') {
//       return '#0095C8';
//     } else if (d === '2') {
//       return '#00C190';
//     } else if (d === '3') {
//       return '#FFCF5E';
//     } else if (d === '4') {
//       return '#F66E19';
//     } else if (d === '5') {
//       return '#B5000E';
//     } else {
//       return '#9D9C9C';
//     }
//   };

//   // GeoJSON for territory polygons
//   const territoryGeoJson = useMemo(() => ({
//     type: "FeatureCollection" as "FeatureCollection",
//     features: carteCommunesFiltered.map(commune => ({
//       type: "Feature" as "Feature",
//       geometry: commune.geometry as import('geojson').Geometry,
//       properties: commune.properties,
//       id: commune.properties.code_geographique
//     }))
//   }), [carteCommunesFiltered]);

//   const coursDeauGeoJson = useMemo(() => ({
//     type: "FeatureCollection" as const,
//     features: etatCoursDeau.map((cours, idx) => ({
//       type: "Feature",
//       geometry: cours.geometry,
//       properties: cours.properties,
//       id: idx
//     })) as Feature<Geometry, GeoJsonProperties>[]
//   }), [etatCoursDeau]);

//   // GeoJSON for sites de baignade
//   const sitesBaignadeGeoJson = useMemo(() => {
//     if (!qualiteEauxBaignade) return null;
//     return {
//       type: "FeatureCollection" as const,
//       features: qualiteEauxBaignade.map((site, idx) => ({
//         type: "Feature" as const,
//         geometry: {
//           type: "Point" as const,
//           coordinates: [site.LONG, site.LAT]
//         },
//         properties: {
//           nomSite: site.POINT,
//           qualite2020: site.QEB_2020?.slice(-1),
//           icon: qualiteIcon(site.QEB_2020?.slice(-1))
//         },
//         id: idx
//       }))
//     };
//   }, [qualiteEauxBaignade]);

//   useEffect(() => {
//     if (!mapContainer.current) return;
//     const map = new maplibregl.Map({
//       container: mapContainer.current,
//       style: mapStyles.desaturated,
//       attributionControl: false,
//     });
//     mapRef.current = map;
//     // s'assure que le zoom au scroll est désactivé immédiatement pour éviter de capturer les défilements de page
//     try { map.scrollZoom.disable(); } catch (e) { /* noop */ }

//     map.on('load', () => {
//       // Fit bounds
//       if (
//         enveloppe &&
//         Array.isArray(enveloppe) &&
//         enveloppe.length > 1 &&
//         Array.isArray(enveloppe[0]) &&
//         enveloppe[0].length === 2
//       ) {
//         const lons = enveloppe.map((coord: number[]) => coord[1]);
//         const lats = enveloppe.map((coord: number[]) => coord[0]);
//         const minLng = Math.min(...lons);
//         const maxLng = Math.max(...lons);
//         const minLat = Math.min(...lats);
//         const maxLat = Math.max(...lats);
//         map.fitBounds(
//           [[minLng, minLat], [maxLng, maxLat]],
//           { padding: 20 },
//         );
//       }

//       map.addSource('territory', {
//         type: 'geojson',
//         data: territoryGeoJson,
//         generateId: false
//       });
//       map.addLayer({
//         id: 'territory-fill',
//         type: 'fill',
//         source: 'territory',
//         paint: {
//           'fill-opacity': 0,
//         }
//       });
//       map.addLayer({
//         id: 'territory-stroke',
//         type: 'line',
//         source: 'territory',
//         paint: {
//           'line-color': [
//             'case',
//             ['==', ['get', 'code_geographique'], code],
//             '#161616',
//             '#161616'
//           ],
//           'line-width': [
//             'case',
//             ['==', ['get', 'code_geographique'], code],
//             2,
//             0.5
//           ],
//           'line-opacity': 0.9
//         }
//       });

//       map.addSource('coursDeau', {
//         type: 'geojson',
//         data: coursDeauGeoJson,
//         generateId: false
//       });
//       map.addLayer({
//         id: 'coursDeau-line',
//         type: 'line',
//         source: 'coursDeau',
//         paint: {
//           'line-color': [
//             'match',
//             ['get', 'etateco'],
//             '1', '#0095C8',
//             '2', '#00C190',
//             '3', '#FFCF5E',
//             '4', '#F66E19',
//             '5', '#B5000E',
//             '#9D9C9C'
//           ],
//           'line-width': [
//             'case',
//             ['boolean', ['feature-state', 'hover'], false],
//             7,
//             3
//           ],
//           'line-opacity': 0.95
//         }
//       });

//       map.on('mouseenter', 'coursDeau-line', (e) => {
//         if (e.features && e.features.length > 0) {
//           const feature = e.features[0];
//           const properties = feature.properties;
//           if (hoveredFeatureRef.current) {
//             map.setFeatureState(
//               { source: 'coursDeau', id: hoveredFeatureRef.current },
//               { hover: false }
//             );
//           }
//           const newHoveredFeature = properties.id;
//           hoveredFeatureRef.current = newHoveredFeature;
//           if (newHoveredFeature) {
//             map.setFeatureState(
//               { source: 'coursDeau', id: newHoveredFeature },
//               { hover: true }
//             );
//           }
//           const coursDeauName = properties?.name;
//           const color = getColor(properties?.etateco);
//           const tooltipContent = CoursDeauTooltip(coursDeauName, color);
//           if (popupRef.current) {
//             popupRef.current.remove();
//           }
//           const containerHeight = mapContainer.current?.clientHeight || 500;
//           const mouseY = e.point.y;
//           const mouseX = e.point.x;
//           const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';
//           const offset: [number, number] = (mouseX > 400) ? [-75, 0] : [75, 0];
//           popupRef.current = new maplibregl.Popup({
//             closeButton: false,
//             closeOnClick: false,
//             className: 'coursdeau-tooltip',
//             anchor: placement,
//             offset: offset,
//             maxWidth: 'none'
//           })
//             .setLngLat(e.lngLat)
//             .setHTML(tooltipContent)
//             .addTo(map);
//         }
//       });

//       map.on('mouseleave', 'coursDeau-line', () => {
//         if (hoveredFeatureRef.current) {
//           map.setFeatureState(
//             { source: 'coursDeau', id: hoveredFeatureRef.current },
//             { hover: false }
//           );
//         }
//         hoveredFeatureRef.current = null;
//         if (popupRef.current) {
//           popupRef.current.remove();
//           popupRef.current = null;
//         }
//       });

//       map.on('mousemove', 'coursDeau-line', (e) => {
//         if (e.features && e.features.length > 0) {
//           const feature = e.features[0];
//           const properties = feature.properties;
//           const newHoveredFeature = properties.id;
//           const containerHeight = mapContainer.current?.clientHeight || 500;
//           const mouseY = e.point.y;
//           const mouseX = e.point.x;
//           const placement = (mouseY > containerHeight / 2) ? 'bottom' : 'top';
//           const offset: [number, number] = (mouseX > 400) ? [-75, 0] : [75, 0];
//           if (hoveredFeatureRef.current !== newHoveredFeature) {
//             if (hoveredFeatureRef.current) {
//               map.setFeatureState(
//                 { source: 'coursDeau', id: hoveredFeatureRef.current },
//                 { hover: false }
//               );
//             }
//             hoveredFeatureRef.current = newHoveredFeature;
//             if (newHoveredFeature) {
//               map.setFeatureState(
//                 { source: 'coursDeau', id: newHoveredFeature },
//                 { hover: true }
//               );
//             }
//             const coursDeauName = properties?.name;
//             const color = getColor(properties?.etateco);
//             const tooltipContent = CoursDeauTooltip(coursDeauName, color);
//             if (popupRef.current) popupRef.current.remove();
//             popupRef.current = new maplibregl.Popup({
//               closeButton: false,
//               closeOnClick: false,
//               className: 'coursdeau-tooltip',
//               anchor: placement,
//               offset: offset,
//               maxWidth: 'none'
//             })
//               .setLngLat(e.lngLat)
//               .setHTML(tooltipContent)
//               .addTo(map);
//           } else if (popupRef.current) {
//             popupRef.current.setLngLat(e.lngLat);
//           }
//         }
//       });

//       map.on('mouseenter', 'coursDeau-line', () => {
//         map.getCanvas().style.cursor = 'pointer';
//       });
//       map.on('mouseleave', 'coursDeau-line', () => {
//         map.getCanvas().style.cursor = '';
//       });

//       // Ajouter les sites de baignade si disponibles
//       if (sitesBaignadeGeoJson) {
//         const iconsToLoad = [
//           { name: 'excellent', url: qualiteIcon('E') },
//           { name: 'bon', url: qualiteIcon('B') },
//           { name: 'suffisant', url: qualiteIcon('S') },
//           { name: 'insuffisant', url: qualiteIcon('I') },
//           { name: 'manque', url: qualiteIcon('P') },
//           { name: 'non-classe', url: qualiteIcon(undefined) }
//         ];

//         const loadIcons = async () => {
//           for (const iconDef of iconsToLoad) {
//             const img = new Image(36, 36);
//             img.src = iconDef.url;
//             await new Promise((resolve, reject) => {
//               img.onload = () => {
//                 if (!map.hasImage(iconDef.name)) {
//                   map.addImage(iconDef.name, img);
//                 }
//                 resolve(true);
//               };
//               img.onerror = reject;
//             });
//           }
//         };

//         loadIcons().then(() => {
//           map.addSource('sitesBaignade', {
//             type: 'geojson',
//             data: sitesBaignadeGeoJson,
//             cluster: true,
//             clusterMaxZoom: 14,
//             clusterRadius: 20
//           });

//           // Couches pour les clusters (similaire à mapAOT40)
//           map.addLayer({
//             id: 'baignade-clusters-outline',
//             type: 'circle',
//             source: 'sitesBaignade',
//             filter: ['has', 'point_count'],
//             paint: {
//               'circle-color': 'rgba(128, 130, 132, 0.4)',
//               'circle-radius': [
//                 'step',
//                 ['get', 'point_count'],
//                 23,
//                 4, 25.5,
//                 10, 35.5
//               ]
//             }
//           });

//           map.addLayer({
//             id: 'baignade-clusters-border',
//             type: 'circle',
//             source: 'sitesBaignade',
//             filter: ['has', 'point_count'],
//             paint: {
//               'circle-color': '#ffffff',
//               'circle-radius': [
//                 'step',
//                 ['get', 'point_count'],
//                 21.4,
//                 4, 23.9,
//                 10, 33.9
//               ]
//             }
//           });

//           map.addLayer({
//             id: 'baignade-clusters',
//             type: 'circle',
//             source: 'sitesBaignade',
//             filter: ['has', 'point_count'],
//             paint: {
//               'circle-color': '#8d8d8d',
//               'circle-radius': [
//                 'step',
//                 ['get', 'point_count'],
//                 20,
//                 4, 22.5,
//                 10, 32.5
//               ]
//             }
//           });

//           map.addLayer({
//             id: 'baignade-cluster-count',
//             type: 'symbol',
//             source: 'sitesBaignade',
//             filter: ['has', 'point_count'],
//             layout: {
//               'text-field': '{point_count_abbreviated}',
//               'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
//               'text-size': 14
//             },
//             paint: {
//               'text-color': '#ffffff'
//             }
//           });

//           // Points individuels avec icônes
//           map.addLayer({
//             id: 'baignade-points',
//             type: 'symbol',
//             source: 'sitesBaignade',
//             filter: ['!', ['has', 'point_count']],
//             layout: {
//               'icon-image': [
//                 'match',
//                 ['get', 'qualite2020'],
//                 'E', 'excellent',
//                 'B', 'bon',
//                 'S', 'suffisant',
//                 'I', 'insuffisant',
//                 'P', 'manque',
//                 'non-classe'
//               ],
//               'icon-size': 1,
//               'icon-allow-overlap': true
//             }
//           });

//           // Événements pour les clusters
//           const baignadeClusterLayers = ['baignade-clusters', 'baignade-clusters-border', 'baignade-clusters-outline'];

//           baignadeClusterLayers.forEach(layerId => {
//             map.on('mouseenter', layerId, async (e) => {
//               map.getCanvas().style.cursor = 'pointer';
//               if (e.features && e.features.length > 0) {
//                 const clusterId = e.features[0].properties?.cluster_id;
//                 const source = map.getSource('sitesBaignade') as maplibregl.GeoJSONSource;
//                 try {
//                   const features = await source.getClusterLeaves(clusterId, 100, 0);
//                   if (!features) return;
//                   const sitesInCluster = features.map((f: any) => f.properties?.nomSite).filter(Boolean).slice(0, 10);
//                   const hasMore = features.length > 10;

//                   const tooltipContent = `<div style="padding: 0.25rem;">
//                     <div style="font-size: 0.75rem; font-family: Marianne; font-weight: 400; border-bottom: 1px solid #B8B8B8; margin-bottom: 0.5rem;">
//                       Dans ce regroupement :
//                     </div>
//                     <div style="display: flex; flex-direction: column; font-size: 10px; font-family: Marianne; font-weight: 700;">
//                       ${sitesInCluster.map((site: string) => `<div>${site}</div>`).join('')}
//                       ${hasMore ? '<div>...</div>' : ''}
//                     </div>
//                   </div>`;

//                   if (popupRef.current) {
//                     popupRef.current.remove();
//                   }

//                   popupRef.current = new maplibregl.Popup({
//                     closeButton: false,
//                     closeOnClick: false,
//                     className: 'baignade-cluster-tooltip',
//                     anchor: 'top',
//                     maxWidth: 'none'
//                   })
//                     .setLngLat(e.lngLat)
//                     .setHTML(tooltipContent)
//                     .addTo(map);
//                 } catch (err) {
//                   console.error('Error getting cluster leaves:', err);
//                 }
//               }
//             });

//             map.on('mouseleave', layerId, () => {
//               map.getCanvas().style.cursor = '';
//               if (popupRef.current) {
//                 popupRef.current.remove();
//                 popupRef.current = null;
//               }
//             });

//             map.on('mousemove', layerId, (e) => {
//               if (popupRef.current && e.features && e.features.length > 0) {
//                 popupRef.current.setLngLat(e.lngLat);
//               }
//             });

//             map.on('click', layerId, async (e) => {
//               const features = map.queryRenderedFeatures(e.point, {
//                 layers: [layerId]
//               });
//               if (features.length > 0) {
//                 const clusterId = features[0].properties?.cluster_id;
//                 const source = map.getSource('sitesBaignade') as maplibregl.GeoJSONSource;
//                 try {
//                   const zoom = await source.getClusterExpansionZoom(clusterId);
//                   if (features[0].geometry.type === 'Point') {
//                     map.easeTo({
//                       center: features[0].geometry.coordinates as [number, number],
//                       zoom: zoom
//                     });
//                   }
//                 } catch (err) {
//                   console.error('Error getting cluster expansion zoom:', err);
//                 }
//               }
//             });
//           });

//           // Événements pour les points individuels
//           map.on('mouseenter', 'baignade-points', (e) => {
//             map.getCanvas().style.cursor = 'pointer';
//             if (e.features && e.features.length > 0) {
//               const properties = e.features[0].properties;
//               const nomSite = properties?.nomSite;
//               const qualite = properties?.qualite2020;
//               const label = qualiteLabel(qualite);
//               const icon = qualiteIcon(qualite);

//               const tooltipContent = `
//                 <div class="${styles.qualiteSitesBaignadePopupWrapper}" style="display: flex; align-items: center; gap: 0.5rem;">
//                   <img src="${icon}" alt="" style="width: 18px; height: 18px;" />
//                   <div>
//                     <p style="margin: 0; font-weight: 400; font-size: 0.875rem;">${nomSite}</p>
//                     <p style="margin: 0; font-weight: 700; font-size: 0.875rem;">${label}</p>
//                   </div>
//                 </div>
//               `;

//               if (popupRef.current) {
//                 popupRef.current.remove();
//               }

//               popupRef.current = new maplibregl.Popup({
//                 closeButton: false,
//                 closeOnClick: false,
//                 className: 'baignade-point-popup',
//                 anchor: 'bottom',
//                 offset: [0, -10],
//                 maxWidth: 'none'
//               })
//                 .setLngLat(e.lngLat)
//                 .setHTML(tooltipContent)
//                 .addTo(map);
//             }
//           });

//           map.on('mouseleave', 'baignade-points', () => {
//             map.getCanvas().style.cursor = '';
//             if (popupRef.current) {
//               popupRef.current.remove();
//               popupRef.current = null;
//             }
//           });

//           map.on('mousemove', 'baignade-points', (e) => {
//             if (popupRef.current && e.features && e.features.length > 0) {
//               popupRef.current.setLngLat(e.lngLat);
//             }
//           });
//         });
//       }

//       map.addControl(new maplibregl.NavigationControl(), 'top-right');
//     });

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//         mapRef.current = null;
//       }
//     };
//   }, [territoryGeoJson, coursDeauGeoJson, sitesBaignadeGeoJson, enveloppe, code]);

//   // Ref local pour le RetardScroll
//   const localContainerRef = mapContainer as RefObject<HTMLElement>;

//   return (
//     <>
//       <style jsx global>{`
//         .maplibregl-popup.coursdeau-tooltip .maplibregl-popup-content,
//         .maplibregl-popup.baignade-cluster-tooltip .maplibregl-popup-content,
//         .maplibregl-popup.baignade-point-popup .maplibregl-popup-content {
//           box-shadow: 0px 2px 6px 0px rgba(0, 0, 18, 0.16) !important;
//           border-radius: 6px !important;
//           padding: 0.5rem !important;
//         }
//         .map-container {
//           overflow: visible !important;
//         }
//       `}</style>
//       <div style={{ position: 'relative' }}>
//         <div ref={mapContainer} className='map-container' style={{ height: '500px', width: '100%', cursor: 'pointer' }} />
//         <RetardScroll mapRef={mapRef} containerRef={localContainerRef} delay={300} />
//       </div>
//     </>
//   );
// };
