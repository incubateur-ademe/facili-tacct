import styles from '@/app/(main)/ressources/[collectionId]/[slug]/articles.module.scss';
import { CustomAccordion } from '@/design-system/base/Accordion';
import { H1, H2 } from '@/design-system/base/Textes';
import { NewContainer } from '@/design-system/layout';
import { getFaqItems, type FaqItem } from '@/lib/queries/notion/notion';
import { normalizeText } from '@/lib/utils/reusableFunctions/NormalizeTexts';
import { Metadata } from 'next';
import { SommaireFAQ } from './Sommaire';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Foire aux questions Facili-TACCT'
};

const FaqPage = async () => {
  const items = await getFaqItems();

  const grouped = items.reduce<Record<string, FaqItem[]>>((acc, item) => {
    const cat = item.categorie || 'Autres';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  const headings = Object.keys(grouped).map((cat) => normalizeText(cat));

  return (
    <NewContainer size="xl">
      <H1 style={{ marginBottom: '3.5rem', color: "var(--principales-vert)" }}>
        Questions fréquentes
      </H1>
      <div className={styles.articleContent}>
        <div className={styles.sommaire}>
          <SommaireFAQ headings={headings} />
        </div>
        <div className={styles.article} style={{ paddingTop: "0rem" }}>
          {Object.entries(grouped).map(([categorie, faqItems]) => {
            const anchorId = normalizeText(categorie);
            return (
              <section
                key={categorie}
                id={anchorId}
                style={{ marginBottom: '56px', scrollMarginTop: '2rem' }}
              >
                <H2
                  style={{
                    overflowWrap: "normal",
                    fontSize: "28px",
                  }}
                >
                  {categorie}
                </H2>
                <div style={{ width: "3rem", borderBottom: "1px solid #DDDDDD", marginBottom: "1.5rem" }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {faqItems.map((item) => (
                    <CustomAccordion label={item.question} key={item.id}>
                      {item.reponse}
                    </CustomAccordion>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </NewContainer>
  );
};

export default FaqPage;
