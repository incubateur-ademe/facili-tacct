// "use client";
// import DataNotFound from '@/assets/images/no_data_on_territory.svg';
// import { MicroNumberCircle } from '@/components/charts/MicroDataviz';
// import { ExportButtonNouveauParcours } from '@/components/exports/ExportButton';
// import DataNotFoundForGraph from "@/components/graphDataNotFound";
// import { aot40Legends } from '@/components/maps/legends/datavizLegends';
// import { LegendCompColor } from '@/components/maps/legends/legendComp';
// import { MapAOT40 } from '@/components/maps/mapAOT40';
// import { CustomTooltipNouveauParcours } from '@/components/utils/Tooltips';
// import { Body } from "@/design-system/base/Textes";
// import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
// import { AOT40, CarteCommunes } from "@/lib/postgres/models";
// import { AOT40Text } from '@/lib/staticTexts';
// import { AOT40DynamicText } from '@/lib/textesIndicateurs/biodiversiteDynamicTexts';
// import { AOT40TooltipText } from '@/lib/tooltipTexts';
// import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
// import * as turf from '@turf/turf';
// import { useSearchParams } from "next/navigation";
// import styles from '../../explorerDonnees.module.scss';

// const getInverseCentroid = (arr: number[][]) => {
//   const centroid = arr?.reduce(
//     (x: number[], y: number[]) => {
//       return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
//     },
//     [0, 0]
//   );
//   return [centroid[1], centroid[0]];
// };

// const getNormalCentroid = (arr: number[][]) => {
//   const centroid = arr?.reduce(
//     (x: number[], y: number[]) => {
//       return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
//     },
//     [0, 0]
//   );
//   return centroid;
// };

// const getCoordinates = (coords: number[][][]) => {
//   const coords_arr = [];
//   for (let i = 0; i < coords.length; i++) {
//     const center = getInverseCentroid(coords[i]);
//     coords_arr.push(center);
//   }
//   return getNormalCentroid(coords_arr);
// };

// export const OzoneEtVegetation = (props: {
//   aot40: AOT40[];
//   carteCommunes: CarteCommunes[];
// }) => {
//   const { aot40, carteCommunes } = props;
//   const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);
//   const searchParams = useSearchParams();
//   const code = searchParams.get('code')!;
//   const libelle = searchParams.get('libelle')!;
//   const type = searchParams.get('type')!;
//   const commune = type === "commune"
//     ? carteCommunesMap.find(
//       (commune) => commune.properties.code_geographique === code
//     ) : null;

//   const carteCommunesFiltered = type === "ept"
//     ? carteCommunesMap.filter(
//       (el) => el.properties.ept === libelle
//     ) : carteCommunesMap;

//   const allCoordinates = carteCommunesFiltered.map(
//     (el) => el.geometry.coordinates?.[0]?.[0]
//   );

//   const centerCoord: number[] = commune
//     ? commune.properties.coordinates.split(',').map(Number)
//     : getCoordinates(allCoordinates);

//   const aot40map = aot40.map((aot) => {
//     return {
//       coordinates: [aot.Latitude, aot.Longitude],
//       value: aot.valeur_brute,
//       nom_site: aot.nom_site,
//       type_implantation: aot.type_d_implantation
//     };
//   });

//   const pointCollection = aot40map.map((aot) => {
//     return turf.point(aot.coordinates as number[], {
//       value: aot.value,
//       nom_site: aot.nom_site
//     });
//   });
//   const featureCollection = turf.featureCollection(pointCollection);
//   const nearestPoint = turf.nearestPoint(
//     turf.point([centerCoord[0], centerCoord[1]]),
//     featureCollection
//   );

//   // on trace un "cercle" autour du territoire (rayon = distance à la station la plus proche + 20km)
//   // Le cercle est en fait un polygone avec 10 côtés (steps)
//   // paramètres : centre, rayon, options
//   const circle = turf.circle(
//     [centerCoord[0], centerCoord[1]],
//     nearestPoint.properties.distanceToPoint + 20,
//     { steps: 10, units: 'kilometers' }
//   );
//   // On sélectionne les stations dans le cercle, soit dans un rayon de distanceToPoint + 20km
//   const stationsWithinCircle = turf.pointsWithinPolygon(
//     featureCollection,
//     circle
//   );
//   // on extrait la station avec la valeur max parmi celles sélectionnées
//   const stationWithMaxValue = stationsWithinCircle.features.length
//     ? stationsWithinCircle.features
//       .filter((f) => f.properties?.value === Math.max(...stationsWithinCircle.features.map((f) => f.properties?.value)))
//     : null;
//   const exportData = IndicatorExportTransformations.biodiversite.aot40(aot40);
//   return (
//     <>
//       <div className={styles.datavizMapContainer}>
//         <div className={styles.chiffreDynamiqueWrapper} >
//           {stationWithMaxValue && <MicroNumberCircle valeur={stationWithMaxValue[0].properties.value} arrondi={0} unite='µg/m³' />}
//           <div className={styles.text}>
//             <AOT40DynamicText
//               stationWithMaxValue={stationWithMaxValue}
//               nearestPoint={nearestPoint}
//             />
//             <CustomTooltipNouveauParcours
//               title={AOT40TooltipText}
//               texte="D'où vient ce chiffre ?"
//             />
//           </div>
//         </div>
//         <div className='pr-5 pt-8'>
//           <AOT40Text />
//         </div>
//         <div className={styles.mapWrapper}>
//           {
//             aot40.length && carteCommunes.length ? (
//               <>
//                 <MapAOT40
//                   aot40={aot40}
//                   carteCommunes={carteCommunesMap}
//                 />
//                 <div
//                   className={styles.legend}
//                   style={{ width: 'auto', justifyContent: 'center' }}
//                 >
//                   <LegendCompColor legends={aot40Legends} />
//                 </div>
//               </>
//             ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
//           }
//         </div>
//       </div>
//       <div className={styles.sourcesExportMapWrapper}>
//         <Body size='sm' style={{ color: "var(--gris-dark)" }}>
//           Source : Geod’air (2024).
//         </Body>
//         {
//           aot40.length && carteCommunes.length > 0 && (
//             <ExportButtonNouveauParcours
//               data={exportData}
//               baseName="aot_40"
//               type={type}
//               libelle={libelle}
//               code={code}
//               sheetName="AOT 40"
//               anchor='Ozone et végétation'
//             />
//           )}
//       </div>
//     </>
//   );
// };
