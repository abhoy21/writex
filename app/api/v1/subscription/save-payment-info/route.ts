import { authOptions } from "@/lib/auth";
import { client } from "@/lib/prisma";
import { paymentSchema } from "@/types/type";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    console.log("body\n", body);
    console.log("body data\n", body.data);
    const validation = paymentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const { subscriptionId, paymentId } = validation.data;

    const payment = await client.payment.create({
      data: {
        userId: session.user.id,
        subId: subscriptionId,
        paymentId: paymentId,
        status: true,
      },
    });

    return NextResponse.json(payment, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
