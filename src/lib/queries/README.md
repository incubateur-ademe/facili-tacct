### 1 - Notebook

Voir fichier dédié aux notebooks ipython.
Les fichiers sont enregistrés au format gpkg avec le crs 4326.

### 2 - Push to DB

Le schéma Postgis est dédié aux tables géométriques avec l'extension Postgis installée. Potsgis est utilisé pour la cartographie.

Les fichiers gpkg sont transférés avec le shell gdal. Les commandes utilisées sont :

    ```
    #Enregistre le mot de passe de la base de donnée
    set PGPASSWORD=<mydatabasepassword>

    #Push dans la table
    ogr2ogr -nln nouvelle_table_postgis <name of layer(table)> -lco GEOMETRY_NAME=geometry <nom de la colonne geometry dans la table> -lco FID=pk <nom de la colonne pk dans la table> -lco SCHEMA=postgis Pg:"dbname=POSTGRES_DB_NAME host=POSTGRES_HOST user=POSTGRES_USER port=PORT" "path\to\gpkg\file\fichier.gpkg"

    ```

### 3 - Récupération avec Prisma

Après avoir vérifié dans la base Postgres que les pk/index sont bien typés comme tel. Utilisation avec pnpm :

    ```
    pnpx prisma db pull

    pnpx prisma generate

    ```

Les nouvelles tables sont intégrées au fichier schema.prisma

### 4 - Queries dans le code

Le type geometry n'est pas supporté par Prisma. Nous utilisons la fontion queryRaw de Prisma pour la requête.
Les requêtes par indexation spatiale sont à privilégier pour la performance.
Liste des fonctions sous Postgis qui supportent l'indexation (https://postgis.net/workshops/postgis-intro/indexing.html) : - ST_Intersects - ST_Contains - ST_Within - ST_DWithin - ST_ContainsProperly - ST_CoveredBy - ST_Covers - ST_Overlaps - ST_Crosses - ST_DFullyWithin - ST_3DIntersects - ST_3DDWithin - ST_3DDFullyWithin - ST_LineCrossingDirection - ST_OrderingEquals - ST_Equals

Comme Prisma ne supporte pas le type geometry, il faut transformer la geometry en texte pour éventuellement la retransformer ensuite. Par exemple :
`ST_AsText(geometry) geometry`
