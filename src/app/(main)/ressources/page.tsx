import { collectionsCartes } from '@/lib/ressources/cartes';
import { Metadata } from 'next';
import { BlocAutresOutils } from './blocs/blocAutresOutils';
import { BlocCollections } from './blocs/blocCollections';
import { BlocTitre } from './blocs/blocTitre';
import { BlocToutesRessources } from './blocs/blocToutesRessources';

export const metadata: Metadata = {
  title: 'Ressources',
  description: 'Catalogue de ressources Facili-TACCT à destination des collectivités',
};

const options = [
  "Accessibilité",
  "Confort",
  "Sécurité",
  "Esthétique",
  "Fonctionnalité",
  "Durabilité",
  "Écologie"
];

const Ressources = () => {
  return (
    <>
      <BlocTitre />
      <BlocCollections collectionsCartes={collectionsCartes} />
      <BlocAutresOutils />
      <BlocToutesRessources />
    </>
  );
};

export default Ressources;
