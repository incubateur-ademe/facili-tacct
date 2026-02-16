import SubTabs from '@/components/ui/SubTabs';
import { SecheressesPasseesModel } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import styles from './gestionRisquesCharts.module.scss';
import { SecheressesBarChart } from './secheressesBarChart';


type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  secheresses: SecheressesPasseesModel[];
};

const SecheressesCharts = (props: Props) => {
  const {
    datavizTab,
    setDatavizTab,
    secheresses,
  } = props;
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;

  const toutesLesRestrictions = secheresses.flatMap(s =>
    s.restrictions
      ? JSON.parse(s.restrictions.replace(/None/g, 'null').replace(/'/g, '"'))
      : []
  );

  const transformerRestrictions = (restrictions: {
    AEP: "alerte" | "alerte_renforcee" | "crise" | "vigilance" | null
    SOU: "alerte" | "alerte_renforcee" | "crise" | "vigilance" | null
    SUP: "alerte" | "alerte_renforcee" | "crise" | "vigilance" | null
    end_date: string
    start_date: string
  }[]) => {
    const compteurParAnnee: Record<string, {
      annee: string;
      vigilance: number;
      alerte: number;
      alerte_renforcee: number;
      crise: number;
    }> = {};

    restrictions.forEach(restriction => {
      const { AEP, SOU, SUP, start_date, end_date } = restriction;

      const dateDebut = new Date(start_date);
      const dateFin = new Date(end_date);

      for (let d = new Date(dateDebut); d <= dateFin; d.setDate(d.getDate() + 1)) {
        const annee = d.getFullYear().toString();

        if (!compteurParAnnee[annee]) {
          compteurParAnnee[annee] = {
            annee,
            vigilance: 0,
            alerte: 0,
            alerte_renforcee: 0,
            crise: 0
          };
        }

        [AEP, SOU, SUP].forEach(type => {
          if (type === 'vigilance') compteurParAnnee[annee].vigilance++;
          else if (type === 'alerte') compteurParAnnee[annee].alerte++;
          else if (type === 'alerte_renforcee') compteurParAnnee[annee].alerte_renforcee++;
          else if (type === 'crise') compteurParAnnee[annee].crise++;
        });
      }
    });

    return Object.values(compteurParAnnee);
  };

  const restrictionsParAnnee = transformerRestrictions(toutesLesRestrictions);
  console.log("restrictionsParAnnee", restrictionsParAnnee);

  return (
    <div className={styles.dataWrapper}>
      <div className={styles.graphTabsWrapper}>
        <SubTabs
          data={['Intensité', 'Saisonnalité']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Intensité' ? (
        <SecheressesBarChart restrictionsParAnnee={restrictionsParAnnee} />
      ) : datavizTab === 'Saisonnalité' ? (
        <div>test 2</div>
      ) : (
        ''
      )}
    </div>
  );
};

export default SecheressesCharts;
