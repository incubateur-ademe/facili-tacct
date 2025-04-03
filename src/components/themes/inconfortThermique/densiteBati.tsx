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
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4[]>();
  const re = new RegExp('T([1-9]|1[0-2])\\b');

  const communesMap = carteCommunes
    .map(CommunesIndicateursMapper)
    .filter((e) => !isNaN(e.properties.densite_bati));

  const carteTerritoire =
    type === 'ept' && re.test(libelle)
      ? communesMap.filter((e) => e.properties.ept === libelle)
      : communesMap;

  const densiteTerritoire = type === 'ept' && re.test(libelle) ?
    average(carteTerritoire.filter((e => e.properties.ept === libelle)).map((e) => e.properties.densite_bati))
    : type === 'commune'
      ? communesMap.find((obj) => obj.properties['code_geographique'] === code)?.properties.densite_bati
      : average(carteTerritoire.map((e) => e.properties.densite_bati));

  const densiteTerritoireSup = average(communesMap.map((e) => e.properties.densite_bati));

  useEffect(() => {
    !(
      type === 'petr' ||
      type === 'pnr' ||
      type === 'departement' ||
      re.test(libelle)
    )
      ? void (async () => {
        const temp = await GetPatch4(code);
        setPatch4(temp);
      })()
      : void 0;
  }, [code, libelle]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4[0], 'fortes_chaleurs')
    : null;

  const title =
    '(surface au sol de la construction x hauteur du bâtiment) / surface totale de la commune';

  return (
    <>
<<<<<<< HEAD:src/components/themes/inconfortThermique/densite-bati.tsx
      {communesMap && fortesChaleurs ? (
=======
      {fortesChaleurs ||
        type === 'pnr' ||
        type === 'petr' ||
        type === 'departement' ||
        re.test(libelle) ? (
>>>>>>> 303ebf1 (indicator: densite bati + age bati):src/components/themes/inconfortThermique/densiteBati.tsx
        <div className={styles.container}>
          {carteTerritoire.length ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                    Sur votre territoire, la densité moyenne du bâtiment est de
                    <b> {densiteTerritoire?.toFixed(2)}. </b>
                  </p>
                  {type === "commune" || re.test(libelle) ? (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      À l'échelle de l'EPCI, ce taux est de
                      <b> {densiteTerritoireSup.toFixed(2)}.</b>
                    </p>
                  ) : (
                    ""
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
                  <Map data={'densite_bati'} carteCommunes={carteTerritoire} />
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
            <GraphDataNotFound code={code ?? libelle} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
