import { getTextWidth } from '@/hooks/TextWidth';
import SearchBar from "@codegouvfr/react-dsfr/SearchBar";
import { useEffect, useState } from "react";
import { useStyles } from "tss-react/dsfr";
import styles from '../../components.module.scss';
import { ReplaceDisplayEpci } from '../fonctions';
import { BoutonRechercherHeader } from './BoutonRechercher';
import { SearchInputHeader } from './SearchInputHeader';
import { SelectTypeTerritoire } from './SelectTypeTerritoire';

const HeaderRechercheTerrtoire = (props:
  {
    libelle: string;
    type: "epci" | "commune" | "departement" | "ept" | "petr" | "pnr";
    code?: string
  }) => {
  const { libelle, code, type } = props;
  const { css } = useStyles();
  const [isTypeChanging, setIsTypeChanging] = useState(false);
  const [isNewTypeChosen, setIsNewTypeChosen] = useState(false);
  const [isTerritoryChanging, setIsTerritoryChanging] = useState(false);
  const [focusAutocomplete, setFocusAutocomplete] = useState(false);
  const [value, setValue] = useState(
    (type === "epci" || type === "ept") ? "EPCI/EPT"
      : type === "commune" ? "Commune"
        : type === "departement" ? "Département"
          : type === "petr" ? "PETR"
            : type === "pnr" ? "PNR"
              : undefined
  );
  const [searchCode, setSearchCode] = useState<string>(code ?? '');
  const [searchLibelle, setSearchLibelle] = useState<string>(libelle ?? '');
  const [typeTerritoire, setTypeTerritoire] = useState<
    'epci' | 'commune' | 'petr' | 'pnr' | 'departement'
  >(type === 'ept' ? 'epci' : type);
  const territoireTexte = value + " " + ReplaceDisplayEpci(searchLibelle) + " - " + searchCode;
  const textWidth = getTextWidth(territoireTexte);

  useEffect(() => {
    setSearchCode(code ?? '');
    setSearchLibelle(libelle ?? '');
    setValue(
      (type === "epci" || type === "ept") ? "EPCI/EPT"
        : type === "commune" ? "Commune"
          : type === "departement" ? "Département"
            : type === "petr" ? "PETR"
              : type === "pnr" ? "PNR"
                : undefined
    );
    setTypeTerritoire(type === 'ept' ? 'epci' : type);
  }, [code, libelle, type]);

  useEffect(() => {
    if (isNewTypeChosen) {
      setFocusAutocomplete(true);
      setIsNewTypeChosen(false);
      setTimeout(() => setFocusAutocomplete(false), 200);
    }
  }, [isNewTypeChosen]);

  return (
    libelle && value ? (
      <div
        className={styles.headerSearchBarContainer}
        style={{
          width: (isTypeChanging || isTerritoryChanging) ? "640px" : Math.min(textWidth + 120, 639),
          backgroundColor: (isTerritoryChanging || isTypeChanging) ? 'var(--gris-light)' : 'white',
        }}
      >
        <SelectTypeTerritoire
          value={value}
          isTypeChanging={isTypeChanging}
          isTerritoryChanging={isTerritoryChanging}
          setIsTypeChanging={setIsTypeChanging}
          setTypeTerritoire={setTypeTerritoire}
          setIsTerritoryChanging={setIsTerritoryChanging}
          setValue={setValue}
          setIsNewTypeChosen={setIsNewTypeChosen}
        />
        <div className={styles.separator} />
        <div
          className={styles.searchTerritoireContainer}
          style={{
            margin: isTerritoryChanging || isTypeChanging ? "0 8px 0 0" : "0"
          }}
        >
          <SearchBar
            className={
              css({
                '.fr-btn': {
                  display: 'none',
                },
                borderRadius: "30px",
                height: '48px',
                alignItems: 'center',
                backgroundColor: isTypeChanging ? 'var(--gris-light)' : isTerritoryChanging ? 'white' : 'white',
                boxShadow: isTypeChanging ? 'none' : isTerritoryChanging ? 'rgba(0, 0, 0, 0.1) 0px 3px 12px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px' : 'none',
                width: ['-webkit-fill-available', '-moz-available'],
                cursor: "pointer",
                transition: 'all 0.5s ease-in-out',
                '.fr-input': {
                  backgroundColor: isTypeChanging ? 'var(--gris-light)' : isTerritoryChanging ? 'white' : 'white',
                  boxShadow: isTypeChanging ? 'none' : isTerritoryChanging ? 'rgba(0, 0, 0, 0.1) 0px 3px 12px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px' : 'none',
                  height: "48px",
                  transition: 'all 0.5s ease-in-out',
                  '&:focus': {
                    outline: 'none',
                  },
                  '&::placeholder': {
                    color: 'var(--gris-medium-dark)',
                  }
                },
                '.css-1uhhrmm-MuiAutocomplete-endAdornment': {
                  right: '8px',
                },
                '.css-iuka1o': { // pour la preprod
                  right: '8px',
                }
              })
            }
            renderInput={({ className, id, placeholder, type }) => (
              <SearchInputHeader
                className={className}
                id={id}
                placeholder={placeholder}
                type={type}
                typeTerritoire={typeTerritoire}
                setSearchCode={setSearchCode}
                setSearchLibelle={setSearchLibelle}
                searchCode={searchCode}
                searchLibelle={searchLibelle}
                setIsTypeChanging={setIsTypeChanging}
                setIsTerritoryChanging={setIsTerritoryChanging}
                setIsNewTypeChosen={setIsNewTypeChosen}
                focusAutocomplete={focusAutocomplete}
              />
            )}
          />
          {
            (isTypeChanging || isTerritoryChanging) ? (
              <BoutonRechercherHeader
                searchLibelle={searchLibelle}
                setIsNewTypeChosen={setIsNewTypeChosen}
                setIsTerritoryChanging={setIsTerritoryChanging}
                setIsTypeChanging={setIsTypeChanging}
                searchCode={searchCode}
                typeTerritoire={typeTerritoire}
              />
            ) : null
          }
        </div>
      </div>
    ) : (
      null
    )
  );
};

export default HeaderRechercheTerrtoire;
