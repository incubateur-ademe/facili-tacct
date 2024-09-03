import { Container } from "@/dsfr/server";
import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { Metadata } from "next";
import ArticleComp from "./comp";

export const metadata: Metadata = {
  title: "Ressources",
  description: "Article",
};

const Article = () => {
  return (
    <Container size="xl" className="mb-24">
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
    </Container>
  )
};

export default Article;
