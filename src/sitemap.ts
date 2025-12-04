import type { MetadataRoute } from 'next';
import { allArticles } from './app/(main)/ressources/_articles/articlesList';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://facili-tacct.beta.gouv.fr';
  const articles = allArticles.map(article => ({
    url: `${baseUrl}/ressources/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...articles,
  ];
}
