'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useStyles } from 'tss-react/dsfr';

import { MySearchInput } from './SearchInput';

export const SearchBarComp = () => {
  const router = useRouter();
  const [epciCode, setEpciCode] = useState<string>('');
  const [searchCode, setSearchCode] = useState<string>('');

  const getCodeFromSearchBar = (code: string) => {
    setSearchCode(code);
  };

  const getEpciCodeFromSearchBar = (code: string) => {
    setEpciCode(code);
  };

  const handleClick = () => {
    if (searchCode.length !== 0) {
      searchCode?.length < 7
        ? router.push(
            `/iframe/thematiques?codgeo=${searchCode}&codepci=${epciCode}`
          )
        : router.push(`/iframe/thematiques?codepci=${epciCode}`);
    }
  };

  const { css } = useStyles();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <SearchBar
        className={css({
          width: 'inherit',
          '.fr-btn': {
            display: 'none'
          }
        })}
        renderInput={({ className, id, placeholder, type }) => (
          <MySearchInput
            className={className}
            id={id}
            placeholder={placeholder}
            type={type}
            searchCodeFromSearchBar={getCodeFromSearchBar}
            searchEpciCodeFromSearchBar={getEpciCodeFromSearchBar}
          />
        )}
      />
      {searchCode.length === 0 ? (
        <Button disabled>Continuer</Button>
      ) : (
        <Button onClick={handleClick}>Continuer</Button>
      )}
    </div>
  );
};