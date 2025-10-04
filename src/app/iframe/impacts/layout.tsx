"use client";
import { Loader } from '@/components/ui/loader';
import { MenuLateral } from '@/components/ui/MenuLateral';
import { type PropsWithChildren, Suspense, useState } from 'react';

const ImpactsTerritoireLayout = ({ children }: PropsWithChildren) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);
  return (
    <Suspense fallback={
      <div className='flex justify-center items-center h-screen'>
        <Loader />
      </div>
    }>
      <div className="flex min-h-screen">
        {/* Menu latéral fixe */}
        <MenuLateral isCollapsed={isMenuCollapsed} onToggleCollapse={setIsMenuCollapsed} />
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

export default ImpactsTerritoireLayout;
