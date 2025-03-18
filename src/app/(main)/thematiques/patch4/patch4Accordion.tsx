'use client';

import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import feuxForetIcon from '@/assets/icons/feu_foret_icon_black.svg';
import niveauxMarinsIcon from '@/assets/icons/niveau_marin_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { Patch4 } from '@/lib/postgres/models';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Image, { StaticImageData } from 'next/image';
import { useStyles } from 'tss-react/dsfr';
import { TagPatch4 } from '../../../../components/patch4/Tag';
import styles from '../thematiques.module.scss';

const TagItem = ({
  icon,
  indice,
  tag
}: {
  icon: StaticImageData;
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

const tagIntensite = [
  'Intensité très forte',
  'Intensité forte',
  'Intensité modérée',
  'Intensité non déterminée'
];

export const Patch4Accordion = ({ patch4 }: { patch4: Patch4 }) => {
  const { css } = useStyles();
  const precipitation = AlgoPatch4(patch4, 'fortes_precipitations');
  const secheresse = AlgoPatch4(patch4, 'secheresse_sols');
  const niveauxMarins = AlgoPatch4(patch4, 'niveaux_marins');
  const feuxForet = AlgoPatch4(patch4, 'feux_foret');
  const fortesChaleurs = AlgoPatch4(patch4, 'fortes_chaleurs');

  return (
    <Accordion
      className={css({
        boxShadow: 'none',
        borderTop: '1px solid var(--border-default-grey)',
        borderBottom: '1px solid var(--border-default-grey)',
        borderRadius: '0',
        marginBottom: '2.5rem',
        '.MuiPaper-root': {
          borderRadius: '0 !important',
          backgroundColor: 'orange !important',
          '.MuiAccordion-root': {
            backgroundColor: 'red !important'
          }
        }
      })}
      disableGutters={true}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className={css({
          borderRadius: '0'
        })}
      >
        <div className={styles.accordionHeader}>
          <h2>Évolution d’intensité climatique sur votre territoire :</h2>
          <div className={styles.wrapper}>
            <div className="w-1/2 flex flex-col gap-4">
              <TagItem
                icon={precipitationIcon}
                indice="Précipitations"
                tag={precipitation}
              />
              <TagItem
                icon={secheresseIcon}
                indice="Sécheresse"
                tag={secheresse}
              />
              <TagItem
                icon={niveauxMarinsIcon}
                indice="Niveaux marins"
                tag={niveauxMarins}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <TagItem
                icon={feuxForetIcon}
                indice="Feux de foret"
                tag={feuxForet}
              />
              <TagItem
                icon={fortesChaleursIcon}
                indice="Fortes chaleurs"
                tag={fortesChaleurs}
              />
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="px-4">
          <h2
            style={{
              fontWeight: 700,
              lineHeight: '24px',
              fontSize: '18px',
              margin: '0 0 24px',
              color: '#000091'
            }}
          >
            Pour en savoir plus :
          </h2>
          <p style={{ fontSize: '14px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
          <div className={styles.indiceWrapper}>
            <div className={styles.indiceExplication}>
              <Image src={precipitationIcon} alt="" />
              <p>
                <b>Précipitations : </b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className={styles.indiceExplication}>
              <Image src={secheresseIcon} alt="" />
              <p>
                <b>Sécheresse : </b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className={styles.indiceExplication}>
              <Image src={niveauxMarinsIcon} alt="" />
              <p>
                <b>Niveaux marins : </b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className={styles.indiceExplication}>
              <Image src={feuxForetIcon} alt="" />
              <p>
                <b>Feux de foret : </b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className={styles.indiceExplication}>
              <Image src={fortesChaleursIcon} alt="" />
              <p>
                <b>Fortes chaleurs : </b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
          <div className={styles.tagWrapper}>
            <p style={{ fontSize: '14px', margin: 0 }}>
              <b>Les quatre niveaux d’intensité sont les suivants :</b>
            </p>
            {tagIntensite.map((item, index) => (
              <div key={index} className={styles.tagExplication}>
                <TagPatch4>{item}</TagPatch4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
