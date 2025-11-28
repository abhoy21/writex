import { prisma } from "@/lib/prisma";

export async function getUserContent(userId: string) {
  try {
    const content = await prisma.content.findMany({
      where: {
        userId: userId,
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

export async function deleteContent(id: string, userId: string) {
  try {
    // Verify ownership before deleting
    const content = await prisma.content.findUnique({
      where: { id },
    });

    if (!content || content.userId !== userId) {
      throw new Error("Unauthorized or content not found");
    }

    await prisma.content.delete({
      where: { id },
    });

    return { success: true };
  } catch (error) {
    console.error("Error deleting content:", error);
    throw error;
  }
}
