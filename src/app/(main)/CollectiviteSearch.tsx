'use client';

import { SearchBarComp } from '@/components/SearchBar';
import { ToggleTheme } from '@/components/ToggleTheme';
import { useEffect } from 'react';
import styles from '../root.module.scss';

export const CollectiviteSearch = ({noticeClosed}: {noticeClosed: boolean}) => {
  const style = document.documentElement.style;
  const computedStyle = getComputedStyle(document.documentElement);

  useEffect(() => {
    ToggleTheme(computedStyle, style)
  }
  , [noticeClosed]);
  return (
    <div className={styles.collectiviteWrapper}  >
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
