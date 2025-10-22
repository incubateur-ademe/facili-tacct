"use client";
import ScrollToHash from '@/components/interactions/ScrollToHash';
import { LoaderText } from '@/components/ui/loader';
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { ArreteCatNat, CarteCommunes, DebroussaillementModel, ErosionCotiere, IncendiesForet, RGACarte, RGAdb } from "@/lib/postgres/models";
import { GetArretesCatnat, GetIncendiesForet } from '@/lib/queries/databases/gestionRisques';
import { GetCommunes, GetDebroussaillement, GetErosionCotiere } from '@/lib/queries/postgis/cartographie';
import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { ArretesCatnat } from '../../indicateurs/gestionDesRisques/1-ArretesCatnat';
import { FeuxDeForet } from '../../indicateurs/gestionDesRisques/2-FeuxDeForet';
import { ErosionCotiereComp } from '../../indicateurs/gestionDesRisques/3-ErosionCotiere';
import { RetraitGonflementDesArgiles } from '../../indicateurs/gestionDesRisques/4-RetraitGonflementDesArgiles';
import { Debroussaillement } from '../../indicateurs/gestionDesRisques/5-Debroussaillement';

interface Props {
  gestionRisques: ArreteCatNat[];
  carteCommunes: CarteCommunes[];
  erosionCotiere: [ErosionCotiere[], string] | [];
  incendiesForet: IncendiesForet[];
  debroussaillement: DebroussaillementModel[];
}

export const DonneesGestionRisques = ({
  carteCommunes,
  gestionRisques,
  erosionCotiere,
  incendiesForet,
  debroussaillement
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
  const [data, setData] = useState({
    carteCommunes,
    gestionRisques,
    erosionCotiere,
    incendiesForet,
    debroussaillement
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
        newCarteCommunes,
        newGestionRisques,
        newErosionCotiere,
        newIncendiesForet,
        newDebroussaillement
      ] = await Promise.all([
        GetCommunes(code, libelle, type),
        GetArretesCatnat(code, libelle, type),
        GetErosionCotiere(code, libelle, type),
        GetIncendiesForet(code, libelle, type),
        GetDebroussaillement(code, libelle, type)
      ]);
      setData({
        carteCommunes: newCarteCommunes,
        gestionRisques: newGestionRisques,
        erosionCotiere: newErosionCotiere,
        incendiesForet: newIncendiesForet,
        debroussaillement: newDebroussaillement
      });
      setIsLoading(false);
    })();
  }, [libelle]);

  useEffect(() => {
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
      });
  }, [code, libelle, type]);

  return (
    isLoading ? <LoaderText text='Mise à jour des données' /> :
      <div className={styles.explorerMesDonneesContainer}>
        <ScrollToHash />
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Comme le montre la multiplication des catastrophes naturelles, chaque territoire
          fait face à des impacts climatiques spécifiques. Visualisez quelques indicateurs
          qui dessinent votre profil de risque.
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

          {/* Arrêtés CatNat */}
          <div id="Arrêtés CatNat" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Arrêtés de catastrophes naturelles
              </H3>
            </div>
            <ArretesCatnat
              gestionRisques={data.gestionRisques}
              carteCommunes={data.carteCommunes}
            />
          </div>

          {/* Faux de forêt */}
          <div id="Feux de forêt" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Départs de feux et surfaces brûlées depuis 2006
              </H3>
            </div>
            <FeuxDeForet incendiesForet={data.incendiesForet} />
          </div>

          {/* Débroussailement */}
          <div id="Débroussailement" className={styles.indicateurMapWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Débroussailement
              </H3>
            </div>
            <Debroussaillement
              debroussaillement={data.debroussaillement}
              carteCommunes={data.carteCommunes}
            />
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
                  carteCommunes={data.carteCommunes}
                  rga={rga}
                />
              </>
            )}
          </div>
        </section>
        {
          data.erosionCotiere.length > 0 && (
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
                }}>
                  🏗️ Aménagement
                </H2>

                {/* Érosion côtière */}
                <div id="Érosion côtière" className={styles.indicateurMapWrapper}>
                  <div className={styles.h3Titles}>
                    <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                      Érosion côtière
                    </H3>
                  </div>
                  <ErosionCotiereComp
                    erosionCotiere={data.erosionCotiere as [ErosionCotiere[], string]}
                    carteCommunes={data.carteCommunes}
                  />
                </div>
              </section>
            </>
          )
        }
      </div>
  );
};
