import { Container } from "../../../dsfr/server";
import RadioButton from '../../../dsfr/base/client/RadioButtons';

type Props = {
    answers4?: string;
    setAnswers4?: any;
  }

const Page4 : React.FC<Props> = ({answers4, setAnswers4}) => {
    //console.log('answers4 in Page4', answers4)
    return (
        <Container m="6w">
            <h1>Page4</h1>
            <RadioButton
                legend="Question 1"
                options={[
                    {
                        label: "P4 Q1 R1",
                        nativeInputProps: {
                          checked: answers4 === "P4 Q1 R1",
                          onChange: ()=> setAnswers4("P4 Q1 R1")
                      }
                    },
                    {
                        label: "P4 Q1 R2",
                        nativeInputProps: {
                          checked: answers4 === "P4 Q1 R2",
                          onChange: ()=> setAnswers4("P4 Q1 R2")
                      }
                    },
                    {
                        label: "P4 Q1 R3",
                        nativeInputProps: {
                          checked: answers4 === "P4 Q1 R3",
                          onChange: ()=> setAnswers4("P4 Q1 R3")
                      }
                    },
                ]}
            />
        </Container>  
    )
}

export default Page4;