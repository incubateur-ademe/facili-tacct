'use client';

import maisonIcon from '@/assets/icons/maison_icon_black.svg';
import { handleRedirection } from '@/hooks/Redirections';
import useWindowDimensions from '@/hooks/windowDimensions';
import Header from '@codegouvfr/react-dsfr/Header';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useStyles } from 'tss-react/dsfr';
import { Brand } from '../Brand';
import HeaderRechercheTerrtoire from '../searchbar/header/HeaderRechercheTerrtoire';

const HeaderComp = () => {
  const searchParams = useSearchParams();
  const params = usePathname();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type') as "epci" | "commune" | "departement" | "ept" | "petr" | "pnr";
  const { css } = useStyles();
  const windowDimensions = useWindowDimensions();

  const redirectionPatch4 = handleRedirection({
    searchCode: (type === "epci" || type === "commune") ? code : '',
    searchLibelle: (type === "epci" || type === "commune") ? libelle : '',
    typeTerritoire: type as 'epci' | 'commune',
    page: (type === "epci" || type === "commune") ? 'patch4c' : 'recherche-territoire-patch4'
  });

  const redirectionExplorerMesDonnees = handleRedirection({
    searchCode: code || '',
    searchLibelle: libelle || '',
    typeTerritoire: type as 'epci' | 'commune',
    page: type ? 'thematiques' : 'recherche-territoire'
  });

  return (
    <Header
      className={css({
        zIndex: '500',
        '.fr-container': windowDimensions.width  && windowDimensions.width > 992 ? {
          marginRight: "1.5rem",
          maxWidth: '85dvw',
        } : {},
        '.fr-container-sm, .fr-container-md, .fr-container-lg': {
          maxWidth: '78rem'
        },
        '.fr-header__navbar': {
          display: 'none',
        },
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
      quickAccessItems={windowDimensions.width && windowDimensions.width < 992 && type ? [] : [
        <HeaderRechercheTerrtoire libelle={libelle} code={code} type={type} />
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
            '/recherche-territoire',
            '/thematiques',
            '/explorer-mes-donnees',
            '/donnees',
            '/impacts'
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
          isActive: [
            '/patch4c',
            '/recherche-territoire-patch4'
          ].includes(params),
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
