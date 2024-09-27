"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    try {
      const response: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!response?.error) {
        router.push("/ressources");
        router.refresh();
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Login Successful", response);
    } catch (error: any) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="p-4 md:p-16 border-[1.5px] rounded-lg border-gray-300 flex flex-col items-center justify-center gap-y-6"
      >
        <label className="border-solid">
          Username
          <input name="username" type="text"/>
        </label>
        <label className="border-solid">
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign in</button>
        <button onClick={() => signOut()}>Sign out</button>
      </form>
    </div>
  );
}
