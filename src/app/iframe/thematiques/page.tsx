'use client';

import RoueSystemique from '@/app/(main)/(parcours)/thematiques/components/roue';
import { NewContainer } from '@/design-system/layout';
import { Suspense, useState } from 'react';
import PanneauLateral from './panneauLateral';

const RouePage = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);



  return (
    <NewContainer style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Suspense>
        {/* Style global pour cacher la scrollbar */}
        <style jsx global>{`
        html, body {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display: none; /* WebKit */
        }
      `}</style>
        <div className="flex flex-row gap-8">

          <div
            className="flex items-center justify-center transition-all duration-1000 ease-in-out"
            style={{
              width: selectedItem ? '60%' : '100%',
            }}
          >
            <RoueSystemique
              onItemSelect={setSelectedItem}
              selectedItem={selectedItem}
            />
          </div>
          <PanneauLateral
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        </div>
      </Suspense>
    </NewContainer>
  );
};

export default RouePage;
