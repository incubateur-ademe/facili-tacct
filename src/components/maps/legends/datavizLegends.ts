import qualiteBon from '@/assets/icons/qualite_baignade_bon.svg';
import qualiteExcellent from '@/assets/icons/qualite_baignade_excellent.svg';
import qualiteInsuffisant from '@/assets/icons/qualite_baignade_insuffisant.svg';
import qualiteManquePrelevement from '@/assets/icons/qualite_baignade_manque_prelevement.svg';
import qualiteNonClasse from '@/assets/icons/qualite_baignade_non_classe.svg';
import qualiteSuffisant from '@/assets/icons/qualite_baignade_suffisant.svg';

export const qualiteEauxBaignadelegends = [
  {
    value: 'Excellent',
    icon: qualiteExcellent
  },
  {
    value: 'Bon',
    icon: qualiteBon
  },
  {
    value: 'Suffisant',
    icon: qualiteSuffisant
  },
  {
    value: 'Insuffisant',
    icon: qualiteInsuffisant
  },
  {
    value: 'Site non classé',
    icon: qualiteNonClasse
  },
  {
    value: 'Insuffisamment de prélèvement',
    icon: qualiteManquePrelevement
  }
];

export const etatCoursDeauLegends = [
  {
    value: 'Très bon',
    color: '#0095C8'
  },
  {
    value: 'Bon',
    color: '#00C190'
  },
  {
    value: 'Moyen',
    color: '#FFCF5E'
  },
  {
    value: 'Médiocre',
    color: '#F66E19'
  },
  {
    value: 'Mauvais',
    color: '#B5000E'
  },
  {
    value: 'Indéterminé/pas de données',
    color: '#9D9C9C'
  }
];

export const aot40Legends = [
  {
    value: '> 36000',
    color: '#5524A0'
  },
  {
    value: '36000 - 27000',
    color: '#E8323B'
  },
  {
    value: '27000 - 18000',
    color: '#FFCF5E'
  },
  {
    value: '18000 - 12000',
    color: '#3E8F3E'
  },
  {
    value: '12000 - 6000',
    color: '#009ADC'
  },
  {
    value: '< 6000',
    color: '#5EEDF3'
  }
];

const getColor = (d: number) => {
  return d <= 0.0005
    ? '#ECD8FE'
    : d > 0.0005 && d <= 0.001
      ? '#C48EF6'
      : d > 0.002
        ? '#8C58BB'
        : d > 0.005
          ? '#6E3F99'
          : d > 0.01
            ? '#42255C'
            : 'transparent';
};

export const feuxForetLegend = [
  {
    value: '< 500 m²',
    color: '#ECD8FE'
  },
  {
    value: '500 - 1000 m²',
    color: '#C48EF6'
  },
  {
    value: '1000 - 2000 m²',
    color: '#8C58BB'
  },
  {
    value: '2000 - 5000 m²',
    color: '#6E3F99'
  },
  {
    value: '> 5000 m²',
    color: '#42255C'
  }
];

export const chefsExploitationLegend = [
  {
    value: '< 30 ans',
    color: '#ECD8FE'
  },
  {
    value: '30 - 40 ans',
    color: '#C48EF6'
  },
  {
    value: '40 - 50 ans',
    color: '#A05DE4'
  },
  {
    value: '50 - 55 ans',
    color: '#7F2CBF'
  },
  {
    value: '> 55 ans',
    color: '#4A1D7C'
  },
  {
    value: 'Valeurs manquantes ou sous secret statistique',
    color: 'transparent'
  }
];

export const espacesNAFBarChartLegend = [
  {
    variable: 'Activité',
    couleur: '#F66E19'
  },
  {
    variable: 'Habitat',
    couleur: '#009ADC'
  },
  {
    variable: 'Mixte',
    couleur: '#FFCF5E'
  },
  {
    variable: 'Routes',
    couleur: '#7A49BE'
  },
  {
    variable: 'Ferroviaire',
    couleur: '#BB43BD'
  },
  {
    variable: 'Inconnu',
    couleur: '#00C2CC'
  }
];

export const espacesNAFDatavizLegend = [
  {
    value: '0-1',
    color: '#D8EFFA'
  },
  {
    value: '1-2',
    color: '#FFECEE'
  },
  {
    value: '2-5',
    color: '#FF9699'
  },
  {
    value: '5-10',
    color: '#E8323B'
  },
  {
    value: '10-20',
    color: '#B5000E'
  },
  {
    value: '> 20',
    color: '#680000'
  }
];

export const espacesNAFMenagesBarChartLegend = [
  {
    variable: 'Habitat',
    couleur: '#009ADC'
  },
  {
    variable: 'Activité',
    couleur: '#FFCF5E'
  },
  {
    variable: 'Mixte',
    couleur: '#FF6F61'
  },
  {
    variable: 'Inconnu',
    couleur: '#BB43BD'
  },
  {
    variable: 'Routes',
    couleur: '#00C2CC'
  },
  {
    variable: 'Ferroviaire',
    couleur: '#00949D'
  }
];

export const surfacesIrrigueesLegend = [
  {
    value: '0 %',
    color: '#D8EFFA'
  },
  {
    value: '0 - 20 %',
    color: '#3DB6EA'
  },
  {
    value: '20 - 40 %',
    color: '#0072B5'
  },
  {
    value: '40 - 60 %',
    color: '#03508B'
  },
  {
    value: '60 - 100 %',
    color: '#093454'
  },
  {
    value: 'Valeurs manquantes ou sous secret statistique',
    color: 'transparent'
  }
];

export const densiteBatiLegend = [
  {
    value: '> 0.2',
    color: '#FF5E54'
  },
  {
    value: '0.1 - 0.2',
    color: '#FFBD00'
  },
  {
    value: '0.05 - 0.1',
    color: '#FFFA6A'
  },
  {
    value: '0 - 0.05',
    color: '#D5F4A3'
  },
  {
    value: '0',
    color: '#5CFF54'
  }
];

export const fragiliteEcoLegend = [
  {
    value: '> 30 %',
    color: '#FF5E54'
  },
  {
    value: '20 % - 30 %',
    color: '#FFBD00'
  },
  {
    value: '10 % - 20 %',
    color: '#FFFA6A'
  },
  {
    value: '0 - 10 %',
    color: '#D5F4A3'
  },
  {
    value: '0 %',
    color: '#5CFF54'
  }
];

export const vegetalisationLegend = [
  {
    value: 'Territoires artificialisés',
    color: '#ffff99'
  },
  {
    value: 'Territoires agricoles',
    color: '#fdc086'
  },
  {
    value: 'Zones végétalisées et milieux semi-naturels',
    color: '#7fc97f'
  },
  {
    value: 'Zones humides',
    color: '#beaed4'
  },
  {
    value: 'Surfaces en eau',
    color: '#386cb0'
  }
];

export const feuxForetBarChartLegend = [
  {
    variable: 'Feux de forêt',
    couleur: '#038278'
  }
];
