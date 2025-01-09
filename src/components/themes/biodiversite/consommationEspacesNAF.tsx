import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, ConsommationNAF } from '@/lib/postgres/models';
import { CustomTooltip } from '@/lib/utils/CalculTooltip';
import { Round } from '@/lib/utils/reusableFunctions/round';
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
  const sumNaf = codgeo
    ? consommationNAF.filter((item) => item.code_geographique === codgeo)[0]
        .naf09art23
    : consommationNAF.reduce((acc, item) => acc + item.naf09art23, 0);
  const title = (
    <div>
      Le suivi de cet indicateur est réalisé par le CEREMA dans le cadre de
      l’objectif “zéro artificialisation nette” de la loi « Climat et résilience
      ». La consommation d’espaces NAF est calculée à partir des fichiers
      fonciers entre 2009 et 2023, présentée ici toute destination confondue.
      Les données sont traitées pour donner des tendances de façon uniforme sur
      toute la France ; ponctuellement, il est possible que les documents de
      planification de certaines collectivités territoriales fassent référence à
      des données locales de consommation d'espaces différentes de celles
      fournies par le CEREMA.
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
                L'artificialisation des sols constitue l’une des première cause
                de l’effondrement de la biodiversité. Elle porte atteinte aux
                processus naturels essentiels, comme la pollinisation, fragmente
                voire détruit les habitats et isole les espèces. Elle participe
                en outre à une homogénéisation de la biodiversité qui affecte la
                résilience des milieux.
              </p>
              <p>
                La consommation d’ENAF a des conséquences dramatiques pour le
                climat :
                <ul>
                  <li>
                    Les sols perdent leur rôle de puits de carbone et leur
                    capacité d’infiltration ce qui perturbe le cycle naturel de
                    l'eau, avec pour corollaire une réduction de la recharges
                    des nappes, une réduction du stockage de l’eau dans les sols
                    et une aggravation des risques d’inondations.
                  </li>
                  <li>
                    En détruisant le milieu de vie des micro-organismes des
                    sols, l’artificialisation réduit drastiquement les capacités
                    épuratoires des milieux.
                  </li>
                </ul>
              </p>
              <p>
                ⇒ 24 000 hectares par an d’espaces naturels, agricoles et
                forestiers sont consommés depuis dix ans, soit l’équivalent de
                10 fois la superficie de Marseille.
              </p>
              <p>
                ⇒ Avec 446 m² de terres artificialisées consommées par habitant,
                la France se place au 4e rang européen.
              </p>
              <p>
                ⇒ Un hectare de sol artificialisé libère jusqu’à 190 tonnes de
                CO2, soit l’empreinte carbone annuelle de 20 Français.
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
