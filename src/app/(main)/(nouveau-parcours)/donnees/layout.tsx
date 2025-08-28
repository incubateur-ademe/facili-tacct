import { Suspense, type PropsWithChildren } from 'react';
import { MenuLateral } from '../../../../components/MenuLateral';

const ExplorerTerritoireLayout = ({ children }: PropsWithChildren) => {
  return (
    <Suspense>
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
  );
};

export default ExplorerTerritoireLayout;
