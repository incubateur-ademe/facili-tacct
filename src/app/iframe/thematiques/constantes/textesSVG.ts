// Paramètres pour les textes courbés
export const categorieTextParametres = {
  'Cadre de vie': {
    angleOffset: 0,
    wordSpacing: 2
  },
  'Ressources naturelles': {
    angleOffset: 0,
    wordSpacing: 2
  },
  'Ressources économiques': {
    angleOffset: 0,
    wordSpacing: 2
  }
};

// Distance personnalisée pour chaque catégorie
export const DistanceTextes = (category: string): number => {
  if (category === 'Cadre de vie') {
    return 245; // Distance du centre pour Cadre de vie
  } else if (category === 'Ressources naturelles') {
    return 180; // Distance du centre pour Ressources naturelles
  } else if (category === 'Ressources économiques') {
    return 180; // Distance du centre pour Ressources économiques
  }
  return 0;
};
