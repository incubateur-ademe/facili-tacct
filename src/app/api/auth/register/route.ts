import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { PrismaClient as PostgresClient } from "../../../../generated/client";

const prisma = new PostgresClient()

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    console.log({ username, password });
    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.users.create({
      data: {
        username: username,
        password: hashedPassword,
        role: "3",
        email: "test@mail.com",
        created_at: new Date(),
      },
    })
    console.log("User created", newUser);
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
