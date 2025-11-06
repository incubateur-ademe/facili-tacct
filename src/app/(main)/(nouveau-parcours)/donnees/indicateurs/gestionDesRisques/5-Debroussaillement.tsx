"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { MapDebroussaillement } from '@/components/maps/mapDebroussaillement';
import { Body } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, DebroussaillementModel } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const Debroussaillement = ({
  debroussaillement,
  carteCommunes,
}: {
  debroussaillement: DebroussaillementModel[];
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  // const carteTerritoire =
  //   type === 'commune'
  //     ? carteCommunes.filter((e) => e.code_geographique === code)
  //     : type === 'ept' && eptRegex.test(libelle)
  //       ? carteCommunes.filter((e) => e.ept === libelle)
  //       : type === 'epci' && !eptRegex.test(libelle)
  //         ? carteCommunes.filter((e) => e.epci === code)
  //         : carteCommunes;
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
            debroussaillement && debroussaillement.length ? (
              <>
                <MapDebroussaillement
                  debroussaillement={debroussaillement}
                  carteContours={carteContours}
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
