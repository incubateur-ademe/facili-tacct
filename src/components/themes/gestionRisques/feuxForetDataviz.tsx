import { BarLineFeuxForet } from '@/components/charts/gestionRisques/BarLineFeuxForet';
import PieChartFeuxForet from '@/components/charts/gestionRisques/pieChartFeuxForet';
import { ExportButton } from '@/components/exports/ExportButton';
import SubTabs from '@/components/SubTabs';
import { IncendiesForet } from '@/lib/postgres/models';
import { IncendiesForetExport } from '@/lib/utils/export/exportTypes';
import { CountOcc } from '@/lib/utils/reusableFunctions/occurencesCount';
import { useSearchParams } from 'next/navigation';
import styles from './gestionRisques.module.scss';

type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  incendiesForet: IncendiesForet[];
  exportData: IncendiesForetExport[];
};

const FeuxForetDataviz = (props: Props) => {
  const { datavizTab, setDatavizTab, incendiesForet, exportData } = props;
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const code = searchParams.get('code')!;
  const sumTypes = Object.values(CountOcc(incendiesForet, 'nature')).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <div className={styles.graphWrapper}>
      {sumTypes <= 3 ? (
        <>
          <div className={styles.graphTitleWrapper}>
            <h2>Départs de feux et surfaces brûlées depuis 2006</h2>
          </div>
          <BarLineFeuxForet incendiesForet={incendiesForet} />
        </>
      ) : (
        <>
          <div className={styles.catnatGraphTitleWrapper}>
            <h2>Départs de feux et surfaces brûlées depuis 2006</h2>
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
      <div className={styles.sourcesExportWrapper}>
        <p>
          Source : Base de Données sur les Incendies de Forêts en France,
          consultée en 2024 (derniers chiffres disponibles : 2023)
        </p>
        <ExportButton
          data={exportData}
          baseName="feux_foret"
          type={type}
          libelle={libelle}
          code={code}
          sheetName="Feux de forêt"
        />
      </div>
    </div>
  );
};

export default FeuxForetDataviz;
