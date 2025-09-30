'use client';

import { ConsommationEspacesNAFChartsEcolab } from '@/components/charts/amenagement/consommationEspacesNAFChartsEcolab';
import { MicroNumberCircle } from '@/components/charts/MicroDataviz';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { CustomTooltipNouveauParcours } from '@/components/utils/Tooltips';
import { Body } from '@/design-system/base/Textes';
import { CommunesContourMapper } from '@/lib/mapper/communes';
import { ConsommationNAFEcolabApi } from '@/lib/postgres/EcolabApi';
import { CarteCommunes } from '@/lib/postgres/models';
import { ConsommationEspacesNAFAmenagementText } from '@/lib/staticTexts';
import { espacesNAFTooltipText } from '@/lib/tooltipTexts';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import styles from '../../explorerDonnees.module.scss';

export const ConsommationEspacesNAFAmenagementEcolab = (props: {
  consommationNAF: ConsommationNAFEcolabApi[];
  carteCommunes: CarteCommunes[];
}) => {
  const { consommationNAF, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const sumNaf = consommationNAF.reduce((acc, item) => acc + Number(item['conso_enaf_com.id_611']), 0)
  const territoireContourMap = carteCommunes.map(CommunesContourMapper);

  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            <MicroNumberCircle valeur={sumNaf} arrondi={1} unite='ha' />
            <div className={styles.text}>
              {
                sumNaf && sumNaf !== 0 ? (
                  <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                    Entre 2009 et 2023, votre territoire a consommé{' '}
                    <b>{Round(sumNaf, 1)} hectare(s)</b> d’espaces naturels
                    et forestiers.{' '}
                  </Body>
                ) : ""
              }
              <CustomTooltipNouveauParcours
                title={espacesNAFTooltipText}
                texte="D'où vient ce chiffre ?"
              />
            </div>
          </div>
          <div className='mt-4'>
            <ReadMoreFade maxHeight={500}>
              <ConsommationEspacesNAFAmenagementText />
            </ReadMoreFade>
          </div>
        </div>
        <div className={styles.datavizWrapper}>
          <ConsommationEspacesNAFChartsEcolab
            consommationNAF={consommationNAF}
          />
        </div>
      </div>
    </>
  );
};
