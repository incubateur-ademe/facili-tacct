"use client";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useState } from "react";

export function RadioButton() {
  const [value, setValue] = useState<"one" | "three" | "two" | undefined>(undefined);

  return (
    <RadioButtons
      legend="Question 1"
      name="radio"
      options={[
        {
          label: "Label radio",
          nativeInputProps: {
            value: "one",
          },
        },
        {
          label: "Label radio 2",
          nativeInputProps: {
            value: "two",
          },
        },
        {
          label: "Label radio 3",
          nativeInputProps: {
            value: "three",
          },
        },
      ]}
    />
  );
}
