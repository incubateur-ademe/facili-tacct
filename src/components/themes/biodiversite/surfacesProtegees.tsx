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
import { DarkClass } from '@/lib/utils/DarkClass';
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

  const darkClass = DarkClass();
  const title = (
    <div>
      Les aires protégées de nature réglementaire concernent les parcs
      nationaux, les réserves naturelles nationales, régionales et de Corse, les
      arrêtés préfectoraux de biotope / géotope / habitats naturels, les
      réserves nationales de chasse et de faune sauvage et les réserves
      biologiques.
    </div>
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
              <p>
                Les aires protégées constituent un rempart essentiel pour
                préserver la biodiversité. Face à l'érosion des écosystèmes et
                au changement climatique, les aires protégées offrent des
                sanctuaires où la nature peut s'adapter et se régénérer. La
                France porte une responsabilité particulière avec ses
                territoires abritant 10% des espèces connues sur la planète.
              </p>
              <p>
                Sur 33 % du territoire français, les aires protégées
                accomplissent des missions vitales : stocker le carbone dans les
                forêts et zones humides, faciliter la migration des espèces,
                maintenir des écosystèmes résilients capables de s’adapter au
                changement climatique, etc. Un défi qui implique de penser
                l'équilibre entre préservation stricte et accès au public, pour
                faire de ces espaces des lieux de sensibilisation aux enjeux
                climatiques, tout en garantissant leur fonction première :
                protéger la biodiversité.
              </p>
              <p>
                - - - - <br></br>
                La Stratégie Nationale pour les Aires Protégées (SNAP) vise à
                doter la France d'un réseau cohérent d'aires protégées
                terrestres et marines couvrant, d'ici 2030, au moins 30 % de
                l'ensemble du territoire national et de l'espace maritime
                français, dont au moins 10 % en protection forte.
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
