import { Brand } from "@/components/Brand";
import HeaderComp from "@/components/Header";
import { HeaderClientOnly } from "@/components/utils/ClientOnly";
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { Footer } from "@codegouvfr/react-dsfr/Footer";
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
    template: `Facili-TACCT - adaptez votre territoire au changement climatique - %s`,
    default: "Facili-TACCT - adaptez votre territoire au changement climatique"
  },
  openGraph: {
    title: "Facili-TACCT - adaptez votre territoire au changement climatique",
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
      <HeaderClientOnly>
        <HeaderComp />
      </HeaderClientOnly>
      <main>{children}</main>
      <Footer
        id={footerId}
        brandTop={<Brand />}
        accessibility="non compliant"
        accessibilityLinkProps={{ href: '/accessibilite' }}
        contentDescription={
          <>
            {config.name} est un service porté par l’Agence de la transition écologique
            (ADEME), en partenariat avec Météo France.
            <br></br>
            Notre mission : Accompagner les territoires pour une meilleure appropriation
            de leur vulnérabilité aux impacts du changement climatique.
            Facili-TACCT met à disposition les données climatiques du patch 4°C,
            mesure 23 du plan national d’adaptation au changement climatique (PNACC 3).
          </>
        }
        operatorLogo={{
          alt: "Logo de l'ADEME",
          imgUrl: '/logo-ademe-meteofrance.jpg',
          orientation: 'horizontal',
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
