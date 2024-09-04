import { recipients } from "@/app/types/product";
import { sendEmail } from "@/utils/mail.utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const sender = {
      name: body.email,
      address: body.email,
    };

    const result = await sendEmail({
      sender,
      recipients,
      subject: body.subject,
      message: body.message,
    });

    // Ensure result is JSON-serializable
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 400 }
    );
  }
}
