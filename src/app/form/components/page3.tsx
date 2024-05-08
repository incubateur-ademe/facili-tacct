import { Container } from "../../../dsfr/server";
import RadioButton from '../../../dsfr/base/client/RadioButtons';

type Props = {
    answers3?: string;
    setAnswers3?: any;
  }

const Page3 : React.FC<Props> = ({answers3, setAnswers3}) => {
    //console.log('answers3 in Page3', answers3)
    return (
        <Container m="6w">
            <h1>Page3</h1>
            <RadioButton
                legend="Question 1"
                options={[
                    {
                        label: "P3 Q1 R1",
                        nativeInputProps: {
                          checked: answers3 === "P3 Q1 R1",
                          onChange: ()=> setAnswers3("P3 Q1 R1")
                      }
                    },
                    {
                        label: "P3 Q1 R2",
                        nativeInputProps: {
                          checked: answers3 === "P3 Q1 R2",
                          onChange: ()=> setAnswers3("P3 Q1 R2")
                      }
                    },
                    {
                        label: "P3 Q1 R3",
                        nativeInputProps: {
                          checked: answers3 === "P3 Q1 R3",
                          onChange: ()=> setAnswers3("P3 Q1 R3")
                      }
                    },
                ]}
            />
        </Container>  
    )
}

export default Page3;