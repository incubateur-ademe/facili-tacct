import fs from 'fs';

const contours = JSON.parse(
    fs.readFileSync('src/lib/data/departements_contours.json', 'utf-8')
);
const presence = JSON.parse(
    fs.readFileSync('src/lib/data/presence_moustique_tigre.json', 'utf-8')
);

const features = Object.entries(contours).map(([code, geometry]) => ({
    type: 'Feature',
    properties: {
        code,
        annees: presence[code] ?? []
    },
    geometry
}));

const featureCollection = {
    type: 'FeatureCollection',
    features
};

const outputPath = 'src/lib/data/moustique_tigre_departements.json';
fs.writeFileSync(outputPath, JSON.stringify(featureCollection));

const stats = fs.statSync(outputPath);
console.log(
    `Fichier généré : ${outputPath} (${(stats.size / 1024).toFixed(1)} KB)`
);
console.log(
    `${features.length} départements — ${features.filter((f) => f.properties.annees.length > 0).length} avec présence du moustique tigre`
);
