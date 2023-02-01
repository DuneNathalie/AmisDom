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
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_animaux`));

  INSERT INTO animaux (type, name, gabarit, age, descriptif, image) VALUES
  ("Chat", "Kiki", "moyen", "5", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chat.kiki.jpg"),
  ("Chat", "Neige", "moyen", "10", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chat.neige.velour.jpg"),
  ("Chat", "Perle", "moyen", "7", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chat.perle.jpg"),
  ("Chat", "Ronron", "moyen", "2", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chat.ronron.jpg"),
  ("Chien", "Charmeur", "grand", "8", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chien.charmeur.jpg"),
  ("Chien", "Filou", "grand", "3", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chien.filou.jpg"),
  ("Chien", "Pirouette", "grand", "6", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chien.pirouette.jpg"),
  ("Chien", "Velour", "grand", "9", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chien.velour.jpg"),
  ("Hamster", "Broco", "mini", "5", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/hamster.broco.jpg"),
  ("Hamster", "Chaussette", "mini", "4", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/hamster.chaussette.jpg"),
  ("Hamster", "Gourmand", "mini", "3", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/hamster.gourmand.jpg"),
  ("Hamster", "Twix", "mini", "8", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/hamster.twix.jpg"),
  ("Lapin", "Belier", "petit", "1", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/lapin.belier.jpg"),
  ("Lapin", "Calin", "petit", "4", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/lapin.calin.jpg"),
  ("Lapin", "Panpan", "petit", "2", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/lapin.panpan.jpg"),
  ("Lapin", "tic", "petit", "1", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/lapin.tic.jpg");
