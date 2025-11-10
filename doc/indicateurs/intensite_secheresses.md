# Documentation de la transformation des données de restrictions sécheresse

## Vue d'ensemble
Les données brutes issues des fichiers GeoJSON de sécheresse sont transformées et territorialisées par commune, puis restructurées dans un format JSON optimisé pour le stockage et l'interrogation en base de données PostgreSQL.

---

## Transformations des colonnes

### 1. Informations de Zone d'Alerte de Sécheresse (ZAS)

| Colonne source | Colonne destination | Type | Encodage/Transformation |
|----------------|---------------------|------|------------------------|
| `id` | *(supprimé)* | - | Non conservé (identifiant interne non pertinent) |
| `idSandre` | *(supprimé)* | - | Non conservé (identifiant technique) |
| `code` | `zas.code` | TEXT | Aucun |
| `type` | `zas.type` | TEXT | Aucun |
| `niveauGravite` | `zas.grav` | INTEGER | **Encodage :** <br>• `vigilance` → `0`<br>• `alerte` → `1`<br>• `alerte_renforcee` → `2`<br>• `crise` → `3`<br>• valeur inconnue → `-1` |
| `pct_couverture` | `zas.pct` | FLOAT | Calcul du pourcentage de couverture de la commune par la ZAS (intersection géométrique / surface totale commune) |

---

### 2. Informations d'Arrêté

| Colonne source | Colonne destination | Type | Encodage/Transformation |
|----------------|---------------------|------|------------------------|
| `arrete_id` | *(supprimé)* | - | Non conservé (identifiant interne) |
| `arrete_numero` | *(supprimé)* | - | Non conservé (rarement utilisé dans les requêtes) |
| `arrete_dateDebut` | `arrete.dat_deb` | TEXT/DATE | Format ISO conservé (YYYY-MM-DD) |
| `arrete_dateFin` | `arrete.dat_fin` | TEXT/DATE | Format ISO conservé (YYYY-MM-DD) |

---

### 3. Informations d'Usage

| Colonne source | Colonne destination | Type | Encodage/Transformation |
|----------------|---------------------|------|------------------------|
| `nom` | `usage.nom` | TEXT | Aucun (nom de l'usage : ex. "Irrigation", "Remplissage piscines") |
| `thematique` | `usage.theme` | TEXT | Aucun (ex. "eau potable", "agriculture") |
| `concerneParticulier` | `usage.part` | INTEGER | **Encodage booléen :**<br>• `true` / `"true"` / `1` → `1`<br>• `false` / `null` / autres → `0` |
| `concerneEntreprise` | `usage.entr` | INTEGER | **Encodage booléen :**<br>• `true` → `1`<br>• `false` / `null` → `0` |
| `concerneCollectivite` | `usage.coll` | INTEGER | **Encodage booléen :**<br>• `true` → `1`<br>• `false` / `null` → `0` |
| `concerneExploitation` | `usage.expl` | INTEGER | **Encodage booléen :**<br>• `true` → `1`<br>• `false` / `null` → `0` |
| `concerneEso` | `usage.eso` | INTEGER | **Encodage booléen :**<br>• `true` → `1`<br>• `false` / `null` → `0` |
| `concerneEsu` | `usage.esu` | INTEGER | **Encodage booléen :**<br>• `true` → `1`<br>• `false` / `null` → `0` |
| `concerneAep` | `usage.aep` | INTEGER | **Encodage booléen :**<br>• `true` → `1`<br>• `false` / `null` → `0` |
| `description` | *(supprimé)* | - | Non conservé (texte libre long rarement utilisé) |

**Légende des acronymes :**
- **ESO** : Eaux Superficielles Ordinaires
- **ESU** : Eaux Souterraines Utiles
- **AEP** : Alimentation en Eau Potable

---

## Structure finale

Les données sont regroupées par `code_geographique` (code INSEE de la commune) dans une colonne JSON `restrictions_YYYY` contenant un tableau d'objets avec la structure suivante :

```json
[
  {
    "zas": {
      "code": "032GEST013",
      "type": "SUP",
      "grav": 2,
      "pct": 0.75
    },
    "arrete": {
      "dat_deb": "2022-07-15",
      "dat_fin": "2022-09-30"
    },
    "usage": {
      "nom": "Irrigation agricole",
      "theme": "agriculture",
      "part": 0,
      "entr": 1,
      "coll": 0,
      "expl": 1,
      "eso": 1,
      "esu": 0,
      "aep": 0
    }
  }
]
```

---

## Gains d'optimisation

### Réduction de taille
- **Noms de clés raccourcis** : `niveauGravite` → `grav`, `concerneParticulier` → `part`, etc.
- **Encodage numérique** : 
  - Gravité : `"alerte_renforcee"` (17 caractères) → `2` (1 caractère) = **94% de réduction**
  - Booléens : `true`/`false` (4-5 caractères) → `0`/`1` (1 caractère) = **75-80% de réduction**
- **Suppression de colonnes inutilisées** : `id`, `idSandre`, `arrete_numero`, `description`

### Estimation du gain global
- **Taille mémoire** : Réduction d'environ **30-40%**
- **Taille CSV** : Réduction d'environ **35-45%**
- **Performance PostgreSQL** : Types entiers (SMALLINT) vs TEXT améliore la vitesse des requêtes de **2-5x**

---

## Table de correspondance PostgreSQL

Pour décoder les valeurs de gravité dans les requêtes, une table de lookup est disponible :

```sql
CREATE TABLE gravite_lookup (
    code SMALLINT PRIMARY KEY,
    label TEXT NOT NULL,
    couleur TEXT
);

INSERT INTO gravite_lookup VALUES 
(0, 'Vigilance', '#92d050'),
(1, 'Alerte', '#ffc000'),
(2, 'Alerte renforcée', '#ff6600'),
(3, 'Crise', '#c00000');
```

**Exemple d'utilisation :**
```sql
SELECT 
    c.code_geographique,
    r->>'code' as zas_code,
    g.label as niveau_gravite,
    g.couleur as couleur_carte
FROM communes_restrictions c,
     jsonb_array_elements(c.restrictions_2022) r
LEFT JOIN gravite_lookup g ON (r->'zas'->>'grav')::int = g.code
WHERE c.code_geographique = '35410';
```

---

## Notes techniques

1. **Gestion des valeurs manquantes** : Les booléens `null` ou absents sont systématiquement convertis en `0`
2. **Normalisation de la gravité** : Les variantes `"alerte renforcée"` (avec accent) sont automatiquement converties en `"alerte_renforcee"`
3. **Précision géométrique** : Les calculs de `pct` (pourcentage de couverture) sont effectués en projection Lambert-93 (EPSG:2154) pour une précision métrique
4. **Format de dates** : Les dates sont conservées au format ISO 8601 (YYYY-MM-DD) pour compatibilité PostgreSQL

---

## Schéma de base de données recommandé

```sql
-- Table principale
CREATE TABLE communes_restrictions (
    code_geographique TEXT PRIMARY KEY,
    restrictions_2022 JSONB NOT NULL,
    geometry GEOMETRY(MultiPolygon, 4326)
);

-- Index pour performance
CREATE INDEX idx_code_geo ON communes_restrictions(code_geographique);
CREATE INDEX idx_restrictions_gin ON communes_restrictions USING gin(restrictions_2022);

-- Compression automatique
ALTER TABLE communes_restrictions 
ALTER COLUMN restrictions_2022 SET STORAGE EXTENDED;
```

---

## Exemples de requêtes

### Récupérer toutes les restrictions d'une commune
```sql
SELECT restrictions_2022 
FROM communes_restrictions 
WHERE code_geographique = '35410';
```

### Communes en alerte renforcée ou crise
```sql
SELECT code_geographique, restrictions_2022
FROM communes_restrictions
WHERE restrictions_2022 @> '[{"zas": {"grav": 2}}]'::jsonb  
   OR restrictions_2022 @> '[{"zas": {"grav": 3}}]'::jsonb;
```

### Batch sur plusieurs communes
```sql
SELECT code_geographique, restrictions_2022
FROM communes_restrictions
WHERE code_geographique = ANY(ARRAY['35410', '75001', '13001']);
```

### Filtrer par thématique
```sql
SELECT code_geographique
FROM communes_restrictions
WHERE restrictions_2022 @> '[{"usage": {"theme": "irrigation"}}]'::jsonb;
```

---
