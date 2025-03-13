'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import { Select } from '@codegouvfr/react-dsfr/Select';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import { MySearchInput } from './SearchInput';
import './globalMui.css';

export const SearchBarComp = () => {
  const router = useRouter();
  const { css } = useStyles();
  const [epciCode, setEpciCode] = useState<string>('');
  const [searchCode, setSearchCode] = useState<string>('');
  const [searchLibelle, setSearchLibelle] = useState<string>('');
  const [typeTerritoire, setTypeTerritoire] = useState<string>('');

  const getCodeFromSearchBar = (code: string) => {
    setSearchCode(code);
  };
  const getLibelleFromSearchBar = (libelle: string) => {
    setSearchLibelle(libelle);
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
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 8,
        height: 42
      }}
    >
      <Select
        label=""
        className={css({
          '.fr-select': {
            boxShadow: 'none',
            border: '1px solid #0063CB',
            borderRadius: '4px 0 0 4px',
            backgroundColor: 'white',
            color: '#0063CB',
            '&:focus': {
              outline: 'none'
            }
          }
        })}
        style={{ width: 370 }}
        nativeSelectProps={{
          onChange: (e) => {
            setTypeTerritoire(e.target.value);
          }
        }}
      >
        <>
          <option
            disabled
            hidden
            value=""
            selected
            style={{ color: '#161616' }}
          >
            Type de territoire
          </option>
          <option value="commune" style={{ color: '#161616' }}>
            Communes
          </option>
          <option value="epci" style={{ color: '#161616' }}>
            EPCI/EPT
          </option>
          <option value="petr" style={{ color: '#161616' }}>
            PETR
          </option>
          <option value="pnr" style={{ color: '#161616' }}>
            PNR
          </option>
        </>
      </Select>
      <SearchBar
        className={
          typeTerritoire.length
            ? css({
                border: '1px solid #0063CB',
                height: 'inherit',
                '.fr-input': {
                  color: '#0063CB',
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  borderRadius: '0',
                  '&:focus': {
                    outline: 'none'
                  },
                  '&::placeholder': {
                    color: '#7B7B7B'
                  }
                }
              })
            : css({
                border: '1px solid #EEEEEE',
                height: 'inherit',
                '.fr-input': {
                  color: '#0063CB',
                  backgroundColor: '#EEEEEE',
                  boxShadow: 'none',
                  borderRadius: '0',
                  '&:focus': {
                    outline: 'none'
                  },
                  '&::placeholder': {
                    color: '#7B7B7B'
                  }
                }
              })
        }
        style={{ minWidth: 300, width: '100%' }}
        renderInput={({ className, id, placeholder, type }) => (
          <MySearchInput
            className={className}
            id={id}
            placeholder={placeholder}
            type={type}
            typeTerritoire={typeTerritoire}
            searchCodeFromSearchBar={getCodeFromSearchBar}
            searchLibelleFromSearchBar={getLibelleFromSearchBar}
            searchEpciCodeFromSearchBar={getEpciCodeFromSearchBar}
          />
        )}
      />
      {searchLibelle.length === 0 ? (
        <Button
          disabled
          style={{
            display: 'block',
            borderRadius: '0 4px 4px 0'
          }}
        >
          Continuer
        </Button>
      ) : (
        <Button
          onClick={handleClick}
          style={{
            display: 'block',
            backgroundColor: '#0063CB',
            color: 'white',
            borderRadius: '0 4px 4px 0'
          }}
        >
          Continuer
        </Button>
      )}
    </div>
  );
};
