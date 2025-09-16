"use client";
import { LoaderText } from '@/components/loader';
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { ArreteCatNat, CarteCommunes, ErosionCotiere, IncendiesForet, RGACarte, RGAdb } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { ArretesCatnat } from '../../indicateurs/gestionDesRisques/1-ArretesCatnat';
import { RetraitGonflementDesArgiles } from '../../indicateurs/gestionDesRisques/2-RetraitGonflementDesArgiles';
import { ErosionCotiereComp } from '../../indicateurs/gestionDesRisques/3-ErosionCotiere';
import { FeuxDeForet } from '../../indicateurs/gestionDesRisques/4-FeuxDeForet';

interface Props {
  gestionRisques: ArreteCatNat[];
  carteCommunes: CarteCommunes[];
  erosionCotiere: ErosionCotiere[];
  incendiesForet: IncendiesForet[];
}

export const DonneesGestionRisques = ({
  carteCommunes,
  gestionRisques,
  erosionCotiere,
  incendiesForet
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Gestion des risques";
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const [rgaCarte, setRgaCarte] = useState<RGACarte[]>([]);
  const [rga, setRga] = useState<RGAdb[]>([]);
  const [rgaCarteLoading, setRgaCarteLoading] = useState(false);
  const [loadingRga, setLoadingRga] = useState(false);
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

  useEffect(() => {
    if (rga.length === 0 && rgaCarte.length === 0) {
      setLoadingRga(true);
      setRgaCarteLoading(true);
      fetch(`/api/rga?code=${code}&libelle=${libelle}&type=${type}`)
        .then(res => res.json())
        .then(data => {
          setRga(data.rga);
          setRgaCarte(data.rgaCarte);
        })
        .finally(() => {
          setLoadingRga(false);
          setRgaCarteLoading(false);
        }
        );
    }
  }, [code, libelle, type]);

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

          {/* Arrêtés CatNat */}
          <div id="Arrêtés CatNat" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Arrêtés de catastrophes naturelles
              </H3>
            </div>
            <ArretesCatnat
              gestionRisques={gestionRisques}
              carteCommunes={carteCommunes}
            />
          </div>

          {/* Faux de forêt */}
          <div id="Feux de forêt" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Départs de feux et surfaces brûlées depuis 2006
              </H3>
            </div>
            <FeuxDeForet incendiesForet={incendiesForet} />
          </div>
        </section>

        {/* Section Bâtiment */}
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

          {/* Retrait-gonflement des argiles */}
          <div id="Retrait-gonflement des argiles" className={styles.indicateurWrapper}>
            {(loadingRga || rgaCarteLoading) ? (
              <div className={styles.loaderTextWrapperStyle}>
                <LoaderText text="Nous chargeons vos données" />
              </div>
            ) : (
              <>
                <div className={styles.h3Titles}>
                  <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                    Retrait-gonflement des argiles
                  </H3>
                </div>
                <RetraitGonflementDesArgiles
                  rgaCarte={rgaCarte}
                  carteCommunes={carteCommunes}
                  rga={rga}
                />
              </>
            )}
          </div>
        </section>
        {
          erosionCotiere.length > 0 && (
            <>
              {/* Section Aménagement */}
              <section className={styles.sectionType}>
                <H2 style={{
                  color: "var(--principales-rouge)",
                  textTransform: 'uppercase',
                  fontSize: '1.75rem',
                  margin: "0 0 -1rem 0",
                  padding: "2rem 2rem 0",
                  fontWeight: 400
                }}>                  🏗️ Aménagement
                </H2>

                {/* Érosion côtière */}
                <div id="Érosion côtière" className={styles.indicateurMapWrapper}>
                  <div className={styles.h3Titles}>
                    <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                      Mouvement du trait de côte
                    </H3>
                  </div>
                  <ErosionCotiereComp
                    erosionCotiere={erosionCotiere}
                    carteCommunes={carteCommunes}
                  />
                </div>
              </section>
            </>
          )
        }
      </div>
    </>
  );
};
