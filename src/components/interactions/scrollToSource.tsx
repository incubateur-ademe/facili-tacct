"use client";

import { Body, H2, H3, H4 } from "@/design-system/base/Textes";
import { sourcesEtudes } from "@/lib/sources";

export const ScrollToSourceTag = ({ children, sourceNumero }: { children: React.ReactNode, sourceNumero: number }) => {
  const handleScrollToSources = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('sourcesSection');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#sourcesSection"
      onClick={handleScrollToSources}
      style={{ cursor: "pointer", backgroundImage: 'none' }}>
      <span style={{ textDecoration: 'underline', textUnderlineOffset: '0.2rem' }}>{children}</span> [{sourceNumero}]
    </a>
  )
};

export const SourcesSection = (
  {
    tag,
    thematique
  }:
    {
      tag: string;
      thematique: "confortThermique" | "agriculture" | "agricultureImpact" | "biodiversite";
    }
) => {
  return (
    <section style={{ marginTop: "40px", border: "1px solid var(--gris-medium)", borderRadius: "1rem" }}>
      <div id="sourcesSection" style={{ padding: "2rem" }}>
        {
          tag === "h2" ?
            <H2 style={{ color: "var(--principales-vert)", fontSize: '1.25rem', margin: 0 }}>
              Sources des données
            </H2>
            : tag === "h3" ?
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.1rem', margin: 0 }}>
                Sources des données
              </H3>
              : tag === "h4" ?
                <H4 style={{ color: "var(--principales-vert)", fontSize: '1rem', margin: 0 }}>
                  Sources des données
                </H4>
                : null
        }
        {sourcesEtudes[thematique].map(source => (
          <Body key={source.numero} size="sm" style={{ marginBottom: '0.5rem' }}>
            [{source.numero}]{" "}
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--graphiques-bleu-1)" }}
            >
              {source.texte}
            </a>
          </Body>
        ))}
      </div>
    </section>
  )
};
