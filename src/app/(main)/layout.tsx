import { Brand } from '@/components/Brand';
import { HeaderComp as Header } from '@/components/Header';
import { ClientOnly } from '@/components/utils/ClientOnly';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { Footer } from '@codegouvfr/react-dsfr/Footer';
import { type Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense, type PropsWithChildren } from 'react';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { config } from '../../config';
import { CookieBanner } from './cookieBanner';
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
        <Suspense>
          <Header />
        </Suspense>
      </ClientOnly>
      <main>{children}</main>
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
            text: 'Politique des cookies',
            linkProps: { href: '/politique-des-cookies' }
          },
          {
            ...headerFooterDisplayItem,
            iconId: 'fr-icon-theme-fill'
          }
        ]}
        termsLinkProps={{ href: '/mentions-legales' }}
        homeLinkProps={{ href: '/', title: 'Accueil' }}
      />
      <CookieBanner />
    </NextAppDirEmotionCacheProvider>
  );
};

export default LayoutMain;
