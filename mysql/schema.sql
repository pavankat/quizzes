DROP DATABASE IF EXISTS hobbies_db;
CREATE DATABASE hobbies_db;
USE hobbies_db;

CREATE TABLE hobbies
(
	id int NOT NULL AUTO_INCREMENT,
	hobby varchar(255) NOT NULL,
	PRIMARY KEY (id)
);