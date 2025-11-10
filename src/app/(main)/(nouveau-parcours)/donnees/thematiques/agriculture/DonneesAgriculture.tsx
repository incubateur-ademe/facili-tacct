"use client";
import ScrollToHash from "@/components/interactions/ScrollToHash";
import { SourcesSection } from "@/components/interactions/scrollToSource";
import { LoaderText } from "@/components/ui/loader";
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { AgricultureBio, CarteCommunes, SurfacesAgricolesModel, TableCommuneModel } from "@/lib/postgres/models";
import { GetSurfacesAgricoles } from "@/lib/queries/databases/agriculture";
import { GetAgricultureBio } from "@/lib/queries/databases/biodiversite";
import { GetTablecommune } from "@/lib/queries/databases/tableCommune";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { useSearchParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { TypesDeCulture } from '../../indicateurs/agriculture/1-TypesDeCultures';
import { SuperficiesIrriguees } from '../../indicateurs/agriculture/2-SuperficiesIrriguees';
import { SurfacesEnBio } from '../../indicateurs/agriculture/3-SurfacesEnBio';

interface Props {
  carteCommunes: CarteCommunes[];
  surfacesAgricoles: SurfacesAgricolesModel[];
  agricultureBio: AgricultureBio[];
  tableCommune: TableCommuneModel[];
}

export const DonneesAgriculture = ({
  carteCommunes,
  surfacesAgricoles,
  agricultureBio,
  tableCommune
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Agriculture";
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const code = searchParams.get('code')!;
  const ongletsMenu = sommaireThematiques[thematique];
  const [data, setData] = useState({
    carteCommunes,
    surfacesAgricoles,
    agricultureBio,
    tableCommune
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useLayoutEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setIsLoading(true);
    void (async () => {
      const [newCarteCommunes, newSurfacesAgricoles, newAgricultureBio, newTableCommune] = await Promise.all([
        GetCommunes(code, libelle, type),
        GetSurfacesAgricoles(code, libelle, type),
        GetAgricultureBio(libelle, type, code),
        GetTablecommune(code, libelle, type)
      ]);
      setData({ 
        carteCommunes: newCarteCommunes, 
        surfacesAgricoles: newSurfacesAgricoles, 
        agricultureBio: newAgricultureBio,
        tableCommune: newTableCommune
      });
      setIsLoading(false);
    })();
  }, [libelle]);

  return (
    isLoading ? <LoaderText text='Mise à jour des données' /> :
      <div className={styles.explorerMesDonneesContainer}>
        <ScrollToHash />
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Entre force et fragilité, découvrez les facteurs qui font basculer l'agriculture face au changement climatique.
        </H1>
        {/* Introduction */}
        <section>
          <Body size='lg'>
            Ces quelques indicateurs vous aideront à poser les bonnes questions, le terrain vous donnera les vraies réponses.
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
          {/* Types de cultures */}
          <div id="Types de culture" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Surface agricole par type de culture
              </H3>
            </div>
            <TypesDeCulture
              surfacesAgricoles={data.surfacesAgricoles}
              // agriculture={data.agriculture}
              tableCommune={data.tableCommune}
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
              // agriculture={data.agriculture}
              tableCommune={data.tableCommune}
              carteCommunes={data.carteCommunes}
            />
          </div>
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
            {ongletsMenu.thematiquesLiees[2].icone}{" "}{ongletsMenu.thematiquesLiees[2].thematique}
          </H2>
          {/* Surfaces en bio */}
          <div id="Surfaces en bio" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Part de l’agriculture biologique
              </H3>
            </div>
            <SurfacesEnBio agricultureBio={data.agricultureBio} />
          </div>
        </section>
        {/* Sources */}
        <SourcesSection tag="h2" thematique="agriculture" />
      </div>
  );
};
