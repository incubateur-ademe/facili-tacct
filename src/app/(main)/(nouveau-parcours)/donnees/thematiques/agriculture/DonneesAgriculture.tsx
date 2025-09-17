"use client";
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { Agriculture, AgricultureBio, CarteCommunes, SurfacesAgricolesModel } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { SuperficiesIrriguees } from '../../indicateurs/agriculture/1-SuperficiesIrriguees';
import { SurfacesEnBio } from '../../indicateurs/agriculture/2-SurfacesEnBio';
import { TypesDeCulture } from '../../indicateurs/agriculture/3-TypesDeCultures';

interface Props {
  carteCommunes: CarteCommunes[];
  agriculture: Agriculture[];
  surfacesAgricoles: SurfacesAgricolesModel[];
  agricultureBio: AgricultureBio[];
}

export const DonneesAgriculture = ({
  carteCommunes,
  agriculture,
  surfacesAgricoles,
  agricultureBio
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Agriculture";
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
          Entre force et fragilité, découvrez les facteurs qui font basculer l'agriculture face au changement climatique.
        </H1>
        {/* Introduction */}
        <section>
          <Body size='lg'>
            Ces quelques indicateurs vous aideront à poser les bonnes questions, le terrain (étape 2) vous donnera les vraies réponses.
          </Body>
        </section>

        {/* Section Agriculture */}
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
          {/* Surfaces en bio */}
          <div id="Surfaces en bio" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Part de l’agriculture biologique
              </H3>
            </div>
            <SurfacesEnBio agricultureBio={agricultureBio} />
          </div>

          {/* Types de cultures */}
          <div id="Types de culture" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Surface agricole par type de culture
              </H3>
            </div>
            <TypesDeCulture surfacesAgricoles={surfacesAgricoles} />
          </div>
        </section>

        {/* Section Eau */}
        <section className={styles.sectionType}>
          <H2 style={{
            color: "var(--principales-rouge)",
            textTransform: 'uppercase',
            fontSize: '1.75rem',
            margin: "0 0 -1rem 0",
            padding: "2rem 2rem 0",
            fontWeight: 400
          }}>
            {ongletsMenu.thematiquesLiees[1].icone}{" "}{ongletsMenu.thematiquesLiees[1].thematique}
          </H2>
          {/* Superficies irriguées */}
          <div id="Superficies irriguées" className={styles.indicateurMapWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Part de la surface agricole irriguée dans la SAU en 2020
              </H3>
            </div>
            <SuperficiesIrriguees
              agriculture={agriculture}
              carteCommunes={carteCommunes}
            />
          </div>
        </section>
      </div>
    </>
  );
};
