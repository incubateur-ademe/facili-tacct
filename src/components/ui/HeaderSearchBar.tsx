import { couleursPrincipales } from "@/design-system/couleurs";
import { DarkClass } from "@/lib/utils/DarkClass";
import { eptRegex } from "@/lib/utils/regex";
import SearchBar from "@codegouvfr/react-dsfr/SearchBar";
import { useStyles } from "tss-react/dsfr";
import styles from '../components.module.scss';
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
  const { css } = useStyles();

  return (
    code && libelle ? (
      <div className='flex flex-row gap-3 align-center'>
        <SearchBar
          className={type ?
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
              },
              '.css-1uhhrmm-MuiAutocomplete-endAdornment': {
                right: '2px',
              },
              '.css-iuka1o': { // pour la preprod
                right: '2px',
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
          style={{ width: '100%', alignItems: 'center' }}
          renderInput={({ className, id, placeholder, type }) => (
            <SearchInputHeader
              className={className}
              id={id}
              placeholder={placeholder}
              type={type}
            />
          )}
        />
        <Localisation libelle={libelle} code={code} />
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
