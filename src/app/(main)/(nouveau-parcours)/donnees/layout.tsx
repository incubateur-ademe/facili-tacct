import { type PropsWithChildren } from 'react';
import { MenuLateral } from '../../../../components/MenuLateral';

const ExplorerTerritoireLayout = ({ children }: PropsWithChildren) => {
  return (
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
  );
};

export default ExplorerTerritoireLayout;
