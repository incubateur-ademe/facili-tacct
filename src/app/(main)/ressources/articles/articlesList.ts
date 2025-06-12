import Adacc, { articleMetadata as adaccMeta } from '@/lib/ressources/articles/adacc';
import CDC, { articleMetadata as cdcMeta } from '@/lib/ressources/articles/CDC';
import ClimaStory, { articleMetadata as climaMeta } from '@/lib/ressources/articles/climaStory';
import EviterPrecherDesert, { articleMetadata as eviterMeta } from '@/lib/ressources/articles/eviterPrecherDesert';
import FacilitationDateliers, { articleMetadata as facilitationMeta } from '@/lib/ressources/articles/facilitationDateliers';
import LireUnDiagnostic, { articleMetadata as lireMeta } from '@/lib/ressources/articles/lireUnDiagnostic';
import MiseEnRecit, { articleMetadata as miseMeta } from '@/lib/ressources/articles/miseEnRecit';
import PourquoiMobiliser, { articleMetadata as pourquoiMeta } from '@/lib/ressources/articles/pourquoiMobiliser';

export const allArticles = [
  {
    slug: 'analyser-diagnostic-vulnerabilite',
    Component: LireUnDiagnostic,
    metadata: lireMeta,
  },
  {
    slug: 'mise-en-recit-territoire-adaptation-climat',
    Component: MiseEnRecit,
    metadata: miseMeta,
  },
  {
    slug: 'mobilisation-diagnostic-vulnerabilite',
    Component: PourquoiMobiliser,
    metadata: pourquoiMeta,
  },
  {
    slug: 'facilitation-ateliers-mobilisation',
    Component: FacilitationDateliers,
    metadata: facilitationMeta,
  },
  {
    slug: 'facilitation-cahier-charges',
    Component: CDC,
    metadata: cdcMeta,
  },
  {
    slug: 'reussir-mobilisation-acteurs-adaptation',
    Component: EviterPrecherDesert,
    metadata: eviterMeta,
  },
  {
    slug: 'ateliers-adacc-adaptation',
    Component: Adacc,
    metadata: adaccMeta,
  },
  {
    slug: 'atelier-climatstory-sensibilisation-adaptation',
    Component: ClimaStory,
    metadata: climaMeta,
  },
];
