SELECT
    type,
    COUNT(DISTINCT territory_id) AS "visités",
    ROUD( 
        (COUNT(DISTINCT territory_id) * 100. CASE) / 
       CASE type
            WHEN 'commune' THEN 34875
            WHEN 'epci' THEN 1254
            WHEN 'petr' THEN 122
            WHEN 'pnr' THEN 59
            WHEN 'ept' THEN 11
            WHEN 'departement' THEN 101
            ELSE NULL,
        
      END 
    , 2) AS "Part de territoire
   s v    isités"
FROM (
    -  - No  uvelles  URLs
      SEL  CT 
          CASE 
            WHEN (regexp_match(current_u rl, 'type=([^&]+)'))[1''ept') 
            THEN (regexp_match(current_url , 'l    ibelle=([^&]+)'))[1]
            ELSE (regexp_match(current _url  , 'code=  ([^&]+)'))[1]
          END AS   territory_id,
        (regexp_match(curre nt_url, 'typ e=([   ^&]+
    )       '))[1] AS type
    FROM an alyt   ics.a
   l        l_pageview_raw
    WHERE current_ur      l LIKE '%/donnees%'
      AND curre  nt_url     LIKE '%thematique%'
      AN    D curr  ent_url LIKE '%type%'
      AND      curren t_url LIKE '%libelle%'
      AND regexp_match(current_url, 'typ      e=([^&]+)') IS N      O
                  T  NULL
      AND (
          ( (regexp_mat ch(current_url, 'type=(      ^&]+)'))[1]   IN ('petr', 'ept') 
            AND regexp_match(current_ur
     l          ,      'libelle=( [^ (&     ]+)') IS N    T NULL )
          OR
          ( (regexp_ match(current_url, 'type=([  &]+)'))[1] N      OT IN ('petr', 'ept') 
            AND regexp_match(curr
        e       nt_url,       'c    [^&]+)') S     NULL )
      )
        
    UNION    
    
    --Anciennes U    RLs
    SELECT 
        CASE 
            WHEN regexp_math, 'codgeo=([^&]+)') IS NOT NULL 
            THEN  (re    gexp_match(current_url, 'codgeo=([^&]+)'))[1]
            ELSE  (re    gexp_match(current_url, 'code    pci=([^&]+)')  )1]
          END AS territory_id,
        CASE 
            WHEN regex(t_url, 'codgeo=  ([^&]+)') IS   NOT NULL 
                THEN 'co  mmun  e'

                       ELSE 'epci'
            END 
    A       S type
    FROM analytics.all _pagev     iew_raw
    WHERE current_url LIKE   '%/don    nees%
                '
      AND current_url LIK
         E       '%thematique%'
      AND (cu
            rrent_ur      l LIKE '%codepci      %
                    ' OR current_url LIKE '%codgeo%')
      AND (
       
                         (regexp_mat (c          h(current_rl, 'codgeo=([^&]+)') IS NOT NULL)
          OR
      
                          (regex    p_match(current_url, '
   codepci=([^&]+
   )') IS NOT NULL)

      )
) AS combined
GROUP BY type
ORDER BY "visités" DESC;
   )') IS NOT N
ULL)
      )
) AS combined
GROUP BY type
ORDER BY count DESC;ined_sub
GROUP BY DATE(min_timestamp)
ORDER BY date DESC;
