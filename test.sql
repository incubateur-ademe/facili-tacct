-- Requête north star pour les epci nouvelles urls

WITH valid_sessions AS (
    SELECT session_id
    FROM analytics.all_pageview_raw
    WHERE current_url LIKE '%type=epci%'
    GROUP BY session_id
    HAVING SUM(CASE WHEN current_url LIKE '%thematiques%' THEN 1 ELSE 0 END) > 0
       AND SUM(CASE WHEN current_url LIKE '%donnees-territoriales%' THEN 1 ELSE 0 END) > 0
),
searched_codes AS (
    SELECT DISTINCT session_id, substring(current_url from '([0-9]{9})') AS code
    FROM analytics.all_pageview_raw
    WHERE session_id IN (SELECT session_id FROM valid_sessions)
      AND current_url LIKE '%thematiques%'
      AND current_url LIKE '%type=epci%'
),
consultations AS (
    SELECT s.session_id, s.code, d.current_url AS url,
           replace(split_part(d.current_url, 'thematique=', 2), '+', '_') AS thematique,
           CASE WHEN d.current_url LIKE '%libelle=%'
                THEN replace(split_part(split_part(d.current_url, 'libelle=', 2), '&', 1), '%20', ' ')
                ELSE NULL END AS libelle
    FROM searched_codes s
    JOIN analytics.all_pageview_raw d ON s.session_id = d.session_id
    WHERE d.current_url LIKE '%donnees-territoriales%'
      AND d.current_url LIKE '%type=epci%'
      AND substring(d.current_url from '([0-9]{9})') = s.code
)
SELECT code,
       COUNT(DISTINCT session_id) AS recherche_count,
       array_agg(DISTINCT thematique) FILTER (WHERE thematique IS NOT NULL) AS thematiques,
       COUNT(DISTINCT thematique) AS thematiques_count,
       MIN(libelle) AS libelle,
       array_agg(url) AS urls
FROM consultations
GROUP BY code
HAVING COUNT(DISTINCT session_id) >= 3 AND COUNT(DISTINCT thematique) >= 3;


-- Anciennes urls

WITH valid_sessions AS (
    -- Sessions ayant à la fois thematiques et donnees avec codepci (sans codgeo)
    SELECT session_id
    FROM analytics.all_pageview_raw
    WHERE current_url LIKE '%/thematiques%'
       OR current_url LIKE '%/donnees%'
    GROUP BY session_id
    HAVING
        SUM(CASE WHEN current_url LIKE '%/thematiques%' AND current_url LIKE '%codepci%' AND current_url NOT LIKE '%codgeo%' THEN 1 ELSE 0 END) > 0
        AND
        SUM(CASE WHEN current_url LIKE '%/donnees%' AND current_url LIKE '%codepci%' AND current_url NOT LIKE '%codgeo%' THEN 1 ELSE 0 END) > 0
),
searches AS (
    SELECT
        apr.session_id,
        apr.person_id,
        apr.current_url,
        -- Extraction du code (codepci si pas codgeo)
        CASE
            WHEN regexp_match(apr.current_url, 'codgeo=([^&]+)') IS NOT NULL
            THEN (regexp_match(apr.current_url, 'codgeo=([^&]+)'))[1]
            ELSE (regexp_match(apr.current_url, 'codepci=([^&]+)'))[1]
        END AS territory_id,
        -- Thematique : tout après '=', comme en Python, puis replace + par _
        REPLACE(split_part(apr.current_url, 'thematique=', 2), '+', '_') AS thematique,
        -- Type
        CASE
            WHEN regexp_match(apr.current_url, 'codgeo=([^&]+)') IS NOT NULL
            THEN 'commune'
            ELSE 'epci'
        END AS type
    FROM analytics.all_pageview_raw apr
    JOIN valid_sessions vs ON apr.session_id = vs.session_id
    WHERE apr.current_url LIKE '%/donnees%'
      AND apr.current_url LIKE '%thematique%'
      AND (apr.current_url LIKE '%codepci%' OR apr.current_url LIKE '%codgeo%')
      AND split_part(apr.current_url, 'thematique=', 2) IS NOT NULL
      AND (
          (regexp_match(apr.current_url, 'codgeo=([^&]+)') IS NOT NULL)
          OR
          (regexp_match(apr.current_url, 'codepci=([^&]+)') IS NOT NULL)
      )
)
SELECT
    territory_id AS code,
    NULL AS libelle,  -- Comme en Python, pas de libelle ici
    COUNT(DISTINCT session_id) AS recherche_count,  -- Nombre de sessions, pas d'utilisateurs
    COUNT(DISTINCT thematique) AS thematiques_count,
    ARRAY_AGG(DISTINCT thematique ORDER BY thematique) AS thematiques,
    type
    -- Retire urls_brutes si ça pose problème
FROM searches
WHERE type = 'epci'
GROUP BY territory_id, type
HAVING COUNT(DISTINCT session_id) >= 3
   AND COUNT(DISTINCT thematique) >= 3
ORDER BY recherche_count DESC;
