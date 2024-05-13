"use client"

import { useState } from "react";
import { Container, Grid, GridCol } from "../../dsfr/server";
import { Box } from "../../dsfr/server";
import { TileComp } from "../../components/Tile";;
import Image from "next/image";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import { usePathname, useSearchParams } from 'next/navigation';
import { SideMenuComp } from "../../components/SideMenu";
import "../../assets/scss/form.scss"

const FilterForm = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const [activeTab, setActiveTab] = useState("1");
  const [selected, setSelected] = useState([true, false, false, false]);
  const [answers1, setAnswers1] = useState();
  const [answers2, setAnswers2] = useState();
  const [answers3, setAnswers3] = useState();
  const [answers4, setAnswers4] = useState();
  const toggle = (tab: "1" | "2" | "3" | "4") => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      const index = Number(tab) - 1;
      setSelected(selected.map((val, i) => i === index ? true : false))
    }
  };

  return (
    <>
      <Container m="4w">
        <Box as="div" className="form-container">
          <SideMenuComp/>
            <Box as="div" className="form-page-container" >
              <Box as="div" className="thematique-card-wrapper">
                <GridCol md={3}>
                <TileComp
                  selected={selected[0]}
                  onClick={() => {
                    toggle("1");
                  }}>
                  Grand âge
                </TileComp>
                </GridCol>
                <GridCol md={3}>
                <TileComp
                  selected={selected[1]}
                  onClick={() => {
                    toggle("2");
                  }}>
                  Fragilité économique
                </TileComp>
                </GridCol>
                <GridCol md={3}>
                <TileComp
                  selected={selected[2]}
                  onClick={() => {
                    toggle("3");
                  }}>
                  Isolement social
                </TileComp>
                </GridCol>
                <GridCol md={3}>
                <TileComp
                  selected={selected[3]}
                  onClick={() => {
                    toggle("4");
                  }}>
                  Travail en extérieur
                </TileComp>
                </GridCol>
              </Box>
              <Box as="div">
              { activeTab === "1" ? 
                <Page1
                  answers1={answers1}
                  setAnswers1={setAnswers1}
                  setActiveTab={setActiveTab}
                />
                : activeTab === "2" ?
                <Page2
                  answers2={answers2}
                  setAnswers2={setAnswers2}
                  setActiveTab={setActiveTab}
                />
                : activeTab === "3" ?
                <Page3
                  answers3={answers3}
                  setAnswers3={setAnswers3}
                  setActiveTab={setActiveTab}
                />
                : 
                <Page4
                  answers4={answers4}
                  setAnswers4={setAnswers4}
                  setActiveTab={setActiveTab}
                />
              }
              </Box>
            </Box>
          </Box>
      </Container>
    </>
  );
};

export default FilterForm;