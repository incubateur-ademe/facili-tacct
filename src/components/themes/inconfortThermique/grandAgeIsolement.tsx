'use client';

import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { LineChart1 } from '@/components/charts/inconfortThermique/lineChartGrandAge';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import TagInIndicator from '@/components/patch4/TagInIndicator';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { grandAgeIsolementMapper } from '@/lib/mapper/inconfortThermique';
import {
  DataGrandAge,
  InconfortThermique,
  Patch4
} from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { eptRegex, numberWithSpacesRegex } from '@/lib/utils/regex';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GrandAgeText } from './staticTexts';
import styles from './themes.module.scss';

const sumProperty = (
  items: DataGrandAge[],
  property:
    | 'over_80_sum_1968'
    | 'over_80_sum_1975'
    | 'over_80_sum_1982'
    | 'over_80_sum_1990'
    | 'over_80_sum_1999'
    | 'over_80_sum_2009'
    | 'over_80_sum_2014'
    | 'over_80_sum_2020'
    | 'to_80_sum_1968'
    | 'to_80_sum_1975'
    | 'to_80_sum_1982'
    | 'to_80_sum_1990'
    | 'to_80_sum_1999'
    | 'to_80_sum_2009'
    | 'to_80_sum_2014'
    | 'to_80_sum_2020'
    | 'under_4_sum_1968'
    | 'under_4_sum_1975'
    | 'under_4_sum_1982'
    | 'under_4_sum_1990'
    | 'under_4_sum_1999'
    | 'under_4_sum_2009'
    | 'under_4_sum_2014'
    | 'under_4_sum_2020'
) => {
  return items.reduce(function (a, b) {
    return a + (b[property] || 0);
  }, 0);
};

export const GrandAgeIsolement = (props: {
  inconfortThermique: InconfortThermique[];
  data: Array<{
    donnee: string;
    facteurSensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  departement?: InconfortThermique[];
}) => {
  const { inconfortThermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>(undefined);
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const xData = [
    '1968',
    '1975',
    '1982',
    '1990',
    '1999',
    '2009',
    '2014',
    '2020'
  ];
  const grandAgeIsolementMapped = inconfortThermique.map(
    grandAgeIsolementMapper
  );

  const grandAgeIsolementTerritoire =
    type === 'commune'
      ? grandAgeIsolementMapped.filter((e) => e.code_geographique === code)
      : type === 'ept' && eptRegex.test(libelle)
        ? grandAgeIsolementMapped.filter((e) => e.ept === libelle)
        : type === 'epci' && !eptRegex.test(libelle)
          ? grandAgeIsolementMapped.filter((e) => e.epci === code)
          : grandAgeIsolementMapped;

  const over_80_2020_percent_territoire_sup = (
    (100 * sumProperty(grandAgeIsolementMapped, 'over_80_sum_2020')) /
    (sumProperty(grandAgeIsolementMapped, 'to_80_sum_2020') +
      sumProperty(grandAgeIsolementMapped, 'under_4_sum_2020'))
  ).toFixed(2);

  const yData = {
    over_80_1968_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1968')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1968') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1968'))
    ).toFixed(2),
    over_80_1975_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1975')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1975') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1975'))
    ).toFixed(2),
    over_80_1982_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1982')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1982') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1982'))
    ).toFixed(2),
    over_80_1990_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1990')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1990') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1990'))
    ).toFixed(2),
    over_80_1999_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1999')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1999') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1999'))
    ).toFixed(2),
    over_80_2009_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_2009')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_2009') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_2009'))
    ).toFixed(2),
    over_80_2014_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_2014')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_2014') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_2014'))
    ).toFixed(2),
    over_80_2020_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_2020')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_2020') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_2020'))
    ).toFixed(2)
  };
  const yGraphData = Object.values(yData)
    .map(Number)
    .map((value) => (isNaN(value) ? null : value));
  const methodeCalcul =
    'Nombre de personnes de plus de 80 ans divisé par la population totale à chaque recensement INSEE.';

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4 ? AlgoPatch4(patch4, 'fortes_chaleurs') : "null";

  return (
    <>
      {!isLoadingPatch4 ? (
        <div className={styles.container}>
          <div className={!Object.values(yData).slice(0, -2).includes('NaN') ? 'w-2/5' : 'w-1/2'}>
            <div className={styles.explicationWrapper}>
              {
                !Object.values(yData).slice(0, -2).includes('NaN') && (
                  <>
                    <p style={{ color: '#161616' }}>
                      En 2020, <b>{numberWithSpacesRegex(yData.over_80_2020_percent)} %</b> de la
                      population de votre territoire est constitué de personnes
                      âgées de plus de 80 ans (soit{' '}
                      <b>
                        {numberWithSpacesRegex(sumProperty(
                          grandAgeIsolementTerritoire,
                          'over_80_sum_2020'
                        ))}
                      </b>{' '}
                      personnes).
                    </p>
                    {type === 'commune' || eptRegex.test(libelle) ? (
                      <p style={{ color: '#161616' }}>
                        Ce taux est de{' '}
                        <b>{numberWithSpacesRegex(over_80_2020_percent_territoire_sup)} %</b> dans votre
                        EPCI.
                      </p>
                    ) : type === 'epci' ? (
                      <p style={{ color: '#161616' }}>
                        Ce taux est de{' '}
                        <b> {numberWithSpacesRegex(over_80_2020_percent_territoire_sup)} %</b> dans votre
                        département.
                      </p>
                    ) : (
                      ''
                    )}
                  </>
                )
              }
              <TagInIndicator
                indice={["Fortes Chaleurs"]}
                icon={[fortesChaleursIcon]}
                tag={[fortesChaleurs]}
              />
              <CustomTooltip title={methodeCalcul} />
            </div>
            <GrandAgeText />
          </div>
          <div className={!Object.values(yData).slice(0, -2).includes('NaN') ? 'w-3/5' : 'w-1/2'}>
            <div className={styles.graphWrapper}>
              <p style={{ padding: '1em', margin: '0' }}>
                <b>
                  Évolution de la part des 80 ans et plus dans la population
                </b>
              </p>
              {yData.over_80_2020_percent ? (
                <div
                  style={{
                    backgroundColor: 'white',
                    height: '500px',
                    width: '100%'
                  }}
                >
                  {
                    !Object.values(yData).slice(0, -2).includes('NaN') ?
                      <LineChart1 xData={xData} yData={yGraphData} />
                      : <DataNotFoundForGraph image={DataNotFound} />
                  }
                </div>
              ) : (
                <Loader />
              )}
              <p style={{ padding: '1em', margin: '0' }}>
                Source : Observatoire des territoires
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
