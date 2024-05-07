"use client";

import { Button } from "@codegouvfr/react-dsfr/Button";
import { fr } from "@codegouvfr/react-dsfr"
import { useStyles } from "tss-react/dsfr"
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark"
import "./global.css";

export default function Home() {

  const { css } = useStyles();
  const { isDark } = useIsDark();
  const backColor = fr.colors.decisions.background.alt.redMarianne.default;  

  return (
    <>
      <h1>First page </h1>
      <Button
        linkProps={{
          href: '/diagnostic'
        }}
        // className={css({
        //   backgroundColor: fr.colors.getHex({isDark}).decisions.background.alt.redMarianne.default,
        //   "&:hover": {
        //     backgroundColor: fr.colors.getHex({isDark}).decisions.background.alt.redMarianne.hover
        //   },
        //   padding: "2em", 
        //   margin: "2em",
        // })}
      >
        Commencer ma démarche
      </Button>  
    </>
  );
}
