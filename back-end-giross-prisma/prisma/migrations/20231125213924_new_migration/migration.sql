/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Cep` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Cep_code_key` ON `Cep`(`code`);
