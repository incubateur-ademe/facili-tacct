import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import "./globalMui.css";

interface RangeSliderProps {
  firstValue: number;
  lastValue: number;
  minDist: number;
  setSliderValue: (value: number[]) => void;
  sliderValue: number[];
  width: number | string;
  padding?: string;
  maxWidth?: string;
  margin?: string;
}

const RangeSlider = ({ 
  firstValue,
  lastValue,
  minDist,
  setSliderValue,
  sliderValue,
  width,
  padding="0.75rem 1rem",
  maxWidth="95%",
  margin="0 auto"
}: RangeSliderProps) => {
  const [value, setValue] = useState<number[]>([sliderValue[0], sliderValue[1]]);
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
      setSliderValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
      setSliderValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  const marks = [
    { value: value[0], label: value[0] },
    { value: value[1], label: value[1] },
  ]

  return (
    <Box sx={{ width: width, padding: padding, maxWidth: maxWidth, margin: margin }}>
      <Slider
        getAriaLabel={() => 'Date range'}
        sx={{ flexGrow: 1 }}
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
