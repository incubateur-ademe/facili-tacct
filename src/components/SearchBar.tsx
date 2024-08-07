"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStyles } from "tss-react/dsfr";

import { MySearchInput } from "./SearchInput";

export const SearchBarComp = () => {
  const router = useRouter();
  const [code, setCode] = useState<string | undefined>();

  const getCodeFromSearchBar = (code: string | undefined) => {
    setCode(code);
  };

  const handleClick = () => {
    if (code) {
      router.push(`/thematiques?code=${code}`);
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
            codeFromSearchBar={getCodeFromSearchBar}
          />
        )}
      />
      <Button onClick={handleClick}>Continuer</Button>
    </div>
  );
};
