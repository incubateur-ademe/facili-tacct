// "use client"

// import { useState, useEffect } from "react";
// import { Box } from "../../dsfr/server";
import { Container, GridCol, Grid } from "../../dsfr/server";
// import { usePathname, useSearchParams } from 'next/navigation';
// import themes from "@/lib/utils/themes";
// import PageComp from "./components/PageComp";
// import { StepperComp } from "@/components/Stepper";
// import styles from "./donnees.module.scss";
// import Head from "next/head";
// import { Tabs } from "@codegouvfr/react-dsfr/Tabs";

const FilterForm = () => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const code = searchParams.get("code");

//   const [activeTab, setActiveTab] = useState(0);
//   const [selected, setSelected] = useState([true, false, false, false, false, false, false]);
//   const [answers1, setAnswers1] = useState();
//   const [answers2, setAnswers2] = useState();
//   const [answers3, setAnswers3] = useState();
//   const [answers4, setAnswers4] = useState();
//   // const toggle = (tab: number) => {
//   //   if (activeTab !== tab) {
//   //     setActiveTab(tab);
//   //     setSelected(selected.map((val, i) => i === tab ? true : false))
//   //   }
//   // };

//   const theme = themes.inconfort_thermique;
//   const [selectedTabId, setSelectedTabId] = useState("Population");

//   useEffect(() => {
//     document.title = "Facili-TACCT - Données territoriales";
//   }, []);
  
//   //console.log('theme', theme)
  return (
    <>
    {/* <Head>
      <meta
        name="description"
        content="Données territoriales"
      />
    </Head> */}
    <Container py="4w">
      {/* <Box style={{backgroundColor: "white"}}>
        <GridCol lg={6} offset={1}>
          <StepperComp
            title="Découverte de la donnée territoriale"
            stepCount={4}
            currentStep={2}
          />
        </GridCol>
      </Box>
      <div className={styles.container}>
        <Tabs
          selectedTabId={selectedTabId}
          tabs={[
            { tabId: "Population", label: "Population"},
            { tabId: "Bâtiment", label: "Bâtiment"},
            { tabId: "Urbanisme", label: "Urbanisme"},
          ]}
          onTabChange={setSelectedTabId}
          >
          <div className={styles.formContainer}>
            <PageComp
              data={theme}
              activeTab={selectedTabId}
              setActiveTab={setSelectedTabId}
              // toggle={toggle}
            />
          </div>
        </Tabs>
      </div> */}
    </Container>
    </>
  );
};

export default FilterForm;
