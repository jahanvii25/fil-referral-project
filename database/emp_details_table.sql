USE referraldb;
DROP TABLE IF EXISTS Emp_Details;
CREATE TABLE Emp_Details(
    Email VARCHAR(20) NOT NULL,
    Pass VARCHAR(1000) NOT NULL,
    Emp_Role VARCHAR(200) NOT NULL,
    primary key (Email)
    );
INSERT INTO Emp_Details(Email, Pass, Emp_Role)
VALUE ("ppriyam@gmail.com", "P@12345", "User"),
("riya21@gmail.com", "R@6789", "User"),
("admin@gmail.com", "A@2511", "Admin"),
("kumarravi@gmail.com", "KR@123456", "User");