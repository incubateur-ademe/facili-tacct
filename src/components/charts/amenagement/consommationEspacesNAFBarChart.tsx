'use client';

import { espacesNAFBarChartLegend } from '@/components/maps/legends/datavizLegends';
import { ConsommationNAF } from '@/lib/postgres/models';
import { espacesNAFBarChartTooltip } from '../ChartTooltips';
import { NivoBarChart } from '../NivoBarChart';

const subObjectByKeys = (obj: ConsommationNAF, arr: string[]) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => arr.includes(k)));

type GraphData = {
  Activité: number;
  Habitat: number;
  Mixte: number;
  Inconnu: number;
  Routes: number;
  Ferroviaire: number;
  annee: string;
};

export const ConsommationEspacesNAFBarChart = (props: {
  consommationEspacesNAF: ConsommationNAF[];
  sliderValue: number[];
  filterValue: string;
}) => {
  const { consommationEspacesNAF, sliderValue, filterValue } = props;
  const graphData: GraphData[] = [];
  const allYears: string[] = [];
  const stringYears = sliderValue.map((year) => year.toString().substring(2));
  const minYear = Number(stringYears[0]);
  const maxYear = Number(stringYears[1]);

  for (let i = 0, l = Math.ceil(maxYear - minYear); i <= l - 1; i++) {
    const value = minYear + Math.min(i, maxYear - minYear);
    value === 9
      ? allYears.push('09-10')
      : allYears.push(value.toString() + '-' + (value + 1).toString());
  }

  allYears.forEach((year) => {
    let act = 0;
    let hab = 0;
    let mix = 0;
    let inc = 0;
    let rou = 0;
    let fer = 0;
    const firstYear = year.split('-')[0];
    const secondYear = year.split('-')[1];
    const actKey = 'art' + firstYear + 'act' + secondYear;
    const habKey = 'art' + firstYear + 'hab' + secondYear;
    const mixKey = 'art' + firstYear + 'mix' + secondYear;
    const rouKey = 'art' + firstYear + 'rou' + secondYear;
    const ferKey = 'art' + firstYear + 'fer' + secondYear;
    const incKey = 'art' + firstYear + 'inc' + secondYear;

    const columnsNAF =
      filterValue === 'Habitat'
        ? [habKey]
        : filterValue === 'Activité'
          ? [actKey]
          : filterValue === 'Mixte'
            ? [mixKey]
            : filterValue === 'Inconnu'
              ? [incKey]
              : filterValue === 'Routes'
                ? [rouKey]
                : filterValue === 'Ferroviaire'
                  ? [ferKey]
                  : [actKey, habKey, mixKey, rouKey, ferKey, incKey];

    consommationEspacesNAF.map((el) => {
      const NAFByYear = subObjectByKeys(el, columnsNAF);
      act += NAFByYear[actKey] as number;
      hab += NAFByYear[habKey] as number;
      mix += NAFByYear[mixKey] as number;
      rou += NAFByYear[rouKey] as number;
      fer += NAFByYear[ferKey] as number;
      inc += NAFByYear[incKey] as number;
    });

    graphData.push({
      Activité: act ? Number((act / 10000)) : 0,
      Habitat: hab ? Number((hab / 10000)) : 0,
      Mixte: mix ? Number((mix / 10000)) : 0,
      Routes: rou ? Number((rou / 10000)) : 0,
      Ferroviaire: fer ? Number((fer / 10000)) : 0,
      Inconnu: inc ? Number((inc / 10000)) : 0,
      annee: year
    });
  });

  // Sum all numeric values in all objects of graphData (excluding "annee")
  const sumAllValues = graphData.reduce((total, obj) => {
    const { annee, ...numericValues } = obj;
    return total + Object.values(numericValues).reduce((sum, val) => sum + val, 0);
  }, 0);

  return (
    <div
      style={{ height: '500px', minWidth: '450px', backgroundColor: 'white' }}
    >
      {
        sumAllValues !== 0 ?
          <NivoBarChart
            colors={espacesNAFBarChartLegend.map((e) => e.color)}
            graphData={graphData}
            keys={Object.keys(graphData[0]).slice(0, -1)}
            indexBy="annee"
            axisLeftLegend="Surface en ha"
            axisBottomLegend="Années"
            showLegend={false}
            tooltip={espacesNAFBarChartTooltip}
          />
          : <div
            style={{
              height: 'inherit',
              alignContent: 'center',
              textAlign: 'center'
            }}
          >
            <p>Aucune donnée disponible avec ces filtres</p>
          </div>
      }
    </div>
  );
};
