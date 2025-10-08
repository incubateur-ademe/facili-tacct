WITH base AS (
  -- 1) On ne garde que les événements pertinents et on découpe l’URL
  --    - retire le domaine (http(s)://...)
  --    - isole le chemin en minuscules (raw_path) et la querystring (qs)
  SELECT
    session_id,
    person_id,
    event_timestamp,
    current_url,
    properties,
    lower(
      split_part(
        regexp_replace(current_url, '^https?://[^/]+', ''), -- enlève le domaine
        '?', 1
      )
    ) AS raw_path,                                           -- ex: "/donnees-territoriales"
    split_part(
      regexp_replace(current_url, '^https?://[^/]+', ''),
      '?', 2
    ) AS qs                                                  -- ex: "code=...&type=...&thematique=..."
  FROM analytics.all_pageview_raw
  WHERE current_url ILIKE '%/thematiques%'
     OR current_url ILIKE '%/donnees-territoriales%'
),

kv AS (
  -- 2) On éclate la querystring en paires "key=value"
  --    (une ligne par paire ; qs vide => pas d’erreur, COALESCE -> '')
  SELECT
    b.session_id,
    b.person_id,
    b.event_timestamp,
    b.current_url,
    b.properties,
    b.raw_path,
    b.qs,
    regexp_split_to_table(COALESCE(b.qs, ''), '&') AS pair
  FROM base b
),

kv_parsed AS (
  -- 3) On sépare chaque paire en clé (k) et valeur (v)
  --    - clés en minuscules (k)
  --    - valeur vide => NULL (NULLIF)
  SELECT
    session_id,
    person_id,
    event_timestamp,
    current_url,
    properties,
    raw_path,
    lower(split_part(pair, '=', 1)) AS k,
    NULLIF(split_part(pair, '=', 2), '') AS v
  FROM kv
),

params AS (
  -- 4) On “pivote” les paires k/v en colonnes utiles par événement
  --    - path_norm: chemin sans slash final
  --    - on récupère les variantes de clés (ex: thematique / thématique)
  SELECT
    session_id,
    person_id,
    event_timestamp,
    current_url,
    properties,
    regexp_replace(raw_path, '/+$', '') AS path_norm,
    MAX(v) FILTER (WHERE k = 'type')                        AS p_type,
    MAX(v) FILTER (WHERE k = 'code')                        AS p_code,
    MAX(v) FILTER (WHERE k = 'libelle')                     AS p_libelle,
    MAX(v) FILTER (WHERE k IN ('thematique','thématique'))  AS p_thematique,
    MAX(v) FILTER (WHERE k = 'codgeo')                      AS p_codgeo,
    MAX(v) FILTER (WHERE k = 'codepci')                     AS p_codepci
  FROM kv_parsed
  GROUP BY session_id, person_id, event_timestamp, current_url, properties, raw_path
),

normalized AS (
  -- 5) Normalisations et mapping ancien/nouveau schéma
  --    - prev_path_norm: page précédente, déduite de 3 sources PostHog
  --    - règles “ancien schéma”:
  --        * codgeo + codepci => type=commune, code=codgeo
  --        * seulement codepci => type=epci, code=codepci
  --      sinon on prend p_type/p_code du “nouveau schéma”
  --    - libellé / thématique: on remplace “+” par espace (lisibilité)
  SELECT
    session_id,
    person_id,
    event_timestamp,
    current_url,
    properties,
    path_norm,

	-- prev pathname normalisé depuis 3 sources
    regexp_replace(
      lower(
        COALESCE(
          properties->>'$prev_pageview_pathname',
          properties->>'$prev_pathname',
          NULLIF(
            split_part(
              regexp_replace(COALESCE(properties->>'$prev_url',''), '^https?://[^/]+', ''),
              '?', 1
            ),
            ''
          )
        )
      ),
      '/+$', ''
    ) AS prev_path_norm,

    CASE
      WHEN p_codgeo IS NOT NULL AND p_codepci IS NOT NULL THEN 'commune'
      WHEN p_codgeo IS NULL  AND p_codepci IS NOT NULL THEN 'epci'
      ELSE NULLIF(p_type, '')
    END AS type_norm,

    CASE
      WHEN p_codgeo IS NOT NULL AND p_codepci IS NOT NULL THEN p_codgeo
      WHEN p_codgeo IS NULL  AND p_codepci IS NOT NULL THEN p_codepci
      ELSE NULLIF(p_code, '')
    END AS code_norm,

    NULLIF(replace(COALESCE(p_libelle, ''), '+', ' '), '')    AS libelle_norm,
    NULLIF(replace(COALESCE(p_thematique, ''), '+', ' '), '') AS thematique
  FROM params
),

eligible_sessions AS (
  -- 6) On sélectionne les sessions qui respectent le “tunnel” d’usage
  --    Conditions:
  --     a) la session contient au moins un /thematiques ET un /donnees-territoriales
  --     b) et (au moins une arrivée DT avec prev=/thematiques)
  --        OU (ordre temporel: min(ts thematiques) < min(ts DT))
  SELECT session_id
  FROM normalized
  GROUP BY session_id
  HAVING
    COUNT(*) FILTER (WHERE path_norm = '/donnees-territoriales') > 0
    AND COUNT(*) FILTER (WHERE path_norm = '/thematiques') > 0
    AND (
      COUNT(*) FILTER (
        WHERE path_norm = '/donnees-territoriales'
          AND prev_path_norm = '/thematiques'
      ) > 0
      OR (
        MIN(event_timestamp) FILTER (WHERE path_norm = '/thematiques')
        <
        MIN(event_timestamp) FILTER (WHERE path_norm = '/donnees-territoriales')
      )
    )
),

clean AS (
  -- 7) On ne garde que les événements utiles:
  --    - seulement les /donnees-territoriales (là où les params territoire existent)
  --    - uniquement dans les sessions éligibles
  --    - seulement si (type, libelle OU code) sont déterminés
  SELECT
    n.session_id,
    n.person_id,
    n.event_timestamp,
    n.current_url,
    n.path_norm,
    n.type_norm    AS type,
    n.code_norm    AS code,
    n.libelle_norm AS libelle,
    n.thematique,
	CASE
		WHEN n.code_norm IS NOT NULL THEN 'code:' || n.code_norm
		ELSE 'label:' || n.libelle_norm
    END AS territory_key
  FROM normalized n
  JOIN eligible_sessions es USING (session_id)
  WHERE n.path_norm = '/donnees-territoriales'
    AND (n.code_norm IS NOT NULL OR n.libelle_norm IS NOT NULL)
    AND n.type_norm IS NOT NULL
),

per_session_territory AS (
  -- 8) Déduplication au grain (session, territoire)
  --    - 1 ligne par (session_id, type, code)
  --    - on agrège:
  --        * libelle_any: un libellé non vide si dispo
  --        * set des thématiques vues pour ce territoire dans la session
  --        * set des URLs brutes DT de la session
  SELECT
    session_id,
    type,
	territory_key,
	-- propage le code si présent (NULL sinon)
	MAX(code) FILTER (WHERE code IS NOT NULL) AS code_any,
	-- libellé représentatif (non vide si possible)
    COALESCE(
      max(libelle) FILTER (WHERE libelle IS NOT NULL AND libelle <> ''),
      ''
    ) AS libelle_any,
    array_agg(DISTINCT NULLIF(thematique, '')) FILTER (WHERE thematique IS NOT NULL AND thematique <> '') AS session_thematiques,
    array_agg(DISTINCT current_url) AS session_urls_dt
  FROM clean
  GROUP BY session_id, type, territory_key
),

territory_agg AS (
  -- 9) Agrégation finale par territoire (type, code)
  --    - recherche_count = # de sessions distinctes ( = # lignes per_session_territory)
  --    - thematiques_count = cardinalité du set global des thématiques
  --    - thematiques = set global
  --    - urls_brutes = set global des URLs DT
  --    - libelle = libellé le plus fréquent non vide (fallback: max)
  SELECT
    type,
    territory_key,
	-- code = non null si la clé était de type "code:..."
    MAX(code_any) AS code,
    -- libellé : le plus fréquent non vide, fallback sinon
    COALESCE(
      (SELECT libelle_any
       FROM (
         SELECT libelle_any, COUNT(*) AS c
         FROM per_session_territory pst2
         WHERE pst2.type = pst.type
           AND pst2.territory_key = pst.territory_key
           AND libelle_any IS NOT NULL
           AND libelle_any <> ''
         GROUP BY libelle_any
         ORDER BY c DESC, libelle_any ASC
         LIMIT 1
       ) s),
      max(libelle_any)
    ) AS libelle,

    COUNT(*) AS recherche_count,

    cardinality(
      (SELECT array_agg(DISTINCT t)
       FROM (
         SELECT unnest(session_thematiques) AS t
         FROM per_session_territory pst2
         WHERE pst2.type = pst.type
           AND pst2.territory_key = pst.territory_key
       ) u)
    ) AS thematiques_count,

    (SELECT array_agg(DISTINCT t)
     FROM (
       SELECT unnest(session_thematiques) AS t
       FROM per_session_territory pst2
       WHERE pst2.type = pst.type
         AND pst2.territory_key = pst.territory_key
     ) u) AS thematiques,

    (SELECT array_agg(DISTINCT u)
     FROM (
       SELECT unnest(session_urls_dt) AS u
       FROM per_session_territory pst2
       WHERE pst2.type = pst.type
         AND pst2.territory_key = pst.territory_key
     ) uu) AS urls_brutes
  FROM per_session_territory pst
  GROUP BY type, territory_key
)

-- 10) Filtre produit: on retient les territoires “assez utilisés” ET “diversifiés”
SELECT
  code,
  libelle,
  type,
  recherche_count,       -- nb de sessions où le territoire a été recherché (dédupliqué par session)
  thematiques_count,     -- nb de thématiques distinctes consultées sur ce territoire
  COALESCE(thematiques,  ARRAY[]::text[]) AS thematiques,
  COALESCE(urls_brutes,  ARRAY[]::text[]) AS urls_brutes
FROM territory_agg
WHERE recherche_count >= 3
  AND thematiques_count >= 3
ORDER BY recherche_count DESC, thematiques_count DESC, code;
