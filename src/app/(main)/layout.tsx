import '../global.css';

import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { Footer } from '@codegouvfr/react-dsfr/Footer';
import { type Metadata } from 'next';
import { type PropsWithChildren, Suspense } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

import { Brand } from '@/components/Brand';
import { HeaderComp as Header } from '@/components/Header';

import RootLayout from '@/app/layout';
import dynamic from 'next/dynamic';
import { config } from '../../config';
import { Banner } from './banner';
import { sharedMetadata } from './shared-metadata';

const footerId = 'footer';

export const metadata: Metadata = {
  metadataBase: new URL(config.host),
  ...sharedMetadata,
  title: {
    template: `${config.name} - %s`,
    default: config.name
  },
  openGraph: {
    title: {
      template: `${config.name} - %s`,
      default: config.name
    },
    ...sharedMetadata.openGraph
  }
};

const PostHogPageView = dynamic(() => import('../PostHogPageView'), {
  ssr: false
});

const RootLayoutMain = ({ children }: PropsWithChildren) => {
  return (
    <RootLayout>
      <PostHogPageView />
      <div>
        <Suspense>
          <Header />
        </Suspense>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          {children}
        </NextAppDirEmotionCacheProvider>
        <Footer
          id={footerId}
          brandTop={<Brand />}
          accessibility="non compliant"
          accessibilityLinkProps={{ href: '/accessibilite' }}
          contentDescription={`${config.name} est un service développé par l'accélérateur de la transition écologique de l'ADEME.`}
          operatorLogo={{
            alt: "Logo de l'ADEME",
            imgUrl: '/logo-ademe.svg',
            orientation: 'vertical'
          }}
          bottomItems={[
            {
              text: 'Politique de confidentialité',
              linkProps: { href: '/politique-de-confidentialite' }
            },
            {
              ...headerFooterDisplayItem,
              iconId: 'fr-icon-theme-fill'
            }
          ]}
          termsLinkProps={{ href: '/mentions-legales' }}
          homeLinkProps={{ href: '/', title: 'Accueil' }}
          license={
            <>
              Sauf mention contraire, tous les contenus de ce site sont sous{' '}
              <a
                href={`${config.repositoryUrl}/main/LICENSE`}
                target="_blank"
                rel="noreferrer"
              >
                licence Apache 2.0
              </a>
            </>
          }
        />
      </div>
      <Banner />
    </RootLayout>
  );
};

export default RootLayoutMain;
