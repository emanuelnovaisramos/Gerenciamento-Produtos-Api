/*
  Warnings:

  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "produtos";

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
