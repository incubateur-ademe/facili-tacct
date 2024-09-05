import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { Metadata } from "next";
import ArticleComp from "./comp";

export const metadata: Metadata = {
  title: "Ressources",
  description: "Article",
};

const Article = () => {
  return (
    <div className="max-w-2xl m-auto pb-24">
      <Breadcrumb
        currentPageLabel="Article"
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
      <ArticleComp />
    </div>
  )
};

export default Article;
