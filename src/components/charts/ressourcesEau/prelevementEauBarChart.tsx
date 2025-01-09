'use client';

import styles from '@/components/themes/ressourcesEau/ressourcesEau.module.scss';
import { RessourcesEau } from '@/lib/postgres/models';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { BarDatum, BarTooltipProps } from '@nivo/bar';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GraphDataNotFound } from '../../graph-data-not-found';
import { NivoBarChart } from '../NivoBarChart';

type GraphData = {
  Agriculture: number;
  'Eau potable': number;
  'Industrie et autres usages économiques': number;
  'Refroidissement des centrales électriques': number;
  'Alimentation des canaux': number;
  "Production d'électricité (barrages hydro-électriques)": number;
  annee: string;
};

type Years =
  | 'A2008'
  | 'A2009'
  | 'A2010'
  | 'A2011'
  | 'A2012'
  | 'A2013'
  | 'A2014'
  | 'A2015'
  | 'A2016'
  | 'A2017'
  | 'A2018'
  | 'A2019'
  | 'A2020';

const ressourcesEauYears = [
  'A2008',
  'A2009',
  'A2010',
  'A2011',
  'A2012',
  'A2013',
  'A2014',
  'A2015',
  'A2016',
  'A2017',
  'A2018',
  'A2019',
  'A2020'
];

const graphDataFunct = (filteredYears: string[], data: RessourcesEau[]) => {
  const dataArr: GraphData[] = [];
  filteredYears.forEach((year) => {
    const genericObjects = (text: string) =>
      data
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes(text))
        .map((e) => e[year as Years])
        .filter((value): value is number => value !== null);
    const obj = {
      Agriculture: Sum(genericObjects('agriculture')),
      'Eau potable': Sum(genericObjects('potable')),
      'Industrie et autres usages économiques': Sum(
        genericObjects('industrie')
      ),
      'Refroidissement des centrales électriques': Sum(
        genericObjects('refroidissement')
      ),
      'Alimentation des canaux': Sum(genericObjects('alimentation')),
      "Production d'électricité (barrages hydro-électriques)": Sum(
        genericObjects('production')
      ),
      annee: year.split('A')[1]
    };
    const isNull = Sum(Object.values(obj).slice(0, -1) as number[]);
    isNull !== 0 ? dataArr.push(obj) : null;
  });
  return dataArr;
};

const PrelevementEauBarChart = ({
  ressourcesEau,
  sliderValue
}: {
  ressourcesEau: RessourcesEau[];
  sliderValue: number[];
}) => {
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const dataParMaille = codgeo
    ? ressourcesEau.filter((obj) => obj.code_geographique === codgeo)
    : ressourcesEau.filter((obj) => obj.epci === codepci);
  const [selectedYears, setSelectedYears] = useState<string[]>(
    ressourcesEauYears.map((year) => year.split('A')[1])
  );
  const graphData = graphDataFunct(selectedYears, dataParMaille);
  const collectiviteName = codgeo
    ? dataParMaille[0]?.libelle_geographique
    : dataParMaille[0]?.libelle_epci;

  useEffect(() => {
    setSelectedYears(
      ressourcesEauYears.slice(
        ressourcesEauYears.indexOf(`A${sliderValue[0]}`),
        ressourcesEauYears.indexOf(`A${sliderValue[1]}`) + 1
      )
    );
  }, [sliderValue]);

  const legends = [
    {
      texte_complet: 'Agriculture',
      texte_raccourci: 'Agriculture',
      valeur: Sum(graphData.map((e) => e.Agriculture)),
      couleur: '#00C190'
    },
    {
      texte_complet: 'Alimentation des canaux',
      texte_raccourci: 'Alimentation des canaux',
      valeur: Sum(graphData.map((e) => e['Alimentation des canaux'])),
      couleur: '#00C2CC'
    },
    {
      texte_complet: 'Eau potable',
      texte_raccourci: 'Eau potable',
      valeur: Sum(graphData.map((e) => e['Eau potable'])),
      couleur: '#009ADC'
    },
    {
      texte_complet: 'Industrie et autres usages économiques',
      texte_raccourci: 'Industrie',
      valeur: Sum(
        graphData.map((e) => e['Industrie et autres usages économiques'])
      ),
      couleur: '#7A49BE'
    },
    {
      texte_complet: "Production d'électricité (barrages hydro-électriques)",
      texte_raccourci: 'Barrages hydro-électriques',
      valeur: Sum(
        graphData.map(
          (e) => e["Production d'électricité (barrages hydro-électriques)"]
        )
      ),
      couleur: '#FFCF5E'
    },
    {
      texte_complet: 'Refroidissement des centrales électriques',
      texte_raccourci: 'Refroidissement des centrales',
      valeur: Sum(
        graphData.map((e) => e['Refroidissement des centrales électriques'])
      ),
      couleur: '#BB43BD'
    }
  ];
  const minValueXTicks = Math.min(...graphData.map((e) => Number(e.annee)));
  const maxValueXTicks = Math.max(...graphData.map((e) => Number(e.annee)));

  const CustomTooltip = ({ data }: BarTooltipProps<BarDatum>) => {
    const dataArray = Object.entries(data).map((el) => {
      return {
        titre: el[0],
        value: el[1],
        color: legends.find((e) => e.texte_complet === el[0])?.couleur
      };
    });
    return (
      <div className={styles.tooltipEvolutionWrapper}>
        <h3>
          {collectiviteName} ({dataArray.at(-1)?.value})
        </h3>
        {dataArray.slice(0, -1).map((el, i) => {
          return (
            <div className={styles.itemWrapper} key={i}>
              <div className={styles.titre}>
                <div
                  className={styles.colorSquare}
                  style={{ background: el.color }}
                />
                <p>{el.titre}</p>
              </div>
              <div className={styles.value}>
                <p>{(Number(el.value) / 1000000).toFixed(2)}Mm³</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return graphData && graphData.length ? (
    <div
      style={{ height: '500px', minWidth: '450px', backgroundColor: 'white' }}
    >
      <NivoBarChart
        bottomTickValues={
          minValueXTicks != maxValueXTicks
            ? [`${minValueXTicks}`, `${maxValueXTicks}`]
            : [`${minValueXTicks}`]
        }
        colors={legends.map((e) => e.couleur)}
        graphData={graphData}
        keys={legends.map((e) => e.texte_complet)}
        indexBy="annee"
        legendData={legends
          .filter((e) => e.valeur != 0)
          .map((legend, index) => ({
            id: index,
            label: legend.texte_raccourci,
            color: legend.couleur
          }))}
        tooltip={CustomTooltip}
        axisLeftLegend="Volumétrie en Mm³"
        axisLeftTickFactor={1000000}
      />
    </div>
  ) : (
    <GraphDataNotFound code={codgeo ? codgeo : codepci} />
  );
};

export default PrelevementEauBarChart;
