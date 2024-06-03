"use client"

import { useState, useEffect } from "react";
import { Container, GridCol } from "../../dsfr/server";
import { TileComp } from "../../components/Tile";
import { Button } from "@codegouvfr/react-dsfr/Button";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import Constellation from "./constellation";
import Explications from "./explications"
import themes from "@/lib/utils/themes";
import GridIcon from "../../assets/icons/grid_icon_grey.svg";
import ConnexionIcon from "../../assets/icons/connexion_icon_black.svg";
import styles from "./explication.module.scss";
import { StepperComp } from "@/components/Stepper";
import Head from "next/head";
import FilterState from "./filterState";

const Explication = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState<Array<boolean>>([false, false, false, false, false, false, false]);
  const theme = themes.inconfort_thermique;

  const [selectedCircle, setSelectedCircle] = useState({
    "Bâtiment": selected.at(0),
    "Tourisme": selected.at(1),
    "Santé": selected.at(2),
    "Aménagement": selected.at(3),
    "Espaces naturels": selected.at(4),
    "Gestion de l'eau": selected.at(5),
  })

  const toggle = (tab: number) => {[]
    if (activeTab !== tab) {
      setActiveTab(tab);
      setSelected(selected.map((val, i) => i === tab ? true : false))
    }
  };
  
  const dimensions = {
    width: "100dvw",
    height: 500,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  };

  useEffect(() => {
    document.title = "Facili-TACCT - Actions";
  }, []);
  
  return (
    <>
    <Head>
      <meta
        name="description"
        content="Actions à mettre en place"
      />
    </Head>
    <Container m="4w">
      <GridCol lg={6}>
        <StepperComp
          title="Arguments pour convaincre"
          stepCount={4}
          currentStep={3}
        />
      </GridCol>
      <h1>Inconfort thermique</h1>
        <div>
          {/* <div className="pt-8">
            <h3>Services à mobiliser</h3>
            <div className="flex flex-row justify-between">
              <p>Pour lutter contre l'inconfort thermique, vous devrez travailler avec les services suivants :</p>
              <div className="flex flex-row gap-x-4">
                <div className="flex flex-row gap-x-1 cursor-pointer"> 
                  <Image
                    src={GridIcon}
                    alt="icône grille display"
                  />
                  <p>Grille</p>
                </div>
                <div className="flex flex-row gap-x-1 cursor-pointer"> 
                  <Image
                    src={ConnexionIcon}
                    alt="icône de connexion"
                  />
                  <p>Connexion</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className={styles.wrapper}>
            <div className={styles.explication}>
              <div className={styles.constellation}>
                <Constellation
                  dimensions={dimensions}
                  states={selected}
                  setSelected={setSelected}
                />
              </div>
              <FilterState
                states={selected}
              />
            </div>

            {/* <Explications/> */}
            
            <div className={styles.bottom}>
						  <Button
          	    linkProps={{
                  href: '/ressources'
                }}
          	  >
          	    Voir les ressources
          	  </Button>
					  </div>
          </div>
        </div>
    </Container>
    </>
  );
};

export default Explication;
