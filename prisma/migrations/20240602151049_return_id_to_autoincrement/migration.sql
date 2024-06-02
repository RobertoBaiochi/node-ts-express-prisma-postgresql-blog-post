/*
  Warnings:

  - The primary key for the `comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `postId` column on the `comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_postId_fkey";

-- AlterTable
ALTER TABLE "comment" DROP CONSTRAINT "comment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "postId",
ADD COLUMN     "postId" INTEGER,
ADD CONSTRAINT "comment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "post" DROP CONSTRAINT "post_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "post_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
