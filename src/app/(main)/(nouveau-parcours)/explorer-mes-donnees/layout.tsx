import { type PropsWithChildren } from 'react';
import { SideNavigation } from './components/SideNavigation';

const ExplorerTerritoireLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      {/* Menu latéral fixe */}
      <SideNavigation />

      {/* Contenu principal */}
      <div className="flex-1 ml-[322px]">
        {children}
      </div>
    </div>
  );
};

export default ExplorerTerritoireLayout;
