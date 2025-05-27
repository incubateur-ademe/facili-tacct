SELECT
  c.code_geographique,
  c.epci,
  st_astext(st_centroid(c.geometry)) AS centroid,
  e.name,
  e.pk,
  e.etateco,
  st_asgeojson(e.geometry) AS geometry
FROM
  (
    communes_drom c
    JOIN etat_cours_d_eau e ON (
      st_dwithin(
        e.geometry,
        st_centroid(c.geometry),
        (0.1) :: double precision
      )
    )
  );