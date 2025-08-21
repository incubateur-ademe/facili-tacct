import HeaderComp from "@/components/Header";
import { ClientOnly } from "@/components/utils/ClientOnly";
import AppFooter from "@/design-system/layout/Footer";
import { type Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense, type PropsWithChildren } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { config } from '../../config';
import { CookieBanner } from './cookieBanner';
import { sharedMetadata } from './shared-metadata';

export const metadata: Metadata = {
  metadataBase: new URL(config.host),
  ...sharedMetadata,
  openGraph: {
    ...sharedMetadata.openGraph
  },
  description: config.description
};

const PostHogPageView = dynamic(() => import('../PostHogPageView'));

const LayoutMain = ({ children }: PropsWithChildren) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <Suspense>
        <PostHogPageView />
      </Suspense>
      <ClientOnly>
        <HeaderComp />
      </ClientOnly>
      <main>{children}</main>
      <AppFooter />
      <CookieBanner />
    </NextAppDirEmotionCacheProvider>
  );
};

export default LayoutMain;
