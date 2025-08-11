'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import styles from '@/components/themes/gestionRisques/gestionRisques.module.scss';
import couleurs from '@/design-system/couleurs';
import { ResponsiveBar } from '@/lib/nivo/bar';

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
    <div style={{ height: '500px', width: '100%', backgroundColor: 'white', borderRadius: '1rem' }}>
      {sumAllCount > 0 ?
        <ResponsiveBar
          data={chartData}
          keys={['Votre collectivité', 'France']}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]]
          }}
          enableLabel={false}
          // label={(d) => `${d.value} %`}
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
                  <p>{id}</p>
                </div>
                <div className={styles.value}>
                  <p>{value} %</p>
                </div>
              </div>
            </div>
          )}
          groupMode="grouped"
          indexBy="periode"
          margin={{ top: 50, right: 30, bottom: 30, left: 40 }}
          valueScale={{ type: 'linear' }}
          colors={[couleurs.graphiques.rouge[3], couleurs.graphiques.bleu[1]]} // F28502 "#2CAAA6"
          innerPadding={2}

        />
        : <DataNotFoundForGraph image={DataNotFound} />
      }
    </div>
  );
};
