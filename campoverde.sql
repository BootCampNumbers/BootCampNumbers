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
  applications_sent INTEGER NOT NULL DEFAULT NULL,
  year INTEGER NOT NULL DEFAULT NULL,
  months_to_hire INTEGER NOT NULL DEFAULT NULL,
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
  email VARCHAR(30) NOT NULL DEFAULT NULL,
  github VARCHAR(30) NOT NULL DEFAULT NULL,
  first_name VARCHAR(30) NOT NULL DEFAULT NULL,
  last_name VARCHAR(30) NOT NULL DEFAULT NULL,
  minority BOOLEAN NOT NULL DEFAULT NULL,
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
(DEFAULT, 'anastasia.parilla@gmail.com', 'aparilla', 'Anastasia', 'Parilla', TRUE, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'leo.grimm@gmail.com', 'leogrim', 'Leo', 'Grim', FALSE, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'matthew.chong@gmail.com', 'matthewchong', 'Matthew', 'Chong', FALSE, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Users (id, email, github, first_name, last_name, minority, created_at, updated_at) VALUES
(DEFAULT, 'sarah.hoffman@gmail.com', 'shoffman', 'Sarah', 'Hoffman', TRUE, '2017-06-26 15:36:38', '2017-06-26 15:36:38');

INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'San Francisco', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'Los Angeles', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'New York', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Campuses (id, name, created_at, updated_at) VALUES
(DEFAULT, 'Seattle', '2017-06-26 15:36:38', '2017-06-26 15:36:38');

INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Hack Reactor', 1, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Hack Reactor', 2, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'Hack Reactor', 3, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 1, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 2, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Bootcamps (id, name, campus_id, created_at, updated_at) VALUES
(DEFAULT, 'General Assembly', 3, '2017-06-26 15:36:38', '2017-06-26 15:36:38');


INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 26, 2017, 8, 1, 1, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 52, 2017, 5, 2, 1, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 34, 2017, 6, 3, 2, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Outcomes (id, applications_sent, year, months_to_hire, user_id, bootcamp_id, created_at, updated_at) VALUES
(DEFAULT, 45, 2017, 3, 4, 4, '2017-06-26 15:36:38', '2017-06-26 15:36:38');

INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Google', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Facebook', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');(DEFAULT, 'Snapchat', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Lyft', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Yelp', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Stripe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Uber', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Dropbox', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Airbnb', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Optimizely', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Apple', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Foursquare', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Instacart', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Postmates', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Medium', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Square', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Companies (id, name, icon_link, created_at, updated_at) VALUES
(DEFAULT, 'Paypal', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png', '2017-06-26 15:36:38', '2017-06-26 15:36:38');

INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', TRUE, 1, 1, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 2, 1, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 3, 1, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 4, 1, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 115000, 'Software Engineer', TRUE, 5, 2, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 6, 2, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 7, 2, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 8, 2, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 135000, 'Software Engineer', TRUE, 9, 3, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 10, 3, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 11, 3, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 12, 3, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 125000, 'Software Engineer', TRUE, 13, 4, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 110000, 'Software Engineer', FALSE, 14, 4, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 120000, 'Software Engineer', FALSE, 15, 4, '2017-06-26 15:36:38', '2017-06-26 15:36:38');
INSERT INTO Offers (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
(DEFAULT, 100000, 'Software Engineer', FALSE, 16, 4, '2017-06-26 15:36:38', '2017-06-26 15:36:38');





