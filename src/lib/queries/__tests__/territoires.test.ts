import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Pool } from 'pg';

const connectionString = process.env.SCALINGO_POSTGRESQL_URL;
const cleanConnectionString = connectionString?.split('?')[0];
const caPemPath = path.join(__dirname, '../../../../ca.pem');
const caPem = fs.readFileSync(caPemPath, 'utf8');
const ca = caPem ?? process.env.POSTGRES_CA;

const pool = new Pool({
  connectionString: cleanConnectionString,
  ssl: {
    ca,
    rejectUnauthorized: false
  }
});

jest.setTimeout(120000);

afterAll(async () => {
  await pool.end();
});

const expectedPNR: [string, string][] = [
  ['FR8000015', 'PNR du Haut-Jura'],
  ['FR8000033', 'PNR du Verdon'],
  ['FR8000003', 'PNR du Luberon'],
  ['FR8000002', 'PNR du Queyras'],
  ['FR8000052', 'PNR des Baronnies provençales'],
  ['FR8000049', "PNR des Préalpes d'Azur"],
  ['FR8000041', "PNR des Monts d'Ardèche"],
  ['FR8000048', 'PNR des Ardennes'],
  ['FR8000047', 'PNR des Pyrénées ariégeoises'],
  ['FR8000013', "PNR de la Forêt d'Orient"],
  ['FR8000059', 'PNR Corbières-Fenouillèdes'],
  ['FR8000042', 'PNR de la Narbonnaise en Méditerranée'],
  ['FR8000014', 'PNR des Grands Causses'],
  ['FR8000054', "PNR de l'Aubrac"],
  ['FR8000011', 'PNR de Camargue'],
  ['FR8000046', 'PNR des Alpilles'],
  ['FR8000053', 'PNR de la Sainte-Baume'],
  ['FR8000021', 'PNR des Marais du Cotentin et du Bessin'],
  ['FR8000028', "PNR des Volcans d'Auvergne"],
  ['FR8000050', 'PNR du Marais poitevin'],
  ['FR8000045', 'PNR de Millevaches en Limousin'],
  ['FR8000025', 'PNR du Morvan'],
  ['FR8000060', "PNR Vallée de la Rance - Côte d'Émeraude"],
  ['FR8000035', 'PNR Périgord-Limousin'],
  ['FR8000058', 'PNR du Doubs Horloger'],
  ['FR8000001', 'PNR du Vercors'],
  ['FR8000010', 'PNR des Boucles de la Seine Normande'],
  ['FR8000034', 'PNR du Perche'],
  ['FR8000005', "PNR d'Armorique"],
  ['FR8000012', 'PNR de Corse'],
  ['FR8000055', 'PNR du Médoc'],
  ['FR8000018', 'PNR des Landes de Gascogne'],
  ['FR8000016', 'PNR du Haut-Languedoc'],
  ['FR8000008', 'PNR de la Brenne'],
  ['FR8000032', 'PNR Loire-Anjou-Touraine'],
  ['FR8000004', 'PNR de Chartreuse'],
  ['FR8000027', 'PNR du Pilat'],
  ['FR8000019', 'PNR Livradois-Forez'],
  ['FR8000009', 'PNR de Brière'],
  ['FR8000039', 'PNR des Causses du Quercy'],
  ['FR8000026', 'PNR Normandie-Maine'],
  ['FR8000024', 'PNR de la Montagne de Reims'],
  ['FR8000020', 'PNR de Lorraine'],
  ['FR8000051', 'PNR du Golfe du Morbihan'],
  ['FR8000029', 'PNR des Vosges du Nord'],
  ['FR8000036', "PNR de l'Avesnois"],
  ['FR8000037', 'PNR Scarpe-Escaut'],
  ['FR8000007', "PNR des Caps et marais d'Opale"],
  ['FR8000043', 'PNR Oise-Pays de France'],
  ['FR8000044', 'PNR des Pyrénées catalanes'],
  ['FR8000006', 'PNR des Ballons des Vosges'],
  ['FR8000031', 'PNR du Massif des Bauges'],
  ['FR8000031 et FR8000004', 'PNR du Massif des Bauges et PNR de Chartreuse'],
  ['FR8000038', 'PNR du Gâtinais français'],
  ['FR8000017', 'PNR de la Haute Vallée de Chevreuse'],
  ['FR8000030', 'PNR du Vexin Français'],
  ['FR8000056', 'PNR du Mont-Ventoux'],
  ['FR8000057', 'PNR Baie de Somme Picardie Maritime'],
  ['FR8000023', 'PNR de la Martinique'],
  ['FR8000040', 'PNR de la Guyane']
];

const expectedBrehat: [string, string] = ['22016', 'Île-de-Bréhat'];

{
  /* Test pour la correspondance PNR libelle-code */
}
const expectedMap = new Map<string, string>(expectedPNR);

describe('PNR code/libelle correspondance', () => {
  it('should have correct code_pnr/libelle_pnr pairs in collectivites_searchbar', async () => {
    const result = await pool.query(
      'SELECT code_pnr, libelle_pnr FROM databases_v2.collectivites_searchbar'
    );
    for (const row of result.rows) {
      if (row.code_pnr && expectedMap.has(row.code_pnr)) {
        expect(row.libelle_pnr).toBe(expectedMap.get(row.code_pnr));
      }
    }
  });
});
describe('consommation_espaces_naf code/libelle correspondance', () => {
  it('should have correct code_pnr/libelle_pnr pairs in consommation_espaces_naf', async () => {
    const result = await pool.query(
      'SELECT code_pnr, libelle_pnr FROM databases_v2.consommation_espaces_naf'
    );
    for (const row of result.rows) {
      if (row.code_pnr && expectedMap.has(row.code_pnr)) {
        expect(row.libelle_pnr).toBe(expectedMap.get(row.code_pnr));
      }
    }
  });
});
describe('arretes_catnat code/libelle correspondance', () => {
  it('should have correct code_pnr/libelle_pnr pairs in arretes_catnat', async () => {
    const result = await pool.query(
      'SELECT code_pnr, libelle_pnr FROM databases_v2.arretes_catnat'
    );
    for (const row of result.rows) {
      if (row.code_pnr && expectedMap.has(row.code_pnr)) {
        expect(row.libelle_pnr).toBe(expectedMap.get(row.code_pnr));
      }
    }
  });
});
describe('inconfort_thermique code/libelle correspondance', () => {
  it('should have correct code_pnr/libelle_pnr pairs in inconfort_thermique', async () => {
    const result = await pool.query(
      'SELECT code_pnr, libelle_pnr FROM databases_v2.confort_thermique'
    );
    for (const row of result.rows) {
      if (row.code_pnr && expectedMap.has(row.code_pnr)) {
        expect(row.libelle_pnr).toBe(expectedMap.get(row.code_pnr));
      }
    }
  });
});
describe('feux_foret code/libelle correspondance', () => {
  it('should have correct code_pnr/libelle_pnr pairs in feux_foret', async () => {
    const result = await pool.query(
      'SELECT code_pnr, libelle_pnr FROM databases_v2.feux_foret'
    );
    for (const row of result.rows) {
      if (row.code_pnr && expectedMap.has(row.code_pnr)) {
        expect(row.libelle_pnr).toBe(expectedMap.get(row.code_pnr));
      }
    }
  });
});
describe('ressources_eau code/libelle correspondance', () => {
  it('should have correct code_pnr/libelle_pnr pairs in ressources_eau', async () => {
    const result = await pool.query(
      'SELECT code_pnr, libelle_pnr FROM databases_v2.prelevements_eau'
    );
    for (const row of result.rows) {
      if (row.code_pnr && expectedMap.has(row.code_pnr)) {
        expect(row.libelle_pnr).toBe(expectedMap.get(row.code_pnr));
      }
    }
  });
});
describe('rga code/libelle correspondance', () => {
  it('should have correct code_pnr/libelle_pnr pairs in rga', async () => {
    const result = await pool.query(
      'SELECT code_pnr, libelle_pnr FROM databases_v2.rga'
    );
    for (const row of result.rows) {
      if (row.code_pnr && expectedMap.has(row.code_pnr)) {
        expect(row.libelle_pnr).toBe(expectedMap.get(row.code_pnr));
      }
    }
  });
});
describe('agriculture code/libelle correspondance', () => {
  it('should have correct code_pnr/libelle_pnr pairs in agriculture', async () => {
    const result = await pool.query(
      'SELECT code_pnr, libelle_pnr FROM databases_v2.agriculture'
    );
    for (const row of result.rows) {
      if (row.code_pnr && expectedMap.has(row.code_pnr)) {
        expect(row.libelle_pnr).toBe(expectedMap.get(row.code_pnr));
      }
    }
  });
});
describe('communes_drom code/libelle correspondance', () => {
  it('should have correct code_pnr/libelle_pnr pairs in postgis.communes_drom', async () => {
    const result = await pool.query(
      'SELECT code_pnr, libelle_pnr FROM postgis_v2.communes_drom'
    );
    for (const row of result.rows) {
      if (row.code_pnr && expectedMap.has(row.code_pnr)) {
        expect(row.libelle_pnr).toBe(expectedMap.get(row.code_pnr));
      }
    }
  });
});

{
  /* Test pour la présence de l'île de Bréhat */
}

describe('Île de Bréhat presence', () => {
  it('should have Île de Bréhat in collectivites_searchbar', async () => {
    const result = await pool.query(
      'SELECT code_geographique, libelle_geographique FROM databases_v2.collectivites_searchbar WHERE code_geographique = $1',
      [expectedBrehat[0]]
    );
    expect(result.rows[0]).toEqual({
      code_geographique: expectedBrehat[0],
      libelle_geographique: expectedBrehat[1]
    });
  });
});

describe('Île de Bréhat presence', () => {
  it('should have Île de Bréhat in consommation_espaces_naf', async () => {
    const result = await pool.query(
      'SELECT code_geographique, libelle_geographique FROM databases_v2.consommation_espaces_naf WHERE code_geographique = $1',
      [expectedBrehat[0]]
    );
    expect(result.rows[0]).toEqual({
      code_geographique: expectedBrehat[0],
      libelle_geographique: expectedBrehat[1]
    });
  });
});

describe('Île de Bréhat presence', () => {
  it('should have Île de Bréhat in consommation_espaces_naf', async () => {
    const result = await pool.query(
      'SELECT code_geographique, libelle_geographique FROM databases_v2.arretes_catnat WHERE code_geographique = $1',
      [expectedBrehat[0]]
    );
    expect(result.rows[0]).toEqual({
      code_geographique: expectedBrehat[0],
      libelle_geographique: expectedBrehat[1]
    });
  });
});

describe('Île de Bréhat presence', () => {
  it('should have Île de Bréhat in inconfort_thermique', async () => {
    const result = await pool.query(
      'SELECT code_geographique, libelle_geographique FROM databases_v2.confort_thermique WHERE code_geographique = $1',
      [expectedBrehat[0]]
    );
    expect(result.rows[0]).toEqual({
      code_geographique: expectedBrehat[0],
      libelle_geographique: expectedBrehat[1]
    });
  });
});

describe('Île de Bréhat presence', () => {
  it('should have Île de Bréhat in rga', async () => {
    const result = await pool.query(
      'SELECT code_geographique, libelle_geographique FROM databases_v2.rga WHERE code_geographique = $1',
      [expectedBrehat[0]]
    );
    expect(result.rows[0]).toEqual({
      code_geographique: expectedBrehat[0],
      libelle_geographique: expectedBrehat[1]
    });
  });
});

describe('Île de Bréhat presence', () => {
  it('should have Île de Bréhat in ressources_eau', async () => {
    const result = await pool.query(
      'SELECT code_geographique, libelle_geographique FROM databases_v2.prelevements_eau WHERE code_geographique = $1',
      [expectedBrehat[0]]
    );
    expect(result.rows[0]).toEqual({
      code_geographique: expectedBrehat[0],
      libelle_geographique: expectedBrehat[1]
    });
  });
});

describe('databases_v2_arretes_catnat row count', () => {
  it('should have more than 260600 rows', async () => {
    const result = await pool.query(
      'SELECT COUNT(*) as count FROM databases_v2.arretes_catnat'
    );
    const count = parseInt(result.rows[0].count);
    expect(count).toBeGreaterThan(260600);
  });
});
