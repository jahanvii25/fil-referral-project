CREATE TABLE refferal_Details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    contact VARCHAR(20),
    email VARCHAR(100),
    relationship_with_person VARCHAR(50),
    address VARCHAR(255),
    city VARCHAR(100),
    pincode VARCHAR(20)
);

INSERT INTO refferal_Details (name, contact, email, relationship_with_person, address, city, pincode)
VALUES ('Jane Smith', '9876543210', 'jane@example.com', 'Colleague', '456 Elm St', 'Los Angeles', '90001');