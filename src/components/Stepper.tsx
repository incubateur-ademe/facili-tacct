import { Stepper } from "@codegouvfr/react-dsfr/Stepper";

interface Props {
  currentStep: number;
  stepCount: number;
  title: string;
}

export function StepperComp({ title, stepCount, currentStep }: Props) {
  return <Stepper currentStep={currentStep} stepCount={stepCount} title={title} />;
}
