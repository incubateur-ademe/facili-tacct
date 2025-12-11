"use client";

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from 'react';

export const MultiSelect = ({
  options,
  handleSelectObjectifOptions,
  selectedValues = []
}: {
  options: string[];
  handleSelectObjectifOptions: (event: SelectChangeEvent<string[]>) => void;
  selectedValues?: string[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <FormControl fullWidth>
      <Select
        multiple
        value={selectedValues}
        onChange={handleSelectObjectifOptions}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        displayEmpty
        IconComponent={ExpandMoreOutlinedIcon}
        renderValue={(selected) =>
          selected.length === 0
            ? "Sélectionnez une option"
            : `${selected.length} sélectionné(s)`
        }
        MenuProps={{
          sx: {
            '& .MuiPaper-root': {
              maxHeight: '500px',
              backgroundColor: '#FFFFFF',
              borderRadius: '1.5rem',
              transform: 'translateY(14px) !important',
              boxShadow: '0px 2px 6px 0px #00001229',
              '& .Mui-selected': {
                fontWeight: 700,
                backgroundColor: '#FFFFFF',
              },
            },
            '& .MuiTypography-root': {
              fontFamily: 'Marianne !important',
            },
            '& .MuiList-root': {
              padding: '1.5rem',
            },
            '& .MuiMenuItem-root:not(:last-child)': {
              // borderBottom: '1px solid var(--gris-medium)',
            },
            '& .MuiMenuItem-root': {
              fontSize: '14px',
              lineHeight: '19px',
              padding: 0,

              '&:hover': { fontWeight: '700 !important', backgroundColor: 'transparent !important' },
              '&:focus': { fontWeight: '700 !important', backgroundColor: 'transparent !important', outline: 'none' },
            },
            '& .MuiCheckbox-root': {
              padding: '6px',
            },
          },
        }}
        sx={{
          '&': {
            backgroundColor: 'white',
            borderRadius: '30px',
            height: "48px",
            fontWeight: 400,
            // transition: 'all 0.5s ease-in-out',
            border: open ? '1px solid var(--boutons-primaire-1)' : '1px solid var(--gris-medium)',
          },
          '& .MuiSelect-select': {
            color: 'var(--gris-dark)',
            fontSize: '1rem',
            fontFamily: 'Marianne',
            fontWeight: selectedValues.length === 0 ? 'normal' : 'bold',
            border: 'none',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox
              checked={selectedValues.includes(option)}
              sx={{
                color: '#038278',
                '&.Mui-checked': {
                  color: '#038278',
                },
                '& .MuiSvgIcon-root': {
                  borderRadius: '4px',
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const MultiSelectResponsive = ({
  handleSelectObjectifOptions,
  selectedValues = [],
  filtre
}: {
  handleSelectObjectifOptions: (event: SelectChangeEvent<string[]>) => void;
  selectedValues?: string[];
  filtre: { titre: string; options: string[]; };
}) => {
  const [open, setOpen] = useState(false);
  return (
    <FormControl fullWidth>
      <Select
        multiple
        value={selectedValues}
        onChange={handleSelectObjectifOptions}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        displayEmpty
        IconComponent={ExpandMoreOutlinedIcon}
        renderValue={() => selectedValues.length !== 0 ? `${filtre.titre} (${selectedValues.length})` : filtre.titre}
        MenuProps={{
          sx: {
            '& .MuiPaper-root': {
              maxHeight: '500px',
              backgroundColor: '#FAFAFA',
              borderRadius: '0px',
              boxShadow: 'none',
              '& .Mui-selected': {
                fontWeight: 700,
                backgroundColor: '#FFFFFF',
              },
            },
            '& .MuiTypography-root': {
              fontFamily: 'Marianne !important',
            },
            '& .MuiList-root': {
              padding: '1rem 0.5rem',
            },
            '& .MuiMenuItem-root:not(:last-child)': {
              // borderBottom: '1px solid var(--gris-medium)',
            },
            '& .MuiMenuItem-root': {
              fontSize: '14px',
              lineHeight: '19px',
              padding: 0,

              '&:hover': { fontWeight: '700 !important', backgroundColor: 'transparent !important' },
              '&:focus': { fontWeight: '700 !important', backgroundColor: 'transparent !important', outline: 'none' },
            },
            '& .MuiCheckbox-root': {
              padding: '6px',
            },
          },
        }}
        sx={{
          '&': {
            backgroundColor: 'white',
            borderRadius: '0px',
            height: "48px",
            fontWeight: 400,
            borderBottom: '1px solid var(--gris-medium)',
          },
          '& .MuiSelect-select': {
            color: '#161616',
            fontSize: '18px',
            fontFamily: 'Marianne',
            fontWeight: selectedValues.length === 0 ? 'normal' : 'bold',
            border: 'none',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiSelect-icon': {
            fill: '#161616',
          },
        }}
      >
        {filtre.options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox
              checked={selectedValues.includes(option)}
              sx={{
                color: '#038278',
                '&.Mui-checked': {
                  color: '#038278',
                },
                '& .MuiSvgIcon-root': {
                  borderRadius: '4px',
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
