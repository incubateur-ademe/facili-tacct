"use client";

import { useState } from "react";
import Image from 'next/image'
import { Button } from "@codegouvfr/react-dsfr/Button";
import { fr } from "@codegouvfr/react-dsfr"
import { useStyles } from "tss-react/dsfr"
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark"
import { Container, GridCol, Grid } from "../dsfr/layout";
import DocIcon from "../assets/icons/doc_icon_lightgrey.svg";
import MenuIcon from "../assets/icons/menu_icon_lightgrey.svg";
import PeopleIcon from "../assets/icons/people_icon_lightgrey.svg";
import MarkerHandIcon from "../assets/icons/markerHand_icon_green.svg";
import HandshakeIcon from "../assets/icons/handshake_icon_green.svg";
import MeetingIcon from "../assets/icons/meeting_icon_green.svg";
import styles from "./root.module.scss";

export default function Home() {

  const { css } = useStyles();
  const { isDark } = useIsDark();

  const [select, setSelect] = useState(false);
  const handleClick = () => {
    select ? setSelect(false) : setSelect(true);
 }

 const darkClass = {
  backgroundColor: fr.colors.getHex({isDark}).decisions.background.default.grey.active,
  "&:hover": {
    backgroundColor: fr.colors.getHex({isDark}).decisions.background.alt.grey.hover
  },
}
  return (
    <>
      <div className={styles.container}>
        <Grid className={styles.wrapper}>
          <h1>L'adaptation au premier plan</h1>
          <p>
            Embarquez vos élus et partenaires sur la base de données territoriales et grâce à des méthodes de travail testées par notre équipe
          </p>
          <Grid align="center" className={styles.cardWrapper} >
            <GridCol lg={3} >
              <div className={styles.card} style={darkClass}
                onClick={handleClick}>
                <Image
                  src={MarkerHandIcon}
                  alt=""
                />
                <h2>Découvrez vos données territoriales utiles</h2>
                <p>Mettez en valeur les caractéristiques socio-économiques de votre territoire.</p>
              </div>
            </GridCol>
            <GridCol lg={3}>
              <div className={styles.card} style={darkClass}>
                <Image
                  src={HandshakeIcon}
                  alt=""
                />
                <h2>Identifiez qui et comment convaincre</h2>
                <p>Sachez qui embarquer et quels arguments utiliser pour avancer ensemble.</p>
              </div>
            </GridCol>
            <GridCol lg={3}>
              <div className={styles.card} style={darkClass}> 
                <Image
                  src={MeetingIcon}
                  alt=""
                />
                <h2>Explorez des ressources testées pour mobiliser</h2>
                <p>Animez des ateliers de co-construction avec vos élus, services techniques et acteurs du territoire.</p>
              </div>
            </GridCol>
          </Grid>
          <Button
            linkProps={{
              href: '/collectivite'
            }}
          >
            C'est parti
          </Button>
        </Grid>
        
      </div>
      {/* <Button
        linkProps={{
          href: '/diagnostic'
        }}
        className={css({
          backgroundColor: fr.colors.getHex({isDark}).decisions.background.alt.redMarianne.default,
          "&:hover": {
            backgroundColor: fr.colors.getHex({isDark}).decisions.background.alt.redMarianne.hover
          },
          padding: "2em", 
          margin: "2em",
        })}
      >
        Commencer ma démarche
      </Button>   */}
    </>
  );
}
