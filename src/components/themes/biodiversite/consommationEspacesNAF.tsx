import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, ConsommationNAF } from '@/lib/postgres/models';
import { CustomTooltip } from '@/lib/utils/CalculTooltip';
import { useSearchParams } from 'next/navigation';
import styles from './biodiversite.module.scss';
import { ConsommationEspacesNAFDataviz } from './consommationEspacesNAFDataviz';

export const ConsommationEspacesNAF = (props: {
  consommationNAF: ConsommationNAF[];
  carteCommunes: CarteCommunes[];
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}) => {
  const { consommationNAF, carteCommunes } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;

  const carteCommunesEnriched = carteCommunes.map((el) => {
    return {
      ...el,
      naf: 'naf'
    };
  });
  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);

  const title = (
    <>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
    </>
  );
  return (
    <>
      {consommationNAF.length > 0 ? (
        <div className={styles.container}>
          <div className="w-1/3">
            <div className={styles.explicationWrapper}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="w-2/3">
            <ConsommationEspacesNAFDataviz
              consommationNAF={consommationNAF}
              carteCommunes={communesMap}
            />
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
