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
        thematique: "Bâtiment & Logement",
        icone: "🏠",
        sousCategories: ["Âge du bâtiment"]
      },
      {
        id: "section3",
        thematique: "Aménagement",
        icone: "🏗️",
        sousCategories: ["Types de sols", "LCZ"]
      },
    ]
  },
  "Biodiversité": {
    thematiquesLiees: [
      {
        id: "section1",
        thematique: "Aménagement",
        icone: "🏗️",
        sousCategories: ["Consommation d'espaces NAF"]
      },
      {
        id: "section2",
        thematique: "Agriculture",
        icone: "🌼",
        sousCategories: ["Surfaces en bio"]
      },
      {
        id: "section3",
        thematique: "Eau",
        icone: "💧",
        sousCategories: ["État écologique des cours d'eau", "Ozone et végétation"]
      }
    ]
  }
};

export const thematiquesInfo: {
  [key: string]: { title: string; description: JSX.Element; link: string };
} = {
  'Continuité des services': {
    title: 'Continuité des services',
    description: (<div></div>),
    link: ''
  },
  'Bâtiment & Logement': {
    title: 'Bâtiment & Logement',
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
          Certaines spécificités locales rendent votre territoire plus ou moins sensible
          à la chaleur. Ces impacts relèvent de thématiques différentes, notamment :
        </Body>
        <div className="flex flex-col">
          <Body size="sm">
            🏥 Santé
          </Body>
          <Body size="sm">
            🏠 Bâtiment & logements
          </Body>
          <Body size="sm">
            🏗️ Aménagement
          </Body>
          <Body size="sm">
            🏖️ Tourisme
          </Body>
        </div>
        <Body size="sm" margin="1rem 0">
          👉 Ensemble, ces facteurs définissent la sensibilité de votre territoire.
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
    link: 'Ressources en eau'
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
  'Agriculture & pêche': {
    title: 'Agriculture & pêche',
    description: (<div></div>),
    link: 'Agriculture'
  },
  'Filière bois': {
    title: 'Filière bois',
    description: (<div></div>),
    link: ''
  }
};
