import { ProductSchema } from "@/app/validation";
import db from "@/prisma/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = ProductSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error, { status: 400 });
    }

    console.log("Creating product with body:", body);

    const product = await db.product.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      `Something went wrong while creating the product: ${error}`,
      { status: 400 }
    );
  }
}

export async function GET() {
  const products = await db.product.findMany();
  return NextResponse.json(products);
}
