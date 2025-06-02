# Refactoring de l’architecture des requêtes

- 📅 Date : 02/06/2025
- 👷 Décision prise par : Antoine Conegero

# Contexte

Avec l’augmentation du volume de données et du nombre d’utilisateurs sur Facili-TACCT, les requêtes SQL et Prisma sont devenues un point critique de performance et de stabilité. L’application fonctionne sur Scalingo avec un addon PostgreSQL, et l’utilisation intensive de Prisma pour interroger la base a mené à plusieurs problèmes :

- Surcharge mémoire du serveur, notamment à cause du cache Prisma lors de requêtes multiples/volumineuses ou lors de requêtes malveillantes (requêtes qui ne retourneront jamais rien mais qui parcourent la totalité de la base. Exemple : recherche dans les params de l'url la ville imaginaire de New-Boston-Luanda-Jakarta).
- Requêtes imbriquées ou séquentielles qui multiplient les allers-retours entre l’application et la base, augmentant la latence et la charge.
- Risque de requêtes coûteuses sur des tables volumineuses, parfois pour des résultats inexistants.

# Problèmes rencontrés

- **Out of memory** sur Scalingo lors de pics de requêtes ou d’utilisation intensive du cache Prisma.
- Latence élevée sur certaines pages, notamment lors de requêtes dépendant de plusieurs tables ou de jointures complexes.
- Difficulté à garantir la scalabilité et la stabilité de l’application à mesure que la volumétrie augmente.

# Options envisagées 💡

1. Optimiser les requêtes Prisma en les fusionnant ou en utilisant des requêtes SQL brutes (`queryRaw`).
2. Mettre en place un système de cache distribué (Redis) pour limiter la charge sur la base de données.
3. Ajouter des vérifications d’existence rapides avant d’exécuter des requêtes coûteuses.
4. Créer des vues SQL pour simplifier et optimiser les jointures et les accès multi-tables.

# Décisions 🏆

## 1. Fusion des requêtes et usage de `queryRaw` + vues SQL

Pour éviter d’enchaîner plusieurs requêtes Prisma dépendantes (ex : récupérer une info dans une table, puis l’utiliser dans une autre requête), j’ai privilégié l’écriture de requêtes SQL imbriquées via `prisma.$queryRaw`. Cela permet de :

- Réduire le nombre d’allers-retours entre l’application et la base.
- Optimiser l’exécution côté PostgreSQL (qui gère mieux les sous-requêtes et jointures).
- Diminuer la charge mémoire sur le serveur Node.js.

Exemple :

```typescript
await prisma.$queryRaw`
  SELECT *
  FROM inconfort_thermique
  WHERE epci = (
    SELECT epci
    FROM inconfort_thermique
    WHERE code_geographique = ${code}
    LIMIT 1
  )
  LIMIT 200
`;
```

J’ai également créé des **vues SQL** (voir les fichiers `agriculture_bio_with_territoire.sql`, `qualite_sites_baignade_by_territoire.sql`) pour factoriser des jointures complexes et permettre des accès plus rapides et plus lisibles depuis Prisma.

## 2. Mise en place d’un cache Redis

Pour limiter la pression sur PostgreSQL et éviter que Prisma ne surcharge la mémoire du serveur, j’ai ajouté un addon Redis sur Scalingo. Toutes les requêtes Prisma passent désormais par un middleware de cache Redis (`prisma-redis-middleware`). Cela permet de :

- Réduire drastiquement le nombre de requêtes identiques envoyées à la base.
- Améliorer la rapidité de réponse pour les données fréquemment consultées.
- Mieux maîtriser la consommation mémoire côté Node.js, car Redis gère le cache de façon externe.

Voir le fichier `src/lib/queries/redis.ts` pour la configuration détaillée.

## 3. Vérification d’existence rapide avant chaque requête

Pour éviter de lancer des requêtes coûteuses sur des tables volumineuses alors qu’aucun résultat n’est attendu, j’ai ajouté un **existence check** rapide avant chaque requête principale. Cela consiste à faire un `findFirst` ciblé :

```typescript
const exists = await prisma.inconfort_thermique.findFirst({
    where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
});
if (!exists) return [];
```

Ce pattern permet de :

- Court-circuiter les requêtes inutiles et économiser du temps de calcul.
- Réduire la charge sur la base et sur Prisma.
- Améliorer la robustesse de l’application (moins de risques de timeouts ou d’erreurs mémoire).

# Conséquences

👍 **Positives :**

- Réduction significative de la charge sur PostgreSQL et sur le serveur Node.js.
- Amélioration de la rapidité de réponse pour les utilisateurs.
- Meilleure stabilité de l’application, même en cas de forte sollicitation.
- Code plus lisible et plus maintenable grâce à l’utilisation de vues SQL.

👎 **Négatives :**

- L’utilisation de `queryRaw` nécessite une vigilance accrue sur la sécurité (risque d’injection SQL si mal utilisé).
- L’ajout d’un cache Redis complexifie légèrement l’infrastructure (gestion du cache, invalidation, monitoring).
- Les vérifications d’existence ajoutent parfois une légère latence (15 à 200ms), mais ce coût est compensé par la robustesse globale.

# Conclusion

Ce refactoring de l’architecture des requêtes était nécessaire pour garantir la scalabilité et la stabilité de Facili-TACCT. L’association de requêtes SQL optimisées, de vues, d’un cache Redis et de vérifications d’existence permet de répondre aux enjeux de volumétrie et de performance, tout en gardant une base de code maintenable et évolutive.
