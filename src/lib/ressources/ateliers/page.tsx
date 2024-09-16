import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { Metadata } from "next";
import AtelierComp from "./comp";

export const metadata: Metadata = {
  title: "Ressources",
  description: "Atelier",
};

const Atelier = () => {
  return (
    <div className="max-w-2xl m-auto pb-24">
      <Breadcrumb
        currentPageLabel="Atelier"
        homeLinkProps={{
          href: "/",
        }}
        segments={[
          {
            label: "Ressources",
            linkProps: {
              href: "/ressources",
            },
          },
        ]}
      />
      <AtelierComp />
    </div>
  )
};

export default Atelier;
