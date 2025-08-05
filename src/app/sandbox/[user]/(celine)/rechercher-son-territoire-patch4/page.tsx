import { H1 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { BarreDeRecherche } from "./SearchBar";

const RechercherSonTerritoire = () => {
  return (
    <NewContainer size="md">
      <div style={{ margin: '5rem 0' }}>
        <H1
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: "2rem",
            lineHeight: '40px',
          }}>
          Commençons par localiser votre territoire pour personnaliser vos données
        </H1>
        <BarreDeRecherche />
      </div>
    </NewContainer>
  );
}

export default RechercherSonTerritoire;
