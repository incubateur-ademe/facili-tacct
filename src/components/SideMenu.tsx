import { SideMenu } from "@codegouvfr/react-dsfr/SideMenu";
import { useSearchParams } from 'next/navigation';

export function SideMenuComp () {
	const searchParams = useSearchParams();
  const code = searchParams.get("code")
	return (
		<div>	
			<div
    	  className="container"
    	  style={{
    	    minWidth: 250,
					height: "55dvh",
					marginBottom: "10rem"
    	  }}
    	>
      	<SideMenu
      	  align="left"
      	  burgerMenuButtonText="LOREM IPSUM"
      	  items={[
      	    {
      	      isActive: true,
      	      linkProps: {
      	        href: '#'
      	      },
      	      text: 'Inconfort thermique'
      	    },
      	    {
      	      linkProps: {
      	        href: '#'
      	      },
      	      text: 'Inondations et RGA'
      	    },
      	  ]}
      	  title="Vos thématiques"
      	/>
    	</div>
			<span className="fr-icon-map-pin-2-line"> {code}</span>
		</div>

    )
}
