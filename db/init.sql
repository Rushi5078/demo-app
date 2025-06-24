CREATE DATABASE IF NOT EXISTS company;
USE company;

CREATE TABLE IF NOT EXISTS employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  department VARCHAR(100),
  salary DECIMAL(10,2)
);

INSERT INTO employee (name, department, salary) VALUES
('Alice', 'Engineering', 70000),
('Bob', 'HR', 50000);
