"use client"

import { useState } from 'react';
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Container } from "../dsfr/server";
import { useRouter } from 'next/navigation';
import styles from "./root.module.scss"

type Event = React.ChangeEvent<HTMLInputElement>;

const CollectiviteComp = () => {
  const router = useRouter();
	const [code, setCode] = useState<number>();
  const [error, setError] = useState<"default" | "error">("default");

  const handleChange = (event: Event) => {
    const input = event.target.value;
    const numberInput = Number(input);
    numberInput === 0 ? setCode(undefined) : setCode(numberInput);
  };

  const handleClick = () => {
    if (code && code >= 1000) {
      setError("default");
      router.push(`/thematiques?code=${code}`);
    } else setError("error");
  }
  
  return (
    <>
      <Container py="3w">
        <div className={styles.collectiviteWrapper}>
          <h5>Quelle collectivité représentez-vous ?</h5>
          <p>
            Cette information nous aidera à vous apporter les informations pertinentes pour votre territoire
          </p>
          <div>
            <Input
              addon={
                <Button 
                  onClick={handleClick}
                > Continuer</Button>
              }
              label="Code SIREN de votre EPCI *"
              nativeInputProps={{
                placeholder: '200069193',
                value: code,
                type: 'number',
                onChange: handleChange,
                pattern: "\d{10,}",
                required: true
              }}
              state={error}
              stateRelatedMessage="Votre code n'est pas au bon format"
            />
          </div>
        </div> 
      </Container>
    </>
  )
}

export default CollectiviteComp;


