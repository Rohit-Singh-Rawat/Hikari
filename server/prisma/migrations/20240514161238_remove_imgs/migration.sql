/*
  Warnings:

  - You are about to drop the column `postImg` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "postImg";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar";
