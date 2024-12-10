'use client';

import { ConsommationNAF } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { NivoBarChart } from '../NivoBarChart';

const legends = [
  {
    variable: 'Habitat',
    couleur: '#009ADC'
  },
  {
    variable: 'Activité',
    couleur: '#FFCF5E'
  },
  {
    variable: 'Mixte',
    couleur: '#FF6F61'
  },
  {
    variable: 'Inconnu',
    couleur: '#BB43BD'
  },
  {
    variable: 'Routes',
    couleur: '#00C2CC'
  },
  {
    variable: 'Ferroviaire',
    couleur: '#00949D'
  }
];

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
    const incKey = 'art' + firstYear + 'inc' + secondYear;
    const rouKey = 'art' + firstYear + 'rou' + secondYear;
    const ferKey = 'art' + firstYear + 'fer' + secondYear;
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
                  : [actKey, habKey, mixKey, incKey, rouKey, ferKey];

    consommationEspacesNAF.map((el) => {
      const NAFByYear = subObjectByKeys(el, columnsNAF);
      act += NAFByYear[actKey] as number;
      hab += NAFByYear[habKey] as number;
      mix += NAFByYear[mixKey] as number;
      inc += NAFByYear[incKey] as number;
      rou += NAFByYear[rouKey] as number;
      fer += NAFByYear[ferKey] as number;
    });

    graphData.push({
      Activité: act ? Round(act / 10000, 0) : 0,
      Habitat: hab ? Round(hab / 10000, 0) : 0,
      Mixte: mix ? Round(mix / 10000, 0) : 0,
      Inconnu: inc ? Round(inc / 10000, 0) : 0,
      Routes: rou ? Round(rou / 10000, 0) : 0,
      Ferroviaire: fer ? Round(fer / 10000, 0) : 0,
      annee: year
    });
  });

  return (
    <div
      style={{ height: '500px', minWidth: '450px', backgroundColor: 'white' }}
    >
      <NivoBarChart
        colors={legends.map((e) => e.couleur)}
        graphData={graphData}
        keys={Object.keys(graphData[0]).slice(0, -1)}
        indexBy="annee"
        axisLeftLegend="Surface en ha"
      />
    </div>
  );
};
