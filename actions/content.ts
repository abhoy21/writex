"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth/auth";
import { revalidatePath } from "next/cache";

export async function getUserContent() {
  const session = await auth();
  if (!session || !session.user?.id) {
    return [];
  }

  try {
    const content = await prisma.content.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return content;
  } catch (error) {
    console.error("Error fetching user content:", error);
    return [];
  }
}

export async function deleteContent(id: string) {
  const session = await auth();
  if (!session || !session.user?.id) {
    throw new Error("Unauthorized");
  }

  try {
    // Verify ownership before deleting
    const content = await prisma.content.findUnique({
      where: { id },
    });

    if (!content || content.userId !== session.user.id) {
      throw new Error("Unauthorized or content not found");
    }

    await prisma.content.delete({
      where: { id },
    });

    revalidatePath("/history");
    return { success: true };
  } catch (error) {
    console.error("Error deleting content:", error);
    throw error;
  }
}

export async function getContentById(id: string) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return null;
  }

  try {
    const content = await prisma.content.findUnique({
      where: {
        id: id,
      },
    });

    if (!content || content.userId !== session.user.id) {
      return null;
    }

    return content;
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
}

export async function updateContent(id: string, response: string) {
  const session = await auth();
  if (!session || !session.user?.id) {
    throw new Error("Unauthorized");
  }

  try {
    const content = await prisma.content.findUnique({
      where: { id },
    });

    if (!content || content.userId !== session.user.id) {
      throw new Error("Unauthorized or content not found");
    }

    await prisma.content.update({
      where: { id },
      data: { response },
    });

    revalidatePath("/history");
    return { success: true };
  } catch (error) {
    console.error("Error updating content:", error);
    throw error;
  }
}
