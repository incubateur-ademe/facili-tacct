import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { fragiliteEcoLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapInconfortThermique } from '@/components/maps/mapInconfortThermique';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import TagInIndicator from '@/components/patch4/TagInIndicator';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { fragiliteEconomiqueTooltipText } from '@/lib/tooltipTexts';
import { eptRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FragiliteEconomiqueText } from './staticTexts';
import styles from './themes.module.scss';

export const FragiliteEconomique = ({
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
    .filter((e) => !isNaN(e.properties.precarite_logement));

  const carteTerritoire =
    type === 'ept' && eptRegex.test(libelle)
      ? communesMap.filter((e) => e.properties.ept === libelle)
      : communesMap;

  const precariteLogTerritoire =
    type === 'commune'
      ? Number(
        carteTerritoire.find(
          (obj) => obj.properties['code_geographique'] === code
        )?.properties['precarite_logement']
      )
      : Number(
        carteTerritoire.reduce(function (a, b) {
          return a + b.properties['precarite_logement'];
        }, 0) / carteTerritoire.length
      );

  const precariteLogTerritoireSup = Number(
    communesMap.reduce(function (a, b) {
      return a + b.properties['precarite_logement'];
    }, 0) / communesMap.length
  );

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4, 'fortes_chaleurs')
    : "null";

  return (
    <>
      {!isLoadingPatch4 ? (
        <div className={styles.container}>
          <>
            <div className={carteTerritoire.length > 0 ? 'w-2/5' : 'w-1/2'}>
              <div className={styles.explicationWrapper}>
                {
                  precariteLogTerritoire ? (
                    <p style={{ color: '#161616' }}>
                      La part des ménages en situation de précarité énergétique
                      liée au logement sur votre territoire est de{' '}
                      <b>{Round((100 * precariteLogTerritoire), 1)} %. </b>
                    </p>
                  ) : ""
                }
                {(type === 'commune' || eptRegex.test(libelle)) && precariteLogTerritoireSup ? (
                  <p style={{ color: '#161616' }}>
                    Ce taux est de{' '}
                    <b>
                      {Round((100 * precariteLogTerritoireSup), 1)} %
                    </b>{' '}
                    dans votre EPCI.
                  </p>
                ) : (
                  ''
                )}
                <TagInIndicator
                  indice={["Fortes Chaleurs"]}
                  icon={[fortesChaleursIcon]}
                  tag={[fortesChaleurs]}
                />
                <CustomTooltip
                  title={fragiliteEconomiqueTooltipText}
                  texte="D'où vient ce chiffre ?"
                />
              </div>
              <FragiliteEconomiqueText />
            </div>
            <div className={carteTerritoire.length > 0 ? "w-3/5" : "w-1/2"}>
              <div className={styles.graphWrapper}>
                <p style={{ padding: '1em', margin: '0' }}>
                  <b>
                    Part des ménages en précarité énergétique liée au logement
                  </b>
                </p>
                {
                  carteTerritoire.length > 0 ? (
                    <>
                      <MapInconfortThermique
                        carteCommunes={carteTerritoire}
                        data={'precarite_log'}
                      />
                      <div
                        className={styles.legend}
                        style={{ width: 'auto', justifyContent: 'center' }}
                      >
                        <LegendCompColor legends={fragiliteEcoLegend} />
                      </div>
                    </>
                  ) : <DataNotFoundForGraph image={DataNotFound} />
                }
                <p style={{ padding: '1em', margin: '0' }}>
                  Source : Observation de la précarité énergétique (ONPE),
                  GEODIP
                </p>
              </div>
            </div>
          </>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
