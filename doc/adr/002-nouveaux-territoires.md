# Extension du modèle de recherche territoriale

- 📅 Date : 02/06/2025
- 👷 Décision prise par : Antoine Conegero

# Contexte

Initialement, la recherche et la territorialisation des données dans Facili-TACCT étaient limitées à deux types de territoires : EPCI et Communes. Les paramètres d’URL ne prenaient en compte que le code EPCI ou le code commune, ce qui limitait la flexibilité et l’évolutivité de l’application pour d’autres découpages territoriaux.

# Problème

- Impossibilité de proposer une recherche ou une visualisation des données selon d’autres types de territoires (ex : PETR, PNR, EPT, Département).
- Difficulté à mutualiser la logique de requête et d’affichage pour de nouveaux types de territoires.
- Complexité accrue pour faire évoluer l’application vers d’autres échelles territoriales (ex : régions).

# Décision 🏆

Nous avons généralisé le modèle de recherche territoriale en :

- Proposant désormais la recherche par 6 types de territoires : **EPCI, EPT, Communes, PETR, PNR et Département**.
- Ajoutant systématiquement dans les paramètres d’URL : le code du territoire, son libellé, et le type de territoire. Ainsi, chaque page dispose de toutes les informations nécessaires pour contextualiser les requêtes et l’affichage selon le territoire sélectionné par l’utilisateur.
- Uniformisant la logique de requête : chaque requête reçoit désormais ces trois paramètres (code, libellé, type), ce qui permet d’adapter dynamiquement la requête à la base de données selon le type de territoire.

# Conséquences

👍 **Positives :**

- Universalité de la recherche territoriale : il est désormais possible d’ajouter facilement de nouveaux types de territoires (ex : région) sans refondre la logique applicative.
- Mutualisation et simplification du code côté frontend et backend.
- Meilleure expérience utilisateur : l’utilisateur peut naviguer et filtrer les données selon la granularité territoriale de son choix.

👎 **Négatives :**

- L’URL et les requêtes sont plus complexes (plus de paramètres à gérer).
- Nécessite une adaptation de toutes les requêtes existantes pour prendre en compte le nouveau modèle universel.
- Au moment de la modification, nous devons mettre à jour toutes les tables dans la base de données pour que cela soit compatible avec le nouveau format.

# Conclusion

Ce changement structurel permet à Facili-TACCT de s’adapter à la diversité des territoires français et d’anticiper l’ajout de nouveaux découpages administratifs. La logique de recherche et de territorialisation des données est désormais universelle, évolutive et mutualisée dans toute l’application.
