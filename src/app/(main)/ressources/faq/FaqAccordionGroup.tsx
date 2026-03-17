"use client";

import { CustomAccordion } from '@/design-system/base/Accordion';
import { H2 } from '@/design-system/base/Textes';
import { type FaqItem } from '@/lib/queries/notion/notion';
import { normalizeText } from '@/lib/utils/reusableFunctions/NormalizeTexts';
import { useState } from 'react';

type GroupedFaq = Record<string, FaqItem[]>;

export const FaqAllGroups = ({ grouped }: { grouped: GroupedFaq }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      {Object.entries(grouped).map(([categorie, faqItems]) => {
        const anchorId = normalizeText(categorie);
        const sorted = [...faqItems].sort((a, b) => {
          if (a.ordre === null) return 1;
          if (b.ordre === null) return -1;
          return a.ordre - b.ordre;
        });
        return (
          <section
            key={categorie}
            id={anchorId}
            style={{ marginBottom: '56px', scrollMarginTop: '2rem' }}
          >
            <H2 style={{ overflowWrap: 'normal', fontSize: '28px' }}>
              {categorie}
            </H2>
            <div style={{ width: '3rem', borderBottom: '1px solid #DDDDDD', marginBottom: '1.5rem' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sorted.map((item) => (
                <CustomAccordion
                  label={item.question}
                  key={item.id}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                >
                  {item.reponse}
                </CustomAccordion>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
};
