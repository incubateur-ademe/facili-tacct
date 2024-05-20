"use client"

import { useState } from "react";
import { Container, Grid, GridCol } from "../../dsfr/server";
import { Box } from "../../dsfr/server";
import { TileComp } from "../../components/Tile";;
import { usePathname, useSearchParams } from 'next/navigation';
import { SideMenuComp } from "../../components/SideMenu";
import themes from "@/lib/utils/themes";
import PageComp from "./components/PageComp";
import "../../assets/scss/form.scss";

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

  console.log('theme', theme)
  
  return (
    <>
      <Container m="4w">
        <Box as="div" className="form-container">
          <SideMenuComp/>
            <Box as="div" className="form-page-container">
              <Box as="div" className="thematique-card-wrapper">
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
              </Box>
              <PageComp
                data={theme[activeTab]}
              />
            </Box>
          </Box>
      </Container>
    </>
  );
};

export default FilterForm;
