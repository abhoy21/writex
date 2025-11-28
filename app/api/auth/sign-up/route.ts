"use server"


import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/types/types";
import { hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    const validation = signupSchema.safeParse(body.data);
    console.log(validation.data);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { username, email, password } = validation.data;

    const hashedPassword = await hash(password, SALT_ROUNDS);

    const user = await prisma.user.upsert({
      where: {
        email: email,
        username: username,
      },
      create: {
        email: email,
        username: username,
        password: hashedPassword,
      },
      update: {
        email: email,
        username: username,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", errorMessage: error },
      { status: 500 }
    );
  }
}
