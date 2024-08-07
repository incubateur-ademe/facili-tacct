"use client";

import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import { Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { GetCollectivite } from "@/lib/queries/searchBar";

type MySearchInputProps = {
  className?: string;
  codeFromSearchBar: (a: string | undefined) => void;
  id: string;
  placeholder: string;
  type: string;
};

type Options = {
  code: string;
  codeEpci: string;
  nom: string;
};

export const MySearchInput = (props: MySearchInputProps) => {
  const { className, id, type, codeFromSearchBar } = props;
  const router = useRouter();
  // const [value, setValue] = useState<Values | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Options[]>([]);
  const [epciOptions, setEpciOptions] = useState<Options[]>([]);
  const [code, setCode] = useState<string>();

  // supprime les doublons pour les objects epci
  const filteredEpci = epciOptions.filter(
    (value, index, self) => index === self.findIndex(t => t.nom === value.nom && t.code === value.code),
  );

  const collectivites = [...filteredEpci, ...options];
  const handleClick = () => {
    code ? router.push(`/thematiques?code=${code}`) : void 0;
  };

  useEffect(() => {
    void (async () => {
      const temp = await GetCollectivite(inputValue);
      setEpciOptions(
        temp.map((el, i) => ({
          nom: el.libelle_epci,
          code: el.epci,
          codeEpci: el.epci,
        })),
      );
      setOptions(
        temp.map((el, i) => ({
          nom: el.libelle_commune,
          code: el.code_commune,
          codeEpci: el.epci,
        })),
      );
    })();
    codeFromSearchBar(code);
  }, [inputValue, codeFromSearchBar, code]);

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
        setCode(newValue?.codeEpci);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={option => option.nom}
      onKeyDown={e => {
        if (e.code === "Enter") {
          handleClick();
        }
      }}
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
      sx={{ width: "inherit" }}
    />
  );
};
