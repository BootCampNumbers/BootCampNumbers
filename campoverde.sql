-- psql -U kennethso -d campoverde -a -f "campoverde.sql";

-- CREATE DATABASE campoverde;

-- \c campoverde;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Outcomes'
-- 
-- ---

DROP TABLE IF EXISTS Outcomes;
    

CREATE TABLE Outcomes (
  id SERIAL,
  applications_sent INTEGER NULL DEFAULT NULL,
  year INTEGER NULL DEFAULT NULL,
  months_to_hire INTEGER NULL DEFAULT NULL,
  user_id INTEGER NOT NULL,
  bootcamp_id INTEGER NOT NULL DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);



-- ---
-- Table 'Offers'
-- 
-- ---

DROP TABLE IF EXISTS Offers;
    
CREATE TABLE Offers (
  id SERIAL,
  salary INTEGER NOT NULL DEFAULT NULL,
  position VARCHAR(30) NOT NULL DEFAULT NULL,
  taken BOOLEAN NOT NULL DEFAULT NULL,
  company_id INTEGER NOT NULL DEFAULT NULL,
  outcome_id INTEGER NOT NULL DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS Users;
    
CREATE TABLE Users (
  id SERIAL,
  email VARCHAR(30) NULL DEFAULT NULL,
  github VARCHAR(30) NULL DEFAULT NULL,
  first_name VARCHAR(30) NULL DEFAULT NULL,
  last_name VARCHAR(30) NULL DEFAULT NULL,
  minority BOOLEAN NULL DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Bootcamps'
-- 
-- ---

DROP TABLE IF EXISTS Bootcamps;
    
CREATE TABLE Bootcamps (
  id SERIAL,
  name VARCHAR(30) NOT NULL DEFAULT NULL,
  campus_id INTEGER NOT NULL DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Campuses'
-- 
-- ---

DROP TABLE IF EXISTS Campuses;
    
CREATE TABLE Campuses (
  id SERIAL,
  abbreviation VARCHAR(3) NULL DEFAULT NULL,
  name VARCHAR(30) NOT NULL DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Companies'
-- 
-- ---

DROP TABLE IF EXISTS Companies;
    
CREATE TABLE Companies (
  id SERIAL,
  name VARCHAR(30) NOT NULL DEFAULT NULL,
  icon_link TEXT NOT NULL DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Sessions'
-- 
-- ---

DROP TABLE IF EXISTS Sessions;
    
CREATE TABLE Sessions (
  id SERIAL,
  user_id INTEGER NOT NULL,
  access_token VARCHAR(50) NOT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);


-- ---
-- Foreign Keys 
-- ---

ALTER TABLE Outcomes ADD FOREIGN KEY (user_id) REFERENCES Users (id);
ALTER TABLE Outcomes ADD FOREIGN KEY (bootcamp_id) REFERENCES Bootcamps (id);
ALTER TABLE Offers ADD FOREIGN KEY (company_id) REFERENCES Companies (id);
ALTER TABLE Offers ADD FOREIGN KEY (outcome_id) REFERENCES Outcomes (id);
ALTER TABLE Bootcamps ADD FOREIGN KEY (campus_id) REFERENCES Campuses (id);
ALTER TABLE Sessions ADD FOREIGN KEY (user_id) REFERENCES Users (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Outcomes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Offers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Bootcamps` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Campuses` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Companies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'anastasia.parilla@gmail.com', 'aparilla', 'Anastasia', 'Parilla', TRUE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'leo.grimm@gmail.com', 'leogrim', 'Leo', 'Grim', FALSE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'matthew.chong@gmail.com', 'matthewchong', 'Matthew', 'Chong', FALSE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'sarah.hoffman@gmail.com', 'shoffman', 'Sarah', 'Hoffman', TRUE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'ed.mcmillan@gmail.com', 'emcmillan', 'Ed', 'McMillan', TRUE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'holly.lester@gmail.com', 'hlester', 'Holly', 'Lester', FALSE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'janebills@gmail.com', 'jbills', 'Jane', 'Bills', FALSE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'hectorramirez@gmail.com', 'hramirez', 'Hector', 'Ramirez', TRUE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'lucy.hoague@gmail.com', 'lucyhoage', 'Lucy', 'Hoague', TRUE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'jeffbianco@gmail.com', 'jeffbianco', 'Jeff', 'Bianco', FALSE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'greggomez@gmail.com', 'greggomez', 'Greg', 'Gomez', FALSE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'jessicawen@gmail.com', 'jessicawen', 'Jessica', 'Wen', TRUE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'preenapatel@gmail.com', 'preenapatel', 'Preena', 'Patel', TRUE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'mattdavis@gmail.com', 'mattdavis', 'Matt', 'Davis', FALSE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'nickyang@gmail.com', 'nickyang', 'Nick', 'Yang', FALSE, current_timestamp, current_timestamp);
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'billdenza@gmail.com', 'billdenza', 'Bill', 'Denza', TRUE, current_timestamp, current_timestamp);

INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'San Francisco', current_timestamp, current_timestamp);
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'Los Angeles', current_timestamp, current_timestamp);
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'New York', current_timestamp, current_timestamp);
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'Austin', current_timestamp, current_timestamp);
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'Washington DC', current_timestamp, current_timestamp);
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'Atlanta', current_timestamp, current_timestamp);
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'London', current_timestamp, current_timestamp);
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'Seattle', current_timestamp, current_timestamp);
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'Chicago', current_timestamp, current_timestamp);

INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Hack Reactor', 1, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Hack Reactor', 2, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Hack Reactor', 3, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Hack Reactor', 4, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 1, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 2, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 3, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 4, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 5, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 6, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 7, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 8, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Dev Bootcamp', 1, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Dev Bootcamp', 2, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Dev Bootcamp', 3, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Dev Bootcamp', 4, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Dev Bootcamp', 5, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Dev Bootcamp', 6, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Dev Bootcamp', 7, current_timestamp, current_timestamp);
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Dev Bootcamp', 8, current_timestamp, current_timestamp);


INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 26, 2017, 8, 1, 1, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 52, 2017, 5, 2, 1, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 34, 2017, 6, 3, 2, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 45, 2017, 3, 4, 1, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 16, 2017, 8, 5, 5, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 23, 2017, 5, 6, 1, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 43, 2017, 6, 7, 3, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 23, 2017, 4, 8, 4, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 46, 2017, 3, 9, 1, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 78, 2017, 2, 10, 4, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 67, 2017, 4, 11, 4, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 76, 2017, 10, 12, 5, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 23, 2017, 8, 13, 2, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 34, 2017, 8, 14, 2, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 56, 2017, 9, 15, 3, current_timestamp, current_timestamp);
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 56, 2017, 3, 16, 4, current_timestamp, current_timestamp);

INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Google', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Facebook', 'https://cdn.worldvectorlogo.com/logos/facebook-3.svg', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Lyft', 'https://www.codot.gov/safety/seatbelts-carseats/assets/year-of-the-seat-belt/lyft.jpg', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Yelp', 'https://www.yelpblog.com/wp-content/uploads/2016/02/YELP-LOGO.png', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Stripe', 'https://stripe.com/img/v3/home/twitter.png', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Uber', 'https://pbs.twimg.com/profile_images/694843665190141952/oYmuECxF.jpg', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Dropbox', 'https://cfl.dropboxstatic.com/static/images/about/dropbox_logo_glyph_2015-vfl4ZOqXa.svg', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Airbnb', 'https://s-media-cache-ak0.pinimg.com/originals/bc/61/06/bc6106937cb6c2294418b1c4a1f3696f.png', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Snapchat', 'https://cdn.worldvectorlogo.com/logos/snapchat.svg', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Apple', 'http://logok.org/wp-content/uploads/2014/04/Apple-Logo-black.png', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Foursquare', 'http://www.findmysoft.com/img/news/inside/Foursquare-new-logo_1406188551.jpg', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Instacart', 'http://is2.mzstatic.com/image/pf/us/r30/Purple7/v4/e7/bb/a4/e7bba4ad-7d2d-ecbd-20fc-af362d3a7b15/mzl.crgnkkts.jpg', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Postmates', 'https://postmates.com/static/img/fb-share.408e36b618f5.gif', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Medium', 'http://www.underconsideration.com/brandnew/archives/medium_logo_detail_icon.png', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Square', 'http://primmco.com/wp-content/uploads/2015/06/Square-logo-black-604x270.jpeg', current_timestamp, current_timestamp);
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Paypal', 'http://logok.org/wp-content/uploads/2014/05/Paypal-logo-pp-2014.png', current_timestamp, current_timestamp);

INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', TRUE, 1, 1, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 2, 1, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 3, 1, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 4, 1, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 115000, 'Software Engineer', TRUE, 5, 2, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 6, 2, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 7, 2, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 8, 2, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 135000, 'Software Engineer', TRUE, 9, 3, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 10, 3, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 11, 3, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 12, 3, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 125000, 'Software Engineer', TRUE, 13, 4, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 14, 4, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 15, 4, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 16, 4, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', TRUE, 1, 5, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 2, 5, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 3, 5, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 4, 5, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 115000, 'Software Engineer', TRUE, 5, 6, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 6, 6, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 7, 6, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 8, 6, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 135000, 'Software Engineer', TRUE, 9, 7, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 10, 7, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 11, 7, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 12, 7, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 125000, 'Software Engineer', TRUE, 13, 8, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 14, 8, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 15, 8, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 16, 8, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', TRUE, 1, 9, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 2, 9, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 3, 9, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 4, 9, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 115000, 'Software Engineer', TRUE, 5, 10, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 6, 10, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 7, 10, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 8, 10, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 135000, 'Software Engineer', TRUE, 9, 11, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 10, 11, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 11, 11, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 12, 11, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 125000, 'Software Engineer', TRUE, 13, 12, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 14, 12, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 15, 12, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 16, 12, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', TRUE, 1, 13, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 2, 13, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 3, 13, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 4, 13, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 115000, 'Software Engineer', TRUE, 5, 14, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 6, 14, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 7, 14, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 8, 14, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 135000, 'Software Engineer', TRUE, 9, 15, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 10, 15, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 11, 15, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 12, 15, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 125000, 'Software Engineer', TRUE, 13, 16, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 14, 16, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 15, 16, current_timestamp, current_timestamp);
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 16, 16, current_timestamp, current_timestamp);





