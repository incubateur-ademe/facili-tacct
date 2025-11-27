import { Metadata } from 'next';
import { Suspense } from 'react';
import { Container } from '../../../design-system/server';
import { BlocAutresOutils } from './blocs/blocAutresOutils';
import { BlocCollections } from './blocs/blocCollections';
import { BlocTitre } from './blocs/blocTitre';
import { BlocToutesRessources } from './blocs/blocToutesRessources';
import RessourcesCards from './cards';
import styles from './ressources.module.scss';

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
      <BlocCollections />
      <BlocAutresOutils />
      <BlocToutesRessources />
      <Container size="xl" className={styles.ressourcesContainer} style={{ marginTop: "50rem" }}>
        <Suspense>
          <RessourcesCards />
        </Suspense>
      </Container>
    </>
  );
};

export default Ressources;
