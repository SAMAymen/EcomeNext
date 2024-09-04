import db from "@/prisma/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    const body = await request.json();

    const order = await db.order.findUnique({
      where: {
        id: params.orderId,
      },
    });

    if (!order) {
      return NextResponse.json("Order not found", { status: 404 });
    }

    const updatedOrder = await db.order.update({
      where: {
        id: params.orderId,
      },
      data: body,
    });

    return NextResponse.json(updatedOrder, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Something went wrong while updating the order: " + error,
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    const order = await db.order.findUnique({
      where: {
        id: params.orderId,
      },
    });

    if (!order) {
      return NextResponse.json("Order not found", { status: 404 });
    }

    // Now delete the order
    const deletedOrder = await db.order.delete({
      where: {
        id: params.orderId,
      },
    });

    return NextResponse.json(deletedOrder, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Something went wrong while deleting the order: " + error,
      { status: 400 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    if (!params.orderId) {
      return new NextResponse("Order ID is required", { status: 400 });
    }

    const order = await db.order.findUnique({
      where: {
        id: params.orderId,
      },
    });

    if (!order) {
      return new NextResponse("Order not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Something went wrong while fetching the order: " + error,
      { status: 400 }
    );
  }
}
