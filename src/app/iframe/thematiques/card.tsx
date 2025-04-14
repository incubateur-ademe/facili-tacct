'use client';
import Badge from '@codegouvfr/react-dsfr/Badge';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useState } from 'react';

interface Props {
  badge: string;
  badgeSeverity: 'error' | 'info' | 'new' | 'success' | 'warning';
  imageUrl: string;
  thematique: string;
  title: string;
}

export const CardComp = ({
  imageUrl,
  thematique,
  badgeSeverity,
  badge,
  title
}: Props) => {
  const [route, setRoute] = useState('');
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const libelle = searchParams.get('libelle');
  const typeTerritoire = searchParams.get('type');
  const posthog = usePostHog();

  useEffect(() => {
    code
      ? setRoute(
          `/iframe/donnees-territoriales?code=${code}&libelle=${libelle}&type=${typeTerritoire}&thematique=${thematique}`
        )
      : setRoute(
          `/iframe/donnees-territoriales?libelle=${libelle}&type=${typeTerritoire}&thematique=${thematique}`
        );
  }, [code, libelle, typeTerritoire, thematique]);

  const ThematiquesClick = () => {
    posthog.capture('thematique_clicked', {
      thematique: thematique
    });
  };

  return (
    <div
      style={{
        width: 360
      }}
      onClick={ThematiquesClick}
    >
      <Card
        background
        border
        // desc={description}
        enlargeLink
        shadow={true}
        imageAlt=""
        imageUrl={imageUrl}
        classes={{
          imgTag: 'fr-ratio-32x9'
        }}
        linkProps={{
          href: route
        }}
        end={
          <Badge noIcon severity={badgeSeverity}>
            {badge}
          </Badge>
        }
        title={title}
        titleAs="h2"
      />
    </div>
  );
};
