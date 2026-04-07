"use client";
import { MenuLateral } from '@/components/ui/MenuLateral';
import { Suspense, useState, type PropsWithChildren } from 'react';

const ExplorerTerritoireLayout = ({ children }: PropsWithChildren) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);

  return (
    <Suspense>
      <div className="flex min-h-screen">
        {/* Menu latéral fixe */}
        <MenuLateral isCollapsed={isMenuCollapsed} onToggleCollapse={setIsMenuCollapsed} />
        {/* Contenu principal */}
        <div className={`flex-1 flex flex-col transition-all duration-500 ease-in-out ${isMenuCollapsed ? 'ml-[50px]' : 'ml-[322px]'}`}>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ExplorerTerritoireLayout;
