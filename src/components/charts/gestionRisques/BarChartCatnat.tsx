'use client';

import { catnatPieChartLegend } from '@/components/maps/legends/datavizLegends';
import { BarDatum } from '@/lib/nivo/bar';
import { ArreteCatNat } from '@/lib/postgres/models';
import { CountOccByIndex } from '@/lib/utils/reusableFunctions/occurencesCount';
import { simpleBarChartTooltip } from '../ChartTooltips';
import { NivoBarChartCatnat } from '../NivoBarChart';

type ArreteCatNatEnriched = ArreteCatNat & {
  annee_arrete: number;
};

type GraphData = {
  indexName: number;
  [key: string]: number;
};

export const BarChartCatnat = (props: { gestionRisques: ArreteCatNatEnriched[] }) => {
  const { gestionRisques } = props;
  const graphData = CountOccByIndex(
    gestionRisques,
    'annee_arrete',
    'lib_risque_jo'
  ) as unknown as GraphData[];
  const minDate = Math.min(...gestionRisques.map((e) => e.annee_arrete));
  const maxDate = Math.max(...gestionRisques.map((e) => e.annee_arrete));
  return (
    <div
      style={{ height: '450px', width: '100%', backgroundColor: 'white' }}
    >
      {graphData.length === 0 ? (
        <div
          style={{
            height: 'inherit',
            alignContent: 'center',
            textAlign: 'center'
          }}
        >
          Aucun arrêté catnat avec ces filtres
        </div>
      ) : (
        <NivoBarChartCatnat
          graphData={graphData as unknown as BarDatum[]}
          keys={catnatPieChartLegend.map((e) => e.value)}
          indexBy="indexName"
          colors={catnatPieChartLegend.map((e) => e.color)}
          tooltip={({ data }) => simpleBarChartTooltip({ data, legende: catnatPieChartLegend })}
          axisLeftLegend="Nombre de catastrophes recensées"
          legendData={catnatPieChartLegend
            .map((legend, index) => ({
              id: index,
              label: legend.value,
              color: legend.color
            }))}
          bottomTickValues={minDate != maxDate
            ? [minDate, maxDate]
            : [minDate]}
        />
      )}
    </div>
  );
};
