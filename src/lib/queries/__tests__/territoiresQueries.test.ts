import { Commune, Departement, EPCI, PETR, PNR } from '../territoiresQueries';

jest.mock('../../../generated/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        $queryRaw: jest.fn(async (query) => {
          // Mocked response for testing
          return [{ search_code: 'mockCode', search_libelle: 'mockLibelle' }];
        })
      };
    })
  };
});

describe('territoiresQueries', () => {
  it('should return results for PNR query', async () => {
    const result = await PNR('mockCollectivite');
    expect(result).toEqual([
      { search_code: 'mockCode', search_libelle: 'mockLibelle' }
    ]);
  });

  it('should return results for PETR query', async () => {
    const result = await PETR('mockCollectivite');
    expect(result).toEqual([
      { search_code: 'mockCode', search_libelle: 'mockLibelle' }
    ]);
  });

  it('should return results for EPCI query', async () => {
    const result = await EPCI('mockCollectivite');
    expect(result).toEqual([
      { search_code: 'mockCode', search_libelle: 'mockLibelle' }
    ]);
  });

  it('should return results for Commune query', async () => {
    const result = await Commune('mockCollectivite');
    expect(result).toEqual([
      { search_code: 'mockCode', search_libelle: 'mockLibelle' }
    ]);
  });

  it('should return results for Departement query', async () => {
    const result = await Departement('mockCollectivite');
    expect(result).toEqual([
      { search_code: 'mockCode', search_libelle: 'mockLibelle' }
    ]);
  });
});
