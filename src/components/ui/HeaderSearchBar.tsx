import LoupeIcon from '@/assets/icons/magnifying_glass_icon_white.svg';
import { couleursPrincipales } from "@/design-system/couleurs";
import { DarkClass } from "@/lib/utils/DarkClass";
import { eptRegex } from "@/lib/utils/regex";
import SearchBar from "@codegouvfr/react-dsfr/SearchBar";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useStyles } from "tss-react/dsfr";
import styles from '../components.module.scss';
import { handleChangementTerritoireRedirection, handleRechercheRedirection } from "../searchbar/fonctions";
import { SearchInputHeader } from "../searchbar/header/SearchInputHeader";
import { HtmlTooltip } from '../utils/Tooltips';

const ReplaceDisplayEpci = (libelleEpci: string) => {
  return libelleEpci
    .replace("Communauté d'agglomération", 'CA')
    .replace('Communauté de communes', 'CC');
};

const Localisation = (props: { libelle: string; code?: string }) => {
  const darkClass = DarkClass();
  const { libelle, code } = props;
  return (
    <div className={styles.localisation} style={darkClass}>
      <p>
        {eptRegex.test(libelle) ? libelle
          : code ? (
            <>
              {ReplaceDisplayEpci(libelle)} - {code}
            </>
          ) : libelle
        }
      </p>
    </div>
  );
};

const HeaderSearchBar = (props:
  {
    libelle: string;
    type: "epci" | "commune" | "departement" | "ept" | "petr" | "pnr";
    code?: string
  }) => {
  const { libelle, code, type } = props;
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const thematique = params.get('thematique') || undefined;
  const { css } = useStyles();
  const [isTypeChanging, setIsTypeChanging] = useState(false);
  const [isNewTypeChosen, setIsNewTypeChosen] = useState(false);
  const [isTerritoryChanging, setIsTerritoryChanging] = useState(false);
  const [focusAutocomplete, setFocusAutocomplete] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
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
  console.log("searchlibelle", searchLibelle);
  const [typeTerritoire, setTypeTerritoire] = useState<
    'epci' | 'commune' | 'petr' | 'pnr' | 'departement'
  >('epci');

  useEffect(() => {
    setSearchCode(code ?? '');
  }, [code]);

  useEffect(() => {
    setSearchLibelle(libelle ?? '');
  }, [libelle]);

  useEffect(() => {
    setValue(
      (type === "epci" || type === "ept") ? "EPCI/EPT"
        : type === "commune" ? "Commune"
          : type === "departement" ? "Département"
            : type === "petr" ? "PETR"
              : type === "pnr" ? "PNR"
                : undefined
    );
  }, [type]);

  const handleRechercher = () => handleRechercheRedirection({
    searchCode,
    searchLibelle,
    typeTerritoire,
    router,
    page: pathname.split('/')[1] || ''
  });

  useEffect(() => {
    if (isNewTypeChosen) {
      setFocusAutocomplete(true);
      setIsNewTypeChosen(false);
      setTimeout(() => setFocusAutocomplete(false), 200);
    }
  }, [isNewTypeChosen]);

  const collectivites = ["EPCI/EPT", "Commune", "Département", "PETR", "PNR"];
  const x = (value + " " + searchCode + " - " + ReplaceDisplayEpci(searchLibelle)).length;

  return (
    libelle && value ? (
      <div
        className={styles.headerSearchBarContainer}
        style={{
          width: (isTypeChanging || isTerritoryChanging) ? "640px" : 0.0467668 * x ** 2 + (3.75262 * x) + 215.036,
          maxWidth: "640px",
          backgroundColor: (isTerritoryChanging || isTypeChanging) ? 'var(--gris-light)' : 'white',
          transition: 'all 0.5s ease-in-out'
        }}
      >
        <Select
          labelId="Sélection du territoire"
          value={value}
          open={isSelectOpen}
          onOpen={() => {
            setIsTypeChanging(true);
            setTimeout(() => setIsSelectOpen(true), 500);
          }}
          onClose={() => {
            setIsSelectOpen(false);
            setIsTypeChanging(false);
            setIsTerritoryChanging(true);
          }}
          onChange={(event: SelectChangeEvent) => {
            setValue(event.target.value as "EPCI/EPT" | "Commune" | "Département" | "PETR" | "PNR");
            setTypeTerritoire(event.target.value === "EPCI/EPT" ? 'epci'
              : event.target.value === "Commune" ? 'commune'
                : event.target.value === "Département" ? 'departement'
                  : event.target.value === "PETR" ? 'petr'
                    : event.target.value === "PNR" ? 'pnr'
                      : 'epci');
            setIsNewTypeChosen(true);
          }}
          MenuProps={{
            sx: {
              '& .MuiPaper-root': {
                backgroundColor: '#FFFFFF',
                borderRadius: '1rem',
                '& .Mui-selected': {
                  fontWeight: 700,
                  backgroundColor: '#FFFFFF',
                },
              },
              '& .MuiList-root': {
                padding: '0.5rem',
              },
              '& .MuiButtonBase-root:not(:last-child)': {
                borderBottom: '1px solid var(--gris-medium)',
              },
              '& .MuiButtonBase-root': {
                fontSize: '14px',
                lineHeight: '19px',
                '&:hover': { fontWeight: '700 !important', backgroundColor: 'transparent !important' },
                '&:focus': { fontWeight: '700 !important', backgroundColor: 'transparent !important', outline: 'none' },
              },
            },
          }}
          sx={{
            '&': {
              backgroundColor: isTypeChanging ? 'white' : isTerritoryChanging ? 'var(--gris-light)' : 'white',
              borderRadius: '30px',
              height: "48px", // inherit 50px - bordure en haut et en bas
              fontWeight: 400,
            },
            '& .MuiSelect-select': {
              color: '#000000',
              fontSize: '14px',
              fontFamily: 'Marianne',
              fontWeight: 400,
              border: 'none',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        >
          {collectivites.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
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
                // width: Math.max((9.5 * (searchCode + " - " + searchLibelle).length), 300),
                width: ['-webkit-fill-available', '-moz-available'],
                '.fr-input': {
                  backgroundColor: isTypeChanging ? 'var(--gris-light)' : isTerritoryChanging ? 'white' : 'white',
                  boxShadow: 'none',
                  height: "48px",
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
                RechercherRedirection={handleRechercher}
                setIsTypeChanging={setIsTypeChanging}
                setIsTerritoryChanging={setIsTerritoryChanging}
                focusAutocomplete={focusAutocomplete}
                setFocusAutocomplete={setFocusAutocomplete}
              />
            )}
          />
          {
            (isTypeChanging || isTerritoryChanging) ? (
              searchLibelle === '' ? (
                <HtmlTooltip title="Sélectionnez un territoire">
                  <Image
                    alt=""
                    src={LoupeIcon}
                    height={34}
                    width={34}
                    style={{
                      backgroundColor: couleursPrincipales.vert,
                      borderRadius: '30px',
                      padding: '4px',
                    }}
                  />
                </HtmlTooltip>
              ) : (
                <Image
                  alt=""
                  src={LoupeIcon}
                  height={34}
                  width={34}
                  style={{
                    backgroundColor: couleursPrincipales.vert,
                    borderRadius: '30px',
                    padding: '4px',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
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
                  }}
                />
              )

            ) : null
          }
        </div>
      </div>
    ) : (
      null
    )
  );
};

export default HeaderSearchBar;
