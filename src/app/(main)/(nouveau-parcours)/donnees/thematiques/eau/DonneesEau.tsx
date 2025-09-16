"use client";
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { CarteCommunes, EtatCoursDeau, RessourcesEau } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { EtatEcoCoursDeau } from '../../indicateurs/eau/1-EtatCoursDeau';
import { PrelevementsEnEau } from '../../indicateurs/eau/2-PrelevementsEnEau';

interface Props {
  carteCommunes: CarteCommunes[];
  ressourcesEau: RessourcesEau[];
  etatCoursDeau: EtatCoursDeau[];
}

export const DonneesEau = ({
  carteCommunes,
  ressourcesEau,
  etatCoursDeau
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Eau";
  const ongletsMenu = sommaireThematiques[thematique];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
        html {
          scroll-behavior: smooth;
        }
      `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <>
      <div className={styles.explorerMesDonneesContainer}>
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Ce que les données suggèrent sur votre territoire
        </H1>
        {/* Introduction */}
        <section>
          <Body size='lg'>
            Les indicateurs qui vont suivre vous orientent ..............
            En revanche, seule votre enquête terrain vous révélera les impacts réels.
          </Body>
        </section>

        {/* Section Biodiversité */}
        <section className={styles.sectionType}>
          <H2 style={{
            color: "var(--principales-rouge)",
            textTransform: 'uppercase',
            fontSize: '1.75rem',
            margin: "0 0 -1rem 0",
            padding: "2rem 2rem 0",
            fontWeight: 400
          }}>            {ongletsMenu.thematiquesLiees[0].icone}{" "}{ongletsMenu.thematiquesLiees[0].thematique}
          </H2>
          {/* Ressources en eau */}
          <div id="Ressources en eau" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Répartition des prélèvements d’eau par usage
              </H3>
            </div>
            <PrelevementsEnEau ressourcesEau={ressourcesEau} />
          </div>

          {/* État écologique des cours d'eau */}
          <div id="État écologique des cours d'eau" className={styles.indicateurMapWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                État écologique des cours d’eau
              </H3>
            </div>
            <EtatEcoCoursDeau
              etatCoursDeau={etatCoursDeau}
              carteCommunes={carteCommunes}
            />
          </div>
        </section>
      </div>
    </>
  );
};
