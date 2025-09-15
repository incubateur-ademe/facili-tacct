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
  'Gestion des risques': 'Cadre de vie',
  Santé: 'Cadre de vie',
  // Ressources naturelle
  Forêts: 'Ressources naturelles',
  Eau: 'Ressources naturelles',
  Biodiversité: 'Ressources naturelles',
  Air: 'Ressources naturelles',
  // Ressources économiques
  Entreprises: 'Ressources économiques',
  Tourisme: 'Ressources économiques',
  Agriculture: 'Ressources économiques',
  Sylviculture: 'Ressources économiques'
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
    labelRadius: 270,
    icon: '🏠',
    disabled: true,
    liens: []
  },
  {
    label: 'Confort thermique',
    labelRadius: 260,
    icon: '🌡️',
    disabled: false,
    liens: ['Santé', 'Aménagement', 'Bâtiment', 'Tourisme']
  },
  {
    label: 'Gestion des risques',
    labelRadius: 260,
    icon: '⚠️',
    disabled: false
  },
  { label: 'Santé', icon: '🏥', disabled: true },
  { label: 'Aménagement', labelRadius: 290, icon: '🏗️', disabled: false },
  { label: 'Forêts', labelRadius: 250, icon: '🌳', disabled: true, liens: [] },
  { label: 'Eau', icon: '💧', disabled: false },
  {
    label: 'Biodiversité',
    labelRadius: 270,
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
    label: 'Entreprises',
    labelRadius: 240,
    icon: '🏢',
    disabled: true,
    liens: []
  },
  {
    label: 'Tourisme',
    labelRadius: 260,
    icon: '🏖️',
    disabled: true,
    liens: []
  },
  {
    label: 'Agriculture',
    labelRadius: 280,
    icon: '🌾',
    disabled: false
  },
  {
    label: 'Sylviculture',
    labelRadius: 270,
    icon: '🌲',
    disabled: true,
    liens: []
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
    source: 'Santé',
    target: 'Aménagement',
    curve: 1,
    curveRadius: 0.8
  },
  // Eau
  {
    source: 'Santé',
    target: 'Eau',
    curve: 1,
    curveRadius: 0.3
  },
  {
    source: 'Eau',
    target: 'Tourisme',
    curve: 1,
    curveRadius: 0.3
  },
  // Agriculture
  {
    source: 'Agriculture',
    target: 'Eau',
    curve: 1,
    curveRadius: 0.24
  },
  {
    source: 'Santé',
    target: 'Agriculture',
    curve: 1,
    curveRadius: 0.07
  },
  // Biodiversité
  {
    source: 'Biodiversité',
    target: 'Agriculture',
    curve: 1,
    curveRadius: 0.3
  },
  {
    source: 'Biodiversité',
    target: 'Aménagement',
    curve: 1,
    curveRadius: 0.5
  },
  {
    source: 'Biodiversité',
    target: 'Tourisme',
    curve: 1,
    curveRadius: 0.4
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
    curveRadius: 0.6
  },
  {
    source: 'Confort thermique',
    target: 'Tourisme',
    curve: 1,
    curveRadius: 0.26
  },
  // Thématique Gestion des risques
  {
    source: 'Gestion des risques',
    target: 'Santé',
    curve: 1,
    curveRadius: 1
  },
  {
    source: 'Confort thermique',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.85
  },
  {
    source: 'Bâtiment',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.6
  },
  {
    source: 'Continuité des services',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.4
  },
  {
    source: 'Sylviculture',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.26
  },
  {
    source: 'Agriculture',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.15
  },
  {
    source: 'Tourisme',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.05
  },
  {
    source: 'Entreprises',
    target: 'Gestion des risques',
    curve: -1,
    curveRadius: 0.05
  },
  {
    source: 'Air',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.15
  },
  {
    source: 'Biodiversité',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.25
  },
  {
    source: 'Eau',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.4
  },
  {
    source: 'Forêts',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.5
  },
  {
    source: 'Aménagement',
    target: 'Gestion des risques',
    curve: 1,
    curveRadius: 0.6
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
