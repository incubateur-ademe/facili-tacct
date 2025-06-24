import type { MetadataRoute } from 'next';
import { allArticles } from './(main)/ressources/articles/articlesList';

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = 'https://facili-tacct.beta.gouv.fr';
  const articles = allArticles.map((article) => ({
    url: `${baseUrl}/ressources/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    ...articles
  ];
};

export default sitemap;
