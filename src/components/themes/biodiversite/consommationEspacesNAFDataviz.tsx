'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { BoundsFromCollection } from '@/components/maps/components/boundsFromCollection';
import { espacesNAFDatavizLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapEspacesNaf } from '@/components/maps/mapEspacesNAF';
import { CommunesIndicateursDto } from '@/lib/dto';
import { useSearchParams } from 'next/navigation';
import styles from './biodiversite.module.scss';

export const ConsommationEspacesNAFDataviz = (props: {
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const carteCommunesFiltered = carteCommunes.filter(
    (el) => el.properties.naf != undefined
  ).filter(
    (e) =>
      e.properties.code_geographique !== '75056' &&
      e.properties.code_geographique !== '13055' &&
      e.properties.code_geographique !== '69123'
  );

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
      <p style={{ padding: '1em', margin: '0' }}>Source : CEREMA, avril 2024</p>
    </div>
  );
};
