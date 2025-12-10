'use client';

import { ScrollToTop } from '@/components/interactions/ScrollToTop';
import { NewContainer } from '@/design-system/layout';
import { Suspense, useState } from 'react';
import PanneauLateral from './components/panneauLateral';
import RoueSystemique from './components/roue';
import styles from './roue.module.scss';

const RouePage = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <Suspense>
      <ScrollToTop />
      <NewContainer style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <style jsx global>
          {`
            html, body {
              scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none; /* Internet Explorer 10+ */
            }
            html::-webkit-scrollbar, body::-webkit-scrollbar {
              display: none; /* WebKit */
            }
          `}
        </style>
        <div className={styles.responsiveThematiquesLayout}>
          <div
            className={`${styles.roueContainer} ${selectedItem ? styles.selected : styles.unselected}`}
          >
            <RoueSystemique
              onItemSelect={setSelectedItem}
              selectedItem={selectedItem}
            />
          </div>
          <div className={styles.panneauLateralContainer}>
            <PanneauLateral
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          </div>
        </div>
      </NewContainer>
    </Suspense>
  );
};

export default RouePage;

{/* Style global pour cacher la scrollbar */ }
// <style jsx global>
//   {`html, body {
//     scrollbar-width: none; /* Firefox */
//     -ms-overflow-style: none; /* Internet Explorer 10+ */
//   }
//   html::-webkit-scrollbar, body::-webkit-scrollbar {
//     display: none; /* WebKit */
//   }`}
// </style>
