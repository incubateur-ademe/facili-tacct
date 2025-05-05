import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { ConsommationNAF, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { espacesNAFTooltipText } from '@/lib/tooltipTexts';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ConsommationEspacesNAFAmenagementText } from '../inconfortThermique/staticTexts';
import styles from './amenagement.module.scss';
import { ConsommationEspacesNAFDataviz } from './consommationEspacesNAFDataviz';

export const ConsommationEspacesNAF = (props: {
  consommationNAF: ConsommationNAF[];
}) => {
  const { consommationNAF } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);

  const sumNaf = type === "commune"
    ? consommationNAF.filter((item) => item.code_geographique === code)[0]
      ?.naf09art23
    : consommationNAF.reduce((acc, item) => acc + item.naf09art23, 0);

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
  const precipitation = patch4
    ? AlgoPatch4(patch4, 'fortes_precipitations')
    : undefined;

  return (
    <>
      {
        !isLoadingPatch4 ?
          <div className={styles.container}>
            <div className="w-2/5">
              <div className={styles.explicationWrapper}>
                {
                  sumNaf !== 0 ? (
                    <p>
                      Entre 2009 et 2023, votre territoire a consommé{' '}
                      <b>{Round(sumNaf / 10000, 1)} hectare(s)</b> d’espaces naturels
                      et forestiers.{' '}
                    </p>
                  ) : ""
                }
                <div className={styles.patch4Wrapper}>
                  {fortesChaleurs === 'Intensité très forte' ||
                    fortesChaleurs === 'Intensité forte' ? (
                    <TagItem
                      icon={fortesChaleursIcon}
                      indice="Fortes chaleurs"
                      tag={fortesChaleurs}
                    />
                  ) : null}
                  {precipitation === 'Intensité très forte' ||
                    precipitation === 'Intensité forte' ? (
                    <TagItem
                      icon={precipitationIcon}
                      indice="Fortes précipitations"
                      tag={precipitation}
                    />
                  ) : null}
                </div>
                <CustomTooltip title={espacesNAFTooltipText} texte="D'où vient ce chiffre ?" />
              </div>
              <ConsommationEspacesNAFAmenagementText />
            </div>
            <div className="w-3/5">
              <ConsommationEspacesNAFDataviz
                consommationNAF={consommationNAF}
              />
            </div>
          </div>
          : <Loader />
      }
    </>
  );
};
