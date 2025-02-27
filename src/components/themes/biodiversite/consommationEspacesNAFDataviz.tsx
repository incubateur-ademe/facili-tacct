'use client';

import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapEspacesNaf } from '@/components/maps/mapEspacesNAF';
import { CommunesIndicateursDto } from '@/lib/dto';
import { ConsommationNAF } from '@/lib/postgres/models';
import styles from './biodiversite.module.scss';

const legends = [
  {
    value: '0-1',
    color: '#D8EFFA'
  },
  {
    value: '1-2',
    color: '#FFECEE'
  },
  {
    value: '2-5',
    color: '#FF9699'
  },
  {
    value: '5-10',
    color: '#E8323B'
  },
  {
    value: '10-20',
    color: '#B5000E'
  },
  {
    value: '> 20',
    color: '#680000'
  }
];

export const ConsommationEspacesNAFDataviz = (props: {
  consommationNAF: ConsommationNAF[];
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { carteCommunes } = props;
  return (
    <div className={styles.graphWrapper}>
      <div
        className={styles.biodiversiteGraphTitleWrapper}
        style={{ padding: '1rem' }}
      >
        <h2>Artificialisation des sols entre 2009 et 2023</h2>
      </div>
      <>
        <MapEspacesNaf carteCommunes={carteCommunes} />
        <div
          className={styles.legend}
          style={{ width: 'auto', justifyContent: 'center' }}
        >
          <LegendCompColor legends={legends} />
        </div>
      </>
      <p style={{ padding: '1em', margin: '0' }}>Source : CEREMA, avril 2024</p>
    </div>
  );
};
