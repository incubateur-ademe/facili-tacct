import { Stepper } from "@codegouvfr/react-dsfr/Stepper";

import db from "../../modules/db";

export default async function Test() {
  const addData = async (formData: FormData) => {
    "use server";
    const radio = formData.get("radio");
    const theme = formData.get("theme");

    await db.themes.create({
      data: {
        theme: theme as string,
        question_history: radio as string,
      },
    });
  };

  return (
    <div style={{ margin: "2rem" }}>
      <Stepper currentStep={1} stepCount={3} title="Titre de l’étape en cours" style={{ backgroundColor: "green" }} />
      <h1>POST Request (App Router)</h1>
      <form action={addData}>
        {/* <RadioButton/> */}
        <div>
          <input
            type="text"
            name="theme"
            placeholder="Enter the theme"
            style={{ border: "solid green 1px", margin: "1rem" }}
          />
          <div>
            <button type="submit" style={{ backgroundColor: "cyan" }}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
