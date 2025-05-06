'use client';

import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { PieChart1 } from '@/components/charts/inconfortThermique/pieChartTravailExt';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import TagInIndicator from '@/components/patch4/TagInIndicator';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { travailExtDto } from '@/lib/dto';
import { travailExtMapper } from '@/lib/mapper/inconfortThermique';
import { InconfortThermique, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { travailExterieurTooltipText } from '@/lib/tooltipTexts';
import { eptRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TravailExterieurText } from './staticTexts';
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
    : "null";

  return (
    <>
      {
        !isLoadingPatch4 ? (
          <div className={styles.container}>
            <div className="w-2/5">
              <div className={styles.explicationWrapper}>
                {
                  sums.sumConstruction || sums.sumAgriculture ?
                    <p style={{ color: '#161616' }}>
                      L’agriculture et la construction représentent une grande part
                      de postes en extérieur. La part cumulée des emplois de votre
                      territoire dans ces deux secteurs à risque est de
                      <b> {Round(travailExt, 1)} %</b>, soit{' '}
                      <b>
                        {Round((sums.sumAgriculture + sums.sumConstruction), 0)}
                      </b>{' '}
                      personnes.
                    </p>
                    : ""
                }
                <TagInIndicator
                  indice={["Fortes Chaleurs"]}
                  icon={[fortesChaleursIcon]}
                  tag={[fortesChaleurs]}
                />
                <CustomTooltip title={travailExterieurTooltipText} />
              </div>
              <TravailExterieurText />
            </div>
            <div className="w-3/5">
              <div className={styles.graphWrapper}>
                <p style={{ padding: '1em', margin: '0' }}>
                  <b>
                    Part des emplois par grands secteurs d’activité
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
        ) : <Loader />
      }
    </>
  );
};
