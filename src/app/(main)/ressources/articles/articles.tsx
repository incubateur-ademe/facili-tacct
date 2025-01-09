'use client';
import Adacc from '@/lib/ressources/articles/adacc';
import CDC from '@/lib/ressources/articles/CDC';
import ClimaStory from '@/lib/ressources/articles/climaStory';
import EviterPrecherDesert from '@/lib/ressources/articles/eviterPrecherDesert';
import FacilitationDateliers from '@/lib/ressources/articles/facilitationDateliers';
import LireUnDiagnostic from '@/lib/ressources/articles/lireUnDiagnostic';
import MiseEnRecit from '@/lib/ressources/articles/miseEnRecit';
import PourquoiMobiliser from '@/lib/ressources/articles/pourquoiMobiliser';
import { useSearchParams } from 'next/navigation';

const allArticles = [
  {
    titre:
      '10 minutes pour analyser les 80 pages de votre diagnostic de vulnérabilité',
    Component: () => <LireUnDiagnostic />
  },
  {
    titre: 'Mettre en récit mon territoire pour engager',
    Component: () => <MiseEnRecit />
  },
  {
    titre: 'La facilitation d’ateliers : une démarche éprouvée d’engagement',
    Component: () => <FacilitationDateliers />
  },
  {
    titre: 'Le cahier des charges, levier pour intégrer la facilitation',
    Component: () => <CDC />
  },
  {
    titre: 'Pourquoi mobiliser en interne et externe ?',
    Component: () => <PourquoiMobiliser />
  },
  {
    titre: 'Comment éviter de prêcher dans le désert ?',
    Component: () => <EviterPrecherDesert />
  },
  {
    titre:
      'Sensibiliser à l’ACC : les AdACC (Les ateliers de l’adaptation au changement climatique)',
    Component: () => <Adacc />
  },
  {
    titre: 'ClimaStory, une cartographie pour sensibiliser',
    Component: () => <ClimaStory />
  }
];

const Article = () => {
  const searchParams = useSearchParams();
  const article = searchParams.get('title');
  return (
    <div>
      {(() => {
        const Component = allArticles.find(
          (el) => el.titre === article
        )?.Component;
        if (!Component) return null;
        return <Component />;
      })()}
    </div>
  );
};

export default Article;
