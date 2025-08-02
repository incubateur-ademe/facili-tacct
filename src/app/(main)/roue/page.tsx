'use client';

import { useState } from 'react';
import RoueSystemique from './roue';

const RouePage = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // Données des liens entre items (copiées depuis roue.tsx)
  const itemLinks = [
    { source: "Continuité des services", target: "Eau" },
    { source: "Gestion des risques", target: "Santé" },
    { source: "Confort thermique", target: "Santé" },
    { source: "Bâtiment & Logement", target: "Santé" },
    { source: "Continuité des services", target: "Santé" },
    { source: "Filière bois", target: "Santé" },
    { source: "Agriculture & pêche", target: "Santé" },
    { source: "Tourisme", target: "Santé" },
    { source: "Entreprises", target: "Santé" },
    { source: "Air", target: "Santé" },
    { source: "Biodiversité", target: "Santé" },
    { source: "Eau", target: "Santé" },
    { source: "Forêts", target: "Santé" },
    { source: "Aménagement", target: "Santé" },
  ];

  // Fonction pour récupérer les items liés à celui sélectionné
  const getLinkedItems = (selectedItemName: string | null): string[] => {
    if (!selectedItemName) return [];

    const linkedItems: string[] = [];

    itemLinks.forEach(link => {
      if (link.source === selectedItemName) {
        linkedItems.push(link.target);
      } else if (link.target === selectedItemName) {
        linkedItems.push(link.source);
      }
    });

    return [...new Set(linkedItems)]; // Supprimer les doublons
  };

  // Données d'exemple pour chaque item (à remplacer par vos vraies données)
  const itemInfo: { [key: string]: { title: string; description: string; details: string[] } } = {
    "Continuité des services": {
      title: "Continuité des services",
      description: "Services essentiels maintenus malgré les changements climatiques",
      details: [
        "Adaptation des infrastructures publiques",
        "Plans de continuité d'activité",
        "Résilience des réseaux de transport",
        "Maintien des services de santé"
      ]
    },
    "Bâtiment & Logement": {
      title: "Bâtiment & Logement",
      description: "Adaptation du parc immobilier aux enjeux climatiques",
      details: [
        "Isolation thermique renforcée",
        "Systèmes de refroidissement passif",
        "Matériaux durables et locaux",
        "Rénovation énergétique"
      ]
    },
    "Aménagement": {
      title: "Aménagement",
      description: "Planification territoriale adaptée au climat",
      details: [
        "Espaces verts urbains",
        "Gestion des eaux pluviales",
        "Îlots de fraîcheur",
        "Urbanisme durable"
      ]
    },
    "Confort thermique": {
      title: "Confort thermique",
      description: "Maintien du confort dans les bâtiments",
      details: [
        "Solutions de rafraîchissement passif",
        "Isolation performante",
        "Ventilation naturelle",
        "Protection solaire"
      ]
    },
    "Gestion des risques": {
      title: "Gestion des risques",
      description: "Prévention et gestion des risques climatiques",
      details: [
        "Plans de prévention des risques",
        "Systèmes d'alerte précoce",
        "Infrastructure résiliente",
        "Gestion de crise"
      ]
    },
    "Santé": {
      title: "Santé",
      description: "Protection de la santé publique face aux risques climatiques",
      details: [
        "Surveillance des maladies vectorielles",
        "Plans canicule et grand froid",
        "Qualité de l'air et allergie",
        "Adaptation des établissements de santé"
      ]
    },
    "Forêts": {
      title: "Forêts",
      description: "Gestion durable des écosystèmes forestiers",
      details: [
        "Adaptation des essences",
        "Gestion des risques d'incendie",
        "Séquestration carbone",
        "Biodiversité forestière"
      ]
    },
    "Eau": {
      title: "Eau",
      description: "Gestion durable de la ressource en eau",
      details: [
        "Économies d'eau",
        "Stockage et réutilisation",
        "Protection des nappes",
        "Gestion des sécheresses"
      ]
    },
    "Biodiversité": {
      title: "Biodiversité",
      description: "Préservation de la diversité biologique",
      details: [
        "Corridors écologiques",
        "Espèces protégées",
        "Habitats naturels",
        "Adaptation écosystémique"
      ]
    },
    "Air": {
      title: "Air",
      description: "Amélioration de la qualité de l'air",
      details: [
        "Réduction des polluants",
        "Mobilité durable",
        "Végétalisation urbaine",
        "Surveillance de la qualité"
      ]
    },
    "Entreprises": {
      title: "Entreprises",
      description: "Adaptation du tissu économique local",
      details: [
        "Plans de continuité d'activité",
        "Innovation climatique",
        "Emplois verts",
        "Résilience économique"
      ]
    },
    "Tourisme": {
      title: "Tourisme",
      description: "Adaptation du secteur touristique",
      details: [
        "Tourisme durable",
        "Saisonnalité adaptée",
        "Infrastructures résilientes",
        "Offre climatique"
      ]
    },
    "Agriculture & pêche": {
      title: "Agriculture & pêche",
      description: "Adaptation des pratiques agricoles et halieutiques",
      details: [
        "Variétés résistantes",
        "Gestion de l'eau agricole",
        "Sols et fertilité",
        "Pêche durable"
      ]
    },
    "Filière bois": {
      title: "Filière bois",
      description: "Développement de la filière bois locale",
      details: [
        "Bois construction",
        "Circuit court",
        "Transformation locale",
        "Matériau biosourcé"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 transition-all duration-500 ease-in-out">
      <div className="flex h-screen">
        {/* Composant RoueSystemique */}
        <div
          className={`transition-all duration-500 ease-in-out ${selectedItem ? 'w-2/3' : 'w-full'
            }`}
        >
          <div className="h-full flex items-center justify-center p-4">
            <RoueSystemique
              onItemSelect={setSelectedItem}
              selectedItem={selectedItem}
            />
          </div>
        </div>

        {/* Panneau d'informations (côté droit) */}
        <div
          className={`transition-all duration-500 ease-in-out bg-white shadow-xl ${selectedItem ? 'w-1/3 opacity-100' : 'w-0 opacity-0'
            } overflow-hidden`}
        >
          {selectedItem && itemInfo[selectedItem] && (
            <div className="h-full p-6 overflow-y-auto">
              {/* Bouton de fermeture */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Informations détaillées
                </h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Contenu de l'item sélectionné */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    {itemInfo[selectedItem].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {itemInfo[selectedItem].description}
                  </p>
                </div>

                {/* Section des items liés */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Items liés :
                  </h4>
                  {getLinkedItems(selectedItem).length > 0 ? (
                    <div className="space-y-2">
                      {getLinkedItems(selectedItem).map((linkedItem, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() => setSelectedItem(linkedItem)}
                        >
                          <span className="text-blue-500 mr-2">→</span>
                          <span className="text-gray-700 font-medium">{linkedItem}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">Aucun item lié</p>
                  )}
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Points clés :
                  </h4>
                  <ul className="space-y-2">
                    {itemInfo[selectedItem].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Espace pour du contenu supplémentaire */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">
                    Actions recommandées
                  </h4>
                  <p className="text-blue-700 text-sm">
                    Contenu spécifique selon l'item sélectionné...
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouePage;
