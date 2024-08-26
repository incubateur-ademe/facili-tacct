"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStyles } from "tss-react/dsfr";

import { MySearchInput } from "./SearchInput";

export const SearchBarComp = () => {
  const router = useRouter();
  const [epciCode, setEpciCode] = useState<string | undefined>();
  const [communeCode, setCommuneCode] = useState<string | undefined>();

  const getEpciCodeFromSearchBar = (code: string | undefined) => {
    setEpciCode(code);
  };

  const getCommuneCodeFromSearchBar = (code: string | undefined) => {
    setCommuneCode(code);
  };

  const handleClick = () => {
    if (communeCode) {
      router.push(`/thematiques?codgeo=${communeCode}`);
    } else if (epciCode) {
      router.push(`/thematiques?codepci=${epciCode}`)
    }
  };

  const { css } = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <SearchBar
        className={css({
          width: "inherit",
          ".fr-btn": {
            display: "none",
          },
        })}
        renderInput={({ className, id, placeholder, type }) => (
          <MySearchInput
            className={className}
            id={id}
            placeholder={placeholder}
            type={type}
            epciCodeFromSearchBar={getEpciCodeFromSearchBar}
            communeCodeFromSearchBar={getCommuneCodeFromSearchBar}
          />
        )}
      />
      <Button onClick={handleClick}>Continuer</Button>
    </div>
  );
};
