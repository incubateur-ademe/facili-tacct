"use client"

import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import { Box } from "@mui/material";
import { Get_Collectivite } from "./queries";

type MySearchInputProps = {
  className?: string;
  id: string;
  placeholder: string;
  type: string;
};

type Values = {
  code_commune: string;
  epci: string;
  libelle_commune: string;
  libelle_epci: string;
};

type Options = {
  nom: string;
  code: string;
};

export function MySearchInput(props: MySearchInputProps) {
        
  const { className, id, type } = props;
  // const [value, setValue] = useState<Values | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Options[]>([]);

  useEffect(() => {
    void (async () => {
      const temp = await Get_Collectivite(inputValue);
      setOptions(temp.map((el, i) => (
        {
          nom: el.libelle_commune,
          code: el.code_commune
        } 
      )))
      // console.log('temp', temp)
      // if (temp.some(e => e.libelle_commune.includes(inputValue))) {
      //   const communes = temp.map((el, i) => (
      //     {
      //       nom: el.libelle_commune,
      //       code: el.code_commune
      //     } 
      //   ));
      //   console.log('communes', communes)
      //   setOptions(communes);
      // } else if (temp.some(e => e.libelle_epci.includes(inputValue))) {
      //   const epci = temp.filter((el, i) => (
      //     {
      //       nom: el.libelle_epci,
      //       code: el.code_commune
      //     } 
      //   ));
      //   // setOptions([epci, ...options]);
      //   console.log('epci', epci)
      // }

    })();
  }, [inputValue]);


  return (
    <Autocomplete 
      id={id}
      autoHighlight
      filterOptions={(x) => x}
      options={options.sort((a, b) => a.nom.localeCompare(b.nom))}
      autoComplete
      includeInputInList
      filterSelectedOptions
      // value={value}
      noOptionsText="Aucune collectivité trouvée"
      onChange={(event: any, newValue: Options | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        // setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => option.nom}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ height: "fit-content"}}
            {...optionProps}
          >
            <p style={{margin: "0"}}><b>{option.nom} </b> ({option.code})</p>
          </Box>
        );
      }}
      renderInput={params => 
        <div ref={params.InputProps.ref}>
          <input 
            {...params.inputProps} 
            className={cx(params.inputProps.className, className)}
            placeholder={"Rechercher une commune ou un EPCI"}
            type={type}
          />
        </div>
      }
      style={{width: "100%"}}
    />
  );
}
