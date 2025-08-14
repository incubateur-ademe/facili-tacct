import { BarLineFeuxForet } from '@/components/charts/gestionRisques/BarLineFeuxForet';
import PieChartFeuxForet from '@/components/charts/gestionRisques/pieChartFeuxForet';
import SubTabs from '@/components/SubTabs';
import { IncendiesForet } from '@/lib/postgres/models';
import { CountOcc } from '@/lib/utils/reusableFunctions/occurencesCount';
import styles from './gestionRisquesCharts.module.scss';

type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  incendiesForet: IncendiesForet[];
};

const FeuxForetCharts = (props: Props) => {
  const { datavizTab, setDatavizTab, incendiesForet } = props;
  const sumTypes = Object.values(CountOcc(incendiesForet, 'nature')).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <div className={styles.dataWrapper}>
      {sumTypes <= 3 ? (
        <>
          <BarLineFeuxForet incendiesForet={incendiesForet} />
        </>
      ) : (
        <>
          <div className={styles.graphTabsWrapper}>
            <SubTabs
              data={['Répartition', 'Évolution']}
              defaultTab={datavizTab}
              setValue={setDatavizTab}
            />
          </div>
          {datavizTab === 'Répartition' ? (
            <PieChartFeuxForet incendiesForet={incendiesForet} />
          ) : datavizTab === 'Évolution' ? (
            <BarLineFeuxForet incendiesForet={incendiesForet} />
          ) : (
            ''
          )}
        </>
      )}
    </div>
  );
};

export default FeuxForetCharts;
