import Image from "next/image";
import { Box, Container, Grid, GridCol, CenteredContainer } from "../dsfr/server";
import { AnchorLink } from "../dsfr/client";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import styles from "./index.module.scss";


export default function Home() {
  return (
    <>
    <Container size="lg" as="div" pt="4w" className={cx("fr-hr", styles.block)} key={1} fluid >
      <Grid haveGutters valign="middle" align="right">
        <GridCol lg={4}>{/*   pt="10v" */}
          <h1>Antoine</h1>
          <h2>Allo</h2>
          <Box as="p" className="fr-text--md">
            Erreur 
          </Box>
        </GridCol>
        <GridCol lg={8} pt="10v">{/*   pt="10v" */}
          Erreur 2
        </GridCol>
      </Grid>

      ALLO

    </Container>
    {/* <CenteredContainer>
      <Box>
        one=1
      </Box>
      <Box>
        two=2
      </Box>
    </CenteredContainer> */}
    </>
  );
}
