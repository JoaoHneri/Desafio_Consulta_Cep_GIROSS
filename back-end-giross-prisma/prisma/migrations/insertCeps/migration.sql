
use cep_giross;

CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE `Cep` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE UNIQUE INDEX `Cep_code_key` ON `Cep`(`code`);


-- CreateTable
CREATE TABLE `Consulta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `dataHora` DATETIME(3) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `raio` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- AlterTable
ALTER TABLE `consulta` MODIFY `dataHora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);



INSERT INTO Cep (code, latitude, longitude) VALUES ('44091755', 57.775, -102.419), ('44091756', 57.780, -102.420), ('44091757', 57.785, -102.425), ('44091758', 57.790, -102.430), ('44091759', 57.795, -102.435), ('44091760', 57.800, -102.440), ('44091761', 57.805, -102.445), ('44091762', 57.810, -102.450), ('44091763', 57.815, -102.455), ('44091764', 57.820, -102.460), ('44091765', 57.825, -102.465);