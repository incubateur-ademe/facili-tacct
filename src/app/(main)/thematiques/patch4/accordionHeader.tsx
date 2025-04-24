import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import feuxForetIcon from '@/assets/icons/feu_foret_icon_black.svg';
import niveauxMarinsIcon from '@/assets/icons/niveau_marin_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagPatch4 } from "@/components/patch4/Tag";
import { Patch4 } from '@/lib/postgres/models';
import Image, { StaticImageData } from "next/image";
import styles from '../thematiques.module.scss';

const TagItem = ({
  icon,
  indice,
  tag
}: {
  icon: StaticImageData
  indice: string;
  tag: string;
}) => {
  return (
    <div className={styles.indiceRow}>
      <div className={styles.indiceItem}>
        <Image src={icon} alt="" />
        <p>{indice}</p>
      </div>
      <TagPatch4>{tag}</TagPatch4>
    </div>
  );
};

export const AccordionHeader = ({ patch4 }: { patch4: Patch4 }) => {
  const precipitation = AlgoPatch4(patch4, 'fortes_precipitations');
  const secheresse = AlgoPatch4(patch4, 'secheresse_sols');
  const niveauxMarins = AlgoPatch4(patch4, 'niveaux_marins');
  const feuxForet = AlgoPatch4(patch4, 'feux_foret');
  const fortesChaleurs = AlgoPatch4(patch4, 'fortes_chaleurs');
  return (
    <div className={styles.accordionHeader}>
      <div className={styles.accordionHeaderTitles}>
        <h2>Pré-identifier l'exposition future de votre territoire à l’horizon 2100</h2>
        <p>
          Météo France propose un nouveau jeu de données basé sur la trajectoire de réchauffement
          de référence pour l'adaptation au changement climatique (TRACC) disponible sur le service
          Climadiag Commune. Son objectif est de préciser l’intensité de l’évolution de plusieurs aléas
          climatiques sur votre territoire, en 2100 par rapport à 2050.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.indiceCol}>
          <TagItem
            icon={fortesChaleursIcon}
            indice="Fortes chaleurs"
            tag={fortesChaleurs}
          />
          <TagItem
            icon={secheresseIcon}
            indice="Sécheresse des sols"
            tag={secheresse}
          />
          {patch4.niveaux_marins === null ? null : (
            <TagItem
              icon={niveauxMarinsIcon}
              indice="Niveaux marins"
              tag={niveauxMarins}
            />
          )}
        </div>
        <div className={styles.indiceCol}>
          <TagItem
            icon={precipitationIcon}
            indice="Fortes précipitations"
            tag={precipitation}
          />
          <TagItem
            icon={feuxForetIcon}
            indice="Feux de forêt"
            tag={feuxForet}
          />
        </div>
      </div>
    </div>
  )
}
