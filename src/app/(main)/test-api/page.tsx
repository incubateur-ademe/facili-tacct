import { GetCommunesGeometries } from "@/lib/queries/postgis/cartographie";
import { GetZASByIntersect } from "@/lib/queries/sandre/wfs";
import { GetZonesByDepartements } from "@/lib/queries/vigieau/query";
import { SearchParams } from "../types";
import { MapSecheresses } from "./mapSecheresses";

export default async function TestApi(props: { searchParams: SearchParams }) {
  const { code, libelle, type } = await props.searchParams;

  if (!code || !libelle || !type) {
    return (
      <div style={{ padding: '20px', fontFamily: 'monospace' }}>
        <h1>Test API ZAS</h1>
        <p>Add ?code=XXX&libelle=YYY&type=ZZZ to URL</p>
        <p>Example: ?code=PN51&libelle=Parc%20naturel%20régional%20de%20Corse&type=pnr</p>
      </div>
    );
  }

  const startTotal = Date.now();

  // Step 1: Get territory geometry
  const startGeometry = Date.now();
  const geographie = await GetCommunesGeometries(code, libelle, type);
  const durationGeometry = Date.now() - startGeometry;
  
  if (!geographie || geographie.length === 0) {
    return <div>No geometry found for this territory</div>;
  }

  const territoryWKT = geographie[0].geometry;

  // Step 2: Get ZAS with BBOX
  const startSANDRE = Date.now();
  let zasFeatures;
  try {
    zasFeatures = await GetZASByIntersect(territoryWKT);
  } catch (error) {
    console.error('[PAGE] SANDRE WFS Error:', error);
    return (
      <div style={{ padding: '20px', fontFamily: 'monospace', color: 'red' }}>
        <h1>Erreur SANDRE WFS</h1>
        <p>Impossible de récupérer les ZAS depuis SANDRE.</p>
        <p><strong>Erreur:</strong> {error instanceof Error ? error.message : String(error)}</p>
        <p><em>Le territoire est peut-être trop grand pour la requête WFS. Essayez avec un territoire plus petit.</em></p>
      </div>
    );
  }
  const durationSANDRE = Date.now() - startSANDRE;

  if (zasFeatures.length === 0) {
    return <div>No ZAS found for this territory</div>;
  }

  // Step 3: Extract unique departments
  const departments = [
    ...new Set(zasFeatures.map((f) => f.CdDepartement).filter(Boolean))
  ];

  // Step 4: Get alert levels from Vigieau
  const startVigieau = Date.now();
  const vigieauZones = await GetZonesByDepartements(departments);
  const durationVigieau = Date.now() - startVigieau;

  // Step 5: Join data by code
  const startJoin = Date.now();
  const enrichedZAS = zasFeatures
    .map((zas) => {
      // Extract code from CodesAlternatifs JSON
      let code = '';
      try {
        const decoded = zas.CodesAlternatifs.replace(/&quot;/g, '"');
        const parsed = JSON.parse(decoded);
        code = parsed.code || '';
      } catch {
        // Fallback: try to extract code directly
        const match = zas.CodesAlternatifs.match(/(\d+_[A-Z0-9]+_\d+)/);
        code = match ? match[1] : '';
      }

      const vigieauData = vigieauZones.find((v) => v.code === code);

      return {
        ...zas,
        code,
        niveauGravite: vigieauData?.niveauGravite || 'N/A',
        vigieauId: vigieauData?.id || null,
        dateDebut: vigieauData?.arrete?.dateDebutValidite,
        dateFin: vigieauData?.arrete?.dateFinValidite,
        arrete: vigieauData?.arrete
      };
    })
    .filter((zas) => zas.niveauGravite !== 'N/A'); // Exclude ZAS without active restrictions
  
  // Deduplicate by code (keep first occurrence)
  const uniqueZAS = enrichedZAS.filter((zas, index, self) =>
    index === self.findIndex((z) => z.code === zas.code)
  );
  
  const durationJoin = Date.now() - startJoin;
  const totalDuration = Date.now() - startTotal;

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px' }}>
      <h1>Test API ZAS - {libelle}</h1>
      <p><strong>Type:</strong> {type} | <strong>Code:</strong> {code}</p>
      <p><strong>ZAS trouvées:</strong> {uniqueZAS.length}</p>
      
      <h2>⏱️ Performance Breakdown</h2>
      <table border={1} cellPadding="8" style={{ borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>Étape</th>
            <th>Durée (ms)</th>
            <th>% du total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. PostGIS (géométrie territoire)</td>
            <td style={{ textAlign: 'right' }}>{durationGeometry}ms</td>
            <td style={{ textAlign: 'right' }}>{((durationGeometry/totalDuration)*100).toFixed(1)}%</td>
          </tr>
          <tr>
            <td>2. SANDRE WFS (ZAS)</td>
            <td style={{ textAlign: 'right' }}>{durationSANDRE}ms</td>
            <td style={{ textAlign: 'right' }}>{((durationSANDRE/totalDuration)*100).toFixed(1)}%</td>
          </tr>
          <tr>
            <td>3. Vigieau API (niveaux d'alerte)</td>
            <td style={{ textAlign: 'right' }}>{durationVigieau}ms</td>
            <td style={{ textAlign: 'right' }}>{((durationVigieau/totalDuration)*100).toFixed(1)}%</td>
          </tr>
          <tr>
            <td>4. Jointure des données</td>
            <td style={{ textAlign: 'right' }}>{durationJoin}ms</td>
            <td style={{ textAlign: 'right' }}>{((durationJoin/totalDuration)*100).toFixed(1)}%</td>
          </tr>
          <tr style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>
            <td>TOTAL</td>
            <td style={{ textAlign: 'right' }}>{totalDuration}ms</td>
            <td style={{ textAlign: 'right' }}>100%</td>
          </tr>
        </tbody>
      </table>

      <h2>Carte des Zones d'Alerte Sécheresse</h2>
      <div style={{ marginBottom: '20px' }}>
        <MapSecheresses zasFeatures={uniqueZAS} territoryWKT={territoryWKT} />
      </div>

      <h2>Détails des ZAS</h2>
      <p><strong>Departments:</strong> {departments.join(', ')}</p>

      <table border={1} cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Nom</th>
            <th>Département</th>
            <th>Type</th>
            <th>Niveau Gravité</th>
            <th>Date début</th>
            <th>Date fin</th>
          </tr>
        </thead>
        <tbody>
          {uniqueZAS.map((zas, i) => (
            <tr key={i}>
              <td>{zas.code}</td>
              <td>{zas.LbZAS}</td>
              <td>{zas.CdDepartement}</td>
              <td>{zas.TypeZAS}</td>
              <td style={{ 
                fontWeight: 'bold',
                color: zas.niveauGravite === 'N/A' ? 'gray' : 
                       zas.niveauGravite === 'crise' ? 'red' :
                       zas.niveauGravite === 'alerte renforcée' ? 'orange' :
                       zas.niveauGravite === 'alerte' ? 'darkorange' : 'green'
              }}>
                {zas.niveauGravite}
              </td>
              <td>{zas.dateDebut ? new Date(zas.dateDebut).toLocaleDateString('fr-FR') : '-'}</td>
              <td>{zas.dateFin ? new Date(zas.dateFin).toLocaleDateString('fr-FR') : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
