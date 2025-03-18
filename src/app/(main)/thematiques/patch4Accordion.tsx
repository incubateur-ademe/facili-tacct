'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useStyles } from 'tss-react/dsfr';
import { TagPatch4 } from './patch4/Tag';

export const Patch4Accordion = () => {
  const { css } = useStyles();
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
        <div className="px-4 w-full">
          <h2
            style={{
              fontWeight: 700,
              lineHeight: '24px',
              fontSize: '18px',
              margin: '0 0 24px',
              color: '#000091'
            }}
          >
            Évolution d’intensité climatique sur votre territoire :
          </h2>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-row gap-12">
                <p>Précipitations</p>
                <TagPatch4>Intensité forte</TagPatch4>
              </div>
              <div className="flex flex-row gap-12">
                <p>Sécheresse</p>
                <TagPatch4>Intensité forte</TagPatch4>
              </div>
              <div className="flex flex-row gap-12">
                <p>Niveaux marins</p>
                <TagPatch4>Intensité forte</TagPatch4>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="flex flex-row gap-12">
                <p>Feux de foret</p>
                <TagPatch4>Intensité forte</TagPatch4>
              </div>
              <div className="flex flex-row gap-12">
                <p>Fortes chaleurs</p>
                <TagPatch4>Intensité forte</TagPatch4>
              </div>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p>
                Précipitations : Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.{' '}
              </p>
            </div>
            <div className="flex flex-row">
              <p>
                Sécheresse : Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna.
              </p>
            </div>
            <div className="flex flex-row">
              <p>
                Niveaux marins : Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </p>
            </div>
            <div className="flex flex-row">
              <p>
                Feux de foret : Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </p>
            </div>
            <div className="flex flex-row">
              <p>
                Fortes chaleurs : Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p>
              <b>Les quatre niveaux d’intensité sont les suivants :</b>
            </p>
            <div className="flex flex-row gap-8">
              <TagPatch4 style={{ backgroundColor: '#DA1B5C', color: 'white' }}>
                Intensité très forte
              </TagPatch4>
              <p>
                Précipitations : Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </p>
            </div>
            <div className="flex flex-row gap-8">
              <TagPatch4 style={{ backgroundColor: '#F66E19' }}>
                Intensité forte
              </TagPatch4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className="flex flex-row gap-8">
              <TagPatch4 style={{ backgroundColor: '#FFCF5E' }}>
                Intensité modérée
              </TagPatch4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className="flex flex-row gap-8">
              <TagPatch4 style={{ backgroundColor: '#E5E5E5' }}>
                Intensité non déterminée
              </TagPatch4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
