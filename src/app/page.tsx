"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import Image from "next/image";

import Constellation2Img from "../assets/images/constellation2.png";
import PeopleImg from "../assets/images/landing-page-group.png";
import MapImg from "../assets/images/landing-page-map.png";
import { Container, Grid } from "../dsfr/layout";
import { CollectiviteComp } from "./CollectiviteComp";
import styles from "./root.module.scss";

export default function Home() {
  const { isDark } = useIsDark();

  const darkClass = {
    backgroundColor: fr.colors.getHex({ isDark }).decisions.background.default.grey.active,
    "&:hover": {
      backgroundColor: fr.colors.getHex({ isDark }).decisions.background.alt.grey.hover,
    },
  };

  return (
    <>
      <Container size="xl">
        <div className={styles.wrapper} style={{ backgroundColor: "#0063CB" }}>
          <div className={styles.titles}>
            <h1>Vulnérable aux impacts du changement climatique ?</h1>
            <p>
              <b>Objectivez votre diagnostic</b> avec les données socio-économiques qui rendent votre territoire unique
              et <b>découvrez des arguments et ressources pour mobiliser</b> vos collègues et partenaires externes sur
              l'adaptation au changement climatique
            </p>
          </div>
        </div>
        <CollectiviteComp />
        <Grid align="center" className={styles.cardWrapper}>
          <div className={styles.card} style={darkClass}>
            <Image src={MapImg} alt="" />
            <div className={styles.cardDescription}>
              <h2>Evaluez la sensibilité de votre territoire</h2>
              <p>Déchiffrez les données socio-économiques qui rendent votre territoire unique</p>
            </div>
          </div>
          <div className={styles.card} style={darkClass}>
            <Image src={PeopleImg} alt="" />
            <div className={styles.cardDescription}>
              <h2>Facilitez les conditions du dialogue</h2>
              <p>
                Découvrez des ressources pour faciliter les conditions du dialogue avec vos élus, services techniques et
                partenaires
              </p>
            </div>
          </div>
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
            src={Constellation2Img}
            width={0}
            height={0}
            sizes="40vw"
            style={{ maxWidth: "40%", height: "auto" }}
          />
        </div>
      </Container>
      {/* <div className={styles.container}>
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
            <div className={styles.card} style={darkClass} onClick={handleClick}>
              <Image src={MarkerHandIcon as StaticImageData} alt="" />
              <h2>Déchiffrez les données socio-économiques de votre territoire</h2>
            </div>
            <div className={styles.card} style={darkClass}>
              <Image src={HandshakeIcon as StaticImageData} alt="" />
              <h2>
                Découvrez des ressources pour faciliter les conditions du dialogue avec vos élus, services techniques et
                partenaires
              </h2>
            </div>
          
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
          
        </div>
      </div> */}
      {/* <div className={styles.test}></div>
          <div className={styles.test2}></div>
          <div className={styles.test3}></div>
          <div className={styles.test4}></div>
          <div className={styles.test5}></div> */}
    </>
  );
}
