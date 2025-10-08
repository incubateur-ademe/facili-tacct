# Extraction de la North Star Metric : Territoires réellement consultés

> **But non-technique** : identifier les territoires qui présentent un **usage répété** (au moins 3 sessions) et **diversifié** (au moins 3 thématiques différentes), en ne comptant que les sessions qui suivent le **parcours normal** “Thématiques → Données territoriales”.

## Pourquoi cette approche ?

- **Fidélité à l’usage réel** : nous filtrons les sessions qui suivent le **tunnel** attendu. Cela évite de compter les arrivées directes ou accidentelles sur “Données territoriales”.
- **Qualité plutôt que quantité** : nous ne retenons que les territoires **suffisamment consultés** (récurrence) et **sous plusieurs angles** (diversité thématique).
- **Robustesse aux changements d’URL** : nous normalisons les anciens et les nouveaux formats d’URL pour retrouver de manière fiable le type et le code du territoire.
- **Déduplication honnête** : un **territoire compte une fois par session**, même si l’utilisateur recharge ou reclique plusieurs fois.

## Principe de fonctionnement (vue d’ensemble)

1. **Filtrage initial des pages** : on ne garde que les événements dont l’URL correspond à `/thematiques` ou `/donnees`.
2. **Découpage d’URL** : pour chaque événement, on retire le domaine, on isole le chemin (ex. `/donnees`) et la querystring (ex. `code=...&type=...`).
3. **Parsing des paramètres** : on transforme la querystring en paires `clé=valeur`, puis on pivote pour récupérer les colonnes utiles : `type`, `code`, `libelle`, `thematique` et, pour l’ancien schéma, `codgeo`/`codepci`.
4. **Normalisation** :
    - Chemin : suppression du slash final, minuscule (ex. `/thematiques/` → `/thematiques`).
    - Page précédente (propriété analytics) : on tente successivement `"$prev_pageview_pathname"`, `"$prev_pathname"`, puis on extrait le *pathname* de `"$prev_url"`.
    - Règles ancien/nouveau schéma :
        • si `codgeo` **et** `codepci` → `type = commune`, `code = codgeo` ;
        • si `codepci` seul → `type = epci`, `code = codepci` ;
        • sinon on utilise `type`/`code` fournis par le nouveau schéma.
    - Lecture plus lisible : on remplace les `+` (encodage d’espace) par des espaces pour `libelle` et `thematique`.
5. **Sélection des sessions “éligibles” (tunnel)** : une session est retenue si elle contient **au moins** une page `/thematiques` **et** une page `/donnees`, **et** si :   
    - soit au moins une arrivée sur `/donnees` a `prev = /thematiques` ;
    - soit, à défaut, la première `/thematiques` est **antérieure** à la première `/donnees`.
6. **Focus sur “Données territoriales”** : après sélection des sessions éligibles, on ne garde que les événements `/donnees` pour lesquels le territoire est **identifiable** (`type` et `libelle` connus).
7. **Déduplication par session/territoire** : On compte au maximum une fois un même territoire dans une même session. Pour chaque couple `(session_id, territoire)`, on compile :
    - un **libellé** représentatif (le premier non vide),
    - la **liste distincte** des **thématiques** vues dans la session pour ce territoire,
    - la **liste distincte** des **URLs brutes** de “Données territoriales”.
8. **Agrégation finale par territoire** :
    - `recherche_count` = nombre de **sessions** où le territoire apparaît (déjà dédupliqué par session),
    - `thematiques_count` = nombre de **thématiques distinctes** agrégées sur l’ensemble des sessions,
    - on conserve aussi la liste des `thematiques` et des `urls_brutes`,
    - `libelle` = libellé **le plus fréquent** non vide observé pour ce territoire (fallback si besoin).
9. **Filtre produit** : on garde les territoires avec **≥ 3** sessions et **≥ 3** thématiques.

## ⚠️ Points d’attention importants
- **Grain de la métrique = session** : on ne compte pas des personnes, mais des **sessions**. Un même utilisateur peut générer plusieurs sessions.
- **Déduplication intra-session** : un territoire est compté **une seule fois** par session, même si l’utilisateur clique/recharge plusieurs fois.
- **Exigence du tunnel** : les sessions qui n’empruntent pas le parcours “Thématiques → Données territoriales” ne sont **pas comptées**.
- **Ancien & nouveau schémas d’URL** : l’algorithme fusionne les deux pour retrouver de façon fiable `(type, code)` ; si un nouveau format apparaît, il faudra adapter la normalisation.
- **Libellés/thématiques issus de l’URL** : petites variations d’encodage ou typographiques peuvent subsister (ex. accents, `%xx`). Nous corrigeons le `+` (espace), et l’algorithme privilégie le **libellé le plus fréquent**.
- **Dépendance aux données analytics** : la reconstruction du *prev* ou l’ordre temporel nécessite des événements correctement horodatés et les propriétés analytics (`$prev_*`) correctement renseignées.

## Limites connues
- **Arrivées directes** sur “Données territoriales” (sans passer par “Thématiques”) sont exclues par design.
- **Sessions courtes / interruptions** : si la navigation est tronquée (ex. perte d’événement), la session peut être exclue.
- **Périmètre temporel** : par défaut, la requête travaille sur **toute** la table ; il est possible d’ajouter un filtre de dates en amont.

## Glossaire rapide
- **Session** : regroupement d’événements (pageviews) déterminé par l’outil analytics.
- **Thématique** : critère de consultation (paramètre d’URL) appliqué à un territoire.
- **Territoire** : couple `(type, code)` ; ex. `type=commune`, `code=40261`.
- **Tunnel** : parcours attendu de l’utilisateur “/thematiques → /donnees”.

## Lecture des résultats
- **`recherche_count` élevé** = territoire **fréquemment** consulté (sessions nombreuses).  
- **`thematiques_count` élevé** = territoire consulté sous **plusieurs angles** (diversité).  
- **`thematiques` / `urls_brutes`** = transparence et auditabilité (rejeu, vérification).
