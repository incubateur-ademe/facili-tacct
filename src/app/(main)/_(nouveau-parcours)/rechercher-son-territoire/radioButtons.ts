export const radioOptions = (
  typeTerritoire: string,
  handleRadioChange: (
    value: 'epci' | 'commune' | 'petr' | 'pnr' | 'departement'
  ) => void
) => [
  {
    label: 'EPCI/EPT',
    nativeInputProps: {
      checked: typeTerritoire === 'epci',
      onChange: () => handleRadioChange('epci')
    }
  },
  {
    label: 'Commune',
    nativeInputProps: {
      checked: typeTerritoire === 'commune',
      onChange: () => handleRadioChange('commune')
    }
  },
  {
    label: 'PETR',
    nativeInputProps: {
      checked: typeTerritoire === 'petr',
      onChange: () => handleRadioChange('petr')
    }
  },
  {
    label: 'PNR',
    nativeInputProps: {
      checked: typeTerritoire === 'pnr',
      onChange: () => handleRadioChange('pnr')
    }
  },
  {
    label: 'Département',
    nativeInputProps: {
      checked: typeTerritoire === 'departement',
      onChange: () => handleRadioChange('departement')
    }
  }
];
