import SubTabs from '@/components/SubTabs';
import PieChartChefsExploitation from '@/components/charts/agriculture/pieChartChefsExploitation';
import { chefsExploitationLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapChefsExploitation } from '@/components/maps/mapChefsExploitation';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { Agriculture, CarteCommunes } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import styles from './agriculture.module.scss';

type Props = {
  carteCommunes: CarteCommunes[];
  agriculture: Agriculture[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
};

const RenouvellementAgricoleDataViz = (props: Props) => {
  const { carteCommunes, datavizTab, setDatavizTab, agriculture } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const carteCommunesEnriched = carteCommunes.map((el) => {
    return {
      ...el,
      chefsExploitation55Ans:
        agriculture.find((item) => item.CODGEO === el.code_commune)
          ?.part_over_55 ?? NaN
    };
  });

  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.chefsExploitationGraphTitleWrapper}>
        <h2>Chefs d'exploitation &gt; 55 ans en 2020</h2>
        <SubTabs
          data={['Répartition', 'Cartographie']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Répartition' ? (
        <PieChartChefsExploitation agriculture={agriculture} />
      ) : datavizTab === 'Cartographie' ? (
        <>
          <MapChefsExploitation carteCommunes={communesMap} />
          <div
            className={styles.legend}
            style={{ width: 'auto', justifyContent: 'center' }}
          >
            <LegendCompColor legends={chefsExploitationLegend} />
          </div>
        </>
      ) : (
        ''
      )}
      <p style={{ padding: '1em', margin: '0' }}>Source : XXXXXX</p>
    </div>
  );
};

export default RenouvellementAgricoleDataViz;
