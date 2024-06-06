"use client"

import { useState, useEffect } from "react";
import { Container, GridCol } from "../../dsfr/server";
import { Box } from "../../dsfr/server";
import { usePathname, useSearchParams } from 'next/navigation';
import { StepperComp } from "@/components/Stepper";
import { Button } from "@codegouvfr/react-dsfr/Button";
import Head from "next/head";
import thematiques from "@/lib/utils/thematiques";
import styles from "./thematiques.module.scss";
import Image from "next/image";

const Thematiques = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [selectedCard, setSelectedCard] = useState<number>()

  useEffect(() => {
    document.title = "Facili-TACCT - Thématiques";
  }, []);

  return (
    <>
    <Head>
      <meta
        name="description"
        content="Thématiques"
      />
    </Head>
    <Container m="0" p="0">
      <Box style={{backgroundColor: "white", margin: "1em 0"}}>
        <GridCol lg={6} offset={1}>
          <StepperComp
            title="Sélection d'une thématique"
            stepCount={4}
            currentStep={1}
          />
        </GridCol>
      </Box>
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
    </Container>
            
    </>
  );
};

export default Thematiques;
