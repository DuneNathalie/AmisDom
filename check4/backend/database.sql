DROP DATABASE AmisDom;

CREATE DATABASE AmisDom;

USE AmisDom;

CREATE TABLE IF NOT EXISTS `AmisDom`.`company` (
  `id_amisDom` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `address` VARCHAR(155) NULL,
  PRIMARY KEY (`id_amisDom`));

CREATE TABLE IF NOT EXISTS `AmisDom`.`animaux` (
  `id_animaux` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `gabarit` VARCHAR(45) NULL,
  `age` INT NULL,
  `descriptif` VARCHAR(445) NULL,
  `id_company` INT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_animaux`, `id_company`));