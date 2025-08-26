import { fr } from "@codegouvfr/react-dsfr";
import Link from "next/link";

import { Container } from "../layout";
import { Box } from "./Box";

export const Follow = () => (
  <Box className={fr.cx("fr-follow")}>
    <Container>
      <Box className={fr.cx("fr-follow__newsletter")}>
        <div>
          <p className="fr-h5">Contact</p>
          <p className="fr-text--sm">
            Si vous n'avez pas trouvé de réponses à vos questions, contactez-nous à{" "}
            <Link href="mailto:" target="_blank">
              @beta.gouv.fr
            </Link>
          </p>
        </div>
      </Box>
    </Container>
  </Box>
);
