# Explications - Bases de données

## Vérifier si les bases en production et préprod sont identiques

### � Pourquoi cette approche ?

Cette méthode de vérification par checksum présente plusieurs avantages :

- **Simple et rapide** : Une seule requête SQL suffit pour vérifier l'intégrité d'une table
- **Pas d'outil supplémentaire** : Pas besoin d'installer ou configurer des outils externes comme `pg_comparator`
- **Évite les pg_dump compliqués** : Pas besoin de générer et comparer des dumps complets de base de données
- **Aucune extension requise** : Pas besoin d'extensions PostgreSQL supplémentaires comme `postgres_fdw` pour faire des comparaisons entre bases

### 🧠 Principe de fonctionnement

L'approche par checksum fonctionne de la manière suivante :

1. **Sélection** : Récupère toutes les lignes de la table
2. **Tri** : Ordonne les lignes pour garantir le même ordre entre les environnements
3. **Conversion** : Transforme chaque ligne en texte pour pouvoir la traiter comme une chaîne de caractères
4. **Concaténation** : Rassemble toutes les lignes en une seule grande chaîne de caractères
5. **Hachage** : Calcule un hash MD5 de la chaîne résultante

En comparant les hash entre les bases de développement et de production, on peut déterminer si le contenu des tables est identique. Si les hash correspondent, il est très probable que les tables soient identiques.

### ⚠️ Points d'attention importants

#### Ordre des lignes
**L'ordre des lignes est crucial** : Utilisez toujours `ORDER BY` sur une colonne unique et stable (comme un `id`). Si vous n'ordonnez pas explicitement par une colonne stable et unique (comme une primary key), PostgreSQL peut retourner les lignes dans des ordres différents entre les environnements de développement et de production — même si les données sont identiques.

#### Types de données
**Les types de données comptent** : PostgreSQL peut sérialiser les lignes différemment selon les types et les valeurs nulles. C'est généralement acceptable si vous comparez des schémas identiques.

#### Problèmes avec les float
**Attention aux float** : Les nombres à virgule (ex: `float`, `double precision`) peuvent différer légèrement entre les environnements en raison d'arrondis ou de différences de plateforme. Cependant, ils peuvent toujours produire la même chaîne `t::text` s'ils sont arrondis de la même manière.

Exemple : `1.00000001` vs `1.00000002` pourraient être arrondis lors de la conversion et devenir identiques sous forme de texte.

#### Gestion des valeurs NULL
**Valeurs NULL** : `t::text` peut représenter les nulls de manière incohérente (ex: champs manquants), soyez prudent si vous avez beaucoup de valeurs nulles.

#### Conversions de types implicites
**Problèmes de formatage** : La représentation textuelle de certains types peut varier subtilement :

- **Timestamps** : Représentations de fuseaux horaires, secondes fractionnaires, etc.
- **Valeurs NULL** : Selon la façon dont elles sont converties, NULL peut devenir `""` ou simplement être absent de la chaîne
- **Booléens** : `t/f` vs `true/false`

Exemple : `SELECT (NULL, 'test')::text;` peut retourner `"(,test)"`

Différentes bases de données peuvent représenter les champs NULL différemment lors de la conversion en texte.

#### Encodage et collation
**Différences d'encodage ou de collation** : Si les bases de données utilisent des encodages différents (comme UTF-8 vs Latin1) ou des collations (ex: `en_US` vs `C`), la comparaison et la représentation des chaînes peuvent différer — tout en produisant le même MD5 dans certains cas (surtout si les valeurs sont uniquement ASCII).

### 🔒 Limitations de sécurité

Cette méthode n'est **pas cryptographiquement sécurisée** mais est suffisamment fiable pour la détection de changements dans un contexte de vérification de cohérence entre environnements.
