import Adacc from '@/lib/ressources/articles/adacc';
import CDC from '@/lib/ressources/articles/CDC';
import ClimaStory from '@/lib/ressources/articles/climaStory';
import EviterPrecherDesert from '@/lib/ressources/articles/eviterPrecherDesert';
import FacilitationDateliers from '@/lib/ressources/articles/facilitationDateliers';
import LireUnDiagnostic from '@/lib/ressources/articles/lireUnDiagnostic';
import MiseEnRecit from '@/lib/ressources/articles/miseEnRecit';
import PourquoiMobiliser from '@/lib/ressources/articles/pourquoiMobiliser';

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
    metadata: {}
  },
  {
    slug: 'mobilisation-diagnostic-vulnerabilite',
    Component: PourquoiMobiliser,
    metadata: {}
  },
  {
    slug: 'facilitation-ateliers-mobilisation',
    Component: FacilitationDateliers,
    metadata: {}
  },
  {
    slug: 'facilitation-cahier-charges',
    Component: CDC,
    metadata: {}
  },
  {
    slug: 'reussir-mobilisation-acteurs-adaptation',
    Component: EviterPrecherDesert,
    metadata: {}
  },
  {
    slug: 'ateliers-adacc-adaptation',
    Component: Adacc,
    metadata: {}
  },
  {
    slug: 'atelier-climastory-sensibilisation-adaptation',
    Component: ClimaStory,
    metadata: {}
  }
];
