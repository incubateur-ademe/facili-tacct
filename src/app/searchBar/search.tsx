"use client";

import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import { Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";

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
  code: string;
  nom: string;
};

export function MySearchInput(props: MySearchInputProps) {
  const { className, id, type } = props;
  // const [value, setValue] = useState<Values | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Options[]>([]);
  const [epciOptions, setEpciOptions] = useState<Options[]>([]);

  console.log("epciOptions", epciOptions);

  // supprime les doublons pour les objects epci
  const filteredEpci = epciOptions.filter(
    (value, index, self) => index === self.findIndex(t => t.nom === value.nom && t.code === value.code),
  );

  const collectivites = [...filteredEpci, ...options];

  useEffect(() => {
    void (async () => {
      const temp = await Get_Collectivite(inputValue);
      console.log(temp);
      setEpciOptions(
        temp.map((el, i) => ({
          nom: el.libelle_epci,
          code: el.epci,
        })),
      );
      setOptions(
        temp.map((el, i) => ({
          nom: el.libelle_commune,
          code: el.code_commune,
        })),
      );
    })();
  }, [inputValue]);

  return (
    <Autocomplete
      id={id}
      autoHighlight
      filterOptions={x => x}
      options={collectivites.sort((a, b) => a.nom.localeCompare(b.nom))}
      autoComplete
      includeInputInList
      filterSelectedOptions
      // value={value}
      noOptionsText="Aucune collectivité trouvée"
      onChange={(event, newValue: Options | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        // setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={option => option.nom}
      renderOption={(props, option) => {
        const { ...optionProps } = props;
        return (
          <Box component="li" sx={{ height: "fit-content" }} {...optionProps}>
            <p style={{ margin: "0" }}>
              <b>{option.nom} </b> ({option.code})
            </p>
          </Box>
        );
      }}
      renderInput={params => (
        <div ref={params.InputProps.ref}>
          <input
            {...params.inputProps}
            className={cx(params.inputProps.className, className)}
            placeholder={"Rechercher une commune ou un EPCI"}
            type={type}
          />
        </div>
      )}
      style={{ width: "100%" }}
    />
  );
}
