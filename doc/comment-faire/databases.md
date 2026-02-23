# Bases de données

## Données classiques

Les bases de données produites sont récupérées via l'url du fournisseur quand cela est possible et traitées dans un Notebook Jupyter pour le nettoyage de la donnée.
Lorsqu'aucun lien direct n'est accessible, la base de donnée est téléchargée avant d'être exploitée dans le Notebook.

### Déploiement

Dans le Notebook, nous utilisons la fonction create_engine de sqlalchemy :

```
engine = create_engine('postgresql+psycopg2://XXXXX',
    connect_args={'options': '-csearch_path={}'.format(dbschema)})
dataFrame.to_sql('table-name', engine, index=True, if_exists='replace')
```

#### Modification des colonnes non nulles

```
with engine.connect() as con:
    con.execute(f'ALTER TABLE {table} ALTER COLUMN {column} SET NOT NULL;')
```

#### Création des index

```
with engine.connect() as con:
    con.execute(f"CREATE INDEX <nom_index> ON <schema>.<table> (<column>)")
```

## Données géographiques

Pour les données géographiques, le traitement est également réalisé sur un Notebook Jupyter mais le déploiement se fait après sauvegarde d'un fichier gpkg.
Pour transférer le fichier sur la base Postgres, nous utilisons le shell gdal :

```
set PGPASSWORD=<mon mot de passe>

ogr2ogr -nln <name of layer(table)>
    -lco GEOMETRY_NAME=<nom de la colonne geometry dans ma table>
    -lco FID=<nom de la colonne pk dans ma table>
    -lco SCHEMA=<nom schema> Pg:"dbname=<nom de la db> host=<adresse host> user=<user> port=<port>"
    "C:\path\to\file\file.gpkg"
```

## Vérifier si les bases en prod et en preprod sont identiques

Pour les bases de prod et de preprod, faire la commande :

```
SELECT md5(string_agg(t::text, '')) AS checksum
FROM (
  SELECT * FROM your_table ORDER BY your_primary_key
) t;

```

Les 2 hashs doivent être identiques.

## Cloner une base PostGIS distante pour l'utiliser en local

1. **Dump de la base distante**
   Créer un folder à la base du projet db-dump.
   Faire le dump de la base (peut être long) :

    ```bash
    PGPASSWORD='password' pg_dump \
      --no-owner \
      --no-privileges \
      --schema=postgis \
      --schema=databases \
      -h <host> -p <port> -U <user> -d <db> \
      -f ./db-dump/facili-tacct-postgis-databases.sql
    ```

2. **Ajouter le ficher au .gitignore**
   Dans le .gitignore, ajouter la base volumineuse :
   /db-dump/facili-tacct-postgis-databases.sql

3. **init.sh**
   Création du fichier init.sh dans le même dossier :

    ```bash
    #!/bin/bash
    set -e
    psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f /docker-entrypoint-initdb.d/facili-tacct-postgis-databases.sql
    ```

4. **pg_hba.conf**
   Création du fichier pg_hba.conf dans le même dossier :

    ```conf
    host    all             all             0.0.0.0/0               trust
    host    all             all             ::/0                    trust
    ```

5. **docker-compose.yml** (exemple)

    ```yaml
    version: '3'
    services:
    db:
        image: postgis/postgis:17-3.5
        environment:
            - POSTGRES_USER=postgres
            - POSTGRES_PASSWORD=postgres
            - POSTGRES_DB=postgres
        ports:
            - '5432:5432'
        volumes:
            - db-data:/var/lib/postgresql/data
            - ./db-dump:/docker-entrypoint-initdb.d

    volumes:
        db-data:
    ```

6. **.env**

    ```env
    SCALINGO_POSTGRESQL_URL=postgresql://postgres:postgres@127.0.0.1:5432/postgres
    ```

7. **Dans le dump SQL**
   Ajouter après `CREATE SCHEMA postgis;` :

    ```sql
    CREATE EXTENSION IF NOT EXISTS postgis SCHEMA postgis;
    ```

8. **Lancer la base**

    ```bash
    docker compose down -v
    docker compose up db
    ```

9. **Créer l'extension unaccent**
   Connexion à la db dans docker :
    ```bash
    docker exec -it facili-tacct-db-1 psql -U postgres -d postgres
    ```
    ```sql
    CREATE EXTENSION IF NOT EXISTS unaccent;
    ```

Votre base locale est prête à l'emploi.
