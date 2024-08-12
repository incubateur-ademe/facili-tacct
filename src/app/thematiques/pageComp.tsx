"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { thematiques } from "@/lib/utils/thematiques";

import styles from "./thematiques.module.scss";

export const ThematiquesComp = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<number>();

  const handleClick = (cardId: number) => {
    if (cardId === 4) {
      router.push(`/etape2?code=${code}&thematique=${"inconfort_thermique"}`);
    }
  };

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
          {Object.entries(thematiques).map((el, i) =>
            el[1].category === "Cadre de vie" ? (
              <div
                className={selectedCard === i ? styles.selectedCard : styles.unselectedCard}
                key={i}
                onClick={() => handleClick(el[1].id)}
              >
                <Image alt="" src={el[1].icon} />
                <h6>{el[0]}</h6>
              </div>
            ) : (
              ""
            ),
          )}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <h4>Ressources économiques locales</h4>
        <div className={styles.cardWrapper}>
          {Object.entries(thematiques).map((el, i) =>
            el[1].category === "Ressources économiques locales" ? (
              <div
                className={selectedCard === i ? styles.selectedCard : styles.unselectedCard}
                key={i}
                onClick={() => handleClick(el[1].id)}
              >
                <Image alt="" src={el[1].icon} />
                <h6>{el[0]}</h6>
              </div>
            ) : (
              ""
            ),
          )}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <h4>Ressources naturelles</h4>
        <div className={styles.cardWrapper}>
          {Object.entries(thematiques).map((el, i) =>
            el[1].category === "Ressources naturelles" ? (
              <div
                className={selectedCard === i ? styles.selectedCard : styles.unselectedCard}
                key={i}
                onClick={() => handleClick(el[1].id)}
              >
                <Image alt="" src={el[1].icon} />
                <h6>{el[0]}</h6>
              </div>
            ) : (
              ""
            ),
          )}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <h4>Compétences</h4>
        <div className={styles.cardWrapper}>
          {Object.entries(thematiques).map((el, i) =>
            el[1].category === "Compétences" ? (
              <div
                className={selectedCard === i ? styles.selectedCard : styles.unselectedCard}
                key={i}
                onClick={() => handleClick(el[1].id)}
              >
                <Image alt="" src={el[1].icon} />
                <h6>{el[0]}</h6>
              </div>
            ) : (
              ""
            ),
          )}
        </div>
      </div>
    </div>
  );
};
