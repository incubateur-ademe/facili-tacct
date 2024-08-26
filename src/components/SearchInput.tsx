"use client";

import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import { Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { GetCollectivite } from "@/lib/queries/searchBar";

type MySearchInputProps = {
  className?: string;
  communeCodeFromSearchBar: (a: string | undefined) => void;
  epciCodeFromSearchBar: (a: string | undefined) => void;
  id: string;
  placeholder: string;
  type: string;
};

type Options = {
  codeCommune: string;
  codeEpci: string;
  nom: string;
};

export const MySearchInput = (props: MySearchInputProps) => {
  const { className, id, type, epciCodeFromSearchBar, communeCodeFromSearchBar } = props;
  const router = useRouter();
  // const [value, setValue] = useState<Values | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Options[]>([]);
  const [epciOptions, setEpciOptions] = useState<Options[]>([]);
  const [epciCode, setEpciCode] = useState<string>();
  const [communeCode, setCommuneCode] = useState<string>();

  // supprime les doublons pour les objects
  const filteredEpci = epciOptions.filter(
    (value, index, self) => index === self.findIndex(t => t.nom === value.nom && t.codeEpci === value.codeEpci),
  );

  const filteredCommunes = options.filter(
    (value, index, self) => index === self.findIndex(t => t.nom === value.nom && t.codeCommune === value.codeCommune),
  );

  const collectivites = [...filteredCommunes.sort((a, b) => a.nom.localeCompare(b.nom)), ...filteredEpci];
  const handleClick = () => {
    communeCode ? router.push(`/thematiques?codgeo=${communeCode}`) : void 0;
  };

  useEffect(() => {
    void (async () => {
      const temp = await GetCollectivite(inputValue);
      setEpciOptions(
        temp.map((el, i) => ({
          nom: el.libelle_epci,
          codeCommune: el.epci,
          codeEpci: el.epci,
        })),
      );
      setOptions(
        temp.map((el, i) => ({
          nom: el.libelle_commune,
          codeCommune: el.code_commune,
          codeEpci: el.epci,
        })),
      );
    })();
    epciCodeFromSearchBar(epciCode);
    communeCodeFromSearchBar(communeCode);
  }, [inputValue, epciCodeFromSearchBar, epciCode, communeCodeFromSearchBar, communeCode]);

  return (
    <Autocomplete
      id={id}
      autoHighlight
      filterOptions={x => x}
      options={collectivites}
      // value={collectivites}
      noOptionsText="Aucune collectivité trouvée"
      onChange={(event, newValue: Options | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setEpciCode(newValue?.codeEpci);
        setCommuneCode(newValue?.codeCommune)
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={option => {
        if (option) {
          return `${option.nom} (${option.codeCommune})`;
        }
        return "";
      }}
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
              <b>{option.nom} </b> ({option.codeCommune})
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
