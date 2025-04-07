'use client';
import feuxForetIcon from '@/assets/icons/feu_foret_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { IncendiesForet, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { eptRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import FeuxForetDataviz from './feuxForetDataviz';
import styles from './gestionRisques.module.scss';

export const FeuxForet = (props: { incendiesForet: IncendiesForet[] }) => {
  const { incendiesForet } = props;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4[]>();

  const surfaceTotale = incendiesForet
    .map((el) => el.surface_parcourue)
    .reduce((a, b) => a + b, 0);
  const departement = incendiesForet[0]?.departement;

  useEffect(() => {
    !(
      type === 'petr' ||
      type === 'pnr' ||
      type === 'departement' ||
      eptRegex.test(libelle)
    )
      ? void (async () => {
        const temp = await GetPatch4(code);
        setPatch4(temp);
      })()
      : void 0;
  }, [code, libelle]);

  const feuxForet = patch4 ? AlgoPatch4(patch4[0], 'feux_foret') : null;

  const title = (
    <div>
      <p>
        Un incendie de forêt est un incendie qui démarre en forêt ou qui se
        propage en forêt ou au sein de terres boisées au cours de son évolution
        (y compris dans les maquis ou garrigues dans l’aire méditerranéenne).
      </p>
      <p>
        La surface parcourue est la surface totale parcourue par le feu au cours
        de son évolution et quelle que soit la végétation touchée. Ces surfaces
        sont soit :
      </p>
      <ul>
        <li>
          estimées (renseignées dans la BDIFF sans être issues de mesures),
        </li>
        <li>
          mesurées (issues de mesures sur le terrain ou d’un Système
          d’Information Géographique).
        </li>
      </ul>
    </div>
  );

  return (
    <>
      {
        feuxForet ?
          <>
            {incendiesForet.length !== 0 ? (
              <div className={styles.container}>
                <div className="w-2/5">
                  <div className={styles.explicationWrapper}>
                    <p>
                      Depuis 2006, votre collectivité a connu{' '}
                      <b>{incendiesForet.length}</b> départ(s) de feux pour une
                      surface totale parcourue de{' '}
                      <b>{Round(100 * surfaceTotale, 2)} ha</b>.
                    </p>
                    {departement === '64' ? (
                      <p>
                        Dans votre département, les données 2010 ont été perdues suite
                        à un incident technique et aucune donnée n’est disponible pour
                        2011.
                      </p>
                    ) : (
                      ''
                    )}
                    <div className={styles.patch4Wrapper}>
                      {feuxForet === 'Intensité très forte' ||
                        feuxForet === 'Intensité forte' ? (
                        <TagItem
                          icon={feuxForetIcon}
                          indice="Feux de forêt"
                          tag={feuxForet}
                        />
                      ) : null}
                    </div>
                    <CustomTooltip title={title} texte="Définition" />
                  </div>
                  <div className={styles.textWrapper}>
                    <p>
                      Un climat plus chaud et plus sec sont des conditions propices
                      aux départs de feux et les vents potentiellement plus violents
                      sont sources de propagation rapide. La saison des feux
                      s’allonge. Elle débute désormais au printemps et se prolonge
                      jusqu’à l’automne. Les incendies touchent des territoires
                      considérés jusque-là comme épargnés. Ils ont de graves
                      conséquences : destruction de la biodiversité, pollution de
                      l’air et de l’eau, effets collatéraux sur d’autres aléas
                      naturels (érosion, glissements de terrain, inondations…) et
                      émissions massives de gaz à effet de serre, amplifiant le
                      dérèglement climatique.
                    </p>
                    <p>
                      Si les dégâts socio-économiques des incendies de forêt sont à ce
                      jour relativement contenus en France, c’est au prix d’
                      importants investissements dans les dispositifs d’alerte et de
                      prévention, qui ont permis de diviser par cinq les surfaces
                      brûlées annuellement, par rapport aux années 1980.
                    </p>
                    {/* <p>
                ⇒ 90 % des départs de feu sont d’origine humaine dont près de la
                moitié causée par des imprudences et un quart du à des actes de
                malveillance.
              </p> */}
                    <p>
                      ⇒ En 2023, parmi les feux de forêts dont la cause a été
                      identifiée, 9 feux sur 10 départs sont d’origine humaine
                    </p>
                    <p>
                      ⇒ 4 feux sur 5 se déclenchent à moins de 50 mètres des
                      habitations.
                    </p>
                  </div>
                </div>
                <div className="w-3/5">
                  <FeuxForetDataviz
                    datavizTab={datavizTab}
                    setDatavizTab={setDatavizTab}
                    incendiesForet={incendiesForet}
                  />
                </div>
              </div>
            ) : (
              <GraphDataNotFound code={code ?? libelle} />
            )}
          </>
          : <Loader />
      }
    </>
  );
};
