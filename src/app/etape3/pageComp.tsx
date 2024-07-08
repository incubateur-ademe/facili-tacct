"use client";

import { Button } from "@codegouvfr/react-dsfr/Button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useStyles } from "tss-react/dsfr";

import HandshakeIcon from "../../assets/icons/handshake_icon_green.svg";
import styles from "./etape3.module.scss";

export const Step3Comp = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const themeUrl = searchParams.get("thematique");
  const { css } = useStyles();

  return (
    <>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <Image src={HandshakeIcon} alt="" />
          <h1>Partenaires experts</h1>
          <p>
            Identifiez les partenaires sur lesquels vous pouvez vous appuyer pour faire avancer vos initiatives
            d’enrichissement du diagnostic et de mobilisation.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <Button
          priority="secondary"
          linkProps={{
            href: `/donnees-territoriales?code=${code}&thematique=${themeUrl}`,
          }}
        >
          Étape précédente
        </Button>
        <Button
          linkProps={{
            href: `/explication?code=${code}&thematique=${themeUrl}`,
          }}
        >
          Qui et comment convaincre ?
        </Button>
      </div>
    </>
  );
};
