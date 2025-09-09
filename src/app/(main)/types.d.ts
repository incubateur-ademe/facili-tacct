/* eslint typescript-sort-keys/interface: error */
import { StaticImageData } from 'next/image';
import { type ReactNode } from 'react';

type SearchResult = {
  children: ReactNode;
  id: string;
  prefix?: ReactNode;
  route: string;
};

type SearchParams = Promise<{
  code: string;
  libelle: string;
  thematique: string;
  type: string;
  title?: string;
}>;

type GenericObject = {
  [key: string]: string | number | bigint | null;
};

type CatnatTypes =
  | 'Inondations'
  | 'Grêle / neige'
  | 'Sécheresse'
  | 'Cyclones / Tempêtes'
  | 'Retrait-gonflement des argiles'
  | 'Mouvements de terrain'
  | 'Tous types'
  | 'Avalanche';

type DataByCodeGeographique = {
  indexName: string;
  Inondations?: number;
  'Grêle / neige'?: number;
  Sécheresse?: number;
  'Cyclones / Tempêtes'?: number;
  'Retrait-gonflement des argiles'?: number;
  'Mouvements de terrain'?: number;
  Avalanche?: number;
};
type TabIcons = {
  name: string;
  iconNotSelected: StaticImageData;
  iconSelected: StaticImageData;
};

type PrelevementsEauYears =
  | 'A2008'
  | 'A2009'
  | 'A2010'
  | 'A2011'
  | 'A2012'
  | 'A2013'
  | 'A2014'
  | 'A2015'
  | 'A2016'
  | 'A2017'
  | 'A2018'
  | 'A2019'
  | 'A2020';
