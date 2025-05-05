# Bases de données

## Données classiques

Les bases de données produites sont récupérées via l'url du fournisseur quand cela est possible et traitées dans un Notebook Jupyter pour le nettoyage de la donnée.
Lorsqu'aucun lien direct n'est accessible, la base de donnée est téléchargée avant d'être exploitée dans le Notebook.

### Déploiement

Dans le Notebook, nous utilisons la fonction create_engine de sqlalchemy :

```
engine = create_engine('postgresql+psycopg2://XXXXXXXXXXXX',
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
