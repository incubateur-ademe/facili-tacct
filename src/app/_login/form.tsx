'use client';

import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    try {
      const response = await signIn('credentials', {
        username,
        password,
        redirect: false
      });
      if (!response?.error) {
        router.push('/api/ressources');
        router.refresh();
      }
      if (response && !response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="p-4 md:p-16 border-[1.5px] rounded-lg border-gray-300 flex flex-col items-center justify-center gap-y-6"
    >
      <label className="flex gap-8">
        Username
        <input name="username" type="text" className="bg-slate-100" />
      </label>
      <label className="flex gap-8">
        Password
        <input name="password" type="password" className="bg-slate-100" />
      </label>
      <button type="submit">Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </form>
  );
}
