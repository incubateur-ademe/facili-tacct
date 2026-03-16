import dotenv from 'dotenv';
import fs from 'fs';
import pg from 'pg';

if (fs.existsSync('.env')) {
    dotenv.config();
}

const { SCALINGO_POSTGRESQL_URL } = process.env;

if (!SCALINGO_POSTGRESQL_URL) {
    console.error(
        "Variable d'environnement manquante : SCALINGO_POSTGRESQL_URL"
    );
    process.exit(1);
}

const client = new pg.Client({
    connectionString: SCALINGO_POSTGRESQL_URL,
    ssl:
        process.env.NODE_ENV === 'dev'
            ? { ca: fs.readFileSync('ca.pem'), rejectUnauthorized: true }
            : { require: true, rejectUnauthorized: false }
});

await client.connect();
console.log('Connexion DB OK');

const start = performance.now();

// Tolérance 0.005 (~500m) : bon compromis qualité/poids
const { rows } = await client.query(`
    SELECT
        departement,
        ST_AsGeoJSON(
            ST_SimplifyPreserveTopology(ST_Union(geometry), 0.005),
            5
        ) AS geometry
    FROM postgis_v2."communes_drom"
    WHERE departement IS NOT NULL
    GROUP BY departement
    ORDER BY departement
`);

const elapsed = performance.now() - start;
console.log(`Query: ${rows.length} départements en ${elapsed.toFixed(0)}ms`);

await client.end();

// Construction d'un objet indexé par code département
const result = Object.fromEntries(
    rows.map((row) => [row.departement, JSON.parse(row.geometry)])
);

const outputPath = 'src/lib/data/departements_contours.json';
fs.writeFileSync(outputPath, JSON.stringify(result));

const stats = fs.statSync(outputPath);
const sizeKb = (stats.size / 1024).toFixed(1);
const sizeMb = (stats.size / 1024 / 1024).toFixed(2);
console.log(`Fichier généré : ${outputPath} (${sizeKb} KB / ${sizeMb} MB)`);
console.log(
    'Vérifie la taille — si > 2MB, augmente la tolérance dans le script.'
);
