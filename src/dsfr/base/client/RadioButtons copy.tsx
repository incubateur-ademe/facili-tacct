"use client" 
import { useState } from "react";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";

export default function RadioButton(){

    const [ value, setValue ] = useState<"one" | "two" | "three" | undefined>(undefined);

    return (
        <RadioButtons
            legend="Question 1"
            name="radio"
            options={[
              {
                  label: "Label radio",
                  nativeInputProps: {
                    value: "one"
                  }
              },
              {
                  label: "Label radio 2",
                  nativeInputProps: {
                    value: "two"
                  }
              },
              {
                  label: "Label radio 3",
                  nativeInputProps: {
                    value: "three"
                  }
              }
          ]}
            />
    );

}