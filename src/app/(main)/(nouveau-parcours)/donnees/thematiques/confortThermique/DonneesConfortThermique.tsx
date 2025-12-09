'use client';
import DiagnoticImage from '@/assets/images/diagnostiquer_impacts.png';
import ScrollToHash from '@/components/interactions/ScrollToHash';
import { LoaderText } from '@/components/ui/loader';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H1, H2, H3 } from '@/design-system/base/Textes';
import { handleRedirectionThematique } from '@/hooks/Redirections';
import { CarteCommunes, ConfortThermique, InconfortThermique } from '@/lib/postgres/models';
import { GetConfortThermique, GetInconfortThermique } from "@/lib/queries/databases/inconfortThermique";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { sommaireThematiques } from '../../../thematiques/constantes/textesThematiques';
import styles from '../../explorerDonnees.module.scss';
import { GrandAge75 } from '../../indicateurs/confortThermique/1-GrandAge75';
import { PrecariteEnergetique } from '../../indicateurs/confortThermique/2-PrecariteEnergetique';
import { EmploisEnExterieur } from '../../indicateurs/confortThermique/3-EmploisExterieurs';
import { DateConstructionResidences } from '../../indicateurs/confortThermique/4-DateConstructionResidences';
import { LCZ } from '../../indicateurs/confortThermique/6-LCZ';

const DonneesConfortThermique = ({
  carteCommunes,
  inconfortThermique,
  confortThermique
}: {
  carteCommunes: CarteCommunes[];
  inconfortThermique: InconfortThermique[];
  confortThermique: ConfortThermique[];
}) => {
  const searchParams = useSearchParams();
  const params = usePathname();
  const thematique = searchParams.get('thematique') as "Confort thermique";
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const [data, setData] = useState({ carteCommunes, inconfortThermique, confortThermique });
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const ongletsMenu = sommaireThematiques[thematique];

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setIsLoading(true);
    void (async () => {
      const [newCarteCommunes, newInconfortThermique, newConfortThermique] = await Promise.all([
        GetCommunes(code, libelle, type),
        GetInconfortThermique(code, libelle, type),
        GetConfortThermique(code, libelle, type)
      ]);
      setData({ carteCommunes: newCarteCommunes, inconfortThermique: newInconfortThermique, confortThermique: newConfortThermique });
      setIsLoading(false);
    })();
  }, [libelle]);

  // Refetch({
  //   isFirstRender,
  //   setIsFirstRender,
  //   fetchFunctions: [
  //     () => GetCommunes(code, libelle, type),
  //     () => GetInconfortThermique(code, libelle, type)
  //   ],
  //   setData,
  //   setIsLoading,
  //   param: libelle
  // })

  return (
    isLoading ? <LoaderText text='Mise à jour des données' /> :
      <div className={styles.explorerMesDonneesContainer}>
        <ScrollToHash />
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Découvrez les facteurs qui font grimper l’inconfort thermique
        </H1>

        {/* Introduction */}
        <section>
          <Body size='lg'>
            Ces quelques indicateurs vous aideront à poser les bonnes
            questions, le terrain (étape 2) vous donnera les vraies réponses.
          </Body>
        </section>

        {/* Section Santé */}
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

          {/* Grand âge */}
          <div id="Grand âge" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Évolution de la part des 75 ans et plus dans la population
              </H3>
            </div>
            <GrandAge75 confortThermique={data.confortThermique} />
          </div>

          {/* Précarité énergétique */}
          <div id="Précarité énergétique" className={styles.indicateurMapWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Part des ménages en situation de précarité énergétique liée au logement
              </H3>
            </div>
            {data.carteCommunes ? <PrecariteEnergetique carteCommunes={data.carteCommunes} /> : <LoaderText text='Chargement de la cartographie' />}
          </div>

          {/* Emplois en extérieur */}
          <div id="Emplois en extérieur" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Part des emplois par grands secteurs d’activité
              </H3>
            </div>
            <EmploisEnExterieur inconfortThermique={data.confortThermique} />
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
          {/* Âge du bâtiment */}
          <div id="Âge du bâtiment" className={styles.indicateurWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Part des résidences principales par période de construction
              </H3>
            </div>
            <DateConstructionResidences inconfortThermique={data.confortThermique} />
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
          {/* Types de sols */}
          {/* <div id="Types de sols" className={styles.indicateurMapWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
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
        </div> */}
          {/* LCZ */}
          <div id="LCZ" className={styles.indicateurMapWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Cartographie des zones climatiques locales (LCZ)
              </H3>
            </div>
            <LCZ carteCommunes={data.carteCommunes} />
          </div>
        </section>
        <div className={styles.redirectionEtape2Wrapper} >
          <Image
            src={DiagnoticImage}
            alt=""
            style={{ width: '100%', height: 'auto', maxWidth: "180px" }}
          />
          <div className={styles.textBloc} >
            <Body style={{ fontSize: "20px", color: "var(--gris-dark)", fontWeight: 700, maxWidth: "700px" }}>
              Ces pistes d'investigation en main, partez découvrir sur le
              terrain comment votre territoire vit concrètement les enjeux de confort thermique.
            </Body>
            <BoutonPrimaireClassic
              size='lg'
              text='Diagnostiquer les impacts'
              link={handleRedirectionThematique({
                code: code,
                libelle: libelle,
                type: type as 'epci' | 'commune' | 'pnr' | 'petr' | 'departement',
                page: params === "/iframe/donnees" ? "iframe/impacts" : 'impacts',
                thematique: "Confort thermique",
                anchor: ""
              })}
              posthogEventName='clic_diagnostic_impact'
              thematique='Confort thermique'
            />
          </div>
        </div>
      </div>
  );
};

export default DonneesConfortThermique;
