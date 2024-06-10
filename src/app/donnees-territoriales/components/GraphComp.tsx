
interface Props {
	data: {
		id: number;
		titre: string;
		facteur_sensibilite: string;
		risque: string;
		donnee: string;
		graph: any;
	}[]
  activeData: string;
}

const GraphComp = (props: Props) => {
	const { data, activeData } = props;

  return (
    <div>
      <p style={{margin:"0 2em 0"}}>Titre du graph</p>
      {data.find(el => el.titre === activeData)?.graph}
      <p>Source : <b>Observatoire des territoires</b></p>
    </div>

  )
}

export default GraphComp;