'use client';

import { cx } from '@codegouvfr/react-dsfr/tools/cx';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { GetCollectivite } from '@/lib/queries/searchBar';

type MySearchInputProps = {
  className?: string;
  searchCodeFromSearchBar: (a: string) => void;
  searchEpciCodeFromSearchBar: (a: string) => void;
  id: string;
  placeholder: string;
  type: string;
};

type Options = {
  codeCommune: string;
  codeEpci: string;
  searchCode: string;
  searchLibelle: string;
  ept: string;
  libellePetr: string;
  libellePnr: string;
  codePnr: string;
};

export const MySearchInput = (props: MySearchInputProps) => {
  const {
    className,
    id,
    type,
    searchCodeFromSearchBar,
    searchEpciCodeFromSearchBar
  } = props;
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Options[]>([]);
  const [epciCode, setEpciCode] = useState<string>('');
  const [searchCode, setSearchCode] = useState<string>('');

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
    ...filteredCollectivite.sort((a, b) =>
      a.searchLibelle.localeCompare(b.searchLibelle)
    )
  ];

  const handleClick = () => {
    if (epciCode) {
      searchCode?.length < 7
        ? router.push(`/thematiques?codgeo=${searchCode}&codepci=${epciCode}`)
        : router.push(`/thematiques?codepci=${epciCode}`);
    }
  };

  useEffect(() => {
    void (async () => {
      const getCollectivite = await GetCollectivite(inputValue);
      setOptions(
        getCollectivite.map((el) => ({
          searchLibelle: el.search_libelle,
          searchCode: el.search_code ?? '',
          codeCommune: el.code_commune ?? '',
          codeEpci: el.code_epci ?? ''
        }))
      );
    })();
    searchCodeFromSearchBar(searchCode);
    searchEpciCodeFromSearchBar(epciCode);
  }, [inputValue]);

  return (
    <Autocomplete
      id={id}
      autoHighlight
      filterOptions={(x) => x}
      options={collectivites}
      // value={collectivites}
      noOptionsText="Aucune collectivité trouvée"
      onChange={(event, newValue: Options | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setEpciCode(newValue?.codeEpci ?? '');
        setSearchCode(newValue?.searchCode ?? '');
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => {
        if (option) {
          return option.searchCode?.length !== 0
            ? `${option.searchLibelle} (${option.searchCode})`
            : `${option.searchLibelle}`;
        }
        return '';
      }}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          handleClick();
        }
      }}
      renderOption={(props, option) => {
        const { ...optionProps } = props;
        return (
          <Box
            component="li"
            sx={{ height: 'fit-content' }}
            {...optionProps}
            key={option.searchLibelle + option.searchCode}
          >
            {option.searchCode?.length !== 0 ? (
              <p style={{ margin: '0' }}>
                <b>{option.searchLibelle} </b> ({option.searchCode})
              </p>
            ) : (
              <p>
                <b>{option.searchLibelle}</b>
              </p>
            )}
          </Box>
        );
      }}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            {...(params.inputProps as React.InputHTMLAttributes<HTMLInputElement>)}
            className={cx(params.inputProps.className, className)}
            placeholder={'Rechercher une commune ou un EPCI'}
            type={type}
          />
        </div>
      )}
      sx={{ width: 'inherit' }}
    />
  );
};
