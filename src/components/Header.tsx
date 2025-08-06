'use client';

import maisonIcon from '@/assets/icons/maison_icon_black.svg';
import ressourcesIcon from '@/assets/icons/ressources_icon_blue.svg';
import useWindowDimensions from '@/hooks/windowDimensions';
import { DarkClass } from '@/lib/utils/DarkClass';
import { eptRegex } from '@/lib/utils/regex';
import Header from '@codegouvfr/react-dsfr/Header';
import { Button } from '@mui/material';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { useStyles } from 'tss-react/dsfr';
import { Brand } from './Brand';
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
  console.log("params", params);
  const posthog = usePostHog();
  const { css } = useStyles();
  const window = useWindowDimensions();

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
      operatorLogo={{
        alt: "Logo de l'ADEME",
        imgUrl: '/logo-ademe-tacct.png',
        orientation: 'horizontal'
      }}
      quickAccessItems={window.width && window.width < 992 ? [] : [
        code && libelle ? (
          <Localisation libelle={libelle} code={code} />
        ) : libelle ? (
          <Localisation libelle={libelle} />
        ) : null,
        (params.includes('ressources') || params === "/") ? null : (
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
      navigation={params !== "/" ? [
        {
          linkProps: {
            href: '/',
            target: '_self'
          },
          text: <Image src={maisonIcon} alt="Accueil" width={20} height={20} title="Accueil" />
        },
        {
          isActive: [
            '/donnees-territoriales',
            "/rechercher-son-territoire",
          ].includes(params) ? true : false,
          linkProps: {
            href: '#',
            target: '_self'
          },
          text: 'Explorer les données de mon territoire'
        },
        {
          linkProps: {
            href: '#',
            target: '_self'
          },
          text: 'accès direct'
        },
        {
          linkProps: {
            href: '#',
            target: '_self'
          },
          text: 'accès direct'
        }
      ] : []}
    />
  );
};

export default HeaderComp;
