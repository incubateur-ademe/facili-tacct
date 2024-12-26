'use client';

import styles from '@/components/themes/gestionRisques/gestionRisques.module.scss';
import { BarDatum, ResponsiveBar } from '@/lib/nivo/bar';

interface GraphData {
  titre: string;
  nombre: number;
}
[];

interface BarChartStatsProps {
  graphData: GraphData[];
}

export const BarChartStats = ({ graphData }: BarChartStatsProps) => {
  return (
    <div style={{ height: '800px', width: '100%', backgroundColor: 'white' }}>
      <ResponsiveBar
        data={graphData as unknown as BarDatum[]}
        keys={['nombre']}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        label={(d) => `${d.value}`}
        indexBy="titre"
        margin={{ top: 50, right: 30, bottom: 250, left: 30 }}
        valueScale={{ type: 'linear' }}
        colorBy="indexValue"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 35,
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        tooltip={({ indexValue, value, color }) => (
          <div
            className={styles.tooltipEvolutionWrapper}
            style={{ right: '5rem' }}
          >
            <div className={styles.itemWrapper}>
              <div className={styles.titre}>
                <div
                  className={styles.colorSquare}
                  style={{ background: color }}
                />
                <p>{indexValue} :</p>
              </div>
              <div className={styles.value}>
                <p>{value}</p>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};
