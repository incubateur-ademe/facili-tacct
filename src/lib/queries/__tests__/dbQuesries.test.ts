jest.mock('../../../generated/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        $queryRaw: jest.fn(async () => [{ mock: 'result' }]),
        findMany: jest.fn(async () => [{ mock: 'result' }]),
        findFirst: jest.fn(async () => ({ mock: 'result' })),
      };
    }),
  };
});

import * as biodiversite from '../databases/biodiversite';
import * as gestionRisques from '../databases/gestionRisques';
import * as inconfortThermique from '../databases/inconfortThermique';
import * as cartographie from '../postgis/cartographie';
import * as etatCoursDeau from '../postgis/etatCoursDeau';
import * as rga from '../postgis/rga';

describe('Database query functions', () => {
  it('GetInconfortThermique returns mocked result', async () => {
    const result = await inconfortThermique.GetInconfortThermique('code', 'libelle', 'type');
    expect(result).toBeDefined();
  });

  it('GetAgricultureBio returns mocked result', async () => {
    const result = await biodiversite.GetAgricultureBio('libelle', 'type');
    expect(result).toBeDefined();
  });

  it('GetAOT40 returns mocked result', async () => {
    const result = await biodiversite.GetAOT40();
    expect(result).toBeDefined();
  });

  it('GetConsommationNAF returns mocked result', async () => {
    const result = await biodiversite.GetConsommationNAF('code', 'libelle', 'type');
    expect(result).toBeDefined();
  });

  it('GetArretesCatnat returns mocked result', async () => {
    const result = await gestionRisques.GetArretesCatnat('code', 'libelle', 'type');
    expect(result).toBeDefined();
  });

  it('GetIncendiesForet returns mocked result', async () => {
    const result = await gestionRisques.GetIncendiesForet('code', 'libelle', 'type');
    expect(result).toBeDefined();
  });

  it('GetCommunes returns mocked result', async () => {
    const result = await cartographie.GetCommunes('code', 'libelle', 'type');
    expect(result).toBeDefined();
  });

  it('GetErosionCotiere returns mocked result', async () => {
    const result = await cartographie.GetErosionCotiere('code', 'libelle', 'type');
    expect(result).toBeDefined();
  });

  it('GetRGACarte returns mocked result', async () => {
    const result = await rga.GetRGACarte('code', 'libelle', 'type');
    expect(result).toBeDefined();
  });

  it('GetEtatCoursDeau returns mocked result', async () => {
    const result = await etatCoursDeau.GetEtatCoursDeau('code', 'libelle', 'type');
    expect(result).toBeDefined();
  });
});
