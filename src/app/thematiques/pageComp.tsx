"use client"

import { useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Button } from "@codegouvfr/react-dsfr/Button";
import thematiques from "@/lib/utils/thematiques";
import styles from "./thematiques.module.scss";
import Image from "next/image";

const ThematiquesComp = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [selectedCard, setSelectedCard] = useState<number>()

  return (
    <div>
      <div className={styles.title}>
        <h1>Par <span>quelle thématique</span> souhaitez-vous commencer ?</h1>
        <p>Il vous sera possible d'approfondir d'autres thématiques plus tard</p>
      </div>
      <div className={styles.cardContainer}>
        <h4> Cadre de vie</h4>
        <div className={styles.cardWrapper}>
          {
            Object.entries(thematiques).map((el, i) => (
              <div 
                className={selectedCard === i ? styles.selectedCard : styles.unselectedCard} 
                key={i}
                onClick={() => setSelectedCard(el[1].id)}
              >
                <Image alt="" src={el[1].icon}/>
                <h6>{el[0]}</h6>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.bottom}>
        { selectedCard === 4 ? (
          <Button 
            linkProps={{
              href: `/etape2?code=${code}&thematique=${"inconfort_thermique"}`
            }}
          >
            Explorer cette thématique
          </Button>
          )
          : 
          (
            <Button disabled >
              Explorer cette thématique
            </Button>
          )
        }
			  
			</div>
    </div>
  );
};

export default ThematiquesComp;
