import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
import LoginForm from "./form";

export default async function SignIn() {
  const session = await getServerSession();

  // if (session) {
  //   redirect("/ressources");
  // }
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-[600px]">
        <LoginForm />
      </div>
    </section>
  )
}
