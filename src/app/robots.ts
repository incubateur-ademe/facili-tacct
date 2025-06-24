import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/sandbox/*', '/iframe/*']
    },
    sitemap: 'https://facili-tacct.beta.gouv.fr/sitemap.xml'
  };
}
