import { config } from '@/config';
import { type Metadata } from 'next';

const description =
  'Assurez une compréhension partagée du diagnostic de vulnérabilité de votre territoire avec Facili-TACCT et favoriser le dialogue sur des problématiques clairement identifiées.';

export const sharedMetadata: Metadata = {
  description,
  title: {
    template: `${config.name} - %s`,
    default: config.name,
  },
  openGraph: {
    title: config.name,
    description,
    type: 'website',
    locale: 'fr_FR',
    countryName: 'France',
    siteName: config.name,
    images: [
      {
        url: `${config.host}/logo-tacct-generique-min.jpg`,
        alt: "logo tacct",
      },
    ],
  }
};
