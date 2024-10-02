"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


import { Loader } from "@/components/loader";
import { AgeBati } from "@/components/themes/inconfort-thermique/age-bati";
import { DensiteBati } from "@/components/themes/inconfort-thermique/densite-bati";
import { FragiliteEconomique } from "@/components/themes/inconfort-thermique/fragilite-economique";
import { GrandAgeIsolement } from "@/components/themes/inconfort-thermique/grand-age-isolement";
import LCZ from "@/components/themes/inconfort-thermique/lcz";
import { TravailExterieur } from "@/components/themes/inconfort-thermique/travail-exterieur";
import { CarteCommunes, CLC, InconfortThermique } from "@/lib/postgres/models";
import { GetClcEpci } from "@/lib/queries/cartographie";
import { TabTooltip } from "@/utils/TabTooltip";
import dynamic from "next/dynamic";
import { useStyles } from "tss-react/dsfr";
import styles from "./donnees.module.scss";

interface Props {
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  carteCommunes: CarteCommunes[];
  inconfort_thermique: InconfortThermique[];
}

interface VegetalisationProps {
  clc: CLC[];
}

const DynamicVegetalisation = dynamic(() => import("../../components/themes/inconfort-thermique/vegetalisation"), {
  ssr: false,
  loading: () => <Loader />,
});

const allComps = [
  {
    titre: "Grand âge",
    Component: ({inconfort_thermique, data}: Props & { activeDataTab: string }) => <GrandAgeIsolement inconfort_thermique={inconfort_thermique} data={data} />,
  },
  {
    titre: "Fragilité économique",
    Component: ({carteCommunes}: Props & { activeDataTab: string }) => <FragiliteEconomique carteCommunes={carteCommunes} />,
  },
  {
    titre: "Travail en extérieur",
    Component: ({inconfort_thermique}: Props & { activeDataTab: string }) => <TravailExterieur inconfort_thermique={inconfort_thermique} />,
  },
  {
    titre: "Age du bâtiment",
    Component: ({inconfort_thermique}: Props & { activeDataTab: string }) => <AgeBati inconfort_thermique={inconfort_thermique} />,
  },
  {
    titre: "Densité du bâti",
    Component: ({carteCommunes}: Props & { activeDataTab: string }) => <DensiteBati carteCommunes={carteCommunes} />,
  },
  {
    titre: "LCZ",
    Component: ({carteCommunes}: Props & { activeDataTab: string }) => <LCZ carteCommunes={carteCommunes} />,
  },
  {
    titre: "Végétalisation",
    Component: ({clc, inconfort_thermique}: Props & VegetalisationProps & { activeDataTab: string }) => <DynamicVegetalisation inconfort_thermique={inconfort_thermique} clc={clc} />,
  },
];

const PageComp = ({ data, carteCommunes, inconfort_thermique }: Props) => {
  const [clc, setClc] = useState<CLC[]>();
  const [selectedTabId, setSelectedTabId] = useState("Population");
  const [selectedSubTab, setSelectedSubTab] = useState("Grand âge");
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
    void (async () => {
      const temp = await GetClcEpci(codepci); 
      temp && codepci ? setClc(temp) : void 0;
    })();
  }, [selectedTabId, codepci]);

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
              {(() => {
                const Component = allComps.find(el => el.titre === selectedSubTab)?.Component;
                if (!Component) return null;
                return (
                  <Component
                    data={data}
                    inconfort_thermique={inconfort_thermique}
                    carteCommunes={carteCommunes}
                    activeDataTab={selectedSubTab}
                    clc={clc || []}
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
export default PageComp;
