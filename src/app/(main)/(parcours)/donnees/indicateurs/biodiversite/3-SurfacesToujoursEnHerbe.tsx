import { MicroCircleGrid } from "@/components/charts/MicroDataviz";
import { ExportButtonNouveauParcours } from "@/components/exports/ExportButton";
import { CustomTooltipNouveauParcours } from "@/components/utils/Tooltips";
import { Body } from "@/design-system/base/Textes";
import { SurfacesAgricolesModel } from "@/lib/postgres/models";
import { multipleEpciBydepartementLibelle } from "@/lib/territoireData/multipleEpciBydepartement";
import { multipleEpciByPnrLibelle } from "@/lib/territoireData/multipleEpciByPnr";
import { SurfacesEnHerbeDynamicText } from "@/lib/textesIndicateurs/biodiversiteDynamicTexts";
import { SurfacesToujoursEnHerbeText } from "@/lib/tooltipTexts";
import { IndicatorExportTransformations } from "@/lib/utils/export/environmentalDataExport";
import { useSearchParams } from "next/navigation";
import styles from '../../explorerDonnees.module.scss';

export const SurfacesToujoursEnHerbe = ({
  surfacesAgricoles
}: {
  surfacesAgricoles: SurfacesAgricolesModel[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const SAU = surfacesAgricoles.map(el => el.superficie_sau);
  const surfacesToujoursEnHerbe = surfacesAgricoles.map(el =>
    el.superficie_sau_herbe_prairies_productives +
    el.superficie_sau_herbe_prairies_peu_productives +
    el.superficie_sau_herbe_subventions +
    el.superficie_sau_herbe_bois_patures
  );
  const pourcentageSurfacesToujoursEnHerbe = SAU.length && (surfacesToujoursEnHerbe.reduce((a, b) => a + b, 0) / SAU.reduce((a, b) => a + b, 0)) * 100;
  const territoiresPartiellementCouverts = type === 'departement'
    ? multipleEpciBydepartementLibelle.find(dept => dept.departement === code)?.liste_epci_multi_dept
    : type === 'pnr'
      ? multipleEpciByPnrLibelle.find(pnr => pnr.libelle_pnr === libelle)?.liste_epci_multi_pnr
      : undefined;
  const exportData = IndicatorExportTransformations.agriculture.surfacesAgricoles(surfacesAgricoles);

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div
          className={styles.chiffreDynamiqueWrapper}
          style={{ alignItems: 'center', paddingBottom: '2rem', gap: '3rem' }}
        >
          <MicroCircleGrid pourcentage={pourcentageSurfacesToujoursEnHerbe} arrondi={1} ariaLabel="Surface toujours en herbe" />
          <div className={styles.text}>
            <SurfacesEnHerbeDynamicText
              surfacesAgricoles={surfacesAgricoles}
              pourcentageSurfacesToujoursEnHerbe={pourcentageSurfacesToujoursEnHerbe}
              type={type}
              territoiresPartiellementCouverts={territoiresPartiellementCouverts}
            />
            <CustomTooltipNouveauParcours
              title={SurfacesToujoursEnHerbeText}
              texte="Définition"
            />
          </div>
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : AGRESTE, 2020.
        </Body>
        <ExportButtonNouveauParcours
          data={exportData}
          baseName="surfaces_toujours_en_herbe"
          type={type}
          libelle={libelle}
          code={code}
          sheetName="Surfaces agricoles"
          anchor="Surfaces toujours en herbe"
        />
      </div>
    </>
  )
};
