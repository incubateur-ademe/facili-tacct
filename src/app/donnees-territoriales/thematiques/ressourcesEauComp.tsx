"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


import { PrelevementEau } from "@/components/themes/ressourcesEau/prelevementEau";
import { RessourcesEau } from "@/lib/postgres/models";
import { useStyles } from "tss-react/dsfr";
import styles from "../donnees.module.scss";

interface Props {
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  ressourcesEau: RessourcesEau[];
}

const allComps = [
  {
    titre: "Prélèvements en eau",
    Component: ({data, ressourcesEau}: Props & { activeDataTab: string }) => <PrelevementEau data={data} ressourcesEau={ressourcesEau} />,
  }
];

const RessourcesEauComp = ({ data, ressourcesEau }: Props) => {
  const [selectedTabId, setSelectedTabId] = useState("Prélèvements en eau");
  const [selectedSubTab, setSelectedSubTab] = useState("Prélèvements en eau");
  const searchParams = useSearchParams();
  const codepci = searchParams.get("codepci")!;
  const { isDark } = useIsDark();
  const darkClass = {
    backgroundColor: fr.colors.getHex({ isDark }).decisions.background.default.grey.active,
    "&:hover": {
      backgroundColor: fr.colors.getHex({ isDark }).decisions.background.alt.grey.hover,
    },
  };
  const { css } = useStyles();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, []);
  
  useEffect(() => {
    setSelectedSubTab(data.filter(el => el.facteur_sensibilite === selectedTabId)[0].titre);
  }, [selectedTabId, codepci]);

  return (
    <div className={styles.container}>
      <Tabs 
        selectedTabId={selectedTabId} 
        tabs={[
          {
            tabId: "Prélèvements en eau",
            label: "Prélèvements en eau"
          },
        ]} 
        onTabChange={setSelectedTabId} 
        className={css({
          boxShadow: "none",
          "::before": {
            boxShadow: "inset 0 1px 0 0 var(--border-default-grey), inset 1px 0 0 0 transparent, inset -1px 0 0 0 transparent",
          },
          ".fr-tabs__tab[aria-selected=true]:not(:disabled)": {
            color: "#0063CB",
            backgroundImage: "linear-gradient(0deg, #0063CB, #0063CB), linear-gradient(0deg, var(--border-default-grey), var(--border-default-grey)), linear-gradient(0deg, var(--border-default-grey), var(--border-default-grey)), linear-gradient(0deg, var(--border-default-grey), var(--border-default-grey))",
          },
          ".fr-tabs__tab": {
            margin: "0 0.25em 0 0",
          },
          ".fr-tabs__tab:not([aria-selected=true])": {
            color: "#3A3A3A",
            backgroundColor: "#F9F9FF",
            "&:hover": {
              backgroundColor: "#e9e9ff",
            },
          },
          ".fr-tabs__panel": {
            padding: "1rem 0"
          },
          ".fr-tabs__list": {
            padding: "0",
            margin: "0",
          }
        })}>
        <div className={styles.formContainer}>
          {/* <div className={styles.titles}>
            {data
              .filter(el => el.facteur_sensibilite === selectedTabId)
              .map((element, i) => (
                <button
                  key={i}
                  className={selectedSubTab === element.titre ? styles.selectedButton : styles.button}
                  onClick={() => {
                    setSelectedSubTab(element.titre);
                  }}
                >
                  {element.titre}
                </button>
              ))}
          </div> */}
          <div className={styles.bubble}>
            <div className={styles.bubbleContent} style={darkClass}>
              {(() => {
                const Component = allComps.find(el => el.titre === selectedSubTab)?.Component;
                if (!Component) return null;
                return (
                  <Component
                    data={data}
                    ressourcesEau={ressourcesEau}
                    activeDataTab={selectedSubTab}
                  />
                );
              })()}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default RessourcesEauComp;
