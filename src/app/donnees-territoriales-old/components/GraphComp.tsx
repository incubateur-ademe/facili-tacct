interface Props {
  activeData: string;
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    graph: any;
    id: number;
    risque: string;
    titre: string;
  }>;
}

const GraphComp = (props: Props) => {
  const { data, activeData } = props;

  return (
    <div>
      {data.find(el => el.titre === activeData)?.graph}
      <p>
        Source : <b>Observatoire des territoires</b>
      </p>
    </div>
  );
};

export default GraphComp;
