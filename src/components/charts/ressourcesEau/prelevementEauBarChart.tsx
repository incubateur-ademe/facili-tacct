'use client';

import { ressourcesEauBarChartLegend } from '@/components/maps/legends/datavizLegends';
import couleurs from '@/design-system/couleurs';
import { RessourcesEau } from '@/lib/postgres/models';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { simpleBarChartTooltip } from '../ChartTooltips';
import { NivoBarChartRessourcesEau } from '../NivoBarChart';

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
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const dataParMaille = type === "commune"
    ? ressourcesEau.filter((obj) => obj.code_geographique === code)
    : type === "epci"
      ? ressourcesEau.filter((obj) => obj.epci === code)
      : type === "petr"
        ? ressourcesEau.filter((obj) => obj.libelle_petr === libelle)
        : type === "ept"
          ? ressourcesEau.filter((obj) => obj.ept === libelle)
          : ressourcesEau;
  const [selectedYears, setSelectedYears] = useState<string[]>(
    ressourcesEauYears.map((year) => year.split('A')[1])
  );
  const graphData = graphDataFunct(selectedYears, dataParMaille);

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
      texteRaccourci: 'Agriculture',
      valeur: Sum(graphData.map((e) => e.Agriculture)),
      couleur: couleurs.graphiques.vert[2]
    },
    {
      texte_complet: 'Alimentation des canaux',
      texteRaccourci: 'Alimentation des canaux',
      valeur: Sum(graphData.map((e) => e['Alimentation des canaux'])),
      couleur: couleurs.graphiques.turquoise[2]
    },
    {
      texte_complet: 'Eau potable',
      texteRaccourci: 'Eau potable',
      valeur: Sum(graphData.map((e) => e['Eau potable'])),
      couleur: couleurs.graphiques.bleu[2]
    },
    {
      texte_complet: 'Industrie et autres usages économiques',
      texteRaccourci: 'Industrie',
      valeur: Sum(
        graphData.map((e) => e['Industrie et autres usages économiques'])
      ),
      couleur: couleurs.graphiques.violet[2]
    },
    {
      texte_complet: "Production d'électricité (barrages hydro-électriques)",
      texteRaccourci: 'Barrages hydro-électriques',
      valeur: Sum(
        graphData.map(
          (e) => e["Production d'électricité (barrages hydro-électriques)"]
        )
      ),
      couleur: couleurs.graphiques.orange[2]
    },
    {
      texte_complet: 'Refroidissement des centrales électriques',
      texteRaccourci: 'Refroidissement des centrales',
      valeur: Sum(
        graphData.map((e) => e['Refroidissement des centrales électriques'])
      ),
      couleur: couleurs.graphiques.rose[2]
    }
  ];
  const minValueXTicks = Math.min(...graphData.map((e) => Number(e.annee)));
  const maxValueXTicks = Math.max(...graphData.map((e) => Number(e.annee)));

  return (
    <div
      style={{ height: '500px', minWidth: '450px', backgroundColor: 'white' }}
    >
      {graphData && graphData.length ? (
        <NivoBarChartRessourcesEau
          bottomTickValues={
            minValueXTicks != maxValueXTicks
              ? [`${minValueXTicks}`, `${maxValueXTicks}`]
              : [`${minValueXTicks}`]
          }
          colors={legends.map((e) => e.couleur)}
          graphData={graphData}
          keys={legends.map((e) => e.texte_complet)}
          indexBy="annee"
          showLegend={false}
          tooltip={({ data }) => simpleBarChartTooltip({
            data,
            legende: ressourcesEauBarChartLegend,
            unite: 'Mm³',
            multiplicateur: 0.000001
          })}
          axisLeftLegend="Volumétrie en Mm3"
          axisLeftTickFactor={1000000}
        />
      ) : (
        <div
          style={{
            height: 'inherit',
            alignContent: 'center',
            textAlign: 'center'
          }}
        >
          Aucun prélèvement en eau avec ces filtres
        </div>
      )}
    </div>
  );
};

export default PrelevementEauBarChart;
