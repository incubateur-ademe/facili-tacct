"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import CDC from "./CDC";
import FacilitationDateliers from "./facilitationDateliers";
import LireUnDiagnostic from "./lireUnDiagnostic";
import MiseEnRecit from "./miseEnRecit";

const allArticles = [
  {
    titre: "10 minutes pour analyser les 80 pages de votre diagnostic de vulnérabilité",
    Component: () => <LireUnDiagnostic />,
  },
  {
    titre: "Mettre en récit mon territoire pour engager",
    Component: () => <MiseEnRecit />,
  },
  {
    titre: "La facilitation d’ateliers : une démarche éprouvée d’engagement",
    Component: () => <FacilitationDateliers />,
  },
  {
    titre: "Article CdC sur la facilitation",
    Component: () => <CDC />,
  }
];

const ArticleComp = () => {
  const searchParams = useSearchParams();
  const article = searchParams.get("title");
  return (
    <div>
      <Suspense>
        {(() => {
          const Component = allArticles.find(el => el.titre === article)?.Component;
          if (!Component) return null;
          return (
            <Component/>
          );
        })()}
      </Suspense>
    </div>
  );
};

export default ArticleComp;
