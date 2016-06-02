-- サーバ名を環境にあわせ変更すること
USE `ad110xb4ir_assist`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `users` (
  `id`,
  `name`,
  `email`
) VALUES
(1, 'taro', 'taro@example.com'),
(2, 'hanako', 'hanako@example.com');


-- サーバ名を環境にあわせ変更すること
USE `ad110xb4ir_test`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`id`)
);
