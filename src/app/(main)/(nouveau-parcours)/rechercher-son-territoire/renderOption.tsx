"use client";

import { Box } from "@mui/material";

const ReplaceDisplayEpci = (libelleEpci: string) => {
  return libelleEpci
    .replace("Communauté d'agglomération", 'CA')
    .replace('Communauté de communes', 'CC');
};

export const RenderOption = ({props, option}: SearchInputOptionsProps) => {
  const { ...optionProps } = props;
  return (
    <Box
      component="li"
      sx={{ height: 'fit-content' }}
      {...optionProps}
      key={option.searchLibelle + option.searchCode}
    >
      {option.searchCode?.length !== 0 ? (
        <p style={{ margin: '0' }}>
          <b>{ReplaceDisplayEpci(option.searchLibelle)}</b> (
          {option.searchCode})
        </p>
      ) : (
        <p style={{ margin: '0' }}>
          <b>{ReplaceDisplayEpci(option.searchLibelle)}</b>
        </p>
      )
      }
    </Box>
  );
}
