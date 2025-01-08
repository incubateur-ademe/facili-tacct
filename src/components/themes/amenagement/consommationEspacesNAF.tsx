import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, ConsommationNAF } from '@/lib/postgres/models';
import { CustomTooltip } from '@/lib/utils/CalculTooltip';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import styles from './amenagement.module.scss';
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
  const sumNaf = codgeo
    ? consommationNAF.filter((item) => item.code_geographique === codgeo)[0]
        .naf09art23
    : consommationNAF.reduce((acc, item) => acc + item.naf09art23, 0);
  const title = (
    <div>
      <p>
        La consommation d’un espace naturel, agricole ou forestier (ENAF)
        désigne sa conversion en surface artificialisée, le rendant indisponible
        pour des usages tels que l’agriculture, la foresterie ou les habitats
        naturels.
      </p>
      <p>
        Selon l’INSEE, un ménage désigne l'ensemble des personnes qui partagent
        la même résidence principale.
      </p>
    </div>
  );
  return (
    <>
      {consommationNAF.length > 0 ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              <p>
                Entre 2009 et 2023, votre territoire a consommé{' '}
                <b>{Round(sumNaf / 10000, 1)} hectare(s)</b> d’espaces naturels
                et forestiers.{' '}
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                L’artificialisation des sols progresse, même là où la population
                diminue. Chaque année depuis dix ans, 24 000 hectares d’espaces
                naturels, agricoles et forestiers (ENAF) disparaissent sous le
                béton, soit 10 fois la superficie de Marseille.
              </p>
              <p>
                66 % des ENAF consommés sont destinées à l’habitat. Les projets
                de faible densité utilisent beaucoup de sols pour un nombre
                limité de logements. En périphérie des villes, l’étalement
                urbain allonge les trajets domicile-travail, renforce la
                dépendance à la voiture et augmente les émissions de gaz à effet
                de serre. <br></br>
                Ce type d’aménagement peu économe en sols a un coût climatique
                majeur : chaque hectare artificialisé libère jusqu’à 190 tonnes
                de CO2, soit l’empreinte carbone annuelle de 20 Français.
              </p>
              <p>
                - 66 % de la consommation des espaces ENAF est destinée à
                l’habitat (période 2022-2023, Cerema) <br></br>- 7 820 communes
                consomment de l’espace alors qu’elles perdent des ménages
                (période 2014-2020, Cerema) : une consommation d’ENAF
                déconnectée des besoins réels des territoires ! <br></br>- 51 %
                de la consommation d’espaces liée à l’habitat provient de
                constructions de moins de 8 logements par hectare (période
                2009-2022, Cerema)
              </p>
              <p>
                - - - - <br></br>
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
