# Architecture cartographique hybride pour gros volumes de données

- 📅 Date : 18/12/2025
- 👷 Décision prise par : Antoine Conegero

# Contexte

Facili-TACCT doit proposer aux collectivités françaises des visualisations cartographiques d'indicateurs environnementaux et climatiques sur l'ensemble du territoire national. Les volumes de données géographiques varient considérablement selon les indicateurs :

- Certains indicateurs (ex : données communales agrégées) pèsent quelques centaines de Mo
- D'autres indicateurs (ex : données satellites à haute résolution, CORINE Land Cover 10m) peuvent atteindre **plusieurs dizaines de Go**

Les contraintes techniques identifiées :

- **Performance** : affichage fluide des cartes, chargement < 1 seconde
- **Volumétrie** : capacité à gérer des dizaines de Go de données géographiques
- **Coûts** : maîtriser les coûts de stockage et de compute
- **Expérience utilisateur** : navigation multi-échelles (du national au local) sans ralentissement
- **Infrastructure** : application hébergée sur Scalingo avec PostgreSQL/PostGIS

Le choix initial de PostGIS (cf. ADR 001) a montré ses limites face aux très gros volumes :

- Ralentissements importants sur les requêtes spatiales volumineuses
- Coûts de stockage élevés sur PostgreSQL
- Charge importante sur le serveur lors de l'affichage de milliers de géométries simultanément

# Problèmes rencontrés

- **Latence élevée** : affichage de cartes nationales avec des milliers de géométries (> 5 secondes)
- **Surcharge mémoire** : transfert de dizaines de Mo de GeoJSON depuis la base vers le frontend
- **Coûts de stockage** : PostgreSQL facture le stockage significativement plus cher qu'un bucket S3
- **Scalabilité limitée** : impossibilité d'intégrer certaines données satellites de haute résolution

# Options envisagées 💡

## 1. Tout PostgreSQL/PostGIS

Continuer à stocker l'intégralité des données géographiques dans PostgreSQL.

**Avantages** :
- Simplicité de l'architecture (pas de nouveaux services)
- Requêtes spatiales SQL directes
- Mise à jour des données simple (INSERT/UPDATE)
- Filtrage dynamique côté serveur

**Inconvénients** :
- Coûts de stockage élevés pour les gros volumes
- Performances dégradées sur les très grandes tables
- Charge importante sur le serveur lors de requêtes volumineuses
- Limite technique atteinte pour certaines données satellites

## 2. Tuiles vectorielles sur S3 pour tous les indicateurs

Générer systématiquement des tuiles vectorielles pour tous les indicateurs, quel que soit leur volume.

**Avantages** :
- Performances optimales et uniformes
- Coûts de stockage minimaux (S3)
- Architecture homogène

**Inconvénients** :
- Pipeline de génération supplémentaire pour tous les indicateurs

## 3. Architecture hybride selon le volume

Utiliser éventuellement **PostGIS pour les petits volumes** (< 1 Go) et **tuiles vectorielles sur S3** pour les gros volumes (> 1 Go).

**Avantages** :
- Optimisation performance/coûts selon le cas d'usage
- Flexibilité conservée pour les petits volumes
- Scalabilité garantie pour les gros volumes
- Pas de complexité inutile pour des volumes modérés

**Inconvénients** :
- Logique frontend adaptative selon le type de source

# Décision 🏆

Nous adoptons une **architecture cartographique hybride** en favorisant largement le tuilage :

## Règles de décision

**PostgreSQL/PostGIS** pour :
- Volume **faible**
- Besoin de **requêtes spatiales complexes** (intersections, agrégations)

**Tuiles vectorielles sur S3** pour :
- Volume **important**
- Données **stables** (mises à jour annuelles ou moins fréquentes)
- Besoin de **performances critiques** (affichage national fluide)
- Données **multi-échelles** (navigation du national au local)

## Pipeline de génération des tuiles vectorielles

Le processus comporte quatre étapes :

### 1. Préparation des données

```python
# Sélection des colonnes essentielles uniquement
# Reprojection en Web Mercator (EPSG:3857)
# Simplification géométrique calibrée (réduction 50-90% sans perte visuelle)
```

### 2. Génération du fichier .mbtiles

```bash
# Découpage automatique par niveaux de zoom (ex : 4 à 13)
# Simplification progressive selon le zoom
# Compression au format Protobuf (.pbf)
```

### 3. Extraction des tuiles individuelles

```
indicateur_X/
  tiles/
    z/x/y.pbf
```

### 4. Déploiement sur Scaleway S3

```typescript
// Upload avec ACL public
// Headers CORS configurés
// Content-Type: application/x-protobuf
```

## Intégration frontend

Le frontend détecte automatiquement le type de source cartographique :

```typescript
// PostGIS : requête API classique + affichage GeoJSON
// Tuiles vectorielles : chargement dynamique via Mapbox GL / Leaflet
```

# Conséquences

👍 **Positives :**

- **Performance** : affichage fluide même pour des volumes de plusieurs dizaines de Go
- **Coûts optimisés** : S3 ~100x moins cher que PostgreSQL pour le stockage
- **Scalabilité** : possibilité d'intégrer des données satellites haute résolution sans limite
- **Expérience utilisateur** : navigation multi-échelles sans ralentissement
- **Pragmatisme** : pas de complexité inutile pour les petits volumes
- **Chargement à la demande** : seules les tuiles visibles sont téléchargées (quelques Mo au lieu de plusieurs Go)

👎 **Négatives :**

- **Complexité architecturale** : deux systèmes différents à maintenir
- **Pipeline de génération** : processus technique supplémentaire pour les tuiles vectorielles
- **Mise à jour des données** : régénération complète nécessaire pour les indicateurs en tuiles vectorielles

# Limitations connues

## Tuiles vectorielles

- **Statiques** : toute modification nécessite une régénération complète
- **Pas d'analyse spatiale** : calculs géométriques (surface, intersection) impossibles côté serveur

## Configuration des niveaux de zoom

**Règle empirique adoptée** :
- Données **nationales** → zooms 4 à 13

Compromis entre performance (nombre de tuiles) et niveau de détail maximal.

# Conclusion

Cette architecture hybride permet à Facili-TACCT de gérer efficacement la diversité des volumes de données géographiques, en optimisant les coûts, les performances et l'expérience utilisateur. 

Cette décision s'inscrit dans la continuité des choix techniques précédents (ADR 001 - choix de PostGIS, ADR 003 - optimisation des requêtes) en apportant une solution aux limites de PostgreSQL face aux très gros volumes tout en conservant sa simplicité pour les volumes modérés.
