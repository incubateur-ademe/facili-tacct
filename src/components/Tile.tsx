import styles from "./components.module.scss";
import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";

interface Props {
	children: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	selected: boolean;
}

export function TileComp ({children, selected, onClick}: Props) {
	const { isDark } = useIsDark();
 	const darkClass = {
  	backgroundColor: fr.colors.getHex({isDark}).decisions.background.default.grey.active,
  	"&:hover": {
  	  backgroundColor: fr.colors.getHex({isDark}).decisions.background.alt.grey.hover
  	},
	}
	return (
		<button className={selected ? styles.selected : styles.unselected} style={darkClass}
			onClick={onClick}>
			<h6>{children}</h6>
    </button>
  )
}
