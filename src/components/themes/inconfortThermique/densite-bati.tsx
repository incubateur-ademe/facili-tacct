import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { densiteBatiLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { Map } from '@/components/maps/map';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [patch4, setPatch4] = useState<Patch4[]>();
  const communesMap = carteCommunes
    .map(CommunesIndicateursMapper)
    .filter((e) => !isNaN(e.properties.densite_bati));
  const commune = codgeo
    ? communesMap.find((obj) => obj.properties['code_geographique'] === codgeo)
    : undefined;
  const densiteEpci = communesMap.map((el, i) => el.properties.densite_bati);

  useEffect(() => {
    void (async () => {
      const temp = await GetPatch4(codgeo ?? codepci);
      temp && codepci ? setPatch4(temp) : void 0;
    })();
  }, [codgeo, codepci]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4[0], 'fortes_chaleurs')
    : null;

  const title =
    '(surface au sol de la construction x hauteur du bâtiment) / surface totale de la commune';
  return (
    <>
      {communesMap && fortesChaleurs ? (
        <div className={styles.container}>
          {communesMap.length ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  {commune ? (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Dans la commune de{' '}
                      {commune.properties.libelle_geographique}, la densité
                      moyenne du bâtiment est de{' '}
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
                  <div className={styles.patch4Wrapper}>
                    {fortesChaleurs === 'Intensité très forte' ||
                    fortesChaleurs === 'Intensité forte' ? (
                      <div>
                        <TagItem
                          icon={fortesChaleursIcon}
                          indice="Fortes chaleurs"
                          tag={fortesChaleurs}
                        />
                      </div>
                    ) : null}
                  </div>
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
                  <p style={{ padding: '1em', margin: '0' }}>
                    <b>
                      Répartition de la densité du bâti par commune au sein de
                      l'EPCI
                    </b>
                  </p>
                  <Map data={'densite_bati'} carteCommunes={communesMap} />
                  <div
                    className={styles.legend}
                    style={{ width: 'auto', justifyContent: 'center' }}
                  >
                    <LegendCompColor legends={densiteBatiLegend} />
                  </div>
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
