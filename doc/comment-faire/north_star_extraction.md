# How-to — Extraire la North Star Metric (requête + guide opérationnel)

Ce document est la **recette pas-à-pas** pour exécuter la requête et comprendre **ce que fait chaque fonction SQL** utilisée.  
Il complète *explication.md* avec une approche **Diátaxis – How-to** : concis, actionnable, mais didactique sur les primitives SQL.

---

## TL;DR (checklist rapide)

1. Ouvrir votre client SQL (ou Notebook) connecté à Postgres.  
2. Coller la requête ci-dessous telle quelle (version **avec fallback sans code** via `territory_key`).  
3. (Optionnel) Ajouter un **filtre temporel** dans `base`.  
4. Exécuter → table : `code | libelle | type | recherche_count | thematiques_count | thematiques | urls_brutes`.

---

## Requête complète (copier-coller)

```sql
WITH base AS (
  SELECT
    session_id,
    person_id,
    event_timestamp,
    current_url,
    properties,
    lower(
      split_part(
        regexp_replace(current_url, '^https?://[^/]+', ''),
        '?', 1
      )
    ) AS raw_path,
    split_part(
      regexp_replace(current_url, '^https?://[^/]+', ''),
      '?', 2
    ) AS qs
  FROM analytics.all_pageview_raw
  WHERE current_url ILIKE '%/thematiques%' OR current_url ILIKE '%/donnees-territoriales%'
),

kv AS (
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
  SELECT
    session_id,
    person_id,
    event_timestamp,
    current_url,
    properties,
    path_norm,

    regexp_replace(
      lower(
        COALESCE(
          properties->>'$prev_pageview_pathname',
          properties->>'$prev_pathname',
          NULLIF(split_part(regexp_replace(COALESCE(properties->>'$prev_url',''), '^https?://[^/]+', ''), '?', 1), '')
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
  SELECT session_id
  FROM normalized
  GROUP BY session_id
  HAVING
    COUNT(*) FILTER (WHERE path_norm = '/donnees-territoriales') > 0
    AND COUNT(*) FILTER (WHERE path_norm = '/thematiques') > 0
    AND (
      COUNT(*) FILTER (WHERE path_norm = '/donnees-territoriales' AND prev_path_norm = '/thematiques') > 0
      OR (
        MIN(event_timestamp) FILTER (WHERE path_norm = '/thematiques')
        < MIN(event_timestamp) FILTER (WHERE path_norm = '/donnees-territoriales')
      )
    )
),

clean AS (
  -- IMPORTANT : on autorise (code OU libelle), avec type non null
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
      WHEN n.code_norm IS NOT NULL THEN 'code:'  || n.code_norm
      ELSE 'label:' || n.libelle_norm
    END AS territory_key
  FROM normalized n
  JOIN eligible_sessions es USING (session_id)
  WHERE n.path_norm = '/donnees-territoriales'
    AND n.type_norm IS NOT NULL
    AND (n.code_norm IS NOT NULL OR n.libelle_norm IS NOT NULL)
),

per_session_territory AS (
  -- Dédup par (session, type, territory_key)
  SELECT
    session_id,
    type,
    territory_key,
    MAX(code) FILTER (WHERE code IS NOT NULL) AS code_any,
    COALESCE(
      MAX(libelle) FILTER (WHERE libelle IS NOT NULL AND libelle <> ''),
      ''
    ) AS libelle_any,
    array_agg(DISTINCT NULLIF(thematique, '')) FILTER (WHERE thematique IS NOT NULL AND thematique <> '') AS session_thematiques,
    array_agg(DISTINCT current_url) AS session_urls_dt
  FROM clean
  GROUP BY session_id, type, territory_key
),

territory_agg AS (
  -- Agrégation finale par (type, territory_key)
  SELECT
    type,
    territory_key,
    MAX(code_any) AS code,
    COALESCE(
      (SELECT libelle_any
       FROM (
         SELECT libelle_any, COUNT(*) AS c
         FROM per_session_territory pst2
         WHERE pst2.type = pst.type
           AND pst2.territory_key = pst.territory_key
           AND libelle_any IS NOT NULL AND libelle_any <> ''
         GROUP BY libelle_any
         ORDER BY c DESC, libelle_any ASC
         LIMIT 1
       ) s),
      MAX(libelle_any)
    ) AS libelle,
    COUNT(*) AS recherche_count,
    cardinality(
      (SELECT array_agg(DISTINCT t)
       FROM (
         SELECT unnest(session_thematiques) AS t
         FROM per_session_territory pst2
         WHERE pst2.type = pst.type AND pst2.territory_key = pst.territory_key
       ) u)
    ) AS thematiques_count,
    (SELECT array_agg(DISTINCT t)
     FROM (
       SELECT unnest(session_thematiques) AS t
       FROM per_session_territory pst2
       WHERE pst2.type = pst.type AND pst2.territory_key = pst.territory_key
     ) u) AS thematiques,
    (SELECT array_agg(DISTINCT u)
     FROM (
       SELECT unnest(session_urls_dt) AS u
       FROM per_session_territory pst2
       WHERE pst2.type = pst.type AND pst2.territory_key = pst.territory_key
     ) uu) AS urls_brutes
  FROM per_session_territory pst
  GROUP BY type, territory_key
)

SELECT
  code,           -- peut être NULL si pas de code
  libelle,
  type,
  recherche_count,
  thematiques_count,
  COALESCE(thematiques, ARRAY[]::text[]) AS thematiques,
  COALESCE(urls_brutes, ARRAY[]::text[]) AS urls_brutes
FROM territory_agg
WHERE recherche_count >= 3
  AND thematiques_count >= 3
ORDER BY recherche_count DESC, thematiques_count DESC, libelle, code;
```

---

## Ce que fait chaque fonction / idiome SQL (mini-exemples)

### Nettoyage & parsing d’URL
- `regexp_replace(s, '^https?://[^/]+', '')` : retire le **domaine** d’une URL.  
- `regexp_replace(path, '/+$', '')` : retire les **slashs finaux**.  
- `split_part(text, '?', n)` : **découpe** autour de `?` → n=1: le **path**, n=2: la **querystring**.  
- `lower(text)` : minuscule pour uniformiser.

### Découper la querystring
- `regexp_split_to_table(qs, '&')` : `a=1&b=2` → **deux lignes** `a=1`, `b=2`.  
- `split_part(pair, '=', 1/2)` : récupère **clé** et **valeur**.  
- `NULLIF(v, '')` : convertit `''` en `NULL`.

### Pivot
- `MAX(v) FILTER (WHERE k='code')` : remonte la valeur pour une **clé** donnée.  
- `GROUP BY` sur les identifiants d’événement : **une ligne par événement**.

### JSONB (propriétés analytics)
- `properties->>'$prev_pageview_pathname'` : lit un **texte** d’un JSONB.  
- `COALESCE(a,b,c)` : **premier non NULL**.  
- `split_part(regexp_replace(prev_url, '^https?://[^/]+', ''), '?', 1)` : extrait le **pathname**.

### Mapping ancien/nouveau
- `CASE WHEN ... THEN ... ELSE ...` : applique les **règles métier** (`codgeo`, `codepci`, `type`, `code`).  
- `replace(text, '+', ' ')` : remet des espaces à la place des `+`.

### Sélection des sessions (tunnel)
- `COUNT(*) FILTER (WHERE ...) > 0` : vérifie la **présence** d’événements.  
- `MIN(ts) FILTER (...) < MIN(ts) FILTER (...)` : impose un **ordre temporel**.

### Dédup par session/territoire
- `territory_key` : `'code:'||code` ou `'label:'||libelle` si pas de code.  
- `array_agg(DISTINCT ...)` : construit des **ensembles** sans doublons au niveau **session**.

### Agrégation finale
- `COUNT(*)` dans `territory_agg` = **nb de sessions** où le territoire apparaît.  
- `unnest(array)` + `array_agg(DISTINCT ...)` : union **globale** des thématiques/URLs.  
- `cardinality(array)` : taille d’un tableau (nb de thématiques).

---

## Variantes utiles

### Pour obtenir le chiffre brut de la North Star (soit le nombre de ligne dans la table de résultats)
Wrapper la requête complète dans :
```sql
SELECT COUNT(*) AS north_star FROM (requête-complète) AS subquery;
```

### Filtrer une période
Dans `base` :
```sql
WHERE event_timestamp >= DATE '2025-01-01'
  AND event_timestamp <  DATE '2026-01-01'
  AND (current_url ILIKE '%/thematiques%' OR current_url ILIKE '%/donnees-territoriales%')
```

### Tunnel “ordre strict uniquement” (sans prev_*)
Dans `eligible_sessions` :
```sql
AND (
  MIN(event_timestamp) FILTER (WHERE path_norm = '/thematiques')
  <
  MIN(event_timestamp) FILTER (WHERE path_norm = '/donnees-territoriales')
)
```

### KPI par **personne**
Dans `per_session_territory`, remplacer `session_id` par `person_id`.

---

## Vérifs & debug rapides

1) **Formes des chemins** :
```sql
SELECT regexp_replace(lower(split_part(regexp_replace(current_url, '^https?://[^/]+', ''), '?', 1)), '/+$', '') AS path_norm,
       COUNT(*) 
FROM analytics.all_pageview_raw
WHERE current_url ILIKE '%/thematiques%' OR current_url ILIKE '%/donnees-territoriales%'
GROUP BY 1 ORDER BY 2 DESC;
```

2) **Valeurs de “prev” sur /donnees-territoriales** :
```sql
SELECT
  regexp_replace(
    lower(
      COALESCE(
        properties->>'$prev_pageview_pathname',
        properties->>'$prev_pathname',
        NULLIF(split_part(regexp_replace(COALESCE(properties->>'$prev_url',''), '^https?://[^/]+', ''), '?', 1), '')
      )
    ),
    '/+$', ''
  ) AS prev_path_norm,
  COUNT(*)
FROM analytics.all_pageview_raw
WHERE lower(split_part(regexp_replace(current_url, '^https?://[^/]+', ''), '?', 1)) ILIKE '/donnees-territoriales%'
GROUP BY 1 ORDER BY 2 DESC;
```

3) **Sessions ok (ordre sans prev)** :
```sql
WITH x AS (
  SELECT session_id,
         regexp_replace(lower(split_part(regexp_replace(current_url, '^https?://[^/]+', ''), '?', 1)), '/+$', '') AS path_norm,
         event_timestamp
  FROM analytics.all_pageview_raw
  WHERE current_url ILIKE '%/thematiques%' OR current_url ILIKE '%/donnees-territoriales%'
)
SELECT COUNT(*) AS sessions_ok
FROM (
  SELECT session_id
  FROM x
  GROUP BY session_id
  HAVING COUNT(*) FILTER (WHERE path_norm = '/donnees-territoriales') > 0
     AND COUNT(*) FILTER (WHERE path_norm = '/thematiques') > 0
     AND (MIN(event_timestamp) FILTER (WHERE path_norm = '/thematiques')
          < MIN(event_timestamp) FILTER (WHERE path_norm = '/donnees-territoriales'))
) s;
```

---

## Bonnes pratiques & perf

- **Index** (si volumétrie élevée) :
  - `CREATE INDEX ON analytics.all_pageview_raw (session_id);`
  - `CREATE INDEX ON analytics.all_pageview_raw (event_timestamp);`
- **Traçabilité produit** : si la logique évolue (nouveau schéma d’URL / tunnel), consignez la **date** et la **motivation** dans votre doc.
- **Normalisation** : si de fortes variations de libellé demeurent, envisager `lower(unaccent(libelle))` (si extension `unaccent`).

---

## Erreurs fréquentes

- **« column ... must appear in the GROUP BY »**  
  → Vous regroupez sur `COALESCE(code, libelle)` mais sélectionnez `code`.  
  **Fix** : introduire `territory_key` et propager `code` via `MAX(code)`.

- **Résultat vide**  
  → Tunnel trop strict ou clés QS variées (`thématique` vs `thematique`). Utiliser la version “split/pivot” et les requêtes de vérif.
