import { authOptions } from "@/lib/auth";
import { client } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userPayment = await client.payment.findFirst({
      where: {
        userId: session.user.id,
      },
      select: {
        status: true,
      },
    });

    if (!userPayment) {
      return NextResponse.json(
        { message: "No subscription found! user is in free plan!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message: "Subscription status retrieved successfully",
        status: userPayment.status,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in get-pro-user route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
