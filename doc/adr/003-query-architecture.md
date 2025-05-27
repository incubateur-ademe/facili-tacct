CREATE OR REPLACE VIEW postgis.communes_drom_view AS
SELECT 
  pk,
  code_geographique,
  libelle_geographique,
  epci,
  libelle_epci,
  departement,
  region,
  ept,
  libelle_petr,
  code_pnr,
  libelle_pnr,
  coordinates,
  densite_bati,
  precarite_logement,
  surface,
  ST_AsGeoJSON(geometry) AS geometry
FROM postgis.communes_drom;


/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
view communes_drom_view {
  pk                   Int?
  code_geographique    String? @db.VarChar
  libelle_geographique String? @db.VarChar
  epci                 String? @db.VarChar
  libelle_epci         String? @db.VarChar
  departement          String? @db.VarChar
  region               BigInt?
  ept                  String? @db.VarChar
  libelle_petr         String? @db.VarChar
  code_pnr             String? @db.VarChar
  libelle_pnr          String? @db.VarChar
  coordinates          String? @db.VarChar
  densite_bati         Float?
  precarite_logement   Float?
  surface              Float?
  geometry             String?

  @@ignore
  @@schema("postgis")
}




CREATE OR REPLACE VIEW qualite_sites_baignade_by_territoire AS
SELECT
  qsb.index,
  qsb.DEP_NOM,
  qsb.DEP_NUM,
  qsb.TYPE,
  qsb.COMMUNE,
  qsb.POINT,
  qsb.LONG,
  qsb.LAT,
  qsb.QEB_2013,
  qsb.QEB_2014,
  qsb.QEB_2015,
  qsb.QEB_2016,
  qsb.QEB_2017,
  qsb.QEB_2018,
  qsb.QEB_2019,
  qsb.QEB_2020,
  cs.libelle_pnr,
  cs.libelle_petr,
  cs.ept,
  cs.libelle_epci,
  cs.libelle_departement,
  cs.libelle_geographique
FROM qualite_sites_baignade qsb
JOIN (
  SELECT DISTINCT departement, libelle_pnr, libelle_petr, ept, libelle_epci, libelle_departement, libelle_geographique
  FROM collectivites_searchbar
  WHERE departement IS NOT NULL
) cs
ON qsb.DEP_NUM = cs.departement;


CREATE OR REPLACE VIEW postgis.etat_cours_deau_by_commune AS
SELECT
  c.code_geographique,
  c.epci,
  ST_AsText(ST_Centroid(c.geometry)) AS centroid,
  e.name,
	e.pk,
  e.etateco,
  ST_AsGeoJSON(e.geometry) AS geometry
FROM postgis.communes_drom c
JOIN postgis.etat_cours_d_eau e
  ON ST_DWithin(
    e.geometry,
    ST_Centroid(c.geometry),
    0.1
  );

CREATE OR REPLACE VIEW postgis.etat_cours_deau_by_epci AS
SELECT
  c.epci,
  e.name,
  e.etateco,
  ST_AsGeoJSON(e.geometry) AS geometry
FROM postgis.etat_cours_d_eau e
JOIN (
  SELECT
    epci,
    ST_Union(geometry) AS epci_geom
  FROM postgis.communes_drom
  GROUP BY epci
) c
ON ST_Intersects(e.geometry, c.epci_geom);
