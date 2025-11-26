import bookIcon from '@/assets/icons/fr-icon-book-2-line.png';
import questionIcon from '@/assets/icons/fr-icon-questionnaire-line.png';
import shapesIcon from '@/assets/icons/fr-icon-shapes-line.png';
import teamIcon from '@/assets/icons/fr-icon-team-line.png';
import Collection1Img from '@/assets/images/collection1.png';
import Collection2Img from '@/assets/images/collection2.png';
import Collection3Img from '@/assets/images/collection3.png';
import Collection4Img from '@/assets/images/collection4.png';
import Collection5Img from '@/assets/images/collection5.png';
import Collection6Img from '@/assets/images/collection6.png';
import Collection7Img from '@/assets/images/collection7.png';

export const collectionsCartes = [
  {
    texte: 'Démarrer le diagnostic de vulnérabilité',
    image: Collection1Img
  },
  {
    texte: 'Evaluer les impacts du changement climatique',
    image: Collection5Img
  },
  {
    texte: 'Mobiliser les acteurs du territoire',
    image: Collection6Img
  },
  {
    texte: 'Piloter la démarche d’adaptation',
    image: Collection2Img
  },
  {
    texte: 'Bâtir la stratégie d’adaptation',
    image: Collection3Img
  },
  {
    texte: 'Ajuster sa posture d’animation',
    image: Collection4Img
  },
  {
    texte: 'Partager le diagnostic de vulnérabilité',
    image: Collection7Img
  }
];

export const autresOutilsCartes = [
  {
    titre: 'Communauté TACCT',
    description: 'Rejoignez la communauté d’entraide TACCT.',
    icone: teamIcon
  },
  {
    titre: 'Méthode TACCT',
    description:
      'Consultéz la méthode complète d’adaptation au changement climatique.',
    icone: shapesIcon
  },
  {
    titre: 'Questions fréquentes',
    description:
      'Trouvez des réponses aux questions les plus courantes sur l’adaptation au changement climatique.',
    icone: questionIcon
  },
  {
    titre: "Glossaire de l'adaptation",
    description:
      "Comprenez les termes clés liés à l'adaptation au changement climatique.",
    icone: bookIcon
  }
];
