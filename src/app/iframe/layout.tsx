import '@iframe-resizer/child';
import '../global.css';

import dynamic from 'next/dynamic';
import { Suspense, type PropsWithChildren } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

const PostHogPageView = dynamic(() => import('../PostHogPageView'));
const RootLayoutIframe = ({ children }: PropsWithChildren) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <Suspense>
        <PostHogPageView />
      </Suspense>
      <main>{children}</main>
    </NextAppDirEmotionCacheProvider>
  );
};

export default RootLayoutIframe;
