"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import FragiliteEconomique from "@/components/themes/inconfort-thermique/fragilite-economique";
import { GrandAgeIsolement } from "@/components/themes/inconfort-thermique/grand-age-isolement";

import styles from "./donnees.module.scss";

interface Props {
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    graph: any;
    id: number;
    risque: string;
    titre: string;
  }>;
  // data_communes: DataCommune;
  // data_epci: DataEPCI;
}

const allComps = [
  {
    titre: "Grand âge et isolement",
    Component: (props: Props & { activeDataTab: string }) => <GrandAgeIsolement {...props} />,
  },
  {
    titre: "Fragilité économique",
    Component: (props: Props & { activeDataTab: string }) => <FragiliteEconomique {...props} />,
  },
  // {
  // 	titre: "Travail en extérieur",
  // 	Component: (props: Props & { activeDataTab: string }) => <TravailExterieur
  // 		{...props}
  // 	/>
  // },
  // {
  // 	titre: "Age du bâtiment",
  // 	Component: (props: Props & { activeDataTab: string }) => <AgeBati
  // 		{...props}
  // 	/>
  // },
  // {
  // 	titre: "Densité du bâti",
  // 	Component: (props: Props & { activeDataTab: string }) => <DensiteBati
  // 		{...props}
  // 	/>
  // },
  // {
  // 	titre: "Végétalisation",
  // 	Component: (props: Props & { activeDataTab: string }) => <Vegetalisation
  // 		{...props}
  // 	/>
  // },
];

const PageComp = ({ data }: Props) => {
  const [activeDataTab, setActiveDataTab] = useState("");
  const [selectedTabId, setSelectedTabId] = useState("Population");
  const [selectedSubTab, setSelectedSubTab] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const themeUrl = searchParams.get("thematique");
  const { isDark } = useIsDark();
  const darkClass = {
    backgroundColor: fr.colors.getHex({ isDark }).decisions.background.default.grey.active,
    "&:hover": {
      backgroundColor: fr.colors.getHex({ isDark }).decisions.background.alt.grey.hover,
    },
  };

  useEffect(() => {
    setActiveDataTab(data.filter(el => el.facteur_sensibilite === selectedTabId)[0].titre);
  }, [selectedTabId]);

  const handleForward = () => {
    router.push(`/etape3?code=${code}&thematique=${themeUrl}`);
  };

  return (
    <div className={styles.container}>
      <Tabs
        selectedTabId={selectedTabId}
        tabs={[
          { tabId: "Population", label: "Population" },
          { tabId: "Bâtiment", label: "Bâtiment" },
          { tabId: "Urbanisme", label: "Urbanisme" },
        ]}
        onTabChange={setSelectedTabId}
      >
        <div className={styles.formContainer}>
          <div className={styles.titles}>
            {data
              .filter(el => el.facteur_sensibilite === selectedTabId)
              .map((element, i) => (
                <button
                  key={i}
                  className={selectedSubTab === i ? styles.selectedButton : styles.button}
                  onClick={() => {
                    setActiveDataTab(element.titre);
                    setSelectedSubTab(i);
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
                  const Component = allComps.find(el => el.titre === activeDataTab)?.Component;
                  if (!Component) return null;
                  return (
                    <Component
                      data={data}
                      activeDataTab={activeDataTab}
                      data_communes={data_communes}
                      data_epci={data_epci}
                    />
                  );
                })()}
              </Suspense>
            </div>
            <div className={styles.bottom}>
              <Button
                priority="secondary"
                linkProps={{
                  href: `/etape2?code=${code}&thematique=${themeUrl}`,
                }}
              >
                Étape précédente
              </Button>
              <Button onClick={handleForward}>Découvrir qui et comment convaincre</Button>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default PageComp;
