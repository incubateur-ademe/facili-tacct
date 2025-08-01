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
    value: '> 36 000 µg/m³',
    color: '#5524A0'
  },
  {
    value: '36 000 - 27 000 µg/m³',
    color: '#E8323B'
  },
  {
    value: '27 000 - 18 000 µg/m³',
    color: '#FFCF5E'
  },
  {
    value: '18 000 - 12 000 µg/m³',
    color: '#3E8F3E'
  },
  {
    value: '12 000 - 6 000 µg/m³',
    color: '#009ADC'
  },
  {
    value: '< 6 000 µg/m³',
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
    value: '500 - 1 000 m²',
    color: '#C48EF6'
  },
  {
    value: '1 000 - 2 000 m²',
    color: '#8C58BB'
  },
  {
    value: '2 000 - 5 000 m²',
    color: '#6E3F99'
  },
  {
    value: '> 5 000 m²',
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
    color: '#8C58BB'
  },
  {
    value: '50 - 55 ans',
    color: '#6E3F99'
  },
  {
    value: '> 55 ans',
    color: '#42255C'
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
    color: 'white'
  }
];

export const densiteBatiLegend = [
  {
    value: '> 0,2',
    color: '#FF5E54'
  },
  {
    value: '0,1 - 0,2',
    color: '#FFBD00'
  },
  {
    value: '0,05 - 0,1',
    color: '#FFFA6A'
  },
  {
    value: '0 - 0,05',
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

export const vegetalisationColors = {
  'Continuous urban fabric': '#ffff99',
  'Discontinuous urban fabric': '#ffff99',
  'Industrial or commercial units': '#ffff99',
  'Road and rail networks and associated land': '#ffff99', //cc0000
  'Port areas': '#ffff99',
  Airports: '#ffff99',
  'Mineral extraction sites': '#ffff99',
  'Dump sites': '#ffff99',
  'Construction sites': '#ffff99',
  'Green urban areas': '#7fc97f', //ffa6ff
  'Sport and leisure facilities': '#ffff99',
  'Non-irrigated arable land': '#fdc086',
  'Permanently irrigated land': '#fdc086',
  'Rice fields': '#fdc086',
  Vineyards: '#fdc086', //e68000
  'Fruit trees and berry plantations': '#fdc086',
  'Olive groves': '#fdc086', //e6a600
  Pastures: '#fdc086',
  'Annual crops associated with permanent crops': '#fdc086',
  'Complex cultivation patterns': '#fdc086',
  'Land principally occupied by agriculture, with significant areas of natural vegetation':
    '#fdc086',
  'Agro-forestry areas': '#fdc086', //f2cca6
  'Broad-leaved forest': '#7fc97f', //80ff00
  'Coniferous forest': '#7fc97f', //00a600
  'Mixed forest': '#7fc97f', //4dff00
  'Natural grasslands': '#7fc97f', //ccf24d
  'Moors and heathland': '#7fc97f',
  'Sclerophyllous vegetation': '#7fc97f',
  'Transitional woodland-shrub': '#7fc97f',
  'Beaches, dunes, sands': '#7fc97f',
  'Bare rocks': '#7fc97f',
  'Sparsely vegetated areas': '#7fc97f',
  'Burnt areas': '#7fc97f',
  'Glaciers and perpetual snow': '#7fc97f',
  'Inland marshes': '#beaed4',
  'Peat bogs': '#beaed4',
  'Salt marshes': '#beaed4',
  Salines: '#beaed4',
  'Intertidal flats': '#beaed4',
  'Water courses': '#386cb0',
  'Water bodies': '#386cb0',
  'Coastal lagoons': '#386cb0',
  Estuaries: '#386cb0',
  'Sea and ocean': '#386cb0'
};

export const LczLegend = [
  {
    value: "LCZ 1 : Ensemble compact de tours",
    color: "#8C0000",
  },
  {
    value: "LCZ 2 : Ensemble compact d'immeubles",
    color: "#D10000",
  },{
    value: "LCZ 3 : Ensemble compact de maisons",
    color: "#FF0000",
  },
  {
    value: "LCZ 4 : Ensemble de tours espacées",
    color: "#BF4D00",
  },
  {
    value: "LCZ 5 : Ensemble d'immeubles espacés",
    color: "#FA6600",
  },
  {
    value: "LCZ 6 : Ensemble de maisons espacées",
    color: "#FF9955",
  },
  {
    value: "LCZ 7 : Ensemble dense de constructions légères",
    color: "#FAEE05",
  },
  {
    value: "LCZ 8 : Bâtiments de grande emprise",
    color: "#BCBCBC",
  },
  {
    value: "LCZ 9 : Implantation diffuse de maisons",
    color: "#FFCCAA",
  },
  {
    value: "LCZ A : Espace densément arboré",
    color: "#006A00",
  },
  {
    value: "LCZ B : Espace arboré clairsemé",
    color: "#00AA00",
  },
  {
    value: "LCZ C : Espace végétalisé hétérogène",
    color: "#648525",
  },
  {
    value: "LCZ D : Végétation basse",
    color: "#B9DB79",
  },
  {
    value: "LCZ E : Sol imperméable naturel ou artificiel",
    color: "#000000",
  },
  {
    value: "LCZ F : Sol nu perméable",
    color: "#FBF7AE",
  },
  {
    value: "LCZ G : Surface en eau",
    color: "#6A6AFF"
  }
];

export const LczLegendOpacity70 = [
  {
    value: "LCZ 1 : Ensemble compact de tours",
    color: "#AF4D4D",
  },
  {
    value: "LCZ 2 : Ensemble compact d'immeubles",
    color: "#D74545",
  },{
    value: "LCZ 3 : Ensemble compact de maisons",
    color: "#FF4D4D",
  },
  {
    value: "LCZ 4 : Ensemble de tours espacées",
    color: "#CD7D47",
  },
  {
    value: "LCZ 5 : Ensemble d'immeubles espacés",
    color: "#FC944D",
  },
  {
    value: "LCZ 6 : Ensemble de maisons espacées",
    color: "#FFB888",
  },
  {
    value: "LCZ 7 : Ensemble dense de constructions légères",
    color: "#9F9811",
  },
  {
    value: "LCZ 8 : Bâtiments de grande emprise",
    color: "#C6C6C6",
  },
  {
    value: "LCZ 9 : Implantation diffuse de maisons",
    color: "#FFDCC4",
  },
  {
    value: "LCZ A : Espace densément arboré",
    color: "#438D43",
  },
  {
    value: "LCZ B : Espace arboré clairsemé",
    color: "#43BA43",
  },
  {
    value: "LCZ C : Espace végétalisé hétérogène",
    color: "#89A05D",
  },
  {
    value: "LCZ D : Végétation basse",
    color: "#798D54",
  },
  {
    value: "LCZ E : Sol imperméable naturel ou artificiel",
    color: "#4D4D4D",
  },
  {
    value: "LCZ F : Sol nu perméable",
    color: "#FAF7C4",
  },
  {
    value: "LCZ G : Surface en eau",
    color: "#8888F0"
  }
];

export const feuxForetBarChartLegend = [
  {
    variable: 'Feux de forêt',
    couleur: '#038278'
  }
];

export const RgaRepartitionLegend = [
  {
    variable: 'territoire',
    texteRaccourci: 'Territoire',
    couleur: '#038278'
  },
  {
    variable: 'territoireSup',
    texteRaccourci: 'Territoire supérieur',
    couleur: '#C48EF6'
  }
];

export const RgaEvolutionLegend = [
  {
    variable: 'nb_logement_alea_faible',
    texteRaccourci: 'Exposition faible',
    couleur: '#FFCF5E'
  },
  {
    variable: 'nb_logement_alea_moyen_fort',
    texteRaccourci: 'Exposition moyenne / forte',
    couleur: '#E8323B'
  }
];

export const RgaMapLegend = [
  {
    value: 'Zone a priori non argileuse',
    color: '#FFFFFF'
  },
  {
    value: 'Exposition faible',
    color: '#FFCF5E'
  },
  {
    value: 'Exposition moyenne',
    color: '#F66E19'
  },
  {
    value: 'Exposition forte',
    color: '#E8323B'
  }
];
