
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Container } from "../../dsfr/server";

const Diagnostic = async () => {
    // const data = await function()

    return (
        <>
        <Container py="6w">
            <h4>Retour</h4>
            <h1>Titre</h1>
            <div>
                <p>texte</p>
            </div>
            <h3>DESIGN BUTTONS</h3>
            <Button
                linkProps={{
                    href: '/form'
                  }}>
                Approfondir le thème
            </Button>
        </Container>
        </>
    )
}

export default Diagnostic;