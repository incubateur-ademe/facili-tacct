"use client"

import { useState, useEffect } from "react";
import { Container, GridCol } from "../../dsfr/server";
import { usePathname, useSearchParams } from 'next/navigation';
import { StepperComp } from "@/components/Stepper";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import Head from "next/head";
import HandshakeIcon from "../../assets/icons/handshake_icon_green.svg";
import Image from "next/image";
import styles from "./etape3.module.scss";
import { color } from "d3";

const Step3 = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { css } = useStyles();

  useEffect(() => {
    document.title = "Facili-TACCT - Actions";
  }, []);
  
  return (
    <>
    <Head>
      <meta
        name="description"
        content="Actions"
      />
    </Head>
    <Container my="4w">
      <GridCol lg={6}>
        <StepperComp
          title="Qui et comment convaincre ?"
          stepCount={4}
          currentStep={3}
        />
      </GridCol>
      </Container>

      <div className={styles.body}>
        <div className={styles.wrapper}>
          <Image src={HandshakeIcon} alt=''/>
          <h1>
            Qui convaincre et avec quels arguments ?
          </h1>
          <p>
            Trop souvent, les initiatives d’adaptation n’aboutissent pas car elles sont menées “en silo” et non comme, c’est-à-dire sans vraiment convaincre et impliquer les bonnes personnes.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
			  <Button
          linkProps={{
            href: `/explication?code=${code}`
          }}
        >
          Qui et comment convaincre ?
        </Button>
			</div>
            
    </>
  );
};

export default Step3;
