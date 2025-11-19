"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { MapDebroussaillementTiles } from '@/components/maps/mapDebroussaillementTiles';
import { Body } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes } from "@/lib/postgres/models";
import { useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const Debroussaillement = ({
  carteCommunes,
  coordonneesCommunes
}: {
  carteCommunes: CarteCommunes[];
  coordonneesCommunes: { codes: string[], bbox: { minLng: number, minLat: number, maxLng: number, maxLat: number } } | null;
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const carteContours = carteCommunes.map(CommunesIndicateursMapper);

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
            carteContours && carteContours.length ? (
              <>
                {/* <MapDebroussaillement
                  debroussaillement={debroussaillement}
                  carteContours={carteContours}
                  mapRef={mapRef}
                  mapContainer={mapContainer}
                /> */}
                <MapDebroussaillementTiles
                  coordonneesCommunes={coordonneesCommunes}
                  mapRef={mapRef}
                  mapContainer={mapContainer}
                />
                <div
                  className={styles.legendTypesDeSols}
                  style={{ width: 'auto', justifyContent: 'center' }}
                >

                </div>
              </>
            ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
          }
        </div>
      </div>
    </>
  );
};
