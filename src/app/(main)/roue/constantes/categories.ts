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
  'Bâtiment & Logement': 'Cadre de vie',
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
  'Agriculture & pêche': 'Ressources économiques',
  'Filière bois': 'Ressources économiques'
};

export const nomThematiques = [
  { label: 'Continuité des services', labelRadius: 300 },
  { label: 'Bâtiment & Logement', labelRadius: 290 },
  { label: 'Confort thermique', labelRadius: 280 },
  { label: 'Gestion des risques', labelRadius: 280 },
  { label: 'Santé' },
  { label: 'Aménagement', labelRadius: 310 },
  { label: 'Forêts', labelRadius: 270 },
  { label: 'Eau' },
  { label: 'Biodiversité', labelRadius: 290 },
  { label: 'Air' },
  { label: 'Entreprises' },
  { label: 'Tourisme', labelRadius: 280 },
  { label: 'Agriculture & pêche', labelRadius: 300 },
  { label: 'Filière bois', labelRadius: 290 }
];

export const liensEntreThematiques = [
  // liens entre les thématiques
  {
    source: 'Continuité des services',
    target: 'Eau',
    curve: 1,
    curveRadius: 0.15
  },
  {
    source: 'Gestion des risques',
    target: 'Santé',
    curve: 1,
    curveRadius: 1
  },
  {
    source: 'Confort thermique',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.85
  },
  {
    source: 'Bâtiment & Logement',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.6
  },
  {
    source: 'Continuité des services',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.4
  },
  {
    source: 'Filière bois',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.26
  },
  {
    source: 'Agriculture & pêche',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.15
  },
  {
    source: 'Tourisme',
    target: 'Santé',
    curve: -1,
    curveRadius: 0.05
  },
  {
    source: 'Entreprises',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.05
  },
  {
    source: 'Air',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.15
  },
  {
    source: 'Biodiversité',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.25
  },
  {
    source: 'Eau',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.4
  },
  {
    source: 'Forêts',
    target: 'Santé',
    curve: 1,
    curveRadius: 0.6
  },
  {
    source: 'Aménagement',
    target: 'Santé',
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
