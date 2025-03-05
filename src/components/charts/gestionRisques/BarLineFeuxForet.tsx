'use client';

import { feuxForetBarChartLegend } from '@/components/maps/legends/datavizLegends';
import styles from '@/components/themes/biodiversite/biodiversite.module.scss';
import { IncendiesForet } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { BarDatum, BarTooltipProps } from '@nivo/bar';
import { Point } from '@nivo/line';
import { NivoBarChart } from '../NivoBarChart';
import { NivoLineChart } from '../NivoLineChart';

interface IncendiesEnriched extends IncendiesForet {
  nombreIncendies: number;
}

export const BarLineFeuxForet = (props: {
  incendiesForet: IncendiesForet[];
}) => {
  const { incendiesForet } = props;

  const LineTooltip = (point: Point) => {
    return (
      <div
        style={{
          background: 'white',
          padding: '0.5rem',
          border: '1px solid #ccc',
          position: 'relative',
          right: '4rem',
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
        }}
      >
        {point.data.xFormatted} : <b>{point.data.yFormatted}%</b>
      </div>
    );
  };

  const CustomTooltip = ({ data }: BarTooltipProps<BarDatum>) => {
    const dataArray = Object.entries(data).map((el) => {
      return {
        titre: el[0],
        value: el[1],
        color: feuxForetBarChartLegend.find((e) => e.variable === el[0])
          ?.couleur
      };
    });

    return (
      <div className={styles.tooltipEvolutionWrapper}>
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
                <p>{Round(Number(el.value), 0)} ha</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const incendiesForetEnriched = incendiesForet.map((el) => {
    return {
      ...el,
      surface_parcourue: el.surface_parcourue * 100,
      nombreIncendies: incendiesForet.filter((item) => item.annee === el.annee)
        .length
    };
  });

  const barGraphData = incendiesForetEnriched.reduce(
    (acc: IncendiesEnriched[], curr: IncendiesEnriched) => {
      const x = acc.find((item) => item.annee === curr.annee);
      if (x) {
        x.surface_parcourue += curr.surface_parcourue;
      } else {
        acc.push(curr);
      }
      return acc;
    },
    []
  );

  const lineGraphData = [
    {
      id: "Nombre de départ d'incendies",
      data: barGraphData
        .sort((a, b) => a.annee - b.annee)
        .map((el) => {
          return {
            x: el.annee.toString(),
            y: el.nombreIncendies
          };
        })
    }
  ];

  // Polynôme pour calculer les margins autour du LineGraph
  const margins = (x: number) =>
    -0.00171608 * Math.pow(x, 5) +
    0.101171 * Math.pow(x, 4) -
    2.31346 * Math.pow(x, 3) +
    25.7411 * Math.pow(x, 2) -
    143.533 * x +
    458.873;

  console.log(lineGraphData[0].data.length);
  return (
    <div
      style={{
        height: '500px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <div className="absolute" style={{ height: '95%', width: '100%' }}>
        <NivoBarChart
          colors={feuxForetBarChartLegend.map((e) => e.couleur)}
          graphData={barGraphData as unknown as BarDatum[]}
          keys={['surface_parcourue']}
          indexBy="annee"
          axisLeftLegend="Surface en ha"
          axisBottomLegend="Années"
          showLegend={false}
          tooltip={CustomTooltip}
        />
      </div>
      <div className="absolute" style={{ height: '95%', width: '100%' }}>
        <NivoLineChart
          graphData={lineGraphData}
          margins={margins(lineGraphData[0].data.length)}
          axisRightLegend="Nombre d'incendies"
          colors={['#ED8DAE']}
          tooltip={({ point }) => {
            return (
              <div
                style={{
                  background: 'white',
                  padding: '0.5rem',
                  border: '1px solid #ccc',
                  position: 'relative',
                  right: '4rem',
                  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                }}
              >
                {point.data.xFormatted} :{' '}
                <b>{point.data.yFormatted} départs d'incendies</b>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};
