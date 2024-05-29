import { Stepper } from "@codegouvfr/react-dsfr/Stepper";

interface Props {
	title: string;
	stepCount: number;
	currentStep: number;
}

export function StepperComp ({title, stepCount, currentStep}: Props) {

	return (
		<Stepper
    	currentStep={currentStep}
    	stepCount={stepCount}
    	title={title}
  	/>
  )
}
