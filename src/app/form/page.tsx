"use client"

import { useState } from "react";
import { Container, Grid, GridCol } from "../../dsfr/server";
import { Button } from "@codegouvfr/react-dsfr/Button";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";

const FilterForm = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [answers1, setAnswers1] = useState();
    const [answers2, setAnswers2] = useState();
    const [answers3, setAnswers3] = useState();
    const [answers4, setAnswers4] = useState();

    const toggle = (tab: "1" | "2" | "3" | "4") => {
      if (activeTab !== tab) setActiveTab(tab);
    };

    return (
      <>
        <Container m="4w">
          <div style={{display:"flex", flexDirection:"row"}} >
            <GridCol md={3}>
              <Button
                onClick={() => {
                  toggle("1");
                }}>
                1
              </Button>
            </GridCol>
            <GridCol md={3}>
              <Button
                onClick={() => {
                  toggle("2");
                }}>
                2
              </Button>
            </GridCol>
            <GridCol md={3}>
              <Button
                onClick={() => {
                  toggle("3");
                }}>
                3
              </Button>
            </GridCol>
            <GridCol md={3}>
              <Button
                onClick={() => {
                  toggle("4");
                }}>
                4
              </Button>
            </GridCol>
          </div>
          
          <div>
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
          </div>
        </Container>
      </>
    );
  };

export default FilterForm;