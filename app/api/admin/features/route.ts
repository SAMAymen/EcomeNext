import db from "@/prisma/client";
import { FeatureSchema } from "@/app/validation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = FeatureSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error, { status: 400 });
    }

    const feature = await db.feature.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(feature, { status: 200 });
  } catch (error) {
    console.error("Error creating feature:", error);
    return NextResponse.json(
      `Something went wrong while creating the feature: ${error}`,
      { status: 400 }
    );
  }
}

export async function GET() {
  const features = await db.feature.findMany();
  return NextResponse.json(features);
}
