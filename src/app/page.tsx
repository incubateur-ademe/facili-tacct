"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { useStyles } from "tss-react/dsfr";

import HandshakeIcon from "../assets/icons/handshake_icon_green.svg";
import MarkerHandIcon from "../assets/icons/markerHand_icon_green.svg";
import ConstellationImg from "../assets/images/constellation.png";
import { Grid, GridCol } from "../dsfr/layout";
import { CollectiviteComp } from "./CollectiviteComp";
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
            <h1>Vulnérable aux impacts du changement climatique ?</h1>
            <p>
              <b>Objectivez votre diagnostic</b> avec les données socio-économiques qui rendent votre territoire unique
              et <b>découvrez des arguments et ressources pour mobiliser</b> vos collègues et partenaires externes sur
              l'adaptation au changement climatique
            </p>
          </div>
          <CollectiviteComp />
          <Grid align="center" className={styles.cardWrapper}>
            <GridCol lg={5}>
              <div className={styles.card} style={darkClass} onClick={handleClick}>
                <Image src={MarkerHandIcon as StaticImageData} alt="" />
                <h2>Déchiffrez les données socio-économiques de votre territoire</h2>
              </div>
            </GridCol>
            <GridCol lg={5}>
              <div className={styles.card} style={darkClass}>
                <Image src={HandshakeIcon as StaticImageData} alt="" />
                <h2>
                  Découvrez des ressources pour faciliter les conditions du dialogue avec vos élus, services techniques
                  et partenaires
                </h2>
              </div>
            </GridCol>
            {/* <GridCol lg={3}>
              <div className={styles.card} style={darkClass}>
                <Image src={MeetingIcon} alt="" />
                <h2>Explorez des ressources pour mobiliser</h2>
              </div>
            </GridCol> */}
          </Grid>
          <div className={styles.constellationWrapper}>
            <div className={styles.constellationText}>
              <h3>L'adaptation n'est possible qu’en intelligence collective</h3>
              <p>
                Les initiatives d'adaptation au changement climatique réussissent lorsqu'elles sont abordées de manière{" "}
                <b>transversale et collaborative</b> en impliquant les élus et différentes expertises thématiques.
              </p>
            </div>
            <Image
              alt=""
              src={ConstellationImg}
              width={0}
              height={0}
              sizes="40vw"
              style={{ maxWidth: "40%", height: "auto" }}
            />
          </div>
          {/* <div className={styles.test}></div>
          <div className={styles.test2}></div>
          <div className={styles.test3}></div>
          <div className={styles.test4}></div>
          <div className={styles.test5}></div> */}
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
