import LoupeIcon from '@/assets/icons/magnifying_glass_icon_white.svg';
import { couleursPrincipales } from "@/design-system/couleurs";
import { DarkClass } from "@/lib/utils/DarkClass";
import { eptRegex } from "@/lib/utils/regex";
import SearchBar from "@codegouvfr/react-dsfr/SearchBar";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useStyles } from "tss-react/dsfr";
import styles from '../components.module.scss';
import { handleRechercheRedirection } from "../searchbar/fonctions";
import { SearchInputHeader } from "../searchbar/header/SearchInputHeader";

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
  const { css } = useStyles();
  const [isTypeChanging, setIsTypeChanging] = useState(false);
  const [isNewTypeChosen, setIsNewTypeChosen] = useState(false);
  console.log("isTypeChanging", isTypeChanging);
  const [isTerritoryChanging, setIsTerritoryChanging] = useState(false);
  console.log("isTerritoryChanging", isTerritoryChanging);
  const [focusAutocomplete, setFocusAutocomplete] = useState(false);
  const [value, setValue] = useState(
    (type === "epci" || type === "ept") ? "EPCI/EPT"
      : type === "commune" ? "Commune"
        : type === "departement" ? "Département"
          : type === "petr" ? "PETR"
            : type === "pnr" ? "PNR"
              : undefined
  );

  const [searchCode, setSearchCode] = useState<string>('');
  const [searchLibelle, setSearchLibelle] = useState<string>('');
  const [typeTerritoire, setTypeTerritoire] = useState<
    'epci' | 'commune' | 'petr' | 'pnr' | 'departement'
  >('epci');

  const handleRechercher = () => handleRechercheRedirection({
    searchCode,
    searchLibelle,
    typeTerritoire,
    router,
    page: "thematiques"
  });

  useEffect(() => {
    if (isNewTypeChosen) {
      setFocusAutocomplete(true);
      setIsNewTypeChosen(false);
    }
  }, [isNewTypeChosen]);

  const collectivites = ["EPCI/EPT", "Commune", "Département", "PETR", "PNR"];

  return (
    code && libelle && value ? (
      <div 
        className={styles.headerSearchBarContainer} 
        style={{ 
          width: "640px",
          backgroundColor: (isTerritoryChanging || isTypeChanging) ? 'var(--gris-light)' : 'white',
         }}
      >
        <Select
          labelId="Sélection du territoire"
          value={value}
          onOpen={() => setIsTypeChanging(true)}
          onClose={() => {
            setIsTypeChanging(false)
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
                '&:hover': { fontWeight: '700 !important', backgroundColor: 'transparent !important' }
              },
            },
          }}
          sx={{
            '&': {
              backgroundColor: (isTypeChanging || !isNewTypeChosen) ? 'white' : 'var(--gris-light)',
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
        <div className={styles.searchTerritoireContainer} >
          <SearchBar
            className={type.length ?
              css({
                '.fr-btn': {
                  display: 'none',
                },
                borderRadius: "30px",
                height: '48px',
                alignItems: 'center',
                backgroundColor: isTerritoryChanging ? 'white' : 'var(--gris-light)',
                width: ['-webkit-fill-available', '-moz-available'],
                '.fr-input': {
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  height: "48px",
                  '&:focus': {
                    outline: 'none'
                  },
                  '&::placeholder': {
                    color: '#7B7B7B'
                  }
                },
                '.css-1uhhrmm-MuiAutocomplete-endAdornment': {
                  right: '8px',
                },
                '.css-iuka1o': { // pour la preprod
                  right: '8px',
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
                },
                '.css-1uhhrmm-MuiAutocomplete-endAdornment': {
                  right: '2px',
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
              />
            )}
          />
          {
            (isTypeChanging || isTerritoryChanging) ?
            <Image
              alt=""
              src={LoupeIcon}
              height={34}
              width={34}
              style={{ backgroundColor: couleursPrincipales.vert, borderRadius: '30px', padding: '4px' }}
            /> : null
          }
        </div>
        {/* <Localisation libelle={libelle} code={code} /> */}
      </div>
    ) : libelle ? (
      <div className='flex flex-row gap-3 align-center'>
        <Localisation libelle={libelle} />
      </div>
    ) : (
      null
    )
  );
};

export default HeaderSearchBar;
