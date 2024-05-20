import { Container, Grid, GridCol } from "../../../dsfr/server";
import RadioButton from '../../../dsfr/base/client/RadioButtons';
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Box } from "../../../dsfr/server";
import Bubble from "./bubble";

type Props = {

  }

const Page2 : React.FC<Props> = (props) => {
    // const handleForward = () => {
    //     setActiveTab("3");
    // }
    // const handleBackward = () => {
    //     setActiveTab("1");
    // }
    return (
			<>
        <Box as="div" className="speech-bubble2">
        	<Bubble/>
      	</Box>
        <div style={{display:"flex", flexDirection:"row", gap:"2em"}}>
          {/* <Button onClick={handleBackward}>
            Page précédente
          </Button>
          <Button onClick={handleForward}>
            Page suivante
          </Button> */}
        </div>
			</>
    )
}

export default Page2;