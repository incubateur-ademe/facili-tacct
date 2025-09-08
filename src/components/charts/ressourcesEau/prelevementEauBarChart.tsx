'use client';

import { prelevementEauBarChartLegend, ressourcesEauBarChartLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import useWindowDimensions from '@/hooks/windowDimensions';
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
  const windowDimensions = useWindowDimensions();
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


  const minValueXTicks = Math.min(...graphData.map((e) => Number(e.annee)));
  const maxValueXTicks = Math.max(...graphData.map((e) => Number(e.annee)));

  return (
    <div
      style={{ height: '500px', minWidth: '450px', backgroundColor: 'white' }}
    >
      {graphData && graphData.length ? (
        <>
          <NivoBarChartRessourcesEau
            bottomTickValues={
              minValueXTicks != maxValueXTicks
                ? [`${minValueXTicks}`, `${maxValueXTicks}`]
                : [`${minValueXTicks}`]
            }
            colors={prelevementEauBarChartLegend.map((e) => e.color)}
            graphData={graphData}
            keys={prelevementEauBarChartLegend.map((e) => e.value)}
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
          <div style={{
            paddingBottom: '1rem',
            marginTop: windowDimensions.width! > 1850 ? '-5rem' : windowDimensions.width! > 1700 ? '-7rem' : '-9rem'
          }}>
            <LegendCompColor legends={prelevementEauBarChartLegend} />
          </div>
        </>
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
