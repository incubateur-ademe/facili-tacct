import '../global.css';

import RootLayout from '@/app/layout';
import dynamic from 'next/dynamic';
import { type PropsWithChildren } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

const PostHogPageView = dynamic(() => import('../PostHogPageView'), {
  ssr: false
});

const RootLayoutIframe = ({ children }: PropsWithChildren) => {
  return (
    <RootLayout>
      <PostHogPageView />
      <div>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          {children}
        </NextAppDirEmotionCacheProvider>
      </div>
    </RootLayout>
  );
};

export default RootLayoutIframe;
