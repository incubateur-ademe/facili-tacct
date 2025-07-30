'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportButton } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { BoundsFromCollection } from '@/components/maps/components/boundsFromCollection';
import { espacesNAFDatavizLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapEspacesNaf } from '@/components/maps/mapEspacesNAF';
import { CommunesIndicateursDto } from '@/lib/dto';
import { consommationEspacesNafDoc } from '@/lib/utils/export/documentations';
import { ConsommationNAFExport } from '@/lib/utils/export/exportTypes';
import { useSearchParams } from 'next/navigation';
import styles from './biodiversite.module.scss';

export const ConsommationEspacesNAFDataviz = (props: {
  carteCommunes: CommunesIndicateursDto[];
  exportData: ConsommationNAFExport[];
}) => {
  const { carteCommunes, exportData } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const carteCommunesFiltered = carteCommunes.filter(
    (el) => el.properties.naf != undefined
  )
  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);

  return (
    <div className={styles.graphWrapper}>
      <div
        className={styles.biodiversiteGraphTitleWrapper}
        style={{ padding: '1rem' }}
      >
        <h2>Sols imperméabilisés entre 2009 et 2023</h2>
      </div>
      {
        carteCommunes.length !== 0 && enveloppe && carteCommunesFiltered !== null ? (
          <>
            <MapEspacesNaf
              carteCommunesFiltered={carteCommunesFiltered}
              enveloppe={enveloppe}
            />
            <div
              className={styles.legend}
              style={{ width: 'auto', justifyContent: 'center' }}
            >
              <LegendCompColor legends={espacesNAFDatavizLegend} />
            </div>
          </>
        ) : <DataNotFoundForGraph image={DataNotFound} />
      }
      <div className={styles.sourcesExportWrapper}>
        <p>Source : CEREMA, avril 2024</p>
        <ExportButton
          data={exportData}
          baseName="consommation_espaces_naf"
          type={type}
          libelle={libelle}
          code={code}
          sheetName="Espaces NAF"
          documentation={consommationEspacesNafDoc}
        />
      </div>
    </div>
  );
};
