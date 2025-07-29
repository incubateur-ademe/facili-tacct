'use client';

import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, ConsommationNAF, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { espacesNAFTooltipText } from '@/lib/tooltipTexts';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ConsommationEspacesNAFBiodiversiteText } from '../inconfortThermique/staticTexts';
import styles from './biodiversite.module.scss';
import { ConsommationEspacesNAFDataviz } from './consommationEspacesNAFDataviz';

export const ConsommationEspacesNAF = (props: {
  consommationNAF: ConsommationNAF[];
  carteCommunes: CarteCommunes[];
}) => {
  const { consommationNAF, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);

  const carteCommunesEnriched = carteCommunes.map((el) => {
    return {
      ...el,
      naf: consommationNAF.find(
        (item) => item.code_geographique === el.code_geographique
      )?.naf09art23
    };
  });
  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);
  const sumNaf = type === "commune"
    ? consommationNAF.filter((item) => item.code_geographique === code)[0]
      ?.naf09art23
    : consommationNAF.reduce((acc, item) => acc + item.naf09art23, 0);

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
    : undefined;
  const precipitation = patch4
    ? AlgoPatch4(patch4, 'fortes_precipitations')
    : undefined;
  const exportData = IndicatorExportTransformations.biodiversite.EspacesNaf(consommationNAF);

  return (
    <>
      {
        !isLoadingPatch4 ?
          <div className={styles.container}>
            <div className={carteCommunes.length !== 0 ? "w-2/5" : "w-1/2"}>
              <div className={styles.explicationWrapper}>
                {
                  sumNaf && sumNaf !== 0 ? (
                    <p>
                      Entre 2009 et 2023, votre territoire a consommé{' '}
                      <b>{Round(sumNaf / 10000, 1)} hectare(s)</b> d’espaces naturels
                      et forestiers.{' '}
                    </p>
                  ) : ""
                }
                <div className={styles.patch4Wrapper}>
                  {fortesChaleurs === 'Aggravation très forte' ||
                    fortesChaleurs === 'Aggravation forte' ? (
                    <TagItem
                      icon={fortesChaleursIcon}
                      indice="Fortes chaleurs"
                      tag={fortesChaleurs}
                    />
                  ) : null}
                  {precipitation === 'Aggravation très forte' ||
                    precipitation === 'Aggravation forte' ? (
                    <TagItem
                      icon={precipitationIcon}
                      indice="Fortes précipitations"
                      tag={precipitation}
                    />
                  ) : null}
                </div>
                <CustomTooltip title={espacesNAFTooltipText} texte="D'où vient ce chiffre ?" />
              </div>
              <ConsommationEspacesNAFBiodiversiteText />
            </div>
            <div className={carteCommunes.length !== 0 ? "w-3/5" : "w-1/2"}>
              <ConsommationEspacesNAFDataviz
                carteCommunes={communesMap}
                exportData={exportData}
              />
            </div>
          </div>
          : <Loader />
      }
    </>
  );
};
