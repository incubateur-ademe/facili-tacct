import db from '../../modules/db';

export default function Test() {

  const addPost = async (formData: FormData) => {
    "use server";
    const description = formData.get("description");
    await db.post.create({
      data : {
        description: description as string
      }
    },
  )}

  return (
    <div className=" flex flex-col justify-center items-center w-full p-8 ">
      <h1 className=" w-full text-center m-4 font-semibold text-lg ">POST Request (App Router)</h1>
      <form action={addPost} className="flex w-full flex-col justify-center items-center ">
        <div className=" flex w-1/2 justify-center items-center gap-4 ">
          <input
            type="text"
            name="description"
            placeholder="Enter the description"
            className=" border p-2 px-4 rounded outline-none "
          />
          <input
            type="number"
            name="id"
            placeholder="Enter id"
            className=" border p-2 px-4 rounded outline-none "
          />
          <button 
          type="submit" 
          className=" border-blue-500 bg-blue-500 text-white p-2 px-4 rounded-md " 
          >Submit</button>
        </div>
      </form>
    </div>
  )
}