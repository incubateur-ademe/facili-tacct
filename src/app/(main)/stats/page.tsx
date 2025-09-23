"use client";
import { Body, H1 } from '@/design-system/base/Textes';
import { NewContainer } from '@/design-system/layout';
import { useEffect, useState } from 'react';

const Page = () => {
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const params = { country: "FR" }; // adapte à tes filtres Metabase
    fetch(`/api/metabase`)
      .then(r => r.json())
      .then(({ embedUrl }) => setSrc(embedUrl))
      .catch(console.error);
  }, []);

  if (!src) return null;

  return (
    <>
    <NewContainer size="xl">
      <H1>Statistiques</H1>
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
        <div className="w-full">
          <iframe
            src={src}
            title="Tableau de bord stats"
            className="w-full"
            style={{ minHeight: 900 }}
            allow="fullscreen"
          />
        </div>
      }
    </>
  );
};

export default Page;
