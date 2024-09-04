import db from "@/prisma/client";
import bcrypt from "bcrypt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { userId: string } },
) {
  const body = await request.json();

  const user = await db.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  if (!user) {
    return NextResponse.json("User not found", { status: 404 });
  }

  const { password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const updatedUser = await db.user.update({
    where: {
      id: params.userId,
    },
    data: {
      password: hashedPassword,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}
