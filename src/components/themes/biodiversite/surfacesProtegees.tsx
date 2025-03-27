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

'use client';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CarteCommunes, SurfacesProtegeesByCol } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import styles from './biodiversite.module.scss';
import SurfacesProtegeesDataviz from './surfacesProtegeesDataviz';

const SurfacesProtegees = (props: {
  surfacesProtegees: SurfacesProtegeesByCol[];
  data: Array<{
    donnee: string;
    facteurSensibilite: string;
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
    ? carteCommunes.filter((e) => e.code_geographique === codgeo)[0].surface
    : carteCommunes.map((el) => el.surface).reduce((a, b) => a + b, 0);
  const filteredData = codgeo
    ? surfacesProtegees.filter((e) => e.code_geographique === codgeo)
    : surfacesProtegees;
  const sommeSurfaces = filteredData
    .map((e) => {
      return {
        FOR_PRO: Number(e.FOR_PRO),
        TOU_PRO: Number(e.TOU_PRO),
        NATURA: Number(e.NATURA),
        CELRL: Number(e.CELRL),
        ZZZ: Number(e.ZZZ)
      };
    })
    .map((e) => e.CELRL + e.FOR_PRO + e.NATURA + e.TOU_PRO + e.ZZZ)
    .reduce((a, b) => a + b, 0);
  const forpro = filteredData
    .map((e) => Number(e.FOR_PRO))
    .reduce((a, b) => a + b, 0);
  const percentSurfaceForpro = Round(100 * (forpro / surfaceTerritoire), 1);
  const percentSurfacesProtegees = Round(
    100 * (sommeSurfaces / surfaceTerritoire),
    1
  );

  const title = (
    <div>
      <div>
        <p>Les zones d’aires protégées prises en compte sont :</p>
        <ul>
          <li>
            de nature réglementaire, dite “de protection forte” (cœur des parcs
            nationaux, réserves naturelles nationales, régionales et de Corse,
            arrêtés préfectoraux de biotope/géotope/habitats naturels, les
            réserves nationales de chasse et de faune sauvage, réserves
            biologiques) ;
          </li>
          <li>
            de nature contractuelle (PNR, aires d’adhésion des parcs nationaux,
            réserves de biosphère, zones RAMSAR ainsi que surfaces Natura 2000)
          </li>
          <li>
            protégées par la maîtrise foncière (acquisition par le Conservatoire
            du littoral)
          </li>
          <li>
            des sites d’inventaires patrimoniaux (ZNIEFF type 1 et 2, ZICO)
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {surfacesProtegees ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              <p>
                {percentSurfacesProtegees} % de votre territoire sont couverts
                par un zonage d’inventaire ou de protection de la biodiversité
                reconnus par un statut, dont {percentSurfaceForpro} % en
                protection forte, de nature réglementaire.
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                La multiplicité des aires communément appelées « protégées » est
                le reflet de la diversité des politiques de conservation et des
                relations homme/nature sur lesquelles ces dernières reposent.
                L’importance des aires protégées repose tant sur leur capacité
                de préservation de la diversité écologique existante que sur
                leur potentiel pour fournir de nouvelles zones d’accueil, en
                anticipation du déplacement des aires de répartition de
                nombreuses espèces. En complément, l’existence de voies de
                transit (trame verte et bleue, par exemple) est essentielle à
                cette réorganisation.
              </p>
              <p>
                Les aires protégées terrestres (33 % du territoire français)
                participent aussi à la régulation du climat par l’intermédiaire
                des milieux qui les composent (captation du carbone par les
                forêts, rôle tampon des zones humides, ...).
              </p>
              <p>
                ⇒ 10 % des espèces recensées sur la planète sont présentes sur
                le territoire national
              </p>
              <p>
                ⇒ L’outre-mer abrite plus de 80 % de la biodiversité française
              </p>
              <p>
                - - - - <br></br>
                Objectifs de la Stratégie Nationale pour les Aires Protégées
                (SNAP) : au moins 30 % du territoire et de l&apos;espace
                maritime français protégés d&apos;ici 2030, dont au moins 10 %
                en protection forte.
              </p>
            </div>
          </div>
          <div className="w-3/5">
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
