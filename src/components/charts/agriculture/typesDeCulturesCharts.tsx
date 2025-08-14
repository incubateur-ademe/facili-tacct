"use client";

import WarningIcon from "@/assets/icons/exclamation_point_icon_black.png";
import { PieChartAgriculture } from '@/components/charts/agriculture/pieChartAgriculture';
import SurfacesAgricolesProgressBar from '@/components/charts/agriculture/surfacesAgricolesProgressBar';
import SubTabs from '@/components/SubTabs';
import { SurfacesAgricolesModel } from '@/lib/postgres/models';
import { multipleEpciBydepartementLibelle } from '@/lib/territoireData/multipleEpciBydepartement';
import { multipleEpciByPnrLibelle } from '@/lib/territoireData/multipleEpciByPnr';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styles from './agriculture.module.scss';

type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  surfacesAgricoles: SurfacesAgricolesModel[];
};

const TypesDeCulturesCharts = (props: Props) => {
  const { datavizTab, setDatavizTab, surfacesAgricoles } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const territoiresPartiellementCouverts = type === 'departement'
    ? multipleEpciBydepartementLibelle.find(dept => dept.departement === code)?.liste_epci_multi_dept
    : type === 'pnr'
      ? multipleEpciByPnrLibelle.find(pnr => pnr.libelle_pnr === libelle)?.liste_epci_multi_pnr
      : undefined;

  return (
    <div className={styles.dataWrapper}>
      <div className={styles.graphTabsWrapper}>
        <SubTabs
          data={['Répartition', 'Détail par culture']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Répartition' ? (
        <PieChartAgriculture surfacesAgricoles={surfacesAgricoles} />
      ) : datavizTab === 'Détail par culture' ? (
        <SurfacesAgricolesProgressBar surfacesAgricoles={surfacesAgricoles} />
      ) : (
        ''
      )}
      {
        territoiresPartiellementCouverts && territoiresPartiellementCouverts.length > 0 &&
        <div style={{ minWidth: "450px", backgroundColor: "white", padding: "1em" }}>
          <div className='flex flex-row items-center justify-center'>
            <Image
              src={WarningIcon}
              alt="Attention"
              width={24}
              height={24}
              style={{ marginRight: '0.5em', alignItems: 'center' }}
            />
            <p style={{ fontSize: 12, margin: 0 }}>
              Attention, {territoiresPartiellementCouverts.length} EPCI
              ne {territoiresPartiellementCouverts.length === 1 ? "fait" : "font"} que
              partiellement partie de votre territoire
            </p>
          </div>
        </div>
      }
    </div>
  );
};

export default TypesDeCulturesCharts;
