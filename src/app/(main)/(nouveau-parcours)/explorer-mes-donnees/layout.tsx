import { Loader } from '@/components/loader';
import { type PropsWithChildren, Suspense } from 'react';
import { ExplorerProvider } from './components/ExplorerContext';
import { MenuLateral } from './components/MenuLateral';

const ExplorerTerritoireLayout = ({ children }: PropsWithChildren) => {
  return (
    <ExplorerProvider>
      <Suspense fallback={
        <div className='flex justify-center items-center h-screen'>
          <Loader />
        </div>
      }>
        <div className="flex min-h-screen">
          {/* Menu latéral fixe */}
          <MenuLateral />
          {/* Contenu principal */}
          <div className="flex-1 ml-[322px] flex flex-col">
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </Suspense>
    </ExplorerProvider>
  );
};

export default ExplorerTerritoireLayout;
