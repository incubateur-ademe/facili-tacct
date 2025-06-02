import { BarChartStats } from '@/components/charts/stats/BarChart';
import { Container } from '@/dsfr/layout';
import { GetInsightById } from '../query';
import styles from '../stats.module.scss';

interface ThematiqueResult {
  data: number[];
  labels: string[];
  count: number;
  aggregated_value: number;
  label: string;
  breakdown_value: string[];
  action: {
    math: string;
    type: string;
  };
}

const ThematiquesTypes = async () => {
  // Use the optimized API call with the numeric ID
  const thematiquesClicked = await GetInsightById(627111);
  const graphData = Array.isArray(thematiquesClicked)
    ? (thematiquesClicked as ThematiqueResult[])
      .filter((e) => e.action.math === 'dau')
      .map((e) => {
        return {
          titre: e.breakdown_value[0],
          nombre: e.aggregated_value
        };
      })
      .sort((a, b) => b.nombre - a.nombre)
    : null;

  return (
    <Container m="4w">
      {graphData ? (
        <div
          style={{
            backgroundColor: 'white',
            margin: '0 0 4rem'
          }}
        >
          <h2>Thématiques recherchées</h2>
          <div className={styles.graphWrapper}>
            <div
              className={styles.graphTitleWrapper}
              style={{ padding: '1rem' }}
            >
              <h2>Nombre de recherche par thématiques</h2>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                height: '650px',
                width: '100%',
                padding: '0 3rem',
                borderRadius: '0.5rem'
              }}
            >
              <BarChartStats graphData={graphData} />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </Container>
  );
};

export default ThematiquesTypes;
