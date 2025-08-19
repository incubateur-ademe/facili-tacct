import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import feuxForetIcon from '@/assets/icons/feu_foret_icon_black.svg';
import niveauxMarinsIcon from '@/assets/icons/niveau_marin_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { Patch4 } from "@/lib/postgres/models";
import Image from "next/image";
import styles from '../thematiques.module.scss';

export const ExplicationIndices = ({ patch4 }: { patch4: Patch4 }) => {
  return (
    <div className={styles.indiceWrapper}>
      <h3 style={{ fontSize: '1rem', margin: 0, lineHeight: '1.5rem' }}>
        <b>D’où vient cette donnée :</b>
      </h3>
      <p>
        Météo France propose un nouveau jeu de données basé sur la trajectoire
        de réchauffement de référence pour l'adaptation au changement climatique
        (TRACC). Ces indices représentent chacun <b>l’aggravation de l’évolution </b>
        d’un phénomène climatique précis, en 2100 par rapport à 2050.
      </p>
      <div className={styles.indiceExplication}>
        <Image src={fortesChaleursIcon} alt="" />
        <p>
          <b>Fortes chaleurs : </b>
          L’indice prend en compte la valeur de trois indicateurs : le nombre
          de jours par an à plus de 35°C, le nombre de nuits par an à plus
          de 20°C ainsi que le nombre annuel de jours en vagues de chaleur.
        </p>
      </div>
      <div className={styles.indiceExplication}>
        <Image src={precipitationIcon} alt="" />
        <p>
          <b>Fortes précipitations : </b>
          L’indice prend en compte la valeur maximale de deux indicateurs : l’évolution du
          nombre de jours par saison avec fortes précipitations, et l’évolution du
          cumul de précipitations quotidiennes remarquables.
        </p>
      </div>
      <div className={styles.indiceExplication}>
        <Image src={secheresseIcon} alt="" />
        <p>
          <b>Sécheresse des sols : </b>
          L’indice s’appuie sur l’indicateur d’évolution du nombre de jours par saison avec sol sec,
          lui-même basé sur le <i>Soil Wetness Index</i> (SWI04) représentant une humidité des sols inférieure à 0,4
          (valeur définie comme seuil critique pour l’état de la réserve en eau du sol par rapport à
          la réserve utile disponible pour l’alimentation des plantes).
        </p>
      </div>
      <div className={styles.indiceExplication}>
        <Image src={feuxForetIcon} alt="" />
        <p>
          <b>Feux de forêt : </b>
          L’indice s’appuie sur l’indicateur d’évolution du nombre annuel de jours en situation
          de risque significatif de feu de végétation. Il est basé sur l’Indice Forêt Météo (IFM)
          estimant le danger d’éclosion, de propagation et d’intensité à partir de différentes
          données météorologiques : température, humidité de l'air, vitesse du vent et précipitations.
        </p>
      </div>
      {patch4.niveaux_marins === null ? null : (
        <div className={styles.indiceExplication}>
          <Image src={niveauxMarinsIcon} alt="" />
          <p>
            <b>Montée de la mer : </b>
            L’indice s’appuie sur l’indicateur d’évolution de l’élévation du niveau moyen de la mer.
          </p>
        </div>
      )}
    </div>
  )
}
