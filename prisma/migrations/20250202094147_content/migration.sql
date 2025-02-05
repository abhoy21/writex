/*
  Warnings:

  - You are about to drop the column `inputData` on the `Content` table. All the data in the column will be lost.
  - Added the required column `prompt` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Content" DROP COLUMN "inputData",
ADD COLUMN     "prompt" TEXT NOT NULL,
ADD COLUMN     "topic" TEXT NOT NULL;
