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

type ArreteCatNat = {
  annee_arrete: number;
  lib_risque_jo: string;
  dat_pub_arrete: string;
  code_geographique: string;
  departement: string;
  epci: string;
  index: bigint;
  libelle_epci: string;
  libelle_geographique: string;
  region: number;
};

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
