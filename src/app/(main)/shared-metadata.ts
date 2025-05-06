import { type Metadata } from 'next';

const description =
  'Assurez une compréhension partagée du diagnostic de vulnérabilité de votre territoire avec Facili-TACCT et favoriser le dialogue sur des problématiques clairement identifiées.';

export const sharedMetadata: Metadata = {
  description,
  openGraph: {
    description,
    type: 'website',
    locale: 'fr_FR',
    countryName: 'France',
    siteName: "Facili-TACCT - adaptez votre territoire au changement climatique"
    // images: [
    //   {
    //     url: new URL(``, config.host),
    //     alt: "",
    //   },
    // ],
  }
};
