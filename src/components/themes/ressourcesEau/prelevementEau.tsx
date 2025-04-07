'use client';
import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { Patch4, RessourcesEau } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { eptRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
    facteurSensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  ressourcesEau: RessourcesEau[];
}) => {
  const { ressourcesEau } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4[]>();
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const volumeTotalPreleve = Round(
    SumFiltered(ressourcesEau, code, code, 'total', true) / 1000000,
    0
  );
  const dataParMaille = type === 'epci'
    ? ressourcesEau.filter((obj) => obj.epci === code)
    : ressourcesEau;

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

  useEffect(() => {
    !(
      type === 'petr' ||
      type === 'pnr' ||
      type === 'departement' ||
      eptRegex.test(libelle)
    )
      ? void (async () => {
        const temp = await GetPatch4(code);
        setPatch4(temp);
      })()
      : void 0;
  }, [code, libelle]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4[0], 'fortes_chaleurs')
    : null;

  const title = (
    <>
      <div>
        L'indicateur représente le volume annuel d'eau prélevée, par grands
        usages,{' '}
        <u>
          pour les prélèvements soumis à redevance, sur la base de déclarations
          auprès des agences et offices de l’eau.
        </u>{' '}
        Cette redevance est due par les personnes qui prélèvent un volume annuel
        d'eau supérieur à 10 000 m3 d'eau. Ce volume est ramené à 7 000 m3 dans
        les zones dites de répartition des eaux (zones pour lesquelles a été
        identifiée une insuffisance chronique des ressources par rapport aux
        besoins).
      </div>
      <br></br>
      <div>
        Certains usages sont exonérés de redevance : aquaculture, géothermie,
        lutte antigel de cultures pérennes, réalimentation de milieux naturels,
        etc. En Outre-mer, la lutte contre les incendies et la production
        d’énergie renouvelable sont également exonérées.
      </div>
    </>
  );

  return (
    <>
      {
        fortesChaleurs ||
          type === 'pnr' ||
          type === 'petr' ||
          type === 'departement' ||
          eptRegex.test(libelle) ?
          <>
            {dataParMaille.length !== 0 && sumAllYears !== 0 ? (
              <div className={styles.container}>
                <div className="w-5/12">
                  <div className={styles.explicationWrapper}>
                    <p>
                      Le volume total des prélèvements en eau de votre territoire en
                      2020 est de <b>{volumeTotalPreleve} Mm3</b>, soit l’équivalent
                      de <b>{Round((1000000 * volumeTotalPreleve) / 3750, 3)}</b>{' '}
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
              <GraphDataNotFound code={code ?? libelle} />
            )}
          </>
          : <Loader />
      }
    </>
  );
};
