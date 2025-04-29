import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { fragiliteEcoLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { Map } from '@/components/maps/map';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { fragiliteEconomiqueTooltipText } from '@/lib/tooltipTexts';
import { eptRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
      const temp = await GetPatch4(code, type);
      setPatch4(temp);
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4, 'fortes_chaleurs')
    : undefined;

  return (
    <>
      {(communesMap && !isLoadingPatch4) ? (
        <div className={styles.container}>
          {communesMap.length ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
                  <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                    La part des ménages en situation de précarité énergétique
                    liée au logement sur votre territoire est de{' '}
                    <b>{Round((100 * precariteLogTerritoire), 1)} %. </b>
                  </p>
                  {type === 'commune' || eptRegex.test(libelle) ? (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      Ce taux est de{' '}
                      <b>
                        {Round((100 * precariteLogTerritoireSup), 1)} %
                      </b>{' '}
                      dans votre EPCI.
                    </p>
                  ) : (
                    ''
                  )}
                  <div className={styles.patch4Wrapper}>
                    {fortesChaleurs === 'Intensité très forte' ||
                      fortesChaleurs === 'Intensité forte' ? (
                      <TagItem
                        icon={fortesChaleursIcon}
                        indice="Fortes chaleurs"
                        tag={fortesChaleurs}
                      />
                    ) : null}
                  </div>
                  <CustomTooltip
                    title={fragiliteEconomiqueTooltipText}
                    texte="D'où vient ce chiffre ?"
                  />
                </div>
                <div className="px-4">
                  <p>
                    Les ménages en précarité énergétique doivent faire des choix
                    difficiles : limiter le chauffage, réduire l’utilisation de
                    l’eau chaude pour éviter des factures trop élevées. Un
                    logement mal isolé l’hiver sera aussi coûteux à rafraîchir
                    l’été.
                  </p>
                  <p>
                    Leurs conditions de vie sont directement impactées, avec des
                    conséquences sur leur santé, leur bien-être et leur capacité
                    à maintenir une qualité de vie décente. La précarité
                    énergétique n'est pas seulement une question de confort :
                    elle est un enjeu de santé publique et de justice sociale.
                  </p>
                  <p>
                    En 2024 : <br></br>- <b>55 %</b> des Français déclarent
                    avoir souffert d’un excès de chaleur en été.<br></br>-{' '}
                    <b>79 %</b> des Français ont dû restreindre leur chauffage.
                    <br></br>
                    <br></br>
                    En 2023 : <br></br>- plus d’un million de ménages ont subi
                    une intervention de leur fournisseur d’énergie pour cause
                    d'impayés, une situation qui les expose à une précarité
                    encore plus grande.
                  </p>
                  <p>
                    - - - - <br></br>
                    Adapter les logements au risque de forte chaleur est la
                    mesure 9 du Plan national d’adaptation au changement
                    climatique (PNACC 3).
                  </p>
                  <p>
                    Protéger les populations précaires des fortes chaleurs est
                    la mesure n°14 du PNACC 3.
                  </p>
                </div>
              </div>
              <div className="w-3/5">
                <div className={styles.graphWrapper}>
                  <p style={{ padding: '1em', margin: '0' }}>
                    <b>
                      Répartition de la précarité énergétique liée au logement
                      par commune au sein de l'EPCI
                    </b>
                  </p>
                  <Map data={'precarite_log'} carteCommunes={carteTerritoire} />
                  <div
                    className={styles.legend}
                    style={{ width: 'auto', justifyContent: 'center' }}
                  >
                    <LegendCompColor legends={fragiliteEcoLegend} />
                  </div>
                  <p style={{ padding: '1em', margin: '0' }}>
                    Source : Observation de la précarité énergétique (ONPE),
                    GEODIP
                  </p>
                </div>
              </div>
            </>
          ) : (
            <GraphDataNotFound code={code} libelle={libelle} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
