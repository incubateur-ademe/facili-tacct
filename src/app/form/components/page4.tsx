import { Container } from "../../../dsfr/server";
import RadioButton from '../../../dsfr/base/client/RadioButtons';
import { Button } from "@codegouvfr/react-dsfr/Button";

type Props = {
    answers4?: string;
    setAnswers4?: any;
    setActiveTab?: any;
  }

const Page4 : React.FC<Props> = (props) => {
    const { answers4, setAnswers4, setActiveTab } = props;
    const handleBackward = () => {
        setActiveTab("3");
    }

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
            <div style={{display:"flex", flexDirection:"row", gap:"2em"}}>
                <Button onClick={handleBackward}>
                    Page précédente
                </Button>
            </div>
        </Container>  
    )
}

export default Page4;