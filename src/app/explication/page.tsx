"use client"

import { useState } from "react";
import { Container } from "../../dsfr/server";
import { TileComp } from "../../components/Tile";
import { Button } from "@codegouvfr/react-dsfr/Button";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import Constellation from "./d3"
import themes from "@/lib/utils/themes";
import GridIcon from "../../assets/icons/grid_icon_grey.svg";
import ConnexionIcon from "../../assets/icons/connexion_icon_black.svg";
import styles from "./explication.module.scss";


const Explication = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState([false, false, false, false, false, false, false]);
  const theme = themes.inconfort_thermique;

  const toggle = (tab: number) => {
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

  return (
    <Container m="4w">
      <h1>Inconfort thermique</h1>
        <div>
          <div className={styles.cardWrapper}>
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
          </div>
          <div className="pt-8">
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
          </div>
          <div className={styles.constellation}>
            <Constellation
              dimensions={dimensions}
            />
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
  );
};

export default Explication;
