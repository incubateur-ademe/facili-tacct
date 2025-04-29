export const config = {
  host: process.env.NEXT_PUBLIC_SITE_URL!,
  // name: 'Facili-TACCT',
  tagline: '',
  env: (process.env.TACCT_ENV || 'dev') as 'dev' | 'prod' | 'staging',
  // appVersion: process.env.NEXT_PUBLIC_APP_VERSION!,
  // appVersionCommit: process.env.NEXT_PUBLIC_APP_VERSION_COMMIT!,
  repositoryUrl: process.env.NEXT_PUBLIC_REPOSITORY_URL!,
  formUrl: '',
  description:
    'Facili-TACCT est un outil d’aide à la décision pour les collectivités territoriales. Il permet de mieux comprendre les enjeux liés au changement climatique et d’identifier des solutions adaptées.'
};
