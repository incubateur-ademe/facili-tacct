import { ConsommationNAF } from '@/lib/postgres/models';
import * as biodiversite from '../databases/biodiversite';
import { prisma, redis } from '../redis';

describe('Integration: query functions for biodiversite', () => {
  it('GetAgricultureBio returns expected results for EPCI Paris', async () => {
    const result = await biodiversite.GetAgricultureBio('Métropole du Grand Paris', 'epci');
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(5);
    expect(result[0]).toHaveProperty('LIBELLE_SOUS_CHAMP', 'Surface certifiée');
  });
  it('GetConsommationNAF returns expected results for EPCI', async () => {
    const result = await biodiversite.GetConsommationNAF('200054781', 'Métropole du Grand Paris', 'epci');
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(130);
    const uniqueDepartements = new Set(result.map((item: ConsommationNAF) => item.libelle_departement));
    expect(uniqueDepartements.size).toBe(6);
    expect(result.every((item: ConsommationNAF) => item.naf09art23 !== null)).toBe(true);
  });
  it('GetAOT40 returns expected results', async () => {
    const result = await biodiversite.GetAOT40();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(291);
    expect(result[0]).toHaveProperty('valeur_brute', 9487.38664050025);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
  await redis.quit();
});
