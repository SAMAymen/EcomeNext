import db from "@/prisma/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { specificationId: string } }
) {
  try {
    const body = await request.json();

    const specification = await db.specification.findUnique({
      where: {
        id: params.specificationId,
      },
    });

    if (!specification) {
      return NextResponse.json("Specification not found", { status: 404 });
    }

    const updatedSpecification = await db.specification.update({
      where: {
        id: params.specificationId,
      },
      data: body,
    });

    return NextResponse.json(updatedSpecification, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Something went wrong while updating the specification: " + error,
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { specificationId: string } }
) {
  try {
    const specification = await db.specification.findUnique({
      where: {
        id: params.specificationId,
      },
    });

    if (!specification) {
      return NextResponse.json("Specification not found", { status: 404 });
    }

    // Now delete the specification
    const deletedSpecification = await db.specification.delete({
      where: {
        id: params.specificationId,
      },
    });

    return NextResponse.json(deletedSpecification, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Something went wrong while deleting the specification: " + error,
      { status: 400 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { specificationId: string } }
) {
  try {
    if (!params.specificationId) {
      return new NextResponse("Specification ID is required", { status: 400 });
    }

    const specification = await db.specification.findUnique({
      where: {
        id: params.specificationId,
      },
    });

    if (!specification) {
      return new NextResponse("Specification not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(specification), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Something went wrong while fetching the specification: " + error,
      { status: 400 }
    );
  }
}
