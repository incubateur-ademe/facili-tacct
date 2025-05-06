'use client';
import feuxForetIcon from '@/assets/icons/feu_foret_icon_black.svg';
import GraphNotFound from '@/assets/images/no_data_on_territory.svg';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { IncendiesForet, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { feuxForetTooltipText } from '@/lib/tooltipTexts';
import { Round } from '@/lib/utils/reusableFunctions/round';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FeuxForetText } from '../inconfortThermique/staticTexts';
import FeuxForetDataviz from './feuxForetDataviz';
import styles from './gestionRisques.module.scss';

export const FeuxForet = (props: { incendiesForet: IncendiesForet[] }) => {
  const { incendiesForet } = props;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);

  // surface en km²
  const surfaceTotale = incendiesForet
    .map((el) => el.surface_parcourue)
    .reduce((a, b) => a + b, 0);
  const departement = incendiesForet[0]?.departement;

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci') {
        const temp = await GetPatch4(code, type);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const feuxForet = patch4 ? AlgoPatch4(patch4, 'feux_foret') : undefined;

  return (
    <>
      {!isLoadingPatch4 ? (
        <div className={styles.container}>
          <div className={incendiesForet.length !== 0 ? 'w-2/5' : 'w-1/2'}>
            <div className={styles.explicationWrapper}>
              {incendiesForet.length !== 0 ? (
                <p>
                  Depuis 2006, votre territoire a connu{' '}
                  <b>{incendiesForet.length}</b> départ(s) de feux pour une
                  surface totale parcourue de{' '}
                  <b>{Round(100 * surfaceTotale, 2)} ha</b>.
                </p>
              ) : null}
              {departement === '64' ? (
                <p>
                  Dans votre département, les données 2010 ont été perdues suite
                  à un incident technique et aucune donnée n’est disponible pour
                  2011.
                </p>
              ) : (
                ''
              )}
              {feuxForet === 'Intensité très forte' ||
                feuxForet === 'Intensité forte' ? (
                <div className={styles.patch4Wrapper}>
                  <TagItem
                    icon={feuxForetIcon}
                    indice="Feux de forêt"
                    tag={feuxForet}
                  />
                </div>
              ) : null}
              <CustomTooltip title={feuxForetTooltipText} texte="Définition" />
            </div>
            <FeuxForetText />
          </div>
          <div className={incendiesForet.length !== 0 ? 'w-3/5' : 'w-1/2'}>
            {incendiesForet.length !== 0 ? (
              <FeuxForetDataviz
                datavizTab={datavizTab}
                setDatavizTab={setDatavizTab}
                incendiesForet={incendiesForet}
              />
            ) : (
              <div className={styles.noData}>
                <Image
                  src={GraphNotFound}
                  alt=""
                  width={0}
                  height={0}
                  style={{ width: '90%', height: 'auto' }}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
