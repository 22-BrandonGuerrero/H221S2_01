/* Creamos la base de datos */
DROP DATABASE IF EXISTS Colectivo_Sur_Real;
CREATE DATABASE Colectivo_Sur_Real;
USE Colectivo_Sur_Real;

/* Creamos la tabla CLIENTE*/
DROP TABLE IF EXISTS Logeo;
CREATE TABLE Logeo 
(
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL
);


INSERT INTO Logeo 
(username, password) 
VALUES
('amir.arbieto@vallegrande.edu.pe', 'vg2022');

SELECT * FROM Logeo;