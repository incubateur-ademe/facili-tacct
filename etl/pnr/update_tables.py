import pandas as pd
from sqlalchemy import create_engine, text
import os
from dotenv import load_dotenv

load_dotenv()

#liste_tables_in_postgis_v2 = ["communes_drom"]

liste_tables = [
    "agriculture", "arretes_catnat", "atlas_biodiversite",
    "collectivites_searchbar",
    "confort_thermique", "consommation_espaces_naf", "export_cours_d_eau", "feux_foret",
    "lcz_couverture", "prelevements_eau", "rga", "secheresses", "table_commune", "table_territoires"
]
dbschema='databases_v2'
SCALINGO_URL = os.environ.get('SCALINGO_POSTGRESQL_URL')
POSTGRES_CONNECTION_STRING = SCALINGO_URL.replace('postgres://', 'postgresql://').replace('postgresql://', 'postgresql+psycopg2://').split('?')[0]
engine = create_engine(POSTGRES_CONNECTION_STRING,
                      connect_args={'options': '-csearch_path={}'.format(dbschema)})

for table in liste_tables:

    # Vérifications
    # Récupérer TOUTES les données de la table
    # (pas seulement celles avec PNR, sinon on ne peut pas détecter le CAS 3)
    query_collectivites = f"""
    SELECT code_geographique, code_pnr, libelle_pnr
    FROM {table}
    """

    with engine.begin() as conn:
        df_collectivites = pd.read_sql(query_collectivites, conn)

    # Formater le code_geographique sur 5 caractères avec zéros à gauche (uniquement pour les non-NULL)
    df_collectivites['code_geographique'] = df_collectivites['code_geographique'].apply(
        lambda x: str(x).zfill(5) if pd.notna(x) else x
    )

    print(f"Nombre total de lignes dans {table}: {len(df_collectivites)}")
    print(f"Nombre de lignes avec PNR: {df_collectivites[['code_pnr', 'libelle_pnr']].notna().any(axis=1).sum()}")

    # Récupérer les données de référence (liste_pnr)
    query_reference = """
    SELECT code_geographique, code_pnr, pnr as libelle_pnr
    FROM liste_pnr
    """

    with engine.begin() as conn:
        df_reference = pd.read_sql(query_reference, conn)

    # Formater le code_geographique sur 5 caractères avec zéros à gauche (uniquement pour les non-NULL)
    df_reference['code_geographique'] = df_reference['code_geographique'].apply(
        lambda x: str(x).zfill(5) if pd.notna(x) else x
    )


    print(f"Nombre de lignes dans liste_pnr: {len(df_reference)}")

    # # Faire la comparaison entre les deux tables
    # # On fait un OUTER merge pour voir TOUTES les communes (table ET liste_pnr)

    merged = df_collectivites.merge(
        df_reference,
        left_on='code_geographique',
        right_on='code_geographique',
        how='outer',  # OUTER pour voir aussi les communes qui sont dans liste_pnr mais pas dans l'autre table
        suffixes=('_table', '_reference')
    )

    print(f"Nombre de lignes après merge: {len(merged)}")
    print(f"  - Lignes dans {table}: {len(df_collectivites)}")
    print(f"  - Lignes dans liste_pnr: {len(df_reference)}")
    print(f"  - Lignes communes manquantes dans {table}: {merged['code_geographique'].isna().sum()}")

    # Identifier les différences UNIQUEMENT pour les communes qui existent dans liste_pnr
    # (sinon les chiffres n'ont pas de sens)

    # Filtrer d'abord pour ne garder que les communes dans liste_pnr
    merged_avec_pnr = merged[pd.notna(merged['code_pnr_reference']) | pd.notna(merged['libelle_pnr_reference'])]

    # Cas 1: code_pnr différent (pour les communes dans liste_pnr)
    diff_code = merged_avec_pnr[merged_avec_pnr['code_pnr_table'] != merged_avec_pnr['code_pnr_reference']]

    # Cas 2: libelle_pnr différent (pour les communes dans liste_pnr)
    diff_libelle = merged_avec_pnr[merged_avec_pnr['libelle_pnr_table'] != merged_avec_pnr['libelle_pnr_reference']]

    # Cas 3: Toutes les différences (code OU libelle) pour les communes dans liste_pnr
    differences = merged_avec_pnr[
        (merged_avec_pnr['code_pnr_table'] != merged_avec_pnr['code_pnr_reference']) |
        (merged_avec_pnr['libelle_pnr_table'] != merged_avec_pnr['libelle_pnr_reference'])
    ]

    print(f"\n{'='*80}")
    print(f"RÉSUMÉ DES DIFFÉRENCES (communes présentes dans liste_pnr uniquement)")
    print(f"{'='*80}")
    print(f"Nombre de communes dans liste_pnr: {len(merged_avec_pnr)}")
    print(f"Nombre de lignes avec différence de code_pnr: {len(diff_code)}")
    print(f"Nombre de lignes avec différence de libelle_pnr: {len(diff_libelle)}")
    print(f"Nombre total de lignes avec au moins une différence: {len(differences)}")
    print(f"{'='*80}\n")


    # CAS 1: Tout correspond (pas de différence)
    cas1_ok = merged[
        (merged['code_pnr_table'] == merged['code_pnr_reference']) &
        (merged['libelle_pnr_table'] == merged['libelle_pnr_reference'])
    ]

    # CAS 2: Il y a des données dans table mais PAS dans liste_pnr
    # → Il faut mettre NULL dans table
    cas2_a_effacer = merged[
        (pd.notna(merged['code_pnr_table']) | pd.notna(merged['libelle_pnr_table'])) &
        (pd.isna(merged['code_pnr_reference']) & pd.isna(merged['libelle_pnr_reference']))
    ]

    # CAS 3: Il n'y a PAS de données PNR dans table mais il devrait y en avoir (dans liste_pnr)
    # ET la commune existe dans table
    # → Il faut ajouter les données de liste_pnr
    cas3_a_ajouter = merged[
        pd.notna(merged['code_geographique']) &  # La commune existe dans collectivites
        (pd.isna(merged['code_pnr_table']) & pd.isna(merged['libelle_pnr_table'])) &
        (pd.notna(merged['code_pnr_reference']) | pd.notna(merged['libelle_pnr_reference']))
    ]

    # CAS 4: Il y a une erreur de correspondance (les deux ont des données mais différentes)
    # → Il faut corriger avec les bonnes valeurs de liste_pnr
    cas4_a_corriger = merged[
        (pd.notna(merged['code_pnr_table']) | pd.notna(merged['libelle_pnr_table'])) &
        (pd.notna(merged['code_pnr_reference']) | pd.notna(merged['libelle_pnr_reference'])) &
        (
            (merged['code_pnr_table'] != merged['code_pnr_reference']) |
            (merged['libelle_pnr_table'] != merged['libelle_pnr_reference'])
        )
    ]

    # CAS 5: Commune dans liste_pnr mais PAS DU TOUT dans table
    # → INFO uniquement, on ne peut pas les ajouter (il faudrait d'abord créer la commune)
    cas5_commune_manquante = merged[
        pd.isna(merged['code_geographique']) &  # code_geographique vient de table
        pd.notna(merged['code_pnr_reference'])  # mais il y a un PNR dans liste_pnr
    ]

    print(f"\n{'='*80}")
    print(f"ANALYSE DES 5 CAS")
    print(f"{'='*80}")
    print(f"CAS 1 - Tout correspond (OK):                             {len(cas1_ok):>5} lignes")
    print(f"CAS 2 - À effacer (dans collectivites mais pas liste):   {len(cas2_a_effacer):>5} lignes")
    print(f"CAS 3 - À ajouter (dans liste mais pas de PNR):          {len(cas3_a_ajouter):>5} lignes")
    print(f"CAS 4 - À corriger (différences entre les deux):          {len(cas4_a_corriger):>5} lignes")
    print(f"CAS 5 - Commune manquante dans table (INFO):      {len(cas5_commune_manquante):>5} lignes")
    print(f"{'-'*80}")
    print(f"TOTAL:                                                     {len(merged):>5} lignes")
    print(f"{'='*80}\n")

    # Construction des requêtes SQL pour chaque cas
    sql_updates = []

    # CAS 2: Mettre NULL dans table
    # IMPORTANT: Filtrer les lignes sans code_geographique valide
    if len(cas2_a_effacer) > 0:
        # Ne garder que les lignes avec un code_geographique valide (non NULL)
        cas2_valides = cas2_a_effacer[pd.notna(cas2_a_effacer['code_geographique'])]

        if len(cas2_valides) > 0:
            codes_a_effacer = cas2_valides['code_geographique'].tolist()
            codes_str = "', '".join(codes_a_effacer)
            sql_cas2 = f"""
    -- CAS 2: Effacer les PNR qui ne sont pas dans liste_pnr ({len(cas2_valides)} lignes)
    UPDATE {table}
    SET code_pnr = NULL, libelle_pnr = NULL
    WHERE code_geographique IN ('{codes_str}');
    """
            sql_updates.append(('CAS 2 - Effacer', sql_cas2, len(cas2_valides)))
            print(f"⚠️  ATTENTION: Le CAS 2 concerne {len(cas2_valides)} lignes.")
            print(f"   Ces codes géographiques existent dans table mais ne devraient pas avoir de PNR.")

        # Afficher un avertissement si certaines lignes ont été ignorées
        nb_ignores = len(cas2_a_effacer) - len(cas2_valides) if len(cas2_valides) > 0 else len(cas2_a_effacer)
        if nb_ignores > 0:
            print(f"⚠️  {nb_ignores} lignes du CAS 2 ignorées (code_geographique NULL)\n")


    # CAS 3: Ajouter les PNR manquants
    # Nous ne pouvons pas les ajouter s'ils n'existent pas déjà dans table
    # Donc on fait un UPDATE pour ces lignes
    if len(cas3_a_ajouter) > 0:
        print(f"⚠️  ATTENTION: Le CAS 3 concerne {len(cas3_a_ajouter)} lignes.")
        print(f"   Ces codes géographiques existent dans table mais n'ont pas de PNR.")
        print(f"   Ils devraient en avoir un selon liste_pnr.")
        print(f"   On va faire des UPDATE individuels pour chaque ligne.\n")

    # CAS 4: Corriger les erreurs (on combine CAS 3 et CAS 4 dans la même logique d'UPDATE)
    cas_a_updater = pd.concat([cas3_a_ajouter, cas4_a_corriger])

    if len(cas_a_updater) > 0:
        # Créer une requête UPDATE pour chaque ligne
        for idx, row in cas_a_updater.iterrows():
            code_geo = row['code_geographique']
            code_pnr = row['code_pnr_reference']
            libelle_pnr = row['libelle_pnr_reference']

            # Échapper les apostrophes dans les libellés
            if pd.notna(libelle_pnr):
                libelle_pnr_escaped = str(libelle_pnr).replace("'", "''")
            else:
                libelle_pnr_escaped = None

            if pd.notna(code_pnr):
                code_pnr_str = f"'{code_pnr}'"
            else:
                code_pnr_str = "NULL"

            if pd.notna(libelle_pnr_escaped):
                libelle_pnr_str = f"'{libelle_pnr_escaped}'"
            else:
                libelle_pnr_str = "NULL"

            sql_update = f"UPDATE {table} SET code_pnr = {code_pnr_str}, libelle_pnr = {libelle_pnr_str} WHERE code_geographique = '{code_geo}';"
            sql_updates.append(('CAS 3/4 - Ajouter/Corriger', sql_update, 1))

    print(f"\n📊 STATISTIQUES DES MISES À JOUR:")
    print(f"{'='*80}")
    print(f"Nombre total de requêtes SQL à exécuter: {len(sql_updates)}")
    print(f"{'='*80}\n")

    # Afficher quelques exemples de requêtes SQL
    print("📋 EXEMPLES DE REQUÊTES SQL:\n")
    for i, (cas, sql, count) in enumerate(sql_updates[:5]):
        print(f"--- Requête {i+1} ({cas}) ---")
        print(sql)
        print()

    if len(sql_updates) > 5:
        print(f"... et {len(sql_updates) - 5} autres requêtes")




    # ✅ VÉRIFICATIONS DE SÉCURITÉ AVANT EXÉCUTION
    print("="*80)
    print("VÉRIFICATIONS DE SÉCURITÉ")
    print("="*80)

    # Vérification 1 : Vérifier les lignes qui seront RÉELLEMENT modifiées (après filtrage)
    print("\n1️⃣ Vérification des codes géographiques dans les requêtes SQL:")

    # Pour le CAS 2, vérifier après filtrage des NULL
    if len(cas2_a_effacer) > 0:
        cas2_valides_verif = cas2_a_effacer[pd.notna(cas2_a_effacer['code_geographique'])]
        nb_null_cas2 = len(cas2_a_effacer) - len(cas2_valides_verif)

        print(f"   CAS 2 - Total: {len(cas2_a_effacer)} lignes")
        print(f"   CAS 2 - Avec codes valides: {len(cas2_valides_verif)} lignes (seront modifiées)")
        if nb_null_cas2 > 0:
            print(f"   CAS 2 - Avec codes NULL: {nb_null_cas2} lignes (ignorées automatiquement)")
        print(f"   ✅ Seules les lignes avec codes valides seront modifiées")

    # Pour les CAS 3/4
    if len(cas_a_updater) > 0:
        nb_null_cas34 = cas_a_updater['code_geographique'].isna().sum()
        print(f"   CAS 3/4 - Codes NULL: {nb_null_cas34}")
        if nb_null_cas34 > 0:
            print("   ❌ ERREUR: Des lignes sans code_geographique seraient modifiées!")
        else:
            print("   ✅ Tous les codes sont valides")

    # Vérification 2 : Seules les colonnes code_pnr et libelle_pnr seront modifiées
    print("\n2️⃣ Vérification des colonnes modifiées:")
    print("   ✅ Les requêtes SQL modifient UNIQUEMENT:")
    print("      - code_pnr")
    print("      - libelle_pnr")
    print("   ✅ La colonne code_geographique n'est utilisée que dans le WHERE (non modifiée)")

    # Vérification 3 : Récapitulatif des modifications EFFECTIVES
    print("\n3️⃣ Récapitulatif des modifications EFFECTIVES:")
    cas2_effectives = len(cas2_a_effacer[pd.notna(cas2_a_effacer['code_geographique'])]) if len(cas2_a_effacer) > 0 else 0
    print(f"   - {cas2_effectives} lignes auront code_pnr et libelle_pnr mis à NULL")
    print(f"   - {len(cas3_a_ajouter)} lignes auront code_pnr et libelle_pnr ajoutés")
    print(f"   - {len(cas4_a_corriger)} lignes auront code_pnr et libelle_pnr corrigés")
    print(f"   - {len(cas5_commune_manquante)} communes dans liste_pnr sont absentes de {table} (non modifiées)")

    print("\n" + "="*80)
    # Vérifier uniquement les CAS 3/4 car le CAS 2 filtre déjà les NULL
    total_null = cas_a_updater['code_geographique'].isna().sum() if len(cas_a_updater) > 0 else 0

    if total_null > 0:
        print("❌ ATTENTION: Des codes NULL ont été détectés dans CAS 3/4! NE PAS EXÉCUTER!")
    else:
        print("✅ TOUTES LES VÉRIFICATIONS SONT OK")
    print("="*80)


    # ATTENTION: Ce code va modifier la base de données !
    # Exécuter seulement après avoir vérifié les résultats ci-dessus

    # Demander confirmation avant l'exécution
    confirmation = input(f"\n⚠️  Voulez-vous exécuter les mises à jour SQL pour la table '{table}' ? (oui/non): ").strip().lower()
    if confirmation not in ['oui', 'o', 'yes', 'y']:
        print(f"❌ Mise à jour annulée pour {table}.\n")
        continue

    print("🚀 Exécution des mises à jour SQL...\n")

    with engine.begin() as conn:
        total_updates = 0

        for i, (cas, sql, count) in enumerate(sql_updates):
            try:
                result = conn.execute(text(sql))
                total_updates += result.rowcount if hasattr(result, 'rowcount') else count

                if (i + 1) % 100 == 0:
                    print(f"   Progression: {i+1}/{len(sql_updates)} requêtes exécutées...")

            except Exception as e:
                print(f"❌ Erreur sur la requête {i+1}: {e}")
                print(f"   SQL: {sql[:100]}...")
                raise

    print(f"\n✅ Mise à jour terminée!")
    print(f"   Total de requêtes exécutées: {len(sql_updates)}")
    print(f"   Total de lignes affectées: {total_updates}")



    # Refaire la vérification pour s'assurer que tout est correct
    # IMPORTANT: Exclure les lignes avec code_geographique NULL car elles ne peuvent pas être comparées
    query_final = f"""
    SELECT code_geographique, code_pnr, libelle_pnr
    FROM {table}
    WHERE (code_pnr IS NOT NULL OR libelle_pnr IS NOT NULL)
      AND code_geographique IS NOT NULL
    """

    with engine.begin() as conn:
        df_final = pd.read_sql(query_final, conn)

    # Formater le code_geographique sur 5 caractères
    df_final['code_geographique'] = df_final['code_geographique'].apply(
        lambda x: str(x).zfill(5) if pd.notna(x) else x
    )

    if total_null == 0:

    # Refaire le merge
        merged_final = df_final.merge(
            df_reference,
            left_on='code_geographique',
            right_on='code_geographique',
            how='left',
            suffixes=('_collectivites', '_reference')
        )

    # Identifier les différences restantes
        differences_final = merged_final[
            (merged_final['code_pnr_collectivites'] != merged_final['code_pnr_reference']) |
            (merged_final['libelle_pnr_collectivites'] != merged_final['libelle_pnr_reference'])
        ]

        print("="*80)
        print("VÉRIFICATION FINALE")
        print("="*80)
        print(f"Nombre de lignes avec PNR dans {table} (code valide): {len(df_final)}")
        print(f"Nombre de différences restantes: {len(differences_final)}")
        print("="*80)

        if len(differences_final) == 0:
            print("\n✅ PARFAIT ! Toutes les données sont maintenant cohérentes entre liste_pnr et table !")
        else:
            print(f"\n⚠️  Il reste {len(differences_final)} différences à corriger.")
            print("Voici les premières lignes:")
            display(differences_final[['code_geographique', 'code_pnr_table', 'code_pnr_reference',
                                   'libelle_pnr_table', 'libelle_pnr_reference']].head(10))
    else:
        print("❌ ERREUR")

    # ÉTAPE SUPPLÉMENTAIRE : Traitement spécifique pour collectivites_searchbar
    # Mise à jour des lignes avec code_geographique IS NULL AND code_pnr IS NOT NULL
    if table == "collectivites_searchbar":
        print("\n" + "="*80)
        print("ÉTAPE SUPPLÉMENTAIRE - TRAITEMENT DES LIGNES SANS code_geographique")
        print("="*80)

        # Récupérer les lignes avec code_geographique IS NULL AND code_pnr IS NOT NULL
        query_sans_code_geo = f"""
        SELECT code_pnr, libelle_pnr, search_code, search_libelle
        FROM {table}
        WHERE code_geographique IS NULL AND code_pnr IS NOT NULL
        """

        with engine.begin() as conn:
            df_sans_code_geo = pd.read_sql(query_sans_code_geo, conn)

        print(f"Nombre de lignes avec code_geographique IS NULL AND code_pnr IS NOT NULL: {len(df_sans_code_geo)}")

        if len(df_sans_code_geo) > 0:
            # Récupérer tous les PNR uniques dans liste_pnr
            query_pnr_uniques = """
            SELECT DISTINCT code_pnr, pnr as libelle_pnr
            FROM liste_pnr
            WHERE code_pnr IS NOT NULL
            """

            with engine.begin() as conn:
                df_pnr_uniques = pd.read_sql(query_pnr_uniques, conn)

            print(f"Nombre de PNR uniques dans liste_pnr: {len(df_pnr_uniques)}")

            # Construire les requêtes SQL de mise à jour
            sql_updates_searchbar = []

            for idx, row_pnr in df_pnr_uniques.iterrows():
                code_pnr = row_pnr['code_pnr']
                libelle_pnr = row_pnr['libelle_pnr']

                # Échapper les apostrophes dans les libellés
                if pd.notna(libelle_pnr):
                    libelle_pnr_escaped = str(libelle_pnr).replace("'", "''")
                else:
                    libelle_pnr_escaped = None

                if pd.notna(code_pnr):
                    code_pnr_str = f"'{code_pnr}'"
                else:
                    code_pnr_str = "NULL"

                if pd.notna(libelle_pnr_escaped):
                    libelle_pnr_str = f"'{libelle_pnr_escaped}'"
                else:
                    libelle_pnr_str = "NULL"

                # Mise à jour des 4 colonnes : code_pnr, libelle_pnr, search_code, search_libelle
                sql_update_searchbar = f"""
UPDATE {table}
SET code_pnr = {code_pnr_str},
    libelle_pnr = {libelle_pnr_str},
    search_code = {code_pnr_str},
    search_libelle = {libelle_pnr_str}
WHERE code_geographique IS NULL
  AND code_pnr = {code_pnr_str};
"""
                sql_updates_searchbar.append(sql_update_searchbar)

            print(f"\n📊 STATISTIQUES DES MISES À JOUR SEARCHBAR:")
            print(f"{'='*80}")
            print(f"Nombre de requêtes SQL à exécuter: {len(sql_updates_searchbar)}")
            print(f"{'='*80}\n")

            # Afficher quelques exemples
            print("📋 EXEMPLES DE REQUÊTES SQL:\n")
            for i, sql in enumerate(sql_updates_searchbar[:3]):
                print(f"--- Requête {i+1} ---")
                print(sql)
                print()

            if len(sql_updates_searchbar) > 3:
                print(f"... et {len(sql_updates_searchbar) - 3} autres requêtes")

            # Demander confirmation
            confirmation_searchbar = input(f"\n⚠️  Voulez-vous exécuter les mises à jour des lignes sans code_geographique pour '{table}' ? (oui/non): ").strip().lower()
            if confirmation_searchbar not in ['oui', 'o', 'yes', 'y']:
                print(f"❌ Mise à jour searchbar annulée pour {table}.\n")
            else:
                print("🚀 Exécution des mises à jour searchbar...\n")

                with engine.begin() as conn:
                    total_updates_searchbar = 0

                    for i, sql in enumerate(sql_updates_searchbar):
                        try:
                            result = conn.execute(text(sql))
                            total_updates_searchbar += result.rowcount if hasattr(result, 'rowcount') else 1

                            if (i + 1) % 10 == 0:
                                print(f"   Progression: {i+1}/{len(sql_updates_searchbar)} requêtes exécutées...")

                        except Exception as e:
                            print(f"❌ Erreur sur la requête {i+1}: {e}")
                            print(f"   SQL: {sql[:100]}...")
                            raise

                print(f"\n✅ Mise à jour searchbar terminée!")
                print(f"   Total de requêtes exécutées: {len(sql_updates_searchbar)}")
                print(f"   Total de lignes affectées: {total_updates_searchbar}")
                print("="*80)
        else:
            print("ℹ️  Aucune ligne à traiter pour ce cas spécifique.")
            print("="*80)
