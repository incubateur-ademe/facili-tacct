'use client';

import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { LineChart1 } from '@/components/charts/inconfortThermique/lineChartGrandAge';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { grandAgeIsolementMapper } from '@/lib/mapper/inconfortThermique';
import {
  DataGrandAge,
  InconfortThermique,
  Patch4
} from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const [patch4, setPatch4] = useState<Patch4[]>();
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
  const grandAgeIsolementCommune = codgeo
    ? grandAgeIsolementMapped.filter((e) => e.code_geographique === codgeo)
    : null;
  const grandAgeIsolementEpci = grandAgeIsolementMapped.filter(
    (e) => e.epci === codepci
  );
  const grandAgeIsolementDptmt = grandAgeIsolementMapped;
  const grandAgeCollectivite = grandAgeIsolementCommune
    ? grandAgeIsolementCommune
    : grandAgeIsolementEpci;

  const yData = {
    over_80_1968_percent: (
      (100 * sumProperty(grandAgeCollectivite, 'over_80_sum_1968')) /
      (sumProperty(grandAgeCollectivite, 'to_80_sum_1968') +
        sumProperty(grandAgeCollectivite, 'under_4_sum_1968'))
    ).toFixed(2),
    over_80_1975_percent: (
      (100 * sumProperty(grandAgeCollectivite, 'over_80_sum_1975')) /
      (sumProperty(grandAgeCollectivite, 'to_80_sum_1975') +
        sumProperty(grandAgeCollectivite, 'under_4_sum_1975'))
    ).toFixed(2),
    over_80_1982_percent: (
      (100 * sumProperty(grandAgeCollectivite, 'over_80_sum_1982')) /
      (sumProperty(grandAgeCollectivite, 'to_80_sum_1982') +
        sumProperty(grandAgeCollectivite, 'under_4_sum_1982'))
    ).toFixed(2),
    over_80_1990_percent: (
      (100 * sumProperty(grandAgeCollectivite, 'over_80_sum_1990')) /
      (sumProperty(grandAgeCollectivite, 'to_80_sum_1990') +
        sumProperty(grandAgeCollectivite, 'under_4_sum_1990'))
    ).toFixed(2),
    over_80_1999_percent: (
      (100 * sumProperty(grandAgeCollectivite, 'over_80_sum_1999')) /
      (sumProperty(grandAgeCollectivite, 'to_80_sum_1999') +
        sumProperty(grandAgeCollectivite, 'under_4_sum_1999'))
    ).toFixed(2),
    over_80_2009_percent: (
      (100 * sumProperty(grandAgeCollectivite, 'over_80_sum_2009')) /
      (sumProperty(grandAgeCollectivite, 'to_80_sum_2009') +
        sumProperty(grandAgeCollectivite, 'under_4_sum_2009'))
    ).toFixed(2),
    over_80_2014_percent: (
      (100 * sumProperty(grandAgeCollectivite, 'over_80_sum_2014')) /
      (sumProperty(grandAgeCollectivite, 'to_80_sum_2014') +
        sumProperty(grandAgeCollectivite, 'under_4_sum_2014'))
    ).toFixed(2),
    over_80_2020_percent: (
      (100 * sumProperty(grandAgeCollectivite, 'over_80_sum_2020')) /
      (sumProperty(grandAgeCollectivite, 'to_80_sum_2020') +
        sumProperty(grandAgeCollectivite, 'under_4_sum_2020'))
    ).toFixed(2),
    over_80_2020_percent_epci: (
      (100 * sumProperty(grandAgeIsolementEpci, 'over_80_sum_2020')) /
      (sumProperty(grandAgeIsolementEpci, 'to_80_sum_2020') +
        sumProperty(grandAgeIsolementEpci, 'under_4_sum_2020'))
    ).toFixed(2),
    over_80_2020_percent_dptmt: (
      (100 * sumProperty(grandAgeIsolementDptmt, 'over_80_sum_2020')) /
      (sumProperty(grandAgeIsolementDptmt, 'to_80_sum_2020') +
        sumProperty(grandAgeIsolementDptmt, 'under_4_sum_2020'))
    ).toFixed(2)
  };
  const yGraphData = Object.values(yData)
    .map(Number)
    .map((value) => (isNaN(value) ? null : value));
  const methodeCalcul =
    'Nombre de personnes de plus de 80 ans divisé par la population totale à chaque recensement INSEE.';

  useEffect(() => {
    void (async () => {
      const temp = await GetPatch4(codgeo ?? codepci);
      temp && codepci ? setPatch4(temp) : void 0;
    })();
  }, [codgeo, codepci]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4[0], 'fortes_chaleurs')
    : null;

  return (
    <>
      {fortesChaleurs ? (
        <>
          {inconfortThermique.length &&
          !Object.values(yData).slice(0, -2).includes('NaN') ? (
            <div className={styles.container}>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  {codgeo ? (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      En 2020, <b>{yData.over_80_2020_percent} %</b> de la
                      population de votre collectivité est constitué de
                      personnes âgées de plus de 80 ans (soit{' '}
                      <b>
                        {sumProperty(grandAgeCollectivite, 'over_80_sum_2020')}
                      </b>{' '}
                      personnes).
                      <br></br>
                      Ce taux est de <b>
                        {yData.over_80_2020_percent_epci} %
                      </b>{' '}
                      dans votre EPCI.
                    </p>
                  ) : (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      En 2020, <b>{yData.over_80_2020_percent} %</b> de la
                      population de votre collectivité est constitué de
                      personnes âgées de plus de 80 ans (soit{' '}
                      <b>
                        {sumProperty(grandAgeCollectivite, 'over_80_sum_2020')}
                      </b>{' '}
                      personnes).
                      <br></br>
                      Ce taux est de <b>
                        {yData.over_80_2020_percent_dptmt} %
                      </b>{' '}
                      dans votre département.
                    </p>
                  )}
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
                  <CustomTooltip title={methodeCalcul} />
                </div>
                <div className="px-4">
                  <p>
                    Les personnes âgées représentent les deux tiers de la
                    surmortalité en période de fortes chaleurs.
                    <br></br>Le corps des personnes âgées régule moins bien la
                    température, ce qui les rend plus sensibles aux fortes
                    chaleurs. Elles ressentent également moins la soif, ce qui
                    augmente les risques de déshydratation. S'ajoutent souvent
                    des problèmes de santé chroniques, comme les maladies
                    cardiovasculaires ou respiratoires, aggravés par la chaleur.
                  </p>
                  <p>
                    Cette vulnérabilité est exacerbée par plusieurs facteurs :
                    précarité énergétique, isolement social, et conditions de
                    logement inadéquates. Plus ces facteurs se cumulent, plus le
                    risque d’une surmortalité en période de chaleur augmente.
                    Ces conditions créent un "cercle vicieux" qui accroît leur
                    fragilité face à l’inconfort thermique.
                  </p>
                  <p>
                    ⇒ C’est toujours beaucoup trop !{' '}
                    <b>33 000 décès ont été attribués à la chaleur</b> entre
                    2014 et 2022, dont <b>23 000</b> chez les personnes âgées de
                    75 ans et plus.
                  </p>
                  <p>
                    ⇒ <b>28 % seulement des décès</b> liés à la chaleur se
                    produisent pendant les canicules, qui ne représente que 6 %
                    des jours de l’été. Soyons vigilants aussi en dehors des
                    périodes de canicule.
                  </p>
                  <p>
                    ⇒Tous concernés : les personnes de moins de 75 ans, c’est
                    71 % des consultations SOS Médecins en lien avec la chaleur
                    entre le 1er juin et le 15 septembre 2022, et un tiers des
                    décès liés à la chaleur entre 2014 et 2022.
                  </p>
                  <p>
                    ⇒ Seuls 12 % des Français se considèrent fragiles ou très
                    fragiles pendant une canicule. La perception du risque
                    personnel lié à la chaleur est faible.
                  </p>
                </div>
              </div>
              <div className="w-3/5">
                <div className={styles.graphWrapper}>
                  <p style={{ padding: '1em', margin: '0' }}>
                    <b>
                      Évolution de la part de population de plus de 80 ans
                      depuis 1968
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
                      <LineChart1 xData={xData} yData={yGraphData} />
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
            <GraphDataNotFound code={codgeo ? codgeo : codepci} />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
