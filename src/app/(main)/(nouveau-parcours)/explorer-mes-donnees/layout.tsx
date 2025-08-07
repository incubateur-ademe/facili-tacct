import { type PropsWithChildren } from 'react';
import { MenuLateral } from './components/MenuLateral';

const ExplorerTerritoireLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      {/* Menu latéral fixe */}
      <MenuLateral />

      {/* Contenu principal */}
      <div className="flex-1 ml-[322px]">
        {children}
      </div>
    </div>
  );
};

export default ExplorerTerritoireLayout;
