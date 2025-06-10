import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { RGAMapper } from '@/lib/mapper/gestionRisques';
import { CarteCommunes, RGACarte, RGAdb } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from '../agriculture/agriculture.module.scss';
import { RGAText } from '../inconfortThermique/staticTexts';
import RgaDataViz from './rgaDataviz';

export const RGA = ({
  carteCommunes,
  rgaCarte,
  rga
}: {
  carteCommunes: CarteCommunes[];
  rgaCarte: RGACarte[];
  rga: RGAdb[];
}) => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;
  const [datavizTab, setDatavizTab] = useState<string>((type === "commune" || type === "epci" ) ? 'Répartition' : "Évolution");
  const carteCommunesEnriched = carteCommunes.map(CommunesIndicateursMapper);
  const communesMap = carteCommunesEnriched.map((el) => {
    return {
      ...el,
      rga:
        rgaCarte.find((item) => item.code_geographique === el.properties.code_geographique)
          ?.alea ?? NaN
    };
  });
  const rgaMap = rgaCarte.map(RGAMapper);
  const featureCollection = {
    type: "FeatureCollection",
    features: rgaMap
  };

  return (
    <>
      {communesMap ? (
        <div className={styles.container}>
          <>
            <div className={communesMap.length > 0 ? "w-2/5" : "w-1/2"}>
              <div className={styles.explicationWrapper}>
                {
                  communesMap.length > 0 ? (
                    <p style={{ color: '#161616' }}>
                      Sur votre territoire, le retrait-gonflement des argiles est évalué à{' '}
                    </p>
                  ) : ""
                }
              </div>
              <RGAText />
            </div>
            <div className={communesMap.length > 0 ? "w-3/5" : "w-1/2"}>
              {
                communesMap ?
                  <RgaDataViz
                    rgaCarte={featureCollection}
                    carteCommunes={communesMap}
                    rga={rga}
                    datavizTab={datavizTab}
                    setDatavizTab={setDatavizTab}
                  /> : (
                    <div className={styles.graphWrapper}>
                      <p style={{ padding: '1em', margin: '0' }}>
                        <b>Retrait gonflement des argiles</b>
                      </p>
                      <DataNotFoundForGraph image={DataNotFound} />
                    </div>
                  )
              }
            </div>
          </>

        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
