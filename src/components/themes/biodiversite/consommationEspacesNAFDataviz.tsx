'use client';

import { espacesNAFDatavizLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapEspacesNaf } from '@/components/maps/mapEspacesNAF';
import { CommunesIndicateursDto } from '@/lib/dto';
import styles from './biodiversite.module.scss';

export const ConsommationEspacesNAFDataviz = (props: {
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { carteCommunes } = props;
  return (
    <div className={styles.graphWrapper}>
      <div
        className={styles.biodiversiteGraphTitleWrapper}
        style={{ padding: '1rem' }}
      >
        <h2>Sols imperméabilisés entre 2009 et 2023</h2>
      </div>
      <>
        <MapEspacesNaf carteCommunes={carteCommunes} />
        <div
          className={styles.legend}
          style={{ width: 'auto', justifyContent: 'center' }}
        >
          <LegendCompColor legends={espacesNAFDatavizLegend} />
        </div>
      </>
      <p style={{ padding: '1em', margin: '0' }}>Source : CEREMA, avril 2024</p>
    </div>
  );
};
