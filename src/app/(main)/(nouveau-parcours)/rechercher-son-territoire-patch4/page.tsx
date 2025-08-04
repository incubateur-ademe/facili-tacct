import { H1 } from "@/design-system/base/Textes";
import { Container } from "@/design-system/layout";
import { BarreDeRecherche } from "./SearchBar";

const RechercherSonTerritoire = () => {
  return (
    <Container size="md">
      <div style={{ margin: '5rem 0' }}>
        <H1 style={{ textAlign: 'center' }}>Commençons par localiser votre territoire pour personnaliser vos données</H1>
        <BarreDeRecherche />
      </div>
    </Container>
  );
}

export default RechercherSonTerritoire;
