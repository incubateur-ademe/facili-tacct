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
      naf: consommationNAF.find(
        (item) => item.code_geographique === el.code_commune
      )?.naf09art23
    };
  });
  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);

  const title = (
    <div>
      La consommation d’un espace naturel, agricole ou forestier (ENAF) désigne
      sa conversion en surface artificialisée, le rendant indisponible pour des
      usages tels que l’agriculture, la foresterie ou les habitats naturels.
    </div>
  );
  return (
    <>
      {consommationNAF.length > 0 ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                L'artificialisation des sols constitue la première menace pour
                la biodiversité. 24 000 hectares par an d’espaces naturels,
                agricoles et forestiers (ENAF) sont consommés depuis dix ans.
                Soit l’équivalent de 10 fois la superficie de Marseille qui
                disparaît sous le béton. L'artificialisation des sols fragmente
                les habitats, isole les espèces et perturbe des processus
                naturels essentiels, comme la pollinisation et le cycle de
                l'eau.
              </p>
              <p>
                La consommation d’ENAF a des conséquences dramatiques pour le
                climat. Les sols perdent leur rôle de puits de carbone et
                amplifient les risques d’inondations. Un hectare de sol
                artificialisé libère jusqu’à 190 tonnes de CO2, soit l’empreinte
                carbone annuelle de 20 Français. Avec 446 m² de terres
                artificialisées consommées par habitant, la France se place au
                4e rang européen. Préserver les ENAF est vital : c’est protéger
                la biodiversité et renforcer la résilience des territoires face
                aux défis climatiques.
              </p>
              <p>
                - 8 % du territoire français est artificialisé <br></br>- 65 %
                des surfaces consommées ont été destinées à l’habitat, 23 % ont
                servi aux activités industrielles et commerciales (2020-2021){' '}
                <br></br>- Si l’artificialisation des sols continue au même
                rythme jusqu’en 2050, elle pourrait libérer autant de carbone
                que 75 % des émissions totales de gaz à effet de serre de la
                France en 2015.
              </p>
              <p>
                - - - - <br></br>
                info périmée ? <br></br>
                53% des espaces artificialisés relèvent directement des choix
                des collectivités (résidentiel, culturel, sportif, loisirs) -
                période 2006-2014 (Terruti) 50% des zones humides ont disparu
                entre 1960 et 1990
              </p>
            </div>
          </div>
          <div className="w-3/5">
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
