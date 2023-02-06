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
  `sexe` VARCHAR(45) NULL,
  `age` INT NULL,
  `descriptif` VARCHAR(445) NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_animaux`));

  INSERT INTO animaux (type, name, sexe, age, descriptif, image) VALUES
  ("Hamster", "Broco", "femelle", "5", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/hamster.broco.jpg"),
  ("Chat", "Kiki", "mâle", "5", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chat.kiki.jpg"),
  ("Hamster", "Gourmand", "mâle", "3", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/hamster.gourmand.jpg"),
  ("Chat", "Ronron", "mâle", "2", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chat.ronron.jpg"),
  ("Chien", "Charmeur", "mâle", "8", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chien.charmeur.jpg"),
  ("Lapin", "Belier", "femelle", "1", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/lapin.belier.jpg"),
  ("Chien", "Pirouette", "mâle", "6", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chien.pirouette.jpg"),
  ("Hamster", "Chaussette", "femelle", "4", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/hamster.chaussette.jpg"),
  ("Hamster", "Twix", "femelle", "8", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/hamster.twix.jpg"),
  ("Lapin", "Calin", "mâle", "4", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/lapin.calin.jpg"),
  ("Chien", "Velours", "mâle", "9", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chien.velour.jpg"),
  ("Chat", "Perle", "femelle", "7", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chat.perle.jpg"),
  ("Chien", "Filou", "mâle", "3", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chien.filou.jpg"),
  ("Lapin", "Panpan", "mâle", "2", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/lapin.panpan.jpg"),
  ("Chien", "Columbo", "mâle", "2", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chien.Columbo.jpg"),
  ("Chat", "Kaï", "mâle", "2", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chat.Kaï.jpg"),
  ("Chat", "Neige", "femelle", "10", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/chat.neige.jpg"),
  ("Lapin", "tic", "mâle", "1", "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "/assets/lapin.tic.jpg");
