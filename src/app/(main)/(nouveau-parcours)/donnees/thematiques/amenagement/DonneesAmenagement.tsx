"use client";
import { CopyLinkClipboard } from '@/components/CopyLinkClipboard';
import { RetourHautDePage } from '@/components/RetourHautDePage';
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { CarteCommunes, ConsommationNAF } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { ConsommationEspacesNAFAmenagement } from '../../indicateurs/amenagement/1-ConsommationEspacesNAF';
import { LCZ } from '../../indicateurs/amenagement/2-LCZ';

interface Props {
  carteCommunes: CarteCommunes[];
  consommationNAF: ConsommationNAF[];
}

export const DonneesAmenagement = ({
  carteCommunes,
  consommationNAF
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Aménagement";
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
      <RetourHautDePage />
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

        {/* Section Aménagement */}
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
          {/* Consommation d'espaces NAF */}
          <div id="Consommation d'espaces NAF" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Destination des surfaces imperméabilisées
              </H3>
              <CopyLinkClipboard anchor="Consommation d'espaces NAF" />
            </div>
            <ConsommationEspacesNAFAmenagement
              consommationNAF={consommationNAF}
              carteCommunes={carteCommunes}
            />
          </div>

          {/* État LCZ */}
          <div id="LCZ" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Cartographie des zones climatiques locales (LCZ)
              </H3>
              <CopyLinkClipboard anchor="LCZ" />
            </div>
            <LCZ carteCommunes={carteCommunes} />
          </div>
        </section>
      </div>
    </>
  );
};
