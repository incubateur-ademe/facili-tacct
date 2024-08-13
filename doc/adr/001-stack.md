# Choix de la stack technique

-   📅 Date : 11/07/2024
-   👷 Décision prise par : Antoine Conegero

# Contexte

Facili-TACCT est encore en début de construction. Le premier recrutement dev a lieu début mars 2024 pour créer un MVP dont la date de rendu
est le 09/07/2024. La présentation du MVP étant passée en comité, il s'agit désormais de créer une architecture complète pour
répondre au besoin de l'outil sur le moyen/long terme. Facili-TACCT doit pouvoir présenter aux collectivités les données socio-économiques de leur territoire
selon une thématique liée à l'adaptation au changement climatique. Ainsi, les besoins techniques sont :

-   Récupération des bases de données (INSEE, Datagouv, Copernicus, etc.).
-   Cleaning et formatting de ces bases.
-   Création de nouveaux indicateurs.
-   Récupération dans le frontend de ces indicateurs pour les représenter sous forme de graphiques ou de cartographies.

Quelques autres éléments de contextes :

-   L'équipe est à ce moment composée d'un unique développeur pour se charger du traitement de la donnée et du développement produit.
-   Le nombre de données va croitre largement. Il est estimé que le MVP ne constitue pas plus qu'un quinzième de la donnée finale.
    Au final, la donnée atteindra probablement plusieurs dizaines de giga.
-   Nous ne savons pas quelles données seront à intégrer dans le futur.
-   À ce jour, il n'existe pas de comptes utilisateurs ni d'authentification.

# Options envisagées 💡

**1\. Le choix des bases de données**

Le principal problème concerne la cartographie :

-   Les requêtes sont souvent lentes car le frontend doit présenter simultanément à minima des milliers de données.
-   Nous ne devons pas être limités en espace car nous ne savons pas encore quelles DB seront à intégrer.
-   Les données satellites récentes (et donc celles à venir) sont de plus en plus précises et donc plus volumineuses.
    Les nouvelles données CORINE Land Cover sont précise à 10m de résolution.

Options :

-   Wide-column DB avec Cassandra
-   MongoDB
-   Postgres

**2\. Récupération des données**

Pour récupérer, cleaner et formatter la donnée, de nombreuses options s'offrent à nous. De nombreuses pipelines existent déjà.
Pour le téléchargement des bases, il existe plusieurs options :

-   Téléchargement direct sur des sites spécialisés (choix fait pour le MVP).
-   API d'acteurs (INSEE par exemple).
-   Collaboration avec des acteurs ayant déjà créé leurs bases (Territoires en Transitions, Ecolab).

**3\. Traitement des données**

Options :

-   Notebook python
-   Pipeline complète avec dbt et CubeJs

# Decisions 🏆

**1\. Bases de données : choix de Postgres**

-   ✅ **Avantages :**

    -   Très largement utilisé et maintenu
    -   Large documentation
    -   Utilisation de l'extension Postgis pour la cartographie et pour l'indexation geospatiale
    -   Des performances déjà démontrées pour de la cartographie au sein de Beta Gouv
    -   Compatibilité Scalingo
    -   Moins de maintenance long terme par rapport au NoSQL

-   🚫 **Inconvénients :**

    -   Limite de performance si les bases deviennent trop grandes

**2\. Récupération des données : choix mixte (téléchargement direct + API)**

La grande variation de données nous oblige à aller chercher les bases dans beaucoup de sources différentes. Aucun acteur,
pas même l'INSEE ne possède toute la donnée qui nous intéresse. Plutôt que de réaliser des requêtes API multiples, nous faisons
nos recherches et nous téléchargeons les bases directement pour avoir la possibilité de modifier à souhait les données et ainsi
créer nos propres indicateurs. Nous faisons ce choix pour plus de liberté.

Néanmoins, nous commençons également une collaboration avec Ecolab pour créer une base de données commune. Étant donné que de leur
côté, ils ont déjà commencé ce travail, cela peut nous profiter. La donnée est stockée sur leurs DB et est requêtée par API. Ce projet
collaboratif dépasse l'unique cadre de Facili-TACCT. L'idée est de mettre en commun le travail de chacun pour profiter à l'autre acteur.

-   ✅ **Avantages :**

    -   Grande liberté dans la création d'indicateurs ++
    -   La plupart des bases de données sont publiques
    -   Possibilité d'utiliser les formats qui nous arrangent
    -   Pour Ecolab : création d'un projet collaboratif publique

-   🚫 **Inconvénients :**

    -   Long temps de recherche pour chaque indicateur
    -   Plus difficile de mettre à jour la donnée lorsqu'une nouvelle DB est publiée
    -   Pour Ecolab, temps de formation pour intégrer leur pipeline

**3\. Traitement de la donnée : Notebook python**

Le choix est purement pragmatique. Antoine étant le seul sur la totalité du projet, il conserve les premiers éléments construits pour
le MVP. Dans le cadre de la collaboration Ecolab, nous nous adaptons à la pipeline de leur projet qui est plus structurée.

-   ✅ **Avantages :**

    -   Grande liberté dans la création d'indicateurs avec un Notebook et pandas/Geopandas
    -   Facilité pour modifier le code et corriger les erreurs
    -   Facilité d'envoi sur Postgres
    -   Facilité pour faire les tests de représentation cartographique des indicateurs

-   🚫 **Inconvénients :**
    -   Fichier local et non automatisé
    -   Bases de données en local très volumineuses avec des long temps de chargement

# Conséquence

👍**Positives :**

-   Possibilité d'avancer rapidement sur la création de nouvelles thématiques et ainsi densifier le produit.
-   Postgis nous permet des performances en adéquation avec un UX de qualité.
-   Postgres nous permet de créer un produit avec de nombreuses thématiques. D'éventuelles limites se produiraient dans longtemps.

👎**Négatives :**

-   Peu d'automatisation possible
