import { useSearchParams } from 'next/navigation';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { surfacesIrrigueesLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapSurfacesIrriguees } from '@/components/maps/mapSurfacesIrriguees';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { DefinitionTooltip } from '@/components/utils/HtmlTooltip';
import { irrigable } from '@/lib/definitions';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { Agriculture, CarteCommunes } from '@/lib/postgres/models';
import styles from './agriculture.module.scss';

export const SurfacesIrriguees = ({
  carteCommunes,
  agriculture
}: {
  carteCommunes: CarteCommunes[];
  agriculture: Agriculture[];
}) => {
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo');
  const codepci = searchParams.get('codepci')!;
  const carteCommunesEnriched = carteCommunes.map((el) => {
    return {
      ...el,
      surfacesIrriguees:
        agriculture.find((item) => item.CODGEO === el.code_commune)
          ?.part_irr_SAU_2020 ?? NaN
    };
  });

  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);
  const commune = codgeo
    ? communesMap.find((obj) => obj.properties['code_commune'] === codgeo)
    : undefined;

  const title = (
    <>
      <div>Lorem ipsum : </div>
      <br></br>
      <div>...............</div>
    </>
  );

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
                      Commune
                    </p>
                  ) : (
                    <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                      EPCI
                    </p>
                  )}
                  <CustomTooltip
                    title={title}
                    texte="D'où vient ce chiffre ?"
                  />
                </div>
                <div className={styles.textWrapper}>
                  <p>
                    En France métropolitaine, 6,8 % de la surface agricole utile
                    (SAU) était irriguée en 2020, soit 15 % de plus qu’en 2010.
                    Face aux sécheresses de plus en plus marquées, les surfaces{' '}
                    <DefinitionTooltip title={irrigable}>
                      irrigables
                    </DefinitionTooltip>{' '}
                    ont aussi progressé de 23 % en dix ans, atteignant 11 % de
                    la SAU. Mais cette tendance interroge : l’eau prélevée pour
                    l’irrigation représente déjà 10 % des prélèvements totaux et
                    jusqu’à 23 % des eaux souterraines, modifiant localement le
                    cycle de l’eau.
                  </p>
                  <p>
                    L’irrigation permet de sécuriser les rendements, mais peut
                    aussi accentuer les tensions locales sur la ressource, en
                    particulier en été, période où la demande est forte pour
                    l’agriculture, mais aussi pour l’eau potable, le tourisme et
                    les écosystèmes. En prélevant l’eau des cours d’eau et des
                    nappes, l’irrigation peut fragiliser les milieux aquatiques,
                    déjà mis à l’épreuve par le changement climatique. Entre
                    2010 et 2020, certaines régions du nord et de l’est ont
                    fortement accru leurs surfaces irriguées, alors que d’autres
                    restent très peu équipées. Ainsi, certains territoires
                    irriguent plus de 40 % de leur SAU, tandis que d’autres n’en
                    irriguent que 1 %.
                  </p>
                  <p>
                    Avec une ressource en eau qui diminue et des usages
                    multiples, ce modèle peut-il tenir dans le temps ? À
                    l’échelle locale, les territoires devront questionner la
                    pérennité de l’irrigation face aux évolutions climatiques et
                    aux autres besoins en eau.
                  </p>
                  <ul>
                    <li>
                      Les prélèvements agricoles ont augmenté de 13 % entre 2010
                      et 2020.
                    </li>
                    <li>
                      En 2020, 1 million d’hectares équipés pour l’irrigation
                      n’ont finalement pas été irrigués.
                    </li>
                    <li>
                      En 2020, l’eau prélevée pour l’irrigation varie fortement
                      : de 40 m³/ha en Meurthe-et-Moselle à plus de 9 700 m³/ha
                      dans les Pyrénées-Orientales.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-3/5">
                <div className={styles.graphWrapper}>
                  <p style={{ padding: '1em', margin: '0' }}>
                    <b>Part des surfaces irriguées</b>
                  </p>
                  <MapSurfacesIrriguees carteCommunes={communesMap} />
                  <div
                    className={styles.legend}
                    style={{ width: 'auto', justifyContent: 'center' }}
                  >
                    <LegendCompColor legends={surfacesIrrigueesLegend} />
                  </div>
                  <p style={{ padding: '1em', margin: '0' }}>
                    Source : Agreste - Recensement agricole 2020
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
