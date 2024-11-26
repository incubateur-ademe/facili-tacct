"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


import AgricultureBiologique from "@/components/themes/biodiversite/agricultureBio";
import { StationsClassees } from "@/components/themes/biodiversite/stationsClassees";
import SurfacesProtegees from "@/components/themes/biodiversite/surfacesProtegees";
import { AgricultureBio, Biodiversite, CarteCommunes, EpciContours, SurfacesProtegeesByCol } from "@/lib/postgres/models";
import { TabTooltip } from "@/lib/utils/TabTooltip";
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
  biodiversite: Biodiversite[];
  carteCommunes: CarteCommunes[];
  agricultureBio: AgricultureBio[];
  surfacesProtegees: SurfacesProtegeesByCol[];
  epciContours: EpciContours[];
}

const allComps = [
  {
    titre: "Stations classées",
    Component: ({biodiversite, data, carteCommunes}: Props & { activeDataTab: string }) => <StationsClassees biodiversite={biodiversite} data={data} carteCommunes={carteCommunes} />,
  },
  {
    titre: "Agriculture biologique",
    Component: ({data, agricultureBio}: Props & { activeDataTab: string }) => <AgricultureBiologique data={data} agricultureBio={agricultureBio} />,
  },
  {
    titre: "Surfaces protégées",
    Component: (
      {data, surfacesProtegees, epciContours, carteCommunes}: Props & { activeDataTab: string }
    ) => <SurfacesProtegees data={data} surfacesProtegees={surfacesProtegees} carteCommunes={carteCommunes}/>,
  }
];

const BiodiversiteComp = (
  { 
    data, 
    biodiversite,
    carteCommunes, 
    agricultureBio, 
    surfacesProtegees, 
    epciContours
  }: Props) => {
  const [selectedTabId, setSelectedTabId] = useState("Agriculture biologique");
  const [selectedSubTab, setSelectedSubTab] = useState("Agriculture biologique");
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
    setSelectedSubTab(data.filter(el => el.facteur_sensibilite === selectedTabId)[0].titre);
  }, [selectedTabId, codepci]);

  return (
    <div className={styles.container}>
      <Tabs 
        selectedTabId={selectedTabId} 
        tabs={[
          {
            tabId: "",
            label: <TabTooltip 
              selectedTab={selectedTabId} 
              tooltip="L’agriculture biologique fait partie d’un ensemble de pratiques agricoles respectueuses des équilibres écologiques qui contribue à la préservation des sols et des ressources naturelles. " 
              titre="Agriculture biologique"
            /> 
          },
          // {
          //   tabId: "Surfaces protégées",
          //   label: "Surfaces protégées"
          // }
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
                    biodiversite={biodiversite}
                    activeDataTab={selectedSubTab}
                    carteCommunes={carteCommunes}
                    agricultureBio={agricultureBio}
                    surfacesProtegees={surfacesProtegees}
                    epciContours={epciContours}
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
export default BiodiversiteComp;
