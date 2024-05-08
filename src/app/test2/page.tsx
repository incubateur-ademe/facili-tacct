import db from '../../modules/db';
import RadioButton from '../../dsfr/base/client/RadioButtons';

export default function Test2() {

  const appendData = async (formData: FormData) => {
    "use server";
    const newQuestionHistory = formData.get("radio");

    console.log('formData', formData)
    console.log('newQuestionHistory', newQuestionHistory)

    // Get the current value in question_history
    const { question_history } = await db.themes.findUniqueOrThrow({
      where: { id: 6 },
      select: { question_history: true },
    });

    // Append the current value with our new question_history
    await db.themes.update({
      where: { id: 6 },
      data: { question_history: `${question_history} ${newQuestionHistory}` },
    });
  }


  return (
    <div style={{margin: "2rem"}}>
      <h1>UPDATE Request append data in question_history (App Router)</h1>
      <form action={appendData}>
        {/* <RadioButton/> */}
        <div>
            <button 
              type="submit"
              style={{backgroundColor:"orange"}}
              >
                Submit
            </button>
        </div>
      </form>
    </div>
  )
}