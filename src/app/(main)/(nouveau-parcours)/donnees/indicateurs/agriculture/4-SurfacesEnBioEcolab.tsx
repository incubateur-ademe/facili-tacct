"use client";
import { ReadMoreFade } from "@/components/utils/ReadMoreFade";
import { CustomTooltipNouveauParcours } from "@/components/utils/Tooltips";
import { Body } from "@/design-system/base/Textes";
import { SurfacesBiocolabApi } from "@/lib/postgres/EcolabApi";
import { SurfacesEnBioAgricultureText } from "@/lib/staticTexts";
import { multipleEpciBydepartementLibelle } from "@/lib/territoireData/multipleEpciBydepartement";
import { multipleEpciByPnrLibelle } from "@/lib/territoireData/multipleEpciByPnr";
import { agricultureBioTooltipText } from "@/lib/tooltipTexts";
import { Round } from "@/lib/utils/reusableFunctions/round";
import { useSearchParams } from "next/navigation";
import styles from '../../explorerDonnees.module.scss';

export const SurfacesEnBioEcolab = (props: {
  surfacesBioEcolab: SurfacesBiocolabApi[];
}) => {
  const { surfacesBioEcolab } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const territoiresPartiellementCouverts = type === 'departement'
    ? multipleEpciBydepartementLibelle.find(dept => dept.departement === code)?.liste_epci_multi_dept
    : type === 'pnr'
      ? multipleEpciByPnrLibelle.find(pnr => pnr.libelle_pnr === libelle)?.liste_epci_multi_pnr
      : undefined;
  const sommeExploitations = surfacesBioEcolab.reduce((acc, curr) => acc + (Number(curr["surface_bio_epci.id_606"] || 0)), 0) / 100;
  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            {/* <MicroCircleGrid pourcentage={pourcentageTotal} arrondi={1} ariaLabel="Surface certifiée bio ou en conversion" /> */}
            {surfacesBioEcolab.length ?
              <>
                {
                  (type === "departement" || type === "pnr" || type === "epci" || type === "petr") ? (
                    <>
                      <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                        Sur votre territoire, ???? exploitations sont en
                        agriculture biologique ou en conversion ({Round(sommeExploitations, 0)} hectares).
                      </Body>
                      {
                        territoiresPartiellementCouverts && (
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
                  ) : (type === "commune") ? (
                    <>
                      <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                        Ces données ne sont disponibles qu’à l’échelle des EPCI. Autour de chez
                        vous, ??? exploitations sont
                        en agriculture biologique ou en conversion ({Round(sommeExploitations, 0)} hectares).
                      </Body>
                    </>
                  ) : null
                }
              </>
              : ""
            }
            <CustomTooltipNouveauParcours title={agricultureBioTooltipText} texte="D'où vient ce chiffre ?" />
          </div>
          <ReadMoreFade maxHeight={territoiresPartiellementCouverts?.length ? 400 / territoiresPartiellementCouverts?.length : 350}>
            <SurfacesEnBioAgricultureText />
          </ReadMoreFade>
        </div>
        <div className={styles.datavizWrapper} style={{ borderRadius: "1rem 0 0 1rem", height: "fit-content" }}>
          DATAVIZ
        </div>
      </div>
    </>
  );
};
