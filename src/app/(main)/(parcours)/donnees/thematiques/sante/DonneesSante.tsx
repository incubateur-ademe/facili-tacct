"use client";
import ScrollToHash from '@/components/interactions/ScrollToHash';
import { LoaderText } from '@/components/ui/loader';
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { GetCommunesCoordinates } from '@/lib/queries/postgis/cartographie';
import { useSearchParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useStyles } from 'tss-react/dsfr';
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { SeuilsReglementairesO3 } from '../../indicateurs/sante/1-o3';

interface Props {
  coordonneesCommunes: { codes: string[], bbox: { minLng: number, minLat: number, maxLng: number, maxLat: number } } | null;
}

export const DonneesSante = ({
  coordonneesCommunes,
}: Props) => {
  const { css } = useStyles();
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Gestion des risques";
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const [data, setData] = useState({
    coordonneesCommunes,
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
      const [
        newCoordonneesCommunes,
      ] = await Promise.all([
        GetCommunesCoordinates(code, libelle, type),
      ]);
      setData({
        coordonneesCommunes: newCoordonneesCommunes,
      });
      setIsLoading(false);
    })();
  }, [libelle]);

  return (
    isLoading ? <LoaderText text='Mise à jour des données' /> :
      <div className={styles.explorerMesDonneesContainer}>
        <ScrollToHash />
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          SANTE
        </H1>
        {/* Introduction */}
        <section>
          <Body size='lg'>
            Ces quelques indicateurs vous aideront à poser les bonnes questions, le terrain vous donnera les vraies réponses.
          </Body>
        </section>

        {/* Section Gestion des risques */}
        <section className={styles.sectionType}>
          <H2 style={{
            color: "var(--principales-rouge)",
            textTransform: 'uppercase',
            fontSize: '1.75rem',
            margin: "0 0 -1rem 0",
            padding: "2rem 2rem 0",
            fontWeight: 400
          }}>
            {ongletsMenu.thematiquesLiees[0].icone}{" "}{ongletsMenu.thematiquesLiees[0].thematique}
          </H2>

          {/*  */}
          <div id="Seuils réglementaires O3" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Nombre de dépassement du seuil journalier 120 µg/m³ de O3 sur 2024
              </H3>
            </div>
            <SeuilsReglementairesO3 coordonneesCommunes={data.coordonneesCommunes} />
          </div>
        </section>

      </div>
  );
};
