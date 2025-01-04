-- CreateTable
CREATE TABLE "Produtos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);
