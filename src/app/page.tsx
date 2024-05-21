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
import styles from "./root.module.scss";

export default function Home() {

  const { css } = useStyles();
  // const { isDark } = useIsDark();
  // const backColor = fr.colors.decisions.background.alt.redMarianne.default;

  const [select, setSelect] = useState(false);
  const handleClick = () => {
    select ? setSelect(false) : setSelect(true);
 }
  return (
    <>
      <Container m="4w">
        <Grid className={styles.wrapper}>
          <h1>L'adaptation au premier plan</h1>
          <p>
            Embarquez vos élus et partenaires sur la base de données territoriales et grâce à des méthodes de travail testées par notre équipe
          </p>
          <Grid align="center" className={styles.cardWrapper}>
            <GridCol lg={3}>
              <div className={styles.card}
                onClick={handleClick}>
                <Image
                  src={DocIcon}
                  alt="icône d'un document"
                />
                <h5>Enrichissez votre diagnostic</h5>
                <p>Explorez les thématiques et données socio-économiques les plus pertinentes pour votre territoire.</p>
              </div>
            </GridCol>
            <GridCol lg={3}>
              <div className={styles.card}>
                <Image
                  src={PeopleIcon}
                  alt="icône de 3 personnages"
                />
                <h5>Alignez les parties prenantes</h5>
                <p>Mobilisez les experts thématiques et partagez une vision des enjeux d’adaptation avec vos élus et partenaires.</p>
              </div>
            </GridCol>
            <GridCol lg={3}>
              <div className={styles.card}>
                <Image
                  src={MenuIcon}
                  alt="icône d'un menu"
                />
                <h5>Concevez ensemble un plan d'action</h5>
                <p>Imaginez des actions qui prennent en compte les impacts du changement climatique et les besoins de votre territoire.</p>
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
        
      </Container>
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
