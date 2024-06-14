import "./global.css";

import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import { type Metadata } from "next";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";

import { Brand } from "../components/Brand";
import { config } from "../config";
import { defaultColorScheme } from "../defaultColorScheme";
import { StartDsfr } from "../StartDsfr";
import {
  ConsentBannerAndConsentManagement,
  FooterConsentManagementItem,
  FooterPersonalDataPolicyItem,
} from "../ui/consentManagement";
import styles from "./root.module.scss";
import { sharedMetadata } from "./shared-metadata";

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
          <ConsentBannerAndConsentManagement />
          <div>
            <Header
              brandTop={<Brand />}
              homeLinkProps={{
                href: "/",
                title: `Accueil - ${config.name}`,
              }}
              serviceTitle={
                <>
                  {config.name}{" "}
                  <Badge as="span" noIcon severity="success">
                    Beta
                  </Badge>
                </>
              }
            />
            <NextAppDirEmotionCacheProvider options={{ key: "css" }}>{children}</NextAppDirEmotionCacheProvider>
            <Footer
              id={footerId}
              accessibility="non compliant"
              accessibilityLinkProps={{ href: "/accessibilite" }}
              contentDescription={`${config.name} est un service développé par l'accélérateur de la transition écologique de l'ADEME.`}
              bottomItems={[
                {
                  text: "CGU",
                  linkProps: { href: "/cgu" },
                },
                // <FooterPersonalDataPolicyItem key="FooterPersonalDataPolicyItem" />,
                {
                  ...headerFooterDisplayItem,
                  iconId: "fr-icon-theme-fill",
                },
                <FooterConsentManagementItem key={0} />,
                <FooterPersonalDataPolicyItem key={1} />,
                // {
                //   text: `Version ${config.appVersion}.${config.appVersionCommit.slice(0, 7)}`,
                //   linkProps: {
                //     href: `${config.repositoryUrl}/commit/${config.appVersionCommit}` as never,
                //   },
                // },
              ]}
              termsLinkProps={{ href: "/mentions-legales" }}
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
