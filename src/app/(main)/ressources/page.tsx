import MultiSelect from '@/components/MultiSelect';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Container } from '../../../design-system/server';
import { BlocAutresOutils } from './blocs/blocAutresOutils';
import { BlocCollections } from './blocs/blocCollections';
import { BlocTitre } from './blocs/blocTitre';
import RessourcesCards from './cards';
import styles from './ressources.module.scss';

export const metadata: Metadata = {
  title: 'Ressources',
  description: 'Catalogue de ressources Facili-TACCT à destination des collectivités',
};

const Ressources = () => {
  return (
    <>
      <BlocTitre />
      <BlocCollections />
      <BlocAutresOutils />
      <MultiSelect />

      <Container size="xl" className={styles.ressourcesContainer}>
        <Suspense>
          <RessourcesCards />
        </Suspense>
      </Container>
    </>
  );
};

export default Ressources;
