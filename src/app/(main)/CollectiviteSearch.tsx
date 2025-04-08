'use client';

import { SearchBarComp } from '@/components/SearchBar';
import styles from '../root.module.scss';

const CollectiviteSearch = () => {
  return (
    <div className={styles.collectiviteWrapper}  >
      <h2 className="text-center text-[1.5rem] font-bold">
        Quel territoire représentez-vous ?
      </h2>
      <SearchBarComp />
    </div>
  );
};

export default CollectiviteSearch;
