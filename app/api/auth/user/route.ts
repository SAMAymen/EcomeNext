// Post method to create a user

import { CreateUserSchema } from "@/app/validation";
import db from "@/prisma/client";
import bcrypt from "bcrypt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = CreateUserSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 404 });
    }

    const { email, password, username } = body;

    // Check if the user exists
    const existingUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Account already exists" },
        { status: 402 },
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await db.user.create({
      data: {
        password: hashedPassword,
        username,
        email,
      },
    });

    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "We're sorry, but an error occurred while creating the user" },
      { status: 400 },
    );
  }
}
