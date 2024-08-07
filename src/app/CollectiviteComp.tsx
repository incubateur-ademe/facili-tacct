"use client";

import { SearchBarComp } from "@/components/SearchBar";

import { Container } from "../dsfr/server";
import styles from "./root.module.scss";

// type Event = React.ChangeEvent<HTMLInputElement>;

export const CollectiviteComp = () => {
  return (
    <>
      <Container py="3w">
        <div className={styles.collectiviteWrapper}>
          <h5>Quelle collectivité représentez-vous ?</h5>
          <p>Cette information nous aidera à vous apporter les informations pertinentes pour votre territoire</p>
          <div>
            <SearchBarComp />
            {/* <Input
              addon={<Button onClick={handleClick}> Continuer</Button>}
              label="Code SIREN de votre EPCI *"
              nativeInputProps={{
                placeholder: "200069193",
                value: code,
                type: "number",
                onChange: handleChange,
                pattern: "d{10,}",
                required: true,
              }}
              state={error}
              stateRelatedMessage="Votre code n'est pas au bon format"
            /> */}
          </div>
        </div>
      </Container>
    </>
  );
};
