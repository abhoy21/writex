import run from "@/app/api/gpt";
import { authOptions } from "@/lib/auth";
import { client } from "@/lib/prisma";
import { contentSchema } from "@/types/type";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      return;
    }
    const body = await req.json();

    const validation = contentSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { topic, outline, template, category, aiPrompt } = validation.data;

    const aiResponse = await run({
      topic,
      outline,
      template,
      category,
      aiPrompt,
    });

    await client.content.create({
      data: {
        topic,
        prompt: aiPrompt,
        template,
        response: aiResponse,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return NextResponse.json(
      { message: "Content created successfully", aiResponse },
      { status: 200 }
    );
  } catch (error) {
    console.error("Content creation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
