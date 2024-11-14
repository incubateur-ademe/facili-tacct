"use client";
import CDC from "@/lib/ressources/articles/CDC";
import FacilitationDateliers from "@/lib/ressources/articles/facilitationDateliers";
import LireUnDiagnostic from "@/lib/ressources/articles/lireUnDiagnostic";
import MiseEnRecit from "@/lib/ressources/articles/miseEnRecit";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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
    titre: "Le cahier des charges, levier pour intégrer la facilitation",
    Component: () => <CDC />,
  }
];

const Article = () => {
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

export default Article;
