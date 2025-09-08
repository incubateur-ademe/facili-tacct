type NoeudRoue = {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  color: string;
  textColor: string;
  labelRadius?: number;
  category?: string;
  originalIndex?: number;
};

export const nodeCategoryMapping = {
  // Cadre de vie
  'Continuité des services': 'Cadre de vie',
  Bâtiment: 'Cadre de vie',
  Aménagement: 'Cadre de vie',
  'Confort thermique': 'Cadre de vie',
  Santé: 'Cadre de vie',
  'Gestion des risques': 'Cadre de vie',
  // Ressources naturelle
  Forêts: 'Ressources naturelles',
  Eau: 'Ressources naturelles',
  Biodiversité: 'Ressources naturelles',
  Air: 'Ressources naturelles',
  // Ressources économiques
  Entreprises: 'Ressources économiques',
  Tourisme: 'Ressources économiques',
  'Agriculture': 'Ressources économiques',
  'Filière bois': 'Ressources économiques'
};

export const nomThematiques = [
  {
    label: 'Continuité des services',
    labelRadius: 280,
    icon: '🏥',
    disabled: true,
    liens: []
  },
  {
    label: 'Bâtiment',
    labelRadius: 260,
    icon: '🏠',
    disabled: true,
    liens: []
  },
  {
    label: 'Confort thermique',
    labelRadius: 250,
    icon: '🌡️',
    disabled: false,
    liens: ['Santé', 'Aménagement', 'Bâtiment', 'Tourisme']
  },
  { label: 'Santé', icon: '🏥', disabled: true },
  {
    label: 'Gestion des risques',
    labelRadius: 270,
    icon: '⚠️',
    disabled: false
  },
  { label: 'Aménagement', labelRadius: 290, icon: '🏗️', disabled: false },
  { label: 'Forêts', labelRadius: 260, icon: '🌳', disabled: true, liens: [] },
  { label: 'Eau', icon: '💧', disabled: false },
  {
    label: 'Biodiversité',
    labelRadius: 260,
    icon: '🌼',
    disabled: false,
    liens: [
      'Aménagement',
      'Agriculture',
      'Tourisme',
      'Eau',
      'Air',
      'Gestion des risques'
    ]
  },
  { label: 'Air', labelRadius: 240, icon: '🌬️', disabled: true, liens: [] },
  {
    label: 'Tourisme',
    labelRadius: 240,
    icon: '🏖️',
    disabled: true,
    liens: []
  },
  {
    label: 'Entreprises',
    labelRadius: 260,
    icon: '🏢',
    disabled: true,
    liens: []
  },
  {
    label: 'Filière bois',
    labelRadius: 275,
    icon: '🌲',
    disabled: true,
    liens: []
  },
  {
    label: 'Agriculture',
    labelRadius: 280,
    icon: '🌾',
    disabled: false
  }
];

// liens entre les thématiques
export const liensEntreThematiques = [
  // Aménagement
  {
    source: 'Aménagement',
    target: 'Continuité des services',
    curve: 1,
    curveRadius: 0.3
  },
  {
    source: 'Aménagement',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.7
  },
  {
    source: 'Aménagement',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 1
  },
  {
    source: 'Aménagement',
    target: 'Biodiversité',
    curve: 1,
    curveRadius: 0.37
  },
  // Eau
  {
    source: 'Eau',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.3
  },
  {
    source: 'Eau',
    target: 'Tourisme',
    curve: 1,
    curveRadius: 0.4
  },
  {
    source: 'Eau',
    target: 'Biodiversité',
    curve: 1,
    curveRadius: 0.8
  },
  {
    source: 'Eau',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.4
  },
  // Agriculture
  {
    source: 'Agriculture',
    target: 'Eau',
    curve: 1,
    curveRadius: 0.1
  },
  {
    source: 'Agriculture',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.3
  },
  {
    source: 'Agriculture',
    target: 'Biodiversité',
    curve: 1,
    curveRadius: 0.2
  },
  // Biodiversité
  {
    source: 'Biodiversité',
    target: 'Agriculture',
    curve: 1,
    curveRadius: 0.2
  },
  {
    source: 'Biodiversité',
    target: 'Aménagement',
    curve: 1,
    curveRadius: 0.37
  },
  {
    source: 'Biodiversité',
    target: 'Tourisme',
    curve: 1,
    curveRadius: 0.6
  },
  {
    source: 'Biodiversité',
    target: 'Eau',
    curve: 1,
    curveRadius: 0.8
  },
  {
    source: 'Biodiversité',
    target: 'Air',
    curve: 1,
    curveRadius: 0.8
  },
  // Confort thermique
  {
    source: 'Confort thermique',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.8
  },
  {
    source: 'Confort thermique',
    target: 'Bâtiment',
    curve: 1,
    curveRadius: 1
  },
  {
    source: 'Confort thermique',
    target: 'Aménagement',
    curve: 1,
    curveRadius: 0.5
  },
  {
    source: 'Confort thermique',
    target: 'Tourisme',
    curve: 1,
    curveRadius: 0.1
  },
  // Gestion des risques
  {
    source: 'Gestion des risques',
    target: 'Santé',
    curve: 1,
    curveRadius: 1
  },
  {
    source: 'Gestion des risques',
    target: 'Confort thermique',
    curve: 1,
    curveRadius: 0.7
  },
  {
    source: 'Gestion des risques',
    target: 'Bâtiment',
    curve: 1,
    curveRadius: 0.5
  },
  {
    source: 'Gestion des risques',
    target: 'Continuité des services',
    curve: 1,
    curveRadius: 0.38
  },
  {
    source: 'Gestion des risques',
    target: 'Filière bois',
    curve: 1,
    curveRadius: 0.15
  },
  {
    source: 'Gestion des risques',
    target: 'Agriculture',
    curve: 1,
    curveRadius: 0.25
  },
  {
    source: 'Gestion des risques',
    target: 'Tourisme',
    curve: 1,
    curveRadius: 0.05
  },
  {
    source: 'Gestion des risques',
    target: 'Entreprises',
    curve: -1,
    curveRadius: 0.05
  },
  {
    source: 'Gestion des risques',
    target: 'Air',
    curve: 1,
    curveRadius: 0.15
  },
  {
    source: 'Gestion des risques',
    target: 'Biodiversité',
    curve: 1,
    curveRadius: 0.28
  },
  {
    source: 'Gestion des risques',
    target: 'Eau',
    curve: 1,
    curveRadius: 0.4
  },
  {
    source: 'Gestion des risques',
    target: 'Forêts',
    curve: 1,
    curveRadius: 0.6
  },
  {
    source: 'Gestion des risques',
    target: 'Aménagement',
    curve: 1,
    curveRadius: 1
  }
];

// Grouper les nœuds par catégorie avec leurs indices d'origine
export const categoriesNoeuds = {
  'Cadre de vie': [] as NoeudRoue[],
  'Ressources naturelles': [] as NoeudRoue[],
  'Ressources économiques': [] as NoeudRoue[]
};

export const PositionArcsDonut = (
  category: string
): { startAngle: number; endAngle: number } => {
  let startAngle = 0;
  let endAngle = 0;

  if (category === 'Cadre de vie') {
    startAngle = (4 * 2 * Math.PI) / 14 + 0.02; // Position de départ (en radians)
    endAngle = (10 * 2 * Math.PI) / 14 - 0.02; // Position de fin (en radians)
  } else if (category === 'Ressources naturelles') {
    startAngle = (10 * 2 * Math.PI) / 14 + 0.02;
    endAngle = ((2 * Math.PI) / 14) * 14 - 0.02;
  } else if (category === 'Ressources économiques') {
    startAngle = 0 + 0.02;
    endAngle = (4 * 2 * Math.PI) / 14 - 0.02;
  }

  return { startAngle, endAngle };
};
