import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { SurfacesAgricolesModel } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import { SurfacesAgricolesText } from '../inconfortThermique/staticTexts';
import styles from './agriculture.module.scss';

export const SurfacesAgricoles = ({
  surfacesAgricoles
}: {
  surfacesAgricoles: SurfacesAgricolesModel[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;

  return (
    <>
      {surfacesAgricoles ? (
        <div className={styles.container}>
          <>
            <div className={surfacesAgricoles.length > 0 ? "w-2/5" : "w-1/2"}>
              <div className={styles.explicationWrapper}>
                {
                  surfacesAgricoles ? (
                    <p style={{ color: '#161616' }}>
                      La surface agricole sur
                      votre territoire ....{' '}
                    </p>
                  ) : <p>Il n’y a pas de données référencées sur le territoire que vous avez sélectionné</p>
                }
              </div>
              <SurfacesAgricolesText />
            </div>
            <div className={surfacesAgricoles.length > 0 ? "w-3/5" : "w-1/2"}>
              <div className={styles.graphWrapper}>
                <p style={{ padding: '1em', margin: '0' }}>
                  <b>
                    Surfaces agricoles
                  </b>
                </p>
                  {
                    surfacesAgricoles.length > 0 ? (
                      <>
                        <p>TEST</p>
                      </>
                    ) : (
                      <DataNotFoundForGraph image={DataNotFound} />
                    )
                  }
                <p style={{ padding: '1em', margin: '0' }}>
                  Source : AGRESTE (2020)
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
