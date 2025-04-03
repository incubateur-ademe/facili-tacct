'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import './globalMui.css';
import { MySearchInput } from './SearchInput';

export const SearchBarComp = () => {
  const router = useRouter();
  const { css } = useStyles();
  const [searchCode, setSearchCode] = useState<string>('');
  const [searchLibelle, setSearchLibelle] = useState<string>('');
  const [typeTerritoire, setTypeTerritoire] = useState<
    'epci' | 'commune' | 'petr' | 'pnr' | 'departement'
  >('epci');
  const re = new RegExp('T([1-9]|1[0-2])\\b');

  const handleClick = () => {
    if (searchCode.length !== 0 || searchLibelle.length !== 0) {
      searchCode.length !== 0
        ? router.push(
            `/thematiques?code=${searchCode}&libelle=${searchLibelle}&type=${typeTerritoire}`
          )
        : router.push(
            `/thematiques?libelle=${searchLibelle}&type=${typeTerritoire}`
          );
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}
    >
      <RadioButtons
        name="radio"
        options={[
          {
            label: 'EPCI/EPT',
            nativeInputProps: {
              checked: typeTerritoire === 'epci',
              onChange: () => {
                setTypeTerritoire('epci');
                setSearchLibelle('');
              }
            }
          },
          {
            label: 'Communes',
            nativeInputProps: {
              checked: typeTerritoire === 'commune',
              onChange: () => {
                setTypeTerritoire('commune');
                setSearchLibelle('');
              }
            }
          },
          {
            label: 'PETR',
            nativeInputProps: {
              checked: typeTerritoire === 'petr',
              onChange: () => {
                setTypeTerritoire('petr');
                setSearchLibelle('');
              }
            }
          },
          {
            label: 'PNR',
            nativeInputProps: {
              checked: typeTerritoire === 'pnr',
              onChange: () => {
                setTypeTerritoire('pnr');
                setSearchLibelle('');
              }
            }
          },
          {
            label: 'Département',
            nativeInputProps: {
              checked: typeTerritoire === 'departement',
              onChange: () => {
                setTypeTerritoire('departement');
                setSearchLibelle('');
              }
            }
          }
        ]}
        orientation="horizontal"
        className={css({
          '.fr-fieldset__content': {
            justifyContent: 'center'
          }
        })}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          gap: 8,
          height: 42
        }}
      >
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
              setSearchCode={setSearchCode}
              setSearchLibelle={setSearchLibelle}
              searchCode={searchCode}
              searchLibelle={searchLibelle}
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
    </div>
  );
};
