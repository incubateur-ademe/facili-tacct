'use client';

import { BoutonPrimaire } from '@/design-system/base/Boutons';
import { couleursPrincipales, nuancesGris } from '@/design-system/couleurs';
import useWindowDimensions from '@/hooks/windowDimensions';
import { eptRegex } from '@/lib/utils/regex';
import { FocusOnElement } from '@/lib/utils/reusableFunctions/focus';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import { activeRadioOptions, disabledRadioOptions } from './radioButtons';
import styles from "./rechercherTerritoire.module.scss";
import { MySearchInput } from './SearchInput';

export const BarreDeRecherche = () => {
  const router = useRouter();
  const { css } = useStyles();
  const window = useWindowDimensions();
  const [width, setWidth] = useState<number | undefined>(1000);
  const [searchCode, setSearchCode] = useState<string>('');
  const [searchLibelle, setSearchLibelle] = useState<string>('');
  const [typeTerritoire, setTypeTerritoire] = useState<
    'epci' | 'commune' | 'petr' | 'pnr' | 'departement'
  >('epci');
  const [searchInputId, setSearchInputId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const inputId = Array
        .from(document.querySelectorAll('[id]'))
        .map(el => el.id)
        .find(id => id.startsWith("search-fr-search-bar-"));
      setSearchInputId(inputId);
    }
  }, []);

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
        `/sandbox/celine/patch4c?code=200054781&libelle=${searchLibelle}&type=ept`
      );
    } else {
      router.push(
        `/sandbox/celine/patch4c?code=${searchCode}&libelle=${searchLibelle}&type=${typeTerritoire}`
      )
    }
  };

  return (
    <div className={styles.searchCompWrapper}>
      <div className='flex flex-row gap-3 justify-center items-center'>
        <RadioButtons
          name="radio"
          options={activeRadioOptions(typeTerritoire, handleRadioChange)}
          orientation={width && width > 520 ? "horizontal" : "vertical"}
          className={css({
            '.fr-fieldset__content': {
              justifyContent: 'center',
              '.fr-label': {
                paddingBottom: 0,
                fontSize: "1rem",
                position: 'relative',
                backgroundImage: "radial-gradient(transparent 10px, var(--gris-dark) 11px, transparent 12px)",
                color: nuancesGris.dark
              },
              'input[type=radio]:checked + .fr-label': {
                backgroundImage: "radial-gradient(transparent 10px, var(--principales-vert) 11px, transparent 12px), radial-gradient(var(--principales-vert) 5px, transparent 6px);"
              },
              '@media (max-width: 745px)': {
                justifyContent: 'flex-start'
              }
            }
          })}
        />
        <RadioButtons
          name="radio"
          disabled
          options={disabledRadioOptions(typeTerritoire)}
          orientation={width && width > 520 ? "horizontal" : "vertical"}
          className={css({
            '.fr-fieldset__content': {
              justifyContent: 'center',
              '.fr-label': {
                paddingBottom: 0,
                fontSize: "1rem",
                position: 'relative',
                backgroundImage: "radial-gradient(transparent 10px, #D3D0D0 11px, transparent 12px)",
                color: "#D3D0D0"
              },
              '@media (max-width: 745px)': {
                justifyContent: 'flex-start'
              }
            }
          })}
        />
      </div>
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
              border: `1px solid ${couleursPrincipales.vert}`,
              borderRadius: "60px",
              height: 'inherit',
              '.fr-input': {
                color: couleursPrincipales.vert,
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
                color: couleursPrincipales.vert,
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
          style={{ minWidth: width && width > 520 ? 300 : 0, width: '100%', alignItems: 'center' }}
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
        <BoutonPrimaire
          text="Rechercher"
          size="lg"
          disabled={searchLibelle.length === 0 ? true : false}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
