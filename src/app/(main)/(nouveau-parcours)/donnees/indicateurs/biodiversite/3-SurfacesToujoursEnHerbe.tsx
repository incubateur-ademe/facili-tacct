import { MicroCircleGrid } from "@/components/charts/MicroDataviz";
import { CustomTooltipNouveauParcours } from "@/components/utils/Tooltips";
import { Body } from "@/design-system/base/Textes";
import { SurfacesAgricolesModel } from "@/lib/postgres/models";
import { multipleEpciBydepartementLibelle } from "@/lib/territoireData/multipleEpciBydepartement";
import { multipleEpciByPnrLibelle } from "@/lib/territoireData/multipleEpciByPnr";
import { SurfacesToujoursEnHerbeText } from "@/lib/tooltipTexts";
import { Round } from "@/lib/utils/reusableFunctions/round";
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
  const surfacesToujoursEnHerbe = surfacesAgricoles.map(el => el.superficie_sau_herbe);
  const pourcentageSurfacesToujoursEnHerbe = SAU.length && (surfacesToujoursEnHerbe.reduce((a, b) => a + b, 0) / SAU.reduce((a, b) => a + b, 0)) * 100;
  const territoiresPartiellementCouverts = type === 'departement'
    ? multipleEpciBydepartementLibelle.find(dept => dept.departement === code)?.liste_epci_multi_dept
    : type === 'pnr'
      ? multipleEpciByPnrLibelle.find(pnr => pnr.libelle_pnr === libelle)?.liste_epci_multi_pnr
      : undefined;

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div
          className={styles.chiffreDynamiqueWrapper}
          style={{ alignItems: 'center', paddingBottom: '2rem', gap: '3rem' }}
        >
          <MicroCircleGrid pourcentage={pourcentageSurfacesToujoursEnHerbe} arrondi={1} ariaLabel="Surface toujours en herbe" />
          <div className={styles.text}>
            {
              surfacesAgricoles.length ? (
                <>
                  {
                    type === "commune" ? (
                      <Body weight="bold" style={{ color: "var(--gris-dark)", paddingBottom: '1rem' }}>
                        Bien que cette donnée ne soit disponible qu'à l'échelle intercommunale,
                        elle reste révélatrice : avec {Round(pourcentageSurfacesToujoursEnHerbe, 1)} % de
                        surfaces toujours en herbe, votre EPCI dispose d'un indicateur clé de l'état
                        de sa biodiversité : plus cette part est élevée, plus les écosystèmes sont préservés
                      </Body>
                    ) : <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                      Avec {Round(pourcentageSurfacesToujoursEnHerbe, 1)} % de surfaces toujours en herbe, votre territoire
                      dispose d'un indicateur clé de l'état de sa biodiversité : plus cette part est élevée, plus
                      les écosystèmes sont préservés.
                    </Body>
                  }
                  {
                    territoiresPartiellementCouverts && (type === "departement" || type === "pnr") && (
                      <>
                        <Body style={{ color: "var(--gris-dark)" }}>
                          <br></br><b>À noter</b> : Ces données ne sont disponibles qu’à l’échelle
                          intercommunale. Ces {territoiresPartiellementCouverts?.length} EPCI débordent de
                          votre périmètre :
                          <ul style={{ margin: "0.5rem 0 0 1.5rem" }}>
                            {territoiresPartiellementCouverts?.map((epci, index) => (
                              <li key={index}><Body style={{ color: "var(--gris-dark)" }}>{epci}</Body></li>
                            ))}
                          </ul>
                        </Body>
                      </>
                    )
                  }
                </>
              ) : <Body weight='bold' style={{ color: "var(--gris-dark)" }}>Il n’y a pas de données référencées sur le territoire que vous avez sélectionné</Body>
            }
            <CustomTooltipNouveauParcours
              title={SurfacesToujoursEnHerbeText}
              texte="Définition"
            />
          </div>
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : AGRESTE 2020.
        </Body>
      </div>
    </>
  )
};
