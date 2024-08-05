"use client";

import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { MySearchInput } from "./search";

export const SearchBarComp = () => {
  return (
    <div>
      <SearchBar
        renderInput={({ className, id, placeholder, type }) => (
          <MySearchInput
            className={className}
            id={id}
            placeholder={placeholder}
            type={type}
          />
        )}
    />
    </div>
  );
};
