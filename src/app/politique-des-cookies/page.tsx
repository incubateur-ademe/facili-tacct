// import { type Metadata } from "next";

// import { anchorHeadingMDXComponents } from "@/mdx-components";

// import PolitiqueCookies from "../../../content/politique-de-confidentialite/cookies.mdx";
// import { Container } from "../../dsfr/server";
// import { sharedMetadata } from "../shared-metadata";

// const title = "Politique des cookies";
// const url = "/politique-des-cookies";

// export const metadata: Metadata = {
//   ...sharedMetadata,
//   title,
//   openGraph: {
//     ...sharedMetadata.openGraph,
//     title,
//     url,
//   },
//   alternates: {
//     canonical: url,
//   },
// };

// const PolitiqueConfidentialite = () => {
//   return (
//     <Container my="4w">
//       <h1>{title}</h1>
//       <PolitiqueCookies components={anchorHeadingMDXComponents} />
//     </Container>
//   );
// };

// export default PolitiqueConfidentialite;

import { fr } from "@codegouvfr/react-dsfr";
import { CookiesPolicy } from "@incubateur-ademe/legal-pages-react/CookiesPolicy";

import { CookieConsentButton } from "../CookieConsentButton";

export default function CookiePolicyPage() {
  return (
    <div className={fr.cx("fr-container", "fr-my-4w")}>
      <CookiesPolicy
        analyticTool={{
          name: "None",
          cookieListUrl: "",
          policyUrl: "",
        }}
        cookieConsentButton={<CookieConsentButton>CLICK</CookieConsentButton>}
        siteName="Facili-TACCT"
      />
    </div>
  );
}
