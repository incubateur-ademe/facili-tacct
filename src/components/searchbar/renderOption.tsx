"use client";

import { Box } from "@mui/material";

const ReplaceDisplayEpci = (libelleEpci: string) => {
  return libelleEpci
    .replace("Communauté d'agglomération", 'CA')
    .replace('Communauté de communes', 'CC');
};

export const RenderOption = ({ props, option }: SearchInputOptionsProps) => {
  //Dans le menu déroulant
  const { ...optionProps } = props;
  return (
    <Box
      component="li"
      style={{ borderBottom: '1px solid var(--gris-medium)' }}
      sx={{ 
        '&:hover': { fontWeight: '700 !important', backgroundColor: 'transparent !important' } 
      }}
      {...optionProps}
      key={option.searchLibelle + option.searchCode}
    >
      {option.searchCode?.length !== 0 ? (
        <p style={{ margin: '0', fontSize: '14px' }}>
          {ReplaceDisplayEpci(option.searchLibelle)} (
          {option.searchCode})
        </p>
      ) : (
        <p style={{ margin: '0', fontSize: '14px' }}>
          {ReplaceDisplayEpci(option.searchLibelle)}
        </p>
      )
      }
    </Box>
  );
}
