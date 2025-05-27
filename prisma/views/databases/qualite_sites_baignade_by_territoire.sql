SELECT
  qsb.index,
  qsb."DEP_NOM",
  qsb."DEP_NUM",
  qsb."TYPE",
  qsb."COMMUNE",
  qsb."POINT",
  qsb."LONG",
  qsb."LAT",
  qsb."QEB_2013",
  qsb."QEB_2014",
  qsb."QEB_2015",
  qsb."QEB_2016",
  qsb."QEB_2017",
  qsb."QEB_2018",
  qsb."QEB_2019",
  qsb."QEB_2020",
  cs.libelle_pnr,
  cs.libelle_petr,
  cs.ept,
  cs.libelle_epci,
  cs.libelle_departement,
  cs.libelle_geographique
FROM
  (
    qualite_sites_baignade qsb
    JOIN (
      SELECT
        DISTINCT collectivites_searchbar.departement,
        collectivites_searchbar.libelle_pnr,
        collectivites_searchbar.libelle_petr,
        collectivites_searchbar.ept,
        collectivites_searchbar.libelle_epci,
        collectivites_searchbar.libelle_departement,
        collectivites_searchbar.libelle_geographique
      FROM
        collectivites_searchbar
      WHERE
        (collectivites_searchbar.departement IS NOT NULL)
    ) cs ON ((qsb."DEP_NUM" = cs.departement))
  );