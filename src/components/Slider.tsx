import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

interface RangeSliderProps {
  firstValue: number;
  lastValue: number;
  minDist: number;
}

const RangeSlider = ({ firstValue, lastValue, minDist }: RangeSliderProps) => {
  const [value, setValue] = useState<number[]>([firstValue, lastValue]);
  const minDistance = minDist;
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  const marks = [
    { value: value[0], label: value[0] },
    { value: value[1], label: value[1] },
  ]

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Date range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        getAriaValueText={value => `${value}`}
        min={firstValue}
        max={lastValue}
        marks={marks}
        disableSwap
      />
    </Box>
  );
}

export default RangeSlider;
