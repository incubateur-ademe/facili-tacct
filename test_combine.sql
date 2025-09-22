WITH valid_sessions AS (
    SELECT session_id
    FROM analytics.all_pageview_raw
    WHERE
        -- New URLs: type=epci
        (current_url LIKE '%type=epci%') OR
        -- Old URLs: /thematiques or /donnees
        (current_url LIKE '%/thematiques%' OR current_url LIKE '%/donnees%')
    GROUP BY session_id
    HAVING
        -- For new: thematiques and donnees-territoriales
        (SUM(CASE WHEN current_url LIKE '%thematiques%' AND current_url LIKE '%type=epci%' THEN 1 ELSE 0 END) > 0
         AND SUM(CASE WHEN current_url LIKE '%donnees-territoriales%' AND current_url LIKE '%type=epci%' THEN 1 ELSE 0 END) > 0)
        OR
        -- For old: thematiques and donnees with codepci (no codgeo)
        (SUM(CASE WHEN current_url LIKE '%/thematiques%' AND current_url LIKE '%codepci%' AND current_url NOT LIKE '%codgeo%' THEN 1 ELSE 0 END) > 0
         AND SUM(CASE WHEN current_url LIKE '%/donnees%' AND current_url LIKE '%codepci%' AND current_url NOT LIKE '%codgeo%' THEN 1 ELSE 0 END) > 0)
),

consultations AS (
    SELECT
        apr.session_id,
        -- Code extraction
        CASE
            WHEN apr.current_url LIKE '%type=epci%' THEN substring(apr.current_url from '([0-9]{9})')
            ELSE CASE
                WHEN regexp_match(apr.current_url, 'codgeo=([^&]+)') IS NOT NULL THEN (regexp_match(apr.current_url, 'codgeo=([^&]+)'))[1]
                ELSE (regexp_match(apr.current_url, 'codepci=([^&]+)'))[1]
            END
        END AS code,
        -- Thematique
        REPLACE(split_part(apr.current_url, 'thematique=', 2), '+', '_') AS thematique,
        -- Libelle (only for new)
        CASE WHEN apr.current_url LIKE '%type=epci%' AND apr.current_url LIKE '%libelle=%'
             THEN replace(split_part(split_part(apr.current_url, 'libelle=', 2), '&', 1), '%20', ' ')
             ELSE NULL END AS libelle,
        -- URL (only for new donnees)
        CASE WHEN apr.current_url LIKE '%type=epci%' AND apr.current_url LIKE '%donnees-territoriales%' THEN apr.current_url ELSE NULL END AS url,
        -- Type
        CASE
            WHEN apr.current_url LIKE '%type=epci%' THEN 'epci'
            WHEN regexp_match(apr.current_url, 'codgeo=([^&]+)') IS NOT NULL THEN 'commune'
            ELSE 'epci'
        END AS type
    FROM analytics.all_pageview_raw apr
    JOIN valid_sessions vs ON apr.session_id = vs.session_id
    WHERE
        -- For new: thematiques or donnees-territoriales with type=epci
        ((apr.current_url LIKE '%thematiques%' OR apr.current_url LIKE '%donnees-territoriales%') AND apr.current_url LIKE '%type=epci%')
        OR
        -- For old: donnees with thematique and (codepci or codgeo)
        (apr.current_url LIKE '%/donnees%' AND apr.current_url LIKE '%thematique%' AND (apr.current_url LIKE '%codepci%' OR apr.current_url LIKE '%codgeo%'))
)

SELECT
    code,
    MIN(libelle) AS libelle,
    COUNT(DISTINCT session_id) AS recherche_count,
    ARRAY_AGG(DISTINCT thematique ORDER BY thematique) FILTER (WHERE thematique IS NOT NULL) AS thematiques,
    COUNT(DISTINCT thematique) AS thematiques_count,
    ARRAY_AGG(url) FILTER (WHERE url IS NOT NULL) AS urls,
    type
FROM consultations
WHERE type = 'epci'
GROUP BY code, type
HAVING COUNT(DISTINCT session_id) >= 3 AND COUNT(DISTINCT thematique) >= 3
ORDER BY recherche_count DESC;
