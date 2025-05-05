'use client';

import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, ConsommationNAF } from '@/lib/postgres/models';
import { espacesNAFTooltipText } from '@/lib/tooltipTexts';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
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

  return (
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
          <CustomTooltip title={espacesNAFTooltipText} texte="D'où vient ce chiffre ?" />
        </div>
        <ConsommationEspacesNAFBiodiversiteText />
      </div>
      <div className="w-3/5">
        <ConsommationEspacesNAFDataviz
          carteCommunes={communesMap}
        />
      </div>
    </div>
  );
};
