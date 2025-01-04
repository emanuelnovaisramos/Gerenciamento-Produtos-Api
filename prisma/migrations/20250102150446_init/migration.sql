/*
  Warnings:

  - You are about to drop the `Produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Produtos";

-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
