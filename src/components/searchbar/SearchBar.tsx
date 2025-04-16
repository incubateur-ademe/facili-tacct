'use client';

import useWindowDimensions from '@/hooks/windowDimensions';
import { eptRegex } from '@/lib/utils/regex';
import { FocusOnElement } from '@/lib/utils/reusableFunctions/focus';
import Button from '@codegouvfr/react-dsfr/Button';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import styles from "../components.module.scss";
import '../globalMui.css';
import { MySearchInput } from './SearchInput';
import { radioOptions } from './radioButtons';

export const SearchBarComp = () => {
  const router = useRouter();
  const { css } = useStyles();
  const window = useWindowDimensions();
  const [width, setWidth] = useState<number | undefined>(1000);
  const [searchCode, setSearchCode] = useState<string>('');
  const [searchLibelle, setSearchLibelle] = useState<string>('');
  const [typeTerritoire, setTypeTerritoire] = useState<
    'epci' | 'commune' | 'petr' | 'pnr' | 'departement'
  >('epci');

  const searchInputId = Array
    .from(document.querySelectorAll('[id]'))
    .map(el => el.id)
    .find(id => id.startsWith("search-fr-search-bar-"));

  // Met le focus sur le champ de recherche lorsque le composant est monté
  // et lorsque le typeTerritoire change
  useEffect(() => {
    if (searchInputId) {
      FocusOnElement(searchInputId);
    }
  }, [typeTerritoire, searchInputId]);

  useEffect(() => {
    setWidth(window.width);
  }, [window.width]);

  const handleRadioChange = (territoire: 'epci' | 'commune' | 'petr' | 'pnr' | 'departement') => {
    setTypeTerritoire(territoire);
    setSearchLibelle('');
  };

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

  return (
    <div className={styles.searchCompWrapper}>
      <RadioButtons
        name="radio"
        options={radioOptions(typeTerritoire, handleRadioChange)}
        orientation={width && width > 520 ? "horizontal" : "vertical"}
        className={css({
          '.fr-fieldset__content': {
            justifyContent: 'center',
            '.fr-label': {
              paddingBottom: 0
            },
            '@media (max-width: 745px)': {
              justifyContent: 'flex-start'
            }
          }
        })}
      />
      <div
        className={styles.searchbarWrapper}
        style={{ flexDirection: width && width < 520 ? 'column' : 'row' }}
      >
        <SearchBar
          className={typeTerritoire.length ?
            css({
              '.fr-btn': {
                display: 'none',
              },
              border: '1px solid #0063CB',
              borderRadius: "4px 0 0 4px",
              height: 'inherit',
              '.fr-input': {
                color: '#0063CB',
                backgroundColor: 'white',
                boxShadow: 'none',
                '&:focus': {
                  outline: 'none'
                },
                '&::placeholder': {
                  color: '#7B7B7B'
                }
              }
            })
            : css({
              '.fr-btn': {
                display: 'none',
              },
              border: '1px solid #EEEEEE',
              height: 'inherit',
              '.fr-input': {
                color: '#0063CB',
                backgroundColor: '#EEEEEE',
                boxShadow: 'none',
                '&:focus': {
                  outline: 'none'
                },
                '&::placeholder': {
                  color: '#7B7B7B'
                }
              }
            })
          }
          style={{ minWidth: width && width > 520 ? 300 : 0, width: '100%' }}
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
            className={styles.inactiveSearchbarButton}
          >
            Continuer
          </Button>
        ) : (
          <Button
            onClick={handleClick}
            className={styles.activeSearchbarButton}
          >
            Continuer
          </Button>
        )}
      </div>
    </div>
  );
};
