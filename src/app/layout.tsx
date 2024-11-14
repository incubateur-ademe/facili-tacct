import "./global.css";

import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import { type Metadata } from "next";
import Link from "next/link";
import { type PropsWithChildren, Suspense } from "react";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";

import { Brand } from "@/components/Brand";
import { HeaderComp as Header } from "@/components/Header";

import { config } from "../config";
import { defaultColorScheme } from "../defaultColorScheme";
import { StartDsfr } from "../StartDsfr";
// import {
//   ConsentBannerAndConsentManagement,
//   FooterConsentManagementItem,
//   FooterPersonalDataPolicyItem,
// } from "../ui/consentManagement";
import posthog from 'posthog-js';
import styles from "./root.module.scss";
import { sharedMetadata } from "./shared-metadata";

posthog.init('phc_nsb48oCvlg6fbb8KXqc9VHKB5LeA6ep3l4HMJfECv8R',
  {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
  }
)
const contentId = "content";
const footerId = "footer";

export const metadata: Metadata = {
  metadataBase: new URL(config.host),
  ...sharedMetadata,
  title: {
    template: `${config.name} - %s`,
    default: config.name,
  },
  openGraph: {
    title: {
      template: `${config.name} - %s`,
      default: config.name,
    },
    ...sharedMetadata.openGraph,
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="fr" {...getHtmlAttributes({ defaultColorScheme, lang: "fr" })} className={cx(styles.app)}>
      <head>
        <StartDsfr />
        <DsfrHead Link={Link} preloadFonts={["Marianne-Regular", "Spectral-Regular", "Spectral-ExtraBold"]} />
      </head>
      <body>
        <DsfrProvider lang="fr">
          {/* <ConsentBannerAndConsentManagement /> */}
          <div>
            <Suspense>
              <Header />
            </Suspense>
            <NextAppDirEmotionCacheProvider options={{ key: "css" }}>{children}</NextAppDirEmotionCacheProvider>
            <Footer
              id={footerId}
              brandTop={<Brand />}
              accessibility="non compliant"
              accessibilityLinkProps={{ href: "/accessibilite" }}
              contentDescription={`${config.name} est un service développé par l'accélérateur de la transition écologique de l'ADEME.`}
              bottomItems={[
                {
                  text: "Politique de confidentialité",
                  linkProps: { href: "/politique-de-confidentialite" },
                },
                // <FooterPersonalDataPolicyItem key="FooterPersonalDataPolicyItem" />,
                {
                  ...headerFooterDisplayItem,
                  iconId: "fr-icon-theme-fill",
                },
                // <FooterConsentManagementItem key={0} />,
                // <FooterPersonalDataPolicyItem key={1} />,
                // {
                //   text: `Version ${config.appVersion}.${config.appVersionCommit.slice(0, 7)}`,
                //   linkProps: {
                //     href: `${config.repositoryUrl}/commit/${config.appVersionCommit}` as never,
                //   },
                // },
              ]}
              termsLinkProps={{ href: "/mentions-legales" }}
              homeLinkProps={{ href: "/", title: "Accueil" }}
              license={
                <>
                  Sauf mention contraire, tous les contenus de ce site sont sous{" "}
                  <a href={`${config.repositoryUrl}/main/LICENSE`} target="_blank" rel="noreferrer">
                    licence Apache 2.0
                  </a>
                </>
              }
            />
          </div>
        </DsfrProvider>
      </body>
    </html>
  );
};

export default RootLayout;
