'use client';

import { GetCollectivite } from '@/lib/queries/searchBar';
import { cx } from '@codegouvfr/react-dsfr/tools/cx';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type MySearchInputProps = {
  className?: string;
  setSearchCode: (a: string) => void;
  setSearchLibelle: (a: string) => void;
  searchCode: string;
  searchLibelle: string;
  id: string;
  placeholder: string;
  type: string;
  typeTerritoire: string | undefined;
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

const ReplaceStringEpci = (libelleEpci: string) => {
  return libelleEpci
    .replace("Communauté d'agglomération", 'CA')
    .replace('Communauté de communes', 'CC');
};

export const MySearchInput = (props: MySearchInputProps) => {
  const {
    className,
    id,
    type,
    typeTerritoire,
    setSearchCode,
    setSearchLibelle,
    searchCode,
    searchLibelle
  } = props;
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Options[]>([]);
  const re = new RegExp('T([1-9]|1[0-2])\\b');

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
    if (typeTerritoire === 'epci' && re.test(searchLibelle)) {
      router.push(
        `/thematiques?code=200054781&libelle=${searchLibelle}&type=ept`
      );
    } else if (searchCode.length !== 0 || searchLibelle.length !== 0) {
      searchCode.length !== 0
        ? router.push(
            `/thematiques?code=${searchCode}&libelle=${searchLibelle}&type=${typeTerritoire}`
          )
        : router.push(
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
      filterOptions={(x) => x}
      options={collectivites}
      noOptionsText="Aucune collectivité trouvée"
      onChange={(event, newValue: Options | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setSearchCode(newValue?.searchCode ?? '');
        setSearchLibelle(newValue?.searchLibelle ?? '');
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => {
        if (option && searchLibelle) {
          return option.searchCode?.length !== 0
            ? `${ReplaceStringEpci(option.searchLibelle)} (${option.searchCode})`
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
                <b>{ReplaceStringEpci(option.searchLibelle)}</b> (
                {option.searchCode})
              </p>
            ) : (
              <p style={{ margin: '0' }}>
                <b>{ReplaceStringEpci(option.searchLibelle)}</b>
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
            placeholder={'Saisir un territoire'}
            type={type}
            disabled={typeTerritoire ? false : true}
          />
        </div>
      )}
      sx={{ width: 'inherit' }}
    />
  );
};
