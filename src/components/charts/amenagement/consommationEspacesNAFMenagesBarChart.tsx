'use client';

import { espacesNAFMenagesBarChartLegend } from '@/components/maps/legends/datavizLegends';
import { ConsommationNAF } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { NivoBarChart } from '../NivoBarChart';

const subObjectByKeys = (obj: ConsommationNAF, arr: string[]) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => arr.includes(k)));

type GraphData = {
  naf: number;
  nombreMenages: number;
  annee: string;
};

export const ConsommationEspacesNAFMenagesBarChart = (props: {
  consommationEspacesNAF: ConsommationNAF[];
  sliderValue: number[];
  filterValue: string;
}) => {
  const { consommationEspacesNAF } = props;
  const graphData: GraphData[] = [];
  const allYears: string[] = ['09-10', '14-15', '20-21'];

  allYears.forEach((year) => {
    let act = 0;
    let hab = 0;
    let mix = 0;
    let inc = 0;
    let rou = 0;
    let fer = 0;
    let men = 0;
    const firstYear = year.split('-')[0];
    const secondYear = year.split('-')[1];
    const menagesKey = 'C' + secondYear + '_MEN';
    const actKey = 'art' + firstYear + 'act' + secondYear;
    const habKey = 'art' + firstYear + 'hab' + secondYear;
    const mixKey = 'art' + firstYear + 'mix' + secondYear;
    const incKey = 'art' + firstYear + 'inc' + secondYear;
    const rouKey = 'art' + firstYear + 'rou' + secondYear;
    const ferKey = 'art' + firstYear + 'fer' + secondYear;
    const columnsNAF = [
      actKey,
      habKey,
      mixKey,
      incKey,
      rouKey,
      ferKey,
      menagesKey
    ];

    consommationEspacesNAF.map((el) => {
      const NAFByYear = subObjectByKeys(el, columnsNAF);
      act += NAFByYear[actKey] as number;
      hab += NAFByYear[habKey] as number;
      mix += NAFByYear[mixKey] as number;
      inc += NAFByYear[incKey] as number;
      rou += NAFByYear[rouKey] as number;
      fer += NAFByYear[ferKey] as number;
      men += NAFByYear[menagesKey] as number;
    });

    graphData.push({
      naf: act ? Round((act + hab + mix + inc + rou + fer) / 10000, 0) : 0,
      nombreMenages: men ?? 0,
      annee: year
    });
  });

  return (
    <div
      style={{ height: '500px', minWidth: '450px', backgroundColor: 'white' }}
    >
      <NivoBarChart
        colors={espacesNAFMenagesBarChartLegend.map((e) => e.couleur)}
        graphData={graphData}
        keys={Object.keys(graphData[0]).slice(0, -1)}
        indexBy="annee"
        axisLeftLegend="Surface en ha"
        groupMode="grouped"
      />
    </div>
  );
};
