
export const ColumnLibelleCheck = (type: string): string => {
  return type === 'pnr'
    ? 'libelle_pnr'
    : type === 'petr'
      ? 'libelle_petr'
      : type === 'ept'
        ? 'ept'
        : type === 'epci'
          ? 'libelle_epci'
          : type === 'departement'
            ? 'libelle_departement'
            : 'libelle_geographique';
};

export const ColumnCodeCheck = (type: string): string => {
  return type === 'pnr'
        ? 'code_pnr'
        : type === 'petr'
          ? 'libelle_petr'
          : type === 'ept'
            ? 'ept'
            : type === 'epci' 
              ? 'epci'
              : type === 'departement'
                ? 'departement'
                : 'code_geographique'
}
