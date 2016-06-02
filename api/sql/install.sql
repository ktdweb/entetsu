-- create databases サーバ名を変更
DROP DATABASE IF EXISTS `ad110xb4ir_assist`;
CREATE DATABASE `ad110xb4ir_assist` CHARACTER SET utf8;

DROP DATABASE IF EXISTS `ad110xb4ir_test`;
CREATE DATABASE `ad110xb4ir_test` CHARACTER SET utf8;

-- for server サーバ名、ユーザ名を環境にあわせて変更すること
GRANT ALL PRIVILEGES ON `ad110xb4ir_assist`.* TO 'assist'@'%' IDENTIFIED BY 'Hee1aing' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON `ad110xb4ir_assist`.* TO 'assist'@'localhost' IDENTIFIED BY 'Hee1aing' WITH GRANT OPTION;

GRANT ALL PRIVILEGES ON `ad110xb4ir_test`.* TO 'assist'@'%' IDENTIFIED BY 'Hee1aing' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON `ad110xb4ir_test`.* TO 'assist'@'localhost' IDENTIFIED BY 'Hee1aing' WITH GRANT OPTION;

-- for vim ユーザassistを作成 サーバ名のみ変更
GRANT ALL PRIVILEGES ON `ad110xb4ir_assist`.* TO 'vim'@'%' IDENTIFIED BY 'vim012' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON `ad110xb4ir_assist`.* TO 'vim'@'localhost' IDENTIFIED BY 'vim012' WITH GRANT OPTION;

GRANT ALL PRIVILEGES ON `ad110xb4ir_test`.* TO 'vim'@'%' IDENTIFIED BY 'vim012' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON `ad110xb4ir_test`.* TO 'vim'@'localhost' IDENTIFIED BY 'vim012' WITH GRANT OPTION;
