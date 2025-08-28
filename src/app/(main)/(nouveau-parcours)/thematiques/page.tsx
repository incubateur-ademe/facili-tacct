'use client';

import { NewContainer } from '@/design-system/layout';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import PanneauLateral from './components/panneauLateral';
import RoueSystemique from './components/roue';

const RouePage = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const libelle = searchParams.get('libelle');
  const type = searchParams.get('type');

  // useEffect(() => {
  //   if (!selectedItem) return;
  //   // Trigger server-side prefetch when a thematique is selected in the wheel.
  //   try {
  //     const thematiqueObj = thematiquesInfo[selectedItem || ''];
  //     const thematiqueParam = thematiqueObj?.link || selectedItem || '';
  //     const params = new URLSearchParams({ code: code || '', libelle: libelle || '', type: type || '', thematique: thematiqueParam });
  //     // fire-and-forget; log response in browser console for visibility
  //     fetch(`/api/prefetch-thematique?${params.toString()}`)
  //       .then((res) => res.json().then((j) => console.info('[client prefetch] ok', j)).catch(() => {}))
  //       .catch((e) => console.info('[client prefetch] error', e));
  //   } catch (e) {
  //     console.info('[client prefetch] unexpected error', e);
  //   }
  // }, [selectedItem, code, libelle, type]);

  return (
    <NewContainer style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <style jsx global>
        {`html, body {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display: none; /* WebKit */
        }`}
      </style>
      <Suspense>
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
