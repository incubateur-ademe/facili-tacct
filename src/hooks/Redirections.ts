import { eptRegex } from '@/lib/utils/regex';

export const handleRedirection = ({
  searchCode,
  searchLibelle,
  typeTerritoire,
  page
}: {
  searchCode: string;
  searchLibelle: string;
  typeTerritoire: 'epci' | 'commune' | 'petr' | 'pnr' | 'departement';
  page: string;
}) => {
  if (typeTerritoire === 'epci' && eptRegex.test(searchLibelle)) {
    return `/${page}?code=200054781&libelle=${searchLibelle}&type=ept`;
  } else if (searchCode.length !== 0) {
    return `/${page}?code=${searchCode}&libelle=${searchLibelle}&type=${typeTerritoire}`;
  } else if (searchLibelle.length !== 0) {
    return `/${page}?libelle=${searchLibelle}&type=${typeTerritoire}`;
  } else return `/${page}`;
};
