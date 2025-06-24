'use client';

import { CommunesIndicateursDto, RGADto } from '@/lib/dto';
import { GeoJSON, MapContainer, TileLayer } from '@/lib/react-leaflet';
import { type Any } from '@/lib/utils/types';
import { GeoJsonObject } from 'geojson';
import {
  LatLngBoundsExpression,
  type StyleFunction
} from 'leaflet';
import 'leaflet.vectorgrid';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import { GraphDataNotFound } from '../graph-data-not-found';
import { BoundsFromCollection } from './components/boundsFromCollection';


const getColor = (d: string) => {
  return d === "Moyen"
    ? 'orange'
    : d === "Faible"
      ? 'green'
      : d === "Fort"
        ? 'red'
        : 'transparent';
};


export function VectorGridLayer() {
  const map = useMap();

  useEffect(() => {
    // @ts-ignore
    const vectorTileLayer = window.L.vectorGrid.protobuf(
      'https://data.geopf.fr/tms/1.0.0/batiment_gpkg_19-12-2024_tms/{z}/{x}/{y}.pbf',
      {
        vectorTileLayerStyles: {
          // You can define styles for your vector features here
          // Example: 'layerName': { fill: true, fillColor: '#3388ff', fillOpacity: 0.5 }
        },
        interactive: true,
      }
    );
    vectorTileLayer.addTo(map);

    return () => {
      map.removeLayer(vectorTileLayer);
    };
  }, [map]);

  return null;
}

export const MapRGA = (props: {
  carteCommunes: CommunesIndicateursDto[];
  rgaCarte: RGADto[];
}) => {
  const { carteCommunes, rgaCarte } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapRef = useRef(null);

  const carteCommunesFiltered = type === "ept"
    ? carteCommunes.filter(el => el.properties.ept === libelle)
    : carteCommunes
  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);

  const style: StyleFunction<Any> = (feature) => {
    const typedFeature = feature as RGADto;
    return {
      fillColor: getColor(typedFeature?.properties.alea),
      weight: 0.1,
      opacity: 0.5,
      color: '#161616',
      fillOpacity: 0.30
    };
  };


  return (
    <>
      {carteCommunesFiltered === null ? (
        <GraphDataNotFound code={code} libelle={libelle} />
      ) : (
        <MapContainer
          ref={mapRef}
          style={{ height: '500px', width: '100%' }}
          attributionControl={false}
          zoomControl={false}
          bounds={enveloppe as LatLngBoundsExpression}
        >
          {process.env.NEXT_PUBLIC_ENV === 'preprod' ? (
            // <TileLayer
            //   attribution="IGN-F/Geoportail"
            //   url="https://data.geopf.fr/wms-v/ows?SERVICE=wms&REQUEST=GetMap&VERSION=1.3.0&LAYERS=BDTOPO-GEOPO-ADMINISTRATIF_WLD_WGS84G&STYLE=default-style-BDTOPO-GEOPO-ADMINISTRATIF_WLD_WGS84G&FORMAT=image/gif"
            //   minZoom={0}
            //   maxZoom={18}
              
            // />
            // 
            <>
              <TileLayer
              attribution="IGN-F/Geoportail"
              url="https://data.geopf.fr/tms/1.0.0/GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2/{z}/{x}/{y}.png"
              minZoom={0}
              maxZoom={18}
              />
              {/* <VectorGridLayer /> */}
            </>
            //https://data.geopf.fr/wmts?service=WMTS&request=GetTile&version=1.0.0&tilematrixset=PM&tilematrix={z}&tilecol={x}&tilerow={y}&layer=ORTHOIMAGERY.ORTHOPHOTOS&format=image/jpeg&style=normal
            // <TileLayer
            //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            //   url="https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities"
            // />
          ) : (
            <TileLayer
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities"
            />
          )}


          <GeoJSON
            ref={mapRef}
            data={rgaCarte as unknown as GeoJsonObject}
            style={style}
          />
        </MapContainer>
      )}
    </>
  );
};
