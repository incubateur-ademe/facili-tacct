"use client"

import { Container } from "../../../dsfr/server";
import RadioButton from '../../../dsfr/base/client/RadioButtons';
import { Button } from "@codegouvfr/react-dsfr/Button";

type Props = {
    answers1?: string;
    setAnswers1: any; //React.Dispatch<React.SetStateAction<string>>    (answers1: string) => void;
    setActiveTab: any;
  }

const Page1 : React.FC<Props> = (props) => {
    const { answers1, setAnswers1, setActiveTab } = props;
    const handleClick = () => {
        setActiveTab("2");
    }
        
    return (
        <Container m="6w">
            <h1>Page1</h1>
            <RadioButton
                legend="Question 1"
                options={[
                    {
                        label: "P1 Q1 R1",
                        nativeInputProps: {
                          checked: answers1 === "P1 Q1 R1",
                          onChange: () => setAnswers1("P1 Q1 R1")
                      }
                    },
                    {
                        label: "P1 Q1 R2",
                        nativeInputProps: {
                          checked: answers1 === "P1 Q1 R2",
                          onChange: ()=> setAnswers1("P1 Q1 R2")
                      }
                    },
                    {
                        label: "P1 Q1 R3",
                        nativeInputProps: {
                          checked: answers1 === "P1 Q1 R3",
                          onChange: ()=> setAnswers1("P1 Q1 R3")
                      }
                    },
                ]}
            />
            <Button
                onClick={handleClick}
            >
                Page suivante
            </Button>
            {/* <RadioButton
                legend="Question 2"
                options={[
                    {
                        label: "P1 Q2 R1",
                        nativeInputProps: {
                          checked: Q2value === "P1 Q2 R1",
                          onChange: ()=> setQ2Value("P1 Q2 R1")
                      }
                    },
                    {
                        label: "P1 Q2 R2",
                        nativeInputProps: {
                          checked: Q2value === "P1 Q2 R2",
                          onChange: ()=> setQ2Value("P1 Q2 R2")
                      }
                    },
                    {
                        label: "P1 Q2 R3",
                        nativeInputProps: {
                          checked: Q2value === "P1 Q2 R3",
                          onChange: ()=> setQ2Value("P1 Q2 R3")
                      }
                    },
                ]}
            /> */}
        </Container>  
    )
}

export default Page1;