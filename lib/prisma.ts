import { PrismaClient } from "@prisma/client";

// Modify the type to indicate prisma might not exist
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const client = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = client;
}
