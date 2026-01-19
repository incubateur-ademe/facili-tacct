'use client';
import ScrollToHash from '@/components/interactions/ScrollToHash';
import { LoaderText } from '@/components/ui/loader';
import { Body, H1, H2, H3 } from '@/design-system/base/Textes';
import { O3 } from '@/lib/postgres/models';
import { GetO3 } from '@/lib/queries/databases/sante';
import { GetCommunesCoordinates } from '@/lib/queries/postgis/cartographie';
import { useSearchParams } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import { sommaireThematiques } from '../../../thematiques/constantes/textesThematiques';
import styles from '../../explorerDonnees.module.scss';
import { SeuilsReglementairesO3 } from '../../indicateurs/sante/1-o3';

interface Props {
  coordonneesCommunes: {
    codes: string[];
    bbox: { minLng: number; minLat: number; maxLng: number; maxLat: number };
  } | null;
  o3: O3[];
}

export const DonneesSante = ({ coordonneesCommunes, o3 }: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as 'Gestion des risques';
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const [data, setData] = useState({
    coordonneesCommunes,
    o3
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const ongletsMenu = sommaireThematiques[thematique];

  useLayoutEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setIsLoading(true);
    void (async () => {
      const [newCoordonneesCommunes, newO3] = await Promise.all([
        GetCommunesCoordinates(code, libelle, type),
        GetO3()
      ]);
      setData({
        coordonneesCommunes: newCoordonneesCommunes,
        o3: newO3
      });
      setIsLoading(false);
    })();
  }, [libelle]);

  return isLoading ? (
    <LoaderText text="Mise à jour des données" />
  ) : (
    <div className={styles.explorerMesDonneesContainer}>
      <ScrollToHash />
      <H1 style={{ color: 'var(--principales-vert)', fontSize: '2rem' }}>
        SANTE
      </H1>
      {/* Introduction */}
      <section>
        <Body size="lg">
          Ces quelques indicateurs vous aideront à poser les bonnes questions,
          le terrain vous donnera les vraies réponses.
        </Body>
      </section>

      {/* Section Gestion des risques */}
      <section className={styles.sectionType}>
        <H2
          style={{
            color: 'var(--principales-rouge)',
            textTransform: 'uppercase',
            fontSize: '1.75rem',
            margin: '0 0 -1rem 0',
            padding: '2rem 2rem 0',
            fontWeight: 400
          }}
        >
          {ongletsMenu.thematiquesLiees[0].icone}{' '}
          {ongletsMenu.thematiquesLiees[0].thematique}
        </H2>

        {/* Seuils réglementaires O3 */}
        <div
          id="Seuils réglementaires O3"
          className={styles.indicateurMapWrapper}
        >
          <div className={styles.h3Titles}>
            <H3
              style={{ color: 'var(--principales-vert)', fontSize: '1.25rem' }}
            >
              Nombre de dépassement du seuil journalier 120 µg/m³ de O3 sur 2024
            </H3>
          </div>
          <SeuilsReglementairesO3
            coordonneesCommunes={data.coordonneesCommunes}
            o3={data.o3}
          />
        </div>
      </section>
    </div>
  );
};
