"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { MapTiles } from '@/components/maps/mapTiles';
import { Body } from "@/design-system/base/Textes";
import { useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const Debroussaillement = ({
  coordonneesCommunes
}: {
  coordonneesCommunes: { codes: string[], bbox: { minLng: number, minLat: number, maxLng: number, maxLat: number } } | null;
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div className={styles.chiffreDynamiqueWrapper} style={{ alignItems: 'center' }}>
          <div className={styles.text}>
            <Body weight='bold' style={{ color: "var(--gris-dark)" }} >
              Texte dynamique des obligations de débroussaillement
            </Body>
          </div>
        </div>
        <Body size='sm' style={{ marginTop: '1rem' }}>
          Texte statique sur les obligations de débroussaillement.
        </Body>
        <div className={styles.mapWrapper}>
          {
            coordonneesCommunes && coordonneesCommunes.codes.length ? (
              <MapTiles
                coordonneesCommunes={coordonneesCommunes}
                mapRef={mapRef}
                mapContainer={mapContainer}
                bucketUrl="debroussaillement"
                layer="debroussaillement"
                paint={{
                  'fill-color': '#F83DD9',
                  'fill-opacity': 0.8
                }}
              />
            ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
          }
        </div>
      </div>
    </>
  );
};
