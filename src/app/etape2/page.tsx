"use client"

import { useState, useEffect } from "react";
import { Container, GridCol } from "../../dsfr/server";
import { Box } from "../../dsfr/server";
import { usePathname, useSearchParams } from 'next/navigation';
import { StepperComp } from "@/components/Stepper";
import { Button } from "@codegouvfr/react-dsfr/Button";
import Head from "next/head";
import HandMarkerIcon from "../../assets/icons/markerHand_icon_green.svg";
import Image from "next/image";
import styles from "./etape2.module.scss";

const Step2 = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const themeUrl = searchParams.get("thematique");
  useEffect(() => {
    document.title = "Facili-TACCT - Données socio-économiques";
  }, []);
  
  return (
    <>
    <Head>
      <meta
        name="description"
        content="Données territoriales"
      />
    </Head>
    <Container my="4w">
      <Box style={{backgroundColor: "white"}}>
        <GridCol lg={6} offset={1}>
          <StepperComp
            title="Découverte de la donnée territoriale"
            stepCount={4}
            currentStep={2}
          />
        </GridCol>
      </Box>
    </Container>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <Image src={HandMarkerIcon} alt=''/>
          <h1>
            Quelles données utiliser pour convaincre ?
          </h1>
          <p>Pour en finir avec les diagnostics standardisés ou hors-sol, mettez en valeur les caractéristiques socio-économiques qui rendent votre territoire unique.</p>
        </div>
      </div>
      <div className={styles.bottom}>
			  <Button
          linkProps={{
            href: `/donnees-territoriales?code=${code}&thematique=${themeUrl}`
          }}
        >
          Explorer les données territoriales
        </Button>
			</div>
            
    </>
  );
};

export default Step2;