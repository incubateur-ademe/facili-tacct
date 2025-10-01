'use client';

import { GetCollectivite } from '@/lib/queries/searchBar';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { RenderOption } from '../renderOption';
import { RenderInputHeader } from './renderInputHeader';

const ReplaceDisplayEpci = (libelleEpci: string) => {
  return libelleEpci
    .replace("Communauté d'agglomération", 'CA')
    .replace('Communauté de communes', 'CC');
};

const ReplaceSearchEpci = (libelleEpci: string) => {
  return libelleEpci
    .replace("CA ", "Communauté d'agglomération ")
    .replace("CC ", "Communauté de communes ")
};

export const SearchInputHeader = ((props: SearchInputHeaderProps) => {
  const {
    className,
    id,
    typeTerritoire,
    setSearchCode,
    setSearchLibelle,
    searchCode,
    searchLibelle,
    RechercherRedirection,
    setIsTypeChanging,
    setIsTerritoryChanging,
    focusAutocomplete,
    setFocusAutocomplete
  } = props;
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<SearchInputOptions[]>([]);
  const [value, setValue] = useState<SearchInputOptions | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  console.log("value", value);

  useEffect(() => {
    if (searchLibelle) {
      const val = { searchLibelle, searchCode: searchCode || '', codeCommune: '', codeEpci: '', ept: '', libellePetr: '', libellePnr: '', codePnr: '' };
      setValue(val);
      setInputValue('');
    }
  }, [searchLibelle, searchCode]);
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
    ...filteredCollectivite.sort((a, b) =>
      a.searchLibelle.localeCompare(b.searchLibelle)
    )
  ];

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

  useEffect(() => {
    if (focusAutocomplete) {
      setValue(null);
      setInputValue('');
      setSearchCode('');
      setSearchLibelle('');
      setOptions([]);
      setTimeout(() => {
        const input = document.getElementById(id);
        if (input) (input as HTMLInputElement).focus();
      }, 100);
    }
  }, [focusAutocomplete, id]);

  return (
    <Autocomplete
      id={id}
      autoHighlight
      filterOptions={(x) => x}
      options={collectivites}
      value={value}
      noOptionsText=""
      open={isOpen}
      onOpen={() => {
        setIsTerritoryChanging(true);
        setIsTypeChanging(false);
        setTimeout(() => setIsOpen(true), 500);
      }}
      onClose={() => setIsOpen(false)}
      onChange={(event, newValue: SearchInputOptions | null) => {
        if (newValue === null) {
          setIsTerritoryChanging(true);
          // setFocusAutocomplete(true);
          // setIsOpen(true);
          // setTimeout(() => setFocusAutocomplete(false), 200);
        }
        setValue(newValue);
        setOptions(newValue ? [newValue, ...options] : options);
        setSearchCode(newValue?.searchCode ?? '');
        setSearchLibelle(newValue?.searchLibelle ?? '');
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(ReplaceSearchEpci(newInputValue));
      }}
      getOptionLabel={(option) => {
        if (!option) return '';
        return option.searchCode?.length !== 0
          ? (() => {
            const text = `${ReplaceDisplayEpci(option.searchLibelle)} - ${option.searchCode}`;
            return text.length > 60 ? text.slice(0, 50) + '\n' + text.slice(50) : text;
          })()
          : `${option.searchLibelle}`;
      }}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          RechercherRedirection();
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
        <RenderInputHeader
          className={className}
          setInputValue={setInputValue}
          setSearchCode={setSearchCode}
          setSearchLibelle={setSearchLibelle}
          params={params}
          typeTerritoire={typeTerritoire}
        />
      }
      fullWidth
      clearOnEscape
      openOnFocus
      selectOnFocus
      slotProps={{
        popper: {
          sx: {
            '& .MuiPaper-root': {
              borderRadius: '1rem',
              transform: 'translateY(14px)',
              padding: '0.5rem 0.2rem 0.5rem 0.5rem',
              width: "448px !important"
            },
            '& .MuiAutocomplete-listbox': {
              backgroundColor: 'white',
              scrollbarWidth: 'thin',
              padding: '0'
            },
          },
        },
      }}
      sx={{ width: 'inherit', height: '48px', alignContent: 'center', transition: 'all 0.5s ease-in-out' }}
    />
  );
});
