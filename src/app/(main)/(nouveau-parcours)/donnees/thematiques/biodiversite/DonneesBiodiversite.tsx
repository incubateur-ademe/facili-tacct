"use client";
import { LoaderText } from "@/components/ui/loader";
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { AgricultureBio, AOT40, CarteCommunes, CLCTerritoires, ConsommationNAF, EtatCoursDeau, InconfortThermique, QualiteSitesBaignade } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { ConsommationEspacesNAF } from '../../indicateurs/biodiversite/1-ConsommationEspacesNAF';
import { SurfacesEnBio } from '../../indicateurs/biodiversite/2-SurfacesEnBio';
import { EtatEcoCoursDeau } from '../../indicateurs/biodiversite/3-EtatCoursDeau';
import { OzoneEtVegetation } from '../../indicateurs/biodiversite/4-AOT40';
import { TypesDeSols } from "../../indicateurs/biodiversite/5-TypesDeSols";

interface Props {
  carteCommunes: CarteCommunes[];
  agricultureBio: AgricultureBio[];
  consommationNAF: ConsommationNAF[];
  aot40: AOT40[];
  etatCoursDeau: EtatCoursDeau[];
  qualiteEauxBaignade: QualiteSitesBaignade[];
  inconfortThermique: InconfortThermique[];
}

export const DonneesBiodiversite = ({
  carteCommunes,
  agricultureBio,
  consommationNAF,
  aot40,
  etatCoursDeau,
  qualiteEauxBaignade,
  inconfortThermique
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Biodiversité";
  const ongletsMenu = sommaireThematiques[thematique];
  const [clcState, setClcState] = useState<CLCTerritoires[] | undefined>(undefined);
  const [loadingClc, setLoadingClc] = useState(true);

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

  useEffect(() => {
    // If no clc provided from server, fetch it client-side asynchronously
    if (!clcState) {
      const fetchClc = async () => {
        try {
          setLoadingClc(true);
          const params = new URLSearchParams({ libelle: (new URLSearchParams(window.location.search)).get('libelle') || '', type: (new URLSearchParams(window.location.search)).get('type') || '', code: (new URLSearchParams(window.location.search)).get('code') || '' });
          const res = await fetch(`/api/clc?${params.toString()}`);
          const json = await res.json();
          if (json.ok) setClcState(json.data);
        } catch (e) {
          console.error('Failed to fetch CLC', e);
        } finally {
          setLoadingClc(false);
        }
      };
      fetchClc();
    }
  }, [clcState]);

  return (
    <>
      <div className={styles.explorerMesDonneesContainer}>
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Ce que les données suggèrent sur votre territoire
        </H1>
        {/* Introduction */}
        <section>
          <Body size='lg'>
            Les indicateurs qui vont suivre vous orientent...........
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
          }}>
            {ongletsMenu.thematiquesLiees[0].icone}{" "}{ongletsMenu.thematiquesLiees[0].thematique}
          </H2>

          {/* Ozone et végétation */}
          <div id="Ozone et végétation" className={styles.indicateurMapWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Concentration d’ozone pendant la période de végétation (moyenne 2020-2024)
              </H3>
            </div>
            <OzoneEtVegetation
              aot40={aot40}
              carteCommunes={carteCommunes}
            />
          </div>
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
            {ongletsMenu.thematiquesLiees[1].icone}{" "}{ongletsMenu.thematiquesLiees[1].thematique}
          </H2>
          {/* Consommation d'espaces NAF */}
          <div id="Consommation d'espaces NAF" className={styles.indicateurMapWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Sols imperméabilisés entre 2009 et 2023
              </H3>
            </div>
            <ConsommationEspacesNAF
              consommationNAF={consommationNAF}
              carteCommunes={carteCommunes}
            />
          </div>
          {/* Types de sols */}
          <div id="Types de sols" className={styles.indicateurMapWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Cartographie des différents types de sols
              </H3>
            </div>
            {
              loadingClc ? <LoaderText text='Chargement de la cartographie' /> : (
                <TypesDeSols inconfortThermique={inconfortThermique} carteCommunes={carteCommunes} clc={clcState} />
              )
            }
          </div>
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
            {ongletsMenu.thematiquesLiees[2].icone}{" "}{ongletsMenu.thematiquesLiees[2].thematique}
          </H2>
          {/* Surfaces en bio */}
          <div id="Surfaces en bio" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Part de l’agriculture biologique
              </H3>
            </div>
            <SurfacesEnBio
              agricultureBio={agricultureBio}
            />
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
            {ongletsMenu.thematiquesLiees[3].icone}{" "}{ongletsMenu.thematiquesLiees[3].thematique}
          </H2>
          {/* État écologique des cours d'eau */}
          <div id="État écologique des cours d'eau" className={styles.indicateurMapWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                État écologique des cours d’eau et des plans d’eau
              </H3>
            </div>
            <EtatEcoCoursDeau
              etatCoursDeau={etatCoursDeau}
              carteCommunes={carteCommunes}
              qualiteEauxBaignade={qualiteEauxBaignade}
            />
          </div>
        </section>
      </div>
    </>
  );
};
