DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;

CREATE TABLE departments(
  id INT AUTO_INCREMENT,
  name VARCHAR(111) NOT NULL,
	PRIMARY KEY (id)
);
  
  
CREATE TABLE roles(
  id INT AUTO_INCREMENT,
  title VARCHAR(111) NOT NULL,
  salary INT(111),
  department_id INT(111),
    PRIMARY KEY (id)
);

  
CREATE TABLE employees(
  id INT AUTO_INCREMENT,
  first_name varchar(111),
  last_name varchar(111),
  role_id int(111),
  manager_id INT(111) DEFAULT NULL,
    PRIMARY KEY (id)
);



