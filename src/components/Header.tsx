'use client';

import maisonIcon from '@/assets/icons/maison_icon_black.svg';
import { handleRedirection } from '@/hooks/Redirections';
import useWindowDimensions from '@/hooks/windowDimensions';
import { DarkClass } from '@/lib/utils/DarkClass';
import { eptRegex } from '@/lib/utils/regex';
import Header from '@codegouvfr/react-dsfr/Header';
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
  const type = searchParams.get('type')!;
  const thematique = searchParams.get('thematique')!;
  const posthog = usePostHog();
  const { css } = useStyles();
  const window = useWindowDimensions();

  const RessourcesClick = () => {
    posthog.capture('ressources_bouton', {
      ressource: 'ressources',
      date: new Date()
    });
  };

  const redirectionPatch4 = handleRedirection({
    searchCode: (type === "epci" || type === "commune") ? code : '',
    searchLibelle: (type === "epci" || type === "commune") ? libelle : '',
    typeTerritoire: type as 'epci' | 'commune',
    page: (type === "epci" || type === "commune") ? 'patch4c' : 'rechercher-son-territoire-patch4'
  });

  const redirectionExplorerMesDonnees = handleRedirection({
    searchCode: code || '',
    searchLibelle: libelle || '',
    typeTerritoire: type as 'epci' | 'commune',
    page: type ? 'roue-systemique' : 'rechercher-son-territoire'
  });

  return (
    <Header
      className={css({
        zIndex: '500',
        '.fr-nav__link[aria-current]': {
          color: params === "/donnees-territoriales" ? "#0063CB" : 'var(--principales-vert)',
          ':before': {
            backgroundColor: params === "/donnees-territoriales" ? "#0063CB" : 'var(--principales-vert)',
          }
        }
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
        // (params.includes('ressources') || params === "/") ? null : (
        //   <Button
        //     key="0"
        //     variant="outlined"
        //     href="/ressources"
        //     startIcon={<Image src={ressourcesIcon} alt="" />}
        //     sx={{
        //       textTransform: 'none',
        //       color: '#0063CB',
        //       borderRadius: '4px',
        //       border: '1px solid #0063CB',
        //       padding: '0.5em 1em',
        //       fontWeight: 500,
        //       fontFamily: 'inherit',
        //       fontSize: '1rem',
        //       height: '48px',
        //       top: '-0.5em',
        //       margin: '0 0 0 1em'
        //     }}
        //     onClick={RessourcesClick}
        //   >
        //     Ressources
        //   </Button>
        // )
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
            '/rechercher-son-territoire',
            '/roue-systemique',
            '/explorer-mes-donnees'
          ].includes(params) ? true : false,
          linkProps: {
            href: redirectionExplorerMesDonnees,
            target: '_self'
          },
          text: 'Explorer les données de mon territoire'
        },
        // ...(type === "epci" || type === "commune" ? [{
        //   isActive: params === '/patch4c' ? true : false,
        //   linkProps: {
        //     href: redirectionPatch4,
        //     target: '_self'
        //   },
        //   text: 'Patch 4°C'
        // }] : []),
        {
          isActive: params === '/patch4c' ? true : false,
          linkProps: {
            href: redirectionPatch4,
            target: '_self'
          },
          text: 'Patch 4°C'
        },
        {
          isActive: params === '/ressources' ? true : false,
          linkProps: {
            href: '/ressources',
            target: '_self'
          },
          text: 'Ressources'
        },
        {
          linkProps: {
            href: 'https://tally.so/r/n0LrEZ',
            target: '_blank'
          },
          text: 'Communauté'
        }
      ] : []}
    />
  );
};

export default HeaderComp;
