import { DarkClass } from "@/lib/utils/DarkClass";
import { eptRegex } from "@/lib/utils/regex";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import styles from '../components.module.scss';

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
  const [value, setValue] = useState(
    (type === "epci" || type === "ept") ? "EPCI/EPT"
      : type === "commune" ? "Commune"
        : type === "departement" ? "Département"
          : type === "petr" ? "PETR"
            : type === "pnr" ? "PNR"
              : undefined
  );

  const collectivites = ["EPCI/EPT", "Commune", "Département", "PETR", "PNR"];

  return (
    code && libelle && value ? (
      <div className='flex flex-row gap-3 align-center'>
        <Select
          labelId="Sélection du territoire"
          value={value}
          onChange={(event: SelectChangeEvent) => {
            setValue(event.target.value as "EPCI/EPT" | "Commune" | "Département" | "PETR" | "PNR");
          }}
          MenuProps={{
            sx: {
              '& .MuiPaper-root': {
                backgroundColor: '#FFFFFF',
                borderRadius: '1rem',
                '& .Mui-selected': {
                  fontWeight: 700,
                  backgroundColor: '#FFFFFF',
                }
              },
              '& .MuiList-root': {
                padding: '0.5rem',
              },
              '& .MuiButtonBase-root:not(:last-child)': {
                borderBottom: '1px solid var(--gris-medium)',
              },
              '& .MuiButtonBase-root': {
                fontSize: '14px',
              },
            },
          }}
          sx={{
            '&': {
              border: 'none',
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
