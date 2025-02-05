-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "inputData" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
