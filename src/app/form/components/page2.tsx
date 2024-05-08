import { Container, Grid, GridCol } from "../../../dsfr/server";
import RadioButton from '../../../dsfr/base/client/RadioButtons';
import { Button } from "@codegouvfr/react-dsfr/Button";

type Props = {
    answers2?: string;
    setAnswers2?: any;
    setActiveTab: any;
  }

const Page2 : React.FC<Props> = (props) => {
    const { answers2, setAnswers2, setActiveTab } = props;
    const handleForward = () => {
        setActiveTab("3");
    }
    const handleBackward = () => {
        setActiveTab("1");
    }
    return (
        <Container m="6w">
            <h1>Page2</h1>
            <RadioButton
                legend="Question 1"
                options={[
                    {
                        label: "P2 Q1 R1",
                        nativeInputProps: {
                          checked: answers2 === "P2 Q1 R1",
                          onChange: ()=> setAnswers2("P2 Q1 R1")
                      }
                    },
                    {
                        label: "P2 Q1 R2",
                        nativeInputProps: {
                          checked: answers2 === "P2 Q1 R2",
                          onChange: ()=> setAnswers2("P2 Q1 R2")
                      }
                    },
                    {
                        label: "P2 Q1 R3",
                        nativeInputProps: {
                          checked: answers2 === "P2 Q1 R3",
                          onChange: ()=> setAnswers2("P2 Q1 R3")
                      }
                    },
                ]}
            />
            <div style={{display:"flex", flexDirection:"row", gap:"2em"}}>
                <Button onClick={handleBackward}>
                    Page précédente
                </Button>
                <Button onClick={handleForward}>
                    Page suivante
                </Button>
            </div>
        </Container>  
    )
}

export default Page2;