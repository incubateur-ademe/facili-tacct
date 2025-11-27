import TestImageTuile from '@/assets/images/test_tuile.png';
import Adacc from '@/lib/ressources/articles/adacc';
import BriserSilosApprocheSystemique from '@/lib/ressources/articles/briserSilosApprocheSystemique';
import CDC from '@/lib/ressources/articles/CDC';
import ClimaStory from '@/lib/ressources/articles/climaStory';
import EviterPrecherDesert from '@/lib/ressources/articles/eviterPrecherDesert';
import FacilitationDateliers from '@/lib/ressources/articles/facilitationDateliers';
import IlotChaleurUrbain from '@/lib/ressources/articles/ilotChaleurUrbain';
import IndicateursDeResilience from '@/lib/ressources/articles/indicateursDeResilience';
import LireUnDiagnostic from '@/lib/ressources/articles/lireUnDiagnostic';
import MiseEnRecit from '@/lib/ressources/articles/miseEnRecit';
import PnaccTracc from '@/lib/ressources/articles/pnaccTracc';
import PourquoiMobiliser from '@/lib/ressources/articles/pourquoiMobiliser';
import RecruterStagiaire from '@/lib/ressources/articles/recruterStagiaire';
import RisqueALadaptation from '@/lib/ressources/articles/risqueALadaptation';

export const FiltresOptions = [
  {
    titre: 'Je cherche à',
    options: ["M'inspirer", 'Me former', 'Agir']
  },
  {
    titre: 'Format de ressources',
    options: ['Article', "Retour d'expérience"]
  },
  {
    titre: 'Territoire',
    options: [
      'National',
      'Auvergne-Rhône-Alpes',
      'Bourgogne-Franche-Comté',
      'Bretagne',
      'Centre-Val de Loire',
      'Corse',
      'Grand Est',
      'Hauts-de-France',
      'Ile-de-France',
      'Normandie',
      'Nouvelle-Aquitaine',
      'Occitanie',
      'Pays de la Loire',
      "Provence Alpes Côte d'Azur",
      'Guadeloupe',
      'Guyane',
      'Martinique',
      'Mayotte',
      'Réunion'
    ]
  }
];

export const TousLesArticles = [
  {
    slug: 'analyser-diagnostic-vulnerabilite',
    Component: LireUnDiagnostic,
    titre: 'Analyser un diagnostic de vulnérabilité',
    description:
      'Relisez votre diagnostic de vulnérabilité aux effets du changement climatique en 10 minutes : repérez les données utiles et les enjeux clés.',
    lien: '/ressources/articles/analyser-diagnostic-vulnerabilite',
    filtres: ['Article', "M'inspirer", 'National'],
    collection: "Bâtir ma stratégie d'adaptation",
    tempsLecture: 15,
    image: TestImageTuile
  },
  {
    tab: 'Vous découvrez le diagnostic pour la 1ère fois',
    titre:
      'Comment restituer son diagnostic des impacts du changement climatique en Haute-Loire (43)',
    description:
      'Comment embarquer dans la construction de votre stratégie d’adaptation? Un partage engageant du diagnostic est important, pour cela, la CA du Puy-en-Velay a articulé TACCT et l’atelier ClimaSTORY.',
    lien: 'https://librairie.ademe.fr/7180-comment-restituer-son-diagnostic-des-impacts-du-changement-climatique-en-haute-loire-43.html',
    filtres: ["Retour d'expérience", 'Agir', 'Centre-Val de Loire'],
    collection: "Bâtir ma stratégie d'adaptation",
    tempsLecture: 15,
    image: TestImageTuile
  },
  {
    slug: 'mise-en-recit-territoire-adaptation-climat',
    Component: MiseEnRecit,
    metadata: {
      titre: 'Mettre en récit mon territoire pour engager',
      description:
        'Découvrez comment mettre en récit votre territoire pour engager les acteurs locaux dans l’adaptation au changement climatique.'
    }
  },
  {
    slug: 'mobilisation-diagnostic-vulnerabilite',
    Component: PourquoiMobiliser,
    metadata: {
      titre:
        'Comment mobiliser élus, services et partenaires autour d’un diagnostic de vulnérabilité ?',
      description:
        'Découvrez le retour d’expérience de Jolet Van Kipshagen (CC Vallée de Villé) et les clés d’une démarche concertée et ancrée dans le territoire.'
    }
  },
  {
    slug: 'facilitation-ateliers-mobilisation',
    Component: FacilitationDateliers,
    metadata: {
      titre: 'La facilitation d’ateliers : une démarche éprouvée d’engagement',
      description:
        'Découvrez comment la facilitation d’ateliers peut renforcer l’engagement des parties prenantes dans l’adaptation.'
    }
  },
  {
    slug: 'facilitation-cahier-charges',
    Component: CDC,
    metadata: {
      titre: 'Le cahier des charges, levier pour intégrer la facilitation',
      description:
        'Le rôle du cahier des charges dans l’intégration de la facilitation pour l’adaptation au changement climatique.'
    }
  },
  {
    slug: 'reussir-mobilisation-acteurs-adaptation',
    Component: EviterPrecherDesert,
    metadata: {
      titre: 'Comment éviter de prêcher dans le désert ?',
      description:
        'Conseils pour éviter de prêcher dans le désert et maximiser l’impact de vos actions d’adaptation.'
    }
  },
  {
    slug: 'ateliers-adacc-adaptation',
    Component: Adacc,
    metadata: {
      titre: 'Sensibiliser à l’adaptation : les AdACC',
      description:
        'Présentation des Ateliers de l’Adaptation au Changement Climatique (AdACC) pour sensibiliser les acteurs.'
    }
  },
  {
    slug: 'atelier-climastory-sensibilisation-adaptation',
    Component: ClimaStory,
    metadata: {
      titre: 'ClimaSTORY, une cartographie pour sensibiliser',
      description:
        'Découvrez ClimaSTORY, un outil cartographique pour sensibiliser à l’adaptation au changement climatique.'
    }
  },
  {
    slug: 'stagiaire-diagnostic-vulnerabilite-climat',
    Component: RecruterStagiaire,
    metadata: {
      titre:
        'Recruter un stagiaire sur le diagnostic de vulnérabilité : bonne ou mauvaise idée ?',
      description:
        'Vous envisagez de confier le diagnostic de vulnérabilité à votre stagiaire ? Découvrez les erreurs à éviter, les missions possibles, et les bonnes pratiques pour un appui vraiment utile.'
    }
  },
  {
    slug: 'ilot-chaleur-urbain-erreurs-a-eviter',
    Component: IlotChaleurUrbain,
    metadata: {
      titre:
        'Îlot de chaleur urbain : 4 idées reçues à déjouer pour mieux agir sur le terrain',
      description:
        'Îlot de chaleur urbain : 4 idées reçues à déjouer pour mieux comprendre le phénomène, cibler les bons diagnostics et adapter l’action aux enjeux'
    }
  },
  {
    slug: 'pnacc-tracc-comment-suis-je-concerne',
    Component: PnaccTracc,
    metadata: {
      titre: 'PNACC, TRACC, Comment suis-je concerné ?',
      description:
        'PNACC, TRACC autant de documents stratégiques qui orientent l’adaptation au changement climatique en France. Comprendre leur contenu est nécessaire pour anticiper et mettre en oeuvre des stratégies cohérentes.'
    }
  },
  {
    slug: 'briser-silos-approche-systemique',
    Component: BriserSilosApprocheSystemique,
    metadata: {
      titre: 'Brisez les silos : introduction à l’approche systémique',
      description:
        'Comprendre les interactions au sein de votre système est essentiel pour éviter les maladaptations. L’approche systémique vous accompagne de l’identification jusqu’à la mobilisation.'
    }
  },
  {
    slug: 'resilience-agricole-indicateurs-territoire',
    Component: IndicateursDeResilience,
    metadata: {
      titre:
        'Comment mesurer la résilience d’un territoire agricole face au changement climatique ?',
      description:
        '22 indicateurs pour aider les chargés de mission climat à évaluer la résilience agricole et repérer les vulnérabilités au changement climatique.'
    }
  },
  {
    slug: 'strategie-adaptation-gestion-risque-relocalisation',
    Component: RisqueALadaptation,
    metadata: {
      titre:
        'De la gestion du risque à l’adaptation : le cas de la relocalisation de Miquelon',
      description:
        'De la gestion du risque à l’adaptation ou quand reculer devient avancer : témoignages d’une projection sur le temps long avec l’exemple de Miquelon.'
    }
  }
];
