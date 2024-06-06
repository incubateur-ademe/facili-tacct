"use client"

import { useEffect } from "react";
import { Container, Grid, GridCol } from "../../dsfr/server";
import { Box } from "../../dsfr/server";
import Image from "next/image";
import BookmarkIcon from "../../assets/icons/bookmark_icon_black.svg";
import workshops from "@/lib/utils/workshops";
import Card from "./Card";
import styles from "./ressources.module.scss";
import Head from "next/head";
import { StepperComp } from "@/components/Stepper";

const Ressources = () => {
  
  //change page title in client page
  useEffect(() => {
    document.title = "Facili-TACCT - Ressources";
  }, []);
  
  return (
    <>
    <Head>
      <meta
        name="description"
        content="Ressources"
      />
    </Head>
    <Container m="4w">
      <Box style={{backgroundColor: "white"}}>
        <GridCol lg={6} offset={1}>
          <StepperComp
            title="Ressources"
            stepCount={4}
            currentStep={4}
          />
        </GridCol>
      </Box>      <div className={styles.wrapper}>
        <div className={styles.blocWrapper}>
          <div className={styles.titles}>
            <h3>Formats d'ateliers</h3>
            <div className={styles.favoris}>
              <Image
                src={BookmarkIcon}
                alt="icône d'ajout aux favoris"
              />
              <p>Afficher vos favoris</p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            {
              workshops.map((el, i) => (
                <Card
                  key={i}
                  tag={el.tag}
                  titre={el.titre}
                  ateliers={el.ateliers}
                />
              ))
            }
          </div>
        </div>
        <div className={styles.blocWrapper}>
          <div className={styles.titles}>
            <h3>Articles utiles</h3>
            <div className={styles.favoris}>
              <Image
                src={BookmarkIcon}
                alt="icône d'ajout aux favoris"
              />
              <p>Afficher vos favoris</p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            {
              workshops.map((el, i) => (
                <Card
                  key={i}
                  tag={el.tag}
                  titre={el.titre}
                  ateliers={el.ateliers}
                  />
              ))
            }
          </div>
        </div>
      </div>
    </Container>
    </>
  );
};

export default Ressources;
