'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import { Select } from '@codegouvfr/react-dsfr/Select';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import './globalMui.css';
import { MySearchInput } from './SearchInput';

export const SearchBarComp = () => {
  const router = useRouter();
  const [epciCode, setEpciCode] = useState<string>('');
  const [searchCode, setSearchCode] = useState<string>('');
  const [typeTerritoire, setTypeTerritoire] = useState<string>('');
  console.log('typeTerritoire', typeTerritoire);
  const getCodeFromSearchBar = (code: string) => {
    setSearchCode(code);
  };

  const getEpciCodeFromSearchBar = (code: string) => {
    setEpciCode(code);
  };

  const handleClick = () => {
    if (searchCode.length !== 0) {
      searchCode?.length < 7
        ? router.push(`/thematiques?codgeo=${searchCode}&codepci=${epciCode}`)
        : router.push(`/thematiques?codepci=${epciCode}`);
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 5 }}
    >
      <Select
        label=""
        style={{ width: 200 }}
        nativeSelectProps={{
          onChange: (e) => {
            setTypeTerritoire(e.target.value);
          }
        }}
      >
        <>
          <option disabled hidden selected value="">
            Type de territoire
          </option>
          <option value="commune">Communes</option>
          <option value="epci">EPCI/EPT</option>
          <option value="petr">PETR</option>
          <option value="pnr">PNR</option>
        </>
      </Select>
      <SearchBar
        style={{ width: 300 }}
        renderInput={({ className, id, placeholder, type }) => (
          <MySearchInput
            className={className}
            id={id}
            placeholder={placeholder}
            type={type}
            typeTerritoire={typeTerritoire}
            searchCodeFromSearchBar={getCodeFromSearchBar}
            searchEpciCodeFromSearchBar={getEpciCodeFromSearchBar}
          />
        )}
      />
      {searchCode.length === 0 ? (
        <Button disabled style={{ display: 'block' }}>
          Continuer
        </Button>
      ) : (
        <Button onClick={handleClick} style={{ display: 'block' }}>
          Continuer
        </Button>
      )}
    </div>
  );
};
