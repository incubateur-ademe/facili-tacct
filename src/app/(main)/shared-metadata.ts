import { type Metadata } from 'next';

const description = 'Facili-TACCT est un outil d’aide à la décision pour les collectivités territoriales. Il permet de mieux comprendre les enjeux liés au changement climatique et d’identifier des solutions adaptées.';

export const sharedMetadata: Metadata = {
  description,
  openGraph: {
    description,
    type: 'website',
    locale: 'fr_FR',
    countryName: 'France',
    // siteName: 'Facili-TACCT'
    // images: [
    //   {
    //     url: new URL(``, config.host),
    //     alt: "",
    //   },
    // ],
  }
};
