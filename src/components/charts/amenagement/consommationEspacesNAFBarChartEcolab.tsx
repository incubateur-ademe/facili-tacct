'use client';

import { espacesNAFBarChartLegend } from '@/components/maps/legends/datavizLegends';
import { Body } from '@/design-system/base/Textes';
import { ConsommationNAFEcolabApi } from '@/lib/postgres/EcolabApi';
import { espacesNAFBarChartTooltip } from '../ChartTooltips';
import { NivoBarChart } from '../NivoBarChart';

type GraphData = {
  Activité: number;
  Habitat: number;
  Mixte: number;
  Inconnu: number;
  Routes: number;
  Ferroviaire: number;
  annee: string;
};

export const ConsommationEspacesNAFBarChartEcolab = (props: {
  consommationEspacesNAF: ConsommationNAFEcolabApi[];
  sliderValue: number[];
  filterValue: string;
}) => {
  const { consommationEspacesNAF, sliderValue, filterValue } = props;
  const graphData: GraphData[] = [];
  const minYear = sliderValue[0];
  const maxYear = sliderValue[1];
  const allYears: string[] = ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];
  const filteredYears = allYears.filter(year => parseInt(year) >= minYear && parseInt(year) <= maxYear);

  filteredYears.forEach((year) => {
    graphData.push({
      Activité: (filterValue === 'Tous types' || filterValue === 'Activité') ? consommationEspacesNAF.filter(
        e => e['conso_enaf_com.date_mesure.year'].includes(year)
      ).filter(
        e => e['conso_enaf_com.secteur'] === "Activité"
      ).reduce(
        (acc, item) => acc + Number(item['conso_enaf_com.id_611']), 0
      ) : 0,
      Habitat: (filterValue === 'Tous types' || filterValue === 'Habitat') ? consommationEspacesNAF.filter(
        e => e['conso_enaf_com.date_mesure.year'].includes(year)
      ).filter(
        e => e['conso_enaf_com.secteur'] === "Habitat"
      ).reduce(
        (acc, item) => acc + Number(item['conso_enaf_com.id_611']), 0
      ) : 0,
      Mixte: (filterValue === 'Tous types' || filterValue === 'Mixte') ? consommationEspacesNAF.filter(
        e => e['conso_enaf_com.date_mesure.year'].includes(year)
      ).filter(
        e => e['conso_enaf_com.secteur'] === "Mixte"
      ).reduce(
        (acc, item) => acc + Number(item['conso_enaf_com.id_611']), 0
      ) : 0,
      Routes: (filterValue === 'Tous types' || filterValue === 'Route') ? consommationEspacesNAF.filter(
        e => e['conso_enaf_com.date_mesure.year'].includes(year)
      ).filter(
        e => e['conso_enaf_com.secteur'] === "Route"
      ).reduce(
        (acc, item) => acc + Number(item['conso_enaf_com.id_611']), 0
      ) : 0,
      Ferroviaire: (filterValue === 'Tous types' || filterValue === 'Fer') ? consommationEspacesNAF.filter(
        e => e['conso_enaf_com.date_mesure.year'].includes(year)
      ).filter(
        e => e['conso_enaf_com.secteur'] === "Fer"
      ).reduce(
        (acc, item) => acc + Number(item['conso_enaf_com.id_611']), 0
      ) : 0,
      Inconnu: (filterValue === 'Tous types' || filterValue === 'Inconnu') ? consommationEspacesNAF.filter(
        e => e['conso_enaf_com.date_mesure.year'].includes(year)
      ).filter(
        e => e['conso_enaf_com.secteur'] === "Inconnu"
      ).reduce(
        (acc, item) => acc + Number(item['conso_enaf_com.id_611']), 0
      ) : 0,
      annee: year
    });
  });

  const sumAllValues = graphData.reduce((total, obj) => {
    const { annee, ...numericValues } = obj;
    return total + Object.values(numericValues).reduce((sum, val) => sum + val, 0);
  }, 0);
  const minValueXTicks = graphData.map(e => e.annee).at(0);
  const maxValueXTicks = graphData.map(e => e.annee).at(-1);

  return (
    <div
      style={{ height: '500px', width: '100%', backgroundColor: 'white' }}
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
            bottomTickValues={
              minValueXTicks !== maxValueXTicks
                ? [`${minValueXTicks}`, `${maxValueXTicks}`]
                : [`${minValueXTicks}`]
            }
          />
          : <div
            style={{
              height: 'inherit',
              alignContent: 'center',
              textAlign: 'center'
            }}
          >
            <Body>Aucune donnée disponible avec ces filtres</Body>
          </div>
      }
    </div>
  );
};
