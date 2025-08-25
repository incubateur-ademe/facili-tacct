"use client";
import { CopyLinkClipboard } from '@/components/CopyLinkClipboard';
import { RetourHautDePage } from '@/components/RetourHautDePage';
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { Agriculture, AgricultureBio, CarteCommunes, SurfacesAgricolesModel } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { SuperficiesIrriguees } from '../../indicateurs/agricultureEtPeche/1-SuperficiesIrriguees';
import { SurfacesEnBio } from '../../indicateurs/agricultureEtPeche/2-SurfacesEnBio';
import { TypesDeCulture } from '../../indicateurs/agricultureEtPeche/3-TypesDeCultures';

interface Props {
  carteCommunes: CarteCommunes[];
  agriculture: Agriculture[];
  surfacesAgricoles: SurfacesAgricolesModel[];
  agricultureBio: AgricultureBio[];
}

export const DonneesAgricultureEtPeche = ({
  carteCommunes,
  agriculture,
  surfacesAgricoles,
  agricultureBio
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Agriculture et pêche";
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

        {/* Section Agriculture */}
        <section className={styles.sectionType}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0 0 -1rem 0", padding: "2rem 2rem 0" }}>
            {ongletsMenu.thematiquesLiees[0].icone}{" "}{ongletsMenu.thematiquesLiees[0].thematique}
          </H2>
          {/* Surfaces en bio */}
          <div id="Surfaces en bio" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Part de l’agriculture biologique
              </H3>
              <CopyLinkClipboard anchor="Surfaces en bio" />
            </div>
            <SurfacesEnBio agricultureBio={agricultureBio} />
          </div>

          {/* Types de cultures */}
          <div id="Types de culture" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Surface agricole par type de culture
              </H3>
              <CopyLinkClipboard anchor="Types de culture" />
            </div>
            <TypesDeCulture surfacesAgricoles={surfacesAgricoles} />
          </div>
        </section>

        {/* Section Eau */}
        <section className={styles.sectionType}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0 0 -1rem 0", padding: "2rem 2rem 0" }}>
            {ongletsMenu.thematiquesLiees[1].icone}{" "}{ongletsMenu.thematiquesLiees[1].thematique}
          </H2>
          {/* Superficies irriguées */}
          <div id="Superficies irriguées" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Part de la surface agricole irriguée dans la SAU en 2020
              </H3>
              <CopyLinkClipboard anchor="Superficies irriguées" />
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
