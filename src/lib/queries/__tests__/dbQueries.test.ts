import 'dotenv/config';
import { Pool } from 'pg';

const connectionString = process.env.SCALINGO_POSTGRESQL_URL;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

jest.setTimeout(60000);

describe('Integration: biodiversite queries', () => {
  it('agriculture_bio returns expected results for EPCI 200054781', async () => {
    const result = await pool.query(
      `SELECT * FROM databases_v2.agriculture_bio WHERE epci = $1`,
      ['200054781']
    );
    expect(Array.isArray(result.rows)).toBe(true);
    expect(result.rows.length).toBe(5);
    expect(result.rows[0]).toHaveProperty('LIBELLE_SOUS_CHAMP', 'Surface certifiée');
  });

  it('consommation_espaces_naf returns expected results for EPCI 200054781', async () => {
    const result = await pool.query(
      `SELECT * FROM databases_v2.consommation_espaces_naf WHERE epci = $1`,
      ['200054781']
    );
    expect(Array.isArray(result.rows)).toBe(true);
    expect(result.rows.length).toBe(150);
    const uniqueDepartements = new Set(
      result.rows.map((item) => item.libelle_departement)
    );
    expect(uniqueDepartements.size).toBe(6);
  });

  it('aot_40 returns expected results', async () => {
    const result = await pool.query(
      `SELECT * FROM databases_v2.aot_40`
    );
    expect(Array.isArray(result.rows)).toBe(true);
    expect(result.rows.length).toBe(291);
    expect(result.rows[0]).toHaveProperty('valeur brute', 9487.38664050025);
  });
});

describe('Integration: confort_thermique queries', () => {
  it('confort_thermique returns array for EPCI 200070555', async () => {
    const result = await pool.query(
      `SELECT * FROM databases_v2.confort_thermique WHERE epci = $1`,
      ['200070555']
    );
    expect(Array.isArray(result.rows)).toBe(true);
    expect(result.rows.length).toBe(18);
  });

  it('confort_thermique returns expected value for code_geographique 13055', async () => {
    const result = await pool.query(
      'SELECT precarite_logement FROM databases_v2.confort_thermique WHERE code_geographique = $1',
      ['13055']
    );
    expect(result.rows).toHaveLength(1);
    expect(result.rows[0].precarite_logement).toBe(0.08537360366198976);
  });

  it('confort_thermique returns expected value for code_geographique 75056', async () => {
    const result = await pool.query(
      'SELECT precarite_logement FROM databases_v2.confort_thermique WHERE code_geographique = $1',
      ['75056']
    );
    expect(result.rows).toHaveLength(1);
    expect(result.rows[0].precarite_logement).toBe(0.056940444530448095);
  });

  it('confort_thermique returns expected value for code_geographique 69123', async () => {
    const result = await pool.query(
      'SELECT precarite_logement FROM databases_v2.confort_thermique WHERE code_geographique = $1',
      ['69123']
    );
    expect(result.rows).toHaveLength(1);
    expect(result.rows[0].precarite_logement).toBe(0.06629419113240076);
  });
});

describe('Integration: query functions to check if collectivites_searchbar has right structure', () => {
  it('collectivites_searchbar table has expected checksum', async () => {
    const result = await pool.query(
      `SELECT md5(string_agg(t::text, '')) AS checksum
       FROM (
         SELECT * FROM databases_v2.collectivites_searchbar ORDER BY index
       ) t`
    );
    expect(result.rows).toHaveLength(1);
    expect(result.rows[0].checksum).toBe('36db3c9e098bc85da40091d1fa8a3456');
  });
});

afterAll(async () => {
  await pool.end();
});
