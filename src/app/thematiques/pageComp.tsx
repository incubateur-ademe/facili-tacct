"use client";

import { Button } from "@codegouvfr/react-dsfr/Button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import thematiques from "@/lib/utils/thematiques";

import styles from "./thematiques.module.scss";

const ThematiquesComp = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [selectedCard, setSelectedCard] = useState<number>();
  console.log('sdsqd', Object.entries(thematiques))
  return (
    <div>
      <div className={styles.title}>
        <h1>
          Par <span>quelle thématique</span> souhaitez-vous commencer ?
        </h1>
        <p>Il vous sera possible d'approfondir d'autres thématiques plus tard</p>
      </div>
      <div className={styles.cardContainer}>
        <h4>Cadre de vie</h4>
        <div className={styles.cardWrapper}>
          {Object.entries(thematiques).map((el, i) => (
            el[1].category === "Cadre de vie" ?
            <div
              className={selectedCard === i ? styles.selectedCard : styles.unselectedCard}
              key={i}
              onClick={() => setSelectedCard(el[1].id)}
            >
              <Image alt="" src={el[1].icon} />
              <h6>{el[0]}</h6>
            </div>
            : ""
          ))}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <h4>Ressources économiques locales</h4>
        <div className={styles.cardWrapper}>
          {Object.entries(thematiques).map((el, i) => (
            el[1].category === "Ressources économiques locales" ?
            <div
              className={selectedCard === i ? styles.selectedCard : styles.unselectedCard}
              key={i}
              onClick={() => setSelectedCard(el[1].id)}
            >
              <Image alt="" src={el[1].icon} />
              <h6>{el[0]}</h6>
            </div>
            : ""
          ))}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <h4>Ressources naturelles</h4>
        <div className={styles.cardWrapper}>
          {Object.entries(thematiques).map((el, i) => (
            el[1].category === "Ressources naturelles" ?
            <div
              className={selectedCard === i ? styles.selectedCard : styles.unselectedCard}
              key={i}
              onClick={() => setSelectedCard(el[1].id)}
            >
              <Image alt="" src={el[1].icon} />
              <h6>{el[0]}</h6>
            </div>
            : ""
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        {selectedCard === 4 ? (
          <Button
            linkProps={{
              href: `/etape2?code=${code}&thematique=${"inconfort_thermique"}`,
            }}
          >
            Explorer cette thématique
          </Button>
        ) : (
          <Button disabled>Explorer cette thématique</Button>
        )}
      </div>
    </div>
  );
};

export default ThematiquesComp;