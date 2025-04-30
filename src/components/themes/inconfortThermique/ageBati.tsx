'use client';
import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { BarChart } from '@/components/charts/inconfortThermique/BarChartAgeBati';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { DefinitionTooltip } from '@/components/utils/HtmlTooltip';
import { PNACC } from '@/lib/definitions';
import { AgeBatiDto } from '@/lib/dto';
import { ageBatiMapper } from '@/lib/mapper/inconfortThermique';
import { InconfortThermique, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { eptRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './themes.module.scss';

interface ChartData {
  France: number;
  FranceColor: string;
  'Votre Collectivité'?: string;
  'Votre CollectiviteColor'?: string;
  periode: string;
}

const average = (
  array: AgeBatiDto[],
  prop:
    | 'age_bati_pre_19'
    | 'age_bati_19_45'
    | 'age_bati_46_90'
    | 'age_bati_91_05'
    | 'age_bati_post06'
) => array.reduce((a: number, b: AgeBatiDto) => a + b[prop], 0) / array.length;

export const AgeBati = (props: {
  inconfortThermique: InconfortThermique[];
}) => {
  const { inconfortThermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);

  const ageBatiMapped = inconfortThermique.map(ageBatiMapper);

  const ageBatiTerritoire =
    type === 'commune'
      ? ageBatiMapped.filter((e) => e.code_geographique === code)
      : type === 'ept' && eptRegex.test(libelle)
        ? ageBatiMapped.filter((e) => e.ept === libelle)
        : type === 'epci' && !eptRegex.test(libelle)
          ? ageBatiMapped.filter((e) => e.epci === code)
          : ageBatiMapped;

  const averages = {
    averageAgeBatiPre19: average(ageBatiTerritoire, 'age_bati_pre_19'),
    averageAgeBati1945: average(ageBatiTerritoire, 'age_bati_19_45'),
    averageAgeBati4690: average(ageBatiTerritoire, 'age_bati_46_90'),
    averageAgeBati9105: average(ageBatiTerritoire, 'age_bati_91_05'),
    averageAgeBatiPost06: average(ageBatiTerritoire, 'age_bati_post06')
  };

  const constructionBefore2006 =
    averages.averageAgeBatiPre19 +
    averages.averageAgeBati1945 +
    averages.averageAgeBati4690 +
    averages.averageAgeBati9105;

  const chartData: ChartData[] = [
    {
      periode: 'Avant 1919',
      'Votre Collectivité': averages.averageAgeBatiPre19.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 20.5,
      FranceColor: 'hsl(125, 70%, 50%)'
    },
    {
      periode: '1919-1945',
      'Votre Collectivité': averages.averageAgeBati1945.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 9.2,
      FranceColor: 'hsl(125, 70%, 50%)'
    },
    {
      periode: '1946-1990',
      'Votre Collectivité': averages.averageAgeBati4690.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 43.4,
      FranceColor: 'hsl(125, 70%, 50%)'
    },
    {
      periode: '1991-2005',
      'Votre Collectivité': averages.averageAgeBati9105.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 15.5,
      FranceColor: 'hsl(125, 70%, 50%)'
    },
    {
      periode: 'Après 2006',
      'Votre Collectivité': averages.averageAgeBatiPost06.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 11.4,
      FranceColor: 'hsl(125, 70%, 50%)'
    }
  ];

  useEffect(() => {
    void (async () => {
      const temp = await GetPatch4(code, type);
      setPatch4(temp);
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4 ? AlgoPatch4(patch4, 'fortes_chaleurs') : undefined;
  const secheresse = patch4 ? AlgoPatch4(patch4, 'secheresse_sols') : undefined;

  return (
    <>
      {!isLoadingPatch4 ? (
        <>
          {inconfortThermique.length && constructionBefore2006 &&
            !Object.values(averages).includes(NaN) &&
            Sum(Object.values(averages)) != 0 ? (
            <div className={styles.container}>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                    Sur votre territoire,{' '}
                    <b>{Round(constructionBefore2006, 1)} %</b> des résidences
                    principales sont construites avant 2006.
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
                    {secheresse === 'Intensité très forte' ||
                      secheresse === 'Intensité forte' ? (
                      <TagItem
                        icon={secheresseIcon}
                        indice="Sécheresse des sols"
                        tag={secheresse}
                      />
                    ) : null}
                  </div>
                </div>
                <p>
                  55 % des Français déclarent avoir eu trop chaud pendant au moins
                  24 heures dans leur logement en 2023. Si la canicule reste la principale
                  raison évoquée (87 % des cas), près d’un quart des ménages (24 %) identifie
                  aussi la mauvaise isolation de leur logement.
                </p>
                <p>
                  La robustesse des logements face aux températures élevées dépend
                  de leur qualité intrinsèque (inertie thermique, présence de volets
                  extérieurs, qualité des rénovations...). Si vous ne disposez pas
                  d'étude spécifique sur le sujet, la période de construction,
                  fournie par l'INSEE, vous donne une première approximation.
                </p>
                <p>
                  Adapter les logements au risque de forte chaleur est la mesure 9 du{' '}
                  <DefinitionTooltip title={PNACC}>
                    PNACC
                  </DefinitionTooltip> 3.
                </p>
              </div>
              <div className="w-3/5">
                <div className={styles.graphWrapper}>
                  <p style={{ padding: '1em', margin: '0' }}>
                    <b>Part des résidence principales par période de construction</b>
                  </p>
                  {chartData ? <BarChart chartData={chartData} /> : <Loader />}
                  <p style={{ padding: '1em', margin: '0' }}>Source : INSEE</p>
                </div>
              </div>
            </div>
          ) : (
            <GraphDataNotFound code={code} libelle={libelle} />
          )}
        </>
      ) : <Loader />}
    </>
  );
};
