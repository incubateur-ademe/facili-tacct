"use client";
import Badge from "@codegouvfr/react-dsfr/Badge";
import { Card } from "@codegouvfr/react-dsfr/Card";

import { CardComp } from "./card";
import styles from "./thematiques.module.scss";

export const Cards = () => {
  return (
    <div className={styles.cardWrapper}>
      <CardComp
        imageUrl="./inconfortThermiqueIcon.svg"
        thematique="inconfortThermique"
        badgeSeverity="success"
        badge="Disponible"
        title="Inconfort thermique"
      />
      <div
        style={{
          width: 360,
        }}
      >
        <Card
          background
          border
          shadow={true}
          imageAlt=""
          imageUrl="./amenagementIcon.svg"
          classes={{
            imgTag: "fr-ratio-32x9",
          }}
          size="medium"
          title="Aménagement"
          titleAs="h2"
          end={
            <ul className="fr-badges-group">
              <li>
                <Badge noIcon severity="new">
                  Bientôt disponible
                </Badge>
              </li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          width: 360,
        }}
      >
        <Card
          background
          border
          shadow={true}
          imageAlt=""
          imageUrl="./biodiversiteIcon.svg"
          classes={{
            imgTag: "fr-ratio-32x9",
          }}
          size="medium"
          title="Biodiversité"
          titleAs="h2"
          end={
            <ul className="fr-badges-group">
              <li>
                <Badge noIcon severity="new">
                  Bientôt disponible
                </Badge>
              </li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          width: 360,
        }}
      >
        <Card
          background
          border
          shadow={true}
          imageAlt=""
          imageUrl="./eauIcon.svg"
          classes={{
            imgTag: "fr-ratio-32x9",
          }}
          size="medium"
          title="Ressources en eau"
          titleAs="h2"
          end={
            <ul className="fr-badges-group">
              <li>
                <Badge noIcon severity="new">
                  Bientôt disponible
                </Badge>
              </li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          width: 360,
        }}
      >
        <Card
          background
          border
          shadow={true}
          imageAlt=""
          imageUrl="./espacesNaturelsIcon.svg"
          classes={{
            imgTag: "fr-ratio-32x9",
          }}
          size="medium"
          title="Espaces naturels"
          titleAs="h2"
          end={
            <ul className="fr-badges-group">
              <li>
                <Badge noIcon severity="new">
                  Bientôt disponible
                </Badge>
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
};
