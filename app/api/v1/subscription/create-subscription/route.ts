import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const rzrpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const response = await rzrpay.subscriptions.create({
      plan_id: process.env.RAZORPAY_PLAN_ID!,
      customer_notify: 1,
      quantity: 1,
      total_count: 1,
      addons: [],
      notes: {
        userId: session.user.id,
        createdAt: new Date().toISOString(),
      },
    });

    console.log("Full Razorpay response:", JSON.stringify(response, null, 2));

    return NextResponse.json(
      { message: "Subscription created successfully", response },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", errorMessage: error },
      { status: 500 }
    );
  }
}
