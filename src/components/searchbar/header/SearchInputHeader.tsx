'use client';

import { GetCollectivite } from '@/lib/queries/searchBar';
import Autocomplete from '@mui/material/Autocomplete';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { handleChangementTerritoireRedirection, ReplaceDisplayEpci, ReplaceSearchEpci } from '../fonctions';
import { RenderOption } from '../renderOption';
import { RenderInputHeader } from './renderInputHeader';

export const SearchInputHeader = ((props: SearchInputHeaderProps) => {
  const {
    className,
    id,
    typeTerritoire,
    setSearchCode,
    setSearchLibelle,
    searchCode,
    searchLibelle,
    setIsTypeChanging,
    setIsTerritoryChanging,
    setIsNewTypeChosen,
    focusAutocomplete,
  } = props;
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const thematique = params.get('thematique') || undefined;
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<SearchInputOptions[]>([]);
  const [value, setValue] = useState<SearchInputOptions | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
      loading={ options.length === 0 }
      loadingText="Chargement..."
      open={isOpen}
      onOpen={() => {
        setValue(null);
        setIsTerritoryChanging(true);
        setIsTypeChanging(false);
        const input = document.getElementById(id);
        if (input) (input as HTMLInputElement).focus();
        setTimeout(() => setIsOpen(true), 500);
      }}
      onClose={() => setIsOpen(false)}
      onChange={(event, newValue: SearchInputOptions | null) => {
        if (newValue === null) {
          setIsTerritoryChanging(true);
        }
        setValue(newValue);
        setOptions(newValue ? [newValue, ...options] : options);
        setSearchCode(newValue?.searchCode ?? '');
        setSearchLibelle(newValue?.searchLibelle ?? '');
        if (newValue !== null) {
          const input = document.getElementById(id);
          if (input) (input as HTMLInputElement).blur();
        }
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(ReplaceSearchEpci(newInputValue));
      }}
      getOptionLabel={(option) => {
        if (!option) return '';
        return option.searchCode?.length !== 0
          ? `${ReplaceDisplayEpci(option.searchLibelle)} - ${option.searchCode}`
          : `${option.searchLibelle}`;
      }}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          if (searchLibelle === '') return;
          setIsNewTypeChosen(false);
          setIsTerritoryChanging(false);
          setIsTypeChanging(false);
          handleChangementTerritoireRedirection({
            searchCode,
            searchLibelle,
            typeTerritoire,
            router,
            page: pathname.split('/')[1] || '',
            thematique
          })
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
              width: "448px !important",
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
      sx={{
        width: 'inherit',
        height: '48px',
        alignContent: 'center',
        transition: 'all 0.5s ease-in-out',
        '& .MuiAutocomplete-clearIndicator': {
          display: 'none',
          overflow: 'hidden'
        },
      }}
    />
  );
});
