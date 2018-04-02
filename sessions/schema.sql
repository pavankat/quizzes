DROP DATABASE IF EXISTS hobbies_db;
CREATE DATABASE hobbies_db;
USE hobbies_db;

CREATE TABLE hobbies
(
	id int NOT NULL AUTO_INCREMENT,
	hobby varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE foods
(
	id int NOT NULL AUTO_INCREMENT,
	food varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

