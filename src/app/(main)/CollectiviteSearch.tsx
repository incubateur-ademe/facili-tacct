'use client';

import { SearchBarComp } from '@/components/SearchBar';
import styles from '../root.module.scss';

export const CollectiviteSearch = () => {
  return (
    <div className={styles.collectiviteWrapper}>
      <h5 className="text-center">Quel territoire représentez-vous ?</h5>
      <div>
        <SearchBarComp />
      </div>
    </div>
  );
};
