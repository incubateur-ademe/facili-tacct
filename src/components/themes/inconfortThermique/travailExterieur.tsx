'use client';

import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { PieChart1 } from '@/components/charts/inconfortThermique/pieChartTravailExt';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { travailExtDto } from '@/lib/dto';
import { travailExtMapper } from '@/lib/mapper/inconfortThermique';
import { InconfortThermique, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { travailExterieurTooltipText } from '@/lib/tooltipTexts';
import { eptRegex } from '@/lib/utils/regex';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './themes.module.scss';

const sumProperty = (
  items: travailExtDto[],
  prop: 'NA5AZ_sum' | 'NA5BE_sum' | 'NA5FZ_sum' | 'NA5GU_sum' | 'NA5OQ_sum'
) => {
  return items.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
};

export const TravailExterieur = (props: {
  inconfortThermique: InconfortThermique[];
}) => {
  const { inconfortThermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);

  const travailExterieurMapped = inconfortThermique.map(travailExtMapper);

  const travailExterieurTerritoire =
    type === 'commune'
      ? travailExterieurMapped.filter((e) => e.code_geographique === code)
      : type === 'ept' && eptRegex.test(libelle)
        ? travailExterieurMapped.filter((e) => e.ept === libelle)
        : type === 'epci' && !eptRegex.test(libelle)
          ? travailExterieurMapped.filter((e) => e.epci === code)
          : travailExterieurMapped;

  const sums = {
    sumAgriculture: sumProperty(travailExterieurTerritoire, 'NA5AZ_sum'),
    sumIndustries: sumProperty(travailExterieurTerritoire, 'NA5BE_sum'),
    sumConstruction: sumProperty(travailExterieurTerritoire, 'NA5FZ_sum'),
    sumCommerce: sumProperty(travailExterieurTerritoire, 'NA5GU_sum'),
    sumAdministration: sumProperty(travailExterieurTerritoire, 'NA5OQ_sum')
  };

  const graphData = [
    {
      id: 'Agriculture, sylviculture et pêche',
      label: 'Agriculture',
      count: sums.sumAgriculture,
      color: '#68D273',
      value: Number(
        ((100 * sums.sumAgriculture) / Sum(Object.values(sums))).toFixed(1)
      )
    },
    {
      id: 'Industrie manufacturière, industries extractives et autres',
      label: 'Industries',
      count: sums.sumIndustries,
      color: '#E4FFE3',
      value: Number(
        ((100 * sums.sumIndustries) / Sum(Object.values(sums))).toFixed(1)
      )
    },
    {
      id: 'Construction',
      label: 'Construction',
      count: sums.sumConstruction,
      color: '#BD72D6',
      value: Number(
        ((100 * sums.sumConstruction) / Sum(Object.values(sums))).toFixed(1)
      )
    },
    {
      id: 'Commerce, transports et services divers',
      label: 'Commerces et transports',
      count: sums.sumCommerce,
      color: '#FFF6E3',
      value: Number(
        ((100 * sums.sumCommerce) / Sum(Object.values(sums))).toFixed(1)
      )
    },
    {
      id: 'Administration publique, enseignement, santé humaine et action sociale',
      label: 'Administations',
      count: sums.sumAdministration,
      color: '#E3EDFF',
      value: Number(
        ((100 * sums.sumAdministration) / Sum(Object.values(sums))).toFixed(1)
      )
    }
  ];

  const travailExt =
    Number(
      ((100 * sums.sumConstruction) / Sum(Object.values(sums))).toFixed(1)
    ) +
    Number(((100 * sums.sumAgriculture) / Sum(Object.values(sums))).toFixed(1));

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
            {
              inconfortThermique.length && travailExt ? (
                <div className={styles.container}>
                  <div className="w-2/5">
                    {sums.sumConstruction || sums.sumAgriculture ? (
                      <div className={styles.explicationWrapper}>
                        <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                          L’agriculture et la construction représentent une grande part
                          de postes en extérieur. La part cumulée des emplois de votre
                          territoire dans ces deux secteurs à risque est de
                          <b> {travailExt?.toFixed(1)} %</b>, soit{' '}
                          <b>
                            {(sums.sumAgriculture + sums.sumConstruction).toFixed(0)}
                          </b>{' '}
                          personnes.
                        </p>
                        <div className={styles.patch4Wrapper}>
                          {fortesChaleurs === 'Intensité très forte' ||
                            fortesChaleurs === 'Intensité forte' ? (
                            <div>
                              <TagItem
                                icon={fortesChaleursIcon}
                                indice="Fortes chaleurs"
                                tag={fortesChaleurs}
                              />
                            </div>
                          ) : null}
                        </div>
                        <CustomTooltip title={travailExterieurTooltipText} />
                      </div>
                    ) : (
                      ''
                    )}
                    <div className="px-4">
                      <p>
                        <b>La chaleur tue.</b> En 2022 et 2023,{' '}
                        <b>18 accidents mortels liés à la chaleur</b> ont été signalés
                        par la Direction Générale du Travail. Ces accidents ont touché
                        des hommes âgés de 19 à 70 ans, et ont concerné principalement
                        des travailleurs dans les secteurs de la construction et des
                        travaux. La moitié de ces accidents sont survenus{' '}
                        <b>hors des périodes de vigilance canicule. </b>
                        La chaleur reste un danger constant pour les travailleurs en
                        extérieur. Plus le travail est physique, plus le risque est
                        élevé.
                      </p>
                      <p>
                        La sous-estimation des impacts sanitaires des fortes chaleurs,
                        ainsi que la méconnaissance des répercussions socioéconomiques,
                        sont des freins à la mise en place d’actions en matière
                        d’adaptation pertinentes. Selon une étude du Joint Research
                        Center, avec un scénario pessimiste d’émissions de gaz à effet
                        de serre, proche de la trajectoire de réchauffement de référence
                        (TRACC) de la France et sans mesure d’adaptation, la
                        productivité du travail à l’extérieur pourrait diminuer de 5 à
                        10 % d’ici la fin du siècle.
                      </p>
                      <p>
                        ⇒ Un tiers des décès liés à la chaleur concerne des personnes de
                        moins de 75 ans. La chaleur touche une grande partie de la
                        population, pas seulement les plus âgés !
                      </p>
                      <p>
                        ⇒ Près de 20 000 passages aux urgences causés par les fortes
                        chaleurs entre juin et septembre 2023. Entre 2015 et 2019, le
                        recours aux soins en excès a couté 31 millions d’euros.
                      </p>
                      <p>
                        ⇒ En 2019, 64 conducteurs de bus d’une même métropole ont exercé
                        leur droit de retrait en raison de la chaleur excessive dans
                        leurs véhicules.
                      </p>
                      <p>
                        - - - - <br></br>
                        La prévention des risques liés à la chaleur est la mesure 11 du
                        Plan National d'adaptation au changement climatique (PNACC 3).
                      </p>
                    </div>
                  </div>
                  <div className="w-3/5">
                    <div className={styles.graphWrapper}>
                      <p style={{ padding: '1em', margin: '0' }}>
                        <b>
                          Part des emplois par activités économiques regroupées en 5
                          postes
                        </b>
                      </p>
                      {graphData ? <PieChart1 graphData={graphData} /> : <Loader />}
                      <p style={{ padding: '1em', margin: '0' }}>
                        Source : INSEE, Emplois au lieu de travail par sexe, secteur
                        d'activité économique et catégorie socioprofessionnelle, 2021
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <GraphDataNotFound code={code} libelle={libelle} />
              )
            }
          </>
          : <Loader />
      }
    </>
  );
};
