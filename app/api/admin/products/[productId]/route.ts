import db from "@/prisma/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ProductSchema } from "@/app/validation";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const body = await request.json();
    const validation = ProductSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const product = await db.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        features: true,
        specifications: true,
      },
    });

    if (!product) {
      return NextResponse.json("Product not found", { status: 404 });
    }

    const updatedProduct = await db.product.update({
      where: {
        id: params.productId,
      },
      include: {
        features: true,
        specifications: true,
      },
      data: body,
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Something went wrong while updating the product: " + error,
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const product = await db.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        features: true,
        specifications: true,
      },
    });

    if (!product) {
      return NextResponse.json("Product not found", { status: 404 });
    }

    // Now delete the product
    const deletedProduct = await db.product.delete({
      where: {
        id: params.productId,
      },
      include: {
        features: true,
        specifications: true,
      },
    });

    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Something went wrong while deleting the product: " + error,
      { status: 400 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    if (!params.productId) {
      return new NextResponse("Product ID is required", { status: 400 });
    }

    const product = await db.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        features: true,
        specifications: true,
      },
    });

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Something went wrong while fetching the product: " + error,
      { status: 400 }
    );
  }
}
