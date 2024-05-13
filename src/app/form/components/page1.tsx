import { Box } from "../../../dsfr/server";
import RadioButton from '../../../dsfr/base/client/RadioButtons';
import { Button } from "@codegouvfr/react-dsfr/Button";
import Bubble from "./bubble";
import "../../../assets/scss/form.scss"

type Props = {
    answers1?: string;
    setAnswers1: any; //React.Dispatch<React.SetStateAction<string>>    (answers1: string) => void;
    setActiveTab: any;
  }

const Page1 : React.FC<Props> = (props) => {        
    return (
      <Box as="div" className="speech-bubble">
        <Bubble/>
        {/* <h1>Page1</h1>
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
            Facteur suivant
        </Button>*/}
      </Box>
    )
}

export default Page1;