import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { default as DataNotFound } from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from "@/components/loader";
import { MapLCZ } from '@/components/maps/mapLCZ';
import { AlgoPatch4 } from "@/components/patch4/AlgoPatch4";
import TagInIndicator from "@/components/patch4/TagInIndicator";
import { CarteCommunes, Patch4 } from "@/lib/postgres/models";
import { GetPatch4 } from "@/lib/queries/patch4";
import { exportDatavizAsPNG } from '@/lib/utils/export/exportPng';
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LCZText } from './staticTexts';
import styles from './themes.module.scss';

export const LCZ = ({
  carteCommunes
}: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const exportPNGRef = useRef<HTMLDivElement | null>(null);
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const secheresse = patch4 ? AlgoPatch4(patch4, 'secheresse_sols') : "null";

  return (
    <>
      {!isLoadingPatch4 ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              <p style={{ color: '#161616' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <TagInIndicator
                indice={["Sécheresse des sols"]}
                icon={[secheresseIcon]}
                tag={[secheresse]}
              />
            </div>
            <LCZText />
          </div>
          <div className="w-3/5">
            <div className={styles.graphWrapper}>
              <p style={{ padding: '1em', margin: '0' }}>
                <b>Cartographie des Zones Climatiques Locales (LCZ)</b>
              </p>
              {
                carteCommunes ? (
                  <div ref={exportPNGRef}>
                    <MapLCZ carteCommunes={carteCommunes} />
                  </div>
                ) : <DataNotFoundForGraph image={DataNotFound} />
              }
            </div>
            <button onClick={() => exportDatavizAsPNG(exportPNGRef, 'lcz.png')}>Exporter PNG</button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>

  )
}
