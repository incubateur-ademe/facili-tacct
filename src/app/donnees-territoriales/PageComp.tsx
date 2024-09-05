"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { Vegetalisation } from "@/components/themes/inconfort-thermique/vegetalisation";

import { AgeBati } from "@/components/themes/inconfort-thermique/age-bati";
import { DensiteBati } from "@/components/themes/inconfort-thermique/densite-bati";
import { FragiliteEconomique } from "@/components/themes/inconfort-thermique/fragilite-economique";
import { GrandAgeIsolement } from "@/components/themes/inconfort-thermique/grand-age-isolement";
import { TravailExterieur } from "@/components/themes/inconfort-thermique/travail-exterieur";
import { TabTooltip } from "@/components/utils/TabTooltip";
import { CLC, CarteCommunes, InconfortThermique } from "@/lib/postgres/models";
import { useStyles } from "tss-react/dsfr";
import styles from "./donnees.module.scss";

interface Props {
  carteCommunes: CarteCommunes[];
  clc: CLC[];
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  inconfort_thermique: InconfortThermique[];
}

const allComps = [
  {
    titre: "Grand âge",
    Component: (props: Props & { activeDataTab: string }) => <GrandAgeIsolement {...props} />,
  },
  {
    titre: "Fragilité économique",
    Component: (props: Props & { activeDataTab: string }) => <FragiliteEconomique {...props} />,
  },
  {
    titre: "Travail en extérieur",
    Component: (props: Props & { activeDataTab: string }) => <TravailExterieur {...props} />,
  },
  {
    titre: "Age du bâtiment",
    Component: (props: Props & { activeDataTab: string }) => <AgeBati {...props} />,
  },
  {
    titre: "Densité du bâti",
    Component: (props: Props & { activeDataTab: string }) => <DensiteBati {...props} />,
  },
  {
    titre: "Végétalisation",
    Component: (props: Props & { activeDataTab: string }) => <Vegetalisation {...props} />,
  },
];

const PageComp = ({ data, carteCommunes, clc, inconfort_thermique }: Props) => {
  const [selectedTabId, setSelectedTabId] = useState("Population");
  const [selectedSubTab, setSelectedSubTab] = useState("Grand âge");
  const searchParams = useSearchParams();
  const { isDark } = useIsDark();
  const darkClass = {
    backgroundColor: fr.colors.getHex({ isDark }).decisions.background.default.grey.active,
    "&:hover": {
      backgroundColor: fr.colors.getHex({ isDark }).decisions.background.alt.grey.hover,
    },
  };
  const { css } = useStyles();

  useEffect(() => {
    setSelectedSubTab(data.filter(el => el.facteur_sensibilite === selectedTabId)[0].titre);
  }, [selectedTabId]);

  return (
    <div className={styles.container}>
      <Tabs 
        selectedTabId={selectedTabId} 
        tabs={[
          {
            tabId: "Population",
            label: <TabTooltip 
              selectedTab={selectedTabId} 
              tooltip="La sensibilité de la population est généralement estimée au regard de facteurs démographique, social ou culturel" 
              titre="Population"
            /> 
          },
          { 
            tabId: "Bâtiment", 
            label: "Bâtiment"
          },
          { 
            tabId: "Urbanisme",
            label: "Urbanisme"
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
          <div className={styles.titles}>
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
          </div>
          <div className={styles.bubble}>
            <div className={styles.bubbleContent} style={darkClass}>
              <Suspense>
                {(() => {
                  const Component = allComps.find(el => el.titre === selectedSubTab)?.Component;
                  if (!Component) return null;
                  return (
                    <Component
                      data={data}
                      inconfort_thermique={inconfort_thermique}
                      carteCommunes={carteCommunes}
                      activeDataTab={selectedSubTab}
                      clc={clc}
                    />
                  );
                })()}
              </Suspense>
            </div>
            {/* <div className={styles.bottom}>
              <Button
                priority="secondary"
                linkProps={{
                  href: `/etape2?code=${code}&thematique=${themeUrl}`,
                }}
              >
                Étape précédente
              </Button>
              <Button
                onClick={handleForward}
                // className={css({
                //   ".fr-btn": {
                //     backgroundColor: "#0063CB",
                //   },
                // })}
              >
                Découvrir qui et comment convaincre
              </Button>
            </div> */}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default PageComp;
