'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const ExplorerTerritoirePage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const libelle = searchParams.get('libelle');
  const typeTerritoire = searchParams.get('type');

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
    <div className="max-w-4xl mx-auto p-8 space-y-16">
      {/* Introduction */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Explorer mon territoire
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Bienvenue sur la page d'exploration de votre territoire.
          Utilisez le menu latéral pour naviguer entre les différentes sections
          et découvrir les informations disponibles.
        </p>
      </section>

      {/* Première section */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">
          SANTÉ
        </h2>

        {/* Premier élément */}
        <div id="Grand âge" className="scroll-mt-24">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Grand âge
          </h3>
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
        <div id="Précarité énergétique" className="scroll-mt-24">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Précarité énergétique
          </h3>
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
        <div id="Emplois en extérieur" className="scroll-mt-24">
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
      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">
          BATIMENT & LOGEMENT
        </h2>

        {/* Quatrième élément */}
        <div id="Âge du bâtiment" className="scroll-mt-24">
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
      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">
          AMÉNAGEMENT
        </h2>

        {/* Cinquième élément */}
        <div id="Types de sols" className="scroll-mt-24">
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
        <div id="LCZ" className="scroll-mt-24">
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
      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">
          TOURISME
        </h2>

        {/* Septième élément */}
        <div id="Indicateur tourisme" className="scroll-mt-24">
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

    </div>
  );
};

export default ExplorerTerritoirePage;
