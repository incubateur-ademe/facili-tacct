"use client" 

import { useState } from "react";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";

interface Props {
  options: Array<{ 
    label: string, 
    nativeInputProps: { checked: boolean, onChange: () => void; }}>;
  legend: string;
}

const RadioButton: React.FC<Props> = ({ legend, options }) => {
    return (
        <RadioButtons
            legend={legend}
            name="radio"
            options={options}
        />
    );
}

export default RadioButton;
