'use client';
import ressourcesIcon from '@/assets/icons/ressources_icon_blue.svg';
import { config } from '@/config';
import Badge from '@codegouvfr/react-dsfr/Badge';
import Header from '@codegouvfr/react-dsfr/Header';
import { Button } from '@mui/material';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { GetInconfortThermique } from '@/lib/queries/thematiques';
import { DarkClass } from '@/lib/utils/DarkClass';
import { usePostHog } from 'posthog-js/react';
import { Brand } from './Brand';
import styles from './components.module.scss';

const Localisation = (props: { libelle: string; code: string }) => {
  const darkClass = DarkClass();
  const { libelle, code } = props;
  return (
    <div className={styles.localisation} style={darkClass}>
      <span
        className="fr-icon-map-pin-user-fill"
        style={{ borderRadius: '25px' }}
      />
      <p>
        {libelle} - {code}
      </p>
    </div>
  );
};

export const HeaderComp = () => {
  const searchParams = useSearchParams();
  const params = usePathname();
  const codgeo = searchParams.get('codgeo');
  const codepci = searchParams.get('codepci')!;
  const [epci, setEpci] = useState('');
  const [commune, setCommune] = useState('');
  const posthog = usePostHog();

  useEffect(() => {
    void (async () => {
      const temp =
        codgeo !== null
          ? await GetInconfortThermique(codgeo)
          : codepci !== null
            ? await GetInconfortThermique(codepci)
            : void 0;
      temp && codgeo
        ? setCommune(temp[0]?.libelle_geographique)
        : setCommune('');
      temp && !codgeo ? setEpci(temp[0]?.libelle_epci) : setEpci('');
    })();
  }, [codepci, codgeo]);

  const RessourcesClick = () => {
    posthog.capture('ressources_bouton', {
      ressource: 'ressources',
      date: new Date()
    });
  };
  //TODO ClientONly

  return (
    <Header
      brandTop={<Brand />}
      homeLinkProps={{
        href: '/',
        title: `Accueil - ${config.name}`
      }}
      serviceTitle={
        <>
          {config.name}{' '}
          <Badge as="span" noIcon severity="success">
            Beta
          </Badge>
        </>
      }
      operatorLogo={{
        alt: "Logo de l'ADEME",
        imgUrl: '/logo-ademe.svg',
        orientation: 'vertical'
      }}
      quickAccessItems={[
        commune && codgeo ? (
          <Localisation libelle={commune} code={codgeo} />
        ) : epci && codepci ? (
          <Localisation libelle={epci} code={codepci} />
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
