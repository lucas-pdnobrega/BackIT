/*
  Warnings:

  - Added the required column `filepath` to the `Archive` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Archive" ADD COLUMN     "filepath" TEXT NOT NULL;
