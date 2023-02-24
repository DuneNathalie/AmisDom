DROP DATABASE AmisDom;

CREATE DATABASE AmisDom;

USE AmisDom;

CREATE TABLE IF NOT EXISTS `AmisDom`.`company` (
  `id_company` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `address` VARCHAR(155) NULL,
  PRIMARY KEY (`id_company`));

CREATE TABLE IF NOT EXISTS `AmisDom`.`user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `mail` VARCHAR(225) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_user`));

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
  ("Hamster", "Broco", "femelle", "5", " Broco est un petit hamster trés gourmant qui aime particulérement les brocolis. Mais il ne dira pas non aux carotte, à de la salade ou tout autre légumes qu'il pourras se mettre sous ses deux petites dents", "/assets/hamster.broco.jpg"),
  ("Chat", "Kiki", "mâle", "5", "Que dire de Kiki mise à par qu'il est vraiment kiki ;-) un chat trés gentil et pépére qui adore s'assoire étalé sur ses grosses patounnes arriére. Il a son petit côté curieux à pouvoir passer des heures à contempler par la fenétre", "/assets/chat.kiki.jpg"),
  ("Hamster", "Gourmand", "mâle", "3", "Tout est dit rien que par son prénom! Gourmand est un vrai petit gourmand qui ne te dira jamais non à la moindre petite ou grosse gourmandise...Mais attention à bien lui faire pratiquer de l'activité réguliérement", "/assets/hamster.gourmand.jpg"),
  ("Chat", "Ronron", "mâle", "2", "Ronron adore les câlins. Un vrai petit compagnon qui ne demande qu'à te câliner encore et encore.", "/assets/chat.ronron.jpg"),
  ("Chien", "Charmeur", "mâle", "8", "Rien qu'a son petit regard tu auras compris qu'il porte bien son nom. Charmeur est un chien adorable plein d'amour est de tendresse. Il arriverait à te faire dit oui à toutes ses demandes avec son regard ravageur.", "/assets/chien.charmeur.jpg"),
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

INSERT INTO user (mail, password) VALUES
("nathydune@gmail.com", 1234);