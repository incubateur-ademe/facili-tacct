'use client';

import { GetCollectivite } from '@/lib/queries/searchBar';
import { eptRegex } from '@/lib/utils/regex';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ReplaceDisplayEpci, ReplaceSearchEpci } from './fonctions';
import { RenderInput } from './renderInput';
import { RenderOption } from './renderOption';

export const RechercheInput = ((props: SearchInputProps) => {
  const {
    className,
    id,
    typeTerritoire,
    setSearchCode,
    setSearchLibelle,
    searchCode,
    searchLibelle
  } = props;
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<SearchInputOptions[]>([]);

  // supprime les doublons pour les objects
  const filteredCollectivite = options.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.searchLibelle === value.searchLibelle &&
          t.searchCode === value.searchCode
      )
  );
  const collectivites = [
    ...filteredCollectivite.toSorted((a, b) =>
      a.searchLibelle.localeCompare(b.searchLibelle)
    )
  ];
  const handleClick = () => {
    if (typeTerritoire === 'epci' && eptRegex.test(searchLibelle)) {
      router.push(
        `/thematiques?code=200054781&libelle=${searchLibelle}&type=ept`
      );
    } else if (searchCode.length !== 0) {
      router.push(
        `/thematiques?code=${searchCode}&libelle=${searchLibelle}&type=${typeTerritoire}`
      )
    } else if (searchLibelle.length !== 0) {
      router.push(
        `/thematiques?libelle=${searchLibelle}&type=${typeTerritoire}`
      );
    }
  };

  useEffect(() => {
    void (async () => {
      const getCollectivite = await GetCollectivite(typeTerritoire, inputValue);
      setOptions(
        getCollectivite.map((el) => ({
          searchLibelle: el.search_libelle,
          searchCode: el.search_code ?? '',
          codeCommune: el.code_geographique ?? '',
          codeEpci: el.epci ?? '',
          ept: el.ept ?? '',
          libellePetr: el.libelle_petr ?? '',
          libellePnr: el.libelle_pnr ?? '',
          codePnr: el.code_pnr ?? ''
        }))
      );
    })();
    setSearchCode(searchCode);
  }, [inputValue, typeTerritoire]);

  return (
    <Autocomplete
      id={id}
      autoHighlight
      fullWidth
      filterOptions={(x) => x}
      options={collectivites}
      loadingText="Chargement..."
      noOptionsText="Aucun territoire trouvé"
      onChange={(event, newValue: SearchInputOptions | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setSearchCode(newValue?.searchCode ?? '');
        setSearchLibelle(newValue?.searchLibelle ?? '');
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(ReplaceSearchEpci(newInputValue));
      }}
      getOptionLabel={(option) => {
        if (option && searchLibelle) {
          return option.searchCode?.length !== 0
            ? `${ReplaceDisplayEpci(option.searchLibelle)} (${option.searchCode})`
            : `${option.searchLibelle}`;
        }
        return '';
      }}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          handleClick();
        }
      }}
      renderOption={(props, option) =>
        <RenderOption
          props={props}
          option={option}
          key={option.searchLibelle + option.searchCode}
        />
      }
      renderInput={(params) =>
        <RenderInput
          className={className}
          setInputValue={setInputValue}
          setSearchCode={setSearchCode}
          setSearchLibelle={setSearchLibelle}
          params={params}
          typeTerritoire={typeTerritoire}
        />
      }
      sx={{
        width: 'inherit',
        alignContent: 'center',
      }}
      slotProps={{
        popper: {
          sx: {
            '& .MuiPaper-root': {
              borderRadius: '1rem !important',
              transform: 'translateY(14px)',
              padding: '0.5rem 0.2rem 0.5rem 0.5rem',
              boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);'
            },
            '& .MuiAutocomplete-listbox': {
              backgroundColor: 'white',
              scrollbarWidth: 'thin',
              padding: '0'
            },
          },
        },
      }}

    />
  );
});
