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
