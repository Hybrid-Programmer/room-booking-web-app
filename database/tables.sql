START TRANSACTION;

CREATE DATABASE IF NOT EXISTS master;

CREATE TABLE `master`.`admin` (
  `adminID` int NOT NULL AUTO_INCREMENT,
  `profile` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `middlename` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_on` varchar(20) NOT NULL,
   PRIMARY KEY  (`adminID`)
) ENGINE = MyISAM;

INSERT INTO `master`.`admin` (profile, firstname, middlename, lastname, contact, email, password, created_on) 
VALUES  ('background.jpg', 'Bethel', 'Chukwuemeka', 'Onwuka', '+234 903 218 2918', 'bethelonwuka19@gmail.com', 'admin@masterweb', 'Jul 19, 2022');


CREATE TABLE `master`.`male_users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `membership` varchar(100) NOT NULL,
  `profile` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `middlename` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `marital_status` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `parish` varchar(255) NOT NULL,
  `academic_status` varchar(100) NOT NULL,
  `school_attended` varchar(255) NOT NULL,
  `level` varchar(100) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `registered_on` varchar(20) NOT NULL,
  `booked_roomID` int NOT NULL,
   PRIMARY KEY  (`userID`),
   FOREIGN KEY (`booked_roomID`) REFERENCES `male_rooms` (`roomID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = MyISAM;


CREATE TABLE `master`.`male_rooms` (
  `roomID` int NOT NULL AUTO_INCREMENT,
  `status` varchar(100) NOT NULL,
  `booked_by` varchar(255) NOT NULL,
  `booking_date` varchar(255) NOT NULL,
   PRIMARY KEY  (`roomID`)
) ENGINE = MyISAM;

INSERT INTO `master`.`male_rooms` (roomID, status, booked_by, booking_date) VALUES
 (1, 'free', 'null', 'null'),
 (2, 'free', 'null', 'null'),
 (3, 'free', 'null', 'null'),
 (4, 'free', 'null', 'null'),
 (5, 'free', 'null', 'null'),
 (6, 'free', 'null', 'null'),
 (7, 'free', 'null', 'null'),
 (8, 'free', 'null', 'null'),
 (9, 'free', 'null', 'null'),
 (10, 'free', 'null', 'null'),
 (11, 'free', 'null', 'null'),
 (12, 'free', 'null', 'null'),
 (13, 'free', 'null', 'null'),
 (14, 'free', 'null', 'null'),
 (15, 'free', 'null', 'null'),
 (16, 'free', 'null', 'null'),
 (17, 'free', 'null', 'null'),
 (18, 'free', 'null', 'null'),
 (19, 'free', 'null', 'null'),
 (20, 'free', 'null', 'null'),
 (21, 'free', 'null', 'null'),
 (22, 'free', 'null', 'null'),
 (23, 'free', 'null', 'null'),
 (24, 'free', 'null', 'null'),
 (25, 'free', 'null', 'null'),
 (26, 'free', 'null', 'null'),
 (27, 'free', 'null', 'null'),
 (28, 'free', 'null', 'null'),
 (29, 'free', 'null', 'null'),
 (30, 'free', 'null', 'null');


CREATE TABLE `master`.`female_users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `membership` varchar(100) NOT NULL,
  `profile` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `middlename` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `marital_status` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `parish` varchar(255) NOT NULL,
  `academic_status` varchar(100) NOT NULL,
  `school_attended` varchar(255) NOT NULL,
  `level` varchar(100) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `registered_on` varchar(20) NOT NULL,
  `booked_roomID` int NOT NULL,
   PRIMARY KEY  (`userID`),
   FOREIGN KEY (`booked_roomID`) REFERENCES `female_rooms` (`roomID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = MyISAM;


CREATE TABLE `master`.`female_rooms` (
  `roomID` int NOT NULL AUTO_INCREMENT,
  `status` varchar(100) NOT NULL,
  `booked_by` varchar(255) NOT NULL,
  `booking_date` varchar(255) NOT NULL,
   PRIMARY KEY  (`roomID`)
) ENGINE = MyISAM;


INSERT INTO `master`.`female_rooms` (roomID, status, booked_by, booking_date) VALUES
 (1, 'free', 'null', 'null'),
 (2, 'free', 'null', 'null'),
 (3, 'free', 'null', 'null'),
 (4, 'free', 'null', 'null'),
 (5, 'free', 'null', 'null'),
 (6, 'free', 'null', 'null'),
 (7, 'free', 'null', 'null'),
 (8, 'free', 'null', 'null'),
 (9, 'free', 'null', 'null'),
 (10, 'free', 'null', 'null'),
 (11, 'free', 'null', 'null'),
 (12, 'free', 'null', 'null'),
 (13, 'free', 'null', 'null'),
 (14, 'free', 'null', 'null'),
 (15, 'free', 'null', 'null'),
 (16, 'free', 'null', 'null'),
 (17, 'free', 'null', 'null'),
 (18, 'free', 'null', 'null'),
 (19, 'free', 'null', 'null'),
 (20, 'free', 'null', 'null'),
 (21, 'free', 'null', 'null'),
 (22, 'free', 'null', 'null'),
 (23, 'free', 'null', 'null'),
 (24, 'free', 'null', 'null'),
 (25, 'free', 'null', 'null'),
 (26, 'free', 'null', 'null'),
 (27, 'free', 'null', 'null'),
 (28, 'free', 'null', 'null'),
 (29, 'free', 'null', 'null'),
 (30, 'free', 'null', 'null');

CREATE TABLE `master`.`notification` (
  `notificationID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `action` varchar(255) NOT NULL,
  `created` varchar(255) NOT NULL,
   PRIMARY KEY  (`notificationID`)
) ENGINE = MyISAM;


COMMIT;

