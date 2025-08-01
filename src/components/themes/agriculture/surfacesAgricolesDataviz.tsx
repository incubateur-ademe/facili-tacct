"use client";

import WarningIcon from "@/assets/icons/exclamation_point_icon_black.png";
import { PieChartAgriculture } from '@/components/charts/agriculture/pieChartAgriculture';
import SurfacesAgricolesProgressBar from '@/components/charts/agriculture/surfacesAgricolesProgressBar';
import { ExportButton } from "@/components/exports/ExportButton";
import SubTabs from '@/components/SubTabs';
import { SurfacesAgricolesModel } from '@/lib/postgres/models';
import { multipleEpciBydepartementLibelle } from '@/lib/territoireData/multipleEpciBydepartement';
import { multipleEpciByPnrLibelle } from '@/lib/territoireData/multipleEpciByPnr';
import { SurfacesAgricolesExport } from "@/lib/utils/export/exportTypes";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styles from './agriculture.module.scss';

type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  surfacesAgricoles: SurfacesAgricolesModel[];
  exportData: SurfacesAgricolesExport[];
};

const SurfacesAgricolesDataviz = (props: Props) => {
  const { datavizTab, setDatavizTab, surfacesAgricoles, exportData } = props;
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
    <div className={styles.graphWrapper}>
      <div className={styles.dataVizGraphTitleWrapper}>
        <h2>Surface agricole par type de culture</h2>
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
      <div className={styles.sourcesExportWrapper}>
        <p>Source : AGRESTE, 2020</p>
        <ExportButton
          data={exportData}
          baseName="surfaces_agricoles"
          type={type}
          libelle={libelle}
          code={code}
          sheetName="Surfaces agricoles"
        />
      </div>
    </div>
  );
};

export default SurfacesAgricolesDataviz;
