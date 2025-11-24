'use server';

export interface ZASFeature {
  CdZAS: string;
  LbZAS: string;
  CdDepartement: string;
  CodesAlternatifs: string;
  TypeZAS: string;
  geometry: string;
}

/**
 * Query SANDRE WFS API to get ZAS (Zones d'Alerte Sécheresse) intersecting with a territory
 * Uses BBOX filter for reliable performance
 */
export const GetZASByIntersect = async (
  territoryWKT: string
): Promise<ZASFeature[]> => {
  const startTime = Date.now();
  const bbox = extractBBOX(territoryWKT);

  // Try with a larger count limit and pagination if needed
  const maxCount = 1000;
  const requestBody = `<?xml version="1.0"?>
<wfs:GetFeature service="WFS" version="2.0.0" 
  count="${maxCount}"
  xmlns:wfs="http://www.opengis.net/wfs/2.0"
  xmlns:fes="http://www.opengis.net/fes/2.0"
  xmlns:gml="http://www.opengis.net/gml/3.2"
  xmlns:sa="http://services.sandre.eaufrance.fr/sa">
  <wfs:Query typeNames="sa:ZAS">
    <fes:Filter>
      <fes:BBOX>
        <fes:ValueReference>msGeometry</fes:ValueReference>
        <gml:Envelope srsName="EPSG:4326">
          <gml:lowerCorner>${bbox.minLat} ${bbox.minLon}</gml:lowerCorner>
          <gml:upperCorner>${bbox.maxLat} ${bbox.maxLon}</gml:upperCorner>
        </gml:Envelope>
      </fes:BBOX>
    </fes:Filter>
  </wfs:Query>
</wfs:GetFeature>`;

  try {
    const response = await fetch('https://services.sandre.eaufrance.fr/geo/zas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml'
      },
      body: requestBody,
      signal: AbortSignal.timeout(30000) // 30 second timeout for large territories
    });

    if (!response.ok) {
      console.error('[SANDRE WFS] HTTP Error:', response.status, response.statusText);
      const text = await response.text();
      console.error('[SANDRE WFS] Error response:', text.substring(0, 500));
      throw new Error(`WFS request failed: ${response.status} ${response.statusText}`);
    }

    const gmlText = await response.text();
    console.log('[SANDRE WFS] Response received:', gmlText.length, 'bytes');

    const features = parseGMLResponse(gmlText);

    const duration = Date.now() - startTime;
    console.log(`[SANDRE WFS] Parsed ${features.length} features in ${duration}ms`);

    return features;
  } catch (error) {
    console.error('[SANDRE WFS] Error:', error);
    throw error;
  }
};

/**
 * Extract bounding box coordinates from WKT polygon
 */
function extractBBOX(wkt: string): {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
} {
  const coordsMatch = wkt.match(/\(\((.*?)\)\)/);
  if (!coordsMatch) throw new Error('Invalid WKT format');

  const coords = coordsMatch[1].split(',').map((pair) => {
    const [lon, lat] = pair.trim().split(/\s+/).map(Number);
    return { lon, lat };
  });

  return {
    minLon: Math.min(...coords.map((c) => c.lon)),
    maxLon: Math.max(...coords.map((c) => c.lon)),
    minLat: Math.min(...coords.map((c) => c.lat)),
    maxLat: Math.max(...coords.map((c) => c.lat))
  };
}

/**
 * Parse GML response from WFS and extract ZAS features
 */
function parseGMLResponse(gml: string): ZASFeature[] {
  const features: ZASFeature[] = [];

  const memberRegex = /<wfs:member>([\s\S]*?)<\/wfs:member>/g;
  let match;

  while ((match = memberRegex.exec(gml)) !== null) {
    const featureXML = match[1];

    const cdZAS = featureXML.match(/<sa:CdZAS>(.*?)<\/sa:CdZAS>/)?.[1] || '';
    const lbZAS = featureXML.match(/<sa:LbZAS>(.*?)<\/sa:LbZAS>/)?.[1] || '';
    const cdDepartement =
      featureXML.match(/<sa:CdDepartement>(.*?)<\/sa:CdDepartement>/)?.[1] || '';
    const codesAlternatifs =
      featureXML.match(/<sa:CodesAlternatifs>(.*?)<\/sa:CodesAlternatifs>/)?.[1] || '';
    const typeZAS =
      featureXML.match(/<sa:TypeZAS>(.*?)<\/sa:TypeZAS>/)?.[1] || '';
    
    // Extract GML geometry and convert to GeoJSON
    const geometryGML =
      featureXML.match(/<sa:msGeometry>([\s\S]*?)<\/sa:msGeometry>/)?.[1] || '';
    
    const geometry = gmlToGeoJSON(geometryGML);

    features.push({
      CdZAS: cdZAS,
      LbZAS: lbZAS,
      CdDepartement: cdDepartement,
      CodesAlternatifs: codesAlternatifs,
      TypeZAS: typeZAS,
      geometry: geometry
    });
  }

  return features;
}

/**
 * Convert GML polygon to GeoJSON format
 */
function gmlToGeoJSON(gml: string): string {
  // Extract coordinates from GML posList
  // GML format: <gml:posList>lat1 lon1 lat2 lon2...</gml:posList>
  const posListMatch = gml.match(/<gml:posList[^>]*>(.*?)<\/gml:posList>/);
  
  if (posListMatch) {
    const coords = posListMatch[1].trim().split(/\s+/);
    const pairs: [number, number][] = [];
    
    // GML is lat lon, GeoJSON needs [lon, lat]
    for (let i = 0; i < coords.length; i += 2) {
      const lat = parseFloat(coords[i]);
      const lon = parseFloat(coords[i + 1]);
      pairs.push([lon, lat]); // Swap to [lon, lat] for GeoJSON
    }
    
    return JSON.stringify({
      type: 'Polygon',
      coordinates: [pairs]
    });
  }
  
  // Fallback if no geometry found
  return JSON.stringify({ type: 'Polygon', coordinates: [] });
}

