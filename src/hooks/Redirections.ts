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

export const handleRedirectionThematique = ({
  code,
  libelle,
  type,
  page,
  thematique
}: {
  code: string;
  libelle: string;
  type: 'epci' | 'commune' | 'petr' | 'pnr' | 'departement';
  page: string;
  thematique: string;
}) => {
  if (type === 'epci' && eptRegex.test(libelle)) {
    return `/${page}?code=200054781&libelle=${libelle}&type=ept&thematique=${thematique}`;
  } else if (code.length !== 0) {
    return `/${page}?code=${code}&libelle=${libelle}&type=${type}&thematique=${thematique}`;
  } else if (libelle.length !== 0) {
    return `/${page}?libelle=${libelle}&type=${type}&thematique=${thematique}`;
  } else return `/${page}`;
};
