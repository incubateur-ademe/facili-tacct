import { Body } from "@/design-system/base/Textes";
import { JSX } from "react";

export const sommaireThematiques = {
  "Confort thermique": {
    thematiquesLiees: [
      {
        id: "section1",
        thematique: "Santé",
        icone: "🏥",
        sousCategories: ["Grand âge", "Précarité énergétique", "Emplois en extérieur"]
      },
      {
        id: "section2",
        thematique: "Bâtiment",
        icone: "🏠",
        sousCategories: ["Âge du bâtiment"]
      },
      {
        id: "section3",
        thematique: "Aménagement",
        icone: "🏗️",
        sousCategories: ["LCZ"]
      },
    ]
  },
  "Biodiversité": {
    thematiquesLiees: [
      {
        id: "section1",
        thematique: "Biodiversité",
        icone: "🌼",
        sousCategories: ["Ozone et végétation"]
      },
      {
        id: "section2",
        thematique: "Aménagement",
        icone: "🏗️",
        sousCategories: ["Consommation d'espaces NAF", "Types de sols"]
      },
      {
        id: "section3",
        thematique: "Agriculture",
        icone: "🌾",
        sousCategories: ["Surfaces en bio"]
      },
      {
        id: "section4",
        thematique: "Eau",
        icone: "💧",
        sousCategories: ["État écologique des cours d'eau"]
      }
    ]
  },
  "Gestion des risques": {
    thematiquesLiees: [
      {
        id: "section1",
        thematique: "Gestion des risques",
        icone: "🚧",
        sousCategories: ["Arrêtés CatNat", "Feux de forêt"]
      },
      {
        id: "section2",
        thematique: "Bâtiment",
        icone: "🏠",
        sousCategories: ["Retrait-gonflement des argiles"]
      },
    ]
  },
  "Agriculture": {
    thematiquesLiees: [
      {
        id: "section1",
        thematique: "Agriculture",
        icone: "🌾",
        sousCategories: ["Surfaces en bio", "Types de culture"]
      },
      {
        id: "section2",
        thematique: "Eau",
        icone: "💧",
        sousCategories: ["Superficies irriguées"]
      },
    ]
  },
  "Aménagement": {
    thematiquesLiees: [
      {
        id: "section1",
        thematique: "Aménagement",
        icone: '🏗️',
        sousCategories: ["Consommation d'espaces NAF", "LCZ"]
      },
    ]
  },
  "Eau": {
    thematiquesLiees: [
      {
        id: "section1",
        thematique: "Eau",
        icone: '💧',
        sousCategories: ["Ressources en eau", "État écologique des cours d'eau"]
      },
    ]
  }
};

export const sommaireImpacts = {
  "Confort thermique": [
    {
      id: "section1",
      titre: "Échanger pour diagnostiquer",
    },
    {
      id: "section2",
      titre: "Prendre RDV avec TACCT",
    },
  ],
  "Biodiversité": [],
  "Gestion des risques": [],
  "Agriculture": [],
  "Aménagement": [],
  "Eau": []
};


export const thematiquesInfo: {
  [key: string]: { title: string; description: JSX.Element; link: string };
} = {
  'Continuité des services': {
    title: 'Continuité des services',
    description: (<div></div>),
    link: ''
  },
  'Bâtiment': {
    title: 'Bâtiment',
    description: (<div></div>),
    link: ''
  },
  Aménagement: {
    title: 'Aménagement',
    description: (<div></div>),
    link: 'Aménagement'
  },
  'Confort thermique': {
    title: 'Confort thermique',
    description: (
      <div>
        <Body size="sm">
          Les vagues de chaleur qui se multiplient n’affectent pas
          tous les territoires de la même manière.
        </Body>
        <Body size="sm" margin="1rem 0">
          Certaines spécificités locales rendent votre territoire plus ou moins sensible à la
          chaleur. Elles relèvent de thématiques différentes, notamment :
        </Body>
        <div className="flex flex-col">
          <Body size="sm">
            🏥 Santé
          </Body>
          <Body size="sm">
            🏠 Bâtiment
          </Body>
          <Body size="sm">
            🏗️ Aménagement
          </Body>
          <Body size="sm">
            🏖️ Tourisme
          </Body>
        </div>
        <Body size="sm" margin="1rem 0">
          👉 Ces facteurs combinés déterminent la sensibilité globale de votre territoire face à la chaleur.
        </Body>
      </div>
    ),
    link: 'Confort thermique'
  },
  'Gestion des risques': {
    title: 'Gestion des risques',
    description: (<div></div>),
    link: 'Gestion des risques'
  },
  Santé: {
    title: 'Santé',
    description: (<div></div>),
    link: ''
  },
  Forêts: {
    title: 'Forêts',
    description: (<div></div>),
    link: ''
  },
  Eau: {
    title: 'Eau',
    description: (<div></div>),
    link: 'Eau'
  },
  Biodiversité: {
    title: 'Biodiversité',
    description: (<div></div>),
    link: 'Biodiversité'
  },
  Air: {
    title: 'Air',
    description: (<div></div>),
    link: ''
  },
  Entreprises: {
    title: 'Entreprises',
    description: (<div></div>),
    link: ''
  },
  Tourisme: {
    title: 'Tourisme',
    description: (<div></div>),
    link: ''
  },
  'Agriculture': {
    title: 'Agriculture',
    description: (
      <div>
        <Body size="sm" style={{ marginBottom: '1rem' }}>
          Agriculture, eau potable, milieux naturels, tourisme… : les
          équilibres de votre territoire résisteront-ils au changement climatique ?
        </Body>
        <div className="flex flex-col">
          <Body size="sm">
            💧 Eau
          </Body>
          <Body size="sm">
            🌼 Biodiversité
          </Body>
          <Body size="sm">
            🏥 Santé
          </Body>
          <Body size="sm">
            🏖️ Tourisme
          </Body>
        </div>
        <Body size="sm" margin="1rem 0">
          👉 Explorez les facteurs de sensibilité qui feront la différence.
        </Body>
      </div>
    ),
    link: 'Agriculture'
  },
  'Sylviculture': {
    title: 'Sylviculture',
    description: (<div></div>),
    link: ''
  }
};
