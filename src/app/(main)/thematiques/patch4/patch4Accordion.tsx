'use client';

import patch4Formula from '@/assets/images/patch4_formula.svg';
import { Patch4 } from '@/lib/postgres/models';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses
} from '@mui/material/AccordionSummary';
import Image from 'next/image';
import { useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import { TagPatch4 } from '../../../../components/patch4/Tag';
import styles from '../thematiques.module.scss';
import { AccordionHeader } from './accordionHeader';
import { ExplicationIndices } from './explicationIndices';
import { tagIntensite } from './explicationIntensite';
import { SubAccordionComp } from './subAccordion';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: 'white',
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderRight: 0,
    borderLeft: 0
  },
  '&::before': {
    display: 'none'
  }
}));


const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(() => ({
  backgroundColor: 'white',
  borderRadius: '0',
  alignItems: 'flex-start',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
  {
    transition: 'none',
    webkitTransition: 'none'
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    transition: 'none',
    webkitTransition: 'none'
  }
}));

export const Patch4Accordion = ({ patch4 }: { patch4: Patch4 }) => {
  const [expanded, setExpanded] = useState(false);
  const { css } = useStyles();
  return (
    <Accordion className={styles.accordion}>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        expandIcon={
          <>
            {!expanded ? (
              <div className={styles.iconNotExpanded}>
                <p>En savoir plus</p>
                <ExpandMoreIcon />
              </div>
            ) : (
              <div className={styles.iconExpanded}>
                <p>Masquer</p>
                <ExpandLessIcon />
              </div>
            )}
          </>
        }
        onClick={() => setExpanded(!expanded)}
        className={css({
          ".MuiAccordionSummary-expandIconWrapper": {
            width: '325px',
            display: 'flex',
            justifyContent: "flex-end",
            "&.Mui-expanded": {
              justifyContent: "flex-start"
            }
          },
        })}
      >
        <AccordionHeader patch4={patch4} />
      </AccordionSummary>
      <AccordionDetails>
        <h2>Pour en savoir plus :</h2>
        <p>
          À partir des données de la TRACC, un calcul d’indice d’intensité est
          effectué sur la valeur médiane de certains indicateurs de Climadiag Commune,
          aux 3 échéances 2030, 2050 et 2100.
        </p>
        <Image src={patch4Formula} alt="" height={80} />
        <p>
          Le cas échéant, les indicateurs saisonniers ont été cumulés pour en faire des indicateurs annuels.
          Lorsque plusieurs indicateurs sont disponibles pour un même aléa, le niveau d’évolution
          considéré est la valeur maximale de l’indicateur.
        </p>
        <br></br>
        <div className={styles.intensiteTagsWrapper}>
          <h3 style={{ fontSize: '1rem', margin: 0 }}>
            <b>À chaque niveau d’intensité, ses recommandations.</b>
          </h3>
          {tagIntensite.map((item, index) => (
            <SubAccordionComp
              key={index}
              titre={item.intensite}
              textHeader={item.textHeader}
              textContent={item.textContent}
            />
          ))}
          <div className={styles.tagExplication} style={{ padding: '0 1rem' }}>
            <div className="min-w-[160px]">
              <TagPatch4>Intensité modérée</TagPatch4>
            </div>
            <p>Lorsque l’évolution de long terme (2050-2100) est inférieure à la valeur sur la période 2030-2050, il n’y a pas de correctif spécifique à apporter à court terme.
            </p>
          </div>
          <div className={styles.tagExplication} style={{ padding: '0 1rem' }}>
            <div className="min-w-[160px]">
              <TagPatch4>Pas d'évolution</TagPatch4>
            </div>
            <p>En cas de stabilité ou de baisse de l’indicateur entre 2030 et 2100, l’intensité est considérée comme faible.</p>
          </div>
        </div>
        <br></br><br></br>
        <ExplicationIndices patch4={patch4} />
      </AccordionDetails>
    </Accordion>
  );
};
