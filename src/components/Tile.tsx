import styles from "./components.module.scss";

interface Props {
	children: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	selected: boolean;
}

export function TileComp ({children, selected, onClick}: Props) {
	return (
		<div className={selected ? styles.selected : styles.unselected}
			onClick={onClick}>
			<h6>{children}</h6>
    </div>
  )
}
