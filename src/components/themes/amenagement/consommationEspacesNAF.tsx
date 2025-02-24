import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, ConsommationNAF } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import styles from './amenagement.module.scss';
import { ConsommationEspacesNAFDataviz } from './consommationEspacesNAFDataviz';

export const ConsommationEspacesNAF = (props: {
  consommationNAF: ConsommationNAF[];
  carteCommunes: CarteCommunes[];
  data: Array<{
    donnee: string;
    facteurSensibilite: string;
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
        ?.naf09art23
    : consommationNAF.reduce((acc, item) => acc + item.naf09art23, 0);
  const title = (
    <div>
      <p>
        Le suivi de cet indicateur est réalisé par le CEREMA dans le cadre de
        l’objectif “zéro artificialisation nette” de la loi « Climat et
        résilience ». La consommation d’espaces NAF est calculée à partir des
        fichiers fonciers entre 2009 et 2023. Les données sont traitées pour
        donner des tendances de façon uniforme sur toute la France ;
        ponctuellement, il est possible que les documents de planification de
        certaines collectivités territoriales fassent référence à des données
        locales de consommation d'espaces différentes de celles fournies par le
        CEREMA.
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
                Depuis dix ans, 24 000 hectares d’espaces naturels, agricoles et
                forestiers disparaissent chaque année sous le béton, soit 10
                fois la superficie de Marseille. Depuis les années 1980, les
                surfaces artificialisées ont augmenté de 70 %, un rythme bien
                supérieur à celui de la population française (+19 %). Pire,
                elles progressent, même là où la population diminue.
              </p>
              <p>
                En périphérie des villes, l’étalement urbain allonge les trajets
                domicile-travail, renforce la dépendance à la voiture et
                augmente les émissions de gaz à effet de serre. Chaque hectare
                artificialisé libère jusqu’à 190 tonnes de CO2, soit l’empreinte
                carbone annuelle de 20 Français.
              </p>
              <p>
                ⇒ 43 % de la consommation d'espace a lieu dans des zones
                péri-urbaines peu denses
              </p>
              <p>
                ⇒ 66 % des ENAF consommés sont destinées à l’habitat dont plus
                de la moitié (51 %) est constitué de constructions de moins de 8
                logements par hectare
              </p>
              <p>
                ⇒ 7 820 communes consomment de l’espace alors qu’elles perdent
                des ménages : une consommation d’ENAF déconnectée des besoins
                réels des territoires !
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
