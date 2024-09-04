import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  // try {
  //   const { searchParams } = new URL(request.url);
  //   const access_token = searchParams.get("access_token");
  //   const pixel_id = searchParams.get("pixel_id");

  //   if (!access_token || !pixel_id) {
  //     return new NextResponse(
  //       JSON.stringify({ error: "Missing access_token or pixel_id" }),
  //       { status: 400, headers: { "Content-Type": "application/json" } }
  //     );
  //   }

  //   const endDate = new Date().toISOString().split("T")[0];
  //   const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  //     .toISOString()
  //     .split("T")[0];

  //   const response = await axios.get(
  //     `https://graph.facebook.com/v18.0/${pixel_id}/stats`,
  //     {
  //       params: {
  //         access_token,
  //         start_date: startDate,
  //         end_date: endDate,
  //         event_names: '["PageView"]',
  //         aggregation: "day",
  //       },
  //     }
  //   );

  //   return new NextResponse(JSON.stringify(response.data), {
  //     status: 200,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // } catch (error) {
  //   console.error("Error fetching Facebook insights:", error);

  //   if (axios.isAxiosError(error)) {
  //     const errorMessage =
  //       error.response?.data?.error?.message || error.message;
  //     const errorCode = error.response?.status || 500;
  //     return new NextResponse(
  //       JSON.stringify({ error: `Facebook API Error: ${errorMessage}` }),
  //       { status: errorCode, headers: { "Content-Type": "application/json" } }
  //     );
  //   }

  //   return new NextResponse(
  //     JSON.stringify({ error: "An unexpected error occurred" }),
  //     { status: 500, headers: { "Content-Type": "application/json" } }
  //   );
  // }

  return NextResponse.json("Hello World!", { status: 200 });
}
