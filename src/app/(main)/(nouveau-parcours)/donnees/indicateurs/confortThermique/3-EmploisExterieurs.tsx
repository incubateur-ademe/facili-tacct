"use client";
import { PieChartTravailExt } from '@/components/charts/inconfortThermique/pieChartTravailExt';
import { MicroPieChart } from "@/components/charts/MicroDataviz";
import { ExportButtonNouveauParcours } from "@/components/exports/ExportButton";
import { Loader } from "@/components/loader";
import { emploisEnExterieurLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { CustomTooltipNouveauParcours } from "@/components/utils/CalculTooltip";
import { Body, H3 } from "@/design-system/base/Textes";
import { travailExtMapper } from "@/lib/mapper/inconfortThermique";
import { InconfortThermique } from "@/lib/postgres/models";
import { travailExterieurTooltipText } from '@/lib/tooltipTexts';
import { IndicatorExportTransformations } from "@/lib/utils/export/environmentalDataExport";
import { eptRegex } from "@/lib/utils/regex";
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from "next/navigation";
import styles from '../../explorerDonnees.module.scss';
import { sumProperty } from '../fonctions';
import { EmploisEnExterieurPieChartData } from '../graphData';

export const EmploisEnExterieur = ({
  inconfortThermique
}: {
  inconfortThermique: InconfortThermique[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const travailExterieurMapped = inconfortThermique.map(travailExtMapper);
  const travailExterieurTerritoire =
    type === 'commune'
      ? travailExterieurMapped.filter((e) => e.code_geographique === code)
      : type === 'ept' && eptRegex.test(libelle)
        ? travailExterieurMapped.filter((e) => e.ept === libelle)
        : type === 'epci' && !eptRegex.test(libelle)
          ? travailExterieurMapped.filter((e) => e.epci === code)
          : travailExterieurMapped;
  const sums = {
    sumAgriculture: sumProperty(travailExterieurTerritoire, 'NA5AZ_sum'),
    sumIndustries: sumProperty(travailExterieurTerritoire, 'NA5BE_sum'),
    sumConstruction: sumProperty(travailExterieurTerritoire, 'NA5FZ_sum'),
    sumCommerce: sumProperty(travailExterieurTerritoire, 'NA5GU_sum'),
    sumAdministration: sumProperty(travailExterieurTerritoire, 'NA5OQ_sum')
  };
  const graphData = EmploisEnExterieurPieChartData(sums);
  const travailExt =
    Number(
      ((100 * sums.sumConstruction) / Sum(Object.values(sums))).toFixed(1)
    ) +
    Number(((100 * sums.sumAgriculture) / Sum(Object.values(sums))).toFixed(1));
  const exportData = IndicatorExportTransformations.inconfort_thermique.travailExt(travailExterieurTerritoire);

  return (
    <>
      <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
        Part des emplois par grands secteurs d’activité
      </H3>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            <MicroPieChart pourcentage={travailExt} arrondi={1} ariaLabel="Pourcentage de l'emploi en extérieur" />
            {
              sums.sumConstruction || sums.sumAgriculture ?
                <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                  L’agriculture et la construction représentent une grande part
                  de postes en extérieur. La part cumulée des emplois de votre
                  territoire dans ces deux secteurs à risque est de
                  {" "}{Round(travailExt, 1)} %, soit{' '}
                  {Round((sums.sumAgriculture + sums.sumConstruction), 0)} personnes.
                </Body>
                : ""
            }
            <Body size='sm'>
              La chaleur reste un danger constant pour les travailleurs en extérieur.
              Plus le travail est physique, plus le risque est élevé. Les impacts
              de la chaleur sur la santé et l’économie sont actuellement très sous-estimés.
              <CustomTooltipNouveauParcours title={travailExterieurTooltipText} />
            </Body>
          </div>
        </div>
        <div className={styles.datavizWrapper}>
          {graphData ?
            <PieChartTravailExt
              graphData={graphData}
              travailExterieurTerritoire={travailExterieurTerritoire}
            /> : <Loader />
          }
          <div className={styles.legend}>
            <LegendCompColor legends={emploisEnExterieurLegend} />
          </div>
          <div className={styles.sourcesExportWrapper} style={{ borderTop: '1px solid var(--gris-medium)' }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : INSEE, Emplois au lieu de travail par sexe, secteur
              d'activité économique et catégorie socioprofessionnelle, 2021
            </Body>
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="travail_exterieur"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="Activités économiques"
            />
          </div>
        </div>
      </div>
    </>
  );
};
