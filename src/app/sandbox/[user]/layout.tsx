import HeaderComp from "@/components/Header";
import { HeaderClientOnly } from "@/components/utils/ClientOnly";
import AppFooter from "@/design-system/layout/Footer";
import { type PropsWithChildren } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';


const LayoutMain = ({ children }: PropsWithChildren) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <HeaderClientOnly>
        <HeaderComp />
      </HeaderClientOnly>
      <main>{children}</main>
      <AppFooter />
    </NextAppDirEmotionCacheProvider>
  );
};

export default LayoutMain;
