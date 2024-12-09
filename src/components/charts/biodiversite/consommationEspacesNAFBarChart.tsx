'use client';

import { ConsommationNAF } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { BarDatum, ResponsiveBar } from '@nivo/bar';

const colors: { [key: string]: string } = {
  '2009-2010': '#009ADC',
  '2010-2011': '#FFCF5E',
  'Mouvements de terrain': '#F66E19',
  'Retrait-gonflement des argiles': '#BB43BD',
  'Cyclones / Tempêtes': '#00C2CC',
  'Grêle / neige': '#00C190',
  Avalanche: '#7A49BE'
};

const pick = (obj: ConsommationNAF, arr: string[]) =>
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
}) => {
  const { consommationEspacesNAF } = props;
  // console.log("consommationEspacesNAF", consommationEspacesNAF);

  const filterByYear = () => {
    const arr: GraphData[] = [];
    const allYears = [
      '09-10',
      '10-11',
      '11-12',
      '12-13',
      '13-14',
      '14-15',
      '15-16',
      '16-17',
      '17-18',
      '18-19',
      '19-20',
      '20-21',
      '21-22',
      '22-23'
    ];
    allYears.forEach((year) => {
      const firstYear = year.split('-')[0];
      const secondYear = year.split('-')[1];
      const actKey = 'art' + firstYear + 'act' + secondYear;
      const habKey = 'art' + firstYear + 'hab' + secondYear;
      const mixKey = 'art' + firstYear + 'mix' + secondYear;
      const incKey = 'art' + firstYear + 'inc' + secondYear;
      const rouKey = 'art' + firstYear + 'rou' + secondYear;
      const ferKey = 'art' + firstYear + 'fer' + secondYear;
      const columnsNAF = [actKey, habKey, mixKey, incKey, rouKey, ferKey];
      let act = 0;
      let hab = 0;
      let mix = 0;
      let inc = 0;
      let rou = 0;
      let fer = 0;
      consommationEspacesNAF.map((el) => {
        const NAFByYear = pick(el, columnsNAF);
        act += NAFByYear[actKey] as number;
        hab += NAFByYear[habKey] as number;
        mix += NAFByYear[mixKey] as number;
        inc += NAFByYear[incKey] as number;
        rou += NAFByYear[rouKey] as number;
        fer += NAFByYear[ferKey] as number;
      });
      arr.push({
        Activité: Round(act / 10000, 0),
        Habitat: Round(hab / 10000, 0),
        Mixte: Round(mix / 10000, 0),
        Inconnu: Round(inc / 10000, 0),
        Routes: Round(rou / 10000, 0),
        Ferroviaire: Round(fer / 10000, 0),
        annee: year
      });
    });

    return arr;
  };
  const graphData = filterByYear();

  return (
    <div
      style={{ height: '500px', minWidth: '450px', backgroundColor: 'white' }}
    >
      {consommationEspacesNAF.length === 0 ? (
        <div
          style={{
            height: 'inherit',
            alignContent: 'center',
            textAlign: 'center'
          }}
        >
          Aucune donnée NAF avec ces filtres
        </div>
      ) : (
        ''
      )}
      <ResponsiveBar
        data={graphData as unknown as BarDatum[]}
        keys={Object.keys(graphData[0]).slice(0, -1)}
        isFocusable={true}
        indexBy="annee"
        margin={{ top: 40, right: 200, bottom: 80, left: 80 }}
        padding={0.3}
        innerPadding={2}
        borderRadius={1}
        valueScale={{
          type: 'linear'
        }}
        indexScale={{ type: 'band', round: true }}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        axisTop={null}
        axisRight={null}
        gridYValues={5}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Surface (ha)',
          legendPosition: 'middle',
          legendOffset: -50,
          truncateTickAt: 0,
          tickValues: 5
        }}
        labelSkipWidth={15}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: { itemOpacity: 1 }
              }
            ]
          }
        ]}
        role="application"
        ariaLabel="Consommation d'espaces NAF"
        barAriaLabel={(e) =>
          e.id + ': ' + e.formattedValue + ' in annee_arrete: ' + e.indexValue
        }
      />
    </div>
  );
};
