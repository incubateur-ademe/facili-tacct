import { AgricultureBio } from "@/lib/postgres/models";

const AgricultureBiologique = (props: {
  agricultureBio: AgricultureBio[];
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}) => {
  const { agricultureBio, data } = props;
  return (
    <div>
      <h1>Agriculture Biologique</h1>
      <p>La biodiversité en agriculture biologique</p>
    </div>
  );
};

export default AgricultureBiologique;
