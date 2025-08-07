'use client';

import HautDePageIcon from '@/assets/icons/haut_de_page_icon_white.svg';
import { Body, H2, H3 } from '@/design-system/base/Textes';
import { CommunesContourMapper } from '@/lib/mapper/communes';
import { CarteCommunes } from '@/lib/postgres/models';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { sommaireThematiques } from '../../roue-systemique/constantes/textesThematiques';
import styles from '../explorerDonnees.module.scss';
import { MicroCircleGrid, MicroRemplissageTerritoire } from './MicroDataviz';

const ExplorerConfortThermique = ({
  carteCommunes
}: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const libelle = searchParams.get('libelle');
  const typeTerritoire = searchParams.get('type');
  const thematique = searchParams.get('thematique') as "Confort thermique";
  const territoireContourMap = carteCommunes.map(CommunesContourMapper);
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
      <div className={styles.retourHautDePageWrapper}>
        <div className={styles.retourHautDePageBouton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image
            src={HautDePageIcon}
            alt="Retour en haut de page"
            width={24}
            height={24}
          />
        </div>
        <Body size='sm'>
          Haut de page
        </Body>
      </div>
      {/* Introduction */}
      <section>
        <Body size='lg'>
          Les indicateurs qui vont suivre vous orientent sur les typologies
          de personnes potentiellement impactées par l'inconfort thermique
          et les facteurs qui accentuent ce phénomène sur votre territoire.
          En revanche, seule votre enquête terrain vous révélera les impacts réels.
        </Body>
      </section>

      {/* Première section */}
      <section className={styles.sectionType}>
        {/* Premier élément */}
        <div id="Grand âge" className={styles.thematiqueWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0 0 0.75rem" }}>
            {ongletsMenu.thematiquesLiees[0].icone}{" "}{ongletsMenu.thematiquesLiees[0].thematique}
          </H2>
          <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
            Évolution de la part des 80 ans et plus dans la population
          </H3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Ceci est le contenu du premier élément. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Deuxième élément */}
        <div id="Précarité énergétique" className={styles.thematiqueWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Précarité énergétique
          </h3>
          <MicroRemplissageTerritoire
            territoireContours={territoireContourMap}
            pourcentage={20}
          />
          <MicroCircleGrid
            pourcentage={29}
            arrondi={1}
          />
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Contenu du deuxième élément. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>

        {/* Troisième élément */}
        <div id="Emplois en extérieur" className={styles.thematiqueWrapper}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Emplois en extérieur
          </h3>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Contenu du troisième élément. Eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-gray-700">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
          </div>
        </div>
      </section>

      {/* Deuxième section */}
      <section className={styles.sectionType}>
        {/* Quatrième élément */}
        <div id="Âge du bâtiment" className={styles.thematiqueWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0 0 0.75rem" }}>
            {ongletsMenu.thematiquesLiees[1].icone}{" "}{ongletsMenu.thematiquesLiees[1].thematique}
          </H2>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Âge du bâtiment
          </h3>
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Contenu du quatrième élément. Voluptatem sequi nesciunt neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>
            <p className="text-gray-700">
              Adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </section>

      {/* Troisième section */}
      <section className={styles.sectionType}>

        {/* Cinquième élément */}
        <div id="Types de sols" className={styles.thematiqueWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0 0 0.75rem" }}>
            {ongletsMenu.thematiquesLiees[2].icone}{" "}{ongletsMenu.thematiquesLiees[2].thematique}
          </H2>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Types de sols
          </h3>
          <div className="bg-red-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Contenu du cinquième élément. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam.
            </p>
            <p className="text-gray-700">
              Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae.
            </p>
          </div>
        </div>

        {/* Sixième élément */}
        <div id="LCZ" className={styles.thematiqueWrapper}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            LCZ
          </h3>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Contenu du sixième élément. Consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </p>
            <p className="text-gray-700">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
            </p>
          </div>
        </div>
      </section>

      {/* Quatrième section */}
      <section className={styles.sectionType}>

        {/* Septième élément */}
        <div id="Indicateur tourisme" className={styles.thematiqueWrapper} >
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0 0 0.75rem" }}>
            {ongletsMenu.thematiquesLiees[3].icone}{" "}{ongletsMenu.thematiquesLiees[3].thematique}
          </H2>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Indicateur tourisme
          </h3>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Contenu du septième élément. Eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-gray-700">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExplorerConfortThermique;
