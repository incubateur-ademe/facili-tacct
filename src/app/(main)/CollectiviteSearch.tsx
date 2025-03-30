'use client';

import { SearchBarComp } from '@/components/SearchBar';
import { ToggleTheme } from '@/components/ToggleTheme';
import { useEffect } from 'react';
import styles from '../root.module.scss';

export const CollectiviteSearch = ({ noticeClosed }: { noticeClosed: boolean }) => {

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.documentElement.style;
      const computedStyle = getComputedStyle(document.documentElement);
      ToggleTheme(computedStyle, style);
    }
  }, [noticeClosed]);

  return (
    <div className={styles.collectiviteWrapper}  >
      <h2 className="text-center text-[1.5rem] font-bold">
        Quel territoire représentez-vous ?
      </h2>
      <div>
        <SearchBarComp />
      </div>
    </div>
  );
};
