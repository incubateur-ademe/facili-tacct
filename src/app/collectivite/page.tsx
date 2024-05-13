"use client"

import { useState } from 'react';
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Container, Grid } from "../../dsfr/server";
import { useRouter } from 'next/navigation';

type Code = string
type Event = React.ChangeEvent<HTMLInputElement>;

const Collectivite = () => {
    const router = useRouter();
		const [code, setCode] = useState('');
    
    const handleChange = (event: Event) => {
        const input = event.target.value;
        setCode(input);
      };
    const handleClick = () => {
        router.push(`/form?code=${code}`);
    }
    
    return (
      <>
      <Container py="6w">
        <Grid align="center">
          <h1>Où est située votre collectivité ?</h1>
          <p>
              Cette information nous aidera à vous apporter les informations pertinentes pour votre territoire
          </p>
          <div
            className="container"
            style={{
              width: 768
            }}
          >
            <Input
              addon={<Button onClick={handleClick}>Continuer</Button>}
              label=""
              nativeInputProps={{
                placeholder: '75000',
                name: "commune",
                value: code,
                onChange: handleChange,
              }}
            />
          </div>
        </Grid> 
      </Container>
      </>
    )
}

export default Collectivite;


