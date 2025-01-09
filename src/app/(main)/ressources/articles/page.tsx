import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { Metadata } from 'next';
import { Suspense } from 'react';
import ArticleComp from './articles';

export const metadata: Metadata = {
  title: 'Ressources',
  description: 'Article'
};

const Article = () => {
  return (
    <div className="max-w-2xl m-auto pb-24">
      <Breadcrumb
        currentPageLabel="Article"
        homeLinkProps={{
          href: '/'
        }}
        segments={[
          {
            label: 'Ressources',
            linkProps: {
              href: '/ressources'
            }
          }
        ]}
      />
      <Suspense>
        <ArticleComp />
      </Suspense>
    </div>
  );
};

export default Article;
