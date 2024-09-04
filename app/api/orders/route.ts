import { recipients } from "@/app/types/product";
import { OrderSchema } from "@/app/validation";
import db from "@/prisma/client";
import { sendEmail } from "@/utils/mail.utils";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = OrderSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error, { status: 400 });
    }

    const orderData = {
      ...body,
      totalPrice: parseFloat(body.totalPrice),
    };

    const order = await db.order.create({
      data: orderData,
    });

    // const sender = {
    //   name: "customer from next lite online",
    //   address: "customer@example.com",
    // };

    //send email to the admin
    //   await sendEmail({
    //     sender,
    //     recipients,
    //     subject:
    //       "💵 New order from : " +
    //       body.customerName +
    //       " and he pays: " +
    //       body.totalPrice +
    //       " dhs 💵" +
    //       body.paymentMethod,
    //     message: `
    //   <html>
    //     <body>
    //       <h1>🎉 New order from ${body.customerName} 🎉</h1>
    //       <h2>📦 Order details:</h2>
    //       <ul>
    //         <li><strong>Quantity:</strong> ${body.quantity}</li>
    //         <li><strong>Total price:</strong> ${body.totalPrice} dhs</li>
    //         <li><strong>Customer name:</strong> ${body.customerName}</li>
    //         <li><strong>Customer phone:</strong> ${body.customerPhone}</li>
    //         <li><strong>Shipping address:</strong> ${body.shippingAddress}</li>
    //       </ul>
    //     </body>
    //   </html>
    // `,
    //   });

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      `Something went wrong while creating the order: ${error}`,
      { status: 400 }
    );
  }
}
