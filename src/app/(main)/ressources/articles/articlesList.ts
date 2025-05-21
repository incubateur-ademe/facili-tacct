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
    slug: 'lire-un-diagnostic',
    Component: LireUnDiagnostic,
    metadata: lireMeta,
  },
  {
    slug: 'mise-en-recit',
    Component: MiseEnRecit,
    metadata: miseMeta,
  },
  {
    slug: 'pourquoi-mobiliser',
    Component: PourquoiMobiliser,
    metadata: pourquoiMeta,
  },
  {
    slug: 'facilitation-ateliers',
    Component: FacilitationDateliers,
    metadata: facilitationMeta,
  },
  {
    slug: 'cdc',
    Component: CDC,
    metadata: cdcMeta,
  },
  {
    slug: 'eviter-precher-desert',
    Component: EviterPrecherDesert,
    metadata: eviterMeta,
  },
  {
    slug: 'adacc',
    Component: Adacc,
    metadata: adaccMeta,
  },
  {
    slug: 'climastory',
    Component: ClimaStory,
    metadata: climaMeta,
  },
];
