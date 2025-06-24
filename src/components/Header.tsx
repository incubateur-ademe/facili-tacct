'use client';

import ressourcesIcon from '@/assets/icons/ressources_icon_blue.svg';
import { DarkClass } from '@/lib/utils/DarkClass';
import { eptRegex } from '@/lib/utils/regex';
import Header from '@codegouvfr/react-dsfr/Header';
import { Button } from '@mui/material';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { useStyles } from 'tss-react/dsfr';
import { Brand } from '../lib/Brand';
import styles from './components.module.scss';

const ReplaceDisplayEpci = (libelleEpci: string) => {
  return libelleEpci
    .replace("Communauté d'agglomération", 'CA')
    .replace('Communauté de communes', 'CC');
};

const Localisation = (props: { libelle: string; code?: string }) => {
  const darkClass = DarkClass();
  const { libelle, code } = props;
  return (
    <div className={styles.localisation} style={darkClass}>
      <span
        className="fr-icon-map-pin-user-fill"
        style={{ borderRadius: '25px' }}
      />
      <p>
        {eptRegex.test(libelle) ? libelle
          : code ? (
            <>
              {ReplaceDisplayEpci(libelle)} - {code}
            </>
          ) : libelle
        }
      </p>
    </div>
  );
};

const HeaderComp = () => {
  const searchParams = useSearchParams();
  const params = usePathname();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const posthog = usePostHog();
  const { css } = useStyles();

  const RessourcesClick = () => {
    posthog.capture('ressources_bouton', {
      ressource: 'ressources',
      date: new Date()
    });
  };

  return (
    <Header
      className={css({
        zIndex: '500'
      })}
      brandTop={<Brand />}
      homeLinkProps={{
        href: '/',
        title: `Accueil - Facili-TACCT`
      }}
      serviceTitle="Facili-TACCT"
      operatorLogo={{
        alt: "Logo de l'ADEME",
        imgUrl: '/logo-ademe.png',
        orientation: 'vertical'
      }}
      quickAccessItems={[
        code && libelle ? (
          <Localisation libelle={libelle} code={code} />
        ) : libelle ? (
          <Localisation libelle={libelle} />
        ) : null,
        params.includes('ressources') ? null : (
          <Button
            key="0"
            variant="outlined"
            href="/ressources"
            startIcon={<Image src={ressourcesIcon} alt="" />}
            sx={{
              textTransform: 'none',
              color: '#0063CB',
              borderRadius: '4px',
              border: '1px solid #0063CB',
              padding: '0.5em 1em',
              fontWeight: 500,
              fontFamily: 'inherit',
              fontSize: '1rem',
              height: '48px',
              top: '-0.5em',
              margin: '0 0 0 1em'
            }}
            onClick={RessourcesClick}
          >
            Ressources
          </Button>
        )
      ]}
    />
  );
};

export default HeaderComp;
