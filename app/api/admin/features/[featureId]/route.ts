import db from "@/prisma/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { featureId: string } }
) {
  try {
    const body = await request.json();

    const feature = await db.feature.findUnique({
      where: {
        id: params.featureId,
      },
    });

    if (!feature) {
      return NextResponse.json("Feature not found", { status: 404 });
    }

    const updatedFeature = await db.feature.update({
      where: {
        id: params.featureId,
      },
      data: body,
    });

    return NextResponse.json(updatedFeature, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Something went wrong while updating the feature: " + error,
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { featureId: string } }
) {
  try {
    const feature = await db.feature.findUnique({
      where: {
        id: params.featureId,
      },
    });

    if (!feature) {
      return NextResponse.json("Feature not found", { status: 404 });
    }

    // Now delete the feature
    const deletedFeature = await db.feature.delete({
      where: {
        id: params.featureId,
      },
    });

    return NextResponse.json(deletedFeature, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Something went wrong while deleting the feature: " + error,
      { status: 400 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { featureId: string } }
) {
  try {
    if (!params.featureId) {
      return new NextResponse("Feature ID is required", { status: 400 });
    }

    const feature = await db.feature.findUnique({
      where: {
        id: params.featureId,
      },
    });

    if (!feature) {
      return new NextResponse("Feature not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(feature), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Something went wrong while fetching the feature: " + error,
      { status: 400 }
    );
  }
}
