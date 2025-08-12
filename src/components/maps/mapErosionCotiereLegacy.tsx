// 'use client';

// import { CommunesIndicateursDto, ErosionCotiereDto } from '@/lib/dto';
// import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
// import { Any } from '@/lib/utils/types';
// import { GeoJsonObject } from 'geojson';
// import { LatLngBoundsExpression, StyleFunction } from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { useSearchParams } from 'next/navigation';
// import { useRef } from 'react';
// import { BoundsFromCollection } from './components/boundsFromCollection';

// export const MapErosionCotiere = (props: {
//   erosionCotiere: ErosionCotiereDto[];
//   carteCommunes: CommunesIndicateursDto[];
// }) => {
//   const { erosionCotiere, carteCommunes } = props;
//   const searchParams = useSearchParams();
//   const code = searchParams.get('code')!;
//   const type = searchParams.get('type')!;
//   const mapRef = useRef(null);
//   const enveloppe = BoundsFromCollection(carteCommunes, type, code);
  
//   const getColor = (d: number) => {
//     if (d >= 3) {
//       return '#046803';
//     } else if (d < 3 && d >= 1.5) {
//       return '#1DA546';
//     } else if (d < 1.5 && d >= 0.5) {
//       return '#86CD63';
//     } else if (d < 0.5 && d >= 0.1) {
//       return '#DCEE9F';
//     } else if (d < 0.1 && d > -0.1) {
//       return '#AFF7F1';
//     } else if (d <= -0.1 && d > -0.5) {
//       return '#FEDD9A';
//     } else if (d <= -0.5 && d > -1.5) {
//       return '#F59550';
//     } else if (d <= -1.5 && d > -3) {
//       return '#B87830';
//     } else if (d <= -3) {
//       return '#A74E10';
//     } else {
//       return '#9D9C9C';
//     }
//   };

//   const style: StyleFunction<Any> = (feature) => {
//     const typedFeature = feature as ErosionCotiereDto;
//     return {
//       fillColor: getColor(typedFeature?.properties.taux),
//       weight: 5,
//       opacity: 1,
//       color: getColor(typedFeature?.properties.taux),
//       fillOpacity: 0.95
//     };
//   };

//   const territoireStyle: StyleFunction<Any> = () => {
//     return {
//       weight: 0.5,
//       opacity: 0.5,
//       color: '#161616',
//       fillOpacity: 0
//     };
//   };

//   return (
//     <MapContainer
//       ref={mapRef}
//       style={{ height: '500px', width: '100%' }}
//       attributionControl={false}
//       zoomControl={false}
//       bounds={enveloppe as LatLngBoundsExpression}
//     >
//       {process.env.NEXT_PUBLIC_ENV === 'preprod' ? (
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//       ) : (
//         <TileLayer
//           attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
//         />
//       )}
//       <GeoJSON ref={mapRef} data={erosionCotiere as Any} style={style} />
//       <GeoJSON
//         ref={mapRef}
//         data={carteCommunes as unknown as GeoJsonObject}
//         style={territoireStyle}
//       />
//     </MapContainer>
//   );
// };
