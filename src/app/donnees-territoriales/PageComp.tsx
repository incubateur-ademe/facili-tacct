"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { AgeBati } from "@/components/themes/inconfort-thermique/age-bati";
import { DensiteBati } from "@/components/themes/inconfort-thermique/densite-bati";
import { FragiliteEconomique } from "@/components/themes/inconfort-thermique/fragilite-economique";
import { GrandAgeIsolement } from "@/components/themes/inconfort-thermique/grand-age-isolement";
import { TravailExterieur } from "@/components/themes/inconfort-thermique/travail-exterieur";
import { Vegetalisation } from "@/components/themes/inconfort-thermique/vegetalisation";

import styles from "./donnees.module.scss";

interface Props {
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  db_filtered: Array<{
    type: string;
    geometry: any;
    properties:any;
  }>
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

const PageComp = ({ data, db_filtered }: Props) => {
  const [selectedTabId, setSelectedTabId] = useState("Population");
  const [selectedSubTab, setSelectedSubTab] = useState("Grand âge");
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

  const tabs = [
    { tabId: "Population", label: "Population" },
    { tabId: "Bâtiment", label: "Bâtiment" },
    { tabId: "Urbanisme", label: "Urbanisme" },
  ];

  useEffect(() => {
    setSelectedSubTab(data.filter(el => el.facteur_sensibilite === selectedTabId)[0].titre);
  }, [selectedTabId]);

  const handleForward = () => {
    router.push(`/etape3?code=${code}&thematique=${themeUrl}`);
  };

  return (
    <div className={styles.container}>
      <Tabs selectedTabId={selectedTabId} tabs={tabs} onTabChange={setSelectedTabId}>
        <div className={styles.formContainer}>
          <div className={styles.titles}>
            {selectedTabId === "Population" ? (
              <p style={{ margin: "1em 0.5em 1em" }}>
                La sensibilité de la population est généralement estimée au regard de facteurs démographique, social ou
                culturel
              </p>
            ) : (
              ""
            )}
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
                  return <Component data={data} db_filtered={db_filtered} activeDataTab={selectedSubTab} />;
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

// eslint-disable-next-line import/no-default-export
export default PageComp;
