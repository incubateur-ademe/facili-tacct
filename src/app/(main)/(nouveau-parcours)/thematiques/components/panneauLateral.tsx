"use client";
import { BoutonPrimaireClassic } from "@/design-system/base/Boutons";
import { H2 } from "@/design-system/base/Textes";
import useWindowDimensions from "@/hooks/windowDimensions";
import { useRouter, useSearchParams } from "next/navigation";
import { thematiquesInfo } from "../constantes/textesThematiques";
import styles from "../roue.module.scss";

const PanneauLateral = ({
  setSelectedItem,
  selectedItem
}: {
  setSelectedItem: (item: string | null) => void;
  selectedItem: string | null;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const libelle = searchParams.get('libelle');
  const typeTerritoire = searchParams.get('type');
  const thematique = thematiquesInfo[selectedItem || ''];
  const windowDimensions = useWindowDimensions();

  return (
    <>
      {
        windowDimensions.height && windowDimensions.width ?
          <div
            className={styles.panneauLateralWrapper}
            style={{
              position: selectedItem ? 'absolute' : 'fixed',
              right: selectedItem ? 'max(0rem, calc((100vw - 1200px) / 2))' : '-400px',
              top: 117 + 56 + (windowDimensions.height * 0.09),
              width: selectedItem ? '385px' : 'fit-content',  // avec 0 pour un déroulé du panneau latéral
              opacity: selectedItem ? 1 : 0,
              border: selectedItem ? '1px solid var(--gris-medium)' : 'none',
              height: selectedItem ? "fit-content" : '0',
              // boxShadow: selectedItem ? '0 2px 15px rgba(0, 0, 0, 0.08)' : 'none',
            }}
          >
            {selectedItem && (
              <div className="h-full">
                {/* En-tête du panneau */}
                <div className="relative">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className={styles.closeBtn}
                  >
                    ×
                  </button>
                  <H2
                    style={{
                      fontSize: '1.25rem',
                      lineHeight: '24px',
                      paddingBottom: '0.5rem',
                      marginBottom: '1.25rem',
                      borderBottom: '1px solid var(--gris-medium)',
                      width: '100%',
                    }}>
                    {thematique.title}
                  </H2>
                </div>
                {/* Liste des items liés */}
                {thematique ? (
                  <div className="space-y-2">
                    {thematique.description}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">
                    Aucune connexion directe identifiée pour cette thématique.
                  </p>
                )}
                <BoutonPrimaireClassic
                  text="J'explore cette thématique"
                  size="lg"
                  onClick={() => {
                    if (code) router.push(`/donnees?code=${code}&libelle=${libelle}&type=${typeTerritoire}&thematique=${thematique.link}`);
                    else router.push(`/donnees?libelle=${libelle}&type=${typeTerritoire}&thematique=${thematique.link}`);
                  }}
                />
              </div>
            )}
          </div>
          : null
      }
    </>
  )
}

export default PanneauLateral;
