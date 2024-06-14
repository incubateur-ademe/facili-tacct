"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";

import styles from "./ressources.module.scss";

interface description {
  description: string;
}

interface Props {
  ateliers: description[];
  tag: string;
  titre: string;
}

const Card = ({ tag, titre, ateliers }: Props) => {
  const { isDark } = useIsDark();
  const darkClass = {
    backgroundColor: fr.colors.getHex({ isDark }).decisions.background.default.grey.active,
    "&:hover": {
      backgroundColor: fr.colors.getHex({ isDark }).decisions.background.alt.grey.hover,
    },
  };
  return (
    <div className={styles.card} style={darkClass}>
      <p>{tag}</p>
      <h5>{titre}</h5>
      {ateliers.map((el, i) => (
        <div className={styles.subcard} key={i}>
          <p>
            <b>Atelier {i + 1}</b>
          </p>
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
