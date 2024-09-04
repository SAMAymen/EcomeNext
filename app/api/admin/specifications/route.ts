import db from "@/prisma/client";
import { SpecificationSchema } from "@/app/validation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = SpecificationSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error, { status: 400 });
    }

    const specification = await db.specification.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(specification, { status: 200 });
  } catch (error) {
    console.error("Error creating specification:", error);
    return NextResponse.json(
      `Something went wrong while creating the specification: ${error}`,
      { status: 400 }
    );
  }
}

export async function GET() {
  const specifications = await db.specification.findMany();
  return NextResponse.json(specifications);
}
