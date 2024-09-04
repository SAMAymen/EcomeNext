import db from "@/prisma/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const user = await db.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  if (!user) {
    return NextResponse.json("User not found", { status: 200 });
  }

  return NextResponse.json(user, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { userId: string } }
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

  const { image, username, email } = body;

  const updatedUser = await db.user.update({
    where: {
      id: params.userId,
    },
    data: {
      username: username,
      image: image,
      email: email,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}
