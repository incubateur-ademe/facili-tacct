'use client';

import { SearchBarComp } from '@/components/SearchBar';
import styles from '../root.module.scss';

export const CollectiviteSearch = () => {
  return (
    <div className={styles.collectiviteWrapper}>
      <h2 className="text-center text-[1.5rem] font-bold">
        Quel territoire représentez-vous ?
      </h2>
      {/* <p>
        Cette information nous aidera à vous apporter les informations
        pertinentes pour votre territoire
      </p> */}
      <div>
        <SearchBarComp />
      </div>
    </div>
  );
};
