import HeaderComp from "@/components/ui/Header";
import AppFooter from "@/design-system/layout/Footer";
import { Suspense, type PropsWithChildren } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';


const LayoutMain = ({ children }: PropsWithChildren) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <Suspense>
        <HeaderComp />
      </Suspense>
      <main>{children}</main>
      <AppFooter />
    </NextAppDirEmotionCacheProvider>
  );
};

export default LayoutMain;
