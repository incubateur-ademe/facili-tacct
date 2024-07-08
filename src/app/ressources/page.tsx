"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import RessourceBackground from "@/assets/images/ressources.svg";
import { StepperComp } from "@/components/Stepper";

import { Box, GridCol } from "../../dsfr/server";
import styles from "./ressources.module.scss";

// export const metadata: Metadata = {
//   title: "Ressources",
//   description: "Ressources",
// };

const Ressources = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const themeUrl = searchParams.get("thematique");
  return (
    <div>
      <Box style={{ backgroundColor: "white", margin: "1em" }}>
        <GridCol lg={6} offset={1}>
          <StepperComp title="Ressources" stepCount={4} currentStep={4} />
        </GridCol>
      </Box>{" "}
      {/* <div className={styles.wrapper}>
        <div className={styles.blocWrapper}>
          <div className={styles.titles}>
            <h3>Formats d'ateliers</h3>
            <div className={styles.favoris}>
              <Image src={BookmarkIcon} alt="icône d'ajout aux favoris" />
              <p>Afficher vos favoris</p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            {workshops.map((el, i) => (
              <Card key={i} tag={el.tag} titre={el.titre} ateliers={el.ateliers} />
            ))}
          </div>
        </div>
        <div className={styles.blocWrapper}>
          <div className={styles.titles}>
            <h3>Articles utiles</h3>
            <div className={styles.favoris}>
              <Image src={BookmarkIcon} alt="icône d'ajout aux favoris" />
              <p>Afficher vos favoris</p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            {workshops.map((el, i) => (
              <Card key={i} tag={el.tag} titre={el.titre} ateliers={el.ateliers} />
            ))}
          </div>
        </div>
      </div> */}
      <Image
        src={RessourceBackground}
        alt=""
        width={0}
        height={0}
        style={{ width: "80%", height: "auto", margin: "-1em 4em 1em" }}
      />
      <div className={styles.bottom}>
        <Button
          priority="secondary"
          linkProps={{
            href: `/explication?code=${code}&thematique=${themeUrl}`,
          }}
        >
          Étape précédente
        </Button>
      </div>
    </div>
  );
};

export default Ressources;
