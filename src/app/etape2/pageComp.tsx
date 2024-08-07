"use client";

import { Button } from "@codegouvfr/react-dsfr/Button";
import Image, { type StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";

import HandMarkerIcon from "../../assets/icons/markerHand_icon_green.svg";
import styles from "./etape2.module.scss";

export const Step2Comp = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const themeUrl = searchParams.get("thematique");

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <Image src={HandMarkerIcon as StaticImageData} alt="" />
          <h1>Explorez des données socio-économiques territoriales</h1>
          <p>Découvrez une sélection de données pertinentes pour chacun des enjeux liés à l’inconfort climatique.</p>
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
