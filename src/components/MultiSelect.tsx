"use client";

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const options = [
  "Accessibilité",
  "Confort",
  "Sécurité",
  "Esthétique",
  "Fonctionnalité",
  "Durabilité",
  "Écologie"
];

const MultiSelect = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedValues(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl fullWidth>
      <Select
        multiple
        value={selectedValues}
        onChange={handleChange}
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
              backgroundColor: '#FFFFFF',
              borderRadius: '1rem',
              transform: 'translateY(14px) !important',
              '& .Mui-selected': {
                fontWeight: 700,
                backgroundColor: '#FFFFFF',
              },
            },
            '& .MuiList-root': {
              padding: '0.5rem',
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
              padding: '9px',
            },
          },
        }}
        sx={{
          '&': {
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 12px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px',
            borderRadius: '30px',
            height: "48px",
            fontWeight: 400,
            transition: 'all 0.5s ease-in-out'
          },
          '& .MuiSelect-select': {
            color: '#000000',
            fontSize: '14px',
            fontFamily: 'Marianne',
            fontWeight: 400,
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

export default MultiSelect;
