DROP DATABASE IF EXISTS burgers_db;

CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL auto_increment PRIMARY KEY,
    burger_name VARCHAR(30),
    devoured BOOLEAN
);