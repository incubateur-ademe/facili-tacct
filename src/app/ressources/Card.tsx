import styles from "./ressources.module.scss";

interface description {
	description: string;
}

interface Props {
	tag: string;
	titre: string;
	ateliers: Array<description>;
}

const Card = ({tag, titre, ateliers}: Props) => {
	return (
    <div className={styles.card}>
      <p>{tag}</p>
      <h5>{titre}</h5>
			{
				ateliers.map((el, i) => (
					<div className={styles.subcard}
						key={i}>
      		  <p><b>Atelier {i + 1}</b></p>
      		  <p>{el.description}</p>
      		</div>
				))
			}
    </div>
	)
}

export default Card;