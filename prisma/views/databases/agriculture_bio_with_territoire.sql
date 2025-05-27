SELECT
  bio.index,
  bio.epci,
  bio.libelle_epci,
  bio."VARIABLE",
  bio."LIBELLE_SOUS_CHAMP",
  bio.surface_2022,
  bio.surface_2021,
  bio.surface_2020,
  bio.surface_2019,
  bio.nombre_2022,
  bio.nombre_2021,
  bio.nombre_2020,
  bio.nombre_2019,
  coll.code_geographique,
  coll.libelle_geographique,
  coll.libelle_departement,
  coll.libelle_petr,
  coll.ept
FROM
  (
    agriculture_bio bio
    JOIN collectivites_searchbar coll ON ((bio.epci = coll.epci))
  );