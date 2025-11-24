'use server';

import { prisma } from '@/lib/queries/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const users = await prisma.users.findMany();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
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
