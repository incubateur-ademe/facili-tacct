// import { Container } from "../../../dsfr/server";
// import RadioButton from '../../../dsfr/base/client/RadioButtons';
// import { Button } from "@codegouvfr/react-dsfr/Button";

// type Props = {
//     answers3?: string;
//     setAnswers3?: any;
//     setActiveTab?: any;
//   }

// const Page3 : React.FC<Props> = (props) => {
//     const { answers3, setAnswers3, setActiveTab } = props;
//     const handleForward = () => {
//         setActiveTab("4");
//     }
//     const handleBackward = () => {
//         setActiveTab("2");
//     }
//     return (
//         <Container m="6w">
//             <h1>Page3</h1>
//             <RadioButton
//                 legend="Question 1"
//                 options={[
//                     {
//                         label: "P3 Q1 R1",
//                         nativeInputProps: {
//                           checked: answers3 === "P3 Q1 R1",
//                           onChange: ()=> setAnswers3("P3 Q1 R1")
//                       }
//                     },
//                     {
//                         label: "P3 Q1 R2",
//                         nativeInputProps: {
//                           checked: answers3 === "P3 Q1 R2",
//                           onChange: ()=> setAnswers3("P3 Q1 R2")
//                       }
//                     },
//                     {
//                         label: "P3 Q1 R3",
//                         nativeInputProps: {
//                           checked: answers3 === "P3 Q1 R3",
//                           onChange: ()=> setAnswers3("P3 Q1 R3")
//                       }
//                     },
//                 ]}
//             />
//             <div style={{display:"flex", flexDirection:"row", gap:"2em"}}>
//                 <Button onClick={handleBackward}>
//                     Page précédente
//                 </Button>
//                 <Button onClick={handleForward}>
//                     Page suivante
//                 </Button>
//             </div>
//         </Container>  
//     )
// }

// export default Page3;