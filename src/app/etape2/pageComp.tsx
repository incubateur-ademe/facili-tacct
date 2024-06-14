"use client";

import { Button } from "@codegouvfr/react-dsfr/Button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import HandMarkerIcon from "../../assets/icons/markerHand_icon_green.svg";
import styles from "./etape2.module.scss";

const Step2Comp = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const themeUrl = searchParams.get("thematique");

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <Image src={HandMarkerIcon} alt="" />
          <h1>Quelles données utiliser pour convaincre ?</h1>
          <p>
            Pour en finir avec les diagnostics standardisés ou hors-sol, mettez en valeur les caractéristiques
            socio-économiques qui rendent votre territoire unique.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <Button
          priority="secondary"
          linkProps={{
            href: `/thematiques?code=${code}`,
          }}
        >
          Étape précédente
        </Button>
        <Button
          linkProps={{
            href: `/donnees-territoriales?code=${code}&thematique=${themeUrl}`,
          }}
        >
          Explorer les données territoriales
        </Button>
      </div>
    </div>
  );
};

export default Step2Comp;
