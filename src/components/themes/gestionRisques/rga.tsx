import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { RGAMapper } from '@/lib/mapper/gestionRisques';
import { CarteCommunes, RGACarte } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import styles from '../agriculture/agriculture.module.scss';
import CarteFacileTemplate from './CarteFacile';

export const RGA = ({
  carteCommunes,
  rgaCarte
}: {
  carteCommunes: CarteCommunes[];
  rgaCarte: RGACarte[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;

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
  const surfaceTerritoire = type === "commune" ?
    communesMap.find((obj) => obj.properties.code_geographique === code)?.properties.surfacesIrriguees
    : communesMap
      .map((obj) => obj.properties.surfacesIrriguees)
      .map((value) => (isNaN(value!) ? 0 : value))
      .reduce((acc, value) => acc! + value!, 0);

  return (
    <>
      {communesMap ? (
        <div className={styles.container}>
          <>
            <div className={communesMap.length > 0 ? "w-2/5" : "w-1/2"}>
              <div className={styles.explicationWrapper}>
                {
                  surfaceTerritoire && communesMap.length > 0 ? (
                    <p style={{ color: '#161616' }}>
                      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    </p>
                  ) : ""
                }
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
              </p>
            </div>
            <div className={communesMap.length > 0 ? "w-3/5" : "w-1/2"}>
              <div className={styles.graphWrapper}>
                <p style={{ padding: '1em', margin: '0' }}>
                  <b>
                    XXXXXXXXXXXXXX
                  </b>
                </p>
                {
                  communesMap.length > 0 ? (
                    <>
                      <CarteFacileTemplate rgaCarte={featureCollection} carteCommunes={communesMap} />
                    </>
                  ) : (
                    <DataNotFoundForGraph image={DataNotFound} />
                  )
                }
                <p style={{ padding: '1em', margin: '0' }}>
                  Source : XXXXXXXXX
                </p>
              </div>
            </div>
          </>

        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
