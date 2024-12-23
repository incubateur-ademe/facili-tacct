import { useSearchParams } from 'next/navigation';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import LegendInconfortThermique from '@/components/maps/components/legendInconfortThermique';
import { Map } from '@/components/maps/map';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes } from '@/lib/postgres/models';
import { CustomTooltip } from '@/lib/utils/CalculTooltip';
import styles from './themes.module.scss';

const average = (array: number[]) =>
  array.reduce((a: number, b: number) => a + b) / array.length;

export const DensiteBati = ({
  carteCommunes
}: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo');
  const codepci = searchParams.get('codepci')!;
  const communesMap = carteCommunes
    .map(CommunesIndicateursMapper)
    .filter((e) => !isNaN(e.properties.densite_bati));
  const commune = codgeo
    ? communesMap.find((obj) => obj.properties['code_commune'] === codgeo)
    : undefined;
  const densiteEpci = communesMap.map((el, i) => el.properties.densite_bati);

  const title =
    '(surface au sol de la construction x hauteur du bâtiment) / surface totale de la commune';
  return (
    <>
      {communesMap ? (
        <div className={styles.container}>
          {communesMap.length ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  {commune ? (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Dans la commune de {commune.properties.libelle_commune},
                      la densité moyenne du bâtiment est de{' '}
                      <b>{commune.properties.densite_bati.toFixed(2)}. </b>À
                      l'échelle de l'EPCI, ce taux est de{' '}
                      <b>{average(densiteEpci).toFixed(2)}.</b>
                    </p>
                  ) : (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Dans l'EPCI {communesMap[0]?.properties['libelle_epci']},
                      la densité moyenne du bâtiment est de{' '}
                      <b>{average(densiteEpci).toFixed(2)}.</b>
                    </p>
                  )}
                  <CustomTooltip title={title} />
                </div>
                <div className="px-4">
                  <p>
                    Il existe de nombreux indicateurs pour mesurer la densité du
                    bâti. La formule de calcul choisie ici est la suivante :{' '}
                    <br></br>
                    <br></br>
                    <b>
                      (surface au sol de la construction x hauteur du bâtiment)
                      / surface totale de la commune
                    </b>
                  </p>
                </div>
              </div>
              <div className="w-3/5">
                <div className={styles.graphWrapper}>
                  <LegendInconfortThermique data={'densite_bati'} />
                  <p style={{ padding: '1em', margin: '0' }}>
                    <b>
                      Répartition de la densité du bâti par commune au sein de
                      l'EPCI
                    </b>
                  </p>
                  <Map data={'densite_bati'} carteCommunes={communesMap} />
                  <p style={{ padding: '1em', margin: '0' }}>
                    Source : Base de Données Nationale Des Bâtiments – BDNB
                  </p>
                </div>
              </div>
            </>
          ) : (
            <GraphDataNotFound code={codgeo ? codgeo : codepci} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
