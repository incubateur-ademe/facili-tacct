import SubTabs from '@/components/ui/SubTabs';
import { SecheressesParsed } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import styles from './gestionRisquesCharts.module.scss';
import { SecheressesBarChart } from './secheressesBarChart';
import SecheressesPieChart from './secheressesPieChart';


type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  secheresses: SecheressesParsed[];
};

const SecheressesCharts = (props: Props) => {
  const {
    datavizTab,
    setDatavizTab,
    secheresses,
  } = props;
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;

  return (
    <div className={styles.dataWrapper}>
      <div className={styles.graphTabsWrapper}>
        <SubTabs
          data={['Répartition', 'Évolution']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Répartition' ? (
        <SecheressesPieChart secheresses={secheresses} />
      ) : datavizTab === 'Évolution' ? (
        <SecheressesBarChart secheresses={secheresses} />
      ) : (
        ''
      )}
    </div>
  );
};

export default SecheressesCharts;
