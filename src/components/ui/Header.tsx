'use client';

import maisonIcon from '@/assets/icons/maison_icon_black.svg';
import { getLastTerritory } from '@/components/searchbar/fonctions';
import { handleRedirection } from '@/hooks/Redirections';
import useWindowDimensions from '@/hooks/windowDimensions';
import Header from '@codegouvfr/react-dsfr/Header';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import { Brand } from '../Brand';
import HeaderRechercheTerrtoire from '../searchbar/header/HeaderRechercheTerrtoire';

const HeaderComp = () => {
  const searchParams = useSearchParams();
  const params = usePathname();
  const urlCode = searchParams.get('code');
  const urlLibelle = searchParams.get('libelle');
  const urlType = searchParams.get('type') as "epci" | "commune" | "departement" | "ept" | "petr" | "pnr";
  
  const [displayCode, setDisplayCode] = useState(urlCode);
  const [displayLibelle, setDisplayLibelle] = useState(urlLibelle);
  const [displayType, setDisplayType] = useState(urlType);

  useEffect(() => {
    if (!urlCode && !urlLibelle && !urlType) {
      const lastTerritory = getLastTerritory();
      if (lastTerritory) {
        setDisplayCode(lastTerritory.code);
        setDisplayLibelle(lastTerritory.libelle);
        setDisplayType(lastTerritory.type as "epci" | "commune" | "departement" | "ept" | "petr" | "pnr");
      }
    } else {
      setDisplayCode(urlCode);
      setDisplayLibelle(urlLibelle);
      setDisplayType(urlType);
    }
  }, [urlCode, urlLibelle, urlType]);

  const { css } = useStyles();
  const windowDimensions = useWindowDimensions();
  const lastTerritory = getLastTerritory();

  console.log("displayCode", displayCode);
  console.log("displayLibelle", displayLibelle);
  console.log("displayType", displayType);

  const redirectionPatch4 = handleRedirection({
    searchCode: displayCode ?? '',
    searchLibelle: displayLibelle ?? '',
    typeTerritoire: displayType as 'epci' | 'commune',
    page: (displayType === "epci" || displayType === "commune") ? 'patch4c' : 'recherche-territoire-patch4'
  });

  const redirectionExplorerMesDonnees = handleRedirection({
    searchCode: displayCode || '',
    searchLibelle: displayLibelle || '',
    typeTerritoire: displayType || '',
    page: lastTerritory?.thematique ? 'donnees' : displayType ? 'thematiques' : 'recherche-territoire',
    thematique: lastTerritory?.thematique
  });

  return (
    <Header
      className={css({
        zIndex: '500',
        '.fr-container': windowDimensions.width  && windowDimensions.width > 992 && (params === "/donnees" || params === "/impacts") ? {
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
          color: 'var(--principales-vert)',
          ':before': {
            backgroundColor: 'var(--principales-vert)',
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
      quickAccessItems={windowDimensions.width && windowDimensions.width < 992 && displayType ? [] : [
        <HeaderRechercheTerrtoire libelle={displayLibelle ?? ''} code={displayCode ?? ''} type={displayType} />
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
