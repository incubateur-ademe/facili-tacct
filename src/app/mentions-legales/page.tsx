// import { type Metadata } from "next";

// import { anchorHeadingMDXComponents } from "@/mdx-components";

// import MentionsLegalesContent from "../../../content/mentions-legales.mdx";
// import { Container } from "../../dsfr/server";
// import { sharedMetadata } from "../shared-metadata";

// const title = "Mentions légales";
// const url = "/mentions-legales";

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

// const MentionsLegales = () => (
//   <Container my="4w">
//     <h1>{title}</h1>
//     <MentionsLegalesContent components={anchorHeadingMDXComponents} />
//   </Container>
// );

// export default MentionsLegales;

import { fr } from "@codegouvfr/react-dsfr";
import { LegalNotice } from "@incubateur-ademe/legal-pages-react/LegalNotice";

export default function LegalNoticePage() {
  return (
    <div className={fr.cx("fr-container", "fr-my-4w")}>
      <LegalNotice
        includeBetaGouv
        siteName="Facili-TACCT"
        siteUrl={process.env.NEXT_PUBLIC_SITE_URL!}
        licenceUrl="https://github.com/incubateur-ademe/facili-tacct/blob/main/LICENSE"
        privacyPolicyUrl="/politique-de-confidentialite"
        siteHost={{
          name: "Scalingo",
          address: "13 rue Jacques Peirotes, 67000 Strasbourg",
          country: "France",
          email: "hello@scalingo.com",
        }}
      />
    </div>
  );
}
