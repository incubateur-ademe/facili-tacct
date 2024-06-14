"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import Image from "next/image";
import { useState } from "react";
import { useStyles } from "tss-react/dsfr";

import HandshakeIcon from "../assets/icons/handshake_icon_green.svg";
import MarkerHandIcon from "../assets/icons/markerHand_icon_green.svg";
import MeetingIcon from "../assets/icons/meeting_icon_green.svg";
import ConstellationImg from "../assets/images/landingpageConstellation.svg";
import { Grid, GridCol } from "../dsfr/layout";
import CollectiviteComp from "./CollectiviteComp";
import styles from "./root.module.scss";

export default function Home() {
  const { css } = useStyles();
  const { isDark } = useIsDark();

  const [select, setSelect] = useState(false);
  const handleClick = () => {
    select ? setSelect(false) : setSelect(true);
  };

  const darkClass = {
    backgroundColor: fr.colors.getHex({ isDark }).decisions.background.default.grey.active,
    "&:hover": {
      backgroundColor: fr.colors.getHex({ isDark }).decisions.background.alt.grey.hover,
    },
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titles}>
            <h1>
              Votre <span>aide au diagnostic</span>
            </h1>
            <p>
              <b>Mettez en avant les données qui rendent votre territoire unique</b> et découvrez des arguments et
              ressources pour mobiliser votre collectivité sur l'adaptation au changement climatique.
            </p>
          </div>
          <CollectiviteComp />
          <Grid align="center" className={styles.cardWrapper}>
            <GridCol lg={3}>
              <div className={styles.card} style={darkClass} onClick={handleClick}>
                <Image src={MarkerHandIcon} alt="" />
                <h2>Découvrez vos données territoriales utiles</h2>
                <p>Mettez en valeur les caractéristiques socio-économiques de votre territoire.</p>
              </div>
            </GridCol>
            <GridCol lg={3}>
              <div className={styles.card} style={darkClass}>
                <Image src={HandshakeIcon} alt="" />
                <h2>Identifiez qui et comment convaincre</h2>
                <p>Sachez qui embarquer et quels arguments utiliser pour avancer ensemble.</p>
              </div>
            </GridCol>
            <GridCol lg={3}>
              <div className={styles.card} style={darkClass}>
                <Image src={MeetingIcon} alt="" />
                <h2>Explorez des ressources testées pour mobiliser</h2>
                <p>
                  Animez des ateliers de co-construction avec vos élus, services techniques et acteurs du territoire.
                </p>
              </div>
            </GridCol>
          </Grid>
          <div className={styles.constellationWrapper}>
            <div className={styles.constellationText}>
              <h3>L'adaptation n'est possible qu'en co-intelligence</h3>
              <p>
                <b>
                  Les initiatives d'adaptation au changement climatique n'aboutissement pas lorsqu'elles sont menées "en
                  silo".{" "}
                </b>
                Découvrez comment créer des liens utiles avec les différents services et partenaires.
              </p>
            </div>
            <Image alt="" src={ConstellationImg} width={650} />
          </div>
        </div>
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
