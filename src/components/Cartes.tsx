import { Body } from "@/design-system/base/Textes";
import Image, { StaticImageData } from "next/image";
import styles from "./Cartes.module.scss";

export const CarteHoverLink = ({
  titre,
  description,
  icone,
  lien
}: {
  titre: string;
  description: string;
  icone: StaticImageData;
  lien?: string;
}) => {

  return (
    <button className={styles.carteHoverContainer} >
      <div className={styles.contentWrapper}>
        <div className={styles.left}>
          <Image src={icone} alt="" className={styles.icon} />
          <div className={styles.title}>
            <Body style={{
              fontSize: "22px",
              color: "var(--boutons-primaire-1)",
              textAlign: "left",
              fontWeight: "bold",
              lineHeight: "28px",
            }}

            >
              {titre}
            </Body>
          </div>
          <div className={styles.description}>
            <Body size='xs' style={{ color: "#3D3D3D", lineHeight: "16px" }}>
              {description}
            </Body>
          </div>
        </div>
        <span
          className="fr-icon-arrow-right-line"
          aria-hidden="true"
          style={{ color: "var(--boutons-primaire-3)", alignSelf: "flex-end" }}>
        </span>
      </div>
    </button>
  );
}
