import { authOptions } from "@/lib/auth";
import { client } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      return;
    }
    const contents = await client.content.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (contents.length === 0) {
      return NextResponse.json(
        { message: "No content found" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Content fetched successfully", contents },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", errorMessage: error },
      { status: 500 }
    );
  }
}
