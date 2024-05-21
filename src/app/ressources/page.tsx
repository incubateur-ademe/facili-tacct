"use client"

import { Container, Grid, GridCol } from "../../dsfr/server";
import Image from "next/image";
import BookmarkIcon from "../../assets/icons/bookmark_icon_black.svg";
import workshops from "@/lib/utils/workshops";
import Card from "./Card";
import styles from "./ressources.module.scss";

const Ressources = () => {
  
  return (
    <Container m="4w">
      <h1>Inconfort thermique</h1>
      <div className={styles.wrapper}>
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
  );
};

export default Ressources;
