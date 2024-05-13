import "./../assets/scss/components.scss";

interface Props {
	children: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	selected: boolean;
}

export function TileComp ({children, selected, onClick}: Props) {
	return (
		<div className={selected ? "tileComponent-selected" : "tileComponent-unselected"}
			onClick={onClick}>
			<h6>{children}</h6>
    </div>

  )
}
