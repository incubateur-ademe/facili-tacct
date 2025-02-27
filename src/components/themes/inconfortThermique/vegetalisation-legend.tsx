// 'use client';

// import './vegetalisation-legend.css';

// export const LegendCLC = () => {
//   return (
//     <div className="legendCLC">
//       <div className="legendColor-wrapper">
//         <div
//           className="legendColor"
//           style={{ backgroundColor: '#ffff99' }}
//         ></div>
//         <p>Territoires artificialisés</p>
//       </div>
//       <div className="legendColor-wrapper">
//         <div
//           className="legendColor"
//           style={{ backgroundColor: '#fdc086' }}
//         ></div>
//         <p>Territoires agricoles</p>
//       </div>
//       <div className="legendColor-wrapper">
//         <div
//           className="legendColor"
//           style={{ backgroundColor: '#7fc97f' }}
//         ></div>
//         <p>Zones végétalisées et milieux semi-naturels</p>
//       </div>
//       <div className="legendColor-wrapper">
//         <div
//           className="legendColor"
//           style={{ backgroundColor: '#beaed4' }}
//         ></div>
//         <p>Zones humides</p>
//       </div>
//       <div className="legendColor-wrapper">
//         <div
//           className="legendColor"
//           style={{ backgroundColor: '#386cb0' }}
//         ></div>
//         <p>Surfaces en eau</p>
//       </div>
//     </div>
//   );
// };

// 'use client';

// import styles from './themes.module.scss';

// const LegendItem = (props: { text: string; color: string }) => {
//   const { text, color } = props;
//   return (
//     <div className={styles.legendItem}>
//       <div
//         className={styles.colorSquare}
//         style={{ backgroundColor: color }}
//       ></div>
//       <p>{text}</p>
//     </div>
//   );
// };

// export const LegendCLC = () => {
//   return (
//     <div className={styles.VegetalisationLegendWrapper}>
//       <div className={styles.bloc}>
//         <p
//           style={{
//             width: '85px',
//             minWidth: '85px',
//             margin: 0,
//             alignSelf: 'center'
//           }}
//         >
//           <b>Recul</b>
//         </p>
//         <div className={styles.legendsWrappers}>
//           <div className={styles.legendsLeft}>
//             <LegendItem text="Supérieur à 3m/an" color="#A74E10" />
//             <LegendItem text="Entre 1,5 et 3m/an" color="#B87830" />
//           </div>
//           <div className={styles.legendsRight}>
//             <LegendItem text="Entre 0,5 et 1,5m/an" color="#F59550" />
//             <LegendItem text="Entre 0,1 et 0,5m/an" color="#FEDD9A" />
//           </div>
//         </div>
//       </div>
//       <div className={styles.bloc}>
//         <p
//           style={{
//             width: '85px',
//             minWidth: '85px',
//             margin: 0,
//             alignSelf: 'center'
//           }}
//         >
//           <b>Avancée</b>
//         </p>
//         <div className={styles.legendsWrappers}>
//           <div className={styles.legendsLeft}>
//             <LegendItem text="Entre 0,1 et 0,5m/an" color="#DCEE9F" />
//             <LegendItem text="Entre 0,5 et 1,5m/an" color="#86CD63" />
//           </div>
//           <div className={styles.legendsRight}>
//             <LegendItem text="Entre 1,5 et 3m/an" color="#1DA546" />
//             <LegendItem text="Supérieur à 3m/an" color="#046803" />
//           </div>
//         </div>
//       </div>
//       <div className={styles.bloc}>
//         <div className={styles.legendsWrappers} style={{ marginLeft: '85px' }}>
//           <div className={styles.legendsLeft}>
//             <LegendItem text="Non perceptible" color="#AFF7F1" />
//           </div>
//           <div className={styles.legendsRight}>
//             <LegendItem text="Pas de calcul" color="#9D9C9C" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
