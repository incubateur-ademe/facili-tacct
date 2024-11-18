type GenericObject = {
  [key: string]: string | number | bigint | null;
}

type CatnatTypes = "Inondations" | 
  "Grêle / neige" | 
  "Sécheresse" | 
  "Cyclones / Tempêtes" | 
  "Retrait-gonflement des argiles" | 
  "Mouvements de terrain" | 
  "Tous types" | 
  "Avalanche"

type ArreteCatNat = {
  annee_arrete: number;
  lib_risque_jo: string | null;
  dat_pub_arrete: string | null;
  code_geographique: string | null;
  departement: string | null;
  epci: string | null;
  index: bigint | null;
  libelle_epci: string | null;
  libelle_geographique: string | null;
  region: number | null;
}

type DataByCodeGeographique = {
  indexName: string;
  Inondations?: number;
  "Grêle / neige"? : number;
  "Sécheresse"? : number;
  "Cyclones / Tempêtes"? : number;
  "Retrait-gonflement des argiles"? : number;
  "Mouvements de terrain"? : number;
  "Avalanche"? : number;
}
type TabIcons = {
  name: string;
  iconNotSelected: StaticImageData;
  iconSelected: StaticImageData;
}
  