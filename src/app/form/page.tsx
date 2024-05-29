"use client"

import { useState, useEffect } from "react";
import { Container } from "../../dsfr/server";
import { TileComp } from "../../components/Tile";;
import { usePathname, useSearchParams } from 'next/navigation';
import { SideMenuComp } from "../../components/SideMenu";
import themes from "@/lib/utils/themes";
import PageComp from "./components/PageComp";
import { StepperComp } from "@/components/Stepper";
import styles from "./form.module.scss";
import Head from "next/head";

const FilterForm = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState([true, false, false, false, false, false, false]);
  const [answers1, setAnswers1] = useState();
  const [answers2, setAnswers2] = useState();
  const [answers3, setAnswers3] = useState();
  const [answers4, setAnswers4] = useState();
  const toggle = (tab: number) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setSelected(selected.map((val, i) => i === tab ? true : false))
    }
  };

  const theme = themes.inconfort_thermique;

  useEffect(() => {
    document.title = "Facili-TACCT - Données socio-économiques";
  }, []);
  
  console.log('theme', theme)
  return (
    <>
    <Head>
      <meta
        name="description"
        content="Données socio-économiques"
      />
    </Head>
    <Container m="4w">
      <StepperComp
        title="Découverte de la donnée territoriale"
        stepCount={4}
        currentStep={2}
      />
      <h1>Inconfort thermique</h1>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          {/* <div className={styles.cardWrapper}>
          {
            theme.map((el, i) => (
              <TileComp
                key={i}
                selected={selected[el.id]}
                onClick={() => {
                  toggle(el.id);
                }}>
                {el.titre}
              </TileComp>
            ))
          }
          </div> */}
          <PageComp
            data={theme}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggle={toggle}
          />
        </div>
      </div>
    </Container>
    </>
  );
};

export default FilterForm;
