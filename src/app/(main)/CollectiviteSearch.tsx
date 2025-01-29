'use client';

import { SearchBarComp } from '@/components/SearchBar';
import styles from '../root.module.scss';

export const CollectiviteSearch = () => {
  return (
    <div className={styles.collectiviteWrapper}>
      <h5>Quelle collectivité représentez-vous ?</h5>
      <p>
        Cette information nous aidera à vous apporter les informations
        pertinentes pour votre territoire
      </p>
      <div>
        <SearchBarComp />
      </div>
    </div>
  );
};
