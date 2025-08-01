import Adacc from '@/lib/ressources/articles/adacc';
import BriserSilosApprocheSystemique from '@/lib/ressources/articles/briserSilosApprocheSystemique';
import CDC from '@/lib/ressources/articles/CDC';
import ClimaStory from '@/lib/ressources/articles/climaStory';
import EviterPrecherDesert from '@/lib/ressources/articles/eviterPrecherDesert';
import FacilitationDateliers from '@/lib/ressources/articles/facilitationDateliers';
import IlotChaleurUrbain from '@/lib/ressources/articles/ilotChaleurUrbain';
import LireUnDiagnostic from '@/lib/ressources/articles/lireUnDiagnostic';
import MiseEnRecit from '@/lib/ressources/articles/miseEnRecit';
import PnaccTracc from '@/lib/ressources/articles/pnaccTracc';
import PourquoiMobiliser from '@/lib/ressources/articles/pourquoiMobiliser';
import RecruterStagiaire from '@/lib/ressources/articles/recruterStagiaire';

export const allArticles = [
  {
    slug: 'analyser-diagnostic-vulnerabilite',
    Component: LireUnDiagnostic,
    metadata: {
      title: 'Analyser un diagnostic de vulnérabilité',
      description:
        'Relisez votre diagnostic de vulnérabilité aux effets du changement climatique en 10 minutes : repérez les données utiles et les enjeux clés.'
    }
  },
  {
    slug: 'mise-en-recit-territoire-adaptation-climat',
    Component: MiseEnRecit,
    metadata: {
      title: 'Mettre en récit mon territoire pour engager',
      description:
        'Découvrez comment mettre en récit votre territoire pour engager les acteurs locaux dans l’adaptation au changement climatique.'
    }
  },
  {
    slug: 'mobilisation-diagnostic-vulnerabilite',
    Component: PourquoiMobiliser,
    metadata: {
      title: 'Pourquoi mobiliser en interne et externe ?',
      description:
        'Comprendre l’importance de la mobilisation interne et externe pour la réussite des démarches d’adaptation.'
    }
  },
  {
    slug: 'facilitation-ateliers-mobilisation',
    Component: FacilitationDateliers,
    metadata: {
      title: 'La facilitation d’ateliers : une démarche éprouvée d’engagement',
      description:
        'Découvrez comment la facilitation d’ateliers peut renforcer l’engagement des parties prenantes dans l’adaptation.'
    }
  },
  {
    slug: 'facilitation-cahier-charges',
    Component: CDC,
    metadata: {
      title: 'Le cahier des charges, levier pour intégrer la facilitation',
      description:
        'Le rôle du cahier des charges dans l’intégration de la facilitation pour l’adaptation au changement climatique.'
    }
  },
  {
    slug: 'reussir-mobilisation-acteurs-adaptation',
    Component: EviterPrecherDesert,
    metadata: {
      title: 'Comment éviter de prêcher dans le désert ?',
      description:
        'Conseils pour éviter de prêcher dans le désert et maximiser l’impact de vos actions d’adaptation.'
    }
  },
  {
    slug: 'ateliers-adacc-adaptation',
    Component: Adacc,
    metadata: {
      title: 'Sensibiliser à l’adaptation : les AdACC',
      description:
        'Présentation des Ateliers de l’Adaptation au Changement Climatique (AdACC) pour sensibiliser les acteurs.'
    }
  },
  {
    slug: 'atelier-climastory-sensibilisation-adaptation',
    Component: ClimaStory,
    metadata: {
      title: 'ClimaSTORY, une cartographie pour sensibiliser',
      description:
        'Découvrez ClimaSTORY, un outil cartographique pour sensibiliser à l’adaptation au changement climatique.'
    }
  },
  {
    slug: 'stagiaire-diagnostic-vulnerabilite-climat',
    Component: RecruterStagiaire,
    metadata: {
      title:
        'Recruter un stagiaire sur le diagnostic de vulnérabilité : bonne ou mauvaise idée ?',
      description:
        'Vous envisagez de confier le diagnostic de vulnérabilité à votre stagiaire ? Découvrez les erreurs à éviter, les missions possibles, et les bonnes pratiques pour un appui vraiment utile.'
    }
  },
  {
    slug: 'ilot-chaleur-urbain-erreurs-a-eviter',
    Component: IlotChaleurUrbain,
    metadata: {
      title:
        'Îlot de chaleur urbain : 4 idées reçues à déjouer pour mieux agir sur le terrain',
      description:
        'Îlot de chaleur urbain : 4 idées reçues à déjouer pour mieux comprendre le phénomène, cibler les bons diagnostics et adapter l’action aux enjeux'
    }
  },
  {
    slug: 'pnacc-tracc-comment-suis-je-concerne',
    Component: PnaccTracc,
    metadata: {
      title: 'PNACC, TRACC, Comment suis-je concerné ?',
      description:
        'PNACC, TRACC autant de documents stratégiques qui orientent l’adaptation au changement climatique en France. Comprendre leur contenu est nécessaire pour anticiper et mettre en oeuvre des stratégies cohérentes.'
    }
  },
  {
    slug: 'briser-silos-approche-systemique',
    Component: BriserSilosApprocheSystemique,
    metadata: {
      title: 'Brisez les silos : introduction à l’approche systémique',
      description:
        'Comprendre les interactions au sein de votre système est essentiel pour éviter les maladaptations. L’approche systémique vous accompagne de l’identification jusqu’à la mobilisation.'
    }
  }
];
