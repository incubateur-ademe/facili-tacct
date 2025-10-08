'use client';

import couleurs from '@/design-system/couleurs';
import { ResponsiveLine } from '@/lib/nivo/line';
import { Any } from '@/lib/utils/types';
import { useEffect, useState } from 'react';

type Props = {
  xData: Array<string | undefined>;
  yData: Array<number | null>;
};

type GraphData = {
  x: string | undefined;
  y: number | null | undefined;
};

export const LineChartGrandAge = (props: Props) => {
  const { xData, yData } = props;
  const [children, setChildren] = useState<GraphData[]>([]);
  const tempChildren: GraphData[] = [];

  useEffect(() => {
    xData.forEach((item, id) => {
      const dict: GraphData = {
        x: item,
        y: yData.at(id)
      };
      tempChildren.push(dict);
      setChildren(tempChildren);
    });
  }, [yData]);

  return (
    <ResponsiveLine
      curve="linear"
      data={[
        {
          id: "Courbe évolution de l'âge",
          color: 'hsl(284, 70%, 50%)',
          data: children
        }
      ]}
      colors={couleurs.graphiques.bleu[2]}
      isInteractive={true}
      useMesh={true}
      tooltip={({ point }) => {
        return (
          <div
            style={{
              backgroundColor: '#ffffff',
              color: 'black',
              maxWidth: 600,
              boxShadow: "0px 2px 6px 0px rgba(0, 0, 18, 0.16)",
              padding: '0.5rem 0.75rem',
              fontFamily: 'Marianne',
              fontSize: '0.875rem',
              borderRadius: '6px',
              lineHeight: '1.25rem',
              fontWeight: 400
            }}
          >
            {point.data.xFormatted} : <b>{point.data.yFormatted} %</b>
          </div>
        );
      }}
      yScale={{
        type: 'linear',
        min: 0,
        max: Math.max(...yData.filter((e) => e != null)) + 1
      }}
      margin={{
        top: 30,
        right: 30,
        bottom: 60,
        left: 60
      }}
      axisBottom={{
        legend: 'Années de recensement',
        legendOffset: 40,
        legendPosition: 'middle',
        renderTick: (e: Any) => {
          return (
            <g transform={`translate(${e.x},${e.y})`}>
              <foreignObject x={-50} y={0} width={100} height={45}>
                <div style={{
                  maxWidth: '15ch',
                  wordBreak: 'keep-all',
                  textAlign: 'center',
                  fontSize: 12,
                  fontWeight: 400,
                  margin: '0.5rem 0',
                  lineHeight: "normal"
                }}>{e.value}</div>
              </foreignObject>
            </g>
          );
        }
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Pourcentage (%)',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0,
        renderTick: (e: Any) => {
          return (
            <g transform={`translate(${e.x},${e.y})`}>
              <foreignObject x={-25} y={-17} width={20} height={25}>
                <div style={{
                  maxWidth: '15ch',
                  wordBreak: 'keep-all',
                  textAlign: 'center',
                  fontSize: 12,
                  fontWeight: 400,
                  margin: '0.5rem 0',
                  lineHeight: "normal"
                }}>{e.value}</div>
              </foreignObject>
            </g>
          );
        }
      }}
    />
  );
};
