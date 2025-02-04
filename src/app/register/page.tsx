import { getServerSession } from 'next-auth';

import FormPage from './form';

export default async function RegisterPage() {
  const session = await getServerSession();
  console.log({ session });
  // if (session) {
  //   redirect("/ressources");
  // }

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-[600px]">
        <FormPage />
      </div>
    </section>
  );
}
