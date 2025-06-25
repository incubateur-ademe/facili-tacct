import { ConsommationNAF } from '@/lib/postgres/models';
import * as biodiversite from '../databases/biodiversite';
import * as inconfortThermique from '../databases/inconfortThermique';
import * as ressourcesEau from '../databases/ressourcesEau';
import { prisma, redis } from '../redis';

jest.setTimeout(60000); // Increase timeout for heavy queries

describe('Integration: query functions for biodiversite', () => {
  it('GetAgricultureBio returns expected results for EPCI 200054781', async () => {
    const result = await biodiversite.GetAgricultureBio('Métropole du Grand Paris', 'epci');
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(5);
    expect(result[0]).toHaveProperty('LIBELLE_SOUS_CHAMP', 'Surface certifiée');
    // S'assurer qu'aucune colonne ne commence par un chiffre (bug entre prisma et postgres)
    expect(Object.keys(result[0]).every(key => !/^\d/.test(key))).toBe(true);
  });
  it('GetConsommationNAF returns expected results for EPCI 200054781', async () => {
    const result = await biodiversite.GetConsommationNAF('200054781', 'Métropole du Grand Paris', 'epci');
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(130);
    const uniqueDepartements = new Set(result.map((item: ConsommationNAF) => item.libelle_departement));
    expect(uniqueDepartements.size).toBe(6);
    expect(result.every((item: ConsommationNAF) => item.naf09art23 !== null)).toBe(true);
    // S'assurer qu'aucune colonne ne commence par un chiffre (bug entre prisma et postgres)
    expect(Object.keys(result[0]).every(key => !/^\d/.test(key))).toBe(true);
  });
  it('GetAOT40 returns expected results', async () => {
    const result = await biodiversite.GetAOT40();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(291);
    expect(result[0]).toHaveProperty('valeur_brute', 9487.38664050025);
    // S'assurer qu'aucune colonne ne commence par un chiffre (bug entre prisma et postgres)
    expect(Object.keys(result[0]).every(key => !/^\d/.test(key))).toBe(true);
  });
});

describe('Integration: query functions for ressourcesEau', () => {
  it('GetRessourceEau returns expected results for EPCI 200042497', async () => {
    const result = await ressourcesEau.GetRessourceEau('200042497', 'Communauté de communes Dombes Saône Vallée', 'epci');
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(6647);
    expect(result[0]).toHaveProperty('A2020');
    expect(result[0]).toHaveProperty('A2019');
    expect(result[0]).toHaveProperty('A2018');
    expect(result[0]).toHaveProperty('A2017');
    expect(result[0]).toHaveProperty('A2016');
    expect(result[0]).toHaveProperty('A2015');
    expect(result[0]).toHaveProperty('A2014');
    expect(result[0]).toHaveProperty('A2013');
    expect(result[0]).toHaveProperty('A2012');
    expect(result[0]).toHaveProperty('A2011');
    expect(result[0]).toHaveProperty('A2010');
    expect(result[0]).toHaveProperty('A2009');
    expect(result[0]).toHaveProperty('A2008');
    // S'assurer qu'aucune colonne ne commence par un chiffre (bug entre prisma et postgres)
    expect(Object.keys(result[0]).every(key => !/^\d/.test(key))).toBe(true);
  });
  it('GetQualiteEauxBaignade returns array', async () => {
    const result = await ressourcesEau.GetQualiteEauxBaignade('200067106', "Communauté d'agglomération du Pays Basque", 'epci');
    expect(Array.isArray(result)).toBe(true);
    // S'assurer qu'aucune colonne ne commence par un chiffre (bug entre prisma et postgres)
    expect(Object.keys(result[0]).every(key => !/^\d/.test(key))).toBe(true);
  });
});

describe('Integration: query functions for inconfortThermique', () => {
  it('GetInconfortThermique returns array', async () => {
    const result = await inconfortThermique.GetInconfortThermique('200070555', 'Communauté de communes de la Veyle', 'epci');
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(391);
    console.log(Object.keys(result[0]))
    // S'assurer qu'aucune colonne ne commence par un chiffre (bug entre prisma et postgres)
    expect(Object.keys(result[0]).every(key => !/^\d/.test(key))).toBe(true);
  });
});

// describe('Integration: query functions for gestionRisques', () => {
//   it('GetArretesCatnat returns array', async () => {
//     const result = await gestionRisques.GetArretesCatnat('someCode', 'someLibelle', 'epci');
//     expect(Array.isArray(result)).toBe(true);
//   });
//   it('GetIncendiesForet returns array', async () => {
//     const result = await gestionRisques.GetIncendiesForet('someCode', 'someLibelle', 'epci');
//     expect(Array.isArray(result)).toBe(true);
//   });
//   it('GetRga returns array', async () => {
//     const result = await gestionRisques.GetRga('someCode', 'someLibelle', 'epci');
//     expect(Array.isArray(result)).toBe(true);
//   });
// });

// describe('Integration: query functions for agriculture', () => {
//   it('GetAgriculture returns array', async () => {
//     const result = await agriculture.GetAgriculture('someCode', 'someLibelle', 'epci');
//     expect(Array.isArray(result)).toBe(true);
//   });
// });

afterAll(async () => {
  await prisma.$disconnect();
  await redis.quit();
});
