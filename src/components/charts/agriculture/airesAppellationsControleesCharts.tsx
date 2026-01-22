"use client";

import SubTabs from '@/components/ui/SubTabs';
import styles from './agriculture.module.scss';
import PieChartAiresAppellationsControlees from "./pieChartAiresAppellationsControlees";

type Props = {
  airesAppellationsControlees: {
    nom: string;
    signe: string;
  }[];
};

const AiresAppellationsControleesCharts = (props: Props) => {
  const { airesAppellationsControlees } = props;

  return (
    <div className={styles.dataWrapper}>
      {/* <div className={styles.graphTabsWrapper}>
        <SubTabs
          data={['Répartition']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div> */}
      {/* {datavizTab === 'Répartition' ? ( */}
        <PieChartAiresAppellationsControlees
          airesAppellationsControlees={airesAppellationsControlees}
        />
      {/* ) : (
        '' 
      )}*/}
    </div>
  );
};

export default AiresAppellationsControleesCharts;
