'use client';
import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { Patch4, RessourcesEauNew } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { prelevementEauTooltipText } from '@/lib/tooltipTexts';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PrelevementEauDataViz from './prelevementEauDataviz';
import styles from './ressourcesEau.module.scss';

type Years = "A2008"
  | "A2009"
  | "A2010"
  | "A2011"
  | "A2012"
  | "A2013"
  | "A2014"
  | "A2015"
  | "A2016"
  | "A2017"
  | "A2018"
  | "A2019"
  | "A2020";

const SumFiltered = (
  data: RessourcesEauNew[],
  code: string,
  libelle: string,
  type: string,
  champ: string
) => {
  const columnCode = type === 'epci'
    ? 'epci'
    : type === 'commune'
      ? 'code_geographique'
      : type === "departement"
        ? "departement"
        : undefined

  const columnLibelle = type === "petr"
    ? "libelle_petr"
    : "ept"

  return Sum(
    data
      .filter((obj) => columnCode ? obj[columnCode] === code : obj[columnLibelle] === libelle
      )
      .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes(champ))
      .map((e) => e.A2020)
      .filter((value): value is number => value !== null)
  );
};

export const PrelevementEau = (props: {
  data: Array<{
    donnee: string;
    facteurSensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  ressourcesEau: RessourcesEauNew[];
}) => {
  const { ressourcesEau } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const volumePreleveTerritoire = Round(
    SumFiltered(ressourcesEau, code, libelle, type, 'total') / 1000000,
    3
  );
  const dataParMaille = type === 'epci'
    ? ressourcesEau.filter((obj) => obj.epci === code)
    : type === 'commune'
      ? ressourcesEau.filter((obj) => obj.code_geographique === code)
      : type === 'petr'
        ? ressourcesEau.filter((obj) => obj.libelle_petr === libelle)
        : type === 'ept'
          ? ressourcesEau.filter((obj) => obj.ept === libelle)
          : ressourcesEau;

  const sumAllYears = dataParMaille.map((year) =>
    Array.from({ length: 13 }, (_, i) => Number(year[`A${2008 + i}` as Years]) || 0)
      .reduce((a, b) => a + b, 0)
  ).reduce((a, b) => a + b, 0);;

  useEffect(() => {
    void (async () => {
      const temp = await GetPatch4(code, type);
      setPatch4(temp);
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4, 'fortes_chaleurs')
    : undefined;

  return (
    <>
      {
        !isLoadingPatch4 ?
          <>
            {dataParMaille.length !== 0 && sumAllYears !== 0 ? (
              <div className={styles.container}>
                <div className="w-5/12">
                  <div className={styles.explicationWrapper}>
                    <p>
                      Le volume total des prélèvements en eau de votre territoire en
                      2020 est de <b>{volumePreleveTerritoire} Mm3</b>, soit l’équivalent
                      de <b>{Round((1000000 * volumePreleveTerritoire) / 3750, 0)}</b>{' '}
                      piscines olympiques.
                    </p>
                    <div className={styles.patch4Wrapper}>
                      {fortesChaleurs === 'Intensité très forte' ||
                        fortesChaleurs === 'Intensité forte' ? (
                        <TagItem
                          icon={fortesChaleursIcon}
                          indice="Fortes chaleurs"
                          tag={fortesChaleurs}
                        />
                      ) : null}
                    </div>
                    <CustomTooltip title={prelevementEauTooltipText} texte="D'où vient ce chiffre ?" />
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
              <GraphDataNotFound code={code} libelle={libelle} />
            )}
          </>
          : <Loader />
      }
    </>
  );
};
