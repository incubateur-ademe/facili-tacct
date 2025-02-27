'use client';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { RessourcesEau } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import PrelevementEauDataViz from './prelevementEauDataviz';
import styles from './ressourcesEau.module.scss';

const SumFiltered = (
  data: RessourcesEau[],
  codgeo: string,
  codepci: string,
  type: string,
  collectivite: boolean = false
) => {
  if (collectivite) {
    return Sum(
      data
        .filter((obj) =>
          codgeo ? obj.code_geographique === codgeo : obj.epci === codepci
        )
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes(type))
        .map((e) => e.A2020)
        .filter((value): value is number => value !== null)
    );
  } else {
    return Sum(
      data
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes(type))
        .map((e) => e.A2020)
        .filter((value): value is number => value !== null)
    );
  }
};

export const PrelevementEau = (props: {
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  ressourcesEau: RessourcesEau[];
}) => {
  const { ressourcesEau } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const volumeTotalPreleve = Round(
    SumFiltered(ressourcesEau, codgeo, codepci, 'total', true) / 1000000,
    0
  );
  const dataParMaille = codgeo
    ? ressourcesEau.filter((obj) => obj.code_geographique === codgeo)
    : ressourcesEau.filter((obj) => obj.epci === codepci);

  const sumAllYears = dataParMaille
    .map((year) => {
      return [
        Number(year.A2008),
        Number(year.A2009),
        Number(year.A2010),
        Number(year.A2011),
        Number(year.A2012),
        Number(year.A2013),
        Number(year.A2014),
        Number(year.A2015),
        Number(year.A2016),
        Number(year.A2017),
        Number(year.A2018),
        Number(year.A2019),
        Number(year.A2020)
      ].reduce((a, b) => a + b, 0);
    })
    .reduce((a, b) => a + b, 0);

  const title = (
    <>
      <div>
        L'indicateur représente le volume annuel d'eau prélevée (pour les
        prélèvements soumis à redevance), par grands usages. Cependant, les
        usages exonérés de redevance (aquaculture, géothermie, lutte antigel de
        cultures pérennes, réalimentation de milieux naturels, etc.) ne figurent
        pas dans la base de données.
      </div>
      <br></br>
      <div>
        En outre-mer, la lutte contre les incendies et la production d’énergie
        renouvelable sont également exonérées.
      </div>
    </>
  );

  return (
    <>
      {dataParMaille.length !== 0 && sumAllYears !== 0 ? (
        <div className={styles.container}>
          <div className="w-5/12">
            <div className={styles.explicationWrapper}>
              <p>
                Le volume total des prélèvements en eau de votre territoire en
                2020 est de <b>{volumeTotalPreleve} Mm3</b>, soit l’équivalent
                de <b>{Round((1000000 * volumeTotalPreleve) / 3750, 0)}</b>{' '}
                piscines olympiques.
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                Les sécheresses 2022 et 2023 sonnent l'alerte : optimiser la
                ressource en eau disponible devient vital. Face à
                l'intensification des sécheresses due au changement climatique,
                chaque territoire doit anticiper. Un prélèvement n'est possible
                que si la ressource existe !
              </p>
              <p>
                Attention aux chiffres bruts : les prélèvements ne reflètent pas
                les consommations réelles. L'industrie rejette une partie de
                l'eau prélevée, tandis que l'agriculture consomme la
                quasi-totalité de ses prélèvements, concentrés sur trois mois
                d'été. Dans les zones géographiques en tension, l'agriculture
                peut représenter jusqu'à 80 % de l'eau consommée. Cette
                situation fragilise la ressource locale. Le prix de l'eau est
                susceptible d'augmenter pour deux raisons : la rareté de la
                ressource et le besoin de traitements plus sophistiqués
                (dénitrification, élimination des micropolluants, etc.).
              </p>
              <p>
                ⇒ Lors de la sécheresse 2022, 2000 communes ont été en tension
                sur l’eau potable.
              </p>
              <p>
                ⇒ 30 milliards de m3 d’eau ont été prélevés en France en 2021
                (hors production hydroélectrique), soit l’équivalent de plus
                d’un tiers du volume du Lac Léman. 82 % des prélèvements
                proviennent d'eaux de surface, 18 % d'eaux souterraines
              </p>
              <p>
                ⇒ 20 % des prélèvements d’eau potable sont perdus à cause des
                fuites, soit l’équivalent de la consommation de 18,5 millions
                d’habitants.
              </p>
              <p>
                - - - - <br></br>
                Le Plan Eau agit pour atteindre -10% d’eau prélevée d’ici 2030 :
                <li>
                  la mesure 11 prévoit la fin progressive des autorisations de
                  prélèvement non soutenables dans les bassins en déséquilibre
                  (au fur et à mesure du renouvellement des autorisations) ;
                </li>
                <li>
                  la mesure 12 prévoit l’installation obligatoire de compteurs
                  connectés pour les prélèvements importants (généralisation
                  prévue d'ici 2027) ;
                </li>
                <li>
                  la mesure 13 prévoit le renforcement de l'encadrement des
                  petits prélèvements domestiques.
                </li>
              </p>
              <p>
                Plan National d’Adaptation au Changement Climatique (PNACC 3) :
                <br></br>La mesure 21 prévoit une étude spécifique sur les
                vulnérabilités de l'approvisionnement en eau potable dans les
                départements et régions d'Outre-mer.
              </p>
            </div>
          </div>
          <div className="w-7/12">
            <PrelevementEauDataViz
              ressourcesEau={ressourcesEau}
              datavizTab={datavizTab}
              setDatavizTab={setDatavizTab}
            />
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
