import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { allArticles } from '../articlesList';

export const generateMetadata = async (
  { params }: {params: Promise<{ slug: string }>}
): Promise<Metadata> => {
  const { slug } = await params;
  const article = allArticles.find(a => a.slug === slug);
  if (!article) return {};
  return {
    title: article.metadata.title,
    description: article.metadata.description,
    openGraph: {
      title: article.metadata.title,
      description: article.metadata.description,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const article = allArticles.find(a => a.slug === slug);
  if (!article) return notFound();
  const Component = article.Component;
  return (
    <div className="max-w-2xl m-auto pb-24">
      <Breadcrumb
        currentPageLabel={article.metadata.title}
        homeLinkProps={{ href: '/' }}
        segments={[{ label: 'Ressources', linkProps: { href: '/ressources' } }]}
      />
      <Suspense>
        <Component />
      </Suspense>
    </div>
  );
}
