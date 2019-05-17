DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE Listing (
  id INT AUTO_INCREMENT UNIQUE
);

CREATE TABLE Messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(400),
  user_id INT,
  username VARCHAR(30),
  profile_picture TEXT,
  listing INT,
  date DATE,
  accuracy INT,
  communication INT,
  cleanliness INT,
  check_in INT,
  value INT,
  location INT,
  Foreign Key(listing) REFERENCES Listing(id)
);




-- INSERT INTO Messages(id, message, user_id, username, profile_picture, listing, date, accuracy, communication, cleanliness, check_in, 
--  value, location) VALUES(1, 'HEllog', 1, 'skux angels', 'picture', 1, '2008-7-04', 1, 2, 3, 4, 5, 6);
/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/