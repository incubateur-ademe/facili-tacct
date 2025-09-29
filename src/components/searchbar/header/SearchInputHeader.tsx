'use client';

import { useState } from 'react';

export const SearchInputHeader = ((props: SearchInputHeaderProps) => {
  const {
    className,
    id,
    type
  } = props;
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<string>(type);

  const collectivites = ["EPCI/EPT", "Commune", "Département", "EPT", "PETR", "PNR"];

  return (
    <div>
      {/* <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={options}
        // onChange={(event: SelectChangeEvent) => {
        //   setOptions(event.target.value as string);
        //   setInputValue('');
        // }}
        autoWidth
        label="Age"
      >
        {collectivites.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select> */}
    </div>
  );
});
