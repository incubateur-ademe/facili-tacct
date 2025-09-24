"use client";
import { Body, H2 } from '@/design-system/base/Textes';
import { NewContainer } from '@/design-system/layout';
import { useEffect, useState } from 'react';

const MetabaseComponent = () => {
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const params = { dashboardId: 5 };
    fetch(`/api/metabase?params=${JSON.stringify(params)}`)
      .then(r => r.json())
      .then(({ embedUrl }) => setSrc(embedUrl))
      .catch(console.error);
  }, []);

  if (!src) return null;

  return (
    <>
      <NewContainer size="xl">
        <H2>Statistiques</H2>
        <Body>
          <i>
            Cette page présente les statistiques d’utilisation du site Facili-TACCT.
            Veuillez noter qu’il s’agit d’une page en cours de construction, de
            nouvelles données viendront progressivement l’enrichir.
          </i>
        </Body>
      </NewContainer>
      {
        src &&
        <div className="w-full h-full" style={{ height: "max-content" }}>
          <iframe
            src={src}
            title="Tableau de bord stats"
            className="w-full"
            style={{ minHeight: 900, height: "max-content" }}
            allow="fullscreen"
          />
        </div>
      }
    </>
  );
};

export default MetabaseComponent;
