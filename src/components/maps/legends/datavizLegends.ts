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
    value: 'Très bon état',
    color: '#0095C8'
  },
  {
    value: 'Bon état',
    color: '#00C190'
  },
  {
    value: 'État moyen',
    color: '#FFCF5E'
  },
  {
    value: 'État médiocre',
    color: '#F66E19'
  },
  {
    value: 'État mauvais',
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
