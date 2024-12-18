// Ensemble des surfaces protegées (zonages d’enjeux écologique et dispositifs de protection) : FOR_PRO    	protection forte
// Ensemble des surfaces protegées (zonages d’enjeux écologique et dispositifs de protection) : TOU_PRO    	au moins une mesure de protection
// Surfaces inventaires des espaces naturels : ZNIEFF1    	Znieff type 1
// Surfaces inventaires des espaces naturels : ZNIEFF2    	Znieff type 2
// Surfaces inventaires des espaces naturels : ZZZ    	Znieff et Zico sans double compte
// Surfaces Natura 2000 : SIC    	sites d’interêt communautaires
// Surfaces Natura 2000 : ZPS    	zones de protection spéciale
// Surfaces Natura 2000 : NATURA    	SIC et ZPS sans double compte
// espaces de protection reglementaire : PNC    	coeurs des parc nationaux
// espaces de protection reglementaire : RNR    	réserves naturellles régionales
// espaces de protection reglementaire : APB    	arrêtés de protection du biotope
// espaces de protection reglementaire : RNCFS    	reserves nationales de chasse et de la faune sauvage
// espaces de protection reglementaire : RBFD    	réserves biologiques domaniales et forestières
// espaces de protection reglementaire : RN    	réserves naturelles nationales
// espaces de protection contractuel : PNP    	aires d’adhésion des parcs nationaux
// espaces de protection contractuel : PNR    	parcs naturels régionaux
// espaces de protection contractuel : RAMSAR    	zones Ramsar
// espaces de protection contractuel : BIO    	réserves de biosphère
// autres types d’espaces de protection : CELRL    	conservatoire du littoral et des rivages lacustres

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { CarteCommunes, SurfacesProtegeesByCol } from '@/lib/postgres/models';
import { CustomTooltip } from '@/lib/utils/CalculTooltip';
import { useSearchParams } from 'next/navigation';
import styles from './biodiversite.module.scss';
import SurfacesProtegeesDataviz from './surfacesProtegeesDataviz';

const SurfacesProtegees = (props: {
  surfacesProtegees: SurfacesProtegeesByCol[];
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  carteCommunes: CarteCommunes[];
}) => {
  const { surfacesProtegees, carteCommunes } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const surfaceTerritoire = codgeo
    ? carteCommunes.filter((e) => e.code_commune === codgeo)[0].surface
    : carteCommunes.map((el) => el.surface).reduce((a, b) => a + b, 0);

  const title = (
    <>
      <div>Les surfaces protégées :</div>
      <div>
        <ul>
          <li>Lorem ;</li>
          <li>Ipsum .</li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      {surfacesProtegees ? (
        <div className={styles.container}>
          <div className="w-1/3">
            <div className={styles.explicationWrapper}>
              <p>
                La surface totale du territoire est de {surfaceTerritoire} ha.
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="w-2/3">
            <SurfacesProtegeesDataviz
              surfacesProtegees={surfacesProtegees}
              carteCommunes={carteCommunes}
            />
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};

export default SurfacesProtegees;
