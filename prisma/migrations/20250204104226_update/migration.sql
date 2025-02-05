/*
  Warnings:

  - You are about to drop the column `amount` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentId` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `planId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "amount",
DROP COLUMN "isActive",
DROP COLUMN "paymentId",
ADD COLUMN     "planId" TEXT NOT NULL,
ADD COLUMN     "subId" TEXT NOT NULL;
