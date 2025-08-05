export const activeRadioOptions = (
  typeTerritoire: string,
  handleRadioChange: (value: 'epci' | 'commune') => void
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
  }
];

export const disabledRadioOptions = (typeTerritoire: string) => [
  {
    label: 'PETR',
    nativeInputProps: {
      checked: typeTerritoire === 'petr'
    }
  },
  {
    label: 'PNR',
    nativeInputProps: {
      checked: typeTerritoire === 'pnr'
    }
  },
  {
    label: 'Département',
    nativeInputProps: {
      checked: typeTerritoire === 'departement'
    }
  }
];
