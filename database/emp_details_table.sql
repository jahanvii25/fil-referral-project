USE referraldb;
DROP TABLE IF EXISTS Emp_Details;
CREATE TABLE Emp_Details(
    Email VARCHAR(20) NOT NULL,
    Pass VARCHAR(1000) NOT NULL,
    primary key (Email)
    );
INSERT INTO Emp_Details(Email, Pass)
VALUE ("ppriyam@gmail.com", "P@12345"),
("riya21@gmail.com", "R6789"),
("kumarravi@gmail.com", "KR123456");

SELECT * FROM Emp_Details;
