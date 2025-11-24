# Cartographie : Tuiles vectorielles pour gros volumes de données

## 🎯 Pourquoi générer des tuiles vectorielles ?

Notre service propose aux collectivités françaises des visualisations cartographiques d'indicateurs environnementaux et climatiques. Certaines bases géographiques peuvent peser entre **des dizaines de Go**, ce qui rend impossible leur chargement direct dans PostgreSQL/PostGIS pour un service en ligne performant.

Les **tuiles vectorielles (Vector Tiles)** sont une solution standardisée qui permet de :

- **Diviser la donnée** en petits morceaux indépendants (les "tuiles")
- **Ne charger que ce qui est visible** à l'écran de l'utilisateur
- **Compresser fortement** en supprimant les détails invisibles selon le niveau de zoom
- **Garantir une fluidité** de navigation même avec des jeux de données volumineux

Cette approche est utilisée par tous les grands acteurs de la cartographie web (Mapbox, Google Maps, OpenStreetMap).

---

## 🏗️ Architecture adoptée

### Approche hybride selon le volume

Notre architecture cartographique utilise **deux stratégies complémentaires** :

**Petits volumes (< 1 Go)** → **PostgreSQL/PostGIS**
- Requêtes SQL directes sur la base de données
- Simplicité de mise à jour (pas de processus de génération)
- Performances suffisantes pour des volumes modérés

**Gros volumes** → **Tuiles vectorielles sur S3**
- Fichiers statiques pré-générés
- Serveur de stockage objet (Scaleway S3)
- Chargement ultra-rapide via CDN
- Coûts de stockage très faibles

### Pourquoi cette séparation ?

- **Pragmatisme** : on n'introduit pas de complexité technique inutile pour des petits volumes.
- **Performance** : PostGIS est très efficace pour des requêtes spatiales sur des volumes raisonnables.
- **Coûts** : PostgreSQL facture le stockage plus cher qu'un bucket S3, et nécessite des ressources compute pour servir les données.
- **Évolutivité** : les tuiles vectorielles permettent de monter en charge sans limite de volume.

---

## 🧠 Principe de fonctionnement des tuiles vectorielles

### Découpage spatial hiérarchique

Les tuiles vectorielles utilisent un **système de pyramide de zoom** :

- **Zoom 0** : le monde entier en 1 tuile (256×256 pixels)
- **Zoom 1** : le monde en 4 tuiles (2×2)
- **Zoom 2** : le monde en 16 tuiles (4×4)
- **Zoom N** : le monde en 4^N tuiles

Chaque tuile est identifiée par trois coordonnées : `z/x/y`
- **z** (zoom) : niveau de détail (0 = monde entier, 18 = bâtiment)
- **x** (colonne) : position horizontale
- **y** (ligne) : position verticale

**Exemple** : la tuile `12/2048/1365.pbf` représente une portion de territoire au niveau de zoom 12, à la colonne 2048 et ligne 1365.

Plus on veut un zoom important sur notre outil, plus le nombre de tuiles sera important. Pour la plupart des usages, nous nous limiterons à un zoom de 13.

### Simplification géométrique adaptative

Le système ajuste automatiquement le **niveau de détail** selon le zoom :

- **Zoom faible (vue pays)** : géométries très simplifiées, polygones grossiers
- **Zoom moyen (vue région)** : simplification modérée
- **Zoom élevé (vue commune)** : géométries détaillées

Cette simplification est **invisible à l'œil** : à chaque niveau de zoom, l'utilisateur voit un niveau de détail adapté à l'échelle d'affichage.

### Chargement à la demande

Contrairement à un fichier GeoJSON chargé intégralement, les tuiles vectorielles sont **chargées dynamiquement** :

1. L'utilisateur affiche une carte (ex : la France)
2. Le client cartographique (Leaflet, Mapbox GL) calcule **quelles tuiles sont visibles** à l'écran
3. Seules ces tuiles sont téléchargées (ex : 12 tuiles pour une vue nationale)
4. L'utilisateur zoome ou se déplace → **nouvelles tuiles** chargées
5. Les tuiles hors écran sont **libérées de la mémoire**

Résultat : même pour un indicateur de plusieurs Go, l'utilisateur ne charge **que quelques mégaoctets** à chaque instant.

---

## 🔄 Processus de génération

### Vue d'ensemble

La création des tuiles vectorielles passe par **quatre étapes principales** :

1. **Préparation** : nettoyage et optimisation des données sources
2. **Génération** : création du fichier `.mbtiles` (conteneur)
3. **Extraction** : découpage en fichiers individuels `.pbf`
4. **Déploiement** : upload sur le stockage S3

### 1. Préparation de la donnée

**Objectif** : obtenir un fichier GeoJSON léger, propre et normalisé.

**Opérations effectuées** :
- **Sélection des colonnes** : on ne garde que l'identifiant (ex : code INSEE), la valeur de l'indicateur (ou le nom) et la géométrie. Les autres attributs alourdissent inutilement.
- **Reprojection en Web Mercator** : système de coordonnées standard EPSG:3857 utilisé par toutes les tuiles vectorielles.
- **Simplification géométrique** : réduction du nombre de points des polygones. Cette simplification est **calibrée** pour être invisible à l'œil nu tout en réduisant fortement la taille.

**Pourquoi cette étape est cruciale ?**
- Une simplification trop agressive dégrade visuellement les frontières
- Pas de simplification → fichiers volumineux, génération très lente
- Le bon équilibre réduit la taille de **50 à 90 %** sans perte visuelle

### 2. Génération du fichier `.mbtiles`

Le format `.mbtiles` est un **conteneur SQLite** qui stocke toutes les tuiles dans un fichier unique.

**Principe** :
- Lit le GeoJSON préparé
- Découpe automatiquement selon les niveaux de zoom (ex : 4 à 13)
- Applique une **simplification progressive** : plus le zoom est faible, plus la géométrie est simplifiée
- Compresse chaque tuile au format Protobuf (`.pbf`)
- Stocke l'ensemble dans une base SQLite

**Avantage du .mbtiles** : format portable, facile à manipuler, reconnu par tous les outils cartographiques.

### 3. Extraction des tuiles individuelles

L'application web ne peut pas lire directement un fichier `.mbtiles`. Il faut **extraire chaque tuile** en fichier séparé.

**Structure produite** :
```
indicateur_X/
  tiles/
    4/
      8/
        5.pbf
        6.pbf
    5/
      16/
        10.pbf
        11.pbf
    …
    13/
```

Chaque fichier `.pbf` est une tuile individuelle, servie via une URL de type :
```
https://bucket.s3.fr-par.scw.cloud/app/indicateur_X/tiles/12/2048/1365.pbf
```

**Pourquoi cette structure ?**
- **Standard universel** : tous les clients cartographiques savent construire ces URLs
- **Mise en cache efficace** : chaque tuile est un fichier statique, cacheable par CDN
- **Parallélisation** : le navigateur peut charger plusieurs tuiles simultanément

### 4. Déploiement sur S3

Les tuiles sont **uploadées sur un bucket Scaleway S3**, avec une structure organisée par indicateur.

**Configuration** :
- **ACL public** : les tuiles doivent être accessibles sans authentification
- **Headers CORS** : nécessaires pour que le navigateur autorise le chargement cross-origin
- **Content-Type** : `application/x-protobuf` pour les fichiers `.pbf`

**Pourquoi S3 plutôt que PostgreSQL ?**
- **Coût** : stockage S3 extrêmement moins cher que PostgreSQL
- **Performance** : fichiers statiques + CDN = latence ultra-faible
- **Scalabilité** : pas de limite de volume, pas de charge sur la base de données
- **Simplicité** : aucun traitement côté serveur, juste du stockage de fichiers

---

## ⚠️ Points d'attention

### Mise à jour des données

**Limitation principale** : les tuiles vectorielles sont **statiques**. Toute modification nécessite de **régénérer l'ensemble** des tuiles.

**Impact** :
- Pour des données **rarement mises à jour** (ex : données annuelles) → pas de problème
- Pour des données **fréquemment modifiées** (ex : temps réel) → privilégier PostGIS

### Gestion des métadonnées

Les tuiles vectorielles ne contiennent **que les identifiants** (ex : code INSEE). Les **valeurs d'indicateurs** (chiffres, libellés) doivent être :
- Soit **jointes côté client** (requête API séparée)
- Soit **stockées dans les tuiles** (augmente la taille)

**Choix retenu dans notre architecture** : tuiles légères (géométries + ID) + API pour les valeurs.

### Niveaux de zoom

**Trop de niveaux** (ex : 0 à 18) → fichiers très nombreux, génération longue, stockage coûteux
**Pas assez de niveaux** (ex : 5 à 10) → manque de détail au zoom maximal

**Règle empirique** :
- Données **nationales** (France entière) → zooms 4 à 13
- Données **régionales** → zooms 6 à 15
- Données **communales fines** → zooms 8 à 15


## 🔒 Limitations connues

### Requêtes spatiales complexes

Les tuiles vectorielles sont **optimisées pour l'affichage**, pas pour l'analyse spatiale.

**Impossible avec des tuiles seules** :
- Calculer la surface d'un territoire
- Faire des intersections géométriques complexes
- Agréger des données par proximité spatiale

### Filtrage dynamique limité

Contrairement à PostGIS où l'on peut filtrer les données à la volée (`WHERE valeur > 10`), les tuiles sont **pré-calculées**.

**Contournements** :
- **Filtrage côté client** : charger toutes les tuiles, masquer les entités non désirées en JavaScript (fonctionne bien pour des filtres simples)
- **Plusieurs jeux de tuiles** : générer différentes versions pré-filtrées (coûteux en stockage)

### Dépendance au pipeline de génération

L'ajout d'un nouvel indicateur nécessite d'**exécuter le pipeline complet** :
1. Préparation des données
2. Génération `.mbtiles`
3. Extraction
4. Upload S3

**Temps total** : de quelques heures à une journée selon le volume.

**Impact** : moins d'agilité que du PostGIS où un simple `INSERT` suffit.

---

## 🎯 Quand utiliser chaque approche ?

### Privilégier PostgreSQL/PostGIS si :
- Volume **< 1 Go**
- Données **fréquemment mises à jour**
- Besoin de **requêtes spatiales complexes**
- Besoin de **filtres dynamiques** côté serveur
- Équipe peu familière avec les pipelines de génération

### Privilégier les tuiles vectorielles si :
- Volume **> 5 Go**
- Données **stables** (mises à jour mensuelles/annuelles)
- **Performance critique** (chargement < 1 seconde)
- **Coûts de stockage** importants
- Visualisation **nationale/régionale** (multi-échelles)

---
