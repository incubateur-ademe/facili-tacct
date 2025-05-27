SELECT
  e.pk,
  c.epci,
  e.name,
  e.etateco,
  st_asgeojson(e.geometry) AS geometry
FROM
  (
    etat_cours_d_eau e
    JOIN (
      SELECT
        communes_drom.epci,
        st_union(communes_drom.geometry) AS epci_geom
      FROM
        communes_drom
      GROUP BY
        communes_drom.epci
    ) c ON (st_intersects(e.geometry, c.epci_geom))
  );