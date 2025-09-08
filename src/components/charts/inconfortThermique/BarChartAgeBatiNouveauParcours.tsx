'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { DateConstructionResidencesLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import styles from '@/components/themes/gestionRisques/gestionRisques.module.scss';
import { Body } from '@/design-system/base/Textes';
import couleurs from '@/design-system/couleurs';
import { ResponsiveBar } from '@/lib/nivo/bar';
import { Any } from '@/lib/utils/types';

type Props = {
  chartData: Array<{
    France: number;
    FranceColor: string;
    'Votre collectivité'?: string;
    'Votre collectiviteColor'?: string;
    periode: string;
  }>;
};

export const BarChartAgeBatiNouveauParcours = ({ chartData }: Props) => {
  const sumAllCount = chartData.reduce((sum, item) => sum + (Number(item["Votre collectivité"]) || 0), 0);
  return (
    <div style={{ height: sumAllCount > 0 ? '500px' : "fit-content", width: '100%', backgroundColor: 'white', borderRadius: '1rem' }}>
      {sumAllCount > 0 ?
        <>
          <ResponsiveBar
            data={chartData}
            keys={['Votre collectivité', 'France']}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]]
            }}
            enableLabel={false}
            tooltip={({ id, value, color }) => (
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
                    <Body size='sm'>{id} :</Body>
                    <Body size='sm' weight='bold'>{value} %</Body>
                  </div>
                </div>
              </div>
            )}
            groupMode="grouped"
            indexBy="periode"
            margin={{ top: 50, right: 30, bottom: 80, left: 40 }}
            valueScale={{ type: 'linear' }}
            colors={[couleurs.graphiques.rouge[3], couleurs.graphiques.bleu[1]]}
            innerPadding={2}
            axisBottom={{
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
          />
          <div style={{ margin: "-2.5rem 0.5rem"}}>
            <LegendCompColor legends={DateConstructionResidencesLegend} />
          </div>
        </>
        : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
      }
    </div>
  );
};
