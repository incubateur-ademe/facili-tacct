import '@iframe-resizer/child';
import '../global.css';

import dynamic from 'next/dynamic';
import { Suspense, type PropsWithChildren } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

const PostHogPageView = dynamic(() => import('../PostHogPageView'));

//TODO suspense useful in build ?
const RootLayoutIframe = ({ children }: PropsWithChildren) => {
  return (
    <Suspense>
      <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
        <PostHogPageView />
        <main>{children}</main>
      </NextAppDirEmotionCacheProvider>
    </Suspense>
  );
};

export default RootLayoutIframe;
