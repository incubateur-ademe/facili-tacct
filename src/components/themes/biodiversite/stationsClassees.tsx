// 'use client';

// import markerIcon from '@/assets/icons/marker_icon_blue.svg';
// import { GraphDataNotFound } from '@/components/graph-data-not-found';
// import { Map } from '@/components/maps/markers-test';
// import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
// import { Biodiversite, CarteCommunes } from '@/lib/postgres/models';
// import Image, { StaticImageData } from 'next/image';
// import { useSearchParams } from 'next/navigation';
// import styles from './biodiversite.module.scss';

// export const StationsClassees = (props: {
//   biodiversite: Biodiversite[];
//   carteCommunes: CarteCommunes[];
//   data: Array<{
//     donnee: string;
//     facteurSensibilite: string;
//     id: number;
//     risque: string;
//     titre: string;
//   }>;
// }) => {
//   const { biodiversite, carteCommunes } = props;
//   const searchParams = useSearchParams();
//   const codgeo = searchParams.get('codgeo')!;
//   const codepci = searchParams.get('codepci')!;
//   const communesMap = carteCommunes.map(CommunesIndicateursMapper);

//   return (
//     <>
//       {biodiversite ? (
//         <div className={styles.container}>
//           <div className="w-1/3">
//             <div className={styles.explicationWrapper}>
//               {codgeo ? (
//                 <p style={{ color: '#161616' }}>
//                   Dans la commune de {biodiversite[0]?.libelle_geographique},{' '}
//                   <b>XXXX%</b> .
//                 </p>
//               ) : (
//                 <p style={{ color: '#161616' }}>
//                   Dans l'EPCI {biodiversite[0]?.libelle_epci}, <b>XXXXX%</b> .
//                 </p>
//               )}
//             </div>
//             <div className="px-4">
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 etiam, ut inchoavit, et
//               </p>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 etiam, ut inchoavit, et
//               </p>
//               <p>Lorem </p>
//             </div>
//           </div>
//           <div className="w-2/3">
//             <div className={styles.graphWrapper}>
//               <p style={{ padding: '1em', margin: '0' }}>
//                 <b>Titre</b>
//               </p>
//               <Map
//                 data={'stationsClassees'}
//                 carteCommunes={communesMap}
//                 biodiversite={biodiversite}
//               />
//               <div className={styles.legend}>
//                 <div className={styles.legendStationWrapper}>
//                   <div className={styles.legendItem}>
//                     <Image
//                       src={markerIcon as StaticImageData}
//                       alt=""
//                       width={16}
//                     />
//                     <p>Station</p>
//                   </div>
//                 </div>
//                 <div className={styles.legendItemsWrapper}>
//                   <div className={styles.legendItem}>
//                     <div
//                       className={styles.legendColor}
//                       style={{ backgroundColor: '#FFFF8C' }}
//                     ></div>
//                     <p>Artificialisé</p>
//                   </div>
//                   <div className={styles.legendItem}>
//                     <div
//                       className={styles.legendColor}
//                       style={{ backgroundColor: '#FFBB7D' }}
//                     ></div>
//                     <p>Agricole</p>
//                   </div>
//                   <div className={styles.legendItem}>
//                     <div
//                       className={styles.legendColor}
//                       style={{ backgroundColor: '#64CB77' }}
//                     ></div>
//                     <p>Végétalisé/semi-naturel</p>
//                   </div>
//                   <div className={styles.legendItem}>
//                     <div
//                       className={styles.legendColor}
//                       style={{ backgroundColor: '#BFAED7' }}
//                     ></div>
//                     <p>Humide</p>
//                   </div>
//                   <div className={styles.legendItem}>
//                     <div
//                       className={styles.legendColor}
//                       style={{ backgroundColor: '#206EB4' }}
//                     ></div>
//                     <p>Eau</p>
//                   </div>
//                 </div>
//               </div>
//               <p style={{ padding: '1em', margin: '0' }}>Source : XXXXXXX</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <GraphDataNotFound code={codgeo ? codgeo : codepci} />
//       )}
//     </>
//   );
// };
