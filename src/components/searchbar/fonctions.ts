import { eptRegex } from '@/lib/utils/regex';
import { useRouter } from 'next/navigation';

export const handleRechercheRedirection = ({
  searchCode,
  searchLibelle,
  typeTerritoire,
  router,
  page
}: {
  searchCode: string;
  searchLibelle: string;
  typeTerritoire: 'epci' | 'commune' | 'petr' | 'pnr' | 'departement';
  router: ReturnType<typeof useRouter>;
  page: string;
}) => {
  if (typeTerritoire === 'epci' && eptRegex.test(searchLibelle)) {
    router.push(`/${page}?code=200054781&libelle=${searchLibelle}&type=ept`);
  } else if (searchCode.length !== 0) {
    router.push(
      `/${page}?code=${searchCode}&libelle=${searchLibelle}&type=${typeTerritoire}`
    );
  } else if (searchLibelle.length !== 0) {
    router.push(`/${page}?libelle=${searchLibelle}&type=${typeTerritoire}`);
  }
};

export const handleChangementTerritoireRedirection = ({
  searchCode,
  searchLibelle,
  typeTerritoire,
  router,
  page,
  thematique
}: {
  searchCode: string;
  searchLibelle: string;
  typeTerritoire: 'epci' | 'commune' | 'petr' | 'pnr' | 'departement';
  router: ReturnType<typeof useRouter>;
  page: string;
  thematique?: string;
}) => {
  if (typeTerritoire === 'epci' && eptRegex.test(searchLibelle)) {
    router.push(`/${page}?code=200054781&libelle=${searchLibelle}&type=ept${thematique ? `&thematique=${thematique}` : ''}`);
  } else if (searchCode.length !== 0) {
    router.push(
      `/${page}?code=${searchCode}&libelle=${searchLibelle}&type=${typeTerritoire}${thematique ? `&thematique=${thematique}` : ''}`
    );
  } else if (searchLibelle.length !== 0) {
    router.push(`/${page}?libelle=${searchLibelle}&type=${typeTerritoire}${thematique ? `&thematique=${thematique}` : ''}`);
  }
};
