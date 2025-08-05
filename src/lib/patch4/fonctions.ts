import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import feuxForetIcon from '@/assets/icons/feu_foret_icon_black.svg';
import niveauxMarinsIcon from '@/assets/icons/niveau_marin_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import Canicule from '@/assets/images/canicule.webp';
import ErosionLittoral from '@/assets/images/erosion.webp';
import FeuxForet from '@/assets/images/feux.webp';
import Inondation from '@/assets/images/inondation.webp';
import RGA from '@/assets/images/rga.webp';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { Patch4 } from '../postgres/models';

export const patch4Indices = (patch4: Patch4) => [
  {
    key: 'fortes_chaleurs',
    value: AlgoPatch4(patch4, 'fortes_chaleurs'),
    icon: fortesChaleursIcon,
    label: 'Fortes chaleurs',
    definition:
      'L’indice prend en compte la valeur de trois indicateurs : le nombre de jours par an à plus de 35°C, le nombre de nuits par an à plus de 20°C ainsi que le nombre annuel de jours en vagues de chaleur.',
    linkedThemes: [
      'Santé des populations et cadre de vie',
      'Disponibilité et qualité des ressources en eau',
      'Adaptation des bassins d’emploi et activités économiques',
      'Continuité de service des réseaux (énergie, télécom et transport)',
      'Inconfort thermique'
    ],
    actions: [
      {
        title: 'Forte chaleur : à quoi s’attendre et comment s’adapter ?',
        link: 'https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/canicule#toc-agir',
        image: Canicule
      },
      {
        title: 'Plus fraîche ma ville',
        link: 'https://plusfraichemaville.fr/',
        image: null
      }
    ]
  },
  {
    key: 'fortes_precipitations',
    value: AlgoPatch4(patch4, 'fortes_precipitations'),
    icon: precipitationIcon,
    label: 'Fortes précipitations',
    definition:
      'L’indice prend en compte la valeur maximale de deux indicateurs : l’évolution du nombre de jours par saison avec fortes précipitations, et l’évolution du cumul de précipitations quotidiennes remarquables.',
    linkedThemes: [
      'Adaptation des bassins d’emploi et activités économiques',
      'Continuité de service des réseaux (énergie, télécom et transport)'
    ],
    actions: [
      {
        title:
          'Fortes précipitations : à quoi s’attendre et comment s’adapter ? ',
        link: 'https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/inondation#toc-agir',
        image: Inondation
      }
    ]
  },
  {
    key: 'secheresse_sols',
    value: AlgoPatch4(patch4, 'secheresse_sols'),
    icon: secheresseIcon,
    label: 'Sécheresse des sols',
    definition:
      'L’indice s’appuie sur l’indicateur d’évolution du nombre de jours par saison avec sol sec, lui-même basé sur le Soil Wetness Index (SWI04) représentant une humidité des sols inférieure à 0,4 (valeur définie comme seuil critique pour l’état de la réserve en eau du sol par rapport à la réserve utile disponible pour l’alimentation des plantes).',
    linkedThemes: [
      'Stabilité structurelle des bâtiments à risque RGA',
      'Santé des forêts, parcs et espaces naturels',
      'Disponibilité et qualité des ressources en eau'
    ],
    actions: [
      {
        title:
          'Retrait gonflement des argiles : à quoi s’attendre et comment s’adapter ?',
        link: 'https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/retrait-gonflement-des-argiles#toc-agir',
        image: RGA
      }
    ]
  },
  {
    key: 'feux_foret',
    value: AlgoPatch4(patch4, 'feux_foret'),
    icon: feuxForetIcon,
    label: 'Feux de forêt',
    definition:
      "L’indice s’appuie sur l’indicateur d’évolution du nombre annuel de jours en situation de risque significatif de feu de végétation. Il est basé sur l’Indice Forêt Météo (IFM) estimant le danger d’éclosion, de propagation et d’intensité à partir de différentes données météorologiques : température, humidité de l'air, vitesse du vent et précipitations.",
    linkedThemes: [
      'Santé des forêts, parcs et espaces naturels',
      'Santé des populations et cadre de vie',
      'Continuité de service des réseaux (énergie, télécom et transport)',
      'Adaptation des bassins d’emploi et activités économiques'
    ],
    actions: [
      {
        title: 'Feux de forêt : à quoi s’attendre et comment s’adapter ?',
        link: 'https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/feux-de-foret#toc-agir',
        image: FeuxForet
      }
    ]
  },
  {
    key: 'niveaux_marins',
    value:
      patch4.niveaux_marins !== null
        ? AlgoPatch4(patch4, 'niveaux_marins')
        : null,
    icon: niveauxMarinsIcon,
    label: 'Montée de la mer',
    definition:
      'L’indice s’appuie sur l’indicateur d’évolution de l’élévation du niveau moyen de la mer.',
    linkedThemes: ['Adaptation des bassins d’emploi et activités économiques'],
    actions: [
      {
        title: 'Érosion du littoral : à quoi s’attendre et comment s’adapter ?',
        link: 'https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/erosion-du-littoral#toc-agir',
        image: ErosionLittoral
      }
    ]
  }
];

export const getBackgroundColor = (value: string | null) => {
  switch (value) {
    case 'Aggravation très forte':
      return '#F80206';
    case 'Aggravation forte':
      return '#F66E19';
    case 'Aggravation modérée':
      return '#FFC03F';
    case "Pas d'évolution":
      return '#FFFFFF';
    default:
      return '#FFFFFF';
  }
};

export const getItemPosition = (index: number, total: number) => {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  const radius = 100; // Distance from center
  const x = 160 + radius * Math.cos(angle);
  const y = 155 + radius * Math.sin(angle);
  return { x, y };
};
