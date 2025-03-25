'use client';

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
import styles from '../thematiques.module.scss';

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

const SubAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: 'white',
  border: `none`,
  '&:not(:last-child)': {
    borderRight: 0,
    borderLeft: 0
  },
  '&::before': {
    display: 'none'
  }
}));

export const SubAccordionComp = ({
  icon,
  titre,
  textHeader,
  textContent
}: {
  icon: HTMLImageElement;
  titre: string;
  textHeader: string;
  textContent: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <SubAccordion>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        expandIcon={
          <>
            {!expanded ? (
              <div
                className={styles.iconNotExpanded}
                style={{ marginTop: '0' }}
              >
                <ExpandMoreIcon />
              </div>
            ) : (
              <div
                className={styles.iconExpanded}
                style={{ marginBottom: '0' }}
              >
                <ExpandLessIcon />
              </div>
            )}
          </>
        }
        onClick={() => setExpanded(!expanded)}
      >
        <div className={styles.indiceExplication}>
          <Image src={icon} alt="" />
          <p>
            <b>{titre} : </b>
            {textHeader}
          </p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <p>{textContent}</p>
      </AccordionDetails>
    </SubAccordion>
  );
};
