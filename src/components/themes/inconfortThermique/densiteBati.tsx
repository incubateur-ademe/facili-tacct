import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { densiteBatiLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { Map } from '@/components/maps/map';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import TagInIndicator from '@/components/patch4/TagInIndicator';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { densiteBatiTooltipText } from '@/lib/tooltipTexts';
import { eptRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
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
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);

  const communesMap = carteCommunes
    .map(CommunesIndicateursMapper)
    .filter((e) => !isNaN(e.properties.densite_bati));

  const carteTerritoire =
    type === 'ept' && eptRegex.test(libelle)
      ? communesMap.filter((e) => e.properties.ept === libelle)
      : communesMap;

  const densiteTerritoire = type === 'ept' && eptRegex.test(libelle) ?
    average(carteTerritoire.filter((e => e.properties.ept === libelle)).map((e) => e.properties.densite_bati))
    : type === 'commune'
      ? communesMap.find((obj) => obj.properties['code_geographique'] === code)?.properties.densite_bati
      : carteTerritoire.length
        ? average(carteTerritoire.map((e) => e.properties.densite_bati))
        : undefined;

  const densiteTerritoireSup = carteTerritoire.length ?? average(communesMap.map((e) => e.properties.densite_bati));

  useEffect(() => {
    void (async () => {
      const temp = await GetPatch4(code, type);
      setPatch4(temp);
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4, 'fortes_chaleurs')
    : "null";

  console.log("densiteTerritoire", densiteTerritoire);
  return (
    <>
      {!isLoadingPatch4 ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              {communesMap.length && densiteTerritoire ? (
                <>
                  <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                    Sur votre territoire, la densité moyenne du bâtiment est de
                    <b> {Round(densiteTerritoire, 2)}. </b>
                  </p>
                  {type === "commune" || eptRegex.test(libelle) && (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      À l'échelle de l'EPCI, ce taux est de
                      <b> {densiteTerritoireSup.toFixed(2)}.</b>
                    </p>
                  )}
                </>
              ) : ""
              }
              <TagInIndicator
                indice={["Fortes Chaleurs"]}
                icon={[fortesChaleursIcon]}
                tag={[fortesChaleurs]}
              />
              <CustomTooltip title={densiteBatiTooltipText} />
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
                  Densité du bâti par commune
                </b>
              </p>
              <div style={{ height: '500px', width: '100%', backgroundColor: 'white' }}>

                {
                  densiteTerritoire ?
                    <>
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
                    </>
                    : <DataNotFoundForGraph image={DataNotFound} />
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
