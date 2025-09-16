# PostHog → PostgreSQL → Metabase (Scalingo)

## 1) Objectif

Automatiser, **1×/jour**, l’extraction de données PostHog (HogQL), l’**insertion** dans PostgreSQL. L’implémentation est **sans doublons** et **incrémentale** (ne requête que le nouveau).

---

## 2) Vue d’ensemble

- **Extract**: requête HogQL vers l’API PostHog.
- **Load**: insertion en SQL brut dans PostgreSql via `pg`.
- **Incrémental**: on lit le `MAX(event_timestamp)` en base et on ajoute une borne basse à la requête HogQL.
- **Déduplication**: contrainte unique + `ON CONFLICT DO NOTHING`.
- **Planification**: Scalingo Scheduler (cron) avec **esbuild** pour packager le script en un seul fichier.

---

## 3) Prérequis & variables d’environnement

- `DATABASE_URL` : connexion PostgreSQL.
- `POSTHOG_HOST` (par défaut `https://eu.posthog.com`).
- `POSTHOG_PROJECT_ID`.
- `POSTHOG_API_KEY`.

> Les variables sont fournies par l’environnement (pas de `dotenv` requis en prod).

---

## 4) Base de données

### 4.1 Table cible

Création de la table cible avec une requête classique.

### 4.2 Clé d’unicité (éviter les doublons)

Créer une **contrainte unique** sur les colonnes naturelles (sans `ingested_at`). Deux options équivalentes :

**Option A — Attacher un index existant**
**Option B — Créer directement la contrainte**

> Astuce : normaliser les `NULL` en `''` pour ces colonnes si nécessaire :

---

## 5) Script ETL (Node, bundlé)

### 5.1 Principes

- Fichier source : `run.mjs` (ESM).
- Libs : `pg` (client PostgreSQL), `fs` (lecture de la requête HogQL).
- **TLS activé** côté `pg` (serveur exige le chiffrement).
- **esbuild** bundle → `dist/etl.js` autonome, pas de `node_modules` dans le slug.

### 5.2 Extraits clés (logique)

**Connexion PG (TLS requis)**

L'instance Scalingo nécessite une connexion sécurisée

**Dernier timestamp ingéré**

Pour que le run soit moins gourmand, on vérifie le dernier timestamp dans la base de données

**Injection de fenêtre temporelle dans HogQL**

> La requête HogQL d’origine contient `AND timestamp < now()`.

---

## 6) Fichier de requête HogQL

- Emplacement : `etl/queries/query.hogql.sql`.
- Contient **ta requête PostHog** (longue/complexe) avec au moins la clause `AND timestamp < now()` permettant l’injection de la borne basse.

---

## 7) Build & exécution (esbuild)

### 7.1 `package.json`

```json
{
    "scripts": {
        "build:etl": "esbuild run.mjs --bundle --platform=node --format=cjs --outfile=dist/etl.js",
        "etl:daily": "node dist/etl.js"
    }
}
```

### 7.2 `.slugignore`

> Ne **pas** ignorer `dist/` ni `etl/queries/`.

---

## 8) Planification (Scalingo Scheduler)

**cron.json**

```json
{
    "jobs": [{ "command": "0 2 * * * pnpm run etl:daily" }]
}
```

- Cron en **UTC**
- Le build puis l’exécution garantissent que `dist/etl.js` est présent et à jour.

---

## 09) Troubleshooting (erreurs rencontrées & correctifs)

- **ERR_UNSUPPORTED_DIR_IMPORT (ESM)** : importer explicitement un fichier ou passer en CJS. Solution finale : bundler avec esbuild.
- **invalid input syntax for timestamptz** : utiliser un client avec **binding de paramètres** (`pg` avec `$1…$n`), pas de concat de strings.
- **Duplication d’insertions** : contrainte unique + `ON CONFLICT DO NOTHING`.
- **constraint … does not exist** : utiliser une **contrainte** (pas seulement un index) et référencer `ON CONFLICT ON CONSTRAINT …`.
- **node_modules absent dans le slug** : bundler avec esbuild (`dist/etl.js`) pour éviter toute dépendance au runtime.
- **pg_hba.conf … no encryption** : forcer `ssl: { require: true, rejectUnauthorized: false }` côté `pg`.

---
