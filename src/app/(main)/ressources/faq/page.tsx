import styles from '@/app/(main)/ressources/[collectionId]/[slug]/articles.module.scss';
import { SommaireClient } from '@/app/(main)/ressources/[collectionId]/[slug]/SommaireClient';
import { CustomAccordion } from '@/design-system/base/Accordion';
import { H1, H2 } from '@/design-system/base/Textes';
import { NewContainer } from '@/design-system/layout';
import { getFaqItems, type FaqItem } from '@/lib/queries/notion/notion';
import { normalizeText } from '@/lib/utils/reusableFunctions/NormalizeTexts';
import { Metadata } from 'next';

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
      <H1 style={{ marginBottom: '2rem' }}>Foire aux questions</H1>
      <div className={styles.articleContent}>
        <div className={styles.sommaire}>
          <SommaireClient headings={headings} />
        </div>
        <div className={styles.article}>
          {Object.entries(grouped).map(([categorie, faqItems]) => {
            const anchorId = normalizeText(categorie);
            return (
              <section
                key={categorie}
                id={anchorId}
                style={{ marginBottom: '56px', scrollMarginTop: '2rem' }}
              >
                <H2>{categorie}</H2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {faqItems.map((item) => (
                    <CustomAccordion label={item.question} key={item.id}>
                      {item.reponse}
                    </CustomAccordion>
                    // <li
                    //   key={item.id}
                    //   style={{
                    //     marginBottom: '1.5rem',
                    //     borderBottom: '1px solid #e5e5e5',
                    //     paddingBottom: '1.5rem'
                    //   }}
                    // >
                    //   <p
                    //     style={{
                    //       fontWeight: 700,
                    //       fontSize: '1.1rem',
                    //       marginBottom: '0.5rem',
                    //       fontFamily: 'Marianne'
                    //     }}
                    //   >
                    //     {item.question}
                    //   </p>
                    //   <p style={{ margin: 0, lineHeight: '1.6' }}>{item.reponse}</p>
                    // </li>
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
