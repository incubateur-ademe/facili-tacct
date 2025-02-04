'use server';

import { NextResponse } from 'next/server';
import { PrismaClient as PostgresClient } from '../../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GET = async () => {
  try {
    const users = await PrismaPostgres.users.findMany();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

// export const POST = async () => {
//   try {
//     const user = await PrismaPostgres.users.create({
//       data: {
//         email: "allo@mail.com",
//         password: "moule",
//         username: "moule",
//         created_at: new Date(),
//         role: "1"
//       }
//     });
//     return new NextResponse(JSON.stringify({ message: "user created", user }), { status: 200 });
//   } catch (error) {
//     console.error(error);
//     await PrismaPostgres.$disconnect();
//     process.exit(1);
//   }
// }
